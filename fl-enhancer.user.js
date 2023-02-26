// ==UserScript==
// @name         FL enhancer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Verbetert FL platform
// @author       ph0t0shop
// @match        https://www.financiallease.nl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=financiallease.nl
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.pathname.startsWith("/aanbod")) {
        let blocked = false;

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                for (const node of mutation.addedNodes) {
                    if (node.src !== undefined) {
                        if (node.src.endsWith("mixins.js")) {
                            observer.disconnect();
                            const oldDefine = window.define;
                            window.define = function(e,t,n) {
                                if(e === "algoliaBundle" && !blocked) {
                                    blocked = true;
                                    return;
                                }
                                return oldDefine(e,t,n);
                            }
                            for (const key in oldDefine) {
                                window.define[key] = oldDefine[key];
                            }
                            const oldRequirejs = window.requirejs;
                            window.requirejs = function(e,t,n,r){ // https://cdn.jsdelivr.net/gh/ph0t0shop/FL@prod/algoliabundle.js, http://127.0.0.1:5500/algoliabundle.js
                                if (Array.isArray(e) && e.length === 1 && e[0] === "algoliaBundle") return oldRequirejs(["https://raw.githubusercontent.com/ph0t0shop/FL/prod/algoliabundle.js"], t, n, r);
                                return oldRequirejs(e.map(moduleName => {if (moduleName === "algoliaBundle") return "https://raw.githubusercontent.com/ph0t0shop/FL/prod/algoliabundle.js"; return moduleName;}),t,n,r);
                            }
                            for (const key in oldRequirejs) {
                                window.requirejs[key] = oldRequirejs[key];
                            }
                        }
                    }
                }
            }
        };

        const observerOptions = {
            childList: true,
            subtree: true
        }

        if (document.querySelector("script[src$='mixins.js']")) {
            alert("Mixins.js already present! Enable instant injection in Tampermonkey settings.");
            return;
        }

        const observer = new MutationObserver(callback);
        observer.observe(document, observerOptions);
    } else if (window.location.pathname.split("-").length > 1) {
        const splitPath = window.location.pathname.split("-");
        if (splitPath[splitPath.length - 1].search(/^[0-9]+$/) === -1) {
            return;
        }

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                for (const node of mutation.addedNodes) {
                    // console.log(node);
                    if (node.classList !== undefined && node.classList.contains("c-details-tab__description")) {
                        observer.disconnect();
                        requirejs(["https://raw.githubusercontent.com/ph0t0shop/FL/prod/enhancelisting.js"]); // https://cdn.jsdelivr.net/gh/ph0t0shop/FL@prod/enhancelisting.js, http://127.0.0.1:5500/enhancelisting.js
                    }
                }
            }
        };

        const observerOptions = {
            childList: true,
            subtree: true
        }

        const observer = new MutationObserver(callback);
        observer.observe(document, observerOptions);
    }
})();