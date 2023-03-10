/*! InstantSearch.js 4.15.0 | © Algolia, Inc. and contributors; MIT License | https://github.com/algolia/instantsearch.js */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).instantsearch = t()
}(this, function() {
    "use strict";

    function h(e) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function k(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function L(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d() {
        return (d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function D(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(n), !0).forEach(function(e) {
                M(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function j(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && n(e, t)
    }

    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function n(e, t) {
        return (n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function H(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function A(r) {
        var i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var e, t = a(r);
            if (i) {
                var n = a(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" != typeof t && "function" != typeof t ? H(e) : t
            }(this, e)
        }
    }

    function W(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                i = !1,
                a = void 0;
            try {
                for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    r || null == o.return || o.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }(e, t) || s(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function P(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || s(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e, t) {
        if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        }
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        return "function" == typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e)
    }

    function u(e, t) {
        if (e === t) return e;
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r = t[n],
                    i = e[n];
                void 0 !== i && void 0 === r || (c(i) && c(r) ? e[n] = u(i, r) : e[n] = "object" == typeof(a = r) && null !== a ? u(Array.isArray(a) ? [] : {}, a) : a)
            } var a;
        return e
    }

    function m() {
        return Array.prototype.slice.call(arguments).reduceRight(function(t, n) {
            return Object.keys(Object(n)).forEach(function(e) {
                void 0 !== n[e] && (void 0 !== t[e] && delete t[e], t[e] = n[e])
            }), t
        }, {})
    }
    var p = function(e) {
        c(e) || (e = {});
        for (var t = 1, n = arguments.length; t < n; t++) {
            var r = arguments[t];
            c(r) && u(e, r)
        }
        return e
    };
    var l = function(n, r) {
            return n.filter(function(e, t) {
                return -1 < r.indexOf(e) && n.indexOf(e) === t
            })
        },
        g = function(e, t) {
            if (Array.isArray(e))
                for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return e[n]
        };
    var f = function e(t) {
        if ("number" == typeof t) return t;
        if ("string" == typeof t) return parseFloat(t);
        if (Array.isArray(t)) return t.map(e);
        throw new Error("The value should be a number, a parsable string or an array of those.")
    };
    var v = function(e, t) {
        if (null === e) return {};
        var n, r, i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
        return i
    };
    var y = function(e) {
            return e && 0 < Object.keys(e).length
        },
        t = function(e) {
            return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
        },
        b = {
            addRefinement: function(e, t, n) {
                if (b.isRefined(e, t, n)) return e;
                var r = "" + n,
                    i = e[t] ? e[t].concat(r) : [r],
                    a = {};
                return a[t] = i, m({}, a, e)
            },
            removeRefinement: function(e, n, t) {
                if (void 0 === t) return b.clearRefinement(e, function(e, t) {
                    return n === t
                });
                var r = "" + t;
                return b.clearRefinement(e, function(e, t) {
                    return n === t && r === e
                })
            },
            toggleRefinement: function(e, t, n) {
                if (void 0 === n) throw new Error("toggleRefinement should be used with a value");
                return b.isRefined(e, t, n) ? b.removeRefinement(e, t, n) : b.addRefinement(e, t, n)
            },
            clearRefinement: function(i, a, s) {
                if (void 0 === a) return y(i) ? {} : i;
                if ("string" == typeof a) return v(i, [a]);
                if ("function" == typeof a) {
                    var o = !1,
                        e = Object.keys(i).reduce(function(e, t) {
                            var n = i[t] || [],
                                r = n.filter(function(e) {
                                    return !a(e, t, s)
                                });
                            return r.length !== n.length && (o = !0), e[t] = r, e
                        }, {});
                    return o ? e : i
                }
            },
            isRefined: function(e, t, n) {
                var r = !!e[t] && 0 < e[t].length;
                if (void 0 === n || !r) return r;
                var i = "" + n;
                return -1 !== e[t].indexOf(i)
            }
        },
        S = b;

    function R(e, n) {
        return Array.isArray(e) && Array.isArray(n) ? e.length === n.length && e.every(function(e, t) {
            return R(n[t], e)
        }) : e === n
    }

    function w(e) {
        var r = e ? w._parseNumbers(e) : {};
        void 0 === r.userToken || t(r.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = r.facets || [], this.disjunctiveFacets = r.disjunctiveFacets || [], this.hierarchicalFacets = r.hierarchicalFacets || [], this.facetsRefinements = r.facetsRefinements || {}, this.facetsExcludes = r.facetsExcludes || {}, this.disjunctiveFacetsRefinements = r.disjunctiveFacetsRefinements || {}, this.numericRefinements = r.numericRefinements || {}, this.tagRefinements = r.tagRefinements || [], this.hierarchicalFacetsRefinements = r.hierarchicalFacetsRefinements || {};
        var i = this;
        Object.keys(r).forEach(function(e) {
            var t = -1 !== w.PARAMETERS.indexOf(e),
                n = void 0 !== r[e];
            !t && n && (i[e] = r[e])
        })
    }
    w.PARAMETERS = Object.keys(new w), w._parseNumbers = function(i) {
        if (i instanceof w) return i;
        var r = {};
        if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach(function(e) {
                var t = i[e];
                if ("string" == typeof t) {
                    var n = parseFloat(t);
                    r[e] = isNaN(n) ? t : n
                }
            }), Array.isArray(i.insideBoundingBox) && (r.insideBoundingBox = i.insideBoundingBox.map(function(e) {
                return Array.isArray(e) ? e.map(function(e) {
                    return parseFloat(e)
                }) : e
            })), i.numericRefinements) {
            var a = {};
            Object.keys(i.numericRefinements).forEach(function(n) {
                var r = i.numericRefinements[n] || {};
                a[n] = {}, Object.keys(r).forEach(function(e) {
                    var t = r[e].map(function(e) {
                        return Array.isArray(e) ? e.map(function(e) {
                            return "string" == typeof e ? parseFloat(e) : e
                        }) : "string" == typeof e ? parseFloat(e) : e
                    });
                    a[n][e] = t
                })
            }), r.numericRefinements = a
        }
        return p({}, i, r)
    }, w.make = function(e) {
        var n = new w(e);
        return (e.hierarchicalFacets || []).forEach(function(e) {
            if (e.rootPath) {
                var t = n.getHierarchicalRefinement(e.name);
                0 < t.length && 0 !== t[0].indexOf(e.rootPath) && (n = n.clearRefinements(e.name)), 0 === (t = n.getHierarchicalRefinement(e.name)).length && (n = n.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
            }
        }), n
    }, w.validate = function(e, t) {
        var n = t || {};
        return e.tagFilters && n.tagRefinements && 0 < n.tagRefinements.length ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : 0 < e.tagRefinements.length && n.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && n.numericRefinements && y(n.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : y(e.numericRefinements) && n.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
    }, w.prototype = {
        constructor: w,
        clearRefinements: function(e) {
            var t = {
                numericRefinements: this._clearNumericRefinements(e),
                facetsRefinements: S.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
                facetsExcludes: S.clearRefinement(this.facetsExcludes, e, "exclude"),
                disjunctiveFacetsRefinements: S.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                hierarchicalFacetsRefinements: S.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
            };
            return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t)
        },
        clearTags: function() {
            return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                tagFilters: void 0,
                tagRefinements: []
            })
        },
        setIndex: function(e) {
            return e === this.index ? this : this.setQueryParameters({
                index: e
            })
        },
        setQuery: function(e) {
            return e === this.query ? this : this.setQueryParameters({
                query: e
            })
        },
        setPage: function(e) {
            return e === this.page ? this : this.setQueryParameters({
                page: e
            })
        },
        setFacets: function(e) {
            return this.setQueryParameters({
                facets: e
            })
        },
        setDisjunctiveFacets: function(e) {
            return this.setQueryParameters({
                disjunctiveFacets: e
            })
        },
        setHitsPerPage: function(e) {
            return this.hitsPerPage === e ? this : this.setQueryParameters({
                hitsPerPage: e
            })
        },
        setTypoTolerance: function(e) {
            return this.typoTolerance === e ? this : this.setQueryParameters({
                typoTolerance: e
            })
        },
        addNumericRefinement: function(e, t, n) {
            var r = f(n);
            if (this.isNumericRefined(e, t, r)) return this;
            var i = p({}, this.numericRefinements);
            return i[e] = p({}, i[e]), i[e][t] ? (i[e][t] = i[e][t].slice(), i[e][t].push(r)) : i[e][t] = [r], this.setQueryParameters({
                numericRefinements: i
            })
        },
        getConjunctiveRefinements: function(e) {
            return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || []
        },
        getDisjunctiveRefinements: function(e) {
            return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || []
        },
        getHierarchicalRefinement: function(e) {
            return this.hierarchicalFacetsRefinements[e] || []
        },
        getExcludeRefinements: function(e) {
            return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || []
        },
        removeNumericRefinement: function(n, r, i) {
            return void 0 !== i ? this.isNumericRefined(n, r, i) ? this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(e, t) {
                    return t === n && e.op === r && R(e.val, f(i))
                })
            }) : this : void 0 !== r ? this.isNumericRefined(n, r) ? this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(e, t) {
                    return t === n && e.op === r
                })
            }) : this : this.isNumericRefined(n) ? this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(e, t) {
                    return t === n
                })
            }) : this
        },
        getNumericRefinements: function(e) {
            return this.numericRefinements[e] || {}
        },
        getNumericRefinement: function(e, t) {
            return this.numericRefinements[e] && this.numericRefinements[e][t]
        },
        _clearNumericRefinements: function(s) {
            if (void 0 === s) return y(this.numericRefinements) ? {} : this.numericRefinements;
            if ("string" == typeof s) return v(this.numericRefinements, [s]);
            if ("function" == typeof s) {
                var o = !1,
                    t = this.numericRefinements,
                    e = Object.keys(t).reduce(function(e, r) {
                        var i = t[r],
                            a = {};
                        return i = i || {}, Object.keys(i).forEach(function(t) {
                            var e = i[t] || [],
                                n = [];
                            e.forEach(function(e) {
                                s({
                                    val: e,
                                    op: t
                                }, r, "numeric") || n.push(e)
                            }), n.length !== e.length && (o = !0), a[t] = n
                        }), e[r] = a, e
                    }, {});
                return o ? e : this.numericRefinements
            }
        },
        addFacet: function(e) {
            return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                facets: this.facets.concat([e])
            })
        },
        addDisjunctiveFacet: function(e) {
            return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                disjunctiveFacets: this.disjunctiveFacets.concat([e])
            })
        },
        addHierarchicalFacet: function(e) {
            if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
            return this.setQueryParameters({
                hierarchicalFacets: this.hierarchicalFacets.concat([e])
            })
        },
        addFacetRefinement: function(e, t) {
            if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
            return S.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                facetsRefinements: S.addRefinement(this.facetsRefinements, e, t)
            })
        },
        addExcludeRefinement: function(e, t) {
            if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
            return S.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                facetsExcludes: S.addRefinement(this.facetsExcludes, e, t)
            })
        },
        addDisjunctiveFacetRefinement: function(e, t) {
            if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
            return S.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                disjunctiveFacetsRefinements: S.addRefinement(this.disjunctiveFacetsRefinements, e, t)
            })
        },
        addTagRefinement: function(e) {
            if (this.isTagRefined(e)) return this;
            var t = {
                tagRefinements: this.tagRefinements.concat(e)
            };
            return this.setQueryParameters(t)
        },
        removeFacet: function(t) {
            return this.isConjunctiveFacet(t) ? this.clearRefinements(t).setQueryParameters({
                facets: this.facets.filter(function(e) {
                    return e !== t
                })
            }) : this
        },
        removeDisjunctiveFacet: function(t) {
            return this.isDisjunctiveFacet(t) ? this.clearRefinements(t).setQueryParameters({
                disjunctiveFacets: this.disjunctiveFacets.filter(function(e) {
                    return e !== t
                })
            }) : this
        },
        removeHierarchicalFacet: function(t) {
            return this.isHierarchicalFacet(t) ? this.clearRefinements(t).setQueryParameters({
                hierarchicalFacets: this.hierarchicalFacets.filter(function(e) {
                    return e.name !== t
                })
            }) : this
        },
        removeFacetRefinement: function(e, t) {
            if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
            return S.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                facetsRefinements: S.removeRefinement(this.facetsRefinements, e, t)
            }) : this
        },
        removeExcludeRefinement: function(e, t) {
            if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
            return S.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                facetsExcludes: S.removeRefinement(this.facetsExcludes, e, t)
            }) : this
        },
        removeDisjunctiveFacetRefinement: function(e, t) {
            if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
            return S.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                disjunctiveFacetsRefinements: S.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
            }) : this
        },
        removeTagRefinement: function(t) {
            if (!this.isTagRefined(t)) return this;
            var e = {
                tagRefinements: this.tagRefinements.filter(function(e) {
                    return e !== t
                })
            };
            return this.setQueryParameters(e)
        },
        toggleRefinement: function(e, t) {
            return this.toggleFacetRefinement(e, t)
        },
        toggleFacetRefinement: function(e, t) {
            if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
            if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
            if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
            throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
        },
        toggleConjunctiveFacetRefinement: function(e, t) {
            if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
            return this.setQueryParameters({
                facetsRefinements: S.toggleRefinement(this.facetsRefinements, e, t)
            })
        },
        toggleExcludeFacetRefinement: function(e, t) {
            if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
            return this.setQueryParameters({
                facetsExcludes: S.toggleRefinement(this.facetsExcludes, e, t)
            })
        },
        toggleDisjunctiveFacetRefinement: function(e, t) {
            if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
            return this.setQueryParameters({
                disjunctiveFacetsRefinements: S.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
            })
        },
        toggleHierarchicalFacetRefinement: function(e, t) {
            if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
            var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                r = {};
            return void 0 !== this.hierarchicalFacetsRefinements[e] && 0 < this.hierarchicalFacetsRefinements[e].length && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n)) ? -1 === t.indexOf(n) ? r[e] = [] : r[e] = [t.slice(0, t.lastIndexOf(n))] : r[e] = [t], this.setQueryParameters({
                hierarchicalFacetsRefinements: m({}, r, this.hierarchicalFacetsRefinements)
            })
        },
        addHierarchicalFacetRefinement: function(e, t) {
            if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
            if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
            var n = {};
            return n[e] = [t], this.setQueryParameters({
                hierarchicalFacetsRefinements: m({}, n, this.hierarchicalFacetsRefinements)
            })
        },
        removeHierarchicalFacetRefinement: function(e) {
            if (!this.isHierarchicalFacetRefined(e)) return this;
            var t = {};
            return t[e] = [], this.setQueryParameters({
                hierarchicalFacetsRefinements: m({}, t, this.hierarchicalFacetsRefinements)
            })
        },
        toggleTagRefinement: function(e) {
            return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
        },
        isDisjunctiveFacet: function(e) {
            return -1 < this.disjunctiveFacets.indexOf(e)
        },
        isHierarchicalFacet: function(e) {
            return void 0 !== this.getHierarchicalFacetByName(e)
        },
        isConjunctiveFacet: function(e) {
            return -1 < this.facets.indexOf(e)
        },
        isFacetRefined: function(e, t) {
            return !!this.isConjunctiveFacet(e) && S.isRefined(this.facetsRefinements, e, t)
        },
        isExcludeRefined: function(e, t) {
            return !!this.isConjunctiveFacet(e) && S.isRefined(this.facetsExcludes, e, t)
        },
        isDisjunctiveFacetRefined: function(e, t) {
            return !!this.isDisjunctiveFacet(e) && S.isRefined(this.disjunctiveFacetsRefinements, e, t)
        },
        isHierarchicalFacetRefined: function(e, t) {
            if (!this.isHierarchicalFacet(e)) return !1;
            var n = this.getHierarchicalRefinement(e);
            return t ? -1 !== n.indexOf(t) : 0 < n.length
        },
        isNumericRefined: function(e, t, n) {
            if (void 0 === n && void 0 === t) return !!this.numericRefinements[e];
            var r = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
            if (void 0 === n || !r) return r;
            var i = f(n),
                a = void 0 !== function(e, t) {
                    return g(e, function(e) {
                        return R(e, t)
                    })
                }(this.numericRefinements[e][t], i);
            return r && a
        },
        isTagRefined: function(e) {
            return -1 !== this.tagRefinements.indexOf(e)
        },
        getRefinedDisjunctiveFacets: function() {
            var t = this,
                e = l(Object.keys(this.numericRefinements).filter(function(e) {
                    return 0 < Object.keys(t.numericRefinements[e]).length
                }), this.disjunctiveFacets);
            return Object.keys(this.disjunctiveFacetsRefinements).filter(function(e) {
                return 0 < t.disjunctiveFacetsRefinements[e].length
            }).concat(e).concat(this.getRefinedHierarchicalFacets())
        },
        getRefinedHierarchicalFacets: function() {
            var t = this;
            return l(this.hierarchicalFacets.map(function(e) {
                return e.name
            }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(e) {
                return 0 < t.hierarchicalFacetsRefinements[e].length
            }))
        },
        getUnrefinedDisjunctiveFacets: function() {
            var t = this.getRefinedDisjunctiveFacets();
            return this.disjunctiveFacets.filter(function(e) {
                return -1 === t.indexOf(e)
            })
        },
        managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements"],
        getQueryParams: function() {
            var n = this.managedParameters,
                r = {},
                i = this;
            return Object.keys(this).forEach(function(e) {
                var t = i[e]; - 1 === n.indexOf(e) && void 0 !== t && (r[e] = t)
            }), r
        },
        setQueryParameter: function(e, t) {
            if (this[e] === t) return this;
            var n = {};
            return n[e] = t, this.setQueryParameters(n)
        },
        setQueryParameters: function(e) {
            if (!e) return this;
            var t = w.validate(this, e);
            if (t) throw t;
            var n = this,
                i = w._parseNumbers(e),
                r = Object.keys(this).reduce(function(e, t) {
                    return e[t] = n[t], e
                }, {}),
                a = Object.keys(i).reduce(function(e, t) {
                    var n = void 0 !== e[t],
                        r = void 0 !== i[t];
                    return n && !r ? v(e, [t]) : (r && (e[t] = i[t]), e)
                }, r);
            return new this.constructor(a)
        },
        resetPage: function() {
            return void 0 === this.page ? this : this.setPage(0)
        },
        _getHierarchicalFacetSortBy: function(e) {
            return e.sortBy || ["isRefined:desc", "name:asc"]
        },
        _getHierarchicalFacetSeparator: function(e) {
            return e.separator || " > "
        },
        _getHierarchicalRootPath: function(e) {
            return e.rootPath || null
        },
        _getHierarchicalShowParentLevel: function(e) {
            return "boolean" != typeof e.showParentLevel || e.showParentLevel
        },
        getHierarchicalFacetByName: function(t) {
            return g(this.hierarchicalFacets, function(e) {
                return e.name === t
            })
        },
        getHierarchicalFacetBreadcrumb: function(e) {
            if (!this.isHierarchicalFacet(e)) return [];
            var t = this.getHierarchicalRefinement(e)[0];
            if (!t) return [];
            var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
            return t.split(n).map(function(e) {
                return e.trim()
            })
        },
        toString: function() {
            return JSON.stringify(this, null, 2)
        }
    };
    var N = w;

    function x(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                r = null === e,
                i = void 0 !== t,
                a = null === t;
            if (!a && t < e || r && i || !n) return 1;
            if (!r && e < t || a && n || !i) return -1
        }
        return 0
    }

    function _(e) {
        return Array.isArray(e) ? e.filter(Boolean) : []
    }

    function I(e, t) {
        if (!Array.isArray(e)) return -1;
        for (var n = 0; n < e.length; n++)
            if (t(e[n])) return n;
        return -1
    }

    function F(e, t) {
        var i = (t || []).map(function(e) {
            return e.split(":")
        });
        return e.reduce(function(e, t) {
            var n = t.split(":"),
                r = g(i, function(e) {
                    return e[0] === n[0]
                });
            return 1 < n.length || !r ? (e[0].push(n[0]), e[1].push(n[1])) : (e[0].push(r[0]), e[1].push(r[1])), e
        }, [
            [],
            []
        ])
    }
    var C = function(e, n, i) {
            if (!Array.isArray(e)) return [];
            Array.isArray(i) || (i = []);
            var t = e.map(function(t, e) {
                return {
                    criteria: n.map(function(e) {
                        return t[e]
                    }),
                    index: e,
                    value: t
                }
            });
            return t.sort(function(e, t) {
                for (var n = -1; ++n < e.criteria.length;) {
                    var r = x(e.criteria[n], t.criteria[n]);
                    if (r) return n >= i.length ? r : "desc" === i[n] ? -r : r
                }
                return e.index - t.index
            }), t.map(function(e) {
                return e.value
            })
        },
        T = function(h) {
            return function(e, t) {
                var n = h.hierarchicalFacets[t],
                    r = h.hierarchicalFacetsRefinements[n.name] && h.hierarchicalFacetsRefinements[n.name][0] || "",
                    i = h._getHierarchicalFacetSeparator(n),
                    a = h._getHierarchicalRootPath(n),
                    s = h._getHierarchicalShowParentLevel(n),
                    o = F(h._getHierarchicalFacetSortBy(n)),
                    c = e.every(function(e) {
                        return e.exhaustive
                    }),
                    u = function(o, c, u, l, h) {
                        return function(e, n, t) {
                            var r = e;
                            if (0 < t) {
                                var i = 0;
                                for (r = e; i < t;) {
                                    var a = r && Array.isArray(r.data) ? r.data : [];
                                    r = g(a, function(e) {
                                        return e.isRefined
                                    }), i++
                                }
                            }
                            if (r) {
                                var s = Object.keys(n.data).map(function(e) {
                                    return [e, n.data[e]]
                                }).filter(function(e) {
                                    return function(e, t, n, r, i, a) {
                                        return (!i || 0 === e.indexOf(i) && i !== e) && (!i && -1 === e.indexOf(r) || i && e.split(r).length - i.split(r).length == 1 || -1 === e.indexOf(r) && -1 === n.indexOf(r) || 0 === n.indexOf(e) || 0 === e.indexOf(t + r) && (a || 0 === e.indexOf(n)))
                                    }(e[0], r.path || u, h, c, u, l)
                                });
                                r.data = C(s.map(function(e) {
                                    var t = e[0];
                                    return function(e, t, n, r, i) {
                                        var a = t.split(n);
                                        return {
                                            name: a[a.length - 1].trim(),
                                            path: t,
                                            count: e,
                                            isRefined: r === t || 0 === r.indexOf(t + n),
                                            exhaustive: i,
                                            data: null
                                        }
                                    }(e[1], t, c, h, n.exhaustive)
                                }), o[0], o[1])
                            }
                            return e
                        }
                    }(o, i, a, s, r),
                    l = e;
                return a && (l = e.slice(a.split(i).length)), l.reduce(u, {
                    name: h.hierarchicalFacets[t].name,
                    count: null,
                    isRefined: !0,
                    path: null,
                    exhaustive: c,
                    data: null
                })
            }
        };

    function E(e) {
        var n = {};
        return e.forEach(function(e, t) {
            n[e] = t
        }), n
    }

    function B(e, t, n) {
        t && t[n] && (e.stats = t[n])
    }

    function U(l, n) {
        var c = n[0];
        this._rawResults = n;
        var h = this;
        Object.keys(c).forEach(function(e) {
            h[e] = c[e]
        }), this.processingTimeMS = n.reduce(function(e, t) {
            return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
        }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = l.hierarchicalFacets.map(function() {
            return []
        }), this.facets = [];
        var e = l.getRefinedDisjunctiveFacets(),
            u = E(l.facets),
            d = E(l.disjunctiveFacets),
            r = 1,
            f = c.facets || {};
        Object.keys(f).forEach(function(e) {
            var t = f[e],
                n = function(e, t) {
                    return g(e, function(e) {
                        return -1 < (e.attributes || []).indexOf(t)
                    })
                }(l.hierarchicalFacets, e);
            if (n) {
                var r = n.attributes.indexOf(e),
                    i = I(l.hierarchicalFacets, function(e) {
                        return e.name === n.name
                    });
                h.hierarchicalFacets[i][r] = {
                    attribute: e,
                    data: t,
                    exhaustive: c.exhaustiveFacetsCount
                }
            } else {
                var a, s = -1 !== l.disjunctiveFacets.indexOf(e),
                    o = -1 !== l.facets.indexOf(e);
                s && (a = d[e], h.disjunctiveFacets[a] = {
                    name: e,
                    data: t,
                    exhaustive: c.exhaustiveFacetsCount
                }, B(h.disjunctiveFacets[a], c.facets_stats, e)), o && (a = u[e], h.facets[a] = {
                    name: e,
                    data: t,
                    exhaustive: c.exhaustiveFacetsCount
                }, B(h.facets[a], c.facets_stats, e))
            }
        }), this.hierarchicalFacets = _(this.hierarchicalFacets), e.forEach(function(e) {
            var a = n[r],
                s = a && a.facets ? a.facets : {},
                o = l.getHierarchicalFacetByName(e);
            Object.keys(s).forEach(function(t) {
                var n, e = s[t];
                if (o) {
                    n = I(l.hierarchicalFacets, function(e) {
                        return e.name === o.name
                    });
                    var r = I(h.hierarchicalFacets[n], function(e) {
                        return e.attribute === t
                    });
                    if (-1 === r) return;
                    h.hierarchicalFacets[n][r].data = p({}, h.hierarchicalFacets[n][r].data, e)
                } else {
                    n = d[t];
                    var i = c.facets && c.facets[t] || {};
                    h.disjunctiveFacets[n] = {
                        name: t,
                        data: m({}, e, i),
                        exhaustive: a.exhaustiveFacetsCount
                    }, B(h.disjunctiveFacets[n], a.facets_stats, t), l.disjunctiveFacetsRefinements[t] && l.disjunctiveFacetsRefinements[t].forEach(function(e) {
                        !h.disjunctiveFacets[n].data[e] && -1 < l.disjunctiveFacetsRefinements[t].indexOf(e) && (h.disjunctiveFacets[n].data[e] = 0)
                    })
                }
            }), r++
        }), l.getRefinedHierarchicalFacets().forEach(function(e) {
            var s = l.getHierarchicalFacetByName(e),
                o = l._getHierarchicalFacetSeparator(s),
                c = l.getHierarchicalRefinement(e);
            if (!(0 === c.length || c[0].split(o).length < 2)) {
                var t = n[r],
                    u = t && t.facets ? t.facets : {};
                Object.keys(u).forEach(function(t) {
                    var e = u[t],
                        n = I(l.hierarchicalFacets, function(e) {
                            return e.name === s.name
                        }),
                        r = I(h.hierarchicalFacets[n], function(e) {
                            return e.attribute === t
                        });
                    if (-1 !== r) {
                        var i = {};
                        if (0 < c.length) {
                            var a = c[0].split(o)[0];
                            i[a] = h.hierarchicalFacets[n][r].data[a]
                        }
                        h.hierarchicalFacets[n][r].data = m(i, e, h.hierarchicalFacets[n][r].data)
                    }
                }), r++
            }
        }), Object.keys(l.facetsExcludes).forEach(function(t) {
            var e = l.facetsExcludes[t],
                n = u[t];
            h.facets[n] = {
                name: t,
                data: c.facets[t],
                exhaustive: c.exhaustiveFacetsCount
            }, e.forEach(function(e) {
                h.facets[n] = h.facets[n] || {
                    name: t
                }, h.facets[n].data = h.facets[n].data || {}, h.facets[n].data[e] = 0
            })
        }), this.hierarchicalFacets = this.hierarchicalFacets.map(T(l)), this.facets = _(this.facets), this.disjunctiveFacets = _(this.disjunctiveFacets), this._state = l
    }

    function Q(t, e) {
        if (!e.data || 0 === e.data.length) return e;
        var n = e.data.map(function(e) {
                return Q(t, e)
            }),
            r = t(n);
        return p({}, e, {
            data: r
        })
    }

    function q(e, t) {
        var n = g(e, function(e) {
            return e.name === t
        });
        return n && n.stats
    }

    function $(e, t, n, r, i) {
        var a = g(i, function(e) {
                return e.name === n
            }),
            s = a && a.data && a.data[r] ? a.data[r] : 0,
            o = a && a.exhaustive || !1;
        return {
            type: t,
            attributeName: n,
            name: r,
            count: s,
            exhaustive: o
        }
    }
    U.prototype.getFacetByName = function(t) {
        function e(e) {
            return e.name === t
        }
        return g(this.facets, e) || g(this.disjunctiveFacets, e) || g(this.hierarchicalFacets, e)
    }, U.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], U.prototype.getFacetValues = function(e, t) {
        var n = function(t, n) {
            function e(e) {
                return e.name === n
            }
            if (t._state.isConjunctiveFacet(n)) {
                var r = g(t.facets, e);
                return r ? Object.keys(r.data).map(function(e) {
                    return {
                        name: e,
                        count: r.data[e],
                        isRefined: t._state.isFacetRefined(n, e),
                        isExcluded: t._state.isExcludeRefined(n, e)
                    }
                }) : []
            }
            if (t._state.isDisjunctiveFacet(n)) {
                var i = g(t.disjunctiveFacets, e);
                return i ? Object.keys(i.data).map(function(e) {
                    return {
                        name: e,
                        count: i.data[e],
                        isRefined: t._state.isDisjunctiveFacetRefined(n, e)
                    }
                }) : []
            }
            if (t._state.isHierarchicalFacet(n)) return g(t.hierarchicalFacets, e)
        }(this, e);
        if (n) {
            var r = m({}, t, {
                sortBy: U.DEFAULT_SORT
            });
            if (Array.isArray(r.sortBy)) {
                var i = F(r.sortBy, U.DEFAULT_SORT);
                return Array.isArray(n) ? C(n, i[0], i[1]) : Q(function(e) {
                    return C(e, i[0], i[1])
                }, n)
            }
            if ("function" == typeof r.sortBy) return Array.isArray(n) ? n.sort(r.sortBy) : Q(function(e) {
                return function(e, t) {
                    return t.sort(e)
                }(r.sortBy, e)
            }, n);
            throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
        }
    }, U.prototype.getFacetStats = function(e) {
        return this._state.isConjunctiveFacet(e) ? q(this.facets, e) : this._state.isDisjunctiveFacet(e) ? q(this.disjunctiveFacets, e) : void 0
    }, U.prototype.getRefinements = function() {
        var r = this._state,
            n = this,
            i = [];
        return Object.keys(r.facetsRefinements).forEach(function(t) {
            r.facetsRefinements[t].forEach(function(e) {
                i.push($(r, "facet", t, e, n.facets))
            })
        }), Object.keys(r.facetsExcludes).forEach(function(t) {
            r.facetsExcludes[t].forEach(function(e) {
                i.push($(r, "exclude", t, e, n.facets))
            })
        }), Object.keys(r.disjunctiveFacetsRefinements).forEach(function(t) {
            r.disjunctiveFacetsRefinements[t].forEach(function(e) {
                i.push($(r, "disjunctive", t, e, n.disjunctiveFacets))
            })
        }), Object.keys(r.hierarchicalFacetsRefinements).forEach(function(t) {
            r.hierarchicalFacetsRefinements[t].forEach(function(e) {
                i.push(function(e, t, n, r) {
                    var i = e.getHierarchicalFacetByName(t),
                        a = e._getHierarchicalFacetSeparator(i),
                        s = n.split(a),
                        o = g(r, function(e) {
                            return e.name === t
                        }),
                        c = s.reduce(function(e, t) {
                            var n = e && g(e.data, function(e) {
                                return e.name === t
                            });
                            return void 0 !== n ? n : e
                        }, o),
                        u = c && c.count || 0,
                        l = c && c.exhaustive || !1,
                        h = c && c.path || "";
                    return {
                        type: "hierarchical",
                        attributeName: t,
                        name: h,
                        count: u,
                        exhaustive: l
                    }
                }(r, t, e, n.hierarchicalFacets))
            })
        }), Object.keys(r.numericRefinements).forEach(function(n) {
            var e = r.numericRefinements[n];
            Object.keys(e).forEach(function(t) {
                e[t].forEach(function(e) {
                    i.push({
                        type: "numeric",
                        attributeName: n,
                        name: e,
                        numericValue: e,
                        operator: t
                    })
                })
            })
        }), r.tagRefinements.forEach(function(e) {
            i.push({
                type: "tag",
                attributeName: "_tags",
                name: e
            })
        }), i
    };
    var V = U;

    function K() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }
    var e = K;

    function z(e) {
        return "function" == typeof e
    }

    function J(e) {
        return "object" == typeof e && null !== e
    }

    function Y(e) {
        return void 0 === e
    }(K.EventEmitter = K).prototype._events = void 0, K.prototype._maxListeners = void 0, K.defaultMaxListeners = 10, K.prototype.setMaxListeners = function(e) {
        if (! function(e) {
                return "number" == typeof e
            }(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, K.prototype.emit = function(e) {
        var t, n, r, i, a, s;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || J(this._events.error) && !this._events.error.length)) {
            if ((t = arguments[1]) instanceof Error) throw t;
            var o = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw o.context = t, o
        }
        if (Y(n = this._events[e])) return !1;
        if (z(n)) switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                i = Array.prototype.slice.call(arguments, 1), n.apply(this, i)
        } else if (J(n))
            for (i = Array.prototype.slice.call(arguments, 1), r = (s = n.slice()).length, a = 0; a < r; a++) s[a].apply(this, i);
        return !0
    }, K.prototype.on = K.prototype.addListener = function(e, t) {
        var n;
        if (!z(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, z(t.listener) ? t.listener : t), this._events[e] ? J(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, J(this._events[e]) && !this._events[e].warned && (n = Y(this._maxListeners) ? K.defaultMaxListeners : this._maxListeners) && 0 < n && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
    }, K.prototype.once = function(e, t) {
        if (!z(t)) throw TypeError("listener must be a function");
        var n = !1;

        function r() {
            this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
        }
        return r.listener = t, this.on(e, r), this
    }, K.prototype.removeListener = function(e, t) {
        var n, r, i, a;
        if (!z(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (i = (n = this._events[e]).length, r = -1, n === t || z(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (J(n)) {
            for (a = i; 0 < a--;)
                if (n[a] === t || n[a].listener && n[a].listener === t) {
                    r = a;
                    break
                } if (r < 0) return this;
            1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, K.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (z(n = this._events[e])) this.removeListener(e, n);
        else if (n)
            for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
    }, K.prototype.listeners = function(e) {
        return this._events && this._events[e] ? z(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, K.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (z(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, K.listenerCount = function(e, t) {
        return e.listenerCount(t)
    };
    var G = function(e, t) {
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    };

    function Z(e, t) {
        this.main = e, this.fn = t, this.lastResults = null
    }
    G(Z, e.EventEmitter), Z.prototype.detach = function() {
        this.removeAllListeners(), this.main.detachDerivedHelper(this)
    }, Z.prototype.getModifiedState = function(e) {
        return this.fn(e)
    };
    var X = Z,
        ee = {
            _getQueries: function(i, a) {
                var s = [];
                return s.push({
                    indexName: i,
                    params: ee._getHitsSearchParams(a)
                }), a.getRefinedDisjunctiveFacets().forEach(function(e) {
                    s.push({
                        indexName: i,
                        params: ee._getDisjunctiveFacetSearchParams(a, e)
                    })
                }), a.getRefinedHierarchicalFacets().forEach(function(e) {
                    var t = a.getHierarchicalFacetByName(e),
                        n = a.getHierarchicalRefinement(e),
                        r = a._getHierarchicalFacetSeparator(t);
                    0 < n.length && 1 < n[0].split(r).length && s.push({
                        indexName: i,
                        params: ee._getDisjunctiveFacetSearchParams(a, e, !0)
                    })
                }), s
            },
            _getHitsSearchParams: function(e) {
                var t = e.facets.concat(e.disjunctiveFacets).concat(ee._getHitsHierarchicalFacetsAttributes(e)),
                    n = ee._getFacetFilters(e),
                    r = ee._getNumericFilters(e),
                    i = {
                        facets: t,
                        tagFilters: ee._getTagFilters(e)
                    };
                return 0 < n.length && (i.facetFilters = n), 0 < r.length && (i.numericFilters = r), p({}, e.getQueryParams(), i)
            },
            _getDisjunctiveFacetSearchParams: function(e, t, n) {
                var r = ee._getFacetFilters(e, t, n),
                    i = ee._getNumericFilters(e, t),
                    a = {
                        hitsPerPage: 1,
                        page: 0,
                        attributesToRetrieve: [],
                        attributesToHighlight: [],
                        attributesToSnippet: [],
                        tagFilters: ee._getTagFilters(e),
                        analytics: !1,
                        clickAnalytics: !1
                    },
                    s = e.getHierarchicalFacetByName(t);
                return a.facets = s ? ee._getDisjunctiveHierarchicalFacetAttribute(e, s, n) : t, 0 < i.length && (a.numericFilters = i), 0 < r.length && (a.facetFilters = r), p({}, e.getQueryParams(), a)
            },
            _getNumericFilters: function(e, i) {
                if (e.numericFilters) return e.numericFilters;
                var a = [];
                return Object.keys(e.numericRefinements).forEach(function(r) {
                    var t = e.numericRefinements[r] || {};
                    Object.keys(t).forEach(function(n) {
                        var e = t[n] || [];
                        i !== r && e.forEach(function(e) {
                            if (Array.isArray(e)) {
                                var t = e.map(function(e) {
                                    return r + n + e
                                });
                                a.push(t)
                            } else a.push(r + n + e)
                        })
                    })
                }), a
            },
            _getTagFilters: function(e) {
                return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
            },
            _getFacetFilters: function(o, c, u) {
                var l = [],
                    e = o.facetsRefinements || {};
                Object.keys(e).forEach(function(t) {
                    (e[t] || []).forEach(function(e) {
                        l.push(t + ":" + e)
                    })
                });
                var n = o.facetsExcludes || {};
                Object.keys(n).forEach(function(t) {
                    (n[t] || []).forEach(function(e) {
                        l.push(t + ":-" + e)
                    })
                });
                var r = o.disjunctiveFacetsRefinements || {};
                Object.keys(r).forEach(function(t) {
                    var e = r[t] || [];
                    if (t !== c && e && 0 !== e.length) {
                        var n = [];
                        e.forEach(function(e) {
                            n.push(t + ":" + e)
                        }), l.push(n)
                    }
                });
                var h = o.hierarchicalFacetsRefinements || {};
                return Object.keys(h).forEach(function(e) {
                    var t = (h[e] || [])[0];
                    if (void 0 !== t) {
                        var n, r, i = o.getHierarchicalFacetByName(e),
                            a = o._getHierarchicalFacetSeparator(i),
                            s = o._getHierarchicalRootPath(i);
                        if (c === e) {
                            if (-1 === t.indexOf(a) || !s && !0 === u || s && s.split(a).length === t.split(a).length) return;
                            t = s ? (r = s.split(a).length - 1, s) : (r = t.split(a).length - 2, t.slice(0, t.lastIndexOf(a))), n = i.attributes[r]
                        } else r = t.split(a).length - 1, n = i.attributes[r];
                        n && l.push([n + ":" + t])
                    }
                }), l
            },
            _getHitsHierarchicalFacetsAttributes: function(s) {
                return s.hierarchicalFacets.reduce(function(e, t) {
                    var n = s.getHierarchicalRefinement(t.name)[0];
                    if (!n) return e.push(t.attributes[0]), e;
                    var r = s._getHierarchicalFacetSeparator(t),
                        i = n.split(r).length,
                        a = t.attributes.slice(0, i + 1);
                    return e.concat(a)
                }, [])
            },
            _getDisjunctiveHierarchicalFacetAttribute: function(e, t, n) {
                var r = e._getHierarchicalFacetSeparator(t);
                if (!0 === n) {
                    var i = e._getHierarchicalRootPath(t),
                        a = 0;
                    return i && (a = i.split(r).length), [t.attributes[a]]
                }
                var s = (e.getHierarchicalRefinement(t.name)[0] || "").split(r).length - 1;
                return t.attributes.slice(0, 1 + s)
            },
            getSearchForFacetQuery: function(e, t, n, r) {
                var i = r.isDisjunctiveFacet(e) ? r.clearRefinements(e) : r,
                    a = {
                        facetQuery: t,
                        facetName: e
                    };
                return "number" == typeof n && (a.maxFacetHits = n), p({}, ee._getHitsSearchParams(i), a)
            }
        },
        te = ee,
        ne = "3.4.4";

    function re(e, t, n) {
        "function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (3.4.4)"), this.setClient(e);
        var r = n || {};
        r.index = t, this.state = N.make(r), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
    }

    function ie(e) {
        if (e < 0) throw new Error("Page requested below 0.");
        return this._change({
            state: this.state.setPage(e),
            isPageReset: !1
        }), this
    }

    function ae() {
        return this.state.page
    }
    G(re, e.EventEmitter), re.prototype.search = function() {
        return this._search({
            onlyWithDerivedHelpers: !1
        }), this
    }, re.prototype.searchOnlyWithDerivedHelpers = function() {
        return this._search({
            onlyWithDerivedHelpers: !0
        }), this
    }, re.prototype.getQuery = function() {
        var e = this.state;
        return te._getHitsSearchParams(e)
    }, re.prototype.searchOnce = function(e, t) {
        var n = e ? this.state.setQueryParameters(e) : this.state,
            r = te._getQueries(n.index, n),
            i = this;
        if (this._currentNbQueries++, this.emit("searchOnce", {
                state: n
            }), !t) return this.client.search(r).then(function(e) {
            return i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), {
                content: new V(n, e.results),
                state: n,
                _originalResponse: e
            }
        }, function(e) {
            throw i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), e
        });
        this.client.search(r).then(function(e) {
            i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(null, new V(n, e.results), n)
        }).catch(function(e) {
            i._currentNbQueries--, 0 === i._currentNbQueries && i.emit("searchQueueEmpty"), t(e, null, n)
        })
    }, re.prototype.findAnswers = function(e) {
        var t = this.state,
            n = this.derivedHelpers[0];
        if (!n) return Promise.resolve([]);
        var r = n.getModifiedState(t),
            i = p({
                attributesForPrediction: e.attributesForPrediction,
                nbHits: e.nbHits
            }, {
                params: v(te._getHitsSearchParams(r), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"])
            }),
            a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
        if ("function" != typeof this.client.initIndex) throw new Error(a);
        var s = this.client.initIndex(r.index);
        if ("function" != typeof s.findAnswers) throw new Error(a);
        return s.findAnswers(r.query, e.queryLanguages, i)
    }, re.prototype.searchForFacetValues = function(t, e, n, r) {
        var i = "function" == typeof this.client.searchForFacetValues;
        if (!i && "function" != typeof this.client.initIndex) throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
        var a = this.state.setQueryParameters(r || {}),
            s = a.isDisjunctiveFacet(t),
            o = te.getSearchForFacetQuery(t, e, n, a);
        this._currentNbQueries++;
        var c = this;
        return this.emit("searchForFacetValues", {
            state: a,
            facet: t,
            query: e
        }), (i ? this.client.searchForFacetValues([{
            indexName: a.index,
            params: o
        }]) : this.client.initIndex(a.index).searchForFacetValues(o)).then(function(e) {
            return c._currentNbQueries--, 0 === c._currentNbQueries && c.emit("searchQueueEmpty"), (e = Array.isArray(e) ? e[0] : e).facetHits.forEach(function(e) {
                e.isRefined = s ? a.isDisjunctiveFacetRefined(t, e.value) : a.isFacetRefined(t, e.value)
            }), e
        }, function(e) {
            throw c._currentNbQueries--, 0 === c._currentNbQueries && c.emit("searchQueueEmpty"), e
        })
    }, re.prototype.setQuery = function(e) {
        return this._change({
            state: this.state.resetPage().setQuery(e),
            isPageReset: !0
        }), this
    }, re.prototype.clearRefinements = function(e) {
        return this._change({
            state: this.state.resetPage().clearRefinements(e),
            isPageReset: !0
        }), this
    }, re.prototype.clearTags = function() {
        return this._change({
            state: this.state.resetPage().clearTags(),
            isPageReset: !0
        }), this
    }, re.prototype.addDisjunctiveFacetRefinement = function(e, t) {
        return this._change({
            state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.addDisjunctiveRefine = function() {
        return this.addDisjunctiveFacetRefinement.apply(this, arguments)
    }, re.prototype.addHierarchicalFacetRefinement = function(e, t) {
        return this._change({
            state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.addNumericRefinement = function(e, t, n) {
        return this._change({
            state: this.state.resetPage().addNumericRefinement(e, t, n),
            isPageReset: !0
        }), this
    }, re.prototype.addFacetRefinement = function(e, t) {
        return this._change({
            state: this.state.resetPage().addFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.addRefine = function() {
        return this.addFacetRefinement.apply(this, arguments)
    }, re.prototype.addFacetExclusion = function(e, t) {
        return this._change({
            state: this.state.resetPage().addExcludeRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.addExclude = function() {
        return this.addFacetExclusion.apply(this, arguments)
    }, re.prototype.addTag = function(e) {
        return this._change({
            state: this.state.resetPage().addTagRefinement(e),
            isPageReset: !0
        }), this
    }, re.prototype.removeNumericRefinement = function(e, t, n) {
        return this._change({
            state: this.state.resetPage().removeNumericRefinement(e, t, n),
            isPageReset: !0
        }), this
    }, re.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
        return this._change({
            state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.removeDisjunctiveRefine = function() {
        return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
    }, re.prototype.removeHierarchicalFacetRefinement = function(e) {
        return this._change({
            state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
            isPageReset: !0
        }), this
    }, re.prototype.removeFacetRefinement = function(e, t) {
        return this._change({
            state: this.state.resetPage().removeFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.removeRefine = function() {
        return this.removeFacetRefinement.apply(this, arguments)
    }, re.prototype.removeFacetExclusion = function(e, t) {
        return this._change({
            state: this.state.resetPage().removeExcludeRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.removeExclude = function() {
        return this.removeFacetExclusion.apply(this, arguments)
    }, re.prototype.removeTag = function(e) {
        return this._change({
            state: this.state.resetPage().removeTagRefinement(e),
            isPageReset: !0
        }), this
    }, re.prototype.toggleFacetExclusion = function(e, t) {
        return this._change({
            state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.toggleExclude = function() {
        return this.toggleFacetExclusion.apply(this, arguments)
    }, re.prototype.toggleRefinement = function(e, t) {
        return this.toggleFacetRefinement(e, t)
    }, re.prototype.toggleFacetRefinement = function(e, t) {
        return this._change({
            state: this.state.resetPage().toggleFacetRefinement(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.toggleRefine = function() {
        return this.toggleFacetRefinement.apply(this, arguments)
    }, re.prototype.toggleTag = function(e) {
        return this._change({
            state: this.state.resetPage().toggleTagRefinement(e),
            isPageReset: !0
        }), this
    }, re.prototype.nextPage = function() {
        var e = this.state.page || 0;
        return this.setPage(e + 1)
    }, re.prototype.previousPage = function() {
        var e = this.state.page || 0;
        return this.setPage(e - 1)
    }, re.prototype.setCurrentPage = ie, re.prototype.setPage = ie, re.prototype.setIndex = function(e) {
        return this._change({
            state: this.state.resetPage().setIndex(e),
            isPageReset: !0
        }), this
    }, re.prototype.setQueryParameter = function(e, t) {
        return this._change({
            state: this.state.resetPage().setQueryParameter(e, t),
            isPageReset: !0
        }), this
    }, re.prototype.setState = function(e) {
        return this._change({
            state: N.make(e),
            isPageReset: !1
        }), this
    }, re.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
        return this.state = new N(e), this
    }, re.prototype.hasRefinements = function(e) {
        return !!y(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
    }, re.prototype.isExcluded = function(e, t) {
        return this.state.isExcludeRefined(e, t)
    }, re.prototype.isDisjunctiveRefined = function(e, t) {
        return this.state.isDisjunctiveFacetRefined(e, t)
    }, re.prototype.hasTag = function(e) {
        return this.state.isTagRefined(e)
    }, re.prototype.isTagRefined = function() {
        return this.hasTagRefinements.apply(this, arguments)
    }, re.prototype.getIndex = function() {
        return this.state.index
    }, re.prototype.getCurrentPage = ae, re.prototype.getPage = ae, re.prototype.getTags = function() {
        return this.state.tagRefinements
    }, re.prototype.getRefinements = function(e) {
        var n = [];
        if (this.state.isConjunctiveFacet(e)) this.state.getConjunctiveRefinements(e).forEach(function(e) {
            n.push({
                value: e,
                type: "conjunctive"
            })
        }), this.state.getExcludeRefinements(e).forEach(function(e) {
            n.push({
                value: e,
                type: "exclude"
            })
        });
        else if (this.state.isDisjunctiveFacet(e)) {
            this.state.getDisjunctiveRefinements(e).forEach(function(e) {
                n.push({
                    value: e,
                    type: "disjunctive"
                })
            })
        }
        var r = this.state.getNumericRefinements(e);
        return Object.keys(r).forEach(function(e) {
            var t = r[e];
            n.push({
                value: t,
                operator: e,
                type: "numeric"
            })
        }), n
    }, re.prototype.getNumericRefinement = function(e, t) {
        return this.state.getNumericRefinement(e, t)
    }, re.prototype.getHierarchicalFacetBreadcrumb = function(e) {
        return this.state.getHierarchicalFacetBreadcrumb(e)
    }, re.prototype._search = function(e) {
        var r = this.state,
            i = [],
            t = [];
        e.onlyWithDerivedHelpers || (t = te._getQueries(r.index, r), i.push({
            state: r,
            queriesCount: t.length,
            helper: this
        }), this.emit("search", {
            state: r,
            results: this.lastResults
        }));
        var n = this.derivedHelpers.map(function(e) {
                var t = e.getModifiedState(r),
                    n = te._getQueries(t.index, t);
                return i.push({
                    state: t,
                    queriesCount: n.length,
                    helper: e
                }), e.emit("search", {
                    state: t,
                    results: e.lastResults
                }), n
            }),
            a = Array.prototype.concat.apply(t, n),
            s = this._queryId++;
        this._currentNbQueries++;
        try {
            this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, i, s)).catch(this._dispatchAlgoliaError.bind(this, s))
        } catch (e) {
            this.emit("error", {
                error: e
            })
        }
    }, re.prototype._dispatchAlgoliaResponse = function(e, t, n) {
        if (!(t < this._lastQueryIdReceived)) {
            this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
            var s = n.results.slice();
            e.forEach(function(e) {
                var t = e.state,
                    n = e.queriesCount,
                    r = e.helper,
                    i = s.splice(0, n),
                    a = r.lastResults = new V(t, i);
                r.emit("result", {
                    results: a,
                    state: t
                })
            })
        }
    }, re.prototype._dispatchAlgoliaError = function(e, t) {
        e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
            error: t
        }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
    }, re.prototype.containsRefinement = function(e, t, n, r) {
        return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
    }, re.prototype._hasDisjunctiveRefinements = function(e) {
        return this.state.disjunctiveRefinements[e] && 0 < this.state.disjunctiveRefinements[e].length
    }, re.prototype._change = function(e) {
        var t = e.state,
            n = e.isPageReset;
        t !== this.state && (this.state = t, this.emit("change", {
            state: this.state,
            results: this.lastResults,
            isPageReset: n
        }))
    }, re.prototype.clearCache = function() {
        return this.client.clearCache && this.client.clearCache(), this
    }, re.prototype.setClient = function(e) {
        return this.client === e || ("function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (3.4.4)"), this.client = e), this
    }, re.prototype.getClient = function() {
        return this.client
    }, re.prototype.derive = function(e) {
        var t = new X(this, e);
        return this.derivedHelpers.push(t), t
    }, re.prototype.detachDerivedHelper = function(e) {
        var t = this.derivedHelpers.indexOf(e);
        if (-1 === t) throw new Error("Derived helper already detached");
        this.derivedHelpers.splice(t, 1)
    }, re.prototype.hasPendingRequests = function() {
        return 0 < this._currentNbQueries
    };
    var se = re;

    function oe(e, t, n) {
        return new se(e, t, n)
    }
    oe.version = ne, oe.AlgoliaSearchHelper = se, oe.SearchParameters = N, oe.SearchResults = V;
    var ce = oe;

    function ue(r) {
        function e() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            null === i && (i = le.then(function() {
                i = null, a ? a = !1 : r.apply(void 0, t)
            }))
        }
        var i = null,
            a = !1;
        return e.wait = function() {
            if (null === i) throw new Error("The deferred function should be called before calling `wait()`");
            return i
        }, e.cancel = function() {
            null !== i && (a = !0)
        }, e
    }
    var le = Promise.resolve();

    function he(e) {
        var t = "string" == typeof e,
            n = t ? document.querySelector(e) : e;
        if (function(e) {
                return e instanceof HTMLElement || Boolean(e) && 0 < e.nodeType
            }(n)) return n;
        var r = "Container must be `string` or `HTMLElement`.";
        throw t && (r += " Unable to find ".concat(e)), new Error(r)
    }

    function de(e) {
        return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
    }

    function fe(e) {
        return e.filter(function(e, t, n) {
            return n.indexOf(e) === t
        })
    }

    function me(e) {
        var t = e.defaultTemplates,
            n = e.templates;
        return D({
            templatesConfig: e.templatesConfig
        }, function(a, e) {
            var s = 1 < arguments.length && void 0 !== e ? e : {};
            return fe([].concat(P(Object.keys(a || {})), P(Object.keys(s)))).reduce(function(e, t) {
                var n = a ? a[t] : void 0,
                    r = s[t],
                    i = void 0 !== r && r !== n;
                return e.templates[t] = i ? r : n, e.useCustomCompileOptions[t] = i, e
            }, {
                templates: {},
                useCustomCompileOptions: {}
            })
        }(t, n))
    }

    function pe(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var ge = pe(function(e, t) {
            ! function(S) {
                var R = /\S/,
                    t = /\"/g,
                    n = /\n/g,
                    r = /\r/g,
                    i = /\\/g,
                    a = /\u2028/,
                    s = /\u2029/;

                function w(e) {
                    "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
                }

                function P(e) {
                    return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
                }

                function N(e, t, n) {
                    if (t.charAt(n) != e.charAt(0)) return !1;
                    for (var r = 1, i = e.length; r < i; r++)
                        if (t.charAt(n + r) != e.charAt(r)) return !1;
                    return !0
                }
                S.tags = {
                    "#": 1,
                    "^": 2,
                    "<": 3,
                    $: 4,
                    "/": 5,
                    "!": 6,
                    ">": 7,
                    "=": 8,
                    _v: 9,
                    "{": 10,
                    "&": 11,
                    _t: 12
                }, S.scan = function(e, t) {
                    var n, r, i, a, s, o = e.length,
                        c = 0,
                        u = null,
                        l = null,
                        h = "",
                        d = [],
                        f = !1,
                        m = 0,
                        p = 0,
                        g = "{{",
                        v = "}}";

                    function y() {
                        0 < h.length && (d.push({
                            tag: "_t",
                            text: new String(h)
                        }), h = "")
                    }

                    function b(e, t) {
                        if (y(), e && function() {
                                for (var e = !0, t = p; t < d.length; t++)
                                    if (!(e = S.tags[d[t].tag] < S.tags._v || "_t" == d[t].tag && null === d[t].text.match(R))) return !1;
                                return e
                            }())
                            for (var n, r = p; r < d.length; r++) d[r].text && ((n = d[r + 1]) && ">" == n.tag && (n.indent = d[r].text.toString()), d.splice(r, 1));
                        else t || d.push({
                            tag: "\n"
                        });
                        f = !1, p = d.length
                    }
                    for (t && (t = t.split(" "), g = t[0], v = t[1]), m = 0; m < o; m++) 0 == c ? N(g, e, m) ? (--m, y(), c = 1) : "\n" == e.charAt(m) ? b(f) : h += e.charAt(m) : 1 == c ? (m += g.length - 1, c = "=" == (u = (l = S.tags[e.charAt(m + 1)]) ? e.charAt(m + 1) : "_v") ? (r = m, void 0, i = "=" + v, a = (n = e).indexOf(i, r), s = P(n.substring(n.indexOf("=", r) + 1, a)).split(" "), g = s[0], v = s[s.length - 1], m = a + i.length - 1, 0) : (l && m++, 2), f = m) : N(v, e, m) ? (d.push({
                        tag: u,
                        n: P(h),
                        otag: g,
                        ctag: v,
                        i: "/" == u ? f - g.length : m + v.length
                    }), h = "", m += v.length - 1, c = 0, "{" == u && ("}}" == v ? m++ : w(d[d.length - 1]))) : h += e.charAt(m);
                    return b(f, !0), d
                };
                var u = {
                    _t: !0,
                    "\n": !0,
                    $: !0,
                    "/": !0
                };

                function l(e, t) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (t[n].o == e.n) return e.tag = "#", !0
                }

                function h(e, t, n) {
                    for (var r = 0, i = n.length; r < i; r++)
                        if (n[r].c == e && n[r].o == t) return !0
                }

                function o(e) {
                    var t = [];
                    for (var n in e.partials) t.push('"' + d(n) + '":{name:"' + d(e.partials[n].name) + '", ' + o(e.partials[n]) + "}");
                    return "partials: {" + t.join(",") + "}, subs: " + function(e) {
                        var t = [];
                        for (var n in e) t.push('"' + d(n) + '": function(c,p,t,i) {' + e[n] + "}");
                        return "{ " + t.join(",") + " }"
                    }(e.subs)
                }
                S.stringify = function(e, t, n) {
                    return "{code: function (c,p,i) { " + S.wrapMain(e.code) + " }," + o(e) + "}"
                };
                var c = 0;

                function d(e) {
                    return e.replace(i, "\\\\").replace(t, '\\"').replace(n, "\\n").replace(r, "\\r").replace(a, "\\u2028").replace(s, "\\u2029")
                }

                function f(e) {
                    return ~e.indexOf(".") ? "d" : "f"
                }

                function m(e, t) {
                    var n = "<" + (t.prefix || "") + e.n + c++;
                    return t.partials[n] = {
                        name: e.n,
                        partials: {}
                    }, t.code += 't.b(t.rp("' + d(n) + '",c,p,"' + (e.indent || "") + '"));', n
                }

                function e(e, t) {
                    t.code += "t.b(t.t(t." + f(e.n) + '("' + d(e.n) + '",c,p,0)));'
                }

                function p(e) {
                    return "t.b(" + e + ");"
                }
                S.generate = function(e, t, n) {
                    c = 0;
                    var r = {
                        code: "",
                        subs: {},
                        partials: {}
                    };
                    return S.walk(e, r), n.asString ? this.stringify(r, t, n) : this.makeTemplate(r, t, n)
                }, S.wrapMain = function(e) {
                    return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
                }, S.template = S.Template, S.makeTemplate = function(e, t, n) {
                    var r = this.makePartials(e);
                    return r.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(r, t, this, n)
                }, S.makePartials = function(e) {
                    var t, n = {
                        subs: {},
                        partials: e.partials,
                        name: e.name
                    };
                    for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
                    for (t in e.subs) n.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
                    return n
                }, S.codegen = {
                    "#": function(e, t) {
                        t.code += "if(t.s(t." + f(e.n) + '("' + d(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', S.walk(e.nodes, t), t.code += "});c.pop();}"
                    },
                    "^": function(e, t) {
                        t.code += "if(!t.s(t." + f(e.n) + '("' + d(e.n) + '",c,p,1),c,p,1,0,0,"")){', S.walk(e.nodes, t), t.code += "};"
                    },
                    ">": m,
                    "<": function(e, t) {
                        var n = {
                            partials: {},
                            code: "",
                            subs: {},
                            inPartial: !0
                        };
                        S.walk(e.nodes, n);
                        var r = t.partials[m(e, t)];
                        r.subs = n.subs, r.partials = n.partials
                    },
                    $: function(e, t) {
                        var n = {
                            subs: {},
                            code: "",
                            partials: t.partials,
                            prefix: e.n
                        };
                        S.walk(e.nodes, n), t.subs[e.n] = n.code, t.inPartial || (t.code += 't.sub("' + d(e.n) + '",c,p,i);')
                    },
                    "\n": function(e, t) {
                        t.code += p('"\\n"' + (e.last ? "" : " + i"))
                    },
                    _v: function(e, t) {
                        t.code += "t.b(t.v(t." + f(e.n) + '("' + d(e.n) + '",c,p,0)));'
                    },
                    _t: function(e, t) {
                        t.code += p('"' + d(e.text) + '"')
                    },
                    "{": e,
                    "&": e
                }, S.walk = function(e, t) {
                    for (var n, r = 0, i = e.length; r < i; r++)(n = S.codegen[e[r].tag]) && n(e[r], t);
                    return t
                }, S.parse = function(e, t, n) {
                    return function e(t, n, r, i) {
                        var a, s = [],
                            o = null,
                            c = null;
                        for (a = r[r.length - 1]; 0 < t.length;) {
                            if (c = t.shift(), a && "<" == a.tag && !(c.tag in u)) throw new Error("Illegal content in < super tag.");
                            if (S.tags[c.tag] <= S.tags.$ || l(c, i)) r.push(c), c.nodes = e(t, c.tag, r, i);
                            else {
                                if ("/" == c.tag) {
                                    if (0 === r.length) throw new Error("Closing tag without opener: /" + c.n);
                                    if (o = r.pop(), c.n != o.n && !h(c.n, o.n, i)) throw new Error("Nesting error: " + o.n + " vs. " + c.n);
                                    return o.end = c.i, s
                                }
                                "\n" == c.tag && (c.last = 0 == t.length || "\n" == t[0].tag)
                            }
                            s.push(c)
                        }
                        if (0 < r.length) throw new Error("missing closing tag: " + r.pop().n);
                        return s
                    }(e, 0, [], (n = n || {}).sectionTags || [])
                }, S.cache = {}, S.cacheKey = function(e, t) {
                    return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join("||")
                }, S.compile = function(e, t) {
                    t = t || {};
                    var n = S.cacheKey(e, t),
                        r = this.cache[n];
                    if (r) {
                        var i = r.partials;
                        for (var a in i) delete i[a].instance;
                        return r
                    }
                    return r = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t), this.cache[n] = r
                }
            }(t)
        }),
        ve = pe(function(e, t) {
            ! function(e) {
                function l(e, t, n) {
                    var r;
                    return t && "object" == typeof t && (void 0 !== t[e] ? r = t[e] : n && t.get && "function" == typeof t.get && (r = t.get(e))), r
                }
                e.Template = function(e, t, n, r) {
                    e = e || {}, this.r = e.code || this.r, this.c = n, this.options = r || {}, this.text = t || "", this.partials = e.partials || {}, this.subs = e.subs || {}, this.buf = ""
                }, e.Template.prototype = {
                    r: function(e, t, n) {
                        return ""
                    },
                    v: function(e) {
                        return e = o(e), s.test(e) ? e.replace(t, "&amp;").replace(n, "&lt;").replace(r, "&gt;").replace(i, "&#39;").replace(a, "&quot;") : e
                    },
                    t: o,
                    render: function(e, t, n) {
                        return this.ri([e], t || {}, n)
                    },
                    ri: function(e, t, n) {
                        return this.r(e, t, n)
                    },
                    ep: function(e, t) {
                        var n = this.partials[e],
                            r = t[n.name];
                        if (n.instance && n.base == r) return n.instance;
                        if ("string" == typeof r) {
                            if (!this.c) throw new Error("No compiler available.");
                            r = this.c.compile(r, this.options)
                        }
                        if (!r) return null;
                        if (this.partials[e].base = r, n.subs) {
                            for (key in t.stackText || (t.stackText = {}), n.subs) t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
                            r = function(e, t, n, r, i, a) {
                                function s() {}

                                function o() {}
                                var c;
                                o.prototype = (s.prototype = e).subs;
                                var u = new s;
                                for (c in u.subs = new o, u.subsText = {}, u.buf = "", r = r || {}, u.stackSubs = r, u.subsText = a, t) r[c] || (r[c] = t[c]);
                                for (c in r) u.subs[c] = r[c];
                                for (c in i = i || {}, u.stackPartials = i, n) i[c] || (i[c] = n[c]);
                                for (c in i) u.partials[c] = i[c];
                                return u
                            }(r, n.subs, n.partials, this.stackSubs, this.stackPartials, t.stackText)
                        }
                        return this.partials[e].instance = r
                    },
                    rp: function(e, t, n, r) {
                        var i = this.ep(e, n);
                        return i ? i.ri(t, n, r) : ""
                    },
                    rs: function(e, t, n) {
                        var r = e[e.length - 1];
                        if (h(r))
                            for (var i = 0; i < r.length; i++) e.push(r[i]), n(e, t, this), e.pop();
                        else n(e, t, this)
                    },
                    s: function(e, t, n, r, i, a, s) {
                        var o;
                        return (!h(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, r, i, a, s)), o = !!e, !r && o && t && t.push("object" == typeof e ? e : t[t.length - 1]), o)
                    },
                    d: function(e, t, n, r) {
                        var i, a = e.split("."),
                            s = this.f(a[0], t, n, r),
                            o = this.options.modelGet,
                            c = null;
                        if ("." === e && h(t[t.length - 2])) s = t[t.length - 1];
                        else
                            for (var u = 1; u < a.length; u++) s = void 0 !== (i = l(a[u], s, o)) ? (c = s, i) : "";
                        return !(r && !s) && (r || "function" != typeof s || (t.push(c), s = this.mv(s, t, n), t.pop()), s)
                    },
                    f: function(e, t, n, r) {
                        for (var i = !1, a = !1, s = this.options.modelGet, o = t.length - 1; 0 <= o; o--)
                            if (void 0 !== (i = l(e, t[o], s))) {
                                a = !0;
                                break
                            } return a ? (r || "function" != typeof i || (i = this.mv(i, t, n)), i) : !r && ""
                    },
                    ls: function(e, t, n, r, i) {
                        var a = this.options.delimiters;
                        return this.options.delimiters = i, this.b(this.ct(o(e.call(t, r)), t, n)), this.options.delimiters = a, !1
                    },
                    ct: function(e, t, n) {
                        if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                        return this.c.compile(e, this.options).render(t, n)
                    },
                    b: function(e) {
                        this.buf += e
                    },
                    fl: function() {
                        var e = this.buf;
                        return this.buf = "", e
                    },
                    ms: function(e, t, n, r, i, a, s) {
                        var o, c = t[t.length - 1],
                            u = e.call(c);
                        return "function" == typeof u ? !!r || (o = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(u, c, n, o.substring(i, a), s)) : u
                    },
                    mv: function(e, t, n) {
                        var r = t[t.length - 1],
                            i = e.call(r);
                        return "function" == typeof i ? this.ct(o(i.call(r)), r, n) : i
                    },
                    sub: function(e, t, n, r) {
                        var i = this.subs[e];
                        i && (this.activeSub = e, i(t, n, this, r), this.activeSub = !1)
                    }
                };
                var t = /&/g,
                    n = /</g,
                    r = />/g,
                    i = /\'/g,
                    a = /\"/g,
                    s = /[&<>\"\']/;

                function o(e) {
                    return String(null == e ? "" : e)
                }
                var h = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
            }(t)
        });
    ge.Template = ve.Template, ge.template = ge.Template;
    var ye = ge;

    function be(e) {
        var t = e.templates,
            n = e.templateKey,
            r = e.compileOptions,
            i = e.helpers,
            a = e.data,
            s = e.bindEvent,
            o = t[n],
            c = h(o),
            u = "function" === c;
        if (!("string" === c) && !u) throw new Error("Template must be 'string' or 'function', was '".concat(c, "' (key: ").concat(n, ")"));
        if (u) return o(a, s);
        var l = function(e, t, n) {
            var r = 0 < arguments.length && void 0 !== e ? e : {},
                i = 1 < arguments.length ? t : void 0,
                a = 2 < arguments.length ? n : void 0;
            return Object.keys(r).reduce(function(e, n) {
                return D(D({}, e), {}, M({}, n, function() {
                    var t = this;
                    return function(e) {
                        return r[n].call(a, e, function(e) {
                            return ye.compile(e, i).render(t)
                        })
                    }
                }))
            }, {})
        }(i, r, a);
        return ye.compile(o, r).render(D(D({}, a), {}, {
            helpers: l
        })).replace(/[ \n\r\t\f\xA0]+/g, function(e) {
            return e.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ")
        }).trim()
    }

    function Se(e, t) {
        for (var n, r = 0; r < e.length; r++)
            if (t(n = e[r], r, e)) return n
    }

    function Re(e) {
        return String(e).replace(/^\\-/, "-")
    }

    function we(i, e, a, s, t) {
        var o, n = {
                type: e,
                attribute: a,
                name: s
            },
            c = Se(4 < arguments.length && void 0 !== t ? t : [], function(e) {
                return e.name === a
            });
        "hierarchical" === e ? function() {
            for (var e = i.getHierarchicalFacetByName(a), n = s.split(e.separator), t = function(t) {
                    c = c && c.data && Se(Object.keys(c.data).map(function(t) {
                        return function(e) {
                            return t[e]
                        }
                    }(c.data)), function(e) {
                        return e.name === n[t]
                    })
                }, r = 0; void 0 !== c && r < n.length; ++r) t(r);
            o = c && c.count
        }() : o = c && c.data && c.data[n.name];
        var r = c && c.exhaustive;
        return void 0 !== o && (n.count = o), void 0 !== r && (n.exhaustive = r), n
    }

    function Pe(n, r, e) {
        var t = 2 < arguments.length && void 0 !== e && e,
            a = [],
            i = r.facetsRefinements,
            s = void 0 === i ? {} : i,
            o = r.facetsExcludes,
            c = void 0 === o ? {} : o,
            u = r.disjunctiveFacetsRefinements,
            l = void 0 === u ? {} : u,
            h = r.hierarchicalFacetsRefinements,
            d = void 0 === h ? {} : h,
            f = r.numericRefinements,
            m = void 0 === f ? {} : f,
            p = r.tagRefinements,
            g = void 0 === p ? [] : p;
        return Object.keys(s).forEach(function(t) {
            s[t].forEach(function(e) {
                a.push(we(r, "facet", t, e, n.facets))
            })
        }), Object.keys(c).forEach(function(t) {
            c[t].forEach(function(e) {
                a.push({
                    type: "exclude",
                    attribute: t,
                    name: e,
                    exclude: !0
                })
            })
        }), Object.keys(l).forEach(function(t) {
            l[t].forEach(function(e) {
                a.push(we(r, "disjunctive", t, Re(e), n.disjunctiveFacets))
            })
        }), Object.keys(d).forEach(function(t) {
            d[t].forEach(function(e) {
                a.push(we(r, "hierarchical", t, e, n.hierarchicalFacets))
            })
        }), Object.keys(m).forEach(function(r) {
            var i = m[r];
            Object.keys(i).forEach(function(e) {
                var t = e,
                    n = i[t];
                (Array.isArray(n) ? n : [n]).forEach(function(e) {
                    a.push({
                        type: "numeric",
                        attribute: r,
                        name: "".concat(e),
                        numericValue: e,
                        operator: t
                    })
                })
            })
        }), g.forEach(function(e) {
            a.push({
                type: "tag",
                attribute: "_tags",
                name: e
            })
        }), t && r.query && r.query.trim() && a.push({
            attribute: "query",
            type: "query",
            name: r.query,
            query: r.query
        }), a
    }

    function Ne(e) {
        var t = e.helper,
            n = e.attributesToClear,
            r = void 0 === n ? [] : n,
            i = t.state.setPage(0);
        return i = r.reduce(function(e, t) {
            return i.isNumericRefined(t) ? e.removeNumericRefinement(t) : i.isHierarchicalFacet(t) ? e.removeHierarchicalFacetRefinement(t) : i.isDisjunctiveFacet(t) ? e.removeDisjunctiveFacetRefinement(t) : i.isConjunctiveFacet(t) ? e.removeFacetRefinement(t) : e
        }, i), -1 !== r.indexOf("query") && (i = i.setQuery("")), i
    }

    function xe(e) {
        return "number" == typeof e && e < 0 && (e = String(e).replace(/^-/, "\\-")), e
    }

    function _e(e, t) {
        if (void 0 === e || "function" != typeof e) throw new Error("The render function is not valid (received type ".concat(function(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        }(e), ").\n\n").concat(t))
    }

    function Ie() {}

    function Fe(e, t) {
        return (Array.isArray(t) ? t : t.split(".")).reduce(function(e, t) {
            return e && e[t]
        }, e)
    }

    function Ce(e) {
        return "number" == typeof e && isFinite(e)
    }

    function Te(e) {
        if (! function(e) {
                return "object" === h(e) && null !== e
            }(e) || "[object Object]" !== function(e) {
                return null === e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
            }(e)) return !1;
        if (null === Object.getPrototypeOf(e)) return !0;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function Ee(e) {
        var t = e.start,
            n = void 0 === t ? 0 : t,
            r = e.end,
            i = e.step,
            a = void 0 === i ? 1 : i,
            s = 0 === a ? 1 : a,
            o = Math.round((r - n) / s);
        return P(Array(o)).map(function(e, t) {
            return n + t * s
        })
    }

    function ke(e) {
        return e !== Object(e)
    }

    function Le(e, t) {
        if (e === t) return !0;
        if (ke(e) || ke(t) || "function" == typeof e || "function" == typeof t) return e === t;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var i = r[n];
            if (!(i in t)) return !1;
            if (!Le(e[i], t[i])) return !1
        }
        return !0
    }
    var Me = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        je = /[&<>"']/g,
        Oe = RegExp(je.source);
    var He = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        },
        Ae = /&(amp|quot|lt|gt|#39);/g,
        De = RegExp(Ae.source);
    var We = {
            highlightPreTag: "__ais-highlight__",
            highlightPostTag: "__/ais-highlight__"
        },
        Be = {
            highlightPreTag: "<mark>",
            highlightPostTag: "</mark>"
        };

    function Ue(e) {
        return function(e) {
            return e && Oe.test(e) ? e.replace(je, function(e) {
                return Me[e]
            }) : e
        }(e).replace(new RegExp(We.highlightPreTag, "g"), Be.highlightPreTag).replace(new RegExp(We.highlightPostTag, "g"), Be.highlightPostTag)
    }

    function Qe(n) {
        return Te(n) && "string" != typeof n.value ? Object.keys(n).reduce(function(e, t) {
            return D(D({}, e), {}, M({}, t, Qe(n[t])))
        }, {}) : Array.isArray(n) ? n.map(Qe) : D(D({}, n), {}, {
            value: Ue(n.value)
        })
    }

    function qe(e) {
        return void 0 === e.__escaped && ((e = e.map(function(e) {
            var t = d({}, e);
            return t._highlightResult && (t._highlightResult = Qe(t._highlightResult)), t._snippetResult && (t._snippetResult = Qe(t._snippetResult)), t
        })).__escaped = !0), e
    }

    function $e(e) {
        return e.map(function(e) {
            return D(D({}, e), {}, {
                highlighted: Ue(e.highlighted)
            })
        })
    }

    function Ve(e) {
        var t = Be.highlightPreTag,
            n = Be.highlightPostTag;
        return e.map(function(e) {
            return e.isHighlighted ? t + e.value + n : e.value
        }).join("")
    }

    function Ke(e) {
        var n = Be.highlightPostTag,
            t = Be.highlightPreTag,
            r = e.split(t),
            i = r.shift(),
            a = i ? [{
                value: i,
                isHighlighted: !1
            }] : [];
        return r.forEach(function(e) {
            var t = e.split(n);
            a.push({
                value: t[0],
                isHighlighted: !0
            }), "" !== t[1] && a.push({
                value: t[1],
                isHighlighted: !1
            })
        }), a
    }
    var ze = new RegExp(/\w/i);

    function Je(e, t) {
        var n, r, i = e[t],
            a = (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0,
            s = (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0;
        return ze.test(function(e) {
            return e && De.test(e) ? e.replace(Ae, function(e) {
                return He[e]
            }) : e
        }(i.value)) || s !== a ? i.isHighlighted : s
    }

    function Ye(n) {
        return n.some(function(e) {
            return e.isHighlighted
        }) ? n.map(function(e, t) {
            return D(D({}, e), {}, {
                isHighlighted: !Je(n, t)
            })
        }) : n.map(function(e) {
            return D(D({}, e), {}, {
                isHighlighted: !1
            })
        })
    }

    function Ge(e, t) {
        return e.setQueryParameters({
            hierarchicalFacets: t.hierarchicalFacets.reduce(function(e, t) {
                var n = function(e, t) {
                    if (!Array.isArray(e)) return -1;
                    for (var n = 0; n < e.length; n++)
                        if (t(e[n])) return n;
                    return -1
                }(e, function(e) {
                    return e.name === t.name
                });
                if (-1 === n) return e.concat(t);
                var r = e.slice();
                return r.splice(n, 1, t), r
            }, e.hierarchicalFacets)
        })
    }

    function Ze() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return t.reduce(function(e, t) {
            var n = function(e, t) {
                return e.setQueryParameters({
                    hierarchicalFacetsRefinements: D(D({}, e.hierarchicalFacetsRefinements), t.hierarchicalFacetsRefinements)
                })
            }(e, t);
            return function(e, t) {
                t.facets, t.disjunctiveFacets, t.facetsRefinements, t.facetsExcludes, t.disjunctiveFacetsRefinements, t.numericRefinements, t.tagRefinements, t.hierarchicalFacets, t.hierarchicalFacetsRefinements, t.ruleContexts;
                var n = O(t, ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"]);
                return e.setQueryParameters(n)
            }(function(e, t) {
                return t.facets.reduce(function(e, t) {
                    return e.addFacet(t)
                }, e)
            }(function(e, t) {
                var n = fe([].concat(e.ruleContexts).concat(t.ruleContexts).filter(Boolean));
                return 0 < n.length ? e.setQueryParameters({
                    ruleContexts: n
                }) : e
            }(function(e, t) {
                return t.disjunctiveFacets.reduce(function(e, t) {
                    return e.addDisjunctiveFacet(t)
                }, e)
            }(function(e, t) {
                return e.setQueryParameters({
                    facetsRefinements: D(D({}, e.facetsRefinements), t.facetsRefinements)
                })
            }(function(e, t) {
                return e.setQueryParameters({
                    facetsExcludes: D(D({}, e.facetsExcludes), t.facetsExcludes)
                })
            }(function(e, t) {
                return e.setQueryParameters({
                    disjunctiveFacetsRefinements: D(D({}, e.disjunctiveFacetsRefinements), t.disjunctiveFacetsRefinements)
                })
            }(function(e, t) {
                return e.setQueryParameters({
                    numericRefinements: D(D({}, e.numericRefinements), t.numericRefinements)
                })
            }(function(e, t) {
                return t.tagRefinements.reduce(function(e, t) {
                    return e.addTagRefinement(t)
                }, e)
            }(Ge(n, t), t), t), t), t), t), t), t), t), t)
        })
    }

    function Xe(e) {
        return Array.isArray(e) ? e : [e]
    }

    function et() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t.map(function(e) {
            return function(e) {
                var t = e.name,
                    n = e.connector;
                return ["https://www.algolia.com/doc/api-reference/widgets/", t, "/js/", void 0 !== n && n ? "#connector" : ""].join("")
            }(e)
        }).join(", ");
        return function(e) {
            return [e, "See documentation: ".concat(r)].filter(Boolean).join("\n\n")
        }
    }
    var tt = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;

    function nt(e) {
        return Array.isArray(e) ? function(e) {
            var t = W(e, 1)[0],
                n = W(t = void 0 === t ? [void 0, void 0, void 0, void 0] : t, 4),
                r = n[0],
                i = n[1],
                a = n[2],
                s = n[3];
            if (!(r && i && a && s)) throw new Error('Invalid value for "insideBoundingBox" parameter: ['.concat(e, "]"));
            return {
                northEast: {
                    lat: r,
                    lng: i
                },
                southWest: {
                    lat: a,
                    lng: s
                }
            }
        }(e) : function(e) {
            var t = W(e.split(",").map(parseFloat), 4),
                n = t[0],
                r = t[1],
                i = t[2],
                a = t[3];
            if (!(n && r && i && a)) throw new Error('Invalid value for "insideBoundingBox" parameter: "'.concat(e, '"'));
            return {
                northEast: {
                    lat: n,
                    lng: r
                },
                southWest: {
                    lat: i,
                    lng: a
                }
            }
        }(e)
    }

    function rt(e, n, r) {
        return e.map(function(e, t) {
            return D(D({}, e), {}, {
                __position: r * n + t + 1
            })
        })
    }

    function it(e, t) {
        return t ? e.map(function(e) {
            return D(D({}, e), {}, {
                __queryID: t
            })
        }) : e
    }

    function at(e) {
        var o = e.instantSearchInstance,
            c = e.helper,
            u = e.attribute,
            l = e.widgetType;
        return function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t[0],
                i = t[1],
                a = t[2],
                s = void 0 === a ? "Filter Applied" : a;
            1 === t.length && "object" === h(t[0]) ? o.sendEventToInsights(t[0]) : "click" !== r || 2 !== t.length && 3 !== t.length || function(e, t, n) {
                return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, n) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, n) : e.state.isDisjunctiveFacetRefined(t, n)
            }(c, u, i) || o.sendEventToInsights({
                insightsMethod: "clickedFilters",
                widgetType: l,
                eventType: r,
                payload: {
                    eventName: s,
                    index: c.getIndex(),
                    filters: ["".concat(u, ":").concat(i)]
                }
            })
        }
    }

    function st(e) {
        var t = e.index,
            n = e.widgetType,
            r = (e.methodName, e.args);
        if (1 === r.length && "object" === h(r[0])) return r[0];
        var i = r[0],
            a = r[1],
            s = r[2];
        if (!a) return null;
        if (("click" === i || "conversion" === i) && !s) return null;
        var o = Array.isArray(a) ? a : [a];
        if (0 === o.length) return null;
        var c = o[0].__queryID,
            u = o.map(function(e) {
                return e.objectID
            }),
            l = o.map(function(e) {
                return e.__position
            });
        return "view" === i ? {
            insightsMethod: "viewedObjectIDs",
            widgetType: n,
            eventType: i,
            payload: {
                eventName: s || "Hits Viewed",
                index: t,
                objectIDs: u
            }
        } : "click" === i ? {
            insightsMethod: "clickedObjectIDsAfterSearch",
            widgetType: n,
            eventType: i,
            payload: {
                eventName: s,
                index: t,
                queryID: c,
                objectIDs: u,
                positions: l
            }
        } : "conversion" === i ? {
            insightsMethod: "convertedObjectIDsAfterSearch",
            widgetType: n,
            eventType: i,
            payload: {
                eventName: s,
                index: t,
                queryID: c,
                objectIDs: u
            }
        } : null
    }

    function ot(e) {
        var i = e.instantSearchInstance,
            a = e.index,
            s = e.widgetType;
        return function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = st({
                widgetType: s,
                index: a,
                methodName: "sendEvent",
                args: t
            });
            r && i.sendEventToInsights(r)
        }
    }

    function ct(e) {
        var i = e.index,
            a = e.widgetType;
        return function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = st({
                widgetType: a,
                index: i,
                methodName: "bindEvent",
                args: t
            });
            return r ? "data-insights-event=".concat(btoa(JSON.stringify(r))) : ""
        }
    }

    function ut(e, n) {
        if (!e) return null;
        var r = e.numericRefinements[n],
            i = [];
        return Object.keys(r).filter(function(e) {
            return Array.isArray(r[e]) && 0 < r[e].length
        }).forEach(function(t) {
            r[t].forEach(function(e) {
                i.push("".concat(n).concat(t).concat(e))
            })
        }), i
    }
    var lt = et({
        name: "index-widget"
    });

    function ht(e) {
        return "ais.index" === e.$$type
    }

    function dt(e, t) {
        var n = t.state,
            r = t.isPageReset,
            i = t._uiState;
        n !== e.state && (e.state = n, e.emit("change", {
            state: e.state,
            results: e.lastResults,
            isPageReset: r,
            _uiState: i
        }))
    }

    function ft(e, n, t) {
        var r = 2 < arguments.length && void 0 !== t ? t : {};
        return e.filter(function(e) {
            return !ht(e)
        }).reduce(function(e, t) {
            return t.getWidgetUiState || t.getWidgetState ? t.getWidgetUiState ? t.getWidgetUiState(e, n) : t.getWidgetState(e, n) : e
        }, r)
    }

    function mt(e, t) {
        var n = t.initialSearchParameters,
            r = O(t, ["initialSearchParameters"]);
        return e.filter(function(e) {
            return !ht(e)
        }).reduce(function(e, t) {
            return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, r) : e
        }, n)
    }

    function pt(e) {
        if (void 0 === e || void 0 === e.indexName) throw new Error(lt("The `indexName` option is required."));
        var o = e.indexName,
            t = e.indexId,
            c = void 0 === t ? o : t,
            u = [],
            l = {},
            h = null,
            d = null,
            f = null,
            m = null;
        return {
            $$type: "ais.index",
            $$widgetType: "ais.index",
            getIndexName: function() {
                return o
            },
            getIndexId: function() {
                return c
            },
            getHelper: function() {
                return f
            },
            getResults: function() {
                return m && m.lastResults
            },
            getScopedResults: function() {
                var e = this.getParent();
                return function n(e) {
                    return e.filter(ht).reduce(function(e, t) {
                        return e.concat.apply(e, [{
                            indexId: t.getIndexId(),
                            results: t.getResults(),
                            helper: t.getHelper()
                        }].concat(P(n(t.getWidgets()))))
                    }, [])
                }(e ? e.getWidgets() : [this])
            },
            getParent: function() {
                return d
            },
            createURL: function(e) {
                return h._createURL(M({}, c, ft(u, {
                    searchParameters: e,
                    helper: f
                })))
            },
            getWidgets: function() {
                return u
            },
            addWidgets: function(e) {
                var t = this;
                if (!Array.isArray(e)) throw new Error(lt("The `addWidgets` method expects an array of widgets."));
                if (e.some(function(e) {
                        return "function" != typeof e.init && "function" != typeof e.render
                    })) throw new Error(lt("The widget definition expects a `render` and/or an `init` method."));
                return u = u.concat(e), h && Boolean(e.length) && (dt(f, {
                    state: mt(u, {
                        uiState: l,
                        initialSearchParameters: f.state
                    }),
                    _uiState: l
                }), e.forEach(function(e) {
                    e.getRenderState && gt({
                        renderState: e.getRenderState(h.renderState[t.getIndexId()] || {}, {
                            uiState: h._initialUiState,
                            helper: t.getHelper(),
                            parent: t,
                            instantSearchInstance: h,
                            state: f.state,
                            renderState: h.renderState,
                            templatesConfig: h.templatesConfig,
                            createURL: t.createURL,
                            scopedResults: [],
                            searchMetadata: {
                                isSearchStalled: h._isSearchStalled
                            }
                        }),
                        instantSearchInstance: h,
                        parent: t
                    })
                }), e.forEach(function(e) {
                    e.init && e.init({
                        helper: f,
                        parent: t,
                        uiState: h._initialUiState,
                        instantSearchInstance: h,
                        state: f.state,
                        renderState: h.renderState,
                        templatesConfig: h.templatesConfig,
                        createURL: t.createURL,
                        scopedResults: [],
                        searchMetadata: {
                            isSearchStalled: h._isSearchStalled
                        }
                    })
                }), h.scheduleSearch()), this
            },
            removeWidgets: function(t) {
                if (!Array.isArray(t)) throw new Error(lt("The `removeWidgets` method expects an array of widgets."));
                if (t.some(function(e) {
                        return "function" != typeof e.dispose
                    })) throw new Error(lt("The widget definition expects a `dispose` method."));
                if (u = u.filter(function(e) {
                        return -1 === t.indexOf(e)
                    }), h && Boolean(t.length)) {
                    var e = t.reduce(function(e, t) {
                        return t.dispose({
                            helper: f,
                            state: e
                        }) || e
                    }, f.state);
                    l = ft(u, {
                        searchParameters: e,
                        helper: f
                    }), f.setState(mt(u, {
                        uiState: l,
                        initialSearchParameters: e
                    })), u.length && h.scheduleSearch()
                }
                return this
            },
            init: function(e) {
                var t = this,
                    r = e.instantSearchInstance,
                    n = e.parent,
                    i = e.uiState;
                if (null === f) {
                    h = r, d = n, l = i[c] || {};
                    var a = r.mainHelper,
                        s = mt(u, {
                            uiState: l,
                            initialSearchParameters: new ce.SearchParameters({
                                index: o
                            })
                        });
                    (f = ce({}, s.index, s)).search = function() {
                        return r.onStateChange ? (r.onStateChange({
                            uiState: r.mainIndex.getWidgetUiState({}),
                            setUiState: r.setUiState.bind(r)
                        }), a) : a.search()
                    }, f.searchWithoutTriggeringOnStateChange = function() {
                        return a.search()
                    }, f.searchForFacetValues = function(e, t, n, r) {
                        var i = f.state.setQueryParameters(r);
                        return a.searchForFacetValues(e, t, n, i)
                    }, m = a.derive(function() {
                        return Ze.apply(void 0, P(function(e) {
                            for (var t = e.getParent(), n = [e.getHelper().state]; null !== t;) n = [t.getHelper().state].concat(n), t = t.getParent();
                            return n
                        }(t)))
                    }), f.on("change", function(e) {
                        e.isPageReset && ! function n(e) {
                            var t = e.filter(ht);
                            0 !== t.length && t.forEach(function(e) {
                                var t = e.getHelper();
                                dt(t, {
                                    state: t.state.resetPage(),
                                    isPageReset: !0
                                }), n(e.getWidgets())
                            })
                        }(u)
                    }), m.on("search", function() {
                        r.scheduleStalledRender()
                    }), m.on("result", function(e) {
                        var t = e.results;
                        r.scheduleRender(), f.lastResults = t
                    }), u.forEach(function(e) {
                        e.getRenderState && gt({
                            renderState: e.getRenderState(r.renderState[t.getIndexId()] || {}, {
                                uiState: i,
                                helper: f,
                                parent: t,
                                instantSearchInstance: r,
                                state: f.state,
                                renderState: r.renderState,
                                templatesConfig: r.templatesConfig,
                                createURL: t.createURL,
                                scopedResults: [],
                                searchMetadata: {
                                    isSearchStalled: r._isSearchStalled
                                }
                            }),
                            instantSearchInstance: r,
                            parent: t
                        })
                    }), u.forEach(function(e) {
                        e.init && e.init({
                            uiState: i,
                            helper: f,
                            parent: t,
                            instantSearchInstance: r,
                            state: f.state,
                            renderState: r.renderState,
                            templatesConfig: r.templatesConfig,
                            createURL: t.createURL,
                            scopedResults: [],
                            searchMetadata: {
                                isSearchStalled: r._isSearchStalled
                            }
                        })
                    }), f.on("change", function(e) {
                        var t = e.state,
                            n = e._uiState;
                        l = ft(u, {
                            searchParameters: t,
                            helper: f
                        }, n || {}), r.onStateChange || r.onInternalStateChange()
                    })
                }
            },
            render: function(e) {
                var t = this,
                    n = e.instantSearchInstance;
                this.getResults() && (u.forEach(function(e) {
                    e.getRenderState && gt({
                        renderState: e.getRenderState(n.renderState[t.getIndexId()] || {}, {
                            helper: t.getHelper(),
                            parent: t,
                            instantSearchInstance: n,
                            results: t.getResults(),
                            scopedResults: t.getScopedResults(),
                            state: t.getResults()._state,
                            renderState: n.renderState,
                            templatesConfig: n.templatesConfig,
                            createURL: t.createURL,
                            searchMetadata: {
                                isSearchStalled: n._isSearchStalled
                            }
                        }),
                        instantSearchInstance: n,
                        parent: t
                    })
                }), u.forEach(function(e) {
                    e.render && e.render({
                        helper: f,
                        parent: t,
                        instantSearchInstance: n,
                        results: t.getResults(),
                        scopedResults: t.getScopedResults(),
                        state: t.getResults()._state,
                        renderState: n.renderState,
                        templatesConfig: n.templatesConfig,
                        createURL: t.createURL,
                        searchMetadata: {
                            isSearchStalled: n._isSearchStalled
                        }
                    })
                }))
            },
            dispose: function() {
                u.forEach(function(e) {
                    e.dispose && e.dispose({
                        helper: f,
                        state: f.state
                    })
                }), d = h = null, f.removeAllListeners(), f = null, m.detach(), m = null
            },
            getWidgetUiState: function(e) {
                return u.filter(ht).reduce(function(e, t) {
                    return t.getWidgetUiState(e)
                }, D(D({}, e), {}, M({}, this.getIndexId(), l)))
            },
            getWidgetState: function(e) {
                return this.getWidgetUiState(e)
            },
            getWidgetSearchParameters: function(e, t) {
                var n = t.uiState;
                return mt(u, {
                    uiState: n,
                    initialSearchParameters: e
                })
            },
            refreshUiState: function() {
                l = ft(u, {
                    searchParameters: this.getHelper().state,
                    helper: this.getHelper()
                })
            }
        }
    }

    function gt(e) {
        var t = e.renderState,
            n = e.instantSearchInstance,
            r = e.parent,
            i = r ? r.getIndexId() : n.mainIndex.getIndexId();
        n.renderState = D(D({}, n.renderState), {}, M({}, i, D(D({}, n.renderState[i]), t)))
    }

    function vt(a) {
        return function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.descendantName,
                n = e.modifierName,
                r = t ? "-".concat(t) : "",
                i = n ? "--".concat(n) : "";
            return "".concat("ais", "-").concat(a).concat(r).concat(i)
        }
    }
    var yt = vt("Highlight");

    function bt(e) {
        var t = e.attribute,
            n = e.highlightedTagName,
            r = void 0 === n ? "mark" : n,
            i = e.hit,
            a = e.cssClasses,
            s = void 0 === a ? {} : a,
            o = (Fe(i._highlightResult, t) || {}).value,
            c = void 0 === o ? "" : o,
            u = yt({
                descendantName: "highlighted"
            }) + (s.highlighted ? " ".concat(s.highlighted) : "");
        return c.replace(new RegExp(Be.highlightPreTag, "g"), "<".concat(r, ' class="').concat(u, '">')).replace(new RegExp(Be.highlightPostTag, "g"), "</".concat(r, ">"))
    }
    var St = vt("ReverseHighlight");

    function Rt(e) {
        var t = e.attribute,
            n = e.highlightedTagName,
            r = void 0 === n ? "mark" : n,
            i = e.hit,
            a = e.cssClasses,
            s = void 0 === a ? {} : a,
            o = (Fe(i._highlightResult, t) || {}).value,
            c = void 0 === o ? "" : o,
            u = St({
                descendantName: "highlighted"
            }) + (s.highlighted ? " ".concat(s.highlighted) : "");
        return Ve(Ye(Ke(c))).replace(new RegExp(Be.highlightPreTag, "g"), "<".concat(r, ' class="').concat(u, '">')).replace(new RegExp(Be.highlightPostTag, "g"), "</".concat(r, ">"))
    }
    var wt = vt("Snippet");

    function Pt(e) {
        var t = e.attribute,
            n = e.highlightedTagName,
            r = void 0 === n ? "mark" : n,
            i = e.hit,
            a = e.cssClasses,
            s = void 0 === a ? {} : a,
            o = (Fe(i._snippetResult, t) || {}).value,
            c = void 0 === o ? "" : o,
            u = wt({
                descendantName: "highlighted"
            }) + (s.highlighted ? " ".concat(s.highlighted) : "");
        return c.replace(new RegExp(Be.highlightPreTag, "g"), "<".concat(r, ' class="').concat(u, '">')).replace(new RegExp(Be.highlightPostTag, "g"), "</".concat(r, ">"))
    }
    var Nt = vt("ReverseSnippet");

    function xt(e) {
        var t = e.attribute,
            n = e.highlightedTagName,
            r = void 0 === n ? "mark" : n,
            i = e.hit,
            a = e.cssClasses,
            s = void 0 === a ? {} : a,
            o = (Fe(i._snippetResult, t) || {}).value,
            c = void 0 === o ? "" : o,
            u = Nt({
                descendantName: "highlighted"
            }) + (s.highlighted ? " ".concat(s.highlighted) : "");
        return Ve(Ye(Ke(c))).replace(new RegExp(Be.highlightPreTag, "g"), "<".concat(r, ' class="').concat(u, '">')).replace(new RegExp(Be.highlightPostTag, "g"), "</".concat(r, ">"))
    }

    function _t(e, t) {
        return function(e) {
            var t, n = e.method,
                r = e.payload;
            if ("object" !== h(r)) throw new Error("The insights helper expects the payload to be an object.");
            try {
                t = btoa(JSON.stringify(r))
            } catch (e) {
                throw new Error("Could not JSON serialize the payload object.")
            }
            return 'data-insights-method="'.concat(n, '" data-insights-payload="').concat(t, '"')
        }({
            method: e,
            payload: t
        })
    }

    function It() {
        return function(e) {
            for (var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var i = n[r];
                    " " === i.charAt(0);) i = i.substring(1);
                if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
            }
        }("_ALGOLIA")
    }

    function Ft(e) {
        e.configure;
        return O(e, ["configure"])
    }

    function Ct() {
        return {
            stateToRoute: function(n) {
                return Object.keys(n).reduce(function(e, t) {
                    return D(D({}, e), {}, M({}, t, Ft(n[t])))
                }, {})
            },
            routeToState: function(e) {
                var n = 0 < arguments.length && void 0 !== e ? e : {};
                return Object.keys(n).reduce(function(e, t) {
                    return D(D({}, e), {}, M({}, t, Ft(n[t])))
                }, {})
            }
        }
    }

    function Tt(e, t) {
        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
        return n
    }

    function Et(e, t) {
        zt.apply(e, Kt(t) ? t : [t])
    }

    function kt(e, t, n, r, i, a, s, o, c, u, l, h, d) {
        var f = e;
        if ("function" == typeof s ? f = s(t, f) : f instanceof Date ? f = u(f) : "comma" === n && Kt(f) && (f = f.join(",")), null === f) {
            if (r) return a && !h ? a(t, Gt.encoder, d) : t;
            f = ""
        }
        if (function(e) {
                return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == typeof e || "bigint" == typeof e
            }(f) || Wt.isBuffer(f)) return a ? [l(h ? t : a(t, Gt.encoder, d)) + "=" + l(a(f, Gt.encoder, d))] : [l(t) + "=" + l(String(f))];
        var m, p = [];
        if (void 0 === f) return p;
        if (Kt(s)) m = s;
        else {
            var g = Object.keys(f);
            m = o ? g.sort(o) : g
        }
        for (var v = 0; v < m.length; ++v) {
            var y = m[v];
            i && null === f[y] || (Kt(f) ? Et(p, kt(f[y], "function" == typeof n ? n(t, y) : t, n, r, i, a, s, o, c, u, l, h, d)) : Et(p, kt(f[y], t + (c ? "." + y : "[" + y + "]"), n, r, i, a, s, o, c, u, l, h, d)))
        }
        return p
    }

    function Lt(e, t, n) {
        if (e) {
            var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                i = /(\[[^[\]]*])/g,
                a = 0 < n.depth && /(\[[^[\]]*])/.exec(r),
                s = a ? r.slice(0, a.index) : r,
                o = [];
            if (s) {
                if (!n.plainObjects && Zt.call(Object.prototype, s) && !n.allowPrototypes) return;
                o.push(s)
            }
            for (var c = 0; 0 < n.depth && null !== (a = i.exec(r)) && c < n.depth;) {
                if (c += 1, !n.plainObjects && Zt.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes) return;
                o.push(a[1])
            }
            return a && o.push("[" + r.slice(a.index) + "]"),
                function(e, t, n) {
                    for (var r = t, i = e.length - 1; 0 <= i; --i) {
                        var a, s = e[i];
                        if ("[]" === s && n.parseArrays) a = [].concat(r);
                        else {
                            a = n.plainObjects ? Object.create(null) : {};
                            var o = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s,
                                c = parseInt(o, 10);
                            n.parseArrays || "" !== o ? !isNaN(c) && s !== o && String(c) === o && 0 <= c && n.parseArrays && c <= n.arrayLimit ? (a = [])[c] = r : a[o] = r : a = {
                                0: r
                            }
                        }
                        r = a
                    }
                    return r
                }(o, t, n)
        }
    }

    function Mt(e) {
        var t = e.qsModule,
            n = e.routeState,
            r = e.location,
            i = r.protocol,
            a = r.hostname,
            s = r.port,
            o = void 0 === s ? "" : s,
            c = r.pathname,
            u = r.hash,
            l = t.stringify(n),
            h = "" === o ? "" : ":".concat(o);
        return l ? "".concat(i, "//").concat(a).concat(h).concat(c, "?").concat(l).concat(u) : "".concat(i, "//").concat(a).concat(h).concat(c).concat(u)
    }

    function jt(e) {
        var t = e.qsModule,
            n = e.location;
        return t.parse(n.search.slice(1), {
            arrayLimit: 99
        })
    }

    function Ot(e) {
        e && (window.document.title = e)
    }
    var Ht = Object.prototype.hasOwnProperty,
        At = Array.isArray,
        Dt = function() {
            for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
            return e
        }(),
        Wt = {
            arrayToObject: Tt,
            assign: function(e, n) {
                return Object.keys(n).reduce(function(e, t) {
                    return e[t] = n[t], e
                }, e)
            },
            combine: function(e, t) {
                return [].concat(e, t)
            },
            compact: function(e) {
                for (var t = [{
                        obj: {
                            o: e
                        },
                        prop: "o"
                    }], n = [], r = 0; r < t.length; ++r)
                    for (var i = t[r], a = i.obj[i.prop], s = Object.keys(a), o = 0; o < s.length; ++o) {
                        var c = s[o],
                            u = a[c];
                        "object" == typeof u && null !== u && -1 === n.indexOf(u) && (t.push({
                            obj: a,
                            prop: c
                        }), n.push(u))
                    }
                return function(e) {
                    for (; 1 < e.length;) {
                        var t = e.pop(),
                            n = t.obj[t.prop];
                        if (At(n)) {
                            for (var r = [], i = 0; i < n.length; ++i) void 0 !== n[i] && r.push(n[i]);
                            t.obj[t.prop] = r
                        }
                    }
                }(t), e
            },
            decode: function(e, t, n) {
                var r = e.replace(/\+/g, " ");
                if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(r)
                } catch (e) {
                    return r
                }
            },
            encode: function(e, t, n) {
                if (0 === e.length) return e;
                var r = e;
                if ("symbol" == typeof e ? r = Symbol.prototype.toString.call(e) : "string" != typeof e && (r = String(e)), "iso-8859-1" === n) return escape(r).replace(/%u[0-9a-f]{4}/gi, function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                });
                for (var i = "", a = 0; a < r.length; ++a) {
                    var s = r.charCodeAt(a);
                    45 === s || 46 === s || 95 === s || 126 === s || 48 <= s && s <= 57 || 65 <= s && s <= 90 || 97 <= s && s <= 122 ? i += r.charAt(a) : s < 128 ? i += Dt[s] : s < 2048 ? i += Dt[192 | s >> 6] + Dt[128 | 63 & s] : s < 55296 || 57344 <= s ? i += Dt[224 | s >> 12] + Dt[128 | s >> 6 & 63] + Dt[128 | 63 & s] : (a += 1, s = 65536 + ((1023 & s) << 10 | 1023 & r.charCodeAt(a)), i += Dt[240 | s >> 18] + Dt[128 | s >> 12 & 63] + Dt[128 | s >> 6 & 63] + Dt[128 | 63 & s])
                }
                return i
            },
            isBuffer: function(e) {
                return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            merge: function r(i, a, s) {
                if (!a) return i;
                if ("object" != typeof a) {
                    if (At(i)) i.push(a);
                    else {
                        if (!i || "object" != typeof i) return [i, a];
                        (s && (s.plainObjects || s.allowPrototypes) || !Ht.call(Object.prototype, a)) && (i[a] = !0)
                    }
                    return i
                }
                if (!i || "object" != typeof i) return [i].concat(a);
                var e = i;
                return At(i) && !At(a) && (e = Tt(i, s)), At(i) && At(a) ? (a.forEach(function(e, t) {
                    if (Ht.call(i, t)) {
                        var n = i[t];
                        n && "object" == typeof n && e && "object" == typeof e ? i[t] = r(n, e, s) : i.push(e)
                    } else i[t] = e
                }), i) : Object.keys(a).reduce(function(e, t) {
                    var n = a[t];
                    return Ht.call(e, t) ? e[t] = r(e[t], n, s) : e[t] = n, e
                }, e)
            }
        },
        Bt = String.prototype.replace,
        Ut = /%20/g,
        Qt = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        qt = Wt.assign({
            default: Qt.RFC3986,
            formatters: {
                RFC1738: function(e) {
                    return Bt.call(e, Ut, "+")
                },
                RFC3986: function(e) {
                    return String(e)
                }
            }
        }, Qt),
        $t = Object.prototype.hasOwnProperty,
        Vt = {
            brackets: function(e) {
                return e + "[]"
            },
            comma: "comma",
            indices: function(e, t) {
                return e + "[" + t + "]"
            },
            repeat: function(e) {
                return e
            }
        },
        Kt = Array.isArray,
        zt = Array.prototype.push,
        Jt = Date.prototype.toISOString,
        Yt = qt.default,
        Gt = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: Wt.encode,
            encodeValuesOnly: !1,
            format: Yt,
            formatter: qt.formatters[Yt],
            indices: !1,
            serializeDate: function(e) {
                return Jt.call(e)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        Zt = Object.prototype.hasOwnProperty,
        Xt = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: Wt.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1
        },
        en = {
            formats: qt,
            parse: function(e, t) {
                var n = function(e) {
                    if (!e) return Xt;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = void 0 === e.charset ? Xt.charset : e.charset;
                    return {
                        allowDots: void 0 === e.allowDots ? Xt.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : Xt.allowPrototypes,
                        arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : Xt.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : Xt.charsetSentinel,
                        comma: "boolean" == typeof e.comma ? e.comma : Xt.comma,
                        decoder: "function" == typeof e.decoder ? e.decoder : Xt.decoder,
                        delimiter: "string" == typeof e.delimiter || Wt.isRegExp(e.delimiter) ? e.delimiter : Xt.delimiter,
                        depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : Xt.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : Xt.interpretNumericEntities,
                        parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : Xt.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : Xt.plainObjects,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : Xt.strictNullHandling
                    }
                }(t);
                if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
                for (var r = "string" == typeof e ? function(e, t) {
                        var n, r = {},
                            i = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                            a = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                            s = i.split(t.delimiter, a),
                            o = -1,
                            c = t.charset;
                        if (t.charsetSentinel)
                            for (n = 0; n < s.length; ++n) 0 === s[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === s[n] ? c = "utf-8" : "utf8=%26%2310003%3B" === s[n] && (c = "iso-8859-1"), o = n, n = s.length);
                        for (n = 0; n < s.length; ++n)
                            if (n !== o) {
                                var u, l, h = s[n],
                                    d = h.indexOf("]="),
                                    f = -1 === d ? h.indexOf("=") : d + 1;
                                (l = -1 === f ? (u = t.decoder(h, Xt.decoder, c), t.strictNullHandling ? null : "") : (u = t.decoder(h.slice(0, f), Xt.decoder, c), t.decoder(h.slice(f + 1), Xt.decoder, c))) && t.interpretNumericEntities && "iso-8859-1" === c && (l = l.replace(/&#(\d+);/g, function(e, t) {
                                    return String.fromCharCode(parseInt(t, 10))
                                })), l && t.comma && -1 < l.indexOf(",") && (l = l.split(",")), Zt.call(r, u) ? r[u] = Wt.combine(r[u], l) : r[u] = l
                            } return r
                    }(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, a = Object.keys(r), s = 0; s < a.length; ++s) {
                    var o = a[s],
                        c = Lt(o, r[o], n);
                    i = Wt.merge(i, c, n)
                }
                return Wt.compact(i)
            },
            stringify: function(e, t) {
                var n, r = e,
                    i = function(e) {
                        if (!e) return Gt;
                        if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                        var t = e.charset || Gt.charset;
                        if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var n = qt.default;
                        if (void 0 !== e.format) {
                            if (!$t.call(qt.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            n = e.format
                        }
                        var r = qt.formatters[n],
                            i = Gt.filter;
                        return "function" != typeof e.filter && !Kt(e.filter) || (i = e.filter), {
                            addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : Gt.addQueryPrefix,
                            allowDots: void 0 === e.allowDots ? Gt.allowDots : !!e.allowDots,
                            charset: t,
                            charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : Gt.charsetSentinel,
                            delimiter: void 0 === e.delimiter ? Gt.delimiter : e.delimiter,
                            encode: "boolean" == typeof e.encode ? e.encode : Gt.encode,
                            encoder: "function" == typeof e.encoder ? e.encoder : Gt.encoder,
                            encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : Gt.encodeValuesOnly,
                            filter: i,
                            formatter: r,
                            serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : Gt.serializeDate,
                            skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : Gt.skipNulls,
                            sort: "function" == typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : Gt.strictNullHandling
                        }
                    }(t);
                "function" == typeof i.filter ? r = (0, i.filter)("", r) : Kt(i.filter) && (n = i.filter);
                var a, s = [];
                if ("object" != typeof r || null === r) return "";
                a = t && t.arrayFormat in Vt ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
                var o = Vt[a];
                n = n || Object.keys(r), i.sort && n.sort(i.sort);
                for (var c = 0; c < n.length; ++c) {
                    var u = n[c];
                    i.skipNulls && null === r[u] || Et(s, kt(r[u], u, o, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.formatter, i.encodeValuesOnly, i.charset))
                }
                var l = s.join(i.delimiter),
                    h = !0 === i.addQueryPrefix ? "?" : "";
                return i.charsetSentinel && ("iso-8859-1" === i.charset ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), 0 < l.length ? h + l : ""
            }
        },
        tn = function() {
            function u() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.windowTitle,
                    n = e.writeDelay,
                    r = void 0 === n ? 400 : n,
                    i = e.createURL,
                    a = void 0 === i ? Mt : i,
                    s = e.parseURL,
                    o = void 0 === s ? jt : s;
                k(this, u), M(this, "windowTitle", void 0), M(this, "writeDelay", void 0), M(this, "_createURL", void 0), M(this, "parseURL", void 0), M(this, "writeTimer", void 0), this.windowTitle = t, this.writeTimer = void 0, this.writeDelay = r, this._createURL = a, this.parseURL = o;
                var c = this.windowTitle && this.windowTitle(this.read());
                Ot(c)
            }
            return L(u, [{
                key: "read",
                value: function() {
                    return this.parseURL({
                        qsModule: en,
                        location: window.location
                    })
                }
            }, {
                key: "write",
                value: function(e) {
                    var t = this,
                        n = this.createURL(e),
                        r = this.windowTitle && this.windowTitle(e);
                    this.writeTimer && window.clearTimeout(this.writeTimer), this.writeTimer = window.setTimeout(function() {
                        Ot(r), window.history.pushState(e, r || "", n), t.writeTimer = void 0
                    }, this.writeDelay)
                }
            }, {
                key: "onUpdate",
                value: function(n) {
                    var r = this;
                    this._onPopState = function(e) {
                        r.writeTimer && (window.clearTimeout(r.writeTimer), r.writeTimer = void 0);
                        var t = e.state;
                        n(t || r.read())
                    }, window.addEventListener("popstate", this._onPopState)
                }
            }, {
                key: "createURL",
                value: function(e) {
                    return this._createURL({
                        qsModule: en,
                        routeState: e,
                        location: window.location
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    this._onPopState && window.removeEventListener("popstate", this._onPopState), this.writeTimer && window.clearTimeout(this.writeTimer), this.write({})
                }
            }]), u
        }();

    function nn(e) {
        return new tn(e)
    }

    function rn(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = t.router,
            a = void 0 === n ? nn() : n,
            r = t.stateMapping,
            s = void 0 === r ? Ct() : r;
        return function(e) {
            var r = e.instantSearchInstance;
            r._createURL = function(n) {
                var e = Object.keys(n).reduce(function(e, t) {
                        return D(D({}, e), {}, M({}, t, n[t]))
                    }, r.mainIndex.getWidgetUiState({})),
                    t = s.stateToRoute(e);
                return a.createURL(t)
            }, r._initialUiState = D(D({}, r._initialUiState), s.routeToState(a.read()));
            var i = void 0;
            return {
                onStateChange: function(e) {
                    var t = e.uiState,
                        n = s.stateToRoute(t);
                    void 0 !== i && Le(i, n) || (a.write(n), i = n)
                },
                subscribe: function() {
                    a.onUpdate(function(e) {
                        r.setUiState(s.routeToState(e))
                    })
                },
                unsubscribe: function() {
                    a.dispose()
                }
            }
        }
    }

    function an() {
        return "undefined" != typeof window && -1 < window.navigator.userAgent.indexOf("Algolia Crawler")
    }

    function sn() {
        return function(e) {
            var t = e.instantSearchInstance,
                n = {
                    widgets: []
                },
                r = document.createElement("meta"),
                i = document.querySelector("head");
            return r.name = "instantsearch:widgets", {
                onStateChange: function() {},
                subscribe: function() {
                    setTimeout(function() {
                        ! function i(e, a, s) {
                            var t = a.mainIndex,
                                o = {
                                    instantSearchInstance: a,
                                    parent: t,
                                    scopedResults: [],
                                    state: t.getHelper().state,
                                    helper: t.getHelper(),
                                    createURL: t.createURL,
                                    uiState: a._initialUiState,
                                    renderState: a.renderState,
                                    templatesConfig: a.templatesConfig,
                                    searchMetadata: {
                                        isSearchStalled: a._isSearchStalled
                                    }
                                };
                            e.forEach(function(e) {
                                var t = {};
                                if (e.getWidgetRenderState) {
                                    var n = e.getWidgetRenderState(o);
                                    n && n.widgetParams && (t = n.widgetParams)
                                }
                                var r = Object.keys(t).filter(function(e) {
                                    return void 0 !== t[e]
                                });
                                s.widgets.push({
                                    type: e.$$type,
                                    widgetType: e.$$widgetType,
                                    params: r
                                }), "ais.index" === e.$$type && i(e.getWidgets(), a, s)
                            })
                        }(t.mainIndex.getWidgets(), t, n), r.content = JSON.stringify(n), i.appendChild(r)
                    }, 0)
                },
                unsubscribe: function() {
                    var e;
                    null === (e = r.parentNode) || void 0 === e || e.removeChild(r)
                }
            }
        }
    }
    var on = et({
        name: "instantsearch"
    });

    function cn() {
        return "#"
    }

    function un(h, e) {
        var d = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(h, hn()),
            function(r) {
                var e = r || {},
                    t = e.includedAttributes,
                    i = void 0 === t ? [] : t,
                    n = e.excludedAttributes,
                    a = void 0 === n ? ["query"] : n,
                    s = e.transformItems,
                    o = void 0 === s ? function(e) {
                        return e
                    } : s;
                if (r.includedAttributes && r.excludedAttributes) throw new Error(hn("The options `includedAttributes` and `excludedAttributes` cannot be used together."));

                function c() {
                    return l.refine()
                }

                function u() {
                    return l.createURL()
                }
                var l = {
                    refine: Ie,
                    createURL: function() {
                        return ""
                    },
                    attributesToClear: []
                };
                return {
                    $$type: "ais.clearRefinements",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        h(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        h(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function() {
                        d()
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            clearRefinements: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.createURL,
                            n = e.scopedResults;
                        return l.attributesToClear = n.reduce(function(e, t) {
                            return e.concat(function(e) {
                                var t = e.scopedResult,
                                    n = e.includedAttributes,
                                    r = e.excludedAttributes,
                                    i = e.transformItems,
                                    a = -1 !== n.indexOf("query") || -1 === r.indexOf("query");
                                return {
                                    helper: t.helper,
                                    items: i(fe(Pe(t.results, t.helper.state, a).map(function(e) {
                                        return e.attribute
                                    }).filter(function(e) {
                                        return 0 === n.length || -1 !== n.indexOf(e)
                                    }).filter(function(e) {
                                        return "query" === e && a || -1 === r.indexOf(e)
                                    })))
                                }
                            }({
                                scopedResult: t,
                                includedAttributes: i,
                                excludedAttributes: a,
                                transformItems: o
                            }))
                        }, []), l.refine = function() {
                            l.attributesToClear.forEach(function(e) {
                                var t = e.helper,
                                    n = e.items;
                                t.setState(Ne({
                                    helper: t,
                                    attributesToClear: n
                                })).search()
                            })
                        }, l.createURL = function() {
                            return t(Ze.apply(void 0, P(l.attributesToClear.map(function(e) {
                                return Ne({
                                    helper: e.helper,
                                    attributesToClear: e.items
                                })
                            }))))
                        }, {
                            hasRefinements: l.attributesToClear.some(function(e) {
                                return 0 < e.items.length
                            }),
                            refine: c,
                            createURL: u,
                            widgetParams: r
                        }
                    }
                }
            }
    }
    var ln = function() {
            j(S, e);
            var b = A(S);

            function S(e) {
                var n;
                k(this, S), M(H(n = b.call(this)), "client", void 0), M(H(n), "indexName", void 0), M(H(n), "insightsClient", void 0), M(H(n), "onStateChange", null), M(H(n), "helper", void 0), M(H(n), "mainHelper", void 0), M(H(n), "mainIndex", void 0), M(H(n), "started", void 0), M(H(n), "templatesConfig", void 0), M(H(n), "renderState", {}), M(H(n), "_stalledSearchDelay", void 0), M(H(n), "_searchStalledTimer", void 0), M(H(n), "_isSearchStalled", void 0), M(H(n), "_initialUiState", void 0), M(H(n), "_createURL", void 0), M(H(n), "_searchFunction", void 0), M(H(n), "_mainHelperSearch", void 0), M(H(n), "middleware", []), M(H(n), "sendEventToInsights", void 0), M(H(n), "scheduleSearch", ue(function() {
                    n.started && n.mainHelper.search()
                })), M(H(n), "scheduleRender", ue(function() {
                    n.mainHelper.hasPendingRequests() || (clearTimeout(n._searchStalledTimer), n._searchStalledTimer = null, n._isSearchStalled = !1), n.mainIndex.render({
                        instantSearchInstance: H(n)
                    }), n.emit("render")
                })), M(H(n), "onInternalStateChange", function() {
                    var t = n.mainIndex.getWidgetUiState({});
                    n.middleware.forEach(function(e) {
                        e.onStateChange({
                            uiState: t
                        })
                    })
                });
                var t = e.indexName,
                    r = void 0 === t ? null : t,
                    i = e.numberLocale,
                    a = e.initialUiState,
                    s = void 0 === a ? {} : a,
                    o = e.routing,
                    c = void 0 === o ? null : o,
                    u = e.searchFunction,
                    l = e.stalledSearchDelay,
                    h = void 0 === l ? 200 : l,
                    d = e.searchClient,
                    f = void 0 === d ? null : d,
                    m = e.insightsClient,
                    p = void 0 === m ? null : m,
                    g = e.onStateChange,
                    v = void 0 === g ? null : g;
                if (null === r) throw new Error(on("The `indexName` option is required."));
                if (null === f) throw new Error(on("The `searchClient` option is required."));
                if ("function" != typeof f.search) throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
                if ("function" == typeof f.addAlgoliaAgent && f.addAlgoliaAgent("instantsearch.js (".concat("4.15.0", ")")), p && "function" != typeof p) throw new Error(on("The `insightsClient` option should be a function."));
                if (n.client = f, n.insightsClient = p, n.indexName = r, n.helper = null, n.mainHelper = null, n.mainIndex = pt({
                        indexName: r
                    }), n.onStateChange = v, n.started = !1, n.templatesConfig = {
                        helpers: function(e) {
                            var n = e.numberLocale;
                            return {
                                formatNumber: function(e, t) {
                                    return Number(t(e)).toLocaleString(n)
                                },
                                highlight: function(e, t) {
                                    try {
                                        return t(bt(D(D({}, JSON.parse(e)), {}, {
                                            hit: this
                                        })))
                                    } catch (e) {
                                        throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }')
                                    }
                                },
                                reverseHighlight: function(e, t) {
                                    try {
                                        return t(Rt(D(D({}, JSON.parse(e)), {}, {
                                            hit: this
                                        })))
                                    } catch (e) {
                                        throw new Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }')
                                    }
                                },
                                snippet: function(e, t) {
                                    try {
                                        return t(Pt(D(D({}, JSON.parse(e)), {}, {
                                            hit: this
                                        })))
                                    } catch (e) {
                                        throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }')
                                    }
                                },
                                reverseSnippet: function(e, t) {
                                    try {
                                        return t(xt(D(D({}, JSON.parse(e)), {}, {
                                            hit: this
                                        })))
                                    } catch (e) {
                                        throw new Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }')
                                    }
                                },
                                insights: function(e, t) {
                                    try {
                                        var n = JSON.parse(e),
                                            r = n.method,
                                            i = n.payload;
                                        return t(_t(r, D({
                                            objectIDs: [this.objectID]
                                        }, i)))
                                    } catch (e) {
                                        throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }')
                                    }
                                }
                            }
                        }({
                            numberLocale: i
                        }),
                        compileOptions: {}
                    }, n._stalledSearchDelay = h, n._searchStalledTimer = null, n._isSearchStalled = !1, n._createURL = cn, n._initialUiState = s, u && (n._searchFunction = u), n.sendEventToInsights = Ie, c) {
                    var y = "boolean" == typeof c ? void 0 : c;
                    n.use(rn(y))
                }
                return an() && n.use(sn()), n
            }
            return L(S, [{
                key: "use",
                value: function() {
                    for (var n = this, e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var i = t.map(function(e) {
                        var t = e({
                            instantSearchInstance: n
                        });
                        return n.middleware.push(t), t
                    });
                    return this.started && i.forEach(function(e) {
                        e.subscribe()
                    }), this
                }
            }, {
                key: "EXPERIMENTAL_use",
                value: function() {
                    return this.use.apply(this, arguments)
                }
            }, {
                key: "addWidget",
                value: function(e) {
                    return this.addWidgets([e])
                }
            }, {
                key: "addWidgets",
                value: function(e) {
                    if (!Array.isArray(e)) throw new Error(on("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
                    if (e.some(function(e) {
                            return "function" != typeof e.init && "function" != typeof e.render
                        })) throw new Error(on("The widget definition expects a `render` and/or an `init` method."));
                    return this.mainIndex.addWidgets(e), this
                }
            }, {
                key: "removeWidget",
                value: function(e) {
                    return this.removeWidgets([e])
                }
            }, {
                key: "removeWidgets",
                value: function(e) {
                    if (!Array.isArray(e)) throw new Error(on("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
                    if (e.some(function(e) {
                            return "function" != typeof e.dispose
                        })) throw new Error(on("The widget definition expects a `dispose` method."));
                    return this.mainIndex.removeWidgets(e), this
                }
            }, {
                key: "start",
                value: function() {
                    var r = this;
                    if (this.started) throw new Error(on("The `start` method has already been called once."));
                    var t = ce(this.client, this.indexName);
                    if (t.search = function() {
                            return t.searchOnlyWithDerivedHelpers()
                        }, this._searchFunction) {
                        var i = {
                            search: function() {
                                return new Promise(Ie)
                            }
                        };
                        this._mainHelperSearch = t.search.bind(t), t.search = function() {
                            var n = r.mainIndex.getHelper(),
                                e = ce(i, n.state.index, n.state);
                            return e.once("search", function(e) {
                                var t = e.state;
                                n.overrideStateWithoutTriggeringChangeEvent(t), r._mainHelperSearch()
                            }), e.on("change", function(e) {
                                var t = e.state;
                                n.setState(t)
                            }), r._searchFunction(e), t
                        }
                    }
                    t.on("error", function(e) {
                        var t = e.error;
                        r.emit("error", {
                            error: t
                        })
                    }), this.mainHelper = t, this.mainIndex.init({
                        instantSearchInstance: this,
                        parent: null,
                        uiState: this._initialUiState
                    }), this.middleware.forEach(function(e) {
                        e.subscribe()
                    }), t.search(), this.helper = this.mainIndex.getHelper(), this.started = !0
                }
            }, {
                key: "dispose",
                value: function() {
                    this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), this.mainHelper.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function(e) {
                        e.unsubscribe()
                    })
                }
            }, {
                key: "scheduleStalledRender",
                value: function() {
                    var e = this;
                    this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function() {
                        e._isSearchStalled = !0, e.scheduleRender()
                    }, this._stalledSearchDelay))
                }
            }, {
                key: "setUiState",
                value: function(e) {
                    if (!this.mainHelper) throw new Error(on("The `start` method needs to be called before `setUiState`."));
                    this.mainIndex.refreshUiState();
                    var n = "function" == typeof e ? e(this.mainIndex.getWidgetUiState({})) : e;
                    ! function e(t) {
                        t.getHelper().overrideStateWithoutTriggeringChangeEvent(t.getWidgetSearchParameters(t.getHelper().state, {
                            uiState: n[t.getIndexId()]
                        })), t.getWidgets().filter(ht).forEach(e)
                    }(this.mainIndex), this.scheduleSearch(), this.onInternalStateChange()
                }
            }, {
                key: "createURL",
                value: function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    if (!this.started) throw new Error(on("The `start` method needs to be called before `createURL`."));
                    return this._createURL(t)
                }
            }, {
                key: "refresh",
                value: function() {
                    if (!this.mainHelper) throw new Error(on("The `start` method needs to be called before `refresh`."));
                    this.mainHelper.clearCache().search()
                }
            }]), S
        }(),
        hn = et({
            name: "clear-refinements",
            connector: !0
        });

    function dn(r, e) {
        var i = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(r, fn()),
            function(a) {
                if ((a || {}).includedAttributes && (a || {}).excludedAttributes) throw new Error(fn("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
                var e = a || {},
                    s = e.includedAttributes,
                    t = e.excludedAttributes,
                    o = void 0 === t ? ["query"] : t,
                    n = e.transformItems,
                    c = void 0 === n ? function(e) {
                        return e
                    } : n;
                return {
                    $$type: "ais.currentRefinements",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        r(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        r(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function() {
                        i()
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            currentRefinements: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.scopedResults,
                            r = e.createURL,
                            i = e.helper;
                        return {
                            items: t ? n.reduce(function(e, t) {
                                return e.concat(c(mn({
                                    results: t.results,
                                    helper: t.helper,
                                    includedAttributes: s,
                                    excludedAttributes: o
                                })))
                            }, []) : c(mn({
                                results: {},
                                helper: i,
                                includedAttributes: s,
                                excludedAttributes: o
                            })),
                            refine: function(e) {
                                return gn(i, e)
                            },
                            createURL: function(e) {
                                return r(pn(i.state, e))
                            },
                            widgetParams: a
                        }
                    }
                }
            }
    }
    var fn = et({
        name: "current-refinements",
        connector: !0
    });

    function mn(e) {
        var t = e.results,
            n = e.helper,
            r = e.includedAttributes,
            i = e.excludedAttributes,
            a = -1 !== (r || []).indexOf("query") || -1 === (i || []).indexOf("query"),
            s = r ? function(e) {
                return -1 !== r.indexOf(e.attribute)
            } : function(e) {
                return -1 === i.indexOf(e.attribute)
            },
            o = Pe(t, n.state, a).map(vn).filter(s);
        return o.reduce(function(e, t) {
            return [].concat(P(e.filter(function(e) {
                return e.attribute !== t.attribute
            })), [{
                indexName: n.state.index,
                attribute: t.attribute,
                label: t.attribute,
                refinements: o.filter(function(e) {
                    return e.attribute === t.attribute
                }).sort(function(e, t) {
                    return "numeric" === e.type ? e.value - t.value : 0
                }),
                refine: function(e) {
                    return gn(n, e)
                }
            }])
        }, [])
    }

    function pn(e, t) {
        switch (t.type) {
            case "facet":
                return e.removeFacetRefinement(t.attribute, String(t.value));
            case "disjunctive":
                return e.removeDisjunctiveFacetRefinement(t.attribute, String(t.value));
            case "hierarchical":
                return e.removeHierarchicalFacetRefinement(t.attribute);
            case "exclude":
                return e.removeExcludeRefinement(t.attribute, String(t.value));
            case "numeric":
                return e.removeNumericRefinement(t.attribute, t.operator, String(t.value));
            case "tag":
                return e.removeTagRefinement(String(t.value));
            case "query":
                return e.setQueryParameter("query", "");
            default:
                return e
        }
    }

    function gn(e, t) {
        e.setState(pn(e.state, t)).search()
    }

    function vn(e) {
        var t = "numeric" === e.type ? Number(e.name) : e.name,
            n = e.operator ? "".concat(function(e) {
                switch (e) {
                    case ">=":
                        return "≥";
                    case "<=":
                        return "≤";
                    default:
                        return e
                }
            }(e.operator), " ").concat(e.name) : e.name,
            r = {
                attribute: e.attribute,
                type: e.type,
                value: t,
                label: n
            };
        return void 0 !== e.operator && (r.operator = e.operator), void 0 !== e.count && (r.count = e.count), void 0 !== e.exhaustive && (r.exhaustive = e.exhaustive), r
    }
    var yn = et({
        name: "hierarchical-menu",
        connector: !0
    });

    function bn(w) {
        var P = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(w, yn()),
            function() {
                var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    u = c.attributes,
                    e = c.separator,
                    l = void 0 === e ? " > " : e,
                    t = c.rootPath,
                    h = void 0 === t ? null : t,
                    n = c.showParentLevel,
                    d = void 0 === n || n,
                    r = c.limit,
                    f = void 0 === r ? 10 : r,
                    i = c.showMore,
                    m = void 0 !== i && i,
                    a = c.showMoreLimit,
                    p = void 0 === a ? 20 : a,
                    s = c.sortBy,
                    g = void 0 === s ? ["name:asc"] : s,
                    o = c.transformItems,
                    v = void 0 === o ? function(e) {
                        return e
                    } : o;
                if (!u || !Array.isArray(u) || 0 === u.length) throw new Error(yn("The `attributes` option expects an array of strings."));
                if (!0 === m && p <= f) throw new Error(yn("The `showMoreLimit` option must be greater than `limit`."));
                var y, b = W(u, 1)[0],
                    S = function() {};

                function R() {
                    S()
                }
                return {
                    $$type: "ais.hierarchicalMenu",
                    isShowingMore: !1,
                    createToggleShowMore: function(e) {
                        var t = this;
                        return function() {
                            t.isShowingMore = !t.isShowingMore, t.render(e)
                        }
                    },
                    getLimit: function() {
                        return this.isShowingMore ? p : f
                    },
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        w(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    _prepareFacetValues: function(e) {
                        var i = this;
                        return e.slice(0, this.getLimit()).map(function(e) {
                            var t = e.name,
                                n = e.path,
                                r = O(e, ["name", "path"]);
                            return Array.isArray(r.data) && (r.data = i._prepareFacetValues(r.data)), D(D({}, r), {}, {
                                label: t,
                                value: n
                            })
                        })
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        S = this.createToggleShowMore(e), w(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return P(), t.removeHierarchicalFacet(b).setQueryParameter("maxValuesPerFacet", void 0)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            hierarchicalMenu: D(D({}, e.hierarchicalMenu), {}, M({}, b, this.getWidgetRenderState(t)))
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = this,
                            n = e.results,
                            r = e.state,
                            i = e.createURL,
                            a = e.instantSearchInstance,
                            s = e.helper;
                        y = y || at({
                            instantSearchInstance: a,
                            helper: s,
                            attribute: b,
                            widgetType: this.$$type
                        }), this._refine || (this._refine = function(e) {
                            y("click", e), s.toggleRefinement(b, e).search()
                        });
                        var o = n && n.getFacetValues(b, {
                            sortBy: g
                        }).data || [];
                        return {
                            items: v(n ? this._prepareFacetValues(o) : []),
                            refine: this._refine,
                            createURL: function(e) {
                                return i(r.toggleRefinement(b, e))
                            },
                            sendEvent: y,
                            widgetParams: c,
                            isShowingMore: this.isShowingMore,
                            toggleShowMore: R,
                            canToggleShowMore: m && (this.isShowingMore || ! function() {
                                if (!n) return !1;
                                var e = t.getLimit();
                                return r.maxValuesPerFacet > e ? o.length <= e : o.length < e
                            }())
                        }
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.getHierarchicalFacetBreadcrumb(b);
                        return n.length ? D(D({}, e), {}, {
                            hierarchicalMenu: D(D({}, e.hierarchicalMenu), {}, M({}, b, n))
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = n.hierarchicalMenu && n.hierarchicalMenu[b];
                        if (e.isHierarchicalFacet(b)) e.getHierarchicalFacetByName(b);
                        var i = e.removeHierarchicalFacet(b).addHierarchicalFacet({
                                name: b,
                                attributes: u,
                                separator: l,
                                rootPath: h,
                                showParentLevel: d
                            }),
                            a = i.maxValuesPerFacet || 0,
                            s = Math.max(a, m ? p : f),
                            o = i.setQueryParameter("maxValuesPerFacet", s);
                        return r ? o.addHierarchicalFacetRefinement(b, r.join(l)) : o.setQueryParameters({
                            hierarchicalFacetsRefinements: D(D({}, o.hierarchicalFacetsRefinements), {}, M({}, b, []))
                        })
                    }
                }
            }
    }

    function Sn(r, e) {
        var i = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(r, wn()),
            function(a) {
                var s, o, e = a || {},
                    t = e.escapeHTML,
                    c = void 0 === t || t,
                    n = e.transformItems,
                    u = void 0 === n ? function(e) {
                        return e
                    } : n;
                return {
                    $$type: "ais.hits",
                    init: function(e) {
                        r(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !0)
                    },
                    render: function(e) {
                        var t = this.getWidgetRenderState(e);
                        t.sendEvent("view", t.hits), r(D(D({}, t), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !1)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            hits: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.helper,
                            r = e.instantSearchInstance;
                        if (s = s || ot({
                                instantSearchInstance: r,
                                index: n.getIndex(),
                                widgetType: this.$$type
                            }), o = o || ct({
                                index: n.getIndex(),
                                widgetType: this.$$type
                            }), !t) return {
                            hits: [],
                            results: void 0,
                            sendEvent: s,
                            bindEvent: o,
                            widgetParams: a
                        };
                        c && 0 < t.hits.length && (t.hits = qe(t.hits));
                        var i = t.hits.__escaped;
                        return t.hits = rt(t.hits, t.page, t.hitsPerPage), t.hits = it(t.hits, t.queryID), t.hits = u(t.hits), t.hits.__escaped = i, {
                            hits: t.hits,
                            results: t,
                            sendEvent: s,
                            bindEvent: o,
                            widgetParams: a
                        }
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return i(), c ? t.setQueryParameters(Object.keys(We).reduce(function(e, t) {
                            return D(D({}, e), {}, M({}, t, void 0))
                        }, {})) : t
                    },
                    getWidgetSearchParameters: function(e) {
                        return c ? e.setQueryParameters(We) : e
                    }
                }
            }
    }

    function Rn(e) {
        var t = e.method,
            n = e.results,
            r = e.hits,
            i = e.objectIDs,
            a = n.index,
            s = function(n, e) {
                return e.map(function(t) {
                    var e = Se(n, function(e) {
                        return e.objectID === t
                    });
                    if (void 0 === e) throw new Error('Could not find objectID "'.concat(t, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
                    return e
                })
            }(r, i),
            o = function(e) {
                var t = fe(e.map(function(e) {
                    return e.__queryID
                }));
                if (1 < t.length) throw new Error("Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.");
                var n = t[0];
                if ("string" != typeof n) throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
                return n
            }(s);
        switch (t) {
            case "clickedObjectIDsAfterSearch":
                return {
                    index: a, queryID: o, objectIDs: i, positions: function(e) {
                        return e.map(function(e) {
                            return e.__position
                        })
                    }(s)
                };
            case "convertedObjectIDsAfterSearch":
                return {
                    index: a, queryID: o, objectIDs: i
                };
            default:
                throw new Error('Unsupported method passed to insights: "'.concat(t, '".'))
        }
    }
    var wn = et({
        name: "hits",
        connector: !0
    });

    function Pn(n) {
        function r(s) {
            return function(e, t) {
                var n = e.results,
                    r = e.hits,
                    i = e.instantSearchInstance;
                if (n && r && i) {
                    var a = function(i, a, s) {
                        return function(e, t) {
                            if (!i) {
                                var n = et({
                                    name: "instantsearch"
                                });
                                throw new Error(n("The `insightsClient` option has not been provided to `instantsearch`."))
                            }
                            if (!Array.isArray(t.objectIDs)) throw new TypeError("Expected `objectIDs` to be an array.");
                            var r = Rn({
                                method: e,
                                results: a,
                                hits: s,
                                objectIDs: t.objectIDs
                            });
                            i(e, D(D({}, r), t))
                        }
                    }(i.insightsClient, n, r);
                    return s(D(D({}, e), {}, {
                        insights: a
                    }), t)
                }
                return s(e, t)
            }
        }
        return function(e, t) {
            return n(r(e), t)
        }
    }
    var Nn, xn, _n, In, Fn, Cn = {},
        Tn = [],
        En = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

    function kn(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function Ln(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function Mn(e, t, n) {
        var r, i, a, s, o = arguments;
        if (t = kn({}, t), 3 < arguments.length)
            for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if (null != n && (t.children = n), null != e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === t[i] && (t[i] = e.defaultProps[i]);
        return s = t.key, null != (a = t.ref) && delete t.ref, null != s && delete t.key, jn(e, t, s, a)
    }

    function jn(e, t, n, r) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __p: null,
            __b: 0,
            __e: null,
            l: null,
            __c: null,
            constructor: void 0
        };
        return Nn.vnode && Nn.vnode(i), i
    }

    function On(e) {
        return e.children
    }

    function Hn(e, t) {
        this.props = e, this.context = t
    }

    function An(e, t) {
        if (null == t) return e.__p ? An(e.__p, e.__p.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? An(e) : null
    }

    function Dn(e) {
        var t, n;
        if (null != (e = e.__p) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                } return Dn(e)
        }
    }

    function Wn(e) {
        (!e.__d && (e.__d = !0) && 1 === xn.push(e) || In !== Nn.debounceRendering) && (In = Nn.debounceRendering, (Nn.debounceRendering || _n)(Bn))
    }

    function Bn() {
        var e, t, n, r, i, a, s, o;
        for (xn.sort(function(e, t) {
                return t.__v.__b - e.__v.__b
            }); e = xn.pop();) e.__d && (r = n = void 0, a = (i = (t = e).__v).__e, s = t.__P, o = t.u, t.u = !1, s && (n = [], r = Kn(s, i, kn({}, i), t.__n, void 0 !== s.ownerSVGElement, null, n, o, null == a ? An(i) : a), zn(n, i), r != a && Dn(i)))
    }

    function Un(t, n, e, r, i, a, s, o, c) {
        var u, l, h, d, f, m, p, g = e && e.__k || Tn,
            v = g.length;
        if (o == Cn && (o = null != a ? a[0] : v ? An(e, 0) : null), u = 0, n.__k = Qn(n.__k, function(e) {
                if (null != e) {
                    if (e.__p = n, e.__b = n.__b + 1, null === (h = g[u]) || h && e.key == h.key && e.type === h.type) g[u] = void 0;
                    else
                        for (l = 0; l < v; l++) {
                            if ((h = g[l]) && e.key == h.key && e.type === h.type) {
                                g[l] = void 0;
                                break
                            }
                            h = null
                        }
                    if (d = Kn(t, e, h = h || Cn, r, i, a, s, null, o, c), (l = e.ref) && h.ref != l && (p = p || []).push(l, e.__c || d, e), null != d) {
                        if (null == m && (m = d), null != e.l) d = e.l, e.l = null;
                        else if (a == h || d != o || null == d.parentNode) {
                            e: if (null == o || o.parentNode !== t) t.appendChild(d);
                                else {
                                    for (f = o, l = 0;
                                        (f = f.nextSibling) && l < v; l += 2)
                                        if (f == d) break e;
                                    t.insertBefore(d, o)
                                }
                            "option" == n.type && (t.value = "")
                        }
                        o = d.nextSibling, "function" == typeof n.type && (n.l = d)
                    }
                }
                return u++, e
            }), n.__e = m, null != a && "function" != typeof n.type)
            for (u = a.length; u--;) null != a[u] && Ln(a[u]);
        for (u = v; u--;) null != g[u] && Yn(g[u], g[u]);
        if (p)
            for (u = 0; u < p.length; u++) Jn(p[u], p[++u], p[++u])
    }

    function Qn(e, t, n) {
        if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null));
        else if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) Qn(e[r], t, n);
        else n.push(t ? t(function(e) {
            if (null == e || "boolean" == typeof e) return null;
            if ("string" == typeof e || "number" == typeof e) return jn(null, e, null, null);
            if (null == e.__e && null == e.__c) return e;
            var t = jn(e.type, e.props, e.key, null);
            return t.__e = e.__e, t
        }(e)) : e);
        return n
    }

    function qn(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === En.test(t) ? n + "px" : null == n ? "" : n
    }

    function $n(e, t, n, r, i) {
        var a, s, o, c, u;
        if ("key" === (t = i ? "className" === t ? "class" : t : "class" === t ? "className" : t) || "children" === t);
        else if ("style" === t)
            if (a = e.style, "string" == typeof n) a.cssText = n;
            else {
                if ("string" == typeof r && (a.cssText = "", r = null), r)
                    for (s in r) n && s in n || qn(a, s, "");
                if (n)
                    for (o in n) r && n[o] === r[o] || qn(a, o, n[o])
            }
        else "o" === t[0] && "n" === t[1] ? (c = t !== (t = t.replace(/Capture$/, "")), t = ((u = t.toLowerCase()) in e ? u : t).slice(2), n ? (r || e.addEventListener(t, Vn, c), (e.t || (e.t = {}))[t] = n) : e.removeEventListener(t, Vn, c)) : "list" !== t && "tagName" !== t && "form" !== t && !i && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n))
    }

    function Vn(e) {
        return this.t[e.type](Nn.event ? Nn.event(e) : e)
    }

    function Kn(e, t, n, r, i, a, s, o, c, u) {
        var l, h, d, f, m, p, g, v, y, b, S = t.type;
        if (void 0 !== t.constructor) return null;
        (l = Nn.__b) && l(t);
        try {
            e: if ("function" == typeof S) {
                if (v = t.props, y = (l = S.contextType) && r[l.__c], b = l ? y ? y.props.value : l.__p : r, n.__c ? g = (h = t.__c = n.__c).__p = h.__E : ("prototype" in S && S.prototype.render ? t.__c = h = new S(v, b) : (t.__c = h = new Hn(v, b), h.constructor = S, h.render = Gn), y && y.sub(h), h.props = v, h.state || (h.state = {}), h.context = b, h.__n = r, d = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != S.getDerivedStateFromProps && kn(h.__s == h.state ? h.__s = kn({}, h.__s) : h.__s, S.getDerivedStateFromProps(v, h.__s)), d) null == S.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && s.push(h);
                else {
                    if (null == S.getDerivedStateFromProps && null == o && null != h.componentWillReceiveProps && h.componentWillReceiveProps(v, b), !o && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(v, h.__s, b)) {
                        for (h.props = v, h.state = h.__s, h.__d = !1, (h.__v = t).__e = null != c ? c !== n.__e ? c : n.__e : null, t.__k = n.__k, l = 0; l < t.__k.length; l++) t.__k[l] && (t.__k[l].__p = t);
                        break e
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(v, h.__s, b)
                }
                for (f = h.props, m = h.state, h.context = b, h.props = v, h.state = h.__s, (l = Nn.__r) && l(t), h.__d = !1, h.__v = t, h.__P = e, l = h.render(h.props, h.state, h.context), t.__k = Qn(null != l && l.type == On && null == l.key ? l.props.children : l), null != h.getChildContext && (r = kn(kn({}, r), h.getChildContext())), d || null == h.getSnapshotBeforeUpdate || (p = h.getSnapshotBeforeUpdate(f, m)), Un(e, t, n, r, i, a, s, c, u), h.base = t.__e; l = h.__h.pop();) h.__s && (h.state = h.__s), l.call(h);
                d || null == f || null == h.componentDidUpdate || h.componentDidUpdate(f, m, p), g && (h.__E = h.__p = null)
            } else t.__e = function(e, t, n, r, i, a, s, o) {
                var c, u, l, h, d = n.props,
                    f = t.props;
                if (i = "svg" === t.type || i, null == e && null != a)
                    for (c = 0; c < a.length; c++)
                        if (null != (u = a[c]) && (null === t.type ? 3 === u.nodeType : u.localName === t.type)) {
                            e = u, a[c] = null;
                            break
                        } if (null == e) {
                    if (null === t.type) return document.createTextNode(f);
                    e = i ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type), a = null
                }
                return null === t.type ? d !== f && (null != a && (a[a.indexOf(e)] = null), e.data = f) : t !== n && (null != a && (a = Tn.slice.call(e.childNodes)), l = (d = n.props || Cn).dangerouslySetInnerHTML, h = f.dangerouslySetInnerHTML, o || (h || l) && (h && l && h.__html == l.__html || (e.innerHTML = h && h.__html || "")), function(e, t, n, r, i) {
                    var a;
                    for (a in n) a in t || $n(e, a, null, n[a], r);
                    for (a in t) i && "function" != typeof t[a] || "value" === a || "checked" === a || n[a] === t[a] || $n(e, a, t[a], n[a], r)
                }(e, f, d, i, o), t.__k = t.props.children, h || Un(e, t, n, r, "foreignObject" !== t.type && i, a, s, Cn, o), o || ("value" in f && void 0 !== f.value && f.value !== e.value && (e.value = null == f.value ? "" : f.value), "checked" in f && void 0 !== f.checked && f.checked !== e.checked && (e.checked = f.checked))), e
            }(n.__e, t, n, r, i, a, s, u);
            (l = Nn.diffed) && l(t)
        }
        catch (e) {
            Nn.__e(e, t, n)
        }
        return t.__e
    }

    function zn(e, t) {
        for (var n; n = e.pop();) try {
            n.componentDidMount()
        } catch (e) {
            Nn.__e(e, n.__v)
        }
        Nn.__c && Nn.__c(t)
    }

    function Jn(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            Nn.__e(e, n)
        }
    }

    function Yn(e, t, n) {
        var r, i, a;
        if (Nn.unmount && Nn.unmount(e), (r = e.ref) && Jn(r, null, t), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.l = null, null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                Nn.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (a = 0; a < r.length; a++) r[a] && Yn(r[a], t, n);
        null != i && Ln(i)
    }

    function Gn(e, t, n) {
        return this.constructor(e, n)
    }

    function Zn(e, t, n) {
        var r, i, a;
        Nn.__p && Nn.__p(e, t), i = (r = n === Fn) ? null : n && n.__k || t.__k, e = Mn(On, null, [e]), a = [], Kn(t, r ? t.__k = e : (n || t).__k = e, i || Cn, Cn, void 0 !== t.ownerSVGElement, n && !r ? [n] : i ? null : Tn.slice.call(t.childNodes), a, !1, n || Cn, r), zn(a, e)
    }
    Nn = {}, Hn.prototype.setState = function(e, t) {
        var n = this.__s !== this.state && this.__s || (this.__s = kn({}, this.state));
        "function" == typeof e && !(e = e(n, this.props)) || kn(n, e), null != e && this.__v && (this.u = !1, t && this.__h.push(t), Wn(this))
    }, Hn.prototype.forceUpdate = function(e) {
        this.__v && (e && this.__h.push(e), this.u = !0, Wn(this))
    }, Hn.prototype.render = On, xn = [], _n = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, In = Nn.debounceRendering, Nn.__e = function(e, t, n) {
        for (var r; t = t.__p;)
            if ((r = t.__c) && !r.__p) try {
                if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(e));
                else {
                    if (null == r.componentDidCatch) continue;
                    r.componentDidCatch(e)
                }
                return Wn(r.__E = r)
            } catch (t) {
                e = t
            }
        throw e
    }, Fn = Cn;

    function Xn(e, t, n) {
        for (var r = e; r && !n(r);) {
            if (r === t) return null;
            r = r.parentElement
        }
        return r
    }

    function er(e) {
        return function(o) {
            return Mn("div", {
                onClick: function(e) {
                    if (o.sendEvent) {
                        var t = Xn(e.target, e.currentTarget, function(e) {
                            return e.hasAttribute("data-insights-event")
                        });
                        if (t) {
                            var n = function(e) {
                                var t = e.getAttribute("data-insights-event");
                                if ("string" != typeof t) throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");
                                try {
                                    return JSON.parse(atob(t))
                                } catch (e) {
                                    throw new Error("The insights middleware was unable to parse `data-insights-event`.")
                                }
                            }(t);
                            o.sendEvent(n)
                        }
                    }
                    var r = Xn(e.target, e.currentTarget, function(e) {
                        return function(e) {
                            return e.hasAttribute("data-insights-method")
                        }(e)
                    });
                    if (r) {
                        var i = function(e) {
                                var t = e.getAttribute("data-insights-method"),
                                    n = e.getAttribute("data-insights-payload");
                                if ("string" != typeof n) throw new Error("The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.");
                                try {
                                    return {
                                        method: t,
                                        payload: JSON.parse(atob(n))
                                    }
                                } catch (e) {
                                    throw new Error("The insights helper was unable to parse `data-insights-payload`.")
                                }
                            }(r),
                            a = i.method,
                            s = i.payload;
                        o.insights(a, s)
                    }
                }
            }, Mn(e, o))
        }
    }

    function tr(l, e) {
        var h = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(l, rr()),
            function(a) {
                var e = a || {},
                    t = e.items,
                    n = e.transformItems,
                    s = void 0 === n ? function(e) {
                        return e
                    } : n,
                    o = t;
                if (!Array.isArray(o)) throw new Error(rr("The `items` option expects an array of objects."));
                var r = o.filter(function(e) {
                    return !0 === e.default
                });
                if (0 === r.length) throw new Error(rr("A default value must be specified in `items`."));
                if (1 < r.length) throw new Error(rr("More than one default value is specified in `items`."));
                var i = r[0],
                    c = function(t) {
                        return function(e) {
                            return e || 0 === e ? t.setQueryParameter("hitsPerPage", e).search() : t.setQueryParameter("hitsPerPage", void 0).search()
                        }
                    },
                    u = function(e) {
                        var t = e.state,
                            n = e.createURL;
                        return function(e) {
                            return n(t.setQueryParameter("hitsPerPage", e || 0 === e ? e : void 0))
                        }
                    };
                return {
                    $$type: "ais.hitsPerPage",
                    init: function(e) {
                        var t = e.state,
                            n = e.instantSearchInstance;
                        o.some(function(e) {
                            return Number(t.hitsPerPage) === Number(e.value)
                        }) || (o = [{
                            value: "",
                            label: ""
                        }].concat(P(o))), l(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: n
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        l(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return h(), t.setQueryParameter("hitsPerPage", void 0)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            hitsPerPage: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.state,
                            n = e.results,
                            r = e.createURL,
                            i = e.helper;
                        return {
                            items: s(function(e) {
                                var t = e.hitsPerPage;
                                return o.map(function(e) {
                                    return D(D({}, e), {}, {
                                        isRefined: Number(e.value) === Number(t)
                                    })
                                })
                            }(t)),
                            refine: c(i),
                            createURL: u({
                                state: t,
                                createURL: r
                            }),
                            hasNoResults: !n || 0 === n.nbHits,
                            widgetParams: a
                        }
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.hitsPerPage;
                        return void 0 === n || n === i.value ? e : D(D({}, e), {}, {
                            hitsPerPage: n
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState;
                        return e.setQueryParameters({
                            hitsPerPage: n.hitsPerPage || i.value
                        })
                    }
                }
            }
    }
    var nr = Pn(Sn),
        rr = et({
            name: "hits-per-page",
            connector: !0
        }),
        ir = et({
            name: "infinite-hits",
            connector: !0
        });

    function ar(e) {
        var t = e || {};
        t.page;
        return O(t, ["page"])
    }

    function sr(i, e) {
        var a = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(i, ir()),
            function(f) {
                function m(e, t) {
                    var n = e.page,
                        r = void 0 === n ? 0 : n,
                        i = Object.keys(t).map(Number);
                    return 0 === i.length ? r : Math.min.apply(Math, [r].concat(P(i)))
                }

                function p(e, t) {
                    var n = e.page,
                        r = void 0 === n ? 0 : n,
                        i = Object.keys(t).map(Number);
                    return 0 === i.length ? r : Math.max.apply(Math, [r].concat(P(i)))
                }
                var g, v, y, b, e = f || {},
                    t = e.escapeHTML,
                    S = void 0 === t || t,
                    n = e.transformItems,
                    R = void 0 === n ? function(e) {
                        return e
                    } : n,
                    r = e.cache,
                    w = void 0 === r ? function() {
                        var r = null,
                            i = void 0;
                        return {
                            read: function(e) {
                                var t = e.state;
                                return Le(i, ar(t)) ? r : null
                            },
                            write: function(e) {
                                var t = e.state,
                                    n = e.hits;
                                i = ar(t), r = n
                            }
                        }
                    }() : r;
                return {
                    $$type: "ais.infiniteHits",
                    init: function(e) {
                        i(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance,
                            n = this.getWidgetRenderState(e);
                        y("view", n.currentPageHits), i(D(D({}, n), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            infiniteHits: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t, n = e.results,
                            r = e.helper,
                            i = e.state,
                            a = e.instantSearchInstance,
                            s = [],
                            o = w.read({
                                state: i
                            }) || {};
                        if (n) {
                            var c = i.page,
                                u = void 0 === c ? 0 : c;
                            S && 0 < n.hits.length && (n.hits = qe(n.hits));
                            var l = n.hits.__escaped;
                            n.hits = rt(n.hits, n.page, n.hitsPerPage), n.hits = it(n.hits, n.queryID), n.hits = R(n.hits), n.hits.__escaped = l, void 0 === o[u] && (o[u] = n.hits, w.write({
                                state: i,
                                hits: o
                            })), s = n.hits, t = 0 === m(i, o)
                        } else g = function(e, t) {
                            return function() {
                                e.overrideStateWithoutTriggeringChangeEvent(D(D({}, e.state), {}, {
                                    page: m(e.state, t) - 1
                                })).searchWithoutTriggeringOnStateChange()
                            }
                        }(r, o), v = function(e, t) {
                            return function() {
                                e.setPage(p(e.state, t) + 1).search()
                            }
                        }(r, o), y = ot({
                            instantSearchInstance: a,
                            index: r.getIndex(),
                            widgetType: this.$$type
                        }), b = ct({
                            index: r.getIndex(),
                            widgetType: this.$$type
                        }), t = void 0 === r.state.page || 0 === m(r.state, o);
                        var h = function(n) {
                                return Object.keys(n).map(Number).sort(function(e, t) {
                                    return e - t
                                }).reduce(function(e, t) {
                                    return e.concat(n[t])
                                }, [])
                            }(o),
                            d = !n || n.nbPages <= p(i, o) + 1;
                        return {
                            hits: h,
                            currentPageHits: s,
                            sendEvent: y,
                            bindEvent: b,
                            results: n,
                            showPrevious: g,
                            showMore: v,
                            isFirstPage: t,
                            isLastPage: d,
                            widgetParams: f
                        }
                    },
                    dispose: function(e) {
                        var t = e.state;
                        a();
                        var n = t.setQueryParameter("page", void 0);
                        return S ? n.setQueryParameters(Object.keys(We).reduce(function(e, t) {
                            return D(D({}, e), {}, M({}, t, void 0))
                        }, {})) : n
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.page || 0;
                        return n ? D(D({}, e), {}, {
                            page: n + 1
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = e;
                        S && (r = e.setQueryParameters(We));
                        var i = n.page ? n.page - 1 : 0;
                        return r.setQueryParameter("page", i)
                    }
                }
            }
    }

    function or(s, e) {
        var o = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(s, lr()),
            function(u) {
                var l, h, d, e = u || {},
                    f = e.attribute,
                    t = e.limit,
                    c = void 0 === t ? 10 : t,
                    n = e.showMore,
                    m = void 0 !== n && n,
                    r = e.showMoreLimit,
                    p = void 0 === r ? 20 : r,
                    i = e.sortBy,
                    g = void 0 === i ? ["isRefined", "name:asc"] : i,
                    a = e.transformItems,
                    v = void 0 === a ? function(e) {
                        return e
                    } : a;
                if (!f) throw new Error(lr("The `attribute` option is required."));
                if (!0 === m && p <= c) throw new Error(lr("The `showMoreLimit` option must be greater than `limit`."));
                var y = !1,
                    b = function() {};

                function S() {
                    b()
                }

                function R() {
                    return y ? p : c
                }
                return {
                    $$type: "ais.menu",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        s(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        s(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return o(), t.removeHierarchicalFacet(f).setQueryParameter("maxValuesPerFacet", void 0)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            menu: D(D({}, e.menu), {}, M({}, f, this.getWidgetRenderState(t)))
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.createURL,
                            r = e.instantSearchInstance,
                            i = e.helper,
                            a = [],
                            s = !1;
                        if (l = l || at({
                                instantSearchInstance: r,
                                helper: i,
                                attribute: f,
                                widgetType: this.$$type
                            }), h = h || function(e) {
                                return n(i.state.toggleFacetRefinement(f, e))
                            }, d = d || function(e) {
                                var t = W(i.getHierarchicalFacetBreadcrumb(f), 1)[0];
                                l("click", e || t), i.toggleFacetRefinement(f, e || t).search()
                            }, e.results && (b = function(e, t) {
                                return function() {
                                    y = !y, t.render(e)
                                }
                            }(e, this)), t) {
                            var o = t.getFacetValues(f, {
                                    sortBy: g
                                }),
                                c = o && !Array.isArray(o) && o.data ? o.data : [];
                            s = m && (y || c.length > R()), a = v(c.slice(0, R()).map(function(e) {
                                var t = e.name,
                                    n = e.path;
                                return D(D({}, O(e, ["name", "path"])), {}, {
                                    label: t,
                                    value: n
                                })
                            }))
                        }
                        return {
                            items: a,
                            createURL: h,
                            refine: d,
                            sendEvent: l,
                            canRefine: 0 < a.length,
                            widgetParams: u,
                            isShowingMore: y,
                            toggleShowMore: S,
                            canToggleShowMore: s
                        }
                    },
                    getWidgetUiState: function(e, t) {
                        var n = W(t.searchParameters.getHierarchicalFacetBreadcrumb(f), 1)[0];
                        return n ? D(D({}, e), {}, {
                            menu: D(D({}, e.menu), {}, M({}, f, n))
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = n.menu && n.menu[f],
                            i = e.removeHierarchicalFacet(f).addHierarchicalFacet({
                                name: f,
                                attributes: [f]
                            }),
                            a = i.maxValuesPerFacet || 0,
                            s = Math.max(a, m ? p : c),
                            o = i.setQueryParameter("maxValuesPerFacet", s);
                        return r ? o.addHierarchicalFacetRefinement(f, r) : o.setQueryParameters({
                            hierarchicalFacetsRefinements: D(D({}, o.hierarchicalFacetsRefinements), {}, M({}, f, []))
                        })
                    }
                }
            }
    }

    function cr(i, e) {
        var a = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(i, hr()),
            function(s) {
                var e = s || {},
                    t = e.attribute,
                    u = void 0 === t ? "" : t,
                    n = e.items,
                    o = void 0 === n ? [] : n,
                    r = e.transformItems,
                    c = void 0 === r ? function(e) {
                        return e
                    } : r;
                if ("" === u) throw new Error(hr("The `attribute` option is required."));
                if (!o || 0 === o.length) throw new Error(hr("The `items` option expects an array of objects."));
                var l = {};
                return {
                    $$type: dr,
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        i(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        i(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return a(), t.clearRefinements(u)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.getNumericRefinements(u),
                            r = n["="] && n["="][0];
                        if (r || 0 === r) return D(D({}, e), {}, {
                            numericMenu: D(D({}, e.numericMenu), {}, M({}, u, "".concat(n["="])))
                        });
                        var i = n[">="] && n[">="][0] || "",
                            a = n["<="] && n["<="][0] || "";
                        return "" === i && "" === a ? e : D(D({}, e), {}, {
                            numericMenu: D(D({}, e.numericMenu), {}, M({}, u, "".concat(i, ":").concat(a)))
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = n.numericMenu && n.numericMenu[u],
                            i = e.clearRefinements(u);
                        if (!r) return i.setQueryParameters({
                            numericRefinements: D(D({}, i.numericRefinements), {}, M({}, u, {}))
                        });
                        if (-1 === r.indexOf(":")) return i.addNumericRefinement(u, "=", Number(r));
                        var a = W(r.split(":").map(parseFloat), 2),
                            s = a[0],
                            o = a[1],
                            c = Ce(s) ? i.addNumericRefinement(u, ">=", s) : i;
                        return Ce(o) ? c.addNumericRefinement(u, "<=", o) : c
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            numericMenu: D(D({}, e.numericMenu), {}, M({}, u, this.getWidgetRenderState(t)))
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.state,
                            r = e.instantSearchInstance,
                            i = e.helper,
                            a = e.createURL;
                        return l.refine || (l.refine = function(e) {
                            var t = mr(i.state, u, e);
                            l.sendEvent("click", e), i.setState(t).search()
                        }), l.createURL || (l.createURL = function(t) {
                            return function(e) {
                                return a(mr(t, u, e))
                            }
                        }), l.sendEvent || (l.sendEvent = function(e) {
                            var c = e.instantSearchInstance,
                                u = e.helper,
                                l = e.attribute;
                            return function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                if (1 !== t.length) {
                                    var r = t[0],
                                        i = t[1],
                                        a = t[2],
                                        s = void 0 === a ? "Filter Applied" : a;
                                    if ("click" === r) {
                                        var o = ut(mr(u.state, l, i), l);
                                        o && 0 < o.length && c.sendEventToInsights({
                                            insightsMethod: "clickedFilters",
                                            widgetType: dr,
                                            eventType: r,
                                            payload: {
                                                eventName: s,
                                                index: u.getIndex(),
                                                filters: o
                                            }
                                        })
                                    }
                                } else c.sendEventToInsights(t[0])
                            }
                        }({
                            instantSearchInstance: r,
                            helper: i,
                            attribute: u
                        })), {
                            createURL: l.createURL(n),
                            items: c(function(i) {
                                return o.map(function(e) {
                                    var t = e.start,
                                        n = e.end,
                                        r = e.label;
                                    return {
                                        label: r,
                                        value: encodeURI(JSON.stringify({
                                            start: t,
                                            end: n
                                        })),
                                        isRefined: fr(i, u, {
                                            start: t,
                                            end: n,
                                            label: r
                                        })
                                    }
                                })
                            }(n)),
                            hasNoResults: !t || 0 === t.nbHits,
                            refine: l.refine,
                            sendEvent: l.sendEvent,
                            widgetParams: s
                        }
                    }
                }
            }
    }
    var ur = Pn(sr),
        lr = et({
            name: "menu",
            connector: !0
        }),
        hr = et({
            name: "numeric-menu",
            connector: !0
        }),
        dr = "ais.numericMenu";

    function fr(e, t, n) {
        var r = e.getNumericRefinements(t);
        return void 0 !== n.start && void 0 !== n.end && n.start === n.end ? pr(r, "=", n.start) : void 0 !== n.start ? pr(r, ">=", n.start) : void 0 !== n.end ? pr(r, "<=", n.end) : void 0 === n.start && void 0 === n.end && Object.keys(r).every(function(e) {
            return 0 === (r[e] || []).length
        })
    }

    function mr(e, t, n) {
        var r = e,
            i = JSON.parse(decodeURI(n)),
            a = r.getNumericRefinements(t);
        if (void 0 === i.start && void 0 === i.end) return r.removeNumericRefinement(t);
        if (fr(r, t, i) || (r = r.removeNumericRefinement(t)), void 0 !== i.start && void 0 !== i.end) {
            if (i.start > i.end) throw new Error("option.start should be > to option.end");
            if (i.start === i.end) return r = pr(a, "=", i.start) ? r.removeNumericRefinement(t, "=", i.start) : r.addNumericRefinement(t, "=", i.start)
        }
        return void 0 !== i.start && (r = pr(a, ">=", i.start) ? r.removeNumericRefinement(t, ">=", i.start) : r.addNumericRefinement(t, ">=", i.start)), void 0 !== i.end && (r = pr(a, "<=", i.end) ? r.removeNumericRefinement(t, "<=", i.end) : r.addNumericRefinement(t, "<=", i.end)), "number" == typeof r.page && (r.page = 0), r
    }

    function pr(e, t, n) {
        return void 0 !== e[t] && e[t].includes(n)
    }

    function gr(n, e) {
        var r = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(n, yr()),
            function(o) {
                var e = o || {},
                    c = e.totalPages,
                    t = e.padding,
                    u = new vr({
                        currentPage: 0,
                        total: 0,
                        padding: void 0 === t ? 3 : t
                    }),
                    l = {};
                return {
                    $$type: "ais.pagination",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return r(), t.setQueryParameter("page", void 0)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.page || 0;
                        return n ? D(D({}, e), {}, {
                            page: n + 1
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = n.page ? n.page - 1 : 0;
                        return e.setQueryParameter("page", r)
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.helper,
                            r = e.createURL;
                        l.refine || (l.refine = function(e) {
                            n.setPage(e), n.search()
                        }), l.createURL || (l.createURL = function(t) {
                            return function(e) {
                                return r(t.setPage(e))
                            }
                        });
                        var i = n.state,
                            a = i.page || 0,
                            s = function(e) {
                                var t = e.nbPages;
                                return void 0 !== c ? Math.min(c, t) : t
                            }(t || {
                                nbPages: 0
                            });
                        return u.currentPage = a, u.total = s, {
                            createURL: l.createURL(i),
                            refine: l.refine,
                            currentRefinement: a,
                            nbHits: (null == t ? void 0 : t.nbHits) || 0,
                            nbPages: s,
                            pages: t ? u.pages() : [],
                            isFirstPage: u.isFirstPage(),
                            isLastPage: u.isLastPage(),
                            widgetParams: o
                        }
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            pagination: this.getWidgetRenderState(t)
                        })
                    }
                }
            }
    }
    var vr = function() {
            function t(e) {
                k(this, t), M(this, "currentPage", void 0), M(this, "total", void 0), M(this, "padding", void 0), this.currentPage = e.currentPage, this.total = e.total, this.padding = e.padding
            }
            return L(t, [{
                key: "pages",
                value: function() {
                    var e = this.total,
                        t = this.currentPage,
                        n = this.padding;
                    if (0 === e) return [0];
                    var r = this.nbPagesDisplayed(n, e);
                    if (r === e) return Ee({
                        end: e
                    });
                    var i = this.calculatePaddingLeft(t, n, e, r);
                    return Ee({
                        start: t - i,
                        end: t + (r - i)
                    })
                }
            }, {
                key: "nbPagesDisplayed",
                value: function(e, t) {
                    return Math.min(2 * e + 1, t)
                }
            }, {
                key: "calculatePaddingLeft",
                value: function(e, t, n, r) {
                    return e <= t ? e : n - t <= e ? r - (n - e) : t
                }
            }, {
                key: "isLastPage",
                value: function() {
                    return this.currentPage === this.total - 1 || 0 === this.total
                }
            }, {
                key: "isFirstPage",
                value: function() {
                    return 0 === this.currentPage
                }
            }]), t
        }(),
        yr = et({
            name: "pagination",
            connector: !0
        }),
        br = et({
            name: "range-input",
            connector: !0
        }, {
            name: "range-slider",
            connector: !0
        }),
        Sr = "ais.range";

    function Rr(e) {
        var t = e.min,
            n = e.max,
            r = e.precision,
            i = Math.pow(10, r);
        return {
            min: t ? Math.floor(t * i) / i : t,
            max: n ? Math.ceil(n * i) / i : n
        }
    }

    function wr(n, e) {
        var r = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(n, br()),
            function(o) {
                var e = o || {},
                    w = e.attribute,
                    P = e.min,
                    N = e.max,
                    t = e.precision,
                    x = void 0 === t ? 0 : t;
                if (!w) throw new Error(br("The `attribute` option is required."));
                if (Ce(P) && Ce(N) && N < P) throw new Error(br("The `max` option can't be lower than `min`."));

                function f(e, t, n, r) {
                    var i, a, s = e.state,
                        o = t.min,
                        c = t.max,
                        u = W(s.getNumericRefinement(w, ">=") || [], 1)[0],
                        l = W(s.getNumericRefinement(w, "<=") || [], 1)[0],
                        h = void 0 === n || "" === n,
                        d = void 0 === r || "" === r,
                        f = Rr({
                            min: h ? void 0 : parseFloat(n),
                            max: d ? void 0 : parseFloat(r),
                            precision: x
                        }),
                        m = f.min,
                        p = f.max;
                    i = Ce(P) || o !== m ? Ce(P) && h ? P : m : void 0, a = Ce(N) || c !== p ? Ce(N) && d ? N : p : void 0;
                    var g = void 0 === i,
                        v = Ce(o) && o <= i,
                        y = g || Ce(i) && (!Ce(o) || v),
                        b = void 0 === a,
                        S = Ce(a) && a <= c,
                        R = b || Ce(a) && (!Ce(c) || S);
                    return (u !== i || l !== a) && y && R ? (s = s.removeNumericRefinement(w), Ce(i) && (s = s.addNumericRefinement(w, ">=", i)), Ce(a) && (s = s.addNumericRefinement(w, "<=", a)), s) : null
                }

                function m(e, t, n, r) {
                    var i = 3 < arguments.length && void 0 !== r ? r : "Filter Applied",
                        a = ut(e, w);
                    a && 0 < a.length && t.sendEventToInsights({
                        insightsMethod: "clickedFilters",
                        widgetType: Sr,
                        eventType: "click",
                        payload: {
                            eventName: i,
                            index: n.getIndex(),
                            filters: a
                        }
                    })
                }
                var c = {
                    from: function(e) {
                        return e.toLocaleString()
                    },
                    to: function(e) {
                        return function(e) {
                            return Number(Number(e).toFixed(x))
                        }(e).toLocaleString()
                    }
                };

                function u(i, a, s) {
                    return function() {
                        var e = W(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [void 0, void 0], 2),
                            t = e[0],
                            n = e[1],
                            r = f(a, s, t, n);
                        r && (m(r, i, a), a.setState(r).search())
                    }
                }
                return {
                    $$type: Sr,
                    init: function(e) {
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !0)
                    },
                    render: function(e) {
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !1)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            range: D(D({}, e.range), {}, M({}, w, this.getWidgetRenderState(t)))
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.helper,
                            r = e.instantSearchInstance,
                            i = Se(t && t.disjunctiveFacets || [], function(e) {
                                return e.name === w
                            }),
                            a = function(e) {
                                return Rr({
                                    min: Ce(P) ? P : Ce(e.min) ? e.min : 0,
                                    max: Ce(N) ? N : Ce(e.max) ? e.max : 0,
                                    precision: x
                                })
                            }(i && i.stats || {
                                min: void 0,
                                max: void 0
                            }),
                            s = function(e) {
                                var t = W(e.getNumericRefinement(w, ">=") || [], 1)[0],
                                    n = W(e.getNumericRefinement(w, "<=") || [], 1)[0];
                                return [Ce(t) ? t : -1 / 0, Ce(n) ? n : 1 / 0]
                            }(n);
                        return {
                            refine: u(r, n, t ? a : {
                                min: void 0,
                                max: void 0
                            }),
                            format: c,
                            range: a,
                            sendEvent: function(l, h, d) {
                                return function() {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    if (1 !== t.length) {
                                        var r = t[0],
                                            i = t[1],
                                            a = t[2];
                                        if ("click" === r) {
                                            var s = W(i, 2),
                                                o = s[0],
                                                c = s[1],
                                                u = f(h, d, o, c);
                                            m(u, l, h, a)
                                        }
                                    } else l.sendEventToInsights(t[0])
                                }
                            }(r, n, a),
                            widgetParams: D(D({}, o), {}, {
                                precision: x
                            }),
                            start: s
                        }
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return r(), t.removeDisjunctiveFacet(w).removeNumericRefinement(w)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.getNumericRefinements(w),
                            r = n[">="],
                            i = void 0 === r ? [] : r,
                            a = n["<="],
                            s = void 0 === a ? [] : a;
                        return 0 === i.length && 0 === s.length ? e : D(D({}, e), {}, {
                            range: D(D({}, e.range), {}, M({}, w, "".concat(i, ":").concat(s)))
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = e.addDisjunctiveFacet(w).setQueryParameters({
                                numericRefinements: D(D({}, e.numericRefinements), {}, M({}, w, {}))
                            });
                        Ce(P) && (r = r.addNumericRefinement(w, ">=", P)), Ce(N) && (r = r.addNumericRefinement(w, "<=", N));
                        var i = n.range && n.range[w];
                        if (!i || -1 === i.indexOf(":")) return r;
                        var a = W(i.split(":").map(parseFloat), 2),
                            s = a[0],
                            o = a[1];
                        return Ce(s) && (!Ce(P) || P < s) && (r = (r = r.removeNumericRefinement(w, ">=")).addNumericRefinement(w, ">=", s)), Ce(o) && (!Ce(N) || o < N) && (r = (r = r.removeNumericRefinement(w, "<=")).addNumericRefinement(w, "<=", o)), r
                    }
                }
            }
    }
    var Pr = et({
        name: "refinement-list",
        connector: !0
    });

    function Nr(T) {
        var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(T, Pr()),
            function() {
                var m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    p = m.attribute,
                    e = m.operator,
                    h = void 0 === e ? "or" : e,
                    t = m.limit,
                    g = void 0 === t ? 10 : t,
                    n = m.showMore,
                    v = void 0 !== n && n,
                    r = m.showMoreLimit,
                    d = void 0 === r ? 20 : r,
                    i = m.sortBy,
                    y = void 0 === i ? ["isRefined", "count:desc", "name:asc"] : i,
                    a = m.escapeFacetValues,
                    b = void 0 === a || a,
                    s = m.transformItems,
                    S = void 0 === s ? function(e) {
                        return e
                    } : s;
                if (!p) throw new Error(Pr("The `attribute` option is required."));
                if (!/^(and|or)$/.test(h)) throw new Error(Pr('The `operator` must one of: `"and"`, `"or"` (got "'.concat(h, '").')));
                if (!0 === v && d <= g) throw new Error(Pr("`showMoreLimit` should be greater than `limit`."));

                function R(e) {
                    var t = e.name;
                    return D(D({}, O(e, ["name"])), {}, {
                        label: t,
                        value: t,
                        highlighted: t
                    })
                }

                function w(e) {
                    return e ? d : g
                }
                var P, N, x, _, I, F = [],
                    C = !0;
                return {
                    $$type: "ais.refinementList",
                    isShowingMore: !1,
                    toggleShowMore: function() {},
                    cachedToggleShowMore: function() {
                        I()
                    },
                    createToggleShowMore: function(e) {
                        var t = this;
                        return function() {
                            t.isShowingMore = !t.isShowingMore, t.render(e)
                        }
                    },
                    getLimit: function() {
                        return w(this.isShowingMore)
                    },
                    init: function(e) {
                        T(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !0)
                    },
                    render: function(e) {
                        T(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: e.instantSearchInstance
                        }), !1)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            refinementList: D(D({}, e.refinementList), {}, M({}, p, this.getWidgetRenderState(t)))
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t, n = e.results,
                            r = e.state,
                            i = e.createURL,
                            a = e.instantSearchInstance,
                            s = e.isFromSearch,
                            o = void 0 !== s && s,
                            c = e.helper,
                            u = [];
                        if (_ && x && N || (_ = at({
                                instantSearchInstance: a,
                                helper: c,
                                attribute: p,
                                widgetType: this.$$type
                            }), x = function(e) {
                                _("click", e), c.toggleRefinement(p, e).search()
                            }, N = function(n) {
                                var s = this;
                                return function(a) {
                                    return function(e) {
                                        var i = a.instantSearchInstance;
                                        if ("" === e && F) T(D(D({}, s.getWidgetRenderState(D(D({}, a), {}, {
                                            results: P
                                        }))), {}, {
                                            instantSearchInstance: i
                                        }));
                                        else {
                                            var t = {
                                                highlightPreTag: b ? We.highlightPreTag : Be.highlightPreTag,
                                                highlightPostTag: b ? We.highlightPostTag : Be.highlightPostTag
                                            };
                                            n.searchForFacetValues(p, e, Math.min(w(s.isShowingMore), 100), t).then(function(e) {
                                                var t = b ? $e(e.facetHits) : e.facetHits,
                                                    n = S(t.map(function(e) {
                                                        var t = e.value;
                                                        return D(D({}, O(e, ["value"])), {}, {
                                                            value: t,
                                                            label: t
                                                        })
                                                    })),
                                                    r = s.isShowingMore && F.length > g;
                                                T(D(D({}, s.getWidgetRenderState(D(D({}, a), {}, {
                                                    results: P
                                                }))), {}, {
                                                    items: n,
                                                    canToggleShowMore: r,
                                                    canRefine: !0,
                                                    instantSearchInstance: i,
                                                    isFromSearch: !0
                                                }))
                                            })
                                        }
                                    }
                                }
                            }.call(this, c)), n) {
                            u = o ? (t = b ? $e(n.facetHits) : n.facetHits, S(t.map(function(e) {
                                var t = e.value;
                                return D(D({}, O(e, ["value"])), {}, {
                                    value: t,
                                    label: t
                                })
                            }))) : (t = n.getFacetValues(p, {
                                sortBy: y
                            }) || [], S(t.slice(0, this.getLimit()).map(R)));
                            var l = r.maxValuesPerFacet,
                                h = this.getLimit();
                            C = h < l ? t.length <= h : t.length < h, P = n, F = u, I = this.createToggleShowMore(e)
                        }
                        var d = N && N(e),
                            f = this.isShowingMore && F.length > g || v && !o && !C;
                        return {
                            createURL: function(e) {
                                return i(r.toggleRefinement(p, e))
                            },
                            items: u,
                            refine: x,
                            searchForItems: d,
                            isFromSearch: o,
                            canRefine: o || 0 < u.length,
                            widgetParams: m,
                            isShowingMore: this.isShowingMore,
                            canToggleShowMore: f,
                            toggleShowMore: this.cachedToggleShowMore,
                            sendEvent: _,
                            hasExhaustiveItems: C
                        }
                    },
                    dispose: function(e) {
                        var t = e.state;
                        o();
                        var n = t.setQueryParameter("maxValuesPerFacet", void 0);
                        return "and" === h ? n.removeFacet(p) : n.removeDisjunctiveFacet(p)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters,
                            r = "or" === h ? n.getDisjunctiveRefinements(p) : n.getConjunctiveRefinements(p);
                        return r.length ? D(D({}, e), {}, {
                            refinementList: D(D({}, e.refinementList), {}, M({}, p, r))
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = "or" === h,
                            i = n.refinementList && n.refinementList[p],
                            a = e.clearRefinements(p),
                            s = r ? a.addDisjunctiveFacet(p) : a.addFacet(p),
                            o = s.maxValuesPerFacet || 0,
                            c = Math.max(o, v ? d : g),
                            u = s.setQueryParameter("maxValuesPerFacet", c);
                        if (i) return i.reduce(function(e, t) {
                            return r ? e.addDisjunctiveFacetRefinement(p, t) : e.addFacetRefinement(p, t)
                        }, u);
                        var l = r ? "disjunctiveFacetsRefinements" : "facetsRefinements";
                        return u.setQueryParameters(M({}, l, D(D({}, u[l]), {}, M({}, p, []))))
                    }
                }
            }
    }
    var xr = et({
        name: "search-box",
        connector: !0
    });

    function _r(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(n, xr()),
            function() {
                var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    a = i.queryHook;
                var s = function() {};

                function o() {
                    s()
                }
                return {
                    $$type: "ais.searchBox",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return r(), t.setQueryParameter("query", void 0)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            searchBox: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.helper,
                            n = e.searchMetadata;
                        if (!this._refine) {
                            var r = function(e) {
                                e !== t.state.query && t.setQuery(e).search()
                            };
                            this._refine = function(e) {
                                a ? a(e, r) : r(e)
                            }
                        }
                        return s = function(e) {
                            return function() {
                                e.setQuery("").search()
                            }
                        }(t), {
                            query: t.state.query || "",
                            refine: this._refine,
                            clear: o,
                            widgetParams: i,
                            isSearchStalled: n.isSearchStalled
                        }
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.query || "";
                        return "" === n || e && e.query === n ? e : D(D({}, e), {}, {
                            query: n
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState;
                        return e.setQueryParameter("query", n.query || "")
                    }
                }
            }
    }
    var Ir = et({
        name: "sort-by",
        connector: !0
    });

    function Fr(o) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(o, Ir()),
            function() {
                var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    a = i.items,
                    e = i.transformItems,
                    s = void 0 === e ? function(e) {
                        return e
                    } : e;
                if (!Array.isArray(a)) throw new Error(Ir("The `items` option expects an array of objects."));
                return {
                    $$type: "ais.sortBy",
                    init: function(e) {
                        var t = e.instantSearchInstance,
                            n = this.getWidgetRenderState(e),
                            r = n.currentRefinement;
                        Se(a, function(e) {
                            return e.value === r
                        });
                        o(D(D({}, n), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        o(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return n(), t.setIndex(this.initialIndex)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            sortBy: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.helper,
                            r = e.parent;
                        return this.initialIndex || (this.initialIndex = r.getIndexName()), this.setIndex || (this.setIndex = function(e) {
                            n.setIndex(e).search()
                        }), {
                            currentRefinement: n.state.index,
                            options: s(a),
                            refine: this.setIndex,
                            hasNoResults: !t || 0 === t.nbHits,
                            widgetParams: i
                        }
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.index;
                        return n === this.initialIndex ? e : D(D({}, e), {}, {
                            sortBy: n
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState;
                        return e.setQueryParameter("index", n.sortBy || this.initialIndex || e.index)
                    }
                }
            }
    }
    var Cr = et({
            name: "rating-menu",
            connector: !0
        }),
        Tr = "ais.ratingMenu",
        Er = 1,
        kr = function(e) {
            var o = e.instantSearchInstance,
                c = e.helper,
                u = e.getRefinedStar,
                l = e.attribute;
            return function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (1 !== t.length) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        s = void 0 === a ? "Filter Applied" : a;
                    if ("click" === r) u() === Number(i) || o.sendEventToInsights({
                        insightsMethod: "clickedFilters",
                        widgetType: Tr,
                        eventType: r,
                        payload: {
                            eventName: s,
                            index: c.getIndex(),
                            filters: ["".concat(l, ">=").concat(i)]
                        }
                    })
                } else o.sendEventToInsights(t[0])
            }
        };

    function Lr(n) {
        var t = this,
            r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(n, Cr()),
            function() {
                var h, d = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    f = d.attribute,
                    e = d.max,
                    m = void 0 === e ? 5 : e;
                if (!f) throw new Error(Cr("The `attribute` option is required."));

                function p(e) {
                    var t, n = e.getNumericRefinements(f);
                    if (null !== (t = n[">="]) && void 0 !== t && t.length) return n[">="][0]
                }
                var g = function(e) {
                        return function(e, t) {
                            h("click", t);
                            var n = p(e.state) === Number(t);
                            e.removeNumericRefinement(f), n || e.addNumericRefinement(f, "<=", m).addNumericRefinement(f, ">=", t), e.search()
                        }.bind(t, e)
                    },
                    v = function(e) {
                        var t = e.state,
                            n = e.createURL;
                        return function(e) {
                            return n(t.removeNumericRefinement(f).addNumericRefinement(f, "<=", m).addNumericRefinement(f, ">=", e))
                        }
                    };
                return {
                    $$type: Tr,
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            ratingMenu: D(D({}, e.ratingMenu), {}, M({}, f, this.getWidgetRenderState(t)))
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.helper,
                            n = e.results,
                            r = e.state,
                            i = e.instantSearchInstance,
                            a = e.createURL,
                            s = [];
                        if (h = h || kr({
                                instantSearchInstance: i,
                                helper: t,
                                getRefinedStar: function() {
                                    return p(t.state)
                                },
                                attribute: f
                            }), n)
                            for (var o = n.getFacetValues(f), c = (o.length, function(e) {
                                    var r = 0;
                                    e.forEach(function(e) {
                                        var t = W(e.name.split("."), 2)[1],
                                            n = void 0 === t ? "" : t;
                                        r = Math.max(r, n.length)
                                    })
                                }(o), p(r)), u = function(n) {
                                    var e = c === n,
                                        t = o.filter(function(e) {
                                            return Number(e.name) >= n && Number(e.name) <= m
                                        }).map(function(e) {
                                            return e.count
                                        }).reduce(function(e, t) {
                                            return e + t
                                        }, 0);
                                    if (c && !e && 0 === t) return "continue";
                                    var r = P(new Array(Math.floor(m / Er))).map(function(e, t) {
                                        return t * Er < n
                                    });
                                    s.push({
                                        stars: r,
                                        name: String(n),
                                        value: String(n),
                                        count: t,
                                        isRefined: e
                                    })
                                }, l = Er; l < m; l += Er) u(l);
                        return {
                            items: s = s.reverse(),
                            hasNoResults: !n || 0 === n.nbHits,
                            refine: g(t),
                            sendEvent: h,
                            createURL: v({
                                state: r,
                                createURL: a
                            }),
                            widgetParams: d
                        }
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return r(), t.removeNumericRefinement(f)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters,
                            r = p(n);
                        return "number" != typeof r ? e : D(D({}, e), {}, {
                            ratingMenu: D(D({}, e.ratingMenu), {}, M({}, f, r))
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = n.ratingMenu && n.ratingMenu[f],
                            i = e.clearRefinements(f).addDisjunctiveFacet(f);
                        return r ? i.addNumericRefinement(f, "<=", m).addNumericRefinement(f, ">=", r) : i.setQueryParameters({
                            numericRefinements: D(D({}, i.numericRefinements), {}, M({}, f, []))
                        })
                    }
                }
            }
    }
    var Mr = et({
        name: "stats",
        connector: !0
    });

    function jr(n) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(n, Mr()),
            function() {
                var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    $$type: "ais.stats",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        n(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function() {
                        e()
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            stats: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.results,
                            n = e.helper;
                        return t ? {
                            hitsPerPage: t.hitsPerPage,
                            nbHits: t.nbHits,
                            nbSortedHits: t.nbSortedHits,
                            areHitsSorted: void 0 !== t.appliedRelevancyStrictness && 0 < t.appliedRelevancyStrictness && t.nbSortedHits !== t.nbHits,
                            nbPages: t.nbPages,
                            page: t.page,
                            processingTimeMS: t.processingTimeMS,
                            query: t.query,
                            widgetParams: r
                        } : {
                            hitsPerPage: n.state.hitsPerPage,
                            nbHits: 0,
                            nbSortedHits: void 0,
                            areHitsSorted: !1,
                            nbPages: 0,
                            page: n.state.page || 0,
                            processingTimeMS: -1,
                            query: n.state.query || "",
                            widgetParams: r
                        }
                    }
                }
            }
    }
    var Or = et({
            name: "toggle-refinement",
            connector: !0
        }),
        Hr = "ais.toggleRefinement",
        Ar = function(e) {
            var o = e.instantSearchInstance,
                c = e.attribute,
                u = e.on,
                l = e.helper;
            return function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (1 !== t.length) {
                    var r = t[0],
                        i = t[1],
                        a = t[2],
                        s = void 0 === a ? "Filter Applied" : a;
                    "click" === r && void 0 !== u && (i || o.sendEventToInsights({
                        insightsMethod: "clickedFilters",
                        widgetType: Hr,
                        eventType: r,
                        payload: {
                            eventName: s,
                            index: l.getIndex(),
                            filters: u.map(function(e) {
                                return "".concat(c, ":").concat(e)
                            })
                        }
                    }))
                } else o.sendEventToInsights(t[0])
            }
        };

    function Dr(r) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie;
        return _e(r, Or()),
            function() {
                var f = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    m = f.attribute,
                    e = f.on,
                    t = void 0 === e || e,
                    n = f.off;
                if (!m) throw new Error(Or("The `attribute` option is required."));
                var p, g = void 0 !== n,
                    v = void 0 !== t ? Xe(t).map(xe) : void 0,
                    y = g ? Xe(n).map(xe) : void 0,
                    b = function(n, e) {
                        var r = e.state,
                            i = e.createURL;
                        return function() {
                            var e = n ? v : y;
                            e && e.forEach(function(e) {
                                r.removeDisjunctiveFacetRefinement(m, e)
                            });
                            var t = n ? y : v;
                            return t && t.forEach(function(e) {
                                r.addDisjunctiveFacetRefinement(m, e)
                            }), i(r)
                        }
                    };
                return {
                    $$type: Hr,
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        r(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        r(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return i(), t.removeDisjunctiveFacet(m)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            toggleRefinement: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.state,
                            n = e.helper,
                            r = e.results,
                            i = e.createURL,
                            a = e.instantSearchInstance,
                            s = r ? null == v ? void 0 : v.every(function(e) {
                                return n.state.isDisjunctiveFacetRefined(m, e)
                            }) : null == v ? void 0 : v.every(function(e) {
                                return t.isDisjunctiveFacetRefined(m, e)
                            }),
                            o = {
                                isRefined: s,
                                count: 0
                            },
                            c = {
                                isRefined: g && !s,
                                count: 0
                            };
                        if (r) {
                            var u = Xe(y || !1),
                                l = r.getFacetValues(m) || [],
                                h = null == v ? void 0 : v.map(function(t) {
                                    return Se(l, function(e) {
                                        return e.name === Re(t)
                                    })
                                }).filter(function(e) {
                                    return void 0 !== e
                                }),
                                d = g ? u.map(function(t) {
                                    return Se(l, function(e) {
                                        return e.name === Re(t)
                                    })
                                }).filter(function(e) {
                                    return void 0 !== e
                                }) : [];
                            o = {
                                isRefined: !!h.length && h.every(function(e) {
                                    return e.isRefined
                                }),
                                count: h.reduce(function(e, t) {
                                    return e + t.count
                                }, 0) || null
                            }, c = {
                                isRefined: !!d.length && d.every(function(e) {
                                    return e.isRefined
                                }),
                                count: d.reduce(function(e, t) {
                                    return e + t.count
                                }, 0) || l.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)
                            }
                        } else g && !s && (y && y.forEach(function(e) {
                            return n.addDisjunctiveFacetRefinement(m, e)
                        }), n.setPage(n.state.page));
                        return p = p || Ar({
                            instantSearchInstance: a,
                            attribute: m,
                            on: v,
                            helper: n
                        }), {
                            value: {
                                name: m,
                                isRefined: s,
                                count: r ? (s ? c : o).count : null,
                                onFacetValue: o,
                                offFacetValue: c
                            },
                            state: t,
                            createURL: b(s, {
                                state: t,
                                createURL: i
                            }),
                            sendEvent: p,
                            refine: function(t) {
                                return function() {
                                    var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).isRefined;
                                    e ? (v.forEach(function(e) {
                                        return t.removeDisjunctiveFacetRefinement(m, e)
                                    }), g && y.forEach(function(e) {
                                        return t.addDisjunctiveFacetRefinement(m, e)
                                    })) : (p("click", e), g && y.forEach(function(e) {
                                        return t.removeDisjunctiveFacetRefinement(m, e)
                                    }), v.forEach(function(e) {
                                        return t.addDisjunctiveFacetRefinement(m, e)
                                    })), t.search()
                                }
                            }(n),
                            widgetParams: f
                        }
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters,
                            r = v && v.every(function(e) {
                                return n.isDisjunctiveFacetRefined(m, e)
                            });
                        return r ? D(D({}, e), {}, {
                            toggle: D(D({}, e.toggle), {}, M({}, m, r))
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState,
                            r = e.clearRefinements(m).addDisjunctiveFacet(m);
                        return Boolean(n.toggle && n.toggle[m]) ? (v && v.forEach(function(e) {
                            r = r.addDisjunctiveFacetRefinement(m, e)
                        }), r) : g ? (y && y.forEach(function(e) {
                            r = r.addDisjunctiveFacetRefinement(m, e)
                        }), r) : r.setQueryParameters({
                            disjunctiveFacetsRefinements: D(D({}, e.disjunctiveFacetsRefinements), {}, M({}, m, []))
                        })
                    }
                }
            }
    }

    function Wr(l, e) {
        var h = 1 < arguments.length && void 0 !== e ? e : Ie;
        _e(l, Br());
        var d = {};
        return function(s) {
            var e = s || {},
                t = e.attributes,
                n = e.separator,
                r = void 0 === n ? " > " : n,
                i = e.rootPath,
                a = void 0 === i ? null : i,
                o = e.transformItems,
                c = void 0 === o ? function(e) {
                    return e
                } : o;
            if (!t || !Array.isArray(t) || 0 === t.length) throw new Error(Br("The `attributes` option expects an array of strings."));
            var u = W(t, 1)[0];
            return {
                $$type: "ais.breadcrumb",
                init: function(e) {
                    l(D(D({}, this.getWidgetRenderState(e)), {}, {
                        instantSearchInstance: e.instantSearchInstance
                    }), !0)
                },
                render: function(e) {
                    l(D(D({}, this.getWidgetRenderState(e)), {}, {
                        instantSearchInstance: e.instantSearchInstance
                    }), !1)
                },
                dispose: function() {
                    h()
                },
                getRenderState: function(e, t) {
                    return D(D({}, e), {}, {
                        breadcrumb: D(D({}, e.breadcrumb), {}, M({}, u, this.getWidgetRenderState(t)))
                    })
                },
                getWidgetRenderState: function(e) {
                    var n = e.helper,
                        r = e.createURL,
                        i = e.results,
                        a = e.state;
                    var t = function() {
                        if (!i) return [];
                        var e = W(a.hierarchicalFacets, 1)[0].name,
                            t = i.getFacetValues(e, {}),
                            n = Array.isArray(t.data) ? t.data : [];
                        return c(function(n) {
                            return n.map(function(e, t) {
                                return {
                                    label: e.label,
                                    value: t + 1 === n.length ? null : n[t + 1].value
                                }
                            })
                        }(function n(e) {
                            return e.reduce(function(e, t) {
                                return t.isRefined && (e.push({
                                    label: t.name,
                                    value: t.path
                                }), Array.isArray(t.data) && (e = e.concat(n(t.data)))), e
                            }, [])
                        }(n)))
                    }();
                    return d.createURL || (d.createURL = function(e) {
                        if (!e) {
                            var t = n.getHierarchicalFacetBreadcrumb(u);
                            if (0 < t.length) return r(n.state.toggleFacetRefinement(u, t[0]))
                        }
                        return r(n.state.toggleFacetRefinement(u, e))
                    }), d.refine || (d.refine = function(e) {
                        if (e) n.toggleRefinement(u, e).search();
                        else {
                            var t = n.getHierarchicalFacetBreadcrumb(u);
                            0 < t.length && n.toggleRefinement(u, t[0]).search()
                        }
                    }), {
                        canRefine: 0 < t.length,
                        createURL: d.createURL,
                        items: t,
                        refine: d.refine,
                        widgetParams: s
                    }
                },
                getWidgetSearchParameters: function(e) {
                    if (e.isHierarchicalFacet(u)) {
                        e.getHierarchicalFacetByName(u);
                        return e
                    }
                    return e.addHierarchicalFacet({
                        name: u,
                        attributes: t,
                        separator: r,
                        rootPath: a
                    })
                }
            }
        }
    }
    var Br = et({
        name: "breadcrumb",
        connector: !0
    });

    function Ur(v, e) {
        var r = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(v, qr()),
            function() {
                function s(e) {
                    return e.aroundLatLng && function(e) {
                        var t = e.match(tt);
                        if (!t) throw new Error('Invalid value for "aroundLatLng" parameter: "'.concat(e, '"'));
                        return {
                            lat: parseFloat(t[1]),
                            lng: parseFloat(t[2])
                        }
                    }(e.aroundLatLng)
                }

                function o() {
                    return g.internalToggleRefineOnMapMove()
                }

                function c(e, t) {
                    return function() {
                        g.isRefineOnMapMove = !g.isRefineOnMapMove, e(t)
                    }
                }

                function u() {
                    return g.isRefineOnMapMove
                }

                function l() {
                    return g.internalSetMapMoveSinceLastRefine()
                }

                function h(t, n) {
                    return function() {
                        var e = !0 !== g.hasMapMoveSinceLastRefine;
                        g.hasMapMoveSinceLastRefine = !0, e && t(n)
                    }
                }

                function d() {
                    return g.hasMapMoveSinceLastRefine
                }
                var f, m = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = m.enableRefineOnMapMove,
                    t = void 0 === e || e,
                    n = m.transformItems,
                    p = void 0 === n ? function(e) {
                        return e
                    } : n,
                    g = {
                        isRefineOnMapMove: t,
                        hasMapMoveSinceLastRefine: !1,
                        lastRefinePosition: "",
                        lastRefineBoundingBox: "",
                        internalToggleRefineOnMapMove: Ie,
                        internalSetMapMoveSinceLastRefine: Ie
                    };
                return {
                    $$type: $r,
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        g.internalToggleRefineOnMapMove = c(Ie, e), g.internalSetMapMoveSinceLastRefine = h(Ie, e), v(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.helper,
                            n = e.instantSearchInstance,
                            r = t.state,
                            i = Boolean(r.aroundLatLng) && Boolean(g.lastRefinePosition) && r.aroundLatLng !== g.lastRefinePosition,
                            a = !r.insideBoundingBox && Boolean(g.lastRefineBoundingBox) && r.insideBoundingBox !== g.lastRefineBoundingBox;
                        (i || a) && (g.hasMapMoveSinceLastRefine = !1), g.lastRefinePosition = r.aroundLatLng || "", g.lastRefineBoundingBox = r.insideBoundingBox || "", g.internalToggleRefineOnMapMove = c(this.render.bind(this), e), g.internalSetMapMoveSinceLastRefine = h(this.render.bind(this), e);
                        var s = this.getWidgetRenderState(e);
                        f("view", s.items), v(D(D({}, s), {}, {
                            instantSearchInstance: n
                        }), !1)
                    },
                    getWidgetRenderState: function(e) {
                        var t = e.helper,
                            n = e.results,
                            r = e.instantSearchInstance,
                            i = t.state,
                            a = n ? p(n.hits.filter(function(e) {
                                return e._geoloc
                            })) : [];
                        return f = f || ot({
                            instantSearchInstance: r,
                            index: t.getIndex(),
                            widgetType: $r
                        }), {
                            items: a,
                            position: s(i),
                            currentRefinement: function(e) {
                                return e.insideBoundingBox && nt(e.insideBoundingBox)
                            }(i),
                            refine: function(i) {
                                return function(e) {
                                    var t = e.northEast,
                                        n = e.southWest,
                                        r = [t.lat, t.lng, n.lat, n.lng].join();
                                    i.setQueryParameter("insideBoundingBox", r).search(), g.hasMapMoveSinceLastRefine = !1, g.lastRefineBoundingBox = r
                                }
                            }(t),
                            sendEvent: f,
                            clearMapRefinement: function(e) {
                                return function() {
                                    e.setQueryParameter("insideBoundingBox", void 0).search()
                                }
                            }(t),
                            isRefinedWithMap: function(e) {
                                return function() {
                                    return Boolean(e.insideBoundingBox)
                                }
                            }(i),
                            toggleRefineOnMapMove: o,
                            isRefineOnMapMove: u,
                            setMapMoveSinceLastRefine: l,
                            hasMapMoveSinceLastRefine: d,
                            widgetParams: m
                        }
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            geoSearch: this.getWidgetRenderState(t)
                        })
                    },
                    dispose: function(e) {
                        var t = e.state;
                        return r(), t.setQueryParameter("insideBoundingBox", void 0)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.insideBoundingBox;
                        return !n || e && e.geoSearch && e.geoSearch.boundingBox === n ? e : D(D({}, e), {}, {
                            geoSearch: {
                                boundingBox: n
                            }
                        })
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState;
                        return n && n.geoSearch ? e.setQueryParameter("insideBoundingBox", n.geoSearch.boundingBox) : e.setQueryParameter("insideBoundingBox", void 0)
                    }
                }
            }
    }

    function Qr(r, e) {
        var i = 1 < arguments.length && void 0 !== e ? e : Ie;
        _e(r, Vr());
        var a = "https://www.algolia.com/?utm_source=instantsearch.js&utm_medium=website&" + "utm_content=".concat("undefined" != typeof window && window.location ? window.location.hostname : "", "&") + "utm_campaign=poweredby";
        return function(e) {
            var t = (e || {}).url,
                n = void 0 === t ? a : t;
            return {
                $$type: "ais.poweredBy",
                init: function(e) {
                    var t = e.instantSearchInstance;
                    r(D(D({}, this.getWidgetRenderState(e)), {}, {
                        instantSearchInstance: t
                    }), !0)
                },
                render: function(e) {
                    var t = e.instantSearchInstance;
                    r(D(D({}, this.getWidgetRenderState(e)), {}, {
                        instantSearchInstance: t
                    }), !1)
                },
                getRenderState: function(e, t) {
                    return D(D({}, e), {}, {
                        poweredBy: this.getWidgetRenderState(t)
                    })
                },
                getWidgetRenderState: function() {
                    return {
                        url: n,
                        widgetParams: e
                    }
                },
                dispose: function() {
                    i()
                }
            }
        }
    }
    var qr = et({
            name: "geo-search",
            connector: !0
        }),
        $r = "ais.geoSearch",
        Vr = et({
            name: "powered-by",
            connector: !0
        }),
        Kr = et({
            name: "configure",
            connector: !0
        });

    function zr(e, t) {
        return e.setQueryParameters(Object.keys(t.searchParameters).reduce(function(e, t) {
            return D(D({}, e), {}, M({}, t, void 0))
        }, {}))
    }

    function Jr(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : Ie,
            a = 1 < arguments.length && void 0 !== t ? t : Ie;
        return function(i) {
            if (!i || !Te(i.searchParameters)) throw new Error(Kr("The `searchParameters` option expects an object."));
            var n = {};
            return {
                $$type: "ais.configure",
                init: function(e) {
                    var t = e.instantSearchInstance;
                    r(D(D({}, this.getWidgetRenderState(e)), {}, {
                        instantSearchInstance: t
                    }), !0)
                },
                render: function(e) {
                    var t = e.instantSearchInstance;
                    r(D(D({}, this.getWidgetRenderState(e)), {}, {
                        instantSearchInstance: t
                    }), !1)
                },
                dispose: function(e) {
                    var t = e.state;
                    return a(), zr(t, i)
                },
                getRenderState: function(e, t) {
                    var n, r = this.getWidgetRenderState(t);
                    return D(D({}, e), {}, {
                        configure: D(D({}, r), {}, {
                            widgetParams: D(D({}, r.widgetParams), {}, {
                                searchParameters: Ze(new ce.SearchParameters(null === (n = e.configure) || void 0 === n ? void 0 : n.widgetParams.searchParameters), new ce.SearchParameters(r.widgetParams.searchParameters)).getQueryParams()
                            })
                        })
                    })
                },
                getWidgetRenderState: function(e) {
                    var t = e.helper;
                    return n.refine || (n.refine = function(r) {
                        return function(e) {
                            var t = zr(r.state, i),
                                n = Ze(t, new ce.SearchParameters(e));
                            i.searchParameters = e, r.setState(n).search()
                        }
                    }(t)), {
                        refine: n.refine,
                        widgetParams: i
                    }
                },
                getWidgetSearchParameters: function(e, t) {
                    var n = t.uiState;
                    return Ze(e, new ce.SearchParameters(D(D({}, n.configure), i.searchParameters)))
                },
                getWidgetUiState: function(e) {
                    return D(D({}, e), {}, {
                        configure: D(D({}, e.configure), i.searchParameters)
                    })
                }
            }
        }
    }
    var Yr = et({
        name: "configure-related-items",
        connector: !0
    });

    function Gr(e) {
        var t = e.attributeName,
            n = e.attributeValue,
            r = e.attributeScore;
        return "".concat(t, ":").concat(n, "<score=").concat(r || 1, ">")
    }

    function Zr(c, u) {
        return function(e) {
            var t = e || {},
                a = t.hit,
                s = t.matchingPatterns,
                n = t.transformSearchParameters,
                r = void 0 === n ? function(e) {
                    return e
                } : n;
            if (!a) throw new Error(Yr("The `hit` option is required."));
            if (!s) throw new Error(Yr("The `matchingPatterns` option is required."));
            var i = Object.keys(s).reduce(function(e, t) {
                    var n = s[t],
                        r = Fe(a, t),
                        i = n.score;
                    return Array.isArray(r) ? [].concat(P(e), [r.map(function(e) {
                        return Gr({
                            attributeName: t,
                            attributeValue: e,
                            attributeScore: i
                        })
                    })]) : "string" == typeof r ? [].concat(P(e), [Gr({
                        attributeName: t,
                        attributeValue: r,
                        attributeScore: i
                    })]) : e
                }, []),
                o = D({}, r(new ce.SearchParameters({
                    sumOrFiltersScores: !0,
                    facetFilters: ["objectID:-".concat(a.objectID)],
                    optionalFilters: i
                })));
            return D(D({}, Jr(c, u)({
                searchParameters: o
            })), {}, {
                $$type: "ais.configureRelatedItems"
            })
        }
    }
    var Xr = et({
            name: "autocomplete",
            connector: !0
        }),
        ei = et({
            name: "query-rules",
            connector: !0
        });

    function ti(e) {
        var t = this.helper,
            n = this.initialRuleContexts,
            r = this.trackedFilters,
            i = this.transformRuleContexts,
            a = e.state,
            s = a.ruleContexts || [],
            o = function(e) {
                var i = e.helper,
                    a = e.sharedHelperState,
                    s = e.trackedFilters;
                return Object.keys(s).reduce(function(e, t) {
                    var n = Pe(i.lastResults || {}, a, !0).filter(function(e) {
                            return e.attribute === t
                        }).map(function(e) {
                            return e.numericValue || e.name
                        }),
                        r = (0, s[t])(n);
                    return [].concat(P(e), P(n.filter(function(e) {
                        return r.includes(e)
                    }).map(function(e) {
                        return function(e) {
                            return e.replace(/[^a-z0-9-_]+/gi, "_")
                        }("ais-".concat(t, "-").concat(e))
                    })))
                }, [])
            }({
                helper: t,
                sharedHelperState: a,
                trackedFilters: r
            }),
            c = i([].concat(P(n), P(o))).slice(0, 10);
        Le(s, c) || t.overrideStateWithoutTriggeringChangeEvent(D(D({}, a), {}, {
            ruleContexts: c
        }))
    }

    function ni(h, e) {
        var d = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(h, ei()),
            function(i) {
                var e = i || {},
                    t = e.trackedFilters,
                    a = void 0 === t ? {} : t,
                    n = e.transformRuleContexts,
                    s = void 0 === n ? function(e) {
                        return e
                    } : n,
                    r = e.transformItems,
                    o = void 0 === r ? function(e) {
                        return e
                    } : r;
                Object.keys(a).forEach(function(e) {
                    if ("function" != typeof a[e]) throw new Error(ei("'The \"".concat(e, '" filter value in the `trackedFilters` option expects a function.')))
                });
                var c, u = 0 < Object.keys(a).length,
                    l = [];
                return {
                    $$type: "ais.queryRules",
                    init: function(e) {
                        var t = e.helper,
                            n = e.state,
                            r = e.instantSearchInstance;
                        l = n.ruleContexts || [], c = ti.bind({
                            helper: t,
                            initialRuleContexts: l,
                            trackedFilters: a,
                            transformRuleContexts: s
                        }), u && ((function(e) {
                            return [e.disjunctiveFacetsRefinements, e.facetsRefinements, e.hierarchicalFacetsRefinements, e.numericRefinements].some(function(e) {
                                return Boolean(e && 0 < Object.keys(e).length)
                            })
                        }(n) || Boolean(i.transformRuleContexts)) && c({
                            state: n
                        }), t.on("change", c)), h(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: r
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        h(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    getWidgetRenderState: function(e) {
                        var t = (e.results || {}).userData;
                        return {
                            items: o(void 0 === t ? [] : t),
                            widgetParams: i
                        }
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            queryRules: this.getWidgetRenderState(t)
                        })
                    },
                    dispose: function(e) {
                        var t = e.helper,
                            n = e.state;
                        return d(), u ? (t.removeListener("change", c), n.setQueryParameter("ruleContexts", l)) : n
                    }
                }
            }
    }

    function ri(e) {
        function t(e) {
            return {
                status: e,
                transcript: "",
                isSpeechFinal: !1,
                errorCode: void 0
            }
        }

        function n(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {};
            p = D(D({}, p), t), f()
        }

        function r(e) {
            n(t(0 < arguments.length && void 0 !== e ? e : "initial"))
        }

        function i() {
            n({
                status: "waiting"
            })
        }

        function a(e) {
            n({
                status: "error",
                errorCode: e.error
            })
        }

        function s(e) {
            n({
                status: "recognizing",
                transcript: e.results[0] && e.results[0][0] && e.results[0][0].transcript || "",
                isSpeechFinal: e.results[0] && e.results[0].isFinal
            }), l && p.transcript && d(p.transcript)
        }

        function o() {
            p.errorCode || !p.transcript || l || d(p.transcript), "error" !== p.status && n({
                status: "finished"
            })
        }

        function c() {
            u && (u.stop(), u.removeEventListener("start", i), u.removeEventListener("error", a), u.removeEventListener("result", s), u.removeEventListener("end", o), u = void 0)
        }
        var u, l = e.searchAsYouSpeak,
            h = e.language,
            d = e.onQueryChange,
            f = e.onStateChange,
            m = window.webkitSpeechRecognition || window.SpeechRecognition,
            p = t("initial");
        return {
            getState: function() {
                return p
            },
            isBrowserSupported: function() {
                return Boolean(m)
            },
            isListening: function() {
                return "askingPermission" === p.status || "waiting" === p.status || "recognizing" === p.status
            },
            startListening: function() {
                (u = new m) && (r("askingPermission"), u.interimResults = !0, h && (u.lang = h), u.addEventListener("start", i), u.addEventListener("error", a), u.addEventListener("result", s), u.addEventListener("end", o), u.start())
            },
            stopListening: function() {
                c(), r("finished")
            },
            dispose: c
        }
    }

    function ii(p, e) {
        var a = 1 < arguments.length && void 0 !== e ? e : Ie;
        return _e(p, ai()),
            function(l) {
                var e = l.searchAsYouSpeak,
                    h = void 0 !== e && e,
                    d = l.language,
                    f = l.additionalQueryParameters,
                    t = l.createVoiceSearchHelper,
                    m = void 0 === t ? ri : t;
                return {
                    $$type: "ais.voiceSearch",
                    init: function(e) {
                        var t = e.instantSearchInstance;
                        p(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !0)
                    },
                    render: function(e) {
                        var t = e.instantSearchInstance;
                        p(D(D({}, this.getWidgetRenderState(e)), {}, {
                            instantSearchInstance: t
                        }), !1)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            voiceSearch: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function(e) {
                        var t = this,
                            n = e.helper,
                            r = e.instantSearchInstance;
                        this._refine || (this._refine = function(e) {
                            if (e !== n.state.query) {
                                var t = d ? [d.split("-")[0]] : void 0;
                                n.setQueryParameter("queryLanguages", t), "function" == typeof f && n.setState(n.state.setQueryParameters(D({
                                    ignorePlurals: !0,
                                    removeStopWords: !0,
                                    optionalWords: e
                                }, f({
                                    query: e
                                })))), n.setQuery(e).search()
                            }
                        }), this._voiceSearchHelper || (this._voiceSearchHelper = m({
                            searchAsYouSpeak: h,
                            language: d,
                            onQueryChange: function(e) {
                                return t._refine(e)
                            },
                            onStateChange: function() {
                                p(D(D({}, t.getWidgetRenderState(e)), {}, {
                                    instantSearchInstance: r
                                }), !1)
                            }
                        }));
                        var i = this._voiceSearchHelper,
                            a = i.isBrowserSupported,
                            s = i.isListening,
                            o = i.startListening,
                            c = i.stopListening,
                            u = i.getState;
                        return {
                            isBrowserSupported: a(),
                            isListening: s(),
                            toggleListening: function() {
                                a() && (s() ? c() : o())
                            },
                            voiceListeningState: u(),
                            widgetParams: l
                        }
                    },
                    dispose: function(e) {
                        var t = e.state;
                        this._voiceSearchHelper.dispose(), a();
                        var n = t;
                        if ("function" == typeof f) {
                            var r = f({
                                    query: ""
                                }),
                                i = r ? Object.keys(r).reduce(function(e, t) {
                                    return e[t] = void 0, e
                                }, {}) : {};
                            n = t.setQueryParameters(D({
                                queryLanguages: void 0,
                                ignorePlurals: void 0,
                                removeStopWords: void 0,
                                optionalWords: void 0
                            }, i))
                        }
                        return n.setQueryParameter("query", void 0)
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.query || "";
                        return n ? D(D({}, e), {}, {
                            query: n
                        }) : e
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState;
                        return e.setQueryParameter("query", n.query || "")
                    }
                }
            }
    }
    var ai = et({
            name: "voice-search",
            connector: !0
        }),
        si = Object.freeze({
            __proto__: null,
            connectClearRefinements: un,
            connectCurrentRefinements: dn,
            connectHierarchicalMenu: bn,
            connectHits: Sn,
            connectHitsWithInsights: nr,
            connectHitsPerPage: tr,
            connectInfiniteHits: sr,
            connectInfiniteHitsWithInsights: ur,
            connectMenu: or,
            connectNumericMenu: cr,
            connectPagination: gr,
            connectRange: wr,
            connectRefinementList: Nr,
            connectSearchBox: _r,
            connectSortBy: Fr,
            connectRatingMenu: Lr,
            connectStats: jr,
            connectToggleRefinement: Dr,
            connectBreadcrumb: Wr,
            connectGeoSearch: Ur,
            connectPoweredBy: Qr,
            connectConfigure: Jr,
            EXPERIMENTAL_connectConfigureRelatedItems: Zr,
            connectAutocomplete: function(r, e) {
                var i = 1 < arguments.length && void 0 !== e ? e : Ie;
                return _e(r, Xr()),
                    function(s) {
                        var e = (s || {}).escapeHTML,
                            o = void 0 === e || e,
                            c = {};
                        return {
                            $$type: "ais.autocomplete",
                            init: function(e) {
                                var t = e.instantSearchInstance;
                                r(D(D({}, this.getWidgetRenderState(e)), {}, {
                                    instantSearchInstance: t
                                }), !0)
                            },
                            render: function(e) {
                                var t = e.instantSearchInstance,
                                    n = this.getWidgetRenderState(e);
                                n.indices.forEach(function(e) {
                                    (0, e.sendEvent)("view", e.hits)
                                }), r(D(D({}, n), {}, {
                                    instantSearchInstance: t
                                }), !1)
                            },
                            getRenderState: function(e, t) {
                                return D(D({}, e), {}, {
                                    autocomplete: this.getWidgetRenderState(t)
                                })
                            },
                            getWidgetRenderState: function(e) {
                                var n = this,
                                    t = e.helper,
                                    r = e.scopedResults,
                                    i = e.instantSearchInstance;
                                c.refine || (c.refine = function(e) {
                                    t.setQuery(e).search()
                                });
                                var a = r.map(function(e) {
                                    e.results.hits = o ? qe(e.results.hits) : e.results.hits;
                                    var t = ot({
                                        instantSearchInstance: i,
                                        index: e.results.index,
                                        widgetType: n.$$type
                                    });
                                    return {
                                        indexId: e.indexId,
                                        indexName: e.results.index,
                                        hits: e.results.hits,
                                        results: e.results,
                                        sendEvent: t
                                    }
                                });
                                return {
                                    currentRefinement: t.state.query || "",
                                    indices: a,
                                    refine: c.refine,
                                    widgetParams: s
                                }
                            },
                            getWidgetUiState: function(e, t) {
                                var n = t.searchParameters.query || "";
                                return "" === n || e && e.query === n ? e : D(D({}, e), {}, {
                                    query: n
                                })
                            },
                            getWidgetSearchParameters: function(e, t) {
                                var n = {
                                    query: t.uiState.query || ""
                                };
                                return o ? e.setQueryParameters(D(D({}, n), We)) : e.setQueryParameters(n)
                            },
                            dispose: function(e) {
                                var t = e.state;
                                i();
                                var n = t.setQueryParameter("query", void 0);
                                return o ? n.setQueryParameters(Object.keys(We).reduce(function(e, t) {
                                    return D(D({}, e), {}, M({}, t, void 0))
                                }, {})) : n
                            }
                        }
                    }
            },
            connectQueryRules: ni,
            connectVoiceSearch: ii
        }),
        oi = pe(function(e) {
            function s() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var r = typeof n;
                        if ("string" == r || "number" == r) e.push(n);
                        else if (Array.isArray(n) && n.length) {
                            var i = s.apply(null, n);
                            i && e.push(i)
                        } else if ("object" == r)
                            for (var a in n) o.call(n, a) && n[a] && e.push(a)
                    }
                }
                return e.join(" ")
            }
            var o;
            o = {}.hasOwnProperty, e.exports ? (s.default = s, e.exports = s) : window.classNames = s
        }),
        ci = function() {
            j(t, Hn);
            var e = A(t);

            function t() {
                return k(this, t), e.apply(this, arguments)
            }
            return L(t, [{
                key: "shouldComponentUpdate",
                value: function(e) {
                    return !Le(this.props.data, e.data) || this.props.templateKey !== e.templateKey || !Le(this.props.rootProps, e.rootProps)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.rootTagName,
                        t = this.props.useCustomCompileOptions[this.props.templateKey] ? this.props.templatesConfig.compileOptions : {},
                        n = be({
                            templates: this.props.templates,
                            templateKey: this.props.templateKey,
                            compileOptions: t,
                            helpers: this.props.templatesConfig.helpers,
                            data: this.props.data,
                            bindEvent: this.props.bindEvent
                        });
                    return null === n ? null : Mn(e, d({}, this.props.rootProps, {
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    }))
                }
            }]), t
        }();
    ci.defaultProps = {
        data: {},
        rootTagName: "div",
        useCustomCompileOptions: {},
        templates: {},
        templatesConfig: {}
    };

    function ui(e) {
        var t = e.hasRefinements,
            n = e.refine,
            r = e.cssClasses,
            i = e.templateProps;
        return Mn("div", {
            className: r.root
        }, Mn(ci, d({}, i, {
            templateKey: "resetLabel",
            rootTagName: "button",
            rootProps: {
                className: oi(r.button, M({}, r.disabledButton, !t)),
                onClick: n,
                disabled: !t
            },
            data: {
                hasRefinements: t
            }
        })))
    }

    function li(e) {
        var t = e.items,
            n = e.cssClasses;
        return Mn("div", {
            className: n.root
        }, Mn("ul", {
            className: n.list
        }, t.map(function(t, e) {
            return Mn("li", {
                key: "".concat(t.indexName, "-").concat(t.attribute, "-").concat(e),
                className: n.item
            }, Mn("span", {
                className: n.label
            }, function(e) {
                return e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
            }(t.label), ":"), t.refinements.map(function(e) {
                return Mn("span", {
                    key: function(e) {
                        var t = e.attribute,
                            n = e.value;
                        return [t, e.type, n, e.operator].map(function(e) {
                            return e
                        }).filter(Boolean).join(":")
                    }(e),
                    className: n.category
                }, Mn("span", {
                    className: n.categoryLabel
                }, "query" === e.attribute ? Mn("q", null, e.label) : e.label), Mn("button", {
                    className: n.delete,
                    onClick: function(t) {
                        return function(e) {
                            de(e) || (e.preventDefault(), t())
                        }
                    }(t.refine.bind(null, e))
                }, "✕"))
            }))
        })))
    }

    function hi(e, t) {
        var n = e.items,
            r = e.widgetParams;
        if (!t) {
            var i = r.container,
                a = r.cssClasses;
            Zn(Mn(li, {
                cssClasses: a,
                items: n
            }), i)
        }
    }

    function di(e) {
        var t = e.className,
            n = e.disabled;
        return Mn("button", {
            className: t,
            onClick: e.onClick,
            disabled: n
        }, e.children)
    }
    var fi = {
            resetLabel: "Clear refinements"
        },
        mi = et({
            name: "clear-refinements"
        }),
        pi = vt("ClearRefinements"),
        gi = et({
            name: "current-refinements"
        }),
        vi = vt("CurrentRefinements");
    di.defaultProps = {
        disabled: !1
    };

    function yi(e) {
        var t = e.classNameLabel,
            n = e.classNameInput,
            r = e.checked,
            i = e.onToggle,
            a = e.children;
        return Mn("label", {
            className: t
        }, Mn("input", {
            className: n,
            type: "checkbox",
            checked: r,
            onChange: i
        }), a)
    }

    function bi(e) {
        var t = e.cssClasses,
            n = e.enableRefine,
            r = e.enableRefineControl,
            i = e.enableClearMapRefinement,
            a = e.isRefineOnMapMove,
            s = e.isRefinedWithMap,
            o = e.hasMapMoveSinceLastRefine,
            c = e.onRefineToggle,
            u = e.onRefineClick,
            l = e.onClearClick,
            h = e.templateProps;
        return n && Mn("div", null, r && Mn("div", {
            className: t.control
        }, a || !o ? Mn(yi, {
            classNameLabel: oi(t.label, M({}, t.selectedLabel, a)),
            classNameInput: t.input,
            checked: a,
            onToggle: c
        }, Mn(ci, d({}, h, {
            templateKey: "toggle",
            rootTagName: "span"
        }))) : Mn(di, {
            className: t.redo,
            disabled: !o,
            onClick: u
        }, Mn(ci, d({}, h, {
            templateKey: "redo",
            rootTagName: "span"
        })))), !r && !a && Mn("div", {
            className: t.control
        }, Mn(di, {
            className: oi(t.redo, M({}, t.disabledRedo, !o)),
            disabled: !o,
            onClick: u
        }, Mn(ci, d({}, h, {
            templateKey: "redo",
            rootTagName: "span"
        })))), i && s && Mn(di, {
            className: t.reset,
            onClick: l
        }, Mn(ci, d({}, h, {
            templateKey: "reset",
            rootTagName: "span"
        }))))
    }

    function Si(e) {
        var t = e.refine,
            n = e.mapInstance;
        return t({
            northEast: n.getBounds().getNorthEast().toJSON(),
            southWest: n.getBounds().getSouthWest().toJSON()
        })
    }

    function Ri(e, t) {
        e.isUserInteraction = !1, t(), e.isUserInteraction = !0
    }

    function wi(e, t) {
        var n = e.items,
            r = e.position,
            i = e.currentRefinement,
            a = e.refine,
            s = e.clearMapRefinement,
            o = e.toggleRefineOnMapMove,
            c = e.isRefineOnMapMove,
            u = e.setMapMoveSinceLastRefine,
            l = e.hasMapMoveSinceLastRefine,
            h = e.isRefinedWithMap,
            d = e.widgetParams,
            f = e.instantSearchInstance,
            m = d.container,
            p = d.googleReference,
            g = d.cssClasses,
            v = d.templates,
            y = d.initialZoom,
            b = d.initialPosition,
            S = d.enableRefine,
            R = d.enableClearMapRefinement,
            w = d.enableRefineControl,
            P = d.mapOptions,
            N = d.createMarker,
            x = d.markerOptions,
            _ = d.renderState;
        if (t) {
            _.isUserInteraction = !0, _.isPendingRefine = !1, _.markers = [];
            var I = document.createElement("div");
            I.className = g.root, m.appendChild(I);
            var F = document.createElement("div");
            F.className = g.map, I.appendChild(F);
            var C = document.createElement("div");
            C.className = g.tree, I.appendChild(C), _.mapInstance = new p.maps.Map(F, D({
                mapTypeControl: !1,
                fullscreenControl: !1,
                streetViewControl: !1,
                clickableIcons: !1,
                zoomControlOptions: {
                    position: p.maps.ControlPosition.LEFT_TOP
                }
            }, P));
            return p.maps.event.addListenerOnce(_.mapInstance, "idle", function() {
                function e() {
                    _.isUserInteraction && S && (u(), c() && (_.isPendingRefine = !0))
                }
                _.mapInstance.addListener("center_changed", e), _.mapInstance.addListener("zoom_changed", e), _.mapInstance.addListener("dragstart", e), _.mapInstance.addListener("idle", function() {
                    _.isUserInteraction && _.isPendingRefine && (_.isPendingRefine = !1, Si({
                        mapInstance: _.mapInstance,
                        refine: a
                    }))
                })
            }), void(_.templateProps = me({
                templatesConfig: f.templatesConfig,
                templates: v
            }))
        }
        var T = n.map(function(e) {
                return e.objectID
            }),
            E = W(function(e, a) {
                return e.reduce(function(e, t) {
                    var n = W(e, 2),
                        r = n[0],
                        i = n[1];
                    return a.includes(t.__id) ? [r.concat(t), i] : [r, i.concat(t)]
                }, [
                    [],
                    []
                ])
            }(_.markers, T), 2),
            k = E[0],
            L = E[1],
            M = k.map(function(e) {
                return e.__id
            }),
            j = n.filter(function(e) {
                return !M.includes(e.objectID)
            });
        L.forEach(function(e) {
            return e.setMap(null)
        }), _.markers = k.concat(j.map(function(n) {
            var r = N({
                map: _.mapInstance,
                item: n
            });
            return Object.keys(x.events).forEach(function(t) {
                r.addListener(t, function(e) {
                    x.events[t]({
                        map: _.mapInstance,
                        event: e,
                        item: n,
                        marker: r
                    })
                })
            }), r
        }));
        var O = !l(),
            H = i ? 0 : null,
            A = !i && Boolean(_.markers.length) ? function(e, t) {
                var n = t.reduce(function(e, t) {
                    return e.extend(t.getPosition())
                }, new e.maps.LatLngBounds);
                return {
                    northEast: n.getNorthEast().toJSON(),
                    southWest: n.getSouthWest().toJSON()
                }
            }(p, _.markers) : i;
        A && O ? Ri(_, function() {
            _.mapInstance.fitBounds(new p.maps.LatLngBounds(A.southWest, A.northEast), H)
        }) : O && Ri(_, function() {
            _.mapInstance.setCenter(r || b), _.mapInstance.setZoom(y)
        }), Zn(Mn(bi, {
            cssClasses: g,
            enableRefine: S,
            enableRefineControl: w,
            enableClearMapRefinement: R,
            isRefineOnMapMove: c(),
            isRefinedWithMap: h(),
            hasMapMoveSinceLastRefine: l(),
            onRefineToggle: o,
            onRefineClick: function() {
                return Si({
                    mapInstance: _.mapInstance,
                    refine: a
                })
            },
            onClearClick: s,
            templateProps: _.templateProps
        }), m.querySelector(".".concat(g.tree)))
    }
    var Pi = {
            HTMLMarker: "<p>Your custom HTML Marker</p>",
            reset: "Clear the map refinement",
            toggle: "Search as I move the map",
            redo: "Redo search here"
        },
        Ni = et({
            name: "geo-search"
        }),
        xi = vt("GeoSearch");

    function _i(e) {
        var t = e.className,
            n = e.handleClick,
            r = e.facetValueToRefine,
            i = e.isRefined,
            a = e.templateProps,
            s = e.templateKey,
            o = e.templateData,
            c = e.subItems;
        return Mn("li", {
            className: t,
            onClick: function(e) {
                n({
                    facetValueToRefine: r,
                    isRefined: i,
                    originalEvent: e
                })
            }
        }, Mn(ci, d({}, a, {
            templateKey: s,
            data: o
        })), c)
    }
    var Ii = function() {
        j(i, Hn);
        var r = A(i);

        function i() {
            var s;
            k(this, i);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return M(H(s = r.call.apply(r, [this].concat(t))), "state", {
                query: s.props.query,
                focused: !1
            }), M(H(s), "onInput", function(e) {
                var t = s.props,
                    n = t.searchAsYouType,
                    r = t.refine,
                    i = t.onChange,
                    a = e.target.value;
                n && r(a), s.setState({
                    query: a
                }), i(e)
            }), M(H(s), "onSubmit", function(e) {
                var t = s.props,
                    n = t.searchAsYouType,
                    r = t.refine,
                    i = t.onSubmit;
                return e.preventDefault(), e.stopPropagation(), s.input.blur(), n || r(s.state.query), i(e), !1
            }), M(H(s), "onReset", function(e) {
                var t = s.props,
                    n = t.refine,
                    r = t.onReset;
                s.input.focus(), n(""), s.setState({
                    query: ""
                }), r(e)
            }), M(H(s), "onBlur", function() {
                s.setState({
                    focused: !1
                })
            }), M(H(s), "onFocus", function() {
                s.setState({
                    focused: !0
                })
            }), s
        }
        return L(i, [{
            key: "resetInput",
            value: function() {
                this.setState({
                    query: ""
                })
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.state.focused || e.query === this.state.query || this.setState({
                    query: e.query
                })
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props,
                    n = e.cssClasses,
                    r = e.placeholder,
                    i = e.autofocus,
                    a = e.showSubmit,
                    s = e.showReset,
                    o = e.showLoadingIndicator,
                    c = e.templates,
                    u = e.isSearchStalled;
                return Mn("div", {
                    className: n.root
                }, Mn("form", {
                    action: "",
                    role: "search",
                    className: n.form,
                    noValidate: !0,
                    onSubmit: this.onSubmit,
                    onReset: this.onReset
                }, Mn("input", {
                    ref: function(e) {
                        return t.input = e
                    },
                    value: this.state.query,
                    disabled: this.props.disabled,
                    className: n.input,
                    type: "search",
                    placeholder: r,
                    autoFocus: i,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    maxLength: 512,
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
                }), Mn(ci, {
                    templateKey: "submit",
                    rootTagName: "button",
                    rootProps: {
                        className: n.submit,
                        type: "submit",
                        title: "Submit the search query.",
                        hidden: !a
                    },
                    templates: c,
                    data: {
                        cssClasses: n
                    }
                }), Mn(ci, {
                    templateKey: "reset",
                    rootTagName: "button",
                    rootProps: {
                        className: n.reset,
                        type: "reset",
                        title: "Clear the search query.",
                        hidden: !(s && this.state.query.trim() && !u)
                    },
                    templates: c,
                    data: {
                        cssClasses: n
                    }
                }), o && Mn(ci, {
                    templateKey: "loadingIndicator",
                    rootTagName: "span",
                    rootProps: {
                        className: n.loadingIndicator,
                        hidden: !u
                    },
                    templates: c,
                    data: {
                        cssClasses: n
                    }
                })))
            }
        }]), i
    }();
    M(Ii, "defaultProps", {
        query: "",
        showSubmit: !0,
        showReset: !0,
        showLoadingIndicator: !0,
        autofocus: !1,
        searchAsYouType: !0,
        isSearchStalled: !1,
        disabled: !1,
        onChange: Ie,
        onSubmit: Ie,
        onReset: Ie,
        refine: Ie
    });
    var Fi = function() {
        j(u, Hn);
        var n = A(u);

        function u(e) {
            var t;
            return k(this, u), (t = n.call(this, e)).handleItemClick = t.handleItemClick.bind(H(t)), t
        }
        return L(u, [{
            key: "shouldComponentUpdate",
            value: function(e, t) {
                var n = this.state !== t,
                    r = !Le(this.props.facetValues, e.facetValues);
                return n || r
            }
        }, {
            key: "refine",
            value: function(e, t) {
                this.props.toggleRefinement(e, t)
            }
        }, {
            key: "_generateFacetItem",
            value: function(e) {
                var t, n, r = e.data && 0 < e.data.length;
                if (r) {
                    var i = this.props.cssClasses,
                        a = (i.root, O(i, ["root"]));
                    n = Mn(u, d({}, this.props, {
                        cssClasses: a,
                        depth: this.props.depth + 1,
                        facetValues: e.data,
                        showMore: !1,
                        className: this.props.cssClasses.childList
                    }))
                }
                var s = this.props.createURL(e.value),
                    o = D(D({}, e), {}, {
                        url: s,
                        attribute: this.props.attribute,
                        cssClasses: this.props.cssClasses,
                        isFromSearch: this.props.isFromSearch
                    }),
                    c = e.value;
                return void 0 !== e.isRefined && (c += "/".concat(e.isRefined)), void 0 !== e.count && (c += "/".concat(e.count)), Mn(_i, {
                    templateKey: "item",
                    key: c,
                    facetValueToRefine: e.value,
                    handleClick: this.handleItemClick,
                    isRefined: e.isRefined,
                    className: oi(this.props.cssClasses.item, (t = {}, M(t, this.props.cssClasses.selectedItem, e.isRefined), M(t, this.props.cssClasses.disabledItem, !e.count), M(t, this.props.cssClasses.parentItem, r), t)),
                    subItems: n,
                    templateData: o,
                    templateProps: this.props.templateProps
                })
            }
        }, {
            key: "handleItemClick",
            value: function(e) {
                var t = e.facetValueToRefine,
                    n = e.originalEvent,
                    r = e.isRefined;
                if (!(de(n) || r && n.target.parentNode.querySelector('input[type="radio"]:checked')))
                    if ("INPUT" !== n.target.tagName) {
                        for (var i = n.target; i !== n.currentTarget;) {
                            if ("LABEL" === i.tagName && (i.querySelector('input[type="checkbox"]') || i.querySelector('input[type="radio"]'))) return;
                            "A" === i.tagName && i.href && n.preventDefault(), i = i.parentNode
                        }
                        n.stopPropagation(), this.refine(t, r)
                    } else this.refine(t, r)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.searchBox && !e.isFromSearch && this.searchBox.resetInput()
            }
        }, {
            key: "refineFirstValue",
            value: function() {
                var e = this.props.facetValues[0];
                if (e) {
                    var t = e.value;
                    this.props.toggleRefinement(t)
                }
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = oi(this.props.cssClasses.list, M({}, "".concat(this.props.cssClasses.depth).concat(this.props.depth), this.props.cssClasses.depth)),
                    n = oi(this.props.cssClasses.showMore, M({}, this.props.cssClasses.disabledShowMore, !(!0 === this.props.showMore && this.props.canToggleShowMore))),
                    r = !0 === this.props.showMore && Mn(ci, d({}, this.props.templateProps, {
                        templateKey: "showMoreText",
                        rootTagName: "button",
                        rootProps: {
                            className: n,
                            disabled: !this.props.canToggleShowMore,
                            onClick: this.props.toggleShowMore
                        },
                        data: {
                            isShowingMore: this.props.isShowingMore
                        }
                    })),
                    i = !0 !== this.props.searchIsAlwaysActive && !(this.props.isFromSearch || !this.props.hasExhaustiveItems),
                    a = this.props.searchFacetValues && Mn("div", {
                        className: this.props.cssClasses.searchBox
                    }, Mn(Ii, {
                        ref: function(e) {
                            return t.searchBox = e
                        },
                        placeholder: this.props.searchPlaceholder,
                        disabled: i,
                        cssClasses: this.props.cssClasses.searchable,
                        templates: this.props.templateProps.templates,
                        onChange: function(e) {
                            return t.props.searchFacetValues(e.target.value)
                        },
                        onReset: function() {
                            return t.props.searchFacetValues("")
                        },
                        onSubmit: function() {
                            return t.refineFirstValue()
                        },
                        searchAsYouType: !1
                    })),
                    s = this.props.facetValues && 0 < this.props.facetValues.length && Mn("ul", {
                        className: e
                    }, this.props.facetValues.map(this._generateFacetItem, this)),
                    o = this.props.searchFacetValues && this.props.isFromSearch && 0 === this.props.facetValues.length && Mn(ci, d({}, this.props.templateProps, {
                        templateKey: "searchableNoResults",
                        rootProps: {
                            className: this.props.cssClasses.noResults
                        }
                    }));
                return Mn("div", {
                    className: oi(this.props.cssClasses.root, M({}, this.props.cssClasses.noRefinementRoot, !this.props.facetValues || 0 === this.props.facetValues.length), this.props.className)
                }, this.props.children, a, s, o, r)
            }
        }]), u
    }();
    Fi.defaultProps = {
        cssClasses: {},
        depth: 0
    };
    var Ci = {
            item: '<a class="{{cssClasses.link}}" href="{{url}}"><span class="{{cssClasses.label}}">{{label}}</span><span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  "
        },
        Ti = et({
            name: "hierarchical-menu"
        }),
        Ei = vt("HierarchicalMenu");

    function ki(e) {
        var t = e.results,
            n = e.hits,
            r = e.bindEvent,
            i = e.cssClasses,
            a = e.templateProps;
        return 0 === t.hits.length ? Mn(ci, d({}, a, {
            templateKey: "empty",
            rootProps: {
                className: oi(i.root, i.emptyRoot)
            },
            data: t
        })) : Mn("div", {
            className: i.root
        }, Mn("ol", {
            className: i.list
        }, n.map(function(e, t) {
            return Mn(ci, d({}, a, {
                templateKey: "item",
                rootTagName: "li",
                rootProps: {
                    className: i.item
                },
                key: e.objectID,
                data: D(D({}, e), {}, {
                    __hitIndex: t
                }),
                bindEvent: r
            }))
        })))
    }
    ki.defaultProps = {
        results: {
            hits: []
        },
        hits: []
    };
    var Li = {
            empty: "No results",
            item: function(e) {
                return JSON.stringify(e, null, 2)
            }
        },
        Mi = et({
            name: "hits"
        }),
        ji = vt("Hits"),
        Oi = er(ki);

    function Hi(e) {
        var t = e.currentValue,
            n = e.options,
            r = e.cssClasses,
            i = e.setValue;
        return Mn("select", {
            className: oi(r.select),
            onChange: function(e) {
                return i(e.target.value)
            },
            value: "".concat(t)
        }, n.map(function(e) {
            return Mn("option", {
                className: oi(r.option),
                key: e.label + e.value,
                value: "".concat(e.value)
            }, e.label)
        }))
    }
    var Ai = et({
            name: "hits-per-page"
        }),
        Di = vt("HitsPerPage"),
        Wi = {
            empty: "No results",
            showPreviousText: "Show previous results",
            showMoreText: "Show more results",
            item: function(e) {
                return JSON.stringify(e, null, 2)
            }
        },
        Bi = et({
            name: "infinite-hits"
        }),
        Ui = vt("InfiniteHits"),
        Qi = er(function(e) {
            var t = e.results,
                n = e.hits,
                r = e.bindEvent,
                i = e.hasShowPrevious,
                a = e.showPrevious,
                s = e.showMore,
                o = e.isFirstPage,
                c = e.isLastPage,
                u = e.cssClasses,
                l = e.templateProps;
            return 0 === t.hits.length ? Mn(ci, d({}, l, {
                templateKey: "empty",
                rootProps: {
                    className: oi(u.root, u.emptyRoot)
                },
                data: t
            })) : Mn("div", {
                className: u.root
            }, i && Mn(ci, d({}, l, {
                templateKey: "showPreviousText",
                rootTagName: "button",
                rootProps: {
                    className: oi(u.loadPrevious, M({}, u.disabledLoadPrevious, o)),
                    disabled: o,
                    onClick: a
                }
            })), Mn("ol", {
                className: u.list
            }, n.map(function(e, t) {
                return Mn(ci, d({}, l, {
                    templateKey: "item",
                    rootTagName: "li",
                    rootProps: {
                        className: u.item
                    },
                    key: e.objectID,
                    data: D(D({}, e), {}, {
                        __hitIndex: t
                    }),
                    bindEvent: r
                }))
            })), Mn(ci, d({}, l, {
                templateKey: "showMoreText",
                rootTagName: "button",
                rootProps: {
                    className: oi(u.loadMore, M({}, u.disabledLoadMore, c)),
                    disabled: c,
                    onClick: s
                }
            })))
        }),
        qi = {
            item: '<a class="{{cssClasses.link}}" href="{{url}}"><span class="{{cssClasses.label}}">{{label}}</span><span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
            showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  "
        },
        $i = et({
            name: "menu"
        }),
        Vi = vt("Menu"),
        Ki = {
            reset: '\n<svg class="{{cssClasses.resetIcon}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">\n  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n</svg>\n  ',
            submit: '\n<svg class="{{cssClasses.submitIcon}}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">\n  <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n</svg>\n  ',
            loadingIndicator: '\n<svg class="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444">\n  <g fill="none" fillRule="evenodd">\n    <g transform="translate(1 1)" strokeWidth="2">\n      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n      <path d="M36 18c0-9.94-8.06-18-18-18">\n        <animateTransform\n          attributeName="transform"\n          type="rotate"\n          from="0 18 18"\n          to="360 18 18"\n          dur="1s"\n          repeatCount="indefinite"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  '
        },
        zi = {
            item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox"\n         class="{{cssClasses.checkbox}}"\n         value="{{value}}"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span class="{{cssClasses.labelText}}">{{#isFromSearch}}{{{highlighted}}}{{/isFromSearch}}{{^isFromSearch}}{{highlighted}}{{/isFromSearch}}</span>\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
            showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ",
            searchableNoResults: "No results",
            searchableReset: Ki.reset,
            searchableSubmit: Ki.submit,
            searchableLoadingIndicator: Ki.loadingIndicator
        },
        Ji = et({
            name: "refinement-list"
        }),
        Yi = vt("RefinementList"),
        Gi = vt("SearchBox");
    var Zi = {
            item: '<label class="{{cssClasses.label}}">\n  <input type="radio" class="{{cssClasses.radio}}" name="{{attribute}}"{{#isRefined}} checked{{/isRefined}} />\n  <span class="{{cssClasses.labelText}}">{{label}}</span>\n</label>'
        },
        Xi = et({
            name: "numeric-menu"
        }),
        ea = vt("NumericMenu");

    function ta(e) {
        var t = e.cssClasses,
            n = e.label,
            r = e.ariaLabel,
            i = e.url,
            a = e.isDisabled,
            s = e.handleClick,
            o = e.pageNumber;
        return Mn("li", {
            className: t.item
        }, a ? Mn("span", {
            className: t.link,
            dangerouslySetInnerHTML: {
                __html: n
            }
        }) : Mn("a", {
            className: t.link,
            "aria-label": r,
            href: i,
            onClick: function(e) {
                return s(o, e)
            },
            dangerouslySetInnerHTML: {
                __html: n
            }
        }))
    }
    var na = function() {
        j(a, Hn);
        var i = A(a);

        function a() {
            var n;
            k(this, a);
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return M(H(n = i.call.apply(i, [this].concat(t))), "handleClick", function(e, t) {
                de(t) || (t.preventDefault(), n.props.setCurrentPage(e))
            }), n
        }
        return L(a, [{
            key: "pageLink",
            value: function(e) {
                var t = e.label,
                    n = e.ariaLabel,
                    r = e.pageNumber,
                    i = e.additionalClassName,
                    a = void 0 === i ? null : i,
                    s = e.isDisabled,
                    o = void 0 !== s && s,
                    c = e.isSelected,
                    u = void 0 !== c && c,
                    l = e.createURL,
                    h = {
                        item: oi(this.props.cssClasses.item, a),
                        link: this.props.cssClasses.link
                    };
                o ? h.item = oi(h.item, this.props.cssClasses.disabledItem) : u && (h.item = oi(h.item, this.props.cssClasses.selectedItem));
                var d = l && !o ? l(r) : "#";
                return Mn(ta, {
                    ariaLabel: n,
                    cssClasses: h,
                    handleClick: this.handleClick,
                    isDisabled: o,
                    key: t + r + n,
                    label: t,
                    pageNumber: r,
                    url: d
                })
            }
        }, {
            key: "previousPageLink",
            value: function(e) {
                var t = e.isFirstPage,
                    n = e.currentPage,
                    r = e.createURL;
                return this.pageLink({
                    ariaLabel: "Previous",
                    additionalClassName: this.props.cssClasses.previousPageItem,
                    isDisabled: t,
                    label: this.props.templates.previous,
                    pageNumber: n - 1,
                    createURL: r
                })
            }
        }, {
            key: "nextPageLink",
            value: function(e) {
                var t = e.isLastPage,
                    n = e.currentPage,
                    r = e.createURL;
                return this.pageLink({
                    ariaLabel: "Next",
                    additionalClassName: this.props.cssClasses.nextPageItem,
                    isDisabled: t,
                    label: this.props.templates.next,
                    pageNumber: n + 1,
                    createURL: r
                })
            }
        }, {
            key: "firstPageLink",
            value: function(e) {
                var t = e.isFirstPage,
                    n = e.createURL;
                return this.pageLink({
                    ariaLabel: "First",
                    additionalClassName: this.props.cssClasses.firstPageItem,
                    isDisabled: t,
                    label: this.props.templates.first,
                    pageNumber: 0,
                    createURL: n
                })
            }
        }, {
            key: "lastPageLink",
            value: function(e) {
                var t = e.isLastPage,
                    n = e.nbPages,
                    r = e.createURL;
                return this.pageLink({
                    ariaLabel: "Last",
                    additionalClassName: this.props.cssClasses.lastPageItem,
                    isDisabled: t,
                    label: this.props.templates.last,
                    pageNumber: n - 1,
                    createURL: r
                })
            }
        }, {
            key: "pages",
            value: function(e) {
                var t = this,
                    n = e.currentPage,
                    r = e.pages,
                    i = e.createURL;
                return r.map(function(e) {
                    return t.pageLink({
                        ariaLabel: e + 1,
                        additionalClassName: t.props.cssClasses.pageItem,
                        isSelected: e === n,
                        label: e + 1,
                        pageNumber: e,
                        createURL: i
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                return Mn("div", {
                    className: oi(this.props.cssClasses.root, M({}, this.props.cssClasses.noRefinementRoot, this.props.nbPages <= 1))
                }, Mn("ul", {
                    className: this.props.cssClasses.list
                }, this.props.showFirst && this.firstPageLink(this.props), this.props.showPrevious && this.previousPageLink(this.props), this.pages(this.props), this.props.showNext && this.nextPageLink(this.props), this.props.showLast && this.lastPageLink(this.props)))
            }
        }]), a
    }();
    na.defaultProps = {
        nbHits: 0,
        currentPage: 0,
        nbPages: 0
    };
    var ra = et({
            name: "pagination"
        }),
        ia = vt("Pagination"),
        aa = {
            previous: "‹",
            next: "›",
            first: "«",
            last: "»"
        };
    var sa = function() {
            j(r, Hn);
            var t = A(r);

            function r(e) {
                var n;
                return k(this, r), M(H(n = t.call(this, e)), "onInput", function(t) {
                    return function(e) {
                        n.setState(M({}, t, e.currentTarget.value))
                    }
                }), M(H(n), "onSubmit", function(e) {
                    e.preventDefault(), n.props.refine([n.state.min && Number(n.state.min), n.state.max && Number(n.state.max)])
                }), n.state = {
                    min: e.values.min,
                    max: e.values.max
                }, n
            }
            return L(r, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.setState({
                        min: e.values.min,
                        max: e.values.max
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state,
                        t = e.min,
                        n = e.max,
                        r = this.props,
                        i = r.min,
                        a = r.max,
                        s = r.step,
                        o = r.cssClasses,
                        c = r.templateProps,
                        u = a <= i,
                        l = Boolean(t || n);
                    return Mn("div", {
                        className: oi(o.root, M({}, o.noRefinement, !l))
                    }, Mn("form", {
                        className: o.form,
                        onSubmit: this.onSubmit
                    }, Mn("label", {
                        className: o.label
                    }, Mn("input", {
                        className: oi(o.input, o.inputMin),
                        type: "number",
                        min: i,
                        max: a,
                        step: s,
                        value: null != t ? t : "",
                        onInput: this.onInput("min"),
                        placeholder: i,
                        disabled: u
                    })), Mn(ci, d({}, c, {
                        templateKey: "separatorText",
                        rootTagName: "span",
                        rootProps: {
                            className: o.separator
                        }
                    })), Mn("label", {
                        className: o.label
                    }, Mn("input", {
                        className: oi(o.input, o.inputMax),
                        type: "number",
                        min: i,
                        max: a,
                        step: s,
                        value: null != n ? n : "",
                        onInput: this.onInput("max"),
                        placeholder: a,
                        disabled: u
                    })), Mn(ci, d({}, c, {
                        templateKey: "submitText",
                        rootTagName: "button",
                        rootProps: {
                            type: "submit",
                            className: o.submit,
                            disabled: u
                        }
                    }))))
                }
            }]), r
        }(),
        oa = et({
            name: "range-input"
        }),
        ca = vt("RangeInput");
    var ua = et({
            name: "search-box"
        }),
        la = vt("SearchBox");
    var ha = 40,
        da = 35,
        fa = 27,
        ma = 36,
        pa = 37,
        ga = 34,
        va = 33,
        ya = 39,
        ba = 38,
        Sa = 100;

    function Ra(e, t, n) {
        return (e - t) / (n - t) * 100
    }

    function wa(e, t, n) {
        var r = e / 100;
        return 0 === e ? t : 100 === e ? n : Math.round((n - t) * r + t)
    }

    function Pa(e) {
        return ["rheostat", "vertical" === e.orientation ? "rheostat-vertical" : "rheostat-horizontal"].concat(e.className.split(" ")).join(" ")
    }

    function Na(e) {
        return Number(e.currentTarget.getAttribute("data-handle-key"))
    }

    function xa(e) {
        e.stopPropagation(), e.preventDefault()
    }
    var _a = function() {
            j(t, Hn);
            var e = A(t);

            function t() {
                return k(this, t), e.apply(this, arguments)
            }
            return L(t, [{
                key: "render",
                value: function() {
                    return Mn("button", d({}, this.props, {
                        type: "button"
                    }))
                }
            }]), t
        }(),
        Ia = Mn("div", {
            className: "rheostat-background"
        }),
        Fa = function() {
            j(r, Hn);
            var n = A(r);

            function r(e) {
                var t;
                return k(this, r), M(H(t = n.call(this, e)), "state", {
                    className: Pa(t.props),
                    handlePos: t.props.values.map(function(e) {
                        return Ra(e, t.props.min, t.props.max)
                    }),
                    handleDimensions: 0,
                    mousePos: null,
                    sliderBox: {},
                    slidingIndex: null,
                    values: t.props.values
                }), t.getPublicState = t.getPublicState.bind(H(t)), t.getSliderBoundingBox = t.getSliderBoundingBox.bind(H(t)), t.getProgressStyle = t.getProgressStyle.bind(H(t)), t.getMinValue = t.getMinValue.bind(H(t)), t.getMaxValue = t.getMaxValue.bind(H(t)), t.getHandleDimensions = t.getHandleDimensions.bind(H(t)), t.getClosestSnapPoint = t.getClosestSnapPoint.bind(H(t)), t.getSnapPosition = t.getSnapPosition.bind(H(t)), t.getNextPositionForKey = t.getNextPositionForKey.bind(H(t)), t.getNextState = t.getNextState.bind(H(t)), t.handleClick = t.handleClick.bind(H(t)), t.getClosestHandle = t.getClosestHandle.bind(H(t)), t.setStartSlide = t.setStartSlide.bind(H(t)), t.startMouseSlide = t.startMouseSlide.bind(H(t)), t.startTouchSlide = t.startTouchSlide.bind(H(t)), t.handleMouseSlide = t.handleMouseSlide.bind(H(t)), t.handleTouchSlide = t.handleTouchSlide.bind(H(t)), t.handleSlide = t.handleSlide.bind(H(t)), t.endSlide = t.endSlide.bind(H(t)), t.handleKeydown = t.handleKeydown.bind(H(t)), t.validatePosition = t.validatePosition.bind(H(t)), t.validateValues = t.validateValues.bind(H(t)), t.canMove = t.canMove.bind(H(t)), t.fireChangeEvent = t.fireChangeEvent.bind(H(t)), t.slideTo = t.slideTo.bind(H(t)), t.updateNewValues = t.updateNewValues.bind(H(t)), t
            }
            return L(r, [{
                key: "componentWillReceiveProps",
                value: function(n) {
                    var e = this.props,
                        t = e.className,
                        r = e.disabled,
                        i = e.min,
                        a = e.max,
                        s = e.orientation,
                        o = this.state,
                        c = o.values,
                        u = o.slidingIndex,
                        l = n.min !== i || n.max !== a,
                        h = c.length !== n.values.length || c.some(function(e, t) {
                            return n.values[t] !== e
                        }),
                        d = n.className !== t || n.orientation !== s,
                        f = n.disabled && !r;
                    d && this.setState({
                        className: Pa(n)
                    }), (l || h) && this.updateNewValues(n), f && null !== u && this.endSlide()
                }
            }, {
                key: "getPublicState",
                value: function() {
                    var e = this.props,
                        t = e.min;
                    return {
                        max: e.max,
                        min: t,
                        values: this.state.values
                    }
                }
            }, {
                key: "getSliderBoundingBox",
                value: function() {
                    var e = this.rheostat.getDOMNode ? this.rheostat.getDOMNode() : this.rheostat,
                        t = e.getBoundingClientRect();
                    return {
                        height: t.height || e.clientHeight,
                        left: t.left,
                        top: t.top,
                        width: t.width || e.clientWidth
                    }
                }
            }, {
                key: "getProgressStyle",
                value: function(e) {
                    var t = this.state.handlePos,
                        n = t[e];
                    if (0 === e) return "vertical" === this.props.orientation ? {
                        height: "".concat(n, "%"),
                        top: 0
                    } : {
                        left: 0,
                        width: "".concat(n, "%")
                    };
                    var r = t[e - 1],
                        i = n - r;
                    return "vertical" === this.props.orientation ? {
                        height: "".concat(i, "%"),
                        top: "".concat(r, "%")
                    } : {
                        left: "".concat(r, "%"),
                        width: "".concat(i, "%")
                    }
                }
            }, {
                key: "getMinValue",
                value: function(e) {
                    return this.state.values[e - 1] ? Math.max(this.props.min, this.state.values[e - 1]) : this.props.min
                }
            }, {
                key: "getMaxValue",
                value: function(e) {
                    return this.state.values[e + 1] ? Math.min(this.props.max, this.state.values[e + 1]) : this.props.max
                }
            }, {
                key: "getHandleDimensions",
                value: function(e, t) {
                    var n = e.currentTarget || null;
                    return n ? "vertical" === this.props.orientation ? n.clientHeight / t.height * Sa / 2 : n.clientWidth / t.width * Sa / 2 : 0
                }
            }, {
                key: "getClosestSnapPoint",
                value: function(n) {
                    return this.props.snapPoints.length ? this.props.snapPoints.reduce(function(e, t) {
                        return Math.abs(e - n) < Math.abs(t - n) ? e : t
                    }) : n
                }
            }, {
                key: "getSnapPosition",
                value: function(e) {
                    if (!this.props.snap) return e;
                    var t = this.props,
                        n = t.max,
                        r = t.min,
                        i = wa(e, r, n);
                    return Ra(this.getClosestSnapPoint(i), r, n)
                }
            }, {
                key: "getNextPositionForKey",
                value: function(e, t) {
                    var n, r = this.state,
                        i = r.handlePos,
                        a = r.values,
                        s = this.props,
                        o = s.max,
                        c = s.min,
                        u = s.snapPoints,
                        l = this.props.snap,
                        h = a[e],
                        d = i[e],
                        f = d,
                        m = 1;
                    100 <= o ? d = Math.round(d) : m = 100 / (o - c);
                    var p = null;
                    l && (p = u.indexOf(this.getClosestSnapPoint(a[e])));
                    var g = (M(n = {}, pa, function(e) {
                        return -1 * e
                    }), M(n, ya, function(e) {
                        return e
                    }), M(n, ba, function(e) {
                        return e
                    }), M(n, ha, function(e) {
                        return -1 * e
                    }), M(n, ga, function(e) {
                        return 1 < e ? -e : -10 * e
                    }), M(n, va, function(e) {
                        return 1 < e ? e : 10 * e
                    }), n);
                    if (Object.prototype.hasOwnProperty.call(g, t)) d += g[t](m), l && (f < d ? p < u.length - 1 && (h = u[p + 1]) : 0 < p && (h = u[p - 1]));
                    else if (t === ma) d = 0, l && (h = u[0]);
                    else {
                        if (t !== da) return null;
                        d = Sa, l && (h = u[u.length - 1])
                    }
                    return l ? Ra(h, c, o) : d
                }
            }, {
                key: "getNextState",
                value: function(n, e) {
                    var t = this.state.handlePos,
                        r = this.props,
                        i = r.max,
                        a = r.min,
                        s = this.validatePosition(n, e),
                        o = t.map(function(e, t) {
                            return t === n ? s : e
                        });
                    return {
                        handlePos: o,
                        values: o.map(function(e) {
                            return wa(e, a, i)
                        })
                    }
                }
            }, {
                key: "getClosestHandle",
                value: function(r) {
                    var i = this.state.handlePos;
                    return i.reduce(function(e, t, n) {
                        return Math.abs(i[n] - r) < Math.abs(i[e] - r) ? n : e
                    }, 0)
                }
            }, {
                key: "setStartSlide",
                value: function(e, t, n) {
                    var r = this.getSliderBoundingBox();
                    this.setState({
                        handleDimensions: this.getHandleDimensions(e, r),
                        mousePos: {
                            x: t,
                            y: n
                        },
                        sliderBox: r,
                        slidingIndex: Na(e)
                    })
                }
            }, {
                key: "startMouseSlide",
                value: function(e) {
                    this.setStartSlide(e, e.clientX, e.clientY), "function" == typeof document.addEventListener ? (document.addEventListener("mousemove", this.handleMouseSlide, !1), document.addEventListener("mouseup", this.endSlide, !1)) : (document.attachEvent("onmousemove", this.handleMouseSlide), document.attachEvent("onmouseup", this.endSlide)), xa(e)
                }
            }, {
                key: "startTouchSlide",
                value: function(e) {
                    if (!(1 < e.changedTouches.length)) {
                        var t = e.changedTouches[0];
                        this.setStartSlide(e, t.clientX, t.clientY), document.addEventListener("touchmove", this.handleTouchSlide, !1), document.addEventListener("touchend", this.endSlide, !1), this.props.onSliderDragStart && this.props.onSliderDragStart(), xa(e)
                    }
                }
            }, {
                key: "handleMouseSlide",
                value: function(e) {
                    null !== this.state.slidingIndex && (this.handleSlide(e.clientX, e.clientY), xa(e))
                }
            }, {
                key: "handleTouchSlide",
                value: function(e) {
                    if (null !== this.state.slidingIndex)
                        if (1 < e.changedTouches.length) this.endSlide();
                        else {
                            var t = e.changedTouches[0];
                            this.handleSlide(t.clientX, t.clientY), xa(e)
                        }
                }
            }, {
                key: "handleSlide",
                value: function(e, t) {
                    var n = this.state,
                        r = n.slidingIndex,
                        i = n.sliderBox,
                        a = "vertical" === this.props.orientation ? (t - i.top) / i.height * Sa : (e - i.left) / i.width * Sa;
                    this.slideTo(r, a), this.canMove(r, a) && (this.setState({
                        x: e,
                        y: t
                    }), this.props.onSliderDragMove && this.props.onSliderDragMove())
                }
            }, {
                key: "endSlide",
                value: function() {
                    var e = this,
                        t = this.state.slidingIndex;
                    if (this.setState({
                            slidingIndex: null
                        }), "function" == typeof document.removeEventListener ? (document.removeEventListener("mouseup", this.endSlide, !1), document.removeEventListener("touchend", this.endSlide, !1), document.removeEventListener("touchmove", this.handleTouchSlide, !1), document.removeEventListener("mousemove", this.handleMouseSlide, !1)) : (document.detachEvent("onmousemove", this.handleMouseSlide), document.detachEvent("onmouseup", this.endSlide)), this.props.onSliderDragEnd && this.props.onSliderDragEnd(), this.props.snap) {
                        var n = this.getSnapPosition(this.state.handlePos[t]);
                        this.slideTo(t, n, function() {
                            return e.fireChangeEvent()
                        })
                    } else this.fireChangeEvent()
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    var t = this;
                    if (!e.target.getAttribute("data-handle-key")) {
                        var n = this.getSliderBoundingBox(),
                            r = ("vertical" === this.props.orientation ? (e.clientY - n.top) / n.height : (e.clientX - n.left) / n.width) * Sa,
                            i = this.getClosestHandle(r),
                            a = this.getSnapPosition(r);
                        this.slideTo(i, a, function() {
                            return t.fireChangeEvent()
                        }), this.props.onClick && this.props.onClick()
                    }
                }
            }, {
                key: "handleKeydown",
                value: function(e) {
                    var t = this,
                        n = Na(e);
                    if (e.keyCode !== fa) {
                        var r = this.getNextPositionForKey(n, e.keyCode);
                        null !== r && (this.canMove(n, r) && (this.slideTo(n, r, function() {
                            return t.fireChangeEvent()
                        }), this.props.onKeyPress && this.props.onKeyPress()), xa(e))
                    } else e.currentTarget.blur()
                }
            }, {
                key: "validatePosition",
                value: function(e, t) {
                    var n = this.state,
                        r = n.handlePos,
                        i = n.handleDimensions;
                    return Math.max(Math.min(t, void 0 !== r[e + 1] ? r[e + 1] - i : Sa), void 0 !== r[e - 1] ? r[e - 1] + i : 0)
                }
            }, {
                key: "validateValues",
                value: function(e, t) {
                    var n = t || this.props,
                        i = n.max,
                        a = n.min;
                    return e.map(function(e, t, n) {
                        var r = Math.max(Math.min(e, i), a);
                        return n.length && r < n[t - 1] ? n[t - 1] : r
                    })
                }
            }, {
                key: "canMove",
                value: function(e, t) {
                    var n = this.state,
                        r = n.handlePos,
                        i = n.handleDimensions;
                    return !(t < 0) && (!(Sa < t) && (!((void 0 !== r[e + 1] ? r[e + 1] - i : 1 / 0) < t) && !(t < (void 0 !== r[e - 1] ? r[e - 1] + i : -1 / 0))))
                }
            }, {
                key: "fireChangeEvent",
                value: function() {
                    var e = this.props.onChange;
                    e && e(this.getPublicState())
                }
            }, {
                key: "slideTo",
                value: function(e, t, n) {
                    var r = this,
                        i = this.getNextState(e, t);
                    this.setState(i, function() {
                        var e = r.props.onValuesUpdated;
                        e && e(r.getPublicState()), n && n()
                    })
                }
            }, {
                key: "updateNewValues",
                value: function(e) {
                    var t = this;
                    if (null === this.state.slidingIndex) {
                        var n = e.max,
                            r = e.min,
                            i = e.values,
                            a = this.validateValues(i, e);
                        this.setState({
                            handlePos: a.map(function(e) {
                                return Ra(e, r, n)
                            }),
                            values: a
                        }, function() {
                            return t.fireChangeEvent()
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var r = this,
                        e = this.props,
                        t = e.children,
                        i = e.disabled,
                        a = e.handle,
                        s = e.max,
                        o = e.min,
                        c = e.orientation,
                        u = e.pitComponent,
                        n = e.pitPoints,
                        l = e.progressBar,
                        h = this.state,
                        d = h.className,
                        f = h.handlePos,
                        m = h.values;
                    return Mn("div", {
                        className: d,
                        ref: function(e) {
                            r.rheostat = e
                        },
                        onClick: !i && this.handleClick,
                        style: {
                            position: "relative"
                        }
                    }, Ia, f.map(function(e, t) {
                        var n = "vertical" === c ? {
                            top: "".concat(e, "%"),
                            position: "absolute"
                        } : {
                            left: "".concat(e, "%"),
                            position: "absolute"
                        };
                        return Mn(a, {
                            "aria-valuemax": r.getMaxValue(t),
                            "aria-valuemin": r.getMinValue(t),
                            "aria-valuenow": m[t],
                            "aria-disabled": i,
                            "data-handle-key": t,
                            className: "rheostat-handle",
                            key: "handle-".concat(t),
                            onClick: r.killEvent,
                            onKeyDown: !i && r.handleKeydown,
                            onMouseDown: !i && r.startMouseSlide,
                            onTouchStart: !i && r.startTouchSlide,
                            role: "slider",
                            style: n,
                            tabIndex: 0
                        })
                    }), f.map(function(e, t, n) {
                        return 0 === t && 1 < n.length ? null : Mn(l, {
                            className: "rheostat-progress",
                            key: "progress-bar-".concat(t),
                            style: r.getProgressStyle(t)
                        })
                    }), u && n.map(function(e) {
                        var t = Ra(e, o, s),
                            n = "vertical" === c ? {
                                top: "".concat(t, "%"),
                                position: "absolute"
                            } : {
                                left: "".concat(t, "%"),
                                position: "absolute"
                            };
                        return Mn(u, {
                            key: "pit-".concat(e),
                            style: n
                        }, e)
                    }), t)
                }
            }]), r
        }();
    M(Fa, "defaultProps", {
        className: "",
        children: null,
        disabled: !1,
        handle: _a,
        max: Sa,
        min: 0,
        onClick: null,
        onChange: null,
        onKeyPress: null,
        onSliderDragEnd: null,
        onSliderDragMove: null,
        onSliderDragStart: null,
        onValuesUpdated: null,
        orientation: "horizontal",
        pitComponent: null,
        pitPoints: [],
        progressBar: "div",
        snap: !1,
        snapPoints: [],
        values: [0]
    });

    function Ca(e) {
        var t = e.style,
            n = e.children,
            r = Math.round(parseFloat(t.left)),
            i = [0, 50, 100].includes(r),
            a = Array.isArray(n) ? n[0] : n,
            s = Math.round(100 * parseInt(a, 10)) / 100;
        return Mn("div", {
            style: D(D({}, t), {}, {
                marginLeft: 100 === r ? "-2px" : 0
            }),
            className: oi("rheostat-marker", "rheostat-marker-horizontal", {
                "rheostat-marker-large": i
            })
        }, i && Mn("div", {
            className: "rheostat-value"
        }, s))
    }
    var Ta = function() {
            j(a, Hn);
            var i = A(a);

            function a() {
                var n;
                k(this, a);
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return M(H(n = i.call.apply(i, [this].concat(t))), "handleChange", function(e) {
                    var t = e.values;
                    n.isDisabled || n.props.refine(t)
                }), M(H(n), "createHandleComponent", function(r) {
                    return function(e) {
                        var t = Math.round(100 * parseFloat(e["aria-valuenow"])) / 100,
                            n = r && r.format ? r.format(t) : t;
                        return Mn("div", d({}, e, {
                            className: oi(e.className, {
                                "rheostat-handle-lower": 0 === e["data-handle-key"],
                                "rheostat-handle-upper": 1 === e["data-handle-key"]
                            })
                        }), r && Mn("div", {
                            className: "rheostat-tooltip"
                        }, n))
                    }
                }), n
            }
            return L(a, [{
                key: "isDisabled",
                get: function() {
                    return this.props.min >= this.props.max
                }
            }, {
                key: "computeDefaultPitPoints",
                value: function(e) {
                    var t = e.min,
                        n = e.max,
                        r = (n - t) / 34;
                    return [t].concat(P(Ee({
                        end: 33
                    }).map(function(e) {
                        return t + r * (e + 1)
                    })), [n])
                }
            }, {
                key: "computeSnapPoints",
                value: function(e) {
                    var t = e.min,
                        n = e.max,
                        r = e.step;
                    if (r) return [].concat(P(Ee({
                        start: t,
                        end: n,
                        step: r
                    })), [n])
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.tooltips,
                        n = e.step,
                        r = e.pips,
                        i = e.values,
                        a = e.cssClasses,
                        s = this.isDisabled ? {
                            min: this.props.min,
                            max: this.props.max + .001
                        } : this.props,
                        o = s.min,
                        c = s.max,
                        u = this.computeSnapPoints({
                            min: o,
                            max: c,
                            step: n
                        }),
                        l = !1 === r ? [] : this.computeDefaultPitPoints({
                            min: o,
                            max: c
                        });
                    return Mn("div", {
                        className: oi(a.root, M({}, a.disabledRoot, this.isDisabled))
                    }, Mn(Fa, {
                        handle: this.createHandleComponent(t),
                        onChange: this.handleChange,
                        min: o,
                        max: c,
                        pitComponent: Ca,
                        pitPoints: l,
                        snap: !0,
                        snapPoints: u,
                        values: this.isDisabled ? [o, c] : i,
                        disabled: this.isDisabled
                    }))
                }
            }]), a
        }(),
        Ea = et({
            name: "range-slider"
        }),
        ka = vt("RangeSlider");
    var La = et({
            name: "sort-by"
        }),
        Ma = vt("SortBy");
    var ja = {
            item: '{{#count}}<a class="{{cssClasses.link}}" aria-label="{{value}} & up" href="{{href}}">{{/count}}{{^count}}<div class="{{cssClasses.link}}" aria-label="{{value}} & up" disabled>{{/count}}\n  {{#stars}}<svg class="{{cssClasses.starIcon}} {{#.}}{{cssClasses.fullStarIcon}}{{/.}}{{^.}}{{cssClasses.emptyStarIcon}}{{/.}}" aria-hidden="true" width="24" height="24">\n    {{#.}}<use xlink:href="#ais-RatingMenu-starSymbol"></use>{{/.}}{{^.}}<use xlink:href="#ais-RatingMenu-starEmptySymbol"></use>{{/.}}\n  </svg>{{/stars}}\n  <span class="{{cssClasses.label}}">& Up</span>\n  {{#count}}<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n{{#count}}</a>{{/count}}{{^count}}</div>{{/count}}'
        },
        Oa = et({
            name: "rating-menu"
        }),
        Ha = vt("RatingMenu"),
        Aa = Mn("path", {
            d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
        }),
        Da = Mn("path", {
            d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
        });

    function Wa(e) {
        var t = e.nbHits,
            n = e.nbSortedHits,
            r = e.areHitsSorted,
            i = e.hitsPerPage,
            a = e.nbPages,
            s = e.page,
            o = e.processingTimeMS,
            c = e.query,
            u = e.templateProps,
            l = e.cssClasses;
        return Mn("div", {
            className: l.root
        }, Mn(ci, d({}, u, {
            templateKey: "text",
            rootTagName: "span",
            rootProps: {
                className: l.text
            },
            data: {
                hasManySortedResults: 1 < n,
                hasNoSortedResults: 0 === n,
                hasOneSortedResults: 1 === n,
                hasManyResults: 1 < t,
                hasNoResults: 0 === t,
                hasOneResult: 1 === t,
                areHitsSorted: r,
                hitsPerPage: i,
                nbHits: t,
                nbSortedHits: n,
                nbPages: a,
                page: s,
                processingTimeMS: o,
                query: c,
                cssClasses: l
            }
        })))
    }
    var Ba = {
            text: "\n    {{#areHitsSorted}}\n      {{#hasNoSortedResults}}No relevant results{{/hasNoSortedResults}}\n      {{#hasOneSortedResults}}1 relevant result{{/hasOneSortedResults}}\n      {{#hasManySortedResults}}{{#helpers.formatNumber}}{{nbSortedHits}}{{/helpers.formatNumber}} relevant results{{/hasManySortedResults}}\n      sorted out of {{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}}\n    {{/areHitsSorted}}\n    {{^areHitsSorted}}\n      {{#hasNoResults}}No results{{/hasNoResults}}\n      {{#hasOneResult}}1 result{{/hasOneResult}}\n      {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}\n    {{/areHitsSorted}}\n    found in {{processingTimeMS}}ms"
        },
        Ua = et({
            name: "stats"
        }),
        Qa = vt("Stats");

    function qa(e) {
        var t = e.currentRefinement,
            n = e.refine,
            r = e.cssClasses,
            i = e.templateProps;
        return Mn("div", {
            className: r.root
        }, Mn("label", {
            className: r.label
        }, Mn("input", {
            className: r.checkbox,
            type: "checkbox",
            checked: t.isRefined,
            onChange: function(e) {
                return n(!e.target.checked)
            }
        }), Mn(ci, d({}, i, {
            rootTagName: "span",
            rootProps: {
                className: r.labelText
            },
            templateKey: "labelText",
            data: t
        }))))
    }
    var $a = {
            labelText: "{{name}}"
        },
        Va = et({
            name: "toggle-refinement"
        }),
        Ka = vt("ToggleRefinement");

    function za(e) {
        var r = e.items,
            i = e.cssClasses,
            a = e.templateProps,
            s = e.createURL,
            o = e.refine;
        return Mn("div", {
            className: oi(i.root, M({}, i.noRefinementRoot, 0 === r.length))
        }, Mn("ul", {
            className: i.list
        }, Mn("li", {
            className: oi(i.item, M({}, i.selectedItem, 0 === r.length))
        }, Mn(ci, d({}, a, {
            templateKey: "home",
            rootTagName: "a",
            rootProps: {
                className: i.link,
                href: s(void 0),
                onClick: function(e) {
                    e.preventDefault(), o(void 0)
                }
            }
        }))), r.map(function(t, e) {
            var n = e === r.length - 1;
            return Mn("li", {
                key: t.label + e,
                className: oi(i.item, M({}, i.selectedItem, n))
            }, Mn(ci, d({}, a, {
                templateKey: "separator",
                rootTagName: "span",
                rootProps: {
                    className: i.separator,
                    "aria-hidden": !0
                }
            })), n ? t.label : Mn("a", {
                className: i.link,
                href: s(t.value),
                onClick: function(e) {
                    e.preventDefault(), o(t.value)
                }
            }, t.label))
        })))
    }
    var Ja = et({
            name: "analytics"
        }),
        Ya = {
            home: "Home",
            separator: ">"
        },
        Ga = et({
            name: "breadcrumb"
        }),
        Za = vt("Breadcrumb");

    function Xa(e) {
        var t = e.cssClasses,
            n = e.templateProps,
            r = e.items,
            i = e.refine,
            a = (Se(r, function(e) {
                return e.isRefined
            }) || {
                value: ""
            }).value;
        return Mn("div", {
            className: oi(t.root, M({}, t.noRefinementRoot, 0 === r.length))
        }, Mn("select", {
            className: t.select,
            value: a,
            onChange: function(e) {
                i(e.target.value)
            }
        }, Mn(ci, d({}, n, {
            templateKey: "defaultOption",
            rootTagName: "option",
            rootProps: {
                value: "",
                className: t.option
            }
        })), r.map(function(e) {
            return Mn(ci, d({}, n, {
                templateKey: "item",
                rootTagName: "option",
                rootProps: {
                    value: e.value,
                    className: t.option
                },
                key: e.value,
                data: e
            }))
        })))
    }

    function es(e) {
        var t = e.url,
            n = e.theme,
            r = e.cssClasses;
        return Mn("div", {
            className: r.root
        }, Mn("a", {
            href: t,
            target: "_blank",
            className: r.link,
            "aria-label": "Search by Algolia",
            rel: "noopener noreferrer"
        }, Mn("svg", {
            height: "1.2em",
            className: r.logo,
            viewBox: "0 0 168 24",
            style: {
                width: "auto"
            }
        }, Mn("path", {
            fill: "dark" === n ? "#FFF" : "#5D6494",
            d: "M6.97 6.68V8.3a4.47 4.47 0 00-2.42-.67 2.2 2.2 0 00-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 011.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 01-2.6.81 5.71 5.71 0 01-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 00-.65-.53 23.03 23.03 0 00-1.64-.78 13.67 13.67 0 01-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 01-.39-.5 4.46 4.46 0 01-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 012.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 00-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58a2.9 2.9 0 00-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 01-3-1.13 4.04 4.04 0 01-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 012.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 012.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 00-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 00.76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 01-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 013.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 00-1.77-.5A2.65 2.65 0 0032.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 012.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z"
        }), is, as, Mn("path", {
            fill: "dark" === n ? "#FFF" : "#5468FF",
            d: "M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 00-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 00-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87a21.69 21.69 0 01-4.68.5c-.69 0-1.32-.07-1.9-.2a4 4 0 01-1.46-.63 3.3 3.3 0 01-.96-1.13 4.3 4.3 0 01-.34-1.8 3.13 3.13 0 011.43-2.63c.45-.3.95-.5 1.54-.62a8.8 8.8 0 013.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 00-1.1-1.22 3.2 3.2 0 00-1.15-.2 9.75 9.75 0 00-2.95.46l-.33-2.19a11.43 11.43 0 013.56-.53zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 00-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 00-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 01-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 01-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 013.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 00-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 00-2.95.47l-.32-2.19a11.63 11.63 0 013.55-.53zm-8.03-1.27a1.62 1.62 0 000-3.24 1.62 1.62 0 100 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 00-.74-2.79 2.4 2.4 0 00-2.07-1 2.4 2.4 0 00-2.06 1 4.7 4.7 0 00-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 002.07 1.02c.88 0 1.57-.34 2.07-1.02a4.2 4.2 0 00.73-2.63zm2.74 0a6.46 6.46 0 01-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45a6.6 6.6 0 01-2.25-.45 5.1 5.1 0 01-2.88-3.13 7.3 7.3 0 01-.01-4.84 5.13 5.13 0 012.9-3.1 5.67 5.67 0 012.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 01.43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 002.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 00-2.23 1 4.73 4.73 0 00-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 01-2.54.6 5.6 5.6 0 01-2.01-.36 4.2 4.2 0 01-2.58-2.71 9.88 9.88 0 01.02-5.35 4.92 4.92 0 012.93-2.96 6.6 6.6 0 012.43-.46 19.64 19.64 0 014.43.66v10.6z"
        }))))
    }
    var ts = {
            item: "{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})",
            defaultOption: "See all"
        },
        ns = et({
            name: "menu-select"
        }),
        rs = vt("MenuSelect"),
        is = Mn("path", {
            fill: "#5468FF",
            d: "M78.99.94h16.6a2.97 2.97 0 012.96 2.96v16.6a2.97 2.97 0 01-2.97 2.96h-16.6a2.97 2.97 0 01-2.96-2.96V3.9A2.96 2.96 0 0179 .94"
        }),
        as = Mn("path", {
            fill: "#FFF",
            d: "M89.63 5.97v-.78a.98.98 0 00-.98-.97h-2.28a.98.98 0 00-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 013.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 00-1.38 0l-.46.46a.97.97 0 000 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 011.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 00-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 110-8.98 4.49 4.49 0 010 8.98m0-10.85a6.37 6.37 0 100 12.74 6.37 6.37 0 000-12.74"
        }),
        ss = vt("PoweredBy"),
        os = et({
            name: "powered-by"
        });
    var cs, us, ls = [],
        hs = Nn.__r;
    Nn.__r = function(e) {
        hs && hs(e), cs = 0, (us = e.__c).__H && (us.__H.t = Ss(us.__H.t))
    };
    var ds = Nn.diffed;
    Nn.diffed = function(e) {
        ds && ds(e);
        var t = e.__c;
        if (t) {
            var n = t.__H;
            n && (n.u = (n.u.some(function(e) {
                e.ref && (e.ref.current = e.createHandle())
            }), []), n.i = Ss(n.i))
        }
    };
    var fs = Nn.unmount;

    function ms(e) {
        Nn.__h && Nn.__h(us);
        var t = us.__H || (us.__H = {
            o: [],
            t: [],
            i: [],
            u: []
        });
        return e >= t.o.length && t.o.push({}), t.o[e]
    }

    function ps(e) {
        return function(n, e, t) {
            var r = ms(cs++);
            return r.__c || (r.__c = us, r.v = [t ? t(e) : Ns(void 0, e), function(e) {
                var t = n(r.v[0], e);
                r.v[0] !== t && (r.v[0] = t, r.__c.setState({}))
            }]), r.v
        }(Ns, e)
    }

    function gs(e) {
        return function(e, t) {
            var n = ms(cs++);
            return Ps(n.m, t) ? (n.m = t, n.p = e, n.v = e()) : n.v
        }(function() {
            return {
                current: e
            }
        }, [])
    }
    Nn.unmount = function(e) {
        fs && fs(e);
        var t = e.__c;
        if (t) {
            var n = t.__H;
            n && n.o.forEach(function(e) {
                return e.l && e.l()
            })
        }
    };
    var vs = function() {};

    function ys() {
        ls.some(function(e) {
            e.s = !1, e.__P && (e.__H.t = Ss(e.__H.t))
        }), ls = []
    }
    if ("undefined" != typeof window) {
        var bs = Nn.requestAnimationFrame;
        vs = function(e) {
            (!e.s && (e.s = !0) && 1 === ls.push(e) || bs !== Nn.requestAnimationFrame) && (bs = Nn.requestAnimationFrame, (Nn.requestAnimationFrame || function(e) {
                function t() {
                    clearTimeout(n), cancelAnimationFrame(r), setTimeout(e)
                }
                var n = setTimeout(t, 100),
                    r = requestAnimationFrame(t)
            })(ys))
        }
    }

    function Ss(e) {
        return e.forEach(Rs), e.forEach(ws), []
    }

    function Rs(e) {
        e.l && e.l()
    }

    function ws(e) {
        var t = e.v();
        "function" == typeof t && (e.l = t)
    }

    function Ps(n, e) {
        return !n || e.some(function(e, t) {
            return e !== n[t]
        })
    }

    function Ns(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function xs(e) {
        var t, n = W(ps(e.isCollapsed), 2),
            r = n[0],
            i = n[1],
            a = W(ps(!1), 2),
            s = a[0],
            o = a[1],
            c = gs(null);
        return function(e, t) {
            var n = ms(cs++);
            Ps(n.m, t) && (n.v = e, n.m = t, us.__H.t.push(n), vs(us))
        }(function() {
            if (c.current) return c.current.appendChild(e.bodyElement),
                function() {
                    c.current.removeChild(e.bodyElement)
                }
        }, [c, e.bodyElement]), s || e.isCollapsed === r || i(e.isCollapsed), Mn("div", {
            className: oi(e.cssClasses.root, (t = {}, M(t, e.cssClasses.noRefinementRoot, e.hidden), M(t, e.cssClasses.collapsibleRoot, e.collapsible), M(t, e.cssClasses.collapsedRoot, r), t)),
            hidden: e.hidden
        }, e.templates.header && Mn("div", {
            className: e.cssClasses.header
        }, Mn(ci, {
            templates: e.templates,
            templateKey: "header",
            rootTagName: "span",
            data: e.data
        }), e.collapsible && Mn("button", {
            className: e.cssClasses.collapseButton,
            "aria-expanded": !r,
            onClick: function(e) {
                e.preventDefault(), o(!0), i(function(e) {
                    return !e
                })
            }
        }, Mn(ci, {
            templates: e.templates,
            templateKey: "collapseButtonText",
            rootTagName: "span",
            data: {
                collapsed: r
            }
        }))), Mn("div", {
            className: e.cssClasses.body,
            ref: c
        }), e.templates.footer && Mn(ci, {
            templates: e.templates,
            templateKey: "footer",
            rootProps: {
                className: e.cssClasses.footer
            },
            data: e.data
        }))
    }

    function _s(e) {
        var t = e.cssClasses,
            n = e.isBrowserSupported,
            r = e.isListening,
            i = e.toggleListening,
            a = e.voiceListeningState,
            s = e.templates,
            o = a.status,
            c = a.transcript,
            u = a.isSpeechFinal,
            l = a.errorCode;
        return Mn("div", {
            className: t.root
        }, Mn(ci, {
            templateKey: "buttonText",
            rootTagName: "button",
            rootProps: {
                className: t.button,
                type: "button",
                title: "Search by voice".concat(n ? "" : " (not supported on this browser)"),
                onClick: function(e) {
                    e.currentTarget.blur(), i()
                },
                disabled: !n
            },
            data: {
                status: o,
                errorCode: l,
                isListening: r,
                transcript: c,
                isSpeechFinal: u,
                isBrowserSupported: n
            },
            templates: s
        }), Mn(ci, {
            templateKey: "status",
            rootProps: {
                className: t.status
            },
            data: {
                status: o,
                errorCode: l,
                isListening: r,
                transcript: c,
                isSpeechFinal: u,
                isBrowserSupported: n
            },
            templates: s
        }))
    }

    function Is(e) {
        var t = e.isBrowserSupported,
            n = e.isListening,
            r = e.toggleListening,
            i = e.voiceListeningState,
            a = e.widgetParams,
            s = a.container,
            o = a.cssClasses,
            c = a.templates;
        Zn(Mn(_s, {
            cssClasses: o,
            templates: c,
            isBrowserSupported: t,
            isListening: n,
            toggleListening: r,
            voiceListeningState: i
        }), s)
    }

    function Fs(e) {
        var t = e.cssClasses,
            n = e.templates,
            r = e.items;
        return Mn(ci, {
            templateKey: "default",
            templates: n,
            rootProps: {
                className: t.root
            },
            data: {
                items: r
            }
        })
    }

    function Cs(e) {
        var t = e.items,
            n = e.widgetParams,
            r = n.container,
            i = n.cssClasses,
            a = n.templates;
        Zn(Mn(Fs, {
            cssClasses: i,
            templates: a,
            items: t
        }), r)
    }
    var Ts = et({
            name: "panel"
        }),
        Es = vt("Panel"),
        ks = {
            buttonText: function(e) {
                var t = e.status,
                    n = e.errorCode,
                    r = e.isListening;
                return '<svg\n       xmlns="http://www.w3.org/2000/svg"\n       width="16"\n       height="16"\n       viewBox="0 0 24 24"\n       fill="none"\n       stroke="currentColor"\n       stroke-width="2"\n       stroke-linecap="round"\n       stroke-linejoin="round"\n     >\n       '.concat(function(e, t, n) {
                    return "error" === e && "not-allowed" === t ? '<line x1="1" y1="1" x2="23" y2="23"></line>\n            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>\n            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>\n            <line x1="12" y1="19" x2="12" y2="23"></line>\n            <line x1="8" y1="23" x2="16" y2="23"></line>' : '<path\n            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"\n            fill="'.concat(n ? "currentColor" : "none", '">\n          </path>\n          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>\n          <line x1="12" y1="19" x2="12" y2="23"></line>\n          <line x1="8" y1="23" x2="16" y2="23"></line>')
                }(t, n, r), "\n     </svg>")
            },
            status: "<p>{{transcript}}</p>"
        },
        Ls = et({
            name: "voice-search"
        }),
        Ms = vt("VoiceSearch"),
        js = et({
            name: "query-rule-custom-data"
        }),
        Os = vt("QueryRuleCustomData"),
        Hs = et({
            name: "query-rule-context"
        }),
        As = Object.freeze({
            __proto__: null,
            clearRefinements: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.templates,
                    i = void 0 === r ? fi : r,
                    a = t.includedAttributes,
                    s = t.excludedAttributes,
                    o = t.transformItems,
                    c = t.cssClasses,
                    u = void 0 === c ? {} : c;
                if (!n) throw new Error(mi("The `container` option is required."));
                var l = he(n),
                    h = {
                        root: oi(pi(), u.root),
                        button: oi(pi({
                            descendantName: "button"
                        }), u.button),
                        disabledButton: oi(pi({
                            descendantName: "button",
                            modifierName: "disabled"
                        }), u.disabledButton)
                    },
                    d = function(e) {
                        var a = e.containerNode,
                            s = e.cssClasses,
                            o = e.renderState,
                            c = e.templates;
                        return function(e, t) {
                            var n = e.refine,
                                r = e.hasRefinements,
                                i = e.instantSearchInstance;
                            t ? o.templateProps = me({
                                defaultTemplates: fi,
                                templatesConfig: i.templatesConfig,
                                templates: c
                            }) : Zn(Mn(ui, {
                                refine: n,
                                cssClasses: s,
                                hasRefinements: r,
                                templateProps: o.templateProps
                            }), a)
                        }
                    }({
                        containerNode: l,
                        cssClasses: h,
                        renderState: {},
                        templates: i
                    });
                return D(D({}, un(d, function() {
                    return Zn(null, l)
                })({
                    includedAttributes: a,
                    excludedAttributes: s,
                    transformItems: o
                })), {}, {
                    $$widgetType: "ais.clearRefinements"
                })
            },
            configure: function(e) {
                return D(D({}, Jr(Ie)({
                    searchParameters: e
                })), {}, {
                    $$widgetType: "ais.configure"
                })
            },
            EXPERIMENTAL_configureRelatedItems: function(e) {
                return D(D({}, Zr(Ie)(e)), {}, {
                    $$widgetType: "ais.configureRelatedItems"
                })
            },
            currentRefinements: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.includedAttributes,
                    i = t.excludedAttributes,
                    a = t.cssClasses,
                    s = void 0 === a ? {} : a,
                    o = t.transformItems;
                if (!n) throw new Error(gi("The `container` option is required."));
                var c = he(n),
                    u = {
                        root: oi(vi(), s.root),
                        list: oi(vi({
                            descendantName: "list"
                        }), s.list),
                        item: oi(vi({
                            descendantName: "item"
                        }), s.item),
                        label: oi(vi({
                            descendantName: "label"
                        }), s.label),
                        category: oi(vi({
                            descendantName: "category"
                        }), s.category),
                        categoryLabel: oi(vi({
                            descendantName: "categoryLabel"
                        }), s.categoryLabel),
                        delete: oi(vi({
                            descendantName: "delete"
                        }), s.delete)
                    };
                return D(D({}, dn(hi, function() {
                    return Zn(null, c)
                })({
                    container: c,
                    cssClasses: u,
                    includedAttributes: r,
                    excludedAttributes: i,
                    transformItems: o
                })), {}, {
                    $$widgetType: "ais.currentRefinements"
                })
            },
            geoSearch: function(e) {
                var t = e || {},
                    n = t.initialZoom,
                    r = void 0 === n ? 1 : n,
                    i = t.initialPosition,
                    a = void 0 === i ? {
                        lat: 0,
                        lng: 0
                    } : i,
                    s = t.templates,
                    o = void 0 === s ? {} : s,
                    c = t.cssClasses,
                    u = void 0 === c ? {} : c,
                    l = t.builtInMarker,
                    h = void 0 === l ? {} : l,
                    d = t.customHTMLMarker,
                    f = t.enableRefine,
                    m = void 0 === f || f,
                    p = t.enableClearMapRefinement,
                    g = void 0 === p || p,
                    v = t.enableRefineControl,
                    y = void 0 === v || v,
                    b = t.container,
                    S = t.googleReference,
                    R = O(t, ["initialZoom", "initialPosition", "templates", "cssClasses", "builtInMarker", "customHTMLMarker", "enableRefine", "enableClearMapRefinement", "enableRefineControl", "container", "googleReference"]),
                    w = {
                        createOptions: Ie,
                        events: {}
                    },
                    P = {
                        createOptions: Ie,
                        events: {}
                    };
                if (!b) throw new Error(Ni("The `container` option is required."));
                if (!S) throw new Error(Ni("The `googleReference` option is required."));
                var N = he(b),
                    x = {
                        root: oi(xi(), u.root),
                        tree: xi({
                            descendantName: "tree"
                        }),
                        map: oi(xi({
                            descendantName: "map"
                        }), u.map),
                        control: oi(xi({
                            descendantName: "control"
                        }), u.control),
                        label: oi(xi({
                            descendantName: "label"
                        }), u.label),
                        selectedLabel: oi(xi({
                            descendantName: "label",
                            modifierName: "selected"
                        }), u.selectedLabel),
                        input: oi(xi({
                            descendantName: "input"
                        }), u.input),
                        redo: oi(xi({
                            descendantName: "redo"
                        }), u.redo),
                        disabledRedo: oi(xi({
                            descendantName: "redo",
                            modifierName: "disabled"
                        }), u.disabledRedo),
                        reset: oi(xi({
                            descendantName: "reset"
                        }), u.reset)
                    },
                    _ = D(D({}, Pi), o),
                    I = D(D({}, w), h),
                    F = (Boolean(d) || Boolean(o.HTMLMarker)) && D(D({}, P), d),
                    C = function(h) {
                        return function() {
                            j(l, h.maps.OverlayView);
                            var u = A(l);

                            function l(e) {
                                var t, n = e.__id,
                                    r = e.position,
                                    i = e.map,
                                    a = e.template,
                                    s = e.className,
                                    o = e.anchor,
                                    c = void 0 === o ? {
                                        x: 0,
                                        y: 0
                                    } : o;
                                return k(this, l), M(H(t = u.call(this)), "__id", void 0), M(H(t), "anchor", void 0), M(H(t), "offset", void 0), M(H(t), "listeners", void 0), M(H(t), "latLng", void 0), M(H(t), "element", void 0), t.__id = n, t.anchor = c, t.listeners = {}, t.latLng = new h.maps.LatLng(r), t.element = document.createElement("div"), t.element.className = s, t.element.style.position = "absolute", t.element.innerHTML = a, t.setMap(i), t
                            }
                            return L(l, [{
                                key: "onAdd",
                                value: function() {
                                    this.getPanes().overlayMouseTarget.appendChild(this.element);
                                    var e = this.element.getBoundingClientRect();
                                    this.offset = {
                                        x: this.anchor.x + e.width / 2,
                                        y: this.anchor.y + e.height
                                    }, this.element.style.width = "".concat(e.width, "px")
                                }
                            }, {
                                key: "draw",
                                value: function() {
                                    var e = this.getProjection().fromLatLngToDivPixel(this.latLng);
                                    this.element.style.left = "".concat(Math.round(e.x - this.offset.x), "px"), this.element.style.top = "".concat(Math.round(e.y - this.offset.y), "px"), this.element.style.zIndex = String(parseInt(this.element.style.top, 10))
                                }
                            }, {
                                key: "onRemove",
                                value: function() {
                                    var t = this;
                                    this.element && (this.element.parentNode.removeChild(this.element), Object.keys(this.listeners).forEach(function(e) {
                                        t.element.removeEventListener(e, t.listeners[e])
                                    }), delete this.element, delete this.listeners)
                                }
                            }, {
                                key: "addListener",
                                value: function(e, t) {
                                    this.listeners[e] = t;
                                    var n = this.element;
                                    return n.addEventListener(e, t), {
                                        remove: function() {
                                            return n.removeEventListener(e, t)
                                        }
                                    }
                                }
                            }, {
                                key: "getPosition",
                                value: function() {
                                    return this.latLng
                                }
                            }]), l
                        }()
                    }(S),
                    T = F ? function(e) {
                        var t = e.item,
                            n = O(e, ["item"]);
                        return new C(D(D(D({}, F.createOptions(t)), n), {}, {
                            __id: t.objectID,
                            position: t._geoloc,
                            className: oi(xi({
                                descendantName: "marker"
                            })),
                            template: be({
                                templateKey: "HTMLMarker",
                                templates: _,
                                data: t
                            })
                        }))
                    } : function(e) {
                        var t = e.item,
                            n = O(e, ["item"]);
                        return new S.maps.Marker(D(D(D({}, I.createOptions(t)), n), {}, {
                            __id: t.objectID,
                            position: t._geoloc
                        }))
                    },
                    E = F || I;
                return D(D({}, Ur(wi, function() {
                    return Zn(null, N)
                })(D(D({}, R), {}, {
                    renderState: {},
                    container: N,
                    googleReference: S,
                    initialZoom: r,
                    initialPosition: a,
                    templates: _,
                    cssClasses: x,
                    createMarker: T,
                    markerOptions: E,
                    enableRefine: m,
                    enableClearMapRefinement: g,
                    enableRefineControl: y
                }))), {}, {
                    $$widgetType: "ais.geoSearch"
                })
            },
            hierarchicalMenu: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attributes,
                    i = t.separator,
                    a = t.rootPath,
                    s = t.showParentLevel,
                    o = t.limit,
                    c = t.showMore,
                    u = void 0 !== c && c,
                    l = t.showMoreLimit,
                    h = t.sortBy,
                    d = t.transformItems,
                    f = t.templates,
                    m = void 0 === f ? Ci : f,
                    p = t.cssClasses,
                    g = void 0 === p ? {} : p;
                if (!n) throw new Error(Ti("The `container` option is required."));
                var v = he(n);
                return D(D({}, bn(function(e) {
                    var u = e.cssClasses,
                        l = e.containerNode,
                        h = e.showMore,
                        d = e.templates,
                        f = e.renderState;
                    return function(e, t) {
                        var n = e.createURL,
                            r = e.items,
                            i = e.refine,
                            a = e.instantSearchInstance,
                            s = e.isShowingMore,
                            o = e.toggleShowMore,
                            c = e.canToggleShowMore;
                        t ? f.templateProps = me({
                            defaultTemplates: Ci,
                            templatesConfig: a.templatesConfig,
                            templates: d
                        }) : Zn(Mn(Fi, {
                            createURL: n,
                            cssClasses: u,
                            facetValues: r,
                            templateProps: f.templateProps,
                            toggleRefinement: i,
                            showMore: h,
                            toggleShowMore: o,
                            isShowingMore: s,
                            canToggleShowMore: c
                        }), l)
                    }
                }({
                    cssClasses: {
                        root: oi(Ei(), g.root),
                        noRefinementRoot: oi(Ei({
                            modifierName: "noRefinement"
                        }), g.noRefinementRoot),
                        list: oi(Ei({
                            descendantName: "list"
                        }), g.list),
                        childList: oi(Ei({
                            descendantName: "list",
                            modifierName: "child"
                        }), g.childList),
                        item: oi(Ei({
                            descendantName: "item"
                        }), g.item),
                        selectedItem: oi(Ei({
                            descendantName: "item",
                            modifierName: "selected"
                        }), g.selectedItem),
                        parentItem: oi(Ei({
                            descendantName: "item",
                            modifierName: "parent"
                        }), g.parentItem),
                        link: oi(Ei({
                            descendantName: "link"
                        }), g.link),
                        label: oi(Ei({
                            descendantName: "label"
                        }), g.label),
                        count: oi(Ei({
                            descendantName: "count"
                        }), g.count),
                        showMore: oi(Ei({
                            descendantName: "showMore"
                        }), g.showMore),
                        disabledShowMore: oi(Ei({
                            descendantName: "showMore",
                            modifierName: "disabled"
                        }), g.disabledShowMore)
                    },
                    containerNode: v,
                    templates: m,
                    showMore: u,
                    renderState: {}
                }), function() {
                    return Zn(null, v)
                })({
                    attributes: r,
                    separator: i,
                    rootPath: a,
                    showParentLevel: s,
                    limit: o,
                    showMore: u,
                    showMoreLimit: l,
                    sortBy: h,
                    transformItems: d
                })), {}, {
                    $$widgetType: "ais.hierarchicalMenu"
                })
            },
            hits: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.escapeHTML,
                    i = t.transformItems,
                    a = t.templates,
                    s = void 0 === a ? Li : a,
                    o = t.cssClasses,
                    c = void 0 === o ? {} : o;
                if (!n) throw new Error(Mi("The `container` option is required."));
                var u = he(n),
                    l = {
                        root: oi(ji(), c.root),
                        emptyRoot: oi(ji({
                            modifierName: "empty"
                        }), c.emptyRoot),
                        list: oi(ji({
                            descendantName: "list"
                        }), c.list),
                        item: oi(ji({
                            descendantName: "item"
                        }), c.item)
                    },
                    h = function(e) {
                        var o = e.renderState,
                            c = e.cssClasses,
                            u = e.containerNode,
                            l = e.templates;
                        return function(e, t) {
                            var n = e.hits,
                                r = e.results,
                                i = e.instantSearchInstance,
                                a = e.insights,
                                s = e.bindEvent;
                            t ? o.templateProps = me({
                                defaultTemplates: Li,
                                templatesConfig: i.templatesConfig,
                                templates: l
                            }) : Zn(Mn(Oi, {
                                cssClasses: c,
                                hits: n,
                                results: r,
                                templateProps: o.templateProps,
                                insights: a,
                                sendEvent: function(e) {
                                    i.sendEventToInsights(e)
                                },
                                bindEvent: s
                            }), u)
                        }
                    }({
                        containerNode: u,
                        cssClasses: l,
                        renderState: {},
                        templates: s
                    });
                return D(D({}, Pn(Sn)(h, function() {
                    return Zn(null, u)
                })({
                    escapeHTML: r,
                    transformItems: i
                })), {}, {
                    $$widgetType: "ais.hits"
                })
            },
            hitsPerPage: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.items,
                    i = t.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = t.transformItems;
                if (!n) throw new Error(Ai("The `container` option is required."));
                var o = he(n),
                    c = {
                        root: oi(Di(), a.root),
                        select: oi(Di({
                            descendantName: "select"
                        }), a.select),
                        option: oi(Di({
                            descendantName: "option"
                        }), a.option)
                    },
                    u = function(e) {
                        var a = e.containerNode,
                            s = e.cssClasses;
                        return function(e, t) {
                            var n = e.items,
                                r = e.refine;
                            if (!t) {
                                var i = (Se(n, function(e) {
                                    return e.isRefined
                                }) || {}).value;
                                Zn(Mn("div", {
                                    className: s.root
                                }, Mn(Hi, {
                                    cssClasses: s,
                                    currentValue: i,
                                    options: n,
                                    setValue: r
                                })), a)
                            }
                        }
                    }({
                        containerNode: o,
                        cssClasses: c
                    });
                return D(D({}, tr(u, function() {
                    return Zn(null, o)
                })({
                    items: r,
                    transformItems: s
                })), {}, {
                    $$widgetType: "ais.hitsPerPage"
                })
            },
            infiniteHits: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.escapeHTML,
                    i = t.transformItems,
                    a = t.templates,
                    s = void 0 === a ? Wi : a,
                    o = t.cssClasses,
                    c = void 0 === o ? {} : o,
                    u = t.showPrevious,
                    l = t.cache;
                if (!n) throw new Error(Bi("The `container` option is required."));
                var h = he(n),
                    d = {
                        root: oi(Ui(), c.root),
                        emptyRoot: oi(Ui({
                            modifierName: "empty"
                        }), c.emptyRoot),
                        item: oi(Ui({
                            descendantName: "item"
                        }), c.item),
                        list: oi(Ui({
                            descendantName: "list"
                        }), c.list),
                        loadPrevious: oi(Ui({
                            descendantName: "loadPrevious"
                        }), c.loadPrevious),
                        disabledLoadPrevious: oi(Ui({
                            descendantName: "loadPrevious",
                            modifierName: "disabled"
                        }), c.disabledLoadPrevious),
                        loadMore: oi(Ui({
                            descendantName: "loadMore"
                        }), c.loadMore),
                        disabledLoadMore: oi(Ui({
                            descendantName: "loadMore",
                            modifierName: "disabled"
                        }), c.disabledLoadMore)
                    },
                    f = function(e) {
                        var h = e.cssClasses,
                            d = e.containerNode,
                            f = e.renderState,
                            m = e.templates,
                            p = e.showPrevious;
                        return function(e, t) {
                            var n = e.hits,
                                r = e.results,
                                i = e.showMore,
                                a = e.showPrevious,
                                s = e.isFirstPage,
                                o = e.isLastPage,
                                c = e.instantSearchInstance,
                                u = e.insights,
                                l = e.bindEvent;
                            t ? f.templateProps = me({
                                defaultTemplates: Wi,
                                templatesConfig: c.templatesConfig,
                                templates: m
                            }) : Zn(Mn(Qi, {
                                cssClasses: h,
                                hits: n,
                                results: r,
                                hasShowPrevious: p,
                                showPrevious: a,
                                showMore: i,
                                templateProps: f.templateProps,
                                isFirstPage: s,
                                isLastPage: o,
                                insights: u,
                                sendEvent: function(e) {
                                    c.sendEventToInsights(e)
                                },
                                bindEvent: l
                            }), d)
                        }
                    }({
                        containerNode: h,
                        cssClasses: d,
                        templates: s,
                        showPrevious: u,
                        renderState: {}
                    });
                return D(D({}, Pn(sr)(f, function() {
                    return Zn(null, h)
                })({
                    escapeHTML: r,
                    transformItems: i,
                    showPrevious: u,
                    cache: l
                })), {}, {
                    $$widgetType: "ais.infiniteHits"
                })
            },
            menu: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.sortBy,
                    a = t.limit,
                    s = t.showMore,
                    o = t.showMoreLimit,
                    c = t.cssClasses,
                    u = void 0 === c ? {} : c,
                    l = t.templates,
                    h = void 0 === l ? qi : l,
                    d = t.transformItems;
                if (!n) throw new Error($i("The `container` option is required."));
                var f = he(n),
                    m = {
                        root: oi(Vi(), u.root),
                        noRefinementRoot: oi(Vi({
                            modifierName: "noRefinement"
                        }), u.noRefinementRoot),
                        list: oi(Vi({
                            descendantName: "list"
                        }), u.list),
                        item: oi(Vi({
                            descendantName: "item"
                        }), u.item),
                        selectedItem: oi(Vi({
                            descendantName: "item",
                            modifierName: "selected"
                        }), u.selectedItem),
                        link: oi(Vi({
                            descendantName: "link"
                        }), u.link),
                        label: oi(Vi({
                            descendantName: "label"
                        }), u.label),
                        count: oi(Vi({
                            descendantName: "count"
                        }), u.count),
                        showMore: oi(Vi({
                            descendantName: "showMore"
                        }), u.showMore),
                        disabledShowMore: oi(Vi({
                            descendantName: "showMore",
                            modifierName: "disabled"
                        }), u.disabledShowMore)
                    },
                    p = function(e) {
                        var l = e.containerNode,
                            h = e.cssClasses,
                            d = e.renderState,
                            f = e.templates,
                            m = e.showMore;
                        return function(e, t) {
                            var n = e.refine,
                                r = e.items,
                                i = e.createURL,
                                a = e.instantSearchInstance,
                                s = e.isShowingMore,
                                o = e.toggleShowMore,
                                c = e.canToggleShowMore;
                            if (t) d.templateProps = me({
                                defaultTemplates: qi,
                                templatesConfig: a.templatesConfig,
                                templates: f
                            });
                            else {
                                var u = r.map(function(e) {
                                    return D(D({}, e), {}, {
                                        url: i(e.value)
                                    })
                                });
                                Zn(Mn(Fi, {
                                    createURL: i,
                                    cssClasses: h,
                                    facetValues: u,
                                    showMore: m,
                                    templateProps: d.templateProps,
                                    toggleRefinement: n,
                                    toggleShowMore: o,
                                    isShowingMore: s,
                                    canToggleShowMore: c
                                }), l)
                            }
                        }
                    }({
                        containerNode: f,
                        cssClasses: m,
                        renderState: {},
                        templates: h,
                        showMore: s
                    });
                return D(D({}, or(p, function() {
                    return Zn(null, f)
                })({
                    attribute: r,
                    limit: a,
                    showMore: s,
                    showMoreLimit: o,
                    sortBy: i,
                    transformItems: d
                })), {}, {
                    $$widgetType: "ais.menu"
                })
            },
            refinementList: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.operator,
                    a = t.sortBy,
                    s = t.limit,
                    o = t.showMore,
                    c = t.showMoreLimit,
                    u = t.searchable,
                    l = void 0 !== u && u,
                    h = t.searchablePlaceholder,
                    d = void 0 === h ? "Search..." : h,
                    f = t.searchableEscapeFacetValues,
                    m = void 0 === f || f,
                    p = t.searchableIsAlwaysActive,
                    g = void 0 === p || p,
                    v = t.cssClasses,
                    y = void 0 === v ? {} : v,
                    b = t.templates,
                    S = void 0 === b ? zi : b,
                    R = t.transformItems;
                if (!n) throw new Error(Ji("The `container` option is required."));
                var w = !!l && Boolean(m),
                    P = he(n),
                    N = function(e) {
                        var t = D(D({}, e), {}, {
                            submit: e.searchableSubmit,
                            reset: e.searchableReset,
                            loadingIndicator: e.searchableLoadingIndicator
                        });
                        return t.searchableReset, t.searchableSubmit, t.searchableLoadingIndicator, O(t, ["searchableReset", "searchableSubmit", "searchableLoadingIndicator"])
                    }(D(D({}, zi), S)),
                    x = {
                        root: oi(Yi(), y.root),
                        noRefinementRoot: oi(Yi({
                            modifierName: "noRefinement"
                        }), y.noRefinementRoot),
                        list: oi(Yi({
                            descendantName: "list"
                        }), y.list),
                        item: oi(Yi({
                            descendantName: "item"
                        }), y.item),
                        selectedItem: oi(Yi({
                            descendantName: "item",
                            modifierName: "selected"
                        }), y.selectedItem),
                        searchBox: oi(Yi({
                            descendantName: "searchBox"
                        }), y.searchBox),
                        label: oi(Yi({
                            descendantName: "label"
                        }), y.label),
                        checkbox: oi(Yi({
                            descendantName: "checkbox"
                        }), y.checkbox),
                        labelText: oi(Yi({
                            descendantName: "labelText"
                        }), y.labelText),
                        count: oi(Yi({
                            descendantName: "count"
                        }), y.count),
                        noResults: oi(Yi({
                            descendantName: "noResults"
                        }), y.noResults),
                        showMore: oi(Yi({
                            descendantName: "showMore"
                        }), y.showMore),
                        disabledShowMore: oi(Yi({
                            descendantName: "showMore",
                            modifierName: "disabled"
                        }), y.disabledShowMore),
                        searchable: {
                            root: oi(Gi(), y.searchableRoot),
                            form: oi(Gi({
                                descendantName: "form"
                            }), y.searchableForm),
                            input: oi(Gi({
                                descendantName: "input"
                            }), y.searchableInput),
                            submit: oi(Gi({
                                descendantName: "submit"
                            }), y.searchableSubmit),
                            submitIcon: oi(Gi({
                                descendantName: "submitIcon"
                            }), y.searchableSubmitIcon),
                            reset: oi(Gi({
                                descendantName: "reset"
                            }), y.searchableReset),
                            resetIcon: oi(Gi({
                                descendantName: "resetIcon"
                            }), y.searchableResetIcon),
                            loadingIndicator: oi(Gi({
                                descendantName: "loadingIndicator"
                            }), y.searchableLoadingIndicator),
                            loadingIcon: oi(Gi({
                                descendantName: "loadingIcon"
                            }), y.searchableLoadingIcon)
                        }
                    };
                return D(D({}, Nr(function(e) {
                    var d = e.containerNode,
                        f = e.cssClasses,
                        m = e.templates,
                        p = e.renderState,
                        g = e.showMore,
                        v = e.searchable,
                        y = e.searchablePlaceholder,
                        b = e.searchableIsAlwaysActive;
                    return function(e, t) {
                        var n = e.refine,
                            r = e.items,
                            i = e.createURL,
                            a = e.searchForItems,
                            s = e.isFromSearch,
                            o = e.instantSearchInstance,
                            c = e.toggleShowMore,
                            u = e.isShowingMore,
                            l = e.hasExhaustiveItems,
                            h = e.canToggleShowMore;
                        t ? p.templateProps = me({
                            templatesConfig: o.templatesConfig,
                            templates: m
                        }) : Zn(Mn(Fi, {
                            createURL: i,
                            cssClasses: f,
                            facetValues: r,
                            templateProps: p.templateProps,
                            toggleRefinement: n,
                            searchFacetValues: v ? a : void 0,
                            searchPlaceholder: y,
                            searchIsAlwaysActive: b,
                            isFromSearch: s,
                            showMore: g && !s && 0 < r.length,
                            toggleShowMore: c,
                            isShowingMore: u,
                            hasExhaustiveItems: l,
                            canToggleShowMore: h
                        }), d)
                    }
                }({
                    containerNode: P,
                    cssClasses: x,
                    templates: N,
                    renderState: {},
                    searchable: l,
                    searchablePlaceholder: d,
                    searchableIsAlwaysActive: g,
                    showMore: o
                }), function() {
                    return Zn(null, P)
                })({
                    attribute: r,
                    operator: i,
                    limit: s,
                    showMore: o,
                    showMoreLimit: c,
                    sortBy: a,
                    escapeFacetValues: w,
                    transformItems: R
                })), {}, {
                    $$widgetType: "ais.refinementList"
                })
            },
            numericMenu: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.items,
                    a = t.cssClasses,
                    s = void 0 === a ? {} : a,
                    o = t.templates,
                    c = void 0 === o ? Zi : o,
                    u = t.transformItems;
                if (!n) throw new Error(Xi("The `container` option is required."));
                var l = he(n),
                    h = {
                        root: oi(ea(), s.root),
                        noRefinementRoot: oi(ea({
                            modifierName: "noRefinement"
                        }), s.noRefinementRoot),
                        list: oi(ea({
                            descendantName: "list"
                        }), s.list),
                        item: oi(ea({
                            descendantName: "item"
                        }), s.item),
                        selectedItem: oi(ea({
                            descendantName: "item",
                            modifierName: "selected"
                        }), s.selectedItem),
                        label: oi(ea({
                            descendantName: "label"
                        }), s.label),
                        radio: oi(ea({
                            descendantName: "radio"
                        }), s.radio),
                        labelText: oi(ea({
                            descendantName: "labelText"
                        }), s.labelText)
                    },
                    d = function(e) {
                        var s = e.containerNode,
                            o = e.attribute,
                            c = e.cssClasses,
                            u = e.renderState,
                            l = e.templates;
                        return function(e, t) {
                            var n = e.createURL,
                                r = e.instantSearchInstance,
                                i = e.refine,
                                a = e.items;
                            t ? u.templateProps = me({
                                defaultTemplates: Zi,
                                templatesConfig: r.templatesConfig,
                                templates: l
                            }) : Zn(Mn(Fi, {
                                createURL: n,
                                cssClasses: c,
                                facetValues: a,
                                templateProps: u.templateProps,
                                toggleRefinement: i,
                                attribute: o
                            }), s)
                        }
                    }({
                        containerNode: l,
                        attribute: r,
                        cssClasses: h,
                        renderState: {},
                        templates: c
                    });
                return D(D({}, cr(d, function() {
                    return Zn(null, l)
                })({
                    attribute: r,
                    items: i,
                    transformItems: u
                })), {}, {
                    $$widgetType: "ais.numericMenu"
                })
            },
            pagination: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.templates,
                    i = void 0 === r ? {} : r,
                    a = t.cssClasses,
                    s = void 0 === a ? {} : a,
                    o = t.totalPages,
                    c = t.padding,
                    u = t.showFirst,
                    l = void 0 === u || u,
                    h = t.showLast,
                    d = void 0 === h || h,
                    f = t.showPrevious,
                    m = void 0 === f || f,
                    p = t.showNext,
                    g = void 0 === p || p,
                    v = t.scrollTo,
                    y = void 0 === v ? "body" : v;
                if (!n) throw new Error(ra("The `container` option is required."));
                var b = he(n),
                    S = !0 === y ? "body" : y,
                    R = !1 !== S && he(S),
                    w = {
                        root: oi(ia(), s.root),
                        noRefinementRoot: oi(ia({
                            modifierName: "noRefinement"
                        }), s.noRefinementRoot),
                        list: oi(ia({
                            descendantName: "list"
                        }), s.list),
                        item: oi(ia({
                            descendantName: "item"
                        }), s.item),
                        firstPageItem: oi(ia({
                            descendantName: "item",
                            modifierName: "firstPage"
                        }), s.firstPageItem),
                        lastPageItem: oi(ia({
                            descendantName: "item",
                            modifierName: "lastPage"
                        }), s.lastPageItem),
                        previousPageItem: oi(ia({
                            descendantName: "item",
                            modifierName: "previousPage"
                        }), s.previousPageItem),
                        nextPageItem: oi(ia({
                            descendantName: "item",
                            modifierName: "nextPage"
                        }), s.nextPageItem),
                        pageItem: oi(ia({
                            descendantName: "item",
                            modifierName: "page"
                        }), s.pageItem),
                        selectedItem: oi(ia({
                            descendantName: "item",
                            modifierName: "selected"
                        }), s.selectedItem),
                        disabledItem: oi(ia({
                            descendantName: "item",
                            modifierName: "disabled"
                        }), s.disabledItem),
                        link: oi(ia({
                            descendantName: "link"
                        }), s.link)
                    },
                    P = D(D({}, aa), i),
                    N = function(e) {
                        var l = e.containerNode,
                            h = e.cssClasses,
                            d = e.templates,
                            f = e.totalPages,
                            m = e.showFirst,
                            p = e.showLast,
                            g = e.showPrevious,
                            v = e.showNext,
                            y = e.scrollToNode;
                        return function(e, t) {
                            var n = e.createURL,
                                r = e.currentRefinement,
                                i = e.nbHits,
                                a = e.nbPages,
                                s = e.pages,
                                o = e.isFirstPage,
                                c = e.isLastPage,
                                u = e.refine;
                            if (!t) {
                                Zn(Mn(na, {
                                    createURL: n,
                                    cssClasses: h,
                                    currentPage: r,
                                    templates: d,
                                    nbHits: i,
                                    nbPages: a,
                                    pages: s,
                                    totalPages: f,
                                    isFirstPage: o,
                                    isLastPage: c,
                                    setCurrentPage: function(e) {
                                        u(e), !1 !== y && y.scrollIntoView()
                                    },
                                    showFirst: m,
                                    showLast: p,
                                    showPrevious: g,
                                    showNext: v
                                }), l)
                            }
                        }
                    }({
                        containerNode: b,
                        cssClasses: w,
                        templates: P,
                        showFirst: l,
                        showLast: d,
                        showPrevious: m,
                        showNext: g,
                        padding: c,
                        scrollToNode: R
                    });
                return D(D({}, gr(N, function() {
                    return Zn(null, b)
                })({
                    totalPages: o,
                    padding: c
                })), {}, {
                    $$widgetType: "ais.pagination"
                })
            },
            rangeInput: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.min,
                    a = t.max,
                    s = t.precision,
                    o = void 0 === s ? 0 : s,
                    c = t.cssClasses,
                    u = void 0 === c ? {} : c,
                    l = t.templates,
                    h = void 0 === l ? {} : l;
                if (!n) throw new Error(oa("The `container` option is required."));
                var d = he(n),
                    f = D({
                        separatorText: "to",
                        submitText: "Go"
                    }, h),
                    m = {
                        root: oi(ca(), u.root),
                        noRefinement: oi(ca({
                            modifierName: "noRefinement"
                        })),
                        form: oi(ca({
                            descendantName: "form"
                        }), u.form),
                        label: oi(ca({
                            descendantName: "label"
                        }), u.label),
                        input: oi(ca({
                            descendantName: "input"
                        }), u.input),
                        inputMin: oi(ca({
                            descendantName: "input",
                            modifierName: "min"
                        }), u.inputMin),
                        inputMax: oi(ca({
                            descendantName: "input",
                            modifierName: "max"
                        }), u.inputMax),
                        separator: oi(ca({
                            descendantName: "separator"
                        }), u.separator),
                        submit: oi(ca({
                            descendantName: "submit"
                        }), u.submit)
                    },
                    p = function(e) {
                        var f = e.containerNode,
                            m = e.cssClasses,
                            p = e.renderState,
                            g = e.templates;
                        return function(e, t) {
                            var n = e.refine,
                                r = e.range,
                                i = e.start,
                                a = e.widgetParams,
                                s = e.instantSearchInstance;
                            if (t) p.templateProps = me({
                                templatesConfig: s.templatesConfig,
                                templates: g
                            });
                            else {
                                var o = r.min,
                                    c = r.max,
                                    u = W(i, 2),
                                    l = u[0],
                                    h = u[1],
                                    d = 1 / Math.pow(10, a.precision);
                                Zn(Mn(sa, {
                                    min: o,
                                    max: c,
                                    step: d,
                                    values: {
                                        min: l !== -1 / 0 && l !== o ? l : void 0,
                                        max: h !== 1 / 0 && h !== c ? h : void 0
                                    },
                                    cssClasses: m,
                                    refine: n,
                                    templateProps: p.templateProps
                                }), f)
                            }
                        }
                    }({
                        containerNode: d,
                        cssClasses: m,
                        templates: f,
                        renderState: {}
                    });
                return D(D({}, wr(p, function() {
                    return Zn(null, d)
                })({
                    attribute: r,
                    min: i,
                    max: a,
                    precision: o
                })), {}, {
                    $$type: "ais.rangeInput",
                    $$widgetType: "ais.rangeInput"
                })
            },
            searchBox: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.placeholder,
                    i = void 0 === r ? "" : r,
                    a = t.cssClasses,
                    s = void 0 === a ? {} : a,
                    o = t.autofocus,
                    c = void 0 !== o && o,
                    u = t.searchAsYouType,
                    l = void 0 === u || u,
                    h = t.showReset,
                    d = void 0 === h || h,
                    f = t.showSubmit,
                    m = void 0 === f || f,
                    p = t.showLoadingIndicator,
                    g = void 0 === p || p,
                    v = t.queryHook,
                    y = t.templates;
                if (!n) throw new Error(ua("The `container` option is required."));
                var b = he(n),
                    S = {
                        root: oi(la(), s.root),
                        form: oi(la({
                            descendantName: "form"
                        }), s.form),
                        input: oi(la({
                            descendantName: "input"
                        }), s.input),
                        submit: oi(la({
                            descendantName: "submit"
                        }), s.submit),
                        submitIcon: oi(la({
                            descendantName: "submitIcon"
                        }), s.submitIcon),
                        reset: oi(la({
                            descendantName: "reset"
                        }), s.reset),
                        resetIcon: oi(la({
                            descendantName: "resetIcon"
                        }), s.resetIcon),
                        loadingIndicator: oi(la({
                            descendantName: "loadingIndicator"
                        }), s.loadingIndicator),
                        loadingIcon: oi(la({
                            descendantName: "loadingIcon"
                        }), s.loadingIcon)
                    };
                return D(D({}, _r(function(e) {
                    var i = e.containerNode,
                        a = e.cssClasses,
                        s = e.placeholder,
                        o = e.templates,
                        c = e.autofocus,
                        u = e.searchAsYouType,
                        l = e.showReset,
                        h = e.showSubmit,
                        d = e.showLoadingIndicator;
                    return function(e) {
                        var t = e.refine,
                            n = e.query,
                            r = e.isSearchStalled;
                        Zn(Mn(Ii, {
                            query: n,
                            placeholder: s,
                            autofocus: c,
                            refine: t,
                            searchAsYouType: u,
                            templates: o,
                            showSubmit: h,
                            showReset: l,
                            showLoadingIndicator: d,
                            isSearchStalled: r,
                            cssClasses: a
                        }), i)
                    }
                }({
                    containerNode: b,
                    cssClasses: S,
                    placeholder: i,
                    templates: D(D({}, Ki), y),
                    autofocus: c,
                    searchAsYouType: l,
                    showReset: d,
                    showSubmit: m,
                    showLoadingIndicator: g
                }), function() {
                    return Zn(null, b)
                })({
                    queryHook: v
                })), {}, {
                    $$widgetType: "ais.searchBox"
                })
            },
            rangeSlider: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.min,
                    a = t.max,
                    s = t.cssClasses,
                    o = void 0 === s ? {} : s,
                    c = t.step,
                    u = t.pips,
                    l = void 0 === u || u,
                    h = t.precision,
                    d = void 0 === h ? 0 : h,
                    f = t.tooltips,
                    m = void 0 === f || f;
                if (!n) throw new Error(Ea("The `container` option is required."));
                var p = he(n),
                    g = {
                        root: oi(ka(), o.root),
                        disabledRoot: oi(ka({
                            modifierName: "disabled"
                        }), o.disabledRoot)
                    },
                    v = function(e) {
                        var d = e.containerNode,
                            f = e.cssClasses,
                            m = e.pips,
                            p = e.step,
                            g = e.tooltips;
                        return function(e, t) {
                            var n = e.refine,
                                r = e.range,
                                i = e.start;
                            if (!t) {
                                var a = r.min,
                                    s = r.max,
                                    o = W(i, 2),
                                    c = o[0],
                                    u = o[1],
                                    l = c === -1 / 0 ? a : c,
                                    h = u === 1 / 0 ? s : u;
                                Zn(Mn(Ta, {
                                    cssClasses: f,
                                    refine: n,
                                    min: a,
                                    max: s,
                                    values: [s < l ? s : l, h < a ? a : h],
                                    tooltips: g,
                                    step: p,
                                    pips: m
                                }), d)
                            }
                        }
                    }({
                        containerNode: p,
                        step: c,
                        pips: l,
                        tooltips: m,
                        renderState: {},
                        cssClasses: g
                    });
                return D(D({}, wr(v, function() {
                    return Zn(null, p)
                })({
                    attribute: r,
                    min: i,
                    max: a,
                    precision: d
                })), {}, {
                    $$type: "ais.rangeSlider",
                    $$widgetType: "ais.rangeSlider"
                })
            },
            sortBy: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.items,
                    i = t.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = t.transformItems;
                if (!n) throw new Error(La("The `container` option is required."));
                var o = he(n),
                    c = {
                        root: oi(Ma(), a.root),
                        select: oi(Ma({
                            descendantName: "select"
                        }), a.select),
                        option: oi(Ma({
                            descendantName: "option"
                        }), a.option)
                    };
                return D(D({}, Fr(function(e) {
                    var a = e.containerNode,
                        s = e.cssClasses;
                    return function(e, t) {
                        var n = e.currentRefinement,
                            r = e.options,
                            i = e.refine;
                        t || Zn(Mn("div", {
                            className: s.root
                        }, Mn(Hi, {
                            cssClasses: s,
                            currentValue: n,
                            options: r,
                            setValue: i
                        })), a)
                    }
                }({
                    containerNode: o,
                    cssClasses: c
                }), function() {
                    return Zn(null, o)
                })({
                    items: r,
                    transformItems: s
                })), {}, {
                    $$widgetType: "ais.sortBy"
                })
            },
            ratingMenu: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.max,
                    a = void 0 === i ? 5 : i,
                    s = t.cssClasses,
                    o = void 0 === s ? {} : s,
                    c = t.templates,
                    u = void 0 === c ? ja : c;
                if (!n) throw new Error(Oa("The `container` option is required."));
                var l = he(n),
                    h = {
                        root: oi(Ha(), o.root),
                        noRefinementRoot: oi(Ha({
                            modifierName: "noRefinement"
                        }), o.noRefinementRoot),
                        list: oi(Ha({
                            descendantName: "list"
                        }), o.list),
                        item: oi(Ha({
                            descendantName: "item"
                        }), o.item),
                        selectedItem: oi(Ha({
                            descendantName: "item",
                            modifierName: "selected"
                        }), o.selectedItem),
                        disabledItem: oi(Ha({
                            descendantName: "item",
                            modifierName: "disabled"
                        }), o.disabledItem),
                        link: oi(Ha({
                            descendantName: "link"
                        }), o.link),
                        starIcon: oi(Ha({
                            descendantName: "starIcon"
                        }), o.starIcon),
                        fullStarIcon: oi(Ha({
                            descendantName: "starIcon",
                            modifierName: "full"
                        }), o.fullStarIcon),
                        emptyStarIcon: oi(Ha({
                            descendantName: "starIcon",
                            modifierName: "empty"
                        }), o.emptyStarIcon),
                        label: oi(Ha({
                            descendantName: "label"
                        }), o.label),
                        count: oi(Ha({
                            descendantName: "count"
                        }), o.count)
                    };
                return D(D({}, Lr(function(e) {
                    var s = e.containerNode,
                        o = e.cssClasses,
                        c = e.templates,
                        u = e.renderState;
                    return function(e, t) {
                        var n = e.refine,
                            r = e.items,
                            i = e.createURL,
                            a = e.instantSearchInstance;
                        t ? u.templateProps = me({
                            defaultTemplates: ja,
                            templatesConfig: a.templatesConfig,
                            templates: c
                        }) : Zn(Mn(Fi, {
                            createURL: i,
                            cssClasses: o,
                            facetValues: r,
                            templateProps: u.templateProps,
                            toggleRefinement: n
                        }, Mn("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            style: "display:none;"
                        }, Mn("symbol", {
                            id: Ha({
                                descendantName: "starSymbol"
                            }),
                            viewBox: "0 0 24 24"
                        }, Aa), Mn("symbol", {
                            id: Ha({
                                descendantName: "starEmptySymbol"
                            }),
                            viewBox: "0 0 24 24"
                        }, Da))), s)
                    }
                }({
                    containerNode: l,
                    cssClasses: h,
                    renderState: {},
                    templates: u
                }), function() {
                    return Zn(null, l)
                })({
                    attribute: r,
                    max: a
                })), {}, {
                    $$widgetType: "ais.ratingMenu"
                })
            },
            stats: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = t.templates,
                    s = void 0 === a ? Ba : a;
                if (!n) throw new Error(Ua("The `container` option is required."));
                var o = he(n),
                    c = {
                        root: oi(Qa(), i.root),
                        text: oi(Qa({
                            descendantName: "text"
                        }), i.text)
                    };
                return D(D({}, jr(function(e) {
                    var h = e.containerNode,
                        d = e.cssClasses,
                        f = e.renderState,
                        m = e.templates;
                    return function(e, t) {
                        var n = e.hitsPerPage,
                            r = e.nbHits,
                            i = e.nbSortedHits,
                            a = e.areHitsSorted,
                            s = e.nbPages,
                            o = e.page,
                            c = e.processingTimeMS,
                            u = e.query,
                            l = e.instantSearchInstance;
                        t ? f.templateProps = me({
                            defaultTemplates: Ba,
                            templatesConfig: l.templatesConfig,
                            templates: m
                        }) : Zn(Mn(Wa, {
                            cssClasses: d,
                            hitsPerPage: n,
                            nbHits: r,
                            nbSortedHits: i,
                            areHitsSorted: a,
                            nbPages: s,
                            page: o,
                            processingTimeMS: c,
                            query: u,
                            templateProps: f.templateProps
                        }), h)
                    }
                }({
                    containerNode: o,
                    cssClasses: c,
                    renderState: {},
                    templates: s
                }), function() {
                    return Zn(null, o)
                })()), {}, {
                    $$widgetType: "ais.stats"
                })
            },
            toggleRefinement: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.cssClasses,
                    a = void 0 === i ? {} : i,
                    s = t.templates,
                    o = void 0 === s ? $a : s,
                    c = t.on,
                    u = void 0 === c || c,
                    l = t.off;
                if (!n) throw new Error(Va("The `container` option is required."));
                var h = he(n),
                    d = {
                        root: oi(Ka(), a.root),
                        label: oi(Ka({
                            descendantName: "label"
                        }), a.label),
                        checkbox: oi(Ka({
                            descendantName: "checkbox"
                        }), a.checkbox),
                        labelText: oi(Ka({
                            descendantName: "labelText"
                        }), a.labelText)
                    };
                return D(D({}, Dr(function(e) {
                    var s = e.containerNode,
                        o = e.cssClasses,
                        c = e.renderState,
                        u = e.templates;
                    return function(e, t) {
                        var n = e.value,
                            r = e.createURL,
                            i = e.refine,
                            a = e.instantSearchInstance;
                        t ? c.templateProps = me({
                            defaultTemplates: $a,
                            templatesConfig: a.templatesConfig,
                            templates: u
                        }) : Zn(Mn(qa, {
                            createURL: r,
                            cssClasses: o,
                            currentRefinement: n,
                            templateProps: c.templateProps,
                            refine: function(e) {
                                return i({
                                    isRefined: e
                                })
                            }
                        }), s)
                    }
                }({
                    containerNode: h,
                    cssClasses: d,
                    renderState: {},
                    templates: o
                }), function() {
                    return Zn(null, h)
                })({
                    attribute: r,
                    on: u,
                    off: l
                })), {}, {
                    $$widgetType: "ais.toggleRefinement"
                })
            },
            analytics: function(e) {
                var t = e || {},
                    s = t.pushFunction,
                    n = t.delay,
                    r = void 0 === n ? 3e3 : n,
                    i = t.triggerOnUIInteraction,
                    a = void 0 !== i && i,
                    o = t.pushInitialSearch,
                    c = void 0 === o || o,
                    u = t.pushPagination,
                    l = void 0 !== u && u;
                if (!s) throw new Error(Ja("The `pushFunction` option is required."));

                function h(e) {
                    if (null !== e) {
                        var t = [],
                            n = function(e) {
                                var t = [];
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var r = e[n].join("+");
                                        t.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(n), "_").concat(encodeURIComponent(r)))
                                    } return t.join("&")
                            }(D(D(D({}, e.state.disjunctiveFacetsRefinements), e.state.facetsRefinements), e.state.hierarchicalFacetsRefinements)),
                            r = function(e) {
                                var t = [];
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var r = e[n];
                                        if (r.hasOwnProperty(">=") && r.hasOwnProperty("<=")) r[">="] && r[">="][0] === r["<="] && r["<="][0] ? t.push("".concat(n, "=").concat(n, "_").concat(r[">="])) : t.push("".concat(n, "=").concat(n, "_").concat(r[">="], "to").concat(r["<="]));
                                        else if (r.hasOwnProperty(">=")) t.push("".concat(n, "=").concat(n, "_from").concat(r[">="]));
                                        else if (r.hasOwnProperty("<=")) t.push("".concat(n, "=").concat(n, "_to").concat(r["<="]));
                                        else if (r.hasOwnProperty("=")) {
                                            var i = [];
                                            for (var a in r["="]) r["="].hasOwnProperty(a) && i.push(r["="][a]);
                                            t.push("".concat(n, "=").concat(n, "_").concat(i.join("-")))
                                        }
                                    } return t.join("&")
                            }(e.state.numericRefinements);
                        "" !== n && t.push(n), "" !== r && t.push(r);
                        var i = t.join("&"),
                            a = "Query: ".concat(e.state.query || "", ", ").concat(i);
                        !0 === l && (a += ", Page: ".concat(e.state.page || 0)), m !== a && (s(i, e.state, e.results), m = a)
                    }
                }
                var d, f = null,
                    m = "",
                    p = !0;
                !0 === c && (p = !1);

                function g() {
                    h(f)
                }

                function v() {
                    h(f)
                }
                return {
                    $$type: "ais.analytics",
                    $$widgetType: "ais.analytics",
                    init: function() {
                        !0 === a && (document.addEventListener("click", g), window.addEventListener("beforeunload", v))
                    },
                    render: function(e) {
                        var t = e.results,
                            n = e.state;
                        !0 !== p ? (f = {
                            results: t,
                            state: n
                        }, d && clearTimeout(d), d = window.setTimeout(function() {
                            return h(f)
                        }, r)) : p = !1
                    },
                    dispose: function() {
                        !0 === a && (document.removeEventListener("click", g), window.removeEventListener("beforeunload", v))
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            analytics: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function() {
                        return {
                            widgetParams: e
                        }
                    }
                }
            },
            breadcrumb: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attributes,
                    i = t.separator,
                    a = t.rootPath,
                    s = t.transformItems,
                    o = t.templates,
                    c = void 0 === o ? Ya : o,
                    u = t.cssClasses,
                    l = void 0 === u ? {} : u;
                if (!n) throw new Error(Ga("The `container` option is required."));
                var h = he(n),
                    d = {
                        root: oi(Za(), l.root),
                        noRefinementRoot: oi(Za({
                            modifierName: "noRefinement"
                        }), l.noRefinementRoot),
                        list: oi(Za({
                            descendantName: "list"
                        }), l.list),
                        item: oi(Za({
                            descendantName: "item"
                        }), l.item),
                        selectedItem: oi(Za({
                            descendantName: "item",
                            modifierName: "selected"
                        }), l.selectedItem),
                        separator: oi(Za({
                            descendantName: "separator"
                        }), l.separator),
                        link: oi(Za({
                            descendantName: "link"
                        }), l.link)
                    },
                    f = function(e) {
                        var o = e.containerNode,
                            c = e.cssClasses,
                            u = e.renderState,
                            l = e.templates;
                        return function(e, t) {
                            var n = e.canRefine,
                                r = e.createURL,
                                i = e.instantSearchInstance,
                                a = e.items,
                                s = e.refine;
                            t ? u.templateProps = me({
                                defaultTemplates: Ya,
                                templatesConfig: i.templatesConfig,
                                templates: l
                            }) : Zn(Mn(za, {
                                canRefine: n,
                                cssClasses: c,
                                createURL: r,
                                items: a,
                                refine: s,
                                templateProps: u.templateProps
                            }), o)
                        }
                    }({
                        containerNode: h,
                        cssClasses: d,
                        renderState: {},
                        templates: c
                    });
                return D(D({}, Wr(f, function() {
                    return Zn(null, h)
                })({
                    attributes: r,
                    separator: i,
                    rootPath: a,
                    transformItems: s
                })), {}, {
                    $$widgetType: "ais.breadcrumb"
                })
            },
            menuSelect: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.attribute,
                    i = t.sortBy,
                    a = void 0 === i ? ["name:asc"] : i,
                    s = t.limit,
                    o = void 0 === s ? 10 : s,
                    c = t.cssClasses,
                    u = void 0 === c ? {} : c,
                    l = t.templates,
                    h = void 0 === l ? ts : l,
                    d = t.transformItems;
                if (!n) throw new Error(ns("The `container` option is required."));
                var f = he(n),
                    m = {
                        root: oi(rs(), u.root),
                        noRefinementRoot: oi(rs({
                            modifierName: "noRefinement"
                        }), u.noRefinementRoot),
                        select: oi(rs({
                            descendantName: "select"
                        }), u.select),
                        option: oi(rs({
                            descendantName: "option"
                        }), u.option)
                    },
                    p = function(e) {
                        var a = e.containerNode,
                            s = e.cssClasses,
                            o = e.renderState,
                            c = e.templates;
                        return function(e, t) {
                            var n = e.refine,
                                r = e.items,
                                i = e.instantSearchInstance;
                            t ? o.templateProps = me({
                                defaultTemplates: ts,
                                templatesConfig: i.templatesConfig,
                                templates: c
                            }) : Zn(Mn(Xa, {
                                cssClasses: s,
                                items: r,
                                refine: n,
                                templateProps: o.templateProps
                            }), a)
                        }
                    }({
                        containerNode: f,
                        cssClasses: m,
                        renderState: {},
                        templates: h
                    });
                return D(D({}, or(p, function() {
                    return Zn(null, f)
                })({
                    attribute: r,
                    limit: o,
                    sortBy: a,
                    transformItems: d
                })), {}, {
                    $$widgetType: "ais.menuSelect"
                })
            },
            poweredBy: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = t.theme,
                    s = void 0 === a ? "light" : a;
                if (!n) throw new Error(os("The `container` option is required."));
                var o = he(n),
                    c = {
                        root: oi(ss(), ss({
                            modifierName: "dark" === s ? "dark" : "light"
                        }), i.root),
                        link: oi(ss({
                            descendantName: "link"
                        }), i.link),
                        logo: oi(ss({
                            descendantName: "logo"
                        }), i.logo)
                    },
                    u = function(e) {
                        var a = e.containerNode,
                            s = e.cssClasses;
                        return function(e, t) {
                            var n = e.url,
                                r = e.widgetParams;
                            if (t) {
                                var i = r.theme;
                                Zn(Mn(es, {
                                    cssClasses: s,
                                    url: n,
                                    theme: i
                                }), a)
                            } else;
                        }
                    }({
                        containerNode: o,
                        cssClasses: c
                    });
                return D(D({}, Qr(u, function() {
                    return Zn(null, o)
                })({
                    theme: s
                })), {}, {
                    $$widgetType: "ais.poweredBy"
                })
            },
            panel: function(e) {
                var t = e || {},
                    n = t.templates,
                    r = void 0 === n ? {} : n,
                    i = t.hidden,
                    c = void 0 === i ? function() {
                        return !1
                    } : i,
                    a = t.collapsed,
                    s = t.cssClasses,
                    o = void 0 === s ? {} : s,
                    u = document.createElement("div"),
                    l = Boolean(a),
                    h = "function" == typeof a ? a : function() {
                        return !1
                    },
                    d = {
                        root: oi(Es(), o.root),
                        noRefinementRoot: oi(Es({
                            modifierName: "noRefinement"
                        }), o.noRefinementRoot),
                        collapsibleRoot: oi(Es({
                            modifierName: "collapsible"
                        }), o.collapsibleRoot),
                        collapsedRoot: oi(Es({
                            modifierName: "collapsed"
                        }), o.collapsedRoot),
                        collapseButton: oi(Es({
                            descendantName: "collapseButton"
                        }), o.collapseButton),
                        collapseIcon: oi(Es({
                            descendantName: "collapseIcon"
                        }), o.collapseIcon),
                        body: oi(Es({
                            descendantName: "body"
                        }), o.body),
                        header: oi(Es({
                            descendantName: "header"
                        }), o.header),
                        footer: oi(Es({
                            descendantName: "footer"
                        }), o.footer)
                    };
                return function(n) {
                    return function(e) {
                        var i = (e || {}).container;
                        if (!i) throw new Error(Ts("The `container` option is required in the widget within the panel."));
                        var t = {
                                header: "",
                                footer: "",
                                collapseButtonText: function(e) {
                                    var t = e.collapsed;
                                    return '<svg\n          class="'.concat(d.collapseIcon, '"\n          width="1em"\n          height="1em"\n          viewBox="0 0 500 500"\n        >\n        <path d="').concat(t ? "M100 250l300-150v300z" : "M250 400l150-300H100z", '" fill="currentColor" />\n        </svg>')
                                }
                            },
                            s = function(e) {
                                var a = e.containerNode,
                                    s = e.bodyContainerNode,
                                    o = e.cssClasses,
                                    c = e.templates;
                                return function(e) {
                                    var t = e.options,
                                        n = e.hidden,
                                        r = e.collapsible,
                                        i = e.collapsed;
                                    Zn(Mn(xs, {
                                        cssClasses: o,
                                        hidden: n,
                                        collapsible: r,
                                        isCollapsed: i,
                                        templates: c,
                                        data: t,
                                        bodyElement: s
                                    }), a)
                                }
                            }({
                                containerNode: he(i),
                                bodyContainerNode: u,
                                cssClasses: d,
                                templates: D(D({}, t), r)
                            });
                        s({
                            options: {},
                            hidden: !0,
                            collapsible: l,
                            collapsed: !1
                        });
                        var o = n(D(D({}, e), {}, {
                            container: u
                        }));
                        return D(D({}, o), {}, {
                            dispose: function() {
                                if (Zn(null, he(i)), "function" == typeof o.dispose) {
                                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return (e = o.dispose).call.apply(e, [this].concat(n))
                                }
                            },
                            render: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                var r, i = t[0],
                                    a = D(D({}, o.getWidgetRenderState ? o.getWidgetRenderState(i) : {}), i);
                                s({
                                    options: a,
                                    hidden: Boolean(c(a)),
                                    collapsible: l,
                                    collapsed: Boolean(h(a))
                                }), "function" == typeof o.render && (r = o.render).call.apply(r, [this].concat(t))
                            }
                        })
                    }
                }
            },
            voiceSearch: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = t.templates,
                    s = t.searchAsYouSpeak,
                    o = void 0 !== s && s,
                    c = t.language,
                    u = t.additionalQueryParameters,
                    l = t.createVoiceSearchHelper;
                if (!n) throw new Error(Ls("The `container` option is required."));
                var h = he(n),
                    d = {
                        root: oi(Ms(), i.root),
                        button: oi(Ms({
                            descendantName: "button"
                        }), i.button),
                        status: oi(Ms({
                            descendantName: "status"
                        }), i.status)
                    };
                return D(D({}, ii(Is, function() {
                    return Zn(null, h)
                })({
                    container: h,
                    cssClasses: d,
                    templates: D(D({}, ks), a),
                    searchAsYouSpeak: o,
                    language: c,
                    additionalQueryParameters: u,
                    createVoiceSearchHelper: l
                })), {}, {
                    $$widgetType: "ais.voiceSearch"
                })
            },
            queryRuleCustomData: function(e) {
                var t = e || {},
                    n = t.container,
                    r = t.cssClasses,
                    i = void 0 === r ? {} : r,
                    a = t.templates,
                    s = void 0 === a ? {} : a,
                    o = t.transformItems,
                    c = void 0 === o ? function(e) {
                        return e
                    } : o;
                if (!n) throw new Error(js("The `container` option is required."));
                var u = {
                        root: oi(Os(), i.root)
                    },
                    l = D(D({}, {
                        default: function(e) {
                            var t = e.items;
                            return JSON.stringify(t, null, 2)
                        }
                    }), s),
                    h = he(n);
                return D(D({}, ni(Cs, function() {
                    Zn(null, h)
                })({
                    container: h,
                    cssClasses: u,
                    templates: l,
                    transformItems: c
                })), {}, {
                    $$widgetType: "ais.queryRuleCustomData"
                })
            },
            queryRuleContext: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {};
                if (!t.trackedFilters) throw new Error(Hs("The `trackedFilters` option is required."));
                return D(D({}, ni(Ie)(t)), {}, {
                    $$widgetType: "ais.queryRuleContext"
                })
            },
            index: pt,
            places: function(e) {
                var t = e || {},
                    n = t.placesReference,
                    r = t.defaultPosition,
                    o = void 0 === r ? [] : r,
                    i = O(t, ["placesReference", "defaultPosition"]);
                if ("function" != typeof n) throw new Error("The `placesReference` option requires a valid Places.js reference.");
                var c = n(i),
                    u = {
                        query: "",
                        initialLatLngViaIP: void 0,
                        isInitialLatLngViaIPSet: !1
                    };
                return {
                    $$type: "ais.places",
                    $$widgetType: "ais.places",
                    init: function(e) {
                        var s = e.helper;
                        c.on("change", function(e) {
                            var t = e.suggestion,
                                n = t.value,
                                r = t.latlng,
                                i = r.lat,
                                a = r.lng;
                            u.query = n, s.setQueryParameter("insideBoundingBox", void 0).setQueryParameter("aroundLatLngViaIP", !1).setQueryParameter("aroundLatLng", "".concat(i, ",").concat(a)).search()
                        }), c.on("clear", function() {
                            u.query = "", s.setQueryParameter("insideBoundingBox", void 0), 1 < o.length ? s.setQueryParameter("aroundLatLngViaIP", !1).setQueryParameter("aroundLatLng", o.join(",")) : s.setQueryParameter("aroundLatLngViaIP", u.initialLatLngViaIP).setQueryParameter("aroundLatLng", void 0), s.search()
                        })
                    },
                    getWidgetUiState: function(e, t) {
                        var n = t.searchParameters.aroundLatLng || o.join(",");
                        if (n !== o.join(",") || u.query) return D(D({}, e), {}, {
                            places: {
                                query: u.query,
                                position: n
                            }
                        });
                        e.places;
                        return O(e, ["places"])
                    },
                    getWidgetSearchParameters: function(e, t) {
                        var n = t.uiState.places || {},
                            r = n.query,
                            i = void 0 === r ? "" : r,
                            a = n.position,
                            s = void 0 === a ? o.join(",") : a;
                        return u.query = i, u.isInitialLatLngViaIPSet || (u.isInitialLatLngViaIPSet = !0, u.initialLatLngViaIP = e.aroundLatLngViaIP), c.setVal(i), c.close(), e.setQueryParameter("insideBoundingBox", void 0).setQueryParameter("aroundLatLngViaIP", !1).setQueryParameter("aroundLatLng", s || void 0)
                    },
                    getRenderState: function(e, t) {
                        return D(D({}, e), {}, {
                            places: this.getWidgetRenderState(t)
                        })
                    },
                    getWidgetRenderState: function() {
                        return {
                            widgetParams: e
                        }
                    }
                }
            }
        }),
        Ds = Object.freeze({
            __proto__: null,
            createInsightsMiddleware: function(e) {
                var t = e || {},
                    c = t.insightsClient,
                    u = t.insightsInitParams,
                    l = t.onEvent;
                if (null !== c && !c) throw new Error("The `insightsClient` option is required. To disable, set it to `null`.");
                var h = Boolean(c),
                    d = null === c ? Ie : c;
                return function(e) {
                    var r = e.instantSearchInstance,
                        t = W(function(e) {
                            if (e.transporter) {
                                var t = e.transporter,
                                    n = t.headers,
                                    r = t.queryParameters,
                                    i = "x-algolia-application-id",
                                    a = "x-algolia-api-key";
                                return [n[i] || r[i], n[a] || r[a]]
                            }
                            return [e.applicationID, e.apiKey]
                        }(r.client), 2),
                        n = t[0],
                        i = t[1],
                        a = void 0,
                        s = void 0;
                    if (Array.isArray(d.queue)) {
                        var o = W(Se(d.queue.slice().reverse(), function(e) {
                            return "setUserToken" === W(e, 1)[0]
                        }) || [], 2);
                        a = o[1]
                    }
                    return d("_get", "_userToken", function(e) {
                        s = e
                    }), d("init", D({
                        appId: n,
                        apiKey: i
                    }, u)), {
                        onStateChange: function() {},
                        subscribe: function() {
                            function e(e) {
                                e && t.setState(t.state.setQueryParameter("userToken", e))
                            }
                            var t = r.mainIndex.getHelper();
                            t.setState(t.state.setQueryParameter("clickAnalytics", !0));
                            var n = It();
                            h && n && e(n), s ? d("setUserToken", s) : a && d("setUserToken", a), d("onUserTokenChange", e, {
                                immediate: !0
                            }), r.sendEventToInsights = function(e) {
                                l ? l(e, c) : e.insightsMethod && d(e.insightsMethod, e.payload)
                            }
                        },
                        unsubscribe: function() {
                            d("onUserTokenChange", void 0), r.sendEventToInsights = Ie
                        }
                    }
                }
            },
            createRouterMiddleware: rn,
            isMetadataEnabled: an,
            createMetadataMiddleware: sn
        }),
        Ws = Object.freeze({
            __proto__: null,
            history: nn
        });

    function Bs(e) {
        e.configure;
        return O(e, ["configure"])
    }
    var Us = Object.freeze({
        __proto__: null,
        simple: Ct,
        singleIndex: function(t) {
            return {
                stateToRoute: function(e) {
                    return Bs(e[t] || {})
                },
                routeToState: function(e) {
                    return M({}, t, Bs(0 < arguments.length && void 0 !== e ? e : {}))
                }
            }
        }
    });

    function Qs(e) {
        var t = e || {};
        t.page;
        return O(t, ["page"])
    }
    var qs = "ais.infiniteHits";

    function $s() {
        return "undefined" != typeof window && void 0 !== window.sessionStorage
    }

    function Vs(e) {
        return new ln(e)
    }
    return Vs.routers = Ws, Vs.stateMappings = Us, Vs.connectors = si, Vs.widgets = As, Vs.version = "4.15.0", Vs.createInfiniteHitsSessionStorageCache = function() {
        return {
            read: function(e) {
                var t = e.state;
                if (!$s()) return null;
                try {
                    var n = JSON.parse(window.sessionStorage.getItem(qs));
                    return n && Le(n.state, Qs(t)) ? n.hits : null
                } catch (e) {
                    if (e instanceof SyntaxError) try {
                        window.sessionStorage.removeItem(qs)
                    } catch (e) {}
                    return null
                }
            },
            write: function(e) {
                var t = e.state,
                    n = e.hits;
                if ($s()) try {
                    window.sessionStorage.setItem(qs, JSON.stringify({
                        state: Qs(t),
                        hits: n
                    }))
                } catch (e) {}
            }
        }
    }, Vs.highlight = bt, Vs.reverseHighlight = Rt, Vs.snippet = Pt, Vs.reverseSnippet = xt, Vs.insights = _t, Vs.middlewares = Ds, Vs
});
//# sourceMappingURL=instantsearch.production.min.js.map



// WEBPACK FOOTER //
// ./~/instantsearch.js/dist/instantsearch.production.min.js