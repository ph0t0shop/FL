// FUCK CSP REPORTS!
// FUCK CSP REPORTS!

window.customDistanceSearch = {
    enabled: function() {
        return false;
    },
    distanceValue: function() {
        return -1;
    },
    search: function() {
        const elem = document.querySelector(".is-widget-container-fuel_type .ais-RefinementList-item");
        // elem.click();
        // elem.click();
    }
};

(function () {
    (new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            for (const node of mutation.addedNodes) {
                if (node.classList?.contains("is-widget-container-buildyear")) {
                    observer.disconnect();
                    const distanceSlider = document.createElement("div");
                    distanceSlider.innerHTML = /*html*/`
<div class="ais-Panel">
    <div class="ais-Panel-header">
        <span>
            <div class="name">Afstand</div>
        </span>
    </div>
    <div class="ais-Panel-body">
        <div>
            <div class="ais-RangeSlider" id="distance-slider-bar">
                <div class="rheostat rheostat-horizontal" style="position: relative;">
                    <div class="rheostat-background"></div>
                    <div class="rheostat-handle rheostat-handle-upper" role="slider" style="left: 100%; position: absolute;" tabindex="0" id="distance-handle">
                        <div class="rheostat-tooltip" style="white-space: nowrap; user-select: none;">Alle afstanden</div>
                    </div>
                    <div class="rheostat-progress" style="left: 0; width: 100%;" id="distance-progress"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
                    node.insertAdjacentElement("afterend", distanceSlider);

                    const distanceSliderBar = distanceSlider.querySelector("#distance-slider-bar");
                    const distanceHandle = distanceSlider.querySelector("#distance-handle");
                    const distanceHandleLabel = distanceHandle.firstElementChild;
                    const distanceProgress = distanceSlider.querySelector("#distance-progress");

                    let sliding = false;
                    let percentage = 100;
                    let selectedThreshold = "95";

                    const thresholds = ["0", "5", "10", "15", "28.5", "40", "52.5", "65", "75", "89", "95", "1000"];

                    // 20, 30, 40, 50, 75, 100, 125, 150, 175, 200, Alle afstanden

                    const thresholdMap = {
                        "0": ["20 km", 20000],
                        "5": ["30 km", 30000],
                        "10": ["40 km", 40000],
                        "15": ["50 km", 50000],
                        "28.5": ["75 km", 75000],
                        "40": ["100 km", 100000],
                        "52.5": ["125 km", 125000],
                        "65": ["150 km", 150000],
                        "75": ["175 km", 175000],
                        "89": ["200 km", 200000],
                        "95": ["Alle afstanden", -1]
                    };

                    function setPercentage(perc, discretize = false) {
                        percentage = perc;
                        selectedThreshold = "0";

                        for (const threshold of thresholds) {
                            if (percentage < parseFloat(threshold)) {
                                break;
                            }
                            selectedThreshold = threshold;
                        }

                        if (discretize) {
                            if (selectedThreshold === "95") {
                                percentage = 100;
                            } else {
                                percentage = parseFloat(selectedThreshold);
                            }
                        }

                        // UI
                        distanceHandleLabel.textContent = thresholdMap[selectedThreshold][0];
                        distanceHandle.style.left = percentage + "%";
                        distanceProgress.style.width = percentage + "%";
                    }

                    window.customDistanceSearch.enabled = function() {
                        return selectedThreshold !== "95";
                    };

                    window.customDistanceSearch.distanceValue = function() {
                        console.log("Distance value gotten: ", thresholdMap[selectedThreshold][1]);
                        return thresholdMap[selectedThreshold][1];
                    };

                    distanceHandle.addEventListener("pointerdown", (event) => {
                        sliding = true;
                    });

                    document.addEventListener("pointerup", (_event) => {
                        if (sliding) {
                            setPercentage(percentage, true);
                            window.customDistanceSearch.search();
                        }
                        sliding = false;
                    });

                    document.addEventListener("pointermove", (event) => {
                        if (!sliding) {
                            return;
                        }
                        const barRect = distanceSliderBar.getBoundingClientRect();
                        const x = Math.min(barRect.right, Math.max(barRect.left, event.clientX));

                        setPercentage((x - barRect.left) / (barRect.right - barRect.left) * 100);
                    });
                    
                }
            }
        };
    })).observe(document.body, {
        childList: true,
        subtree: true
    })
})();

requirejs(['algoliaBundle', 'Magento_Catalog/js/price-utils', 'jquery/jquery.cookie'], function (algoliaBundle, priceUtils) {
    algoliaBundle.$(function ($) {
        console.log(algoliaBundle);
        /** We have nothing to do here if instantsearch is not enabled **/
        if (!algoliaConfig.instant.enabled || !(algoliaConfig.isSearchPage || !algoliaConfig.autocomplete.enabled)) {
            return;
        }

        if (!algoliaConfig.autocomplete.enabled && $(algoliaConfig.autocomplete.selector).length == 0) {
            return;
        }

        if ($(algoliaConfig.instant.selector).length <= 0) {
            throw '[Algolia] Invalid instant-search selector: ' + algoliaConfig.instant.selector;
        }

        if (algoliaConfig.autocomplete.enabled && $(algoliaConfig.instant.selector).find(algoliaConfig.autocomplete.selector).length > 0) {
            throw '[Algolia] You can\'t have a search input matching "' + algoliaConfig.autocomplete.selector +
            '" inside you instant selector "' + algoliaConfig.instant.selector + '"';
        }

        var findAutocomplete = algoliaConfig.autocomplete.enabled && $(algoliaConfig.instant.selector).find('#algolia-autocomplete-container').length > 0;
        if (findAutocomplete) {
            $(algoliaConfig.instant.selector).find('#algolia-autocomplete-container').remove();
        }

        /** BC of old hooks **/
        if (typeof algoliaHookBeforeInstantsearchInit === 'function') {
            algolia.registerHook('beforeInstantsearchInit', algoliaHookBeforeInstantsearchInit);
        }

        if (typeof algoliaHookBeforeWidgetInitialization === 'function') {
            algolia.registerHook('beforeWidgetInitialization', algoliaHookBeforeWidgetInitialization);
        }

        if (typeof algoliaHookBeforeInstantsearchStart === 'function') {
            algolia.registerHook('beforeInstantsearchStart', algoliaHookBeforeInstantsearchStart);
        }

        if (typeof algoliaHookAfterInstantsearchStart === 'function') {
            algolia.registerHook('afterInstantsearchStart', algoliaHookAfterInstantsearchStart);
        }

        /**
         * Setup wrapper
         *
         * For templating is used Hogan library
         * Docs: http://twitter.github.io/hogan.js/
         **/
        var wrapperTemplate = algoliaBundle.Hogan.compile($('#instant_wrapper_template').html());
        var instant_selector = !algoliaConfig.autocomplete.enabled ? algoliaConfig.autocomplete.selector : "#instant-search-bar";

        var div = document.createElement('div');
        $(div).addClass('algolia-instant-results-wrapper');

        $(algoliaConfig.instant.selector).addClass('algolia-instant-replaced-content');
        $(algoliaConfig.instant.selector).wrap(div);

        $('.algolia-instant-results-wrapper').append('<div class="algolia-instant-selector-results"></div>');
        $('.algolia-instant-selector-results').html(wrapperTemplate.render({
            second_bar: algoliaConfig.autocomplete.enabled,
            findAutocomplete: findAutocomplete,
            config: algoliaConfig.instant,
            translations: algoliaConfig.translations
        })).show();

        /**
         * Initialise instant search
         * For rendering instant search page is used Algolia's instantsearch.js library
         * Docs: https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/
         **/

        var ruleContexts = ['magento_filters', '']; // Empty context to keep BC for already create rules in dashboard
        if (algoliaConfig.request.categoryId.length > 0) {
            ruleContexts.push('magento-category-' + algoliaConfig.request.categoryId);
        }

        if (algoliaConfig.request.landingPageId.length > 0) {
            ruleContexts.push('magento-landingpage-' + algoliaConfig.request.landingPageId);
        }

        var searchClient = algoliaBundle.algoliasearch(algoliaConfig.applicationId, algoliaConfig.apiKey);
        var indexName = algoliaConfig.indexName + '_products';
        var searchParameters = {
            hitsPerPage: algoliaConfig.hitsPerPage,
            ruleContexts: ruleContexts
        };

        var instantsearchOptions = {
            searchClient: searchClient,
            indexName: indexName,
            searchFunction: function (helper) {
                console.log(helper);
                console.log("yay?");
                console.log(window.customDistanceSearch.enabled());
                if (window.customDistanceSearch.enabled()) {
                    console.log("yay!");
                    helper.setQueryParameter("aroundLatLng", "52.2133499, 5.1686773");
                    helper.setQueryParameter("aroundRadius", window.customDistanceSearch.distanceValue()); // meter
                } else {
                }
                console.log(helper.getQuery());
                helper.search();
                $('.algolia-instant-replaced-content').hide();
                $('.algolia-instant-selector-results').show();
            },
            routing: {
                router: algoliaBundle.instantsearch.routers.history({
                    parseURL: function (qsObject) {
                        var location = qsObject.location,
                            qsModule = qsObject.qsModule;
                        const queryString = location.hash ? location.hash : location.search;
                        return qsModule.parse(queryString.slice(1))
                    },
                    createURL: function (qsObject) {
                        var qsModule = qsObject.qsModule,
                            routeState = qsObject.routeState,
                            location = qsObject.location,
                            pathname = location.pathname;
                        const protocol = location.protocol,
                            hostname = location.hostname,
                            port = location.port ? location.port : '',
                            hash = location.hash;

                        const queryString = qsModule.stringify(routeState);
                        const portWithPrefix = port === '' ? '' : ':' + port;
                        // IE <= 11 has no location.origin or buggy. Therefore we don't rely on it

                        if(!pathname || pathname === '/'){
                            pathname = '/aanbod';
                        }

                        if (!routeState || Object.keys(routeState).length === 0)
                            return protocol + '//' + hostname + portWithPrefix + pathname;
                        else
                            return protocol + '//' + hostname + portWithPrefix + pathname + '?' + queryString;
                    },
                }),
                stateMapping: {
                    stateToRoute: function (uiState) {
                        var productIndexName = algoliaConfig.indexName + '_products';
                        var uiStateProductIndex = uiState[productIndexName] || {};
                        var routeParameters = {};
                        if (algoliaConfig.facets) {
                            for(var i=0; i<algoliaConfig.facets.length; i++) {
                                var currentFacet = algoliaConfig.facets[i];
                                // Handle refinement facets
                                if (currentFacet.attribute != 'categories' && (currentFacet.type == 'conjunctive' || currentFacet.type == 'disjunctive')) {
                                    routeParameters[currentFacet.attribute] = (uiStateProductIndex.refinementList &&
                                        uiStateProductIndex.refinementList[currentFacet.attribute] &&
                                        uiStateProductIndex.refinementList[currentFacet.attribute].join('~'));
                                }
                                // Handle categories
                                if (currentFacet.attribute == 'categories' && !algoliaConfig.isCategoryPage) {
                                    routeParameters[currentFacet.attribute] = (uiStateProductIndex.hierarchicalMenu &&
                                        uiStateProductIndex.hierarchicalMenu[currentFacet.attribute+ '.level0'] &&
                                        uiStateProductIndex.hierarchicalMenu[currentFacet.attribute+ '.level0'].join('~'));
                                }
                                // Handle sliders
                                if (currentFacet.type == 'slider' || currentFacet.type == 'priceRanges') {
                                    routeParameters[currentFacet.attribute] = (uiStateProductIndex.range &&
                                        uiStateProductIndex.range[currentFacet.attribute] &&
                                        uiStateProductIndex.range[currentFacet.attribute]);
                                }
                                // Handle menuSelect facets
                                if (currentFacet.attribute != 'categories' && (currentFacet.type == 'conjunctive' || currentFacet.type == 'disjunctive')) {
                                    routeParameters[currentFacet.attribute] = (uiStateProductIndex.menu &&
                                        uiStateProductIndex.menu[currentFacet.attribute]);
                                }

                                // Handle custom menuSelect facets
                                if (currentFacet.attribute == 'brand' ||
                                    currentFacet.attribute == 'model' ||
                                    currentFacet.attribute == 'bodywork' ||
                                    currentFacet.attribute == 'vehicle_type' ||
                                    currentFacet.attribute == 'car_extended' ||
                                    currentFacet.attribute == 'car_raised' ||
                                    currentFacet.attribute == 'car_cabine' ||
                                    currentFacet.attribute == 'fuel_type' ||
                                    currentFacet.attribute == 'btw_marge' ||
                                    currentFacet.attribute == 'transmission' ||
                                    currentFacet.attribute == 'number_doors' ||
                                    currentFacet.attribute == 'lacquer_type' ||
                                    currentFacet.attribute == 'lining' ||
                                    currentFacet.attribute == 'interior_color' ||
                                    currentFacet.attribute == 'number_cylinders' ||
                                    currentFacet.attribute == 'car_new' ||
                                    currentFacet.attribute == 'color') {

                                    // Get disjunctive values from the refinementList state object
                                    var facetValues = (uiStateProductIndex.refinementList &&
                                        uiStateProductIndex.refinementList[currentFacet.attribute])

                                    if(facetValues === undefined){
                                        continue;
                                    }

                                    routeParameters[currentFacet.attribute] = facetValues.join('~');
                                }

                                // Handle custom "lease price" refinement logic
                                if (currentFacet.type == 'priceRanges' && currentFacet.attribute === 'price'+algoliaConfig.priceKey) {
                                    currentFacetAttribute = "price_EUR_default";
                                    // Get disjunctive values from the refinementList state object
                                    const facetValues = (uiStateProductIndex.refinementList &&
                                        uiStateProductIndex.refinementList[currentFacet.attribute])

                                    if(facetValues === undefined){
                                        continue;
                                    }

                                    const lowestValue = Math.min(...facetValues);
                                    const highestValue = Math.max(...facetValues);

                                    routeParameters[currentFacetAttribute] = `${lowestValue}:${highestValue}`;
                                    routeParameters['price.EUR.default'] = routeParameters[currentFacetAttribute];
                                }
                            };
                        }
                        routeParameters['sortBy'] = uiStateProductIndex.sortBy;
                        routeParameters['page'] = uiStateProductIndex.page;
                        return routeParameters;
                    },
                    routeToState: function (routeParameters) {
                        var productIndexName = algoliaConfig.indexName + '_products';
                        var uiStateProductIndex = {}

                        uiStateProductIndex['query'] = routeParameters.q == '__empty__' ? '' : routeParameters.q;
                        if (algoliaConfig.isLandingPage && typeof uiStateProductIndex['query'] === 'undefined' && algoliaConfig.landingPage.query != '') {
                            uiStateProductIndex['query'] = algoliaConfig.landingPage.query;
                        }

                        var landingPageConfig = algoliaConfig.isLandingPage && algoliaConfig.landingPage.configuration ?
                            JSON.parse(algoliaConfig.landingPage.configuration) :
                            {};

                        uiStateProductIndex['refinementList'] = {};
                        uiStateProductIndex['hierarchicalMenu'] = {};
                        uiStateProductIndex['range'] = {};
                        if (algoliaConfig.facets) {
                            for(var i=0; i<algoliaConfig.facets.length; i++) {
                                var currentFacet = algoliaConfig.facets[i];
                                // Handle refinement facets
                                if (currentFacet.attribute != 'categories' && (currentFacet.type == 'conjunctive' || currentFacet.type == 'disjunctive')) {
                                    uiStateProductIndex['refinementList'][currentFacet.attribute] = routeParameters[currentFacet.attribute] && routeParameters[currentFacet.attribute].split('~');
                                    if (algoliaConfig.isLandingPage &&
                                        typeof uiStateProductIndex['refinementList'][currentFacet.attribute] === 'undefined' &&
                                        currentFacet.attribute in landingPageConfig) {
                                        uiStateProductIndex['refinementList'][currentFacet.attribute] = landingPageConfig[currentFacet.attribute].split('~');
                                    }
                                }
                                // Handle categories facet
                                if (currentFacet.attribute == 'categories' && !algoliaConfig.isCategoryPage) {
                                    uiStateProductIndex['hierarchicalMenu']['categories.level0'] = routeParameters['categories'] && routeParameters['categories'].split('~');
                                    if (algoliaConfig.isLandingPage &&
                                        typeof uiStateProductIndex['hierarchicalMenu']['categories.level0'] === 'undefined' &&
                                        'categories.level0' in landingPageConfig) {
                                        uiStateProductIndex['hierarchicalMenu']['categories.level0'] = landingPageConfig['categories.level0'].split(' /// ');
                                    }
                                }
                                if (currentFacet.attribute == 'categories' && algoliaConfig.isCategoryPage) {
                                    uiStateProductIndex['hierarchicalMenu']['categories.level0'] = [algoliaConfig.request.path];
                                }

                                if (window.location.search.indexOf("price_EUR_default") !== -1) {
                                    var getUrlParameter = function getUrlParameter(sParam) {
                                        var sPageURL = window.location.search.substring(1),
                                            sURLVariables = sPageURL.split('&'),
                                            sParameterName,
                                            i;

                                        for (i = 0; i < sURLVariables.length; i++) {
                                            sParameterName = sURLVariables[i].split('=');

                                            if (sParameterName[0] === sParam) {
                                                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                                            }
                                        }
                                        return false;
                                    };

                                    uiStateProductIndex['range']['price.EUR.default'] = getUrlParameter('price_EUR_default');
                                }

                                if (currentFacetAttribute == "price.EUR.default") {
                                    if (uiStateProductIndex['range'][currentFacetAttribute] !== "undefined") {
                                        currentFacetAttribute = "price_EUR_default";
                                        uiStateProductIndex['range'][currentFacetAttribute] = routeParameters['price.EUR.default'] && routeParameters['price.EUR.default'];
                                        uiStateProductIndex['range']['price.EUR.default'] = uiStateProductIndex['range']['price_EUR_default'];
                                    }

                                    if (algoliaConfig.isLandingPage &&
                                        typeof uiStateProductIndex['range'][currentFacetAttribute] === 'undefined' &&
                                        currentFacetAttribute in landingPageConfig) {

                                        var facetValue = '';
                                        if (typeof landingPageConfig[currentFacetAttribute]['>='] !== "undefined") {
                                            facetValue = landingPageConfig[currentFacetAttribute]['>='][0];
                                        }
                                        facetValue += ':';
                                        if (typeof landingPageConfig[currentFacetAttribute]['<='] !== "undefined") {
                                            facetValue += landingPageConfig[currentFacetAttribute]['<='][0];
                                        }
                                        uiStateProductIndex['range'][currentFacetAttribute] = facetValue;
                                    }
                                }

                                // Handle priceRanges
                                if (currentFacet.type == 'priceRanges' && currentFacetAttribute !== "price.EUR.default") {
                                    var currentFacetAttribute = currentFacet.attribute;
                                    if (currentFacetAttribute.indexOf("price") !== -1) {
                                        currentFacetAttribute += algoliaConfig.priceKey;
                                    }
                                    uiStateProductIndex['range'][currentFacetAttribute] = routeParameters[currentFacetAttribute] && routeParameters[currentFacetAttribute];
                                    if (algoliaConfig.isLandingPage &&
                                        typeof uiStateProductIndex['range'][currentFacetAttribute] === 'undefined' &&
                                        currentFacetAttribute in landingPageConfig) {

                                        var facetValue = '';
                                        if (typeof landingPageConfig[currentFacetAttribute]['>='] !== "undefined") {
                                            facetValue = landingPageConfig[currentFacetAttribute]['>='][0];
                                        }
                                        facetValue += ':';
                                        if (typeof landingPageConfig[currentFacetAttribute]['<='] !== "undefined") {
                                            facetValue += landingPageConfig[currentFacetAttribute]['<='][0];
                                        }
                                        uiStateProductIndex['range'][currentFacetAttribute] = facetValue;
                                    }
                                }

                                // Handle sliders
                                if (currentFacet.type == 'slider') {
                                    var currentFacetAttribute = currentFacet.attribute;
                                    // if (currentFacetAttribute.indexOf("price") !== -1) {
                                    //     currentFacetAttribute += algoliaConfig.priceKey;
                                    // }
                                    uiStateProductIndex['range'][currentFacetAttribute] = routeParameters[currentFacetAttribute] && routeParameters[currentFacetAttribute];
                                    if (algoliaConfig.isLandingPage &&
                                        typeof uiStateProductIndex['range'][currentFacetAttribute] === 'undefined' &&
                                        currentFacetAttribute in landingPageConfig) {

                                        var facetValue = '';
                                        if (typeof landingPageConfig[currentFacetAttribute]['>='] !== "undefined") {
                                            facetValue = landingPageConfig[currentFacetAttribute]['>='][0];
                                        }
                                        facetValue += ':';
                                        if (typeof landingPageConfig[currentFacetAttribute]['<='] !== "undefined") {
                                            facetValue += landingPageConfig[currentFacetAttribute]['<='][0];
                                        }
                                        uiStateProductIndex['range'][currentFacetAttribute] = facetValue;
                                    }
                                }
                            };
                        }
                        uiStateProductIndex['sortBy'] = routeParameters.sortBy;
                        uiStateProductIndex['page'] = routeParameters.page;


                        var uiState = {};
                        uiState[productIndexName] = uiStateProductIndex;

                        return uiState;
                    }
                }
            }
        };

        if (algoliaConfig.request.path.length > 0 && window.location.hash.indexOf('categories.level0') === -1) {
            if (algoliaConfig.areCategoriesInFacets === false) {
                searchParameters['facetsRefinements'] = { };
                searchParameters['facetsRefinements']['categories.level' + algoliaConfig.request.level] = [algoliaConfig.request.path];
            }
        }

        instantsearchOptions = algolia.triggerHooks('beforeInstantsearchInit', instantsearchOptions, algoliaBundle);

        var search = algoliaBundle.instantsearch(instantsearchOptions);

        search.client.addAlgoliaAgent('Magento2 integration (' + algoliaConfig.extensionVersion + ')');

        /** Prepare sorting indices data */
        algoliaConfig.sortingIndices.unshift({
            name: indexName,
            label: algoliaConfig.translations.relevance
        });

        /** Setup attributes for current refinements widget **/
        var attributes = [];
        $.each(algoliaConfig.facets, function (i, facet) {
            var name = facet.attribute;

            if (name === 'categories') {
                name = 'categories.level0';
            }

            if (name === 'price') {
                name = facet.attribute + algoliaConfig.priceKey
            }

            attributes.push({
                name: name,
                label: facet.label ? facet.label : facet.attribute
            });
        });

        var allWidgetConfiguration = {
            infiniteHits: {},
            hits: {},
            configure: searchParameters,
            custom: [
                /**
                 * Custom widget - this widget is used to refine results for search page or catalog page
                 * Docs: https://www.algolia.com/doc/guides/building-search-ui/widgets/create-your-own-widgets/js/
                 **/
                {
                    getWidgetSearchParameters: function(searchParameters) {
                        if (algoliaConfig.request.query.length > 0 && location.hash.length < 1) {
                            return searchParameters.setQuery(algoliaConfig.request.query)
                        }
                        return searchParameters;
                    },
                    init: function (data) {
                        var page = data.helper.state.page;

                        if (algoliaConfig.request.refinementKey.length > 0) {
                            data.helper.toggleRefine(algoliaConfig.request.refinementKey, algoliaConfig.request.refinementValue);
                        }

                        if (algoliaConfig.isCategoryPage) {
                            data.helper.addNumericRefinement('visibility_catalog', '=', 1);
                        } else {
                            data.helper.addNumericRefinement('visibility_search', '=', 1);
                        }

                        data.helper.setPage(page);
                    },
                    render: function (data) {

                        triggerDatalayer(data);

                        var algoliaIndex = data.instantSearchInstance.indexName;
                        countPrevFilters = 0;
                        $.each(data.renderState[algoliaIndex].currentRefinements.items, function() {

                            countPrevFilters += this.refinements.length;
                        })

                        sessionStorage.setItem("currentFilters", countPrevFilters);
                        // END: custom code for datalayer

                        if (!algoliaConfig.isSearchPage) {
                            if (data.results.query.length === 0 && data.results.nbHits === 0) {
                                $('.algolia-instant-replaced-content').show();
                                $('.algolia-instant-selector-results').hide();
                            } else {
                                $('.algolia-instant-replaced-content').hide();
                                $('.algolia-instant-selector-results').show();
                            }
                        }
                    }
                },
                /**
                 * Custom widget - Suggestions
                 * This widget renders suggestion queries which might be interesting for your customer
                 * Docs: https://www.algolia.com/doc/guides/building-search-ui/widgets/create-your-own-widgets/js/
                 **/
                {
                    suggestions: [],
                    init: function () {
                        if (algoliaConfig.showSuggestionsOnNoResultsPage) {
                            var $this = this;
                            $.each(algoliaConfig.popularQueries.slice(0, Math.min(4, algoliaConfig.popularQueries.length)), function (i, query) {
                                query = $('<div>').html(query).text(); //xss
                                $this.suggestions.push('<a href="' + algoliaConfig.baseUrl + '/catalogsearch/result/?q=' + encodeURIComponent(query) + '">' + query + '</a>');
                            });
                        }
                    },
                    render: function (data) {
                        if (data.results.hits.length === 0) {
                            var content = '<div class="no-results">';
                            content += '<div><b>' + algoliaConfig.translations.noProducts + ' "' + $("<div>").text(data.results.query).html() + '</b>"</div>';
                            content += '<div class="popular-searches">';

                            if (algoliaConfig.showSuggestionsOnNoResultsPage && this.suggestions.length > 0) {
                                content += '<div>' + algoliaConfig.translations.popularQueries + '</div>' + this.suggestions.join(', ');
                            }

                            content += '</div>';
                            content += algoliaConfig.translations.or + ' <a href="' + algoliaConfig.baseUrl + '/catalogsearch/result/?q=__empty__">' + algoliaConfig.translations.seeAll + '</a>'

                            content += '</div>';

                            $('#instant-empty-results-container').html(content);
                        } else {
                            $('#instant-empty-results-container').html('');
                        }
                    }
                }
            ],
            /**
             * searchBox
             * Docs: https://www.algolia.com/doc/api-reference/widgets/search-box/js/
             **/
            searchBox: {
                container: instant_selector,
                placeholder: algoliaConfig.translations.searchFor,
                showSubmit: false
            },
            /**
             * stats
             * Docs: https://www.algolia.com/doc/api-reference/widgets/stats/js/
             **/
            stats: {
                container: '#algolia-stats',
                templates: {
                    text: function (data) {
                        var hoganTemplate = algoliaBundle.Hogan.compile($('#instant-stats-template').html());

                        data.first = data.page * data.hitsPerPage + 1;
                        data.last = Math.min(data.page * data.hitsPerPage + data.hitsPerPage, data.nbHits);
                        data.seconds = data.processingTimeMS / 1000;
                        data.translations = window.algoliaConfig.translations;

                        return hoganTemplate.render(data)
                    }
                }
            },
            /**
             * sortBy
             * Docs: https://www.algolia.com/doc/api-reference/widgets/sort-by/js/
             **/
            sortBy: {
                container: '#algolia-sorts',
                items: algoliaConfig.sortingIndices.map(function (sortingIndice) {
                    return {
                        label: sortingIndice.label,
                        value: sortingIndice.name,
                    }
                })
            },
            /**
             * currentRefinements
             * Widget displays all filters and refinements applied on query. It also let your customer to clear them one by one
             * Docs: https://www.algolia.com/doc/api-reference/widgets/current-refinements/js/
             **/
            currentRefinements: {
                container: '#current-refinements',
                templates: {
                    item: $('#current-refinements-template').html()
                },
                includedAttributes: attributes.map(function (attribute) {
                    return attribute.name
                }),
                transformItems: function (items) {
                    return items.map(function (item) {
                        var attribute = attributes.filter(function (_attribute) {
                            return item.attribute === _attribute.name
                        })[0];
                        if (!attribute) return item;
                        item.label = attribute.label;
                        item.refinements.forEach(function (refinement) {
                            if (refinement.type !== 'hierarchical') return refinement;
                            var levels = refinement.label.split('///');
                            var lastLevel = levels[levels.length - 1];
                            refinement.label = lastLevel;
                        });
                        return item;
                    })
                }
            },

            /*
             * clearRefinements
             * Widget displays a button that lets the user clean every refinement applied to the search. You can control which attributes are impacted by the button with the options.
             * Docs: https://www.algolia.com/doc/api-reference/widgets/clear-refinements/js/
             **/
            clearRefinements: {
                container: '#clear-refinements',
                templates: {
                    resetLabel: algoliaConfig.translations.clearAll,
                },
                includedAttributes: attributes.map(function (attribute) {
                    if (!(algoliaConfig.isCategoryPage && attribute.name.indexOf('categories') > -1)) {
                        return attribute.name;
                    }
                }),
                cssClasses: {
                    button: ['action', 'primary']
                },
                transformItems: function (items) {
                    return items.map(function (item) {
                        var attribute = attributes.filter(function (_attribute) {
                            return item.attribute === _attribute.name
                        })[0];
                        if (!attribute) return item;
                        item.label = attribute.label;
                        return item;
                    })
                }
            },
            /*
             * queryRuleCustomData
             * The queryRuleCustomData widget displays custom data from Query Rules.
             * Docs: https://www.algolia.com/doc/api-reference/widgets/query-rule-custom-data/js/
             **/
            queryRuleCustomData: {
                container: '#algolia-banner',
                templates: {
                    default: '{{#items}} {{#banner}} {{{banner}}} {{/banner}} {{/items}}',
                }
            }
        };

        if (algoliaConfig.instant.infiniteScrollEnabled === true) {
            /**
             * infiniteHits
             * This widget renders all products into result page
             * Docs: https://www.algolia.com/doc/api-reference/widgets/infinite-hits/js/
             **/
            allWidgetConfiguration.infiniteHits = {
                container: '#instant-search-results-container',
                templates: {
                    empty: '',
                    item: $('#instant-hit-template').html(),
                    showMoreText: algoliaConfig.translations.showMore
                },
                cssClasses: {
                    loadPrevious: ['action', 'primary'],
                    loadMore: ['action', 'primary']
                },
                transformItems: function (items) {
                    return items.map(function (item) {
                        item.__indexName = search.helper.lastResults.index;
                        item = transformHit(item, algoliaConfig.priceKey, search.helper);
                        // FIXME: transformHit is a global
                        item.isAddToCartEnabled = algoliaConfig.instant.isAddToCartEnabled;
                        return item;
                    });
                },
                showPrevious: true,
                escapeHits: true
            };

            delete allWidgetConfiguration.hits;
        } else {
            /**
             * hits
             * This widget renders all products into result page
             * Docs: https://www.algolia.com/doc/api-reference/widgets/hits/js/
             **/
            allWidgetConfiguration.hits = {
                container: '#instant-search-results-container',
                templates: {
                    empty: '',
                    item: $('#instant-hit-template').html(),
                },
                transformItems: function (items) {
                    return items.map(function (item) {
                        item.__indexName = search.helper.lastResults.index;
                        item = transformHit(item, algoliaConfig.priceKey, search.helper);
                        // FIXME: transformHit is a global
                        item.isAddToCartEnabled = algoliaConfig.instant.isAddToCartEnabled;
                        item.algoliaConfig = window.algoliaConfig;

                        var dynamicBaseUrl = window.location.origin,
                            productUrl = item.url,
                            productUrlStripped = productUrl.split("/")[3];

                        item.dynamicBaseUrl = dynamicBaseUrl + "/" + productUrlStripped;
                        
                        return item;
                    })
                }
            };

            /**
             * pagination
             * Docs: https://www.algolia.com/doc/api-reference/widgets/pagination/js/
             **/
            allWidgetConfiguration.pagination = {
                container: '#instant-search-pagination-container',
                showFirst: false,
                showLast: false,
                showNext: true,
                showPrevious: true,
                totalPages: 1000,
                templates: {
                    previous: algoliaConfig.translations.previousPage,
                    next: algoliaConfig.translations.nextPage
                },
            };

            delete allWidgetConfiguration.infiniteHits;
        }

        /**
         * Here are specified custom attributes widgets which require special code to run properly
         * Custom widgets can be added to this object like [attribute]: function(facet, templates)
         * Function must return an array [<widget name>: string, <widget options>: object]
         **/
        var customAttributeFacet = {
            categories: function (facet, templates) {
                var hierarchical_levels = [];
                for (var l = 0; l < 10; l++) {
                    hierarchical_levels.push('categories.level' + l.toString());
                }

                var hierarchicalMenuParams = {
                    container: facet.wrapper.appendChild(createISWidgetContainer(facet.attribute)),
                    attributes: hierarchical_levels,
                    separator: ' /// ',
                    templates: templates,
                    alwaysGetRootLevel: true,
                    limit: algoliaConfig.maxValuesPerFacet,
                    sortBy: ['name:asc']
                };

                hierarchicalMenuParams.templates.item = '' +
                    '<a class="{{cssClasses.link}} {{#isRefined}}{{cssClasses.link}}--selected{{/isRefined}}" href="{{url}}">{{label}}' + ' ' +
                    '<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>' + ' ' +
                    '{{#isRefined}}<span class="cross-circle"></span>{{/isRefined}}' +
                    '</a>';
                hierarchicalMenuParams.panelOptions = {
                    templates: {
                        header: '<div class="name">' + (facet.label ? facet.label : facet.attribute) + '</div>',
                    }
                };

                return ['hierarchicalMenu', hierarchicalMenuParams];
            }
        };

        /** Add all facet widgets to instantsearch object **/
        window.getFacetWidget = function (facet, templates) {
            var panelOptions = {
                templates: {
                    header: '<div class="name">'
                    + (facet.label ? facet.label : facet.attribute)
                    + '</div>',
                },
                hidden: function (options) {
                    if (!options.results) return true;
                    switch (facet.type) {
                        case 'conjunctive':
                            var facetsNames = options.results.facets.map(function (f) {
                                return f.name
                            });
                            return facetsNames.indexOf(facet.attribute) === -1;
                        case 'disjunctive':
                            var disjunctiveFacetsNames = options.results.disjunctiveFacets.map(function (f) {
                                return f.name
                            });
                            return disjunctiveFacetsNames.indexOf(facet.attribute) === -1;
                        default:
                            return false;
                    }
                }
            };
            if (facet.type === 'priceRanges') {
                delete templates.item;

                return ['rangeInput', {
                    container: facet.wrapper.appendChild(createISWidgetContainer(facet.attribute)),
                    attribute: facet.attribute,
                    labels: {
                        currency: algoliaConfig.currencySymbol,
                        separator: algoliaConfig.translations.to,
                        button: algoliaConfig.translations.go
                    },
                    templates: templates,
                    cssClasses: {
                        root: 'conjunctive'
                    },
                    panelOptions: panelOptions,
                }];
            }

            if (facet.type === 'conjunctive') {
                var refinementListOptions = {
                    container: facet.wrapper.appendChild(createISWidgetContainer(facet.attribute)),
                    attribute: facet.attribute,
                    limit: algoliaConfig.maxValuesPerFacet,
                    operator: 'and',
                    templates: templates,
                    sortBy: ['count:desc', 'name:asc'],
                    cssClasses: {
                        root: 'conjunctive'
                    },
                    panelOptions: panelOptions
                };

                refinementListOptions = addSearchForFacetValues(facet, refinementListOptions);

                return ['refinementList', refinementListOptions];
            }

            if (facet.type === 'disjunctive') {
                if (facet.attribute === 'additional_tax_pct' ||
                    facet.attribute === 'number_doors' ||
                    facet.attribute === 'number_cylinders')
                {
                    var disjunctiveSortBy = ['isRefined']
                } else {
                    var disjunctiveSortBy = ['name:asc', 'count:desc']
                };

                var refinementListOptions = {
                    container: facet.wrapper.appendChild(createISWidgetContainer(facet.attribute)),
                    attribute: facet.attribute,
                    limit: algoliaConfig.maxValuesPerFacet,
                    operator: 'or',
                    templates: templates,
                    sortBy: disjunctiveSortBy,
                    panelOptions: panelOptions,
                    cssClasses: {
                        root: 'disjunctive'
                    }
                }

                refinementListOptions = addSearchForFacetValues(facet, refinementListOptions);

                return ['refinementList', refinementListOptions];
            }

            if (facet.type === 'slider') {
                delete templates.item;

                return ['rangeSlider', {
                    container: facet.wrapper.appendChild(createISWidgetContainer(facet.attribute)),
                    attribute: facet.attribute,
                    templates: templates,
                    pips: false,
                    panelOptions: panelOptions,
                    tooltips: {
                        format: function (formattedValue) {
                            return facet.attribute.match(/price/) === null ?
                                parseInt(formattedValue) :
                                priceUtils.formatPrice(formattedValue, algoliaConfig.priceFormat);
                        }
                    }
                }];
            }
        };

        var wrapper = document.getElementById('instant-search-facets-container');
        $.each(algoliaConfig.facets, function (i, facet) {

            if (facet.attribute.indexOf("price") !== -1)
                facet.attribute = facet.attribute + algoliaConfig.priceKey;

            facet.wrapper = wrapper;

            var templates = {
                item: $('#refinements-lists-item-template').html()
            };

            var widgetInfo = customAttributeFacet[facet.attribute] !== undefined ?
                customAttributeFacet[facet.attribute](facet, templates) :
                getFacetWidget(facet, templates);

            var widgetType = widgetInfo[0],
                widgetConfig = widgetInfo[1];

            if (typeof allWidgetConfiguration[widgetType] === 'undefined') {
                allWidgetConfiguration[widgetType] = [widgetConfig];
            } else {
                allWidgetConfiguration[widgetType].push(widgetConfig);
            }
        });

        if (algoliaConfig.analytics.enabled) {
            if (typeof algoliaAnalyticsPushFunction !== 'function') {
                var algoliaAnalyticsPushFunction = function (formattedParameters, state, results) {
                    var trackedUrl = '/catalogsearch/result/?q=' + state.query + '&' + formattedParameters + '&numberOfHits=' + results.nbHits;

                    // Universal Analytics
                    if (typeof window.ga !== 'undefined') {
                        window.ga('set', 'page', trackedUrl);
                        window.ga('send', 'pageView');
                    }
                };
            }

            allWidgetConfiguration['analytics'] = {
                pushFunction: algoliaAnalyticsPushFunction,
                delay: algoliaConfig.analytics.delay,
                triggerOnUIInteraction: algoliaConfig.analytics.triggerOnUiInteraction,
                pushInitialSearch: algoliaConfig.analytics.pushInitialSearch
            };
        }

        if (!algoliaConfig.autocomplete.enabled) {
            var customSearchBox = algoliaBundle.instantsearch.connectors.connectSearchBox(function(renderOptions, isFirstRendering) {
                if (isFirstRendering) {
                    var input = document.querySelector(instant_selector);
                    var clearBtn = input.parentElement.getElementsByClassName('clear-query-autocomplete')[0];

                    input.addEventListener('input', function (event) {
                        var query = event.target.value;
                        renderOptions.refine(query);
                        if (clearBtn) {
                            if (query.length > 0) {
                                $(clearBtn).show();
                            } else {
                                $(clearBtn).hide();
                            }
                        }
                    });

                    if (clearBtn) {
                        clearBtn.addEventListener('click', function () {
                            renderOptions.refine('');
                            input.value = '';
                        });
                    }
                }
            });

            delete allWidgetConfiguration['searchBox'];
            allWidgetConfiguration.custom.push(customSearchBox());
        }

        allWidgetConfiguration = algolia.triggerHooks('beforeWidgetInitialization', allWidgetConfiguration, algoliaBundle);

        $.each(allWidgetConfiguration, function (widgetType, widgetConfig) {
            if (Array.isArray(widgetConfig) === true) {
                $.each(widgetConfig, function (i, widgetConfig) {
                    addWidget(search, widgetType, widgetConfig);
                });
            } else {
                addWidget(search, widgetType, widgetConfig);
            }
        });

        var isStarted = false;

        function startInstantSearch() {
            if (isStarted === true) {
                return;
            }

            search = algolia.triggerHooks('beforeInstantsearchStart', search, algoliaBundle);
            search.start();
            search = algolia.triggerHooks('afterInstantsearchStart', search, algoliaBundle);

            isStarted = true;
        }

        /** Initialise searching **/
        startInstantSearch();
    });

    function addWidget(search, type, config) {
        if (type === 'custom') {
            search.addWidgets([config]);
            return;
        }
        var widget = algoliaBundle.instantsearch.widgets[type];
        if (config.panelOptions) {
            widget = algoliaBundle.instantsearch.widgets.panel(config.panelOptions)(widget);
            delete config.panelOptions;
        }

        search.addWidgets([widget(config)]);
    }

    function addSearchForFacetValues(facet, options) {
        if (facet.searchable === '1') {
            options.searchable = true;
            options.searchableIsAlwaysActive = true;
            options.searchablePlaceholder = algoliaConfig.translations.searchForFacetValuesPlaceholder;
            options.templates = options.templates || {};
            options.templates.searchableNoResults = '<div class="sffv-no-results">' + algoliaConfig.translations.noResults + '</div>';
        }

        return options;
    }

    /**
     **     Create Datalayer and corresponding trigger
     **/

    function triggerDatalayer(data) {
        var $ = jQuery,
            algoliaIndex = data.instantSearchInstance.indexName,
            filtersActive = data.renderState[algoliaIndex].clearRefinements.hasRefinements,
            categoryPage = data.renderState[algoliaIndex].pagination.isLastPage,
            actionType = "default",
            brand = data.helper.state.disjunctiveFacetsRefinements.brand.length === 0 ? "default" : data.helper.state.disjunctiveFacetsRefinements.brand,
            model = data.helper.state.disjunctiveFacetsRefinements.model.length === 0 ? "default" : data.helper.state.disjunctiveFacetsRefinements.model,
            type = data.helper.state.disjunctiveFacetsRefinements.vehicle_type,
            budget = $.isEmptyObject(data.helper.state.numericRefinements["price.EUR.default"]) ? "default" : data.helper.state.numericRefinements["price.EUR.default"],
            sortBy = data.renderState[algoliaIndex].sortBy,
            results = data.results.hits.length,
            keyword = data.helper.state.query,
            page = data.helper.state.page,
            hits = data.results.nbHits,
            delay = 0,
            other = [],
            clientId = "";

        if( $.cookie('gtm_clientid') ) {
            clientId = $.cookie("gtm_clientid");
        }

        var budgetEmpty = $.isEmptyObject(budget);
        if (!budgetEmpty) {
            if (budget["<="] || budget[">="]) {
                var from = budget[">="],
                    to = budget["<="];

                if (from == "undefined" || !from) {
                    from = "default";
                }

                if (to == "undefined" || !to) {
                    to = "default";
                }

                budget = from + "-" + to;
            }
        }

        // List current active facets & count array size
        $.each(data.helper.state.disjunctiveFacetsRefinements, function(key, value) {
            if ( key !== "brand" && key !== "model" ) {
                if (value.length > 0) {
                    other.push(key + ": " + value)
                }
            }
        })

        $.each(data.helper.state.numericRefinements, function(key, value) {
            if (key !== "visibility_catalog") {
                if (value["<="] || value[">="]) {
                    var from = value[">="],
                        to = value["<="];

                    if (from == "undefined" || !from) {
                        from = "default";
                    }

                    if (to == "undefined" || !to) {
                        to = "default";
                    }

                    other.push(key + ": " + from + "-" + to);
                }
            }
        })

        other = $.isEmptyObject(other) ? "default" : other ;

        // Get current sortBy
        $.each(sortBy.options, function(key, array) {
            if (sortBy.currentRefinement == array.value) {
                sort = array.label;
            }
        })

        // Show type properly
        if (type.length === 0) {
            type = "default";
        }

        // Check for filters on/of value
        var currentFilters = data.renderState[algoliaIndex].currentRefinements.items,
            previousFilters = sessionStorage.getItem("currentFilters");

        countCurrentFilters = 0;
        $.each(currentFilters, function() {
            countCurrentFilters += this.refinements.length;
        })

        if (countCurrentFilters < previousFilters) {
            actionType = "filters off";
        } else if (countCurrentFilters > previousFilters) {
            actionType = "filters on";
        }

        // Check if category page w/o filters
        if (!filtersActive && categoryPage && keyword.length == 0) {
            actionType = "list";
            brand = data.renderState[algoliaIndex].refinementList.brand.items[0].label;
        }

        // Check if clear all button has been clicked, if so fire
        $("body").on("click", ".ais-ClearRefinements", function(e){
            if ( !$("body").hasClass("cleared-all") && filtersActive ) {

                actionType = "all filters off";

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'search',
                    'event_name': 'search',
                    'search_action_type': actionType.toString().toLowerCase(),
                    'search_action_value': "default",
                    'search_term': "default",
                    'search_filter_brand': "default",
                    'search_filter_model': "default",
                    'search_filter_budget': "default",
                    'search_filter_type': "default",
                    'search_filter_other': "default",
                    'search_filter_sort': "default",
                    'experiment_algolia': "no experiment",
                    'client_id': clientId,
                }).one;

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'search',
                    'event_name': 'view_search_results',
                    'search_action_type': actionType.toString().toLowerCase(),
                    'search_action_value': "default",
                    'search_term': "default",
                    'search_filter_brand': "default",
                    'search_filter_model': "default",
                    'search_filter_budget': "default",
                    'search_filter_type': "default",
                    'search_filter_other': "default",
                    'search_filter_sort': "default",
                    'experiment_algolia': "no experiment",
                    'number_of_search_results': "all",
                    'client_id': clientId,
                }).one;

                $("body").addClass("cleared-all");

                // Reset logic for users that uses the clear-all button mutliple times
                setTimeout(function() {
                    $("body").removeClass("cleared-all")
                }, 1000);
            }
        });

        // Check if user clicked navigation
        $("body").on("click", ".ais-Pagination-item", function(e){
            if ( !$("body").hasClass("navigated") ) {

                actionType = "navigate page";

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'search',
                    'event_name': 'search',
                    'search_action_type': actionType.toString().toLowerCase(),
                    'search_action_value': "default",
                    'search_term': keyword,
                    'search_filter_brand': brand.toString().toLowerCase(),
                    'search_filter_model': model.toString().toLowerCase(),
                    'search_filter_budget': budget,
                    'search_filter_type': type.toString().toLowerCase(),
                    'search_filter_other': other,
                    'search_filter_sort': sort.toString().toLowerCase(),
                    'experiment_algolia': "no experiment",
                    'client_id': clientId,
                }).one;

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'search',
                    'event_name': 'view_search_results',
                    'search_action_type': actionType.toString().toLowerCase(),
                    'search_action_value': "default",
                    'search_term': keyword,
                    'search_filter_brand': brand.toString().toLowerCase(),
                    'search_filter_model': model.toString().toLowerCase(),
                    'search_filter_budget': budget,
                    'search_filter_type': type.toString().toLowerCase(),
                    'search_filter_other': other,
                    'search_filter_sort': sort.toString().toLowerCase(),
                    'experiment_algolia': "no experiment",
                    'number_of_search_results': hits,
                    'client_id': clientId,
                }).one;

                $("body").addClass("navigated");

                // Reset logic for users that uses the clear-all button mutliple times
                setTimeout(function() {
                    $("body").removeClass("navigated")
                }, 1000);
            }
        });

        let searchParams = new URLSearchParams(window.location.search);
        var changedSortingCheck = searchParams.get('sortBy') !== sortBy.currentRefinement,
            removedLastFilterByHandCheck = previousFilters == 1 && countCurrentFilters == 0;

        if (countCurrentFilters > 0 || removedLastFilterByHandCheck || changedSortingCheck) {
            if (sort == "Relevantie" && !searchParams.get('sortBy') ) {
                changedSortingCheck = false;
            }
            
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'search',
                'event_name': 'search',
                'search_action_type': changedSortingCheck == true ? "sort" : actionType.toString().toLowerCase(),
                'search_action_value': "default",
                'search_term': keyword,
                'search_filter_brand': brand.toString().toLowerCase(),
                'search_filter_model': model.toString().toLowerCase(),
                'search_filter_budget': budget,
                'search_filter_type': type.toString().toLowerCase(),
                'search_filter_other': other,
                'search_filter_sort': sort.toString().toLowerCase(),
                'experiment_algolia': "no experiment",
                'client_id': clientId,
            }).one;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'search',
                'event_name': 'view_search_results',
                'search_action_type': changedSortingCheck == true ? "sort" : actionType.toString().toLowerCase(),
                'search_action_value': "default",
                'search_term': keyword,
                'search_filter_brand': brand.toString().toLowerCase(),
                'search_filter_model': model.toString().toLowerCase(),
                'search_filter_budget': budget,
                'search_filter_type': type.toString().toLowerCase(),
                'search_filter_other': other,
                'search_filter_sort': sort.toString().toLowerCase(),
                'experiment_algolia': "no experiment",
                'number_of_search_results': hits,
                'client_id': clientId,
            }).one;
        }
    };
});
