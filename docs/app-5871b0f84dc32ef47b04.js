;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [143],
  {
    7228: function (e) {
      ;(e.exports = function (e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    2858: function (e) {
      ;(e.exports = function (e) {
        if (Array.isArray(e)) return e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    1506: function (e) {
      ;(e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    4575: function (e) {
      ;(e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    3913: function (e) {
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      ;(e.exports = function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    9713: function (e) {
      ;(e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    7154: function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t.apply(this, arguments)
        )
      }
      ;(e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    9754: function (e) {
      function t(n) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(n)
        )
      }
      ;(e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    2205: function (e, t, n) {
      var r = n(9489)
      ;(e.exports = function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t)
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    5354: function (e, t, n) {
      var r = n(9489)
      ;(e.exports = function (e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t)
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    5318: function (e) {
      ;(e.exports = function (e) {
        return e && e.__esModule ? e : { default: e }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    3884: function (e) {
      ;(e.exports = function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"]
        if (null != n) {
          var r,
            o,
            a = [],
            i = !0,
            s = !1
          try {
            for (
              n = n.call(e);
              !(i = (r = n.next()).done) &&
              (a.push(r.value), !t || a.length !== t);
              i = !0
            );
          } catch (u) {
            ;(s = !0), (o = u)
          } finally {
            try {
              i || null == n.return || n.return()
            } finally {
              if (s) throw o
            }
          }
          return a
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    521: function (e) {
      ;(e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        )
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    6479: function (e, t, n) {
      var r = n(7316)
      ;(e.exports = function (e, t) {
        if (null == e) return {}
        var n,
          o,
          a = r(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    7316: function (e) {
      ;(e.exports = function (e, t) {
        if (null == e) return {}
        var n,
          r,
          o = {},
          a = Object.keys(e)
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
        return o
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    8585: function (e, t, n) {
      var r = n(8).default,
        o = n(1506)
      ;(e.exports = function (e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          )
        return o(e)
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    9489: function (e) {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(n, r)
        )
      }
      ;(e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    3038: function (e, t, n) {
      var r = n(2858),
        o = n(3884),
        a = n(379),
        i = n(521)
      ;(e.exports = function (e, t) {
        return r(e) || o(e, t) || a(e, t) || i()
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    5179: function (e) {
      ;(e.exports = function (e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    8: function (e) {
      function t(n) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? ((e.exports = t =
                function (e) {
                  return typeof e
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = t =
                function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          t(n)
        )
      }
      ;(e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    379: function (e, t, n) {
      var r = n(7228)
      ;(e.exports = function (e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          )
        }
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    2393: function (e, t) {
      "use strict"
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        r = function (e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            o = t.href,
            a = t.origin,
            s = t.protocol,
            u = t.host,
            c = t.hostname,
            l = t.port,
            f = e.location.pathname
          !f && o && i && (f = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(f)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: s,
            host: u,
            hostname: c,
            port: l,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || "initial",
          }
        },
        o = function (e, t) {
          var o = [],
            a = r(e),
            i = !1,
            s = function () {}
          return {
            get location() {
              return a
            },
            get transitioning() {
              return i
            },
            _onTransitionComplete: function () {
              ;(i = !1), s()
            },
            listen: function (t) {
              o.push(t)
              var n = function () {
                ;(a = r(e)), t({ location: a, action: "POP" })
              }
              return (
                e.addEventListener("popstate", n),
                function () {
                  e.removeEventListener("popstate", n),
                    (o = o.filter(function (e) {
                      return e !== t
                    }))
                }
              )
            },
            navigate: function (t) {
              var u =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                c = u.state,
                l = u.replace,
                f = void 0 !== l && l
              if ("number" == typeof t) e.history.go(t)
              else {
                c = n({}, c, { key: Date.now() + "" })
                try {
                  i || f
                    ? e.history.replaceState(c, null, t)
                    : e.history.pushState(c, null, t)
                } catch (d) {
                  e.location[f ? "replace" : "assign"](t)
                }
              }
              ;(a = r(e)), (i = !0)
              var p = new Promise(function (e) {
                return (s = e)
              })
              return (
                o.forEach(function (e) {
                  return e({ location: a, action: "PUSH" })
                }),
                p
              )
            },
          }
        },
        a = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = e.indexOf("?"),
            n = {
              pathname: t > -1 ? e.substr(0, t) : e,
              search: t > -1 ? e.substr(t) : "",
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function (e, t) {},
            removeEventListener: function (e, t) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function (e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? "" : u
                r++,
                  o.push({ pathname: s, search: c.length ? "?" + c : c }),
                  a.push(e)
              },
              replaceState: function (e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? "" : u
                ;(o[r] = { pathname: s, search: c }), (a[r] = e)
              },
              go: function (e) {
                var t = r + e
                t < 0 || t > a.length - 1 || (r = t)
              },
            },
          }
        },
        i = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = o(i ? window : a()),
        u = s.navigate
      t.V5 = s
    },
    2098: function (e, t, n) {
      "use strict"
      ;(t.__esModule = !0),
        (t.shallowCompare =
          t.validateRedirect =
          t.insertParams =
          t.resolve =
          t.match =
          t.pick =
          t.startsWith =
            void 0)
      var r,
        o = n(1143),
        a = (r = o) && r.__esModule ? r : { default: r }
      var i = function (e, t) {
          return e.substr(0, t.length) === t
        },
        s = function (e, t) {
          for (
            var n = void 0,
              r = void 0,
              o = t.split("?")[0],
              i = d(o),
              s = "" === i[0],
              c = p(e),
              f = 0,
              h = c.length;
            f < h;
            f++
          ) {
            var v = !1,
              m = c[f].route
            if (m.default) r = { route: m, params: {}, uri: t }
            else {
              for (
                var y = d(m.path),
                  b = {},
                  w = Math.max(i.length, y.length),
                  O = 0;
                O < w;
                O++
              ) {
                var x = y[O],
                  P = i[O]
                if (l(x)) {
                  b[x.slice(1) || "*"] = i
                    .slice(O)
                    .map(decodeURIComponent)
                    .join("/")
                  break
                }
                if (void 0 === P) {
                  v = !0
                  break
                }
                var k = u.exec(x)
                if (k && !s) {
                  ;-1 === g.indexOf(k[1]) || (0, a.default)(!1)
                  var S = decodeURIComponent(P)
                  b[k[1]] = S
                } else if (x !== P) {
                  v = !0
                  break
                }
              }
              if (!v) {
                n = { route: m, params: b, uri: "/" + i.slice(0, O).join("/") }
                break
              }
            }
          }
          return n || r || null
        },
        u = /^:(.+)/,
        c = function (e) {
          return u.test(e)
        },
        l = function (e) {
          return e && "*" === e[0]
        },
        f = function (e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : d(e.path).reduce(function (e, t) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return "" === e
                    })(t)
                      ? c(t)
                        ? (e += 2)
                        : l(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  )
                }, 0),
            index: t,
          }
        },
        p = function (e) {
          return e.map(f).sort(function (e, t) {
            return e.score < t.score
              ? 1
              : e.score > t.score
              ? -1
              : e.index - t.index
          })
        },
        d = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/")
        },
        h = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            e +
            ((n = n.filter(function (e) {
              return e && e.length > 0
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          )
        },
        g = ["uri", "path"]
      ;(t.startsWith = i),
        (t.pick = s),
        (t.match = function (e, t) {
          return s([{ path: e }], t)
        }),
        (t.resolve = function (e, t) {
          if (i(e, "/")) return e
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            a = t.split("?")[0],
            s = d(r),
            u = d(a)
          if ("" === s[0]) return h(a, o)
          if (!i(s[0], ".")) {
            var c = u.concat(s).join("/")
            return h(("/" === a ? "" : "/") + c, o)
          }
          for (var l = u.concat(s), f = [], p = 0, g = l.length; p < g; p++) {
            var v = l[p]
            ".." === v ? f.pop() : "." !== v && f.push(v)
          }
          return h("/" + f.join("/"), o)
        }),
        (t.insertParams = function (e, t) {
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              d(r)
                .map(function (e) {
                  var n = u.exec(e)
                  return n ? t[n[1]] : e
                })
                .join("/"),
            s = t.location,
            c = (s = void 0 === s ? {} : s).search,
            l = (void 0 === c ? "" : c).split("?")[1] || ""
          return (i = h(i, a, l))
        }),
        (t.validateRedirect = function (e, t) {
          var n = function (e) {
            return c(e)
          }
          return (
            d(e).filter(n).sort().join("/") === d(t).filter(n).sort().join("/")
          )
        }),
        (t.shallowCompare = function (e, t) {
          var n = Object.keys(e)
          return (
            n.length === Object.keys(t).length &&
            n.every(function (n) {
              return t.hasOwnProperty(n) && e[n] === t[n]
            })
          )
        })
    },
    9771: function (e, t) {
      "use strict"
      function n() {
        return "undefined" == typeof window
          ? null
          : (window.navigator.languages && window.navigator.languages[0]) ||
              window.navigator.language ||
              window.navigator.browserLanguage ||
              window.navigator.userLanguage ||
              window.navigator.systemLanguage ||
              null
      }
      function r(e) {
        return e.toLowerCase().replace(/-/, "_")
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var o = function (e) {
        if (!e) return n()
        var t = e.languages,
          o = e.fallback
        if (!e.languages) return o
        var a = r(n())
        if (!a) return o
        var i = t.filter(function (e) {
          return r(e) === a
        })
        return i.length > 0
          ? i[0] || o
          : t.filter(function (e) {
              return (
                (n = e),
                (o = (t = a).length),
                (r = null == r ? 0 : r) < 0 ? (r = 0) : r > o && (r = o),
                (n = "".concat(n)),
                t.slice(r, r + n.length) == n
              )
              var t, n, r, o
            })[0] || o
      }
      t.default = o
    },
    4041: function () {
      "use strict"
      var e,
        t,
        n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        r =
          ((e = ["", ""]),
          (t = ["", ""]),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          ))
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      var a = (function () {
          function e() {
            for (
              var t = this, n = arguments.length, r = Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a]
            return (
              o(this, e),
              (this.tag = function (e) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o]
                return "function" == typeof e
                  ? t.interimTag.bind(t, e)
                  : "string" == typeof e
                  ? t.transformEndResult(e)
                  : ((e = e.map(t.transformString.bind(t))),
                    t.transformEndResult(
                      e.reduce(t.processSubstitutions.bind(t, r))
                    ))
              }),
              r.length > 0 && Array.isArray(r[0]) && (r = r[0]),
              (this.transformers = r.map(function (e) {
                return "function" == typeof e ? e() : e
              })),
              this.tag
            )
          }
          return (
            n(e, [
              {
                key: "interimTag",
                value: function (e, t) {
                  for (
                    var n = arguments.length,
                      o = Array(n > 2 ? n - 2 : 0),
                      a = 2;
                    a < n;
                    a++
                  )
                    o[a - 2] = arguments[a]
                  return this.tag(r, e.apply(void 0, [t].concat(o)))
                },
              },
              {
                key: "processSubstitutions",
                value: function (e, t, n) {
                  var r = this.transformSubstitution(e.shift(), t)
                  return "".concat(t, r, n)
                },
              },
              {
                key: "transformString",
                value: function (e) {
                  return this.transformers.reduce(function (e, t) {
                    return t.onString ? t.onString(e) : e
                  }, e)
                },
              },
              {
                key: "transformSubstitution",
                value: function (e, t) {
                  return this.transformers.reduce(function (e, n) {
                    return n.onSubstitution ? n.onSubstitution(e, t) : e
                  }, e)
                },
              },
              {
                key: "transformEndResult",
                value: function (e) {
                  return this.transformers.reduce(function (e, t) {
                    return t.onEndResult ? t.onEndResult(e) : e
                  }, e)
                },
              },
            ]),
            e
          )
        })(),
        i = a,
        s = { separator: "", conjunction: "", serial: !1 },
        u = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s
          return {
            onSubstitution: function (t, n) {
              if (Array.isArray(t)) {
                var r = t.length,
                  o = e.separator,
                  a = e.conjunction,
                  i = e.serial,
                  s = n.match(/(\n?[^\S\n]+)$/)
                if (
                  ((t = s ? t.join(o + s[1]) : t.join(o + " ")), a && r > 1)
                ) {
                  var u = t.lastIndexOf(o)
                  t = t.slice(0, u) + (i ? o : "") + " " + a + t.slice(u + 1)
                }
              }
              return t
            },
          }
        }
      function c(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
          return n
        }
        return Array.from(e)
      }
      var l = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "initial"
          return {
            onEndResult: function (t) {
              if ("initial" === e) {
                var n = t.match(/^[^\S\n]*(?=\S)/gm),
                  r =
                    n &&
                    Math.min.apply(
                      Math,
                      c(
                        n.map(function (e) {
                          return e.length
                        })
                      )
                    )
                if (r) {
                  var o = new RegExp("^.{" + r + "}", "gm")
                  return t.replace(o, "")
                }
                return t
              }
              if ("all" === e) return t.replace(/^[^\S\n]+/gm, "")
              throw new Error("Unknown type: " + e)
            },
          }
        },
        f = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
          return {
            onEndResult: function (t) {
              if ("" === e) return t.trim()
              if ("start" === (e = e.toLowerCase()) || "left" === e)
                return t.replace(/^\s*/, "")
              if ("end" === e || "right" === e) return t.replace(/\s*$/, "")
              throw new Error("Side not supported: " + e)
            },
          }
        },
        p =
          (new i(u({ separator: "," }), l, f),
          new i(u({ separator: ",", conjunction: "and" }), l, f),
          new i(u({ separator: ",", conjunction: "or" }), l, f),
          function (e) {
            return {
              onSubstitution: function (t, n) {
                if (null == e || "string" != typeof e)
                  throw new Error(
                    "You need to specify a string character to split by."
                  )
                return (
                  "string" == typeof t && t.includes(e) && (t = t.split(e)), t
                )
              },
            }
          }),
        d = function (e) {
          return null != e && !Number.isNaN(e) && "boolean" != typeof e
        },
        h = function () {
          return {
            onSubstitution: function (e) {
              return Array.isArray(e) ? e.filter(d) : d(e) ? e : ""
            },
          }
        },
        g =
          (new i(p("\n"), h, u, l, f),
          function (e, t) {
            return {
              onSubstitution: function (n, r) {
                if (null == e || null == t)
                  throw new Error(
                    "replaceSubstitutionTransformer requires at least 2 arguments."
                  )
                return null == n ? n : n.toString().replace(e, t)
              },
            }
          }),
        v =
          (new i(
            p("\n"),
            u,
            l,
            f,
            g(/&/g, "&amp;"),
            g(/</g, "&lt;"),
            g(/>/g, "&gt;"),
            g(/"/g, "&quot;"),
            g(/'/g, "&#x27;"),
            g(/`/g, "&#x60;")
          ),
          function (e, t) {
            return {
              onEndResult: function (n) {
                if (null == e || null == t)
                  throw new Error(
                    "replaceResultTransformer requires at least 2 arguments."
                  )
                return n.replace(e, t)
              },
            }
          })
      new i(v(/(?:\n(?:\s*))+/g, " "), f),
        new i(v(/(?:\n\s*)/g, ""), f),
        new i(u({ separator: "," }), v(/(?:\s+)/g, " "), f),
        new i(u({ separator: ",", conjunction: "or" }), v(/(?:\s+)/g, " "), f),
        new i(u({ separator: ",", conjunction: "and" }), v(/(?:\s+)/g, " "), f),
        new i(u, l, f),
        new i(u, v(/(?:\s+)/g, " "), f),
        new i(l, f),
        new i(l("all"), f)
    },
    6494: function (e) {
      "use strict"
      e.exports = Object.assign
    },
    6678: function (e, t, n) {
      "use strict"
      var r = n(8),
        o = n(4575),
        a = n(3913),
        i = n(1506),
        s = n(2205),
        u = n(8585),
        c = n(9754),
        l = n(9713),
        f = n(3038)
      function p(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e }
      }
      var d = p(r),
        h = p(o),
        g = p(a),
        v = p(i),
        m = p(s),
        y = p(u),
        b = p(c),
        w = p(l),
        O = p(f)
      function x(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var k = {
          type: "logger",
          log: function (e) {
            this.output("log", e)
          },
          warn: function (e) {
            this.output("warn", e)
          },
          error: function (e) {
            this.output("error", e)
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t)
          },
        },
        S = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            h.default(this, e), this.init(t, n)
          }
          return (
            g.default(e, [
              {
                key: "init",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  ;(this.prefix = t.prefix || "i18next:"),
                    (this.logger = e || k),
                    (this.options = t),
                    (this.debug = t.debug)
                },
              },
              {
                key: "setDebug",
                value: function (e) {
                  this.debug = e
                },
              },
              {
                key: "log",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, "log", "", !0)
                },
              },
              {
                key: "warn",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, "warn", "", !0)
                },
              },
              {
                key: "error",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, "error", "")
                },
              },
              {
                key: "deprecate",
                value: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                },
              },
              {
                key: "forward",
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ("string" == typeof e[0] &&
                        (e[0] = ""
                          .concat(n)
                          .concat(this.prefix, " ")
                          .concat(e[0])),
                      this.logger[t](e))
                },
              },
              {
                key: "create",
                value: function (t) {
                  return new e(
                    this.logger,
                    P(
                      P(
                        {},
                        { prefix: "".concat(this.prefix, ":").concat(t, ":") }
                      ),
                      this.options
                    )
                  )
                },
              },
            ]),
            e
          )
        })(),
        j = new S(),
        E = (function () {
          function e() {
            h.default(this, e), (this.observers = {})
          }
          return (
            g.default(e, [
              {
                key: "on",
                value: function (e, t) {
                  var n = this
                  return (
                    e.split(" ").forEach(function (e) {
                      ;(n.observers[e] = n.observers[e] || []),
                        n.observers[e].push(t)
                    }),
                    this
                  )
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  this.observers[e] &&
                    (t
                      ? (this.observers[e] = this.observers[e].filter(function (
                          e
                        ) {
                          return e !== t
                        }))
                      : delete this.observers[e])
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r]
                  if (this.observers[e]) {
                    var o = [].concat(this.observers[e])
                    o.forEach(function (e) {
                      e.apply(void 0, n)
                    })
                  }
                  if (this.observers["*"]) {
                    var a = [].concat(this.observers["*"])
                    a.forEach(function (t) {
                      t.apply(t, [e].concat(n))
                    })
                  }
                },
              },
            ]),
            e
          )
        })()
      function R() {
        var e,
          t,
          n = new Promise(function (n, r) {
            ;(e = n), (t = r)
          })
        return (n.resolve = e), (n.reject = t), n
      }
      function C(e) {
        return null == e ? "" : "" + e
      }
      function L(e, t, n) {
        e.forEach(function (e) {
          t[e] && (n[e] = t[e])
        })
      }
      function _(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
        }
        function o() {
          return !e || "string" == typeof e
        }
        for (
          var a = "string" != typeof t ? [].concat(t) : t.split(".");
          a.length > 1;

        ) {
          if (o()) return {}
          var i = r(a.shift())
          !e[i] && n && (e[i] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {})
        }
        return o() ? {} : { obj: e, k: r(a.shift()) }
      }
      function N(e, t, n) {
        var r = _(e, t, Object)
        r.obj[r.k] = n
      }
      function D(e, t) {
        var n = _(e, t),
          r = n.obj,
          o = n.k
        if (r) return r[o]
      }
      function I(e, t, n) {
        var r = D(e, n)
        return void 0 !== r ? r : D(t, n)
      }
      function T(e, t, n) {
        for (var r in t)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in e
              ? "string" == typeof e[r] ||
                e[r] instanceof String ||
                "string" == typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : T(e[r], t[r], n)
              : (e[r] = t[r]))
        return e
      }
      function A(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      }
      var M = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      }
      function F(e) {
        return "string" == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return M[e]
            })
          : e
      }
      var U =
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf("MSIE") > -1,
        W = [" ", ",", "?", "!", ";"]
      function H(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function V(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(e)
          if (t) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      function z(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "."
        if (e) {
          if (e[t]) return e[t]
          for (var r = t.split(n), o = e, a = 0; a < r.length; ++a) {
            if (!o) return
            if ("string" == typeof o[r[a]] && a + 1 < r.length) return
            if (void 0 === o[r[a]]) {
              for (
                var i = 2, s = r.slice(a, a + i).join(n), u = o[s];
                void 0 === u && r.length > a + i;

              )
                i++, (u = o[(s = r.slice(a, a + i).join(n))])
              if (void 0 === u) return
              if ("string" == typeof u) return u
              if (s && "string" == typeof u[s]) return u[s]
              var c = r.slice(a + i).join(n)
              return c ? z(u, c, n) : void 0
            }
            o = o[r[a]]
          }
          return o
        }
      }
      var K = (function (e) {
          m.default(n, e)
          var t = V(n)
          function n(e) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ["translation"], defaultNS: "translation" }
            return (
              h.default(this, n),
              (r = t.call(this)),
              U && E.call(v.default(r)),
              (r.data = e || {}),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              void 0 === r.options.ignoreJSONStructure &&
                (r.options.ignoreJSONStructure = !0),
              r
            )
          }
          return (
            g.default(n, [
              {
                key: "addNamespaces",
                value: function (e) {
                  this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                },
              },
              {
                key: "removeNamespaces",
                value: function (e) {
                  var t = this.options.ns.indexOf(e)
                  t > -1 && this.options.ns.splice(t, 1)
                },
              },
              {
                key: "getResource",
                value: function (e, t, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    o =
                      void 0 !== r.keySeparator
                        ? r.keySeparator
                        : this.options.keySeparator,
                    a =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    i = [e, t]
                  n && "string" != typeof n && (i = i.concat(n)),
                    n &&
                      "string" == typeof n &&
                      (i = i.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (i = e.split("."))
                  var s = D(this.data, i)
                  return s || !a || "string" != typeof n
                    ? s
                    : z(this.data && this.data[e] && this.data[e][t], n, o)
                },
              },
              {
                key: "addResource",
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    a = this.options.keySeparator
                  void 0 === a && (a = ".")
                  var i = [e, t]
                  n && (i = i.concat(a ? n.split(a) : n)),
                    e.indexOf(".") > -1 &&
                      ((r = t), (t = (i = e.split("."))[1])),
                    this.addNamespaces(t),
                    N(this.data, i, r),
                    o.silent || this.emit("added", e, t, n, r)
                },
              },
              {
                key: "addResources",
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : { silent: !1 }
                  for (var o in n)
                    ("string" != typeof n[o] &&
                      "[object Array]" !==
                        Object.prototype.toString.apply(n[o])) ||
                      this.addResource(e, t, o, n[o], { silent: !0 })
                  r.silent || this.emit("added", e, t, n)
                },
              },
              {
                key: "addResourceBundle",
                value: function (e, t, n, r, o) {
                  var a =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    i = [e, t]
                  e.indexOf(".") > -1 &&
                    ((r = n), (n = t), (t = (i = e.split("."))[1])),
                    this.addNamespaces(t)
                  var s = D(this.data, i) || {}
                  r ? T(s, n, o) : (s = q(q({}, s), n)),
                    N(this.data, i, s),
                    a.silent || this.emit("added", e, t, n)
                },
              },
              {
                key: "removeResourceBundle",
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                },
              },
              {
                key: "hasResourceBundle",
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t)
                },
              },
              {
                key: "getResourceBundle",
                value: function (e, t) {
                  return (
                    t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI
                      ? q(q({}, {}), this.getResource(e, t))
                      : this.getResource(e, t)
                  )
                },
              },
              {
                key: "getDataByLanguage",
                value: function (e) {
                  return this.data[e]
                },
              },
              {
                key: "hasLanguageSomeTranslations",
                value: function (e) {
                  var t = this.getDataByLanguage(e)
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0
                  })
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.data
                },
              },
            ]),
            n
          )
        })(E),
        B = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e
          },
          handle: function (e, t, n, r, o) {
            var a = this
            return (
              e.forEach(function (e) {
                a.processors[e] && (t = a.processors[e].process(t, n, r, o))
              }),
              t
            )
          },
        }
      function J(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function Z(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(e)
          if (t) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      var $ = {},
        G = (function (e) {
          m.default(n, e)
          var t = Z(n)
          function n(e) {
            var r,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
            return (
              h.default(this, n),
              (r = t.call(this)),
              U && E.call(v.default(r)),
              L(
                [
                  "resourceStore",
                  "languageUtils",
                  "pluralResolver",
                  "interpolator",
                  "backendConnector",
                  "i18nFormat",
                  "utils",
                ],
                e,
                v.default(r)
              ),
              (r.options = o),
              void 0 === r.options.keySeparator &&
                (r.options.keySeparator = "."),
              (r.logger = j.create("translator")),
              r
            )
          }
          return (
            g.default(
              n,
              [
                {
                  key: "changeLanguage",
                  value: function (e) {
                    e && (this.language = e)
                  },
                },
                {
                  key: "exists",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} }
                    if (null == e) return !1
                    var n = this.resolve(e, t)
                    return n && void 0 !== n.res
                  },
                },
                {
                  key: "extractFromKey",
                  value: function (e, t) {
                    var n =
                      void 0 !== t.nsSeparator
                        ? t.nsSeparator
                        : this.options.nsSeparator
                    void 0 === n && (n = ":")
                    var r =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS,
                      a = n && e.indexOf(n) > -1,
                      i = !(
                        this.options.userDefinedKeySeparator ||
                        t.keySeparator ||
                        this.options.userDefinedNsSeparator ||
                        t.nsSeparator ||
                        (function (e, t, n) {
                          ;(t = t || ""), (n = n || "")
                          var r = W.filter(function (e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0
                          })
                          if (0 === r.length) return !0
                          var o = new RegExp(
                              "(".concat(
                                r
                                  .map(function (e) {
                                    return "?" === e ? "\\?" : e
                                  })
                                  .join("|"),
                                ")"
                              )
                            ),
                            a = !o.test(e)
                          if (!a) {
                            var i = e.indexOf(n)
                            i > 0 && !o.test(e.substring(0, i)) && (a = !0)
                          }
                          return a
                        })(e, n, r)
                      )
                    if (a && !i) {
                      var s = e.match(this.interpolator.nestingRegexp)
                      if (s && s.length > 0) return { key: e, namespaces: o }
                      var u = e.split(n)
                      ;(n !== r ||
                        (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                        (o = u.shift()),
                        (e = u.join(r))
                    }
                    return (
                      "string" == typeof o && (o = [o]),
                      { key: e, namespaces: o }
                    )
                  },
                },
                {
                  key: "translate",
                  value: function (e, t, r) {
                    var o = this
                    if (
                      ("object" !== d.default(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t =
                          this.options.overloadTranslationOptionHandler(
                            arguments
                          )),
                      t || (t = {}),
                      null == e)
                    )
                      return ""
                    Array.isArray(e) || (e = [String(e)])
                    var a =
                        void 0 !== t.keySeparator
                          ? t.keySeparator
                          : this.options.keySeparator,
                      i = this.extractFromKey(e[e.length - 1], t),
                      s = i.key,
                      u = i.namespaces,
                      c = u[u.length - 1],
                      l = t.lng || this.language,
                      f =
                        t.appendNamespaceToCIMode ||
                        this.options.appendNamespaceToCIMode
                    if (l && "cimode" === l.toLowerCase()) {
                      if (f) {
                        var p = t.nsSeparator || this.options.nsSeparator
                        return c + p + s
                      }
                      return s
                    }
                    var h = this.resolve(e, t),
                      g = h && h.res,
                      v = (h && h.usedKey) || s,
                      m = (h && h.exactUsedKey) || s,
                      y = Object.prototype.toString.apply(g),
                      b = [
                        "[object Number]",
                        "[object Function]",
                        "[object RegExp]",
                      ],
                      w =
                        void 0 !== t.joinArrays
                          ? t.joinArrays
                          : this.options.joinArrays,
                      O = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      x =
                        "string" != typeof g &&
                        "boolean" != typeof g &&
                        "number" != typeof g
                    if (
                      O &&
                      g &&
                      x &&
                      b.indexOf(y) < 0 &&
                      ("string" != typeof w || "[object Array]" !== y)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects)
                        return (
                          this.options.returnedObjectHandler ||
                            this.logger.warn(
                              "accessing an object - but returnObjects options is not enabled!"
                            ),
                          this.options.returnedObjectHandler
                            ? this.options.returnedObjectHandler(
                                v,
                                g,
                                Q(Q({}, t), {}, { ns: u })
                              )
                            : "key '"
                                .concat(s, " (")
                                .concat(
                                  this.language,
                                  ")' returned an object instead of string."
                                )
                        )
                      if (a) {
                        var P = "[object Array]" === y,
                          k = P ? [] : {},
                          S = P ? m : v
                        for (var j in g)
                          if (Object.prototype.hasOwnProperty.call(g, j)) {
                            var E = "".concat(S).concat(a).concat(j)
                            ;(k[j] = this.translate(
                              E,
                              Q(Q({}, t), { joinArrays: !1, ns: u })
                            )),
                              k[j] === E && (k[j] = g[j])
                          }
                        g = k
                      }
                    } else if (
                      O &&
                      "string" == typeof w &&
                      "[object Array]" === y
                    )
                      (g = g.join(w)) &&
                        (g = this.extendTranslation(g, e, t, r))
                    else {
                      var R = !1,
                        C = !1,
                        L = void 0 !== t.count && "string" != typeof t.count,
                        _ = n.hasDefaultValue(t),
                        N = L
                          ? this.pluralResolver.getSuffix(l, t.count, t)
                          : "",
                        D = t["defaultValue".concat(N)] || t.defaultValue
                      !this.isValidLookup(g) && _ && ((R = !0), (g = D)),
                        this.isValidLookup(g) || ((C = !0), (g = s))
                      var I =
                          t.missingKeyNoValueFallbackToKey ||
                          this.options.missingKeyNoValueFallbackToKey,
                        T = I && C ? void 0 : g,
                        A = _ && D !== g && this.options.updateMissing
                      if (C || R || A) {
                        if (
                          (this.logger.log(
                            A ? "updateKey" : "missingKey",
                            l,
                            c,
                            s,
                            A ? D : g
                          ),
                          a)
                        ) {
                          var M = this.resolve(
                            s,
                            Q(Q({}, t), {}, { keySeparator: !1 })
                          )
                          M &&
                            M.res &&
                            this.logger.warn(
                              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                            )
                        }
                        var F = [],
                          U = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language
                          )
                        if (
                          "fallback" === this.options.saveMissingTo &&
                          U &&
                          U[0]
                        )
                          for (var W = 0; W < U.length; W++) F.push(U[W])
                        else
                          "all" === this.options.saveMissingTo
                            ? (F = this.languageUtils.toResolveHierarchy(
                                t.lng || this.language
                              ))
                            : F.push(t.lng || this.language)
                        var H = function (e, n, r) {
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(
                                e,
                                c,
                                n,
                                A ? r : T,
                                A,
                                t
                              )
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(
                                e,
                                c,
                                n,
                                A ? r : T,
                                A,
                                t
                              ),
                            o.emit("missingKey", e, c, n, g)
                        }
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && L
                            ? F.forEach(function (e) {
                                o.pluralResolver
                                  .getSuffixes(e)
                                  .forEach(function (n) {
                                    H(
                                      [e],
                                      s + n,
                                      t["defaultValue".concat(n)] || D
                                    )
                                  })
                              })
                            : H(F, s, D))
                      }
                      ;(g = this.extendTranslation(g, e, t, h, r)),
                        C &&
                          g === s &&
                          this.options.appendNamespaceToMissingKey &&
                          (g = "".concat(c, ":").concat(s)),
                        (C || R) &&
                          this.options.parseMissingKeyHandler &&
                          (g = this.options.parseMissingKeyHandler(g))
                    }
                    return g
                  },
                },
                {
                  key: "extendTranslation",
                  value: function (e, t, n, r, o) {
                    var a = this
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        n,
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r }
                      )
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          Q(Q({}, n), {
                            interpolation: Q(
                              Q({}, this.options.interpolation),
                              n.interpolation
                            ),
                          })
                        )
                      var i,
                        s =
                          (n.interpolation &&
                            n.interpolation.skipOnVariables) ||
                          this.options.interpolation.skipOnVariables
                      if (s) {
                        var u = e.match(this.interpolator.nestingRegexp)
                        i = u && u.length
                      }
                      var c =
                        n.replace && "string" != typeof n.replace
                          ? n.replace
                          : n
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (c = Q(
                            Q({}, this.options.interpolation.defaultVariables),
                            c
                          )),
                        (e = this.interpolator.interpolate(
                          e,
                          c,
                          n.lng || this.language,
                          n
                        )),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp)
                        i < (l && l.length) && (n.nest = !1)
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (
                              var e = arguments.length, r = new Array(e), i = 0;
                              i < e;
                              i++
                            )
                              r[i] = arguments[i]
                            return o && o[0] === r[0] && !n.context
                              ? (a.logger.warn(
                                  "It seems you are nesting recursively key: "
                                    .concat(r[0], " in key: ")
                                    .concat(t[0])
                                ),
                                null)
                              : a.translate.apply(a, r.concat([t]))
                          },
                          n
                        )),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = "string" == typeof f ? [f] : f
                    return (
                      null != e &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = B.handle(
                          p,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? Q({ i18nResolved: r }, n)
                            : n,
                          this
                        )),
                      e
                    )
                  },
                },
                {
                  key: "resolve",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      a,
                      i = this,
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                    return (
                      "string" == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!i.isValidLookup(t)) {
                          var u = i.extractFromKey(e, s),
                            c = u.key
                          n = c
                          var l = u.namespaces
                          i.options.fallbackNS &&
                            (l = l.concat(i.options.fallbackNS))
                          var f =
                              void 0 !== s.count && "string" != typeof s.count,
                            p =
                              void 0 !== s.context &&
                              ("string" == typeof s.context ||
                                "number" == typeof s.context) &&
                              "" !== s.context,
                            d = s.lngs
                              ? s.lngs
                              : i.languageUtils.toResolveHierarchy(
                                  s.lng || i.language,
                                  s.fallbackLng
                                )
                          l.forEach(function (e) {
                            i.isValidLookup(t) ||
                              ((a = e),
                              !$["".concat(d[0], "-").concat(e)] &&
                                i.utils &&
                                i.utils.hasLoadedNamespace &&
                                !i.utils.hasLoadedNamespace(a) &&
                                (($["".concat(d[0], "-").concat(e)] = !0),
                                i.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(
                                      d.join(", "),
                                      '" won\'t get resolved as namespace "'
                                    )
                                    .concat(a, '" was not yet loaded'),
                                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                )),
                              d.forEach(function (n) {
                                if (!i.isValidLookup(t)) {
                                  o = n
                                  var a,
                                    u,
                                    l = c,
                                    d = [l]
                                  if (
                                    i.i18nFormat &&
                                    i.i18nFormat.addLookupKeys
                                  )
                                    i.i18nFormat.addLookupKeys(d, c, n, e, s)
                                  else
                                    f &&
                                      (a = i.pluralResolver.getSuffix(
                                        n,
                                        s.count,
                                        s
                                      )),
                                      f && p && d.push(l + a),
                                      p &&
                                        d.push(
                                          (l += ""
                                            .concat(i.options.contextSeparator)
                                            .concat(s.context))
                                        ),
                                      f && d.push((l += a))
                                  for (; (u = d.pop()); )
                                    i.isValidLookup(t) ||
                                      ((r = u), (t = i.getResource(n, e, u, s)))
                                }
                              }))
                          })
                        }
                      }),
                      {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: a,
                      }
                    )
                  },
                },
                {
                  key: "isValidLookup",
                  value: function (e) {
                    return !(
                      void 0 === e ||
                      (!this.options.returnNull && null === e) ||
                      (!this.options.returnEmptyString && "" === e)
                    )
                  },
                },
                {
                  key: "getResource",
                  value: function (e, t, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {}
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r)
                  },
                },
              ],
              [
                {
                  key: "hasDefaultValue",
                  value: function (e) {
                    var t = "defaultValue"
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, t.length) &&
                        void 0 !== e[n]
                      )
                        return !0
                    return !1
                  },
                },
              ]
            ),
            n
          )
        })(E)
      function Y(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
      var X = (function () {
          function e(t) {
            h.default(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = j.create("languageUtils"))
          }
          return (
            g.default(e, [
              {
                key: "getScriptPartFromCode",
                value: function (e) {
                  if (!e || e.indexOf("-") < 0) return null
                  var t = e.split("-")
                  return 2 === t.length
                    ? null
                    : (t.pop(),
                      "x" === t[t.length - 1].toLowerCase()
                        ? null
                        : this.formatLanguageCode(t.join("-")))
                },
              },
              {
                key: "getLanguagePartFromCode",
                value: function (e) {
                  if (!e || e.indexOf("-") < 0) return e
                  var t = e.split("-")
                  return this.formatLanguageCode(t[0])
                },
              },
              {
                key: "formatLanguageCode",
                value: function (e) {
                  if ("string" == typeof e && e.indexOf("-") > -1) {
                    var t = [
                        "hans",
                        "hant",
                        "latn",
                        "cyrl",
                        "cans",
                        "mong",
                        "arab",
                      ],
                      n = e.split("-")
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase()
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = Y(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          "sgn" !== n[0] &&
                            2 === n[2].length &&
                            (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 &&
                            (n[1] = Y(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 &&
                            (n[2] = Y(n[2].toLowerCase()))),
                      n.join("-")
                    )
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng
                    ? e.toLowerCase()
                    : e
                },
              },
              {
                key: "isSupportedCode",
                value: function (e) {
                  return (
                    ("languageOnly" === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  )
                },
              },
              {
                key: "getBestMatchFromCodes",
                value: function (e) {
                  var t,
                    n = this
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e)
                          ;(n.options.supportedLngs && !n.isSupportedCode(r)) ||
                            (t = r)
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e)
                            if (n.isSupportedCode(r)) return (t = r)
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e
                            })
                          }
                        }),
                      t ||
                        (t = this.getFallbackCodes(
                          this.options.fallbackLng
                        )[0]),
                      t)
                    : null
                },
              },
              {
                key: "getFallbackCodes",
                value: function (e, t) {
                  if (!e) return []
                  if (
                    ("function" == typeof e && (e = e(t)),
                    "string" == typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                  )
                    return e
                  if (!t) return e.default || []
                  var n = e[t]
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  )
                },
              },
              {
                key: "toResolveHierarchy",
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(
                      t || this.options.fallbackLng || [],
                      e
                    ),
                    o = [],
                    a = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              "rejecting language code not found in supportedLngs: ".concat(
                                e
                              )
                            ))
                    }
                  return (
                    "string" == typeof e && e.indexOf("-") > -1
                      ? ("languageOnly" !== this.options.load &&
                          a(this.formatLanguageCode(e)),
                        "languageOnly" !== this.options.load &&
                          "currentOnly" !== this.options.load &&
                          a(this.getScriptPartFromCode(e)),
                        "currentOnly" !== this.options.load &&
                          a(this.getLanguagePartFromCode(e)))
                      : "string" == typeof e && a(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      o.indexOf(e) < 0 && a(n.formatLanguageCode(e))
                    }),
                    o
                  )
                },
              },
            ]),
            e
          )
        })(),
        ee = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        te = {
          1: function (e) {
            return Number(e > 1)
          },
          2: function (e) {
            return Number(1 != e)
          },
          3: function (e) {
            return 0
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            )
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
          },
          9: function (e) {
            return Number(e >= 2)
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                ? 1
                : e > 2 && e < 20
                ? 2
                : 3
            )
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11)
          },
          13: function (e) {
            return Number(0 !== e)
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1)
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            )
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
            )
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                ? 2
                : e % 100 == 3 || e % 100 == 4
                ? 3
                : 0
            )
          },
          22: function (e) {
            return Number(
              1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
            )
          },
        },
        ne = ["v1", "v2", "v3"],
        re = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }
      function oe() {
        var e = {}
        return (
          ee.forEach(function (t) {
            t.lngs.forEach(function (n) {
              e[n] = { numbers: t.nr, plurals: te[t.fc] }
            })
          }),
          e
        )
      }
      var ae = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          h.default(this, e),
            (this.languageUtils = t),
            (this.options = n),
            (this.logger = j.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              "v4" !== this.options.compatibilityJSON) ||
              ("undefined" != typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
              )),
            (this.rules = oe())
        }
        return (
          g.default(e, [
            {
              key: "addRule",
              value: function (e, t) {
                this.rules[e] = t
              },
            },
            {
              key: "getRule",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                if (this.shouldUseIntlApi())
                  try {
                    return new Intl.PluralRules(e, {
                      type: t.ordinal ? "ordinal" : "cardinal",
                    })
                  } catch (n) {
                    return
                  }
                return (
                  this.rules[e] ||
                  this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                )
              },
            },
            {
              key: "needsPlural",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this.getRule(e, t)
                return this.shouldUseIntlApi()
                  ? n && n.resolvedOptions().pluralCategories.length > 1
                  : n && n.numbers.length > 1
              },
            },
            {
              key: "getPluralFormsOfKey",
              value: function (e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                return this.getSuffixes(e, n).map(function (e) {
                  return "".concat(t).concat(e)
                })
              },
            },
            {
              key: "getSuffixes",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.getRule(e, n)
                return r
                  ? this.shouldUseIntlApi()
                    ? r
                        .resolvedOptions()
                        .pluralCategories.sort(function (e, t) {
                          return re[e] - re[t]
                        })
                        .map(function (e) {
                          return "".concat(t.options.prepend).concat(e)
                        })
                    : r.numbers.map(function (r) {
                        return t.getSuffix(e, r, n)
                      })
                  : []
              },
            },
            {
              key: "getSuffix",
              value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.getRule(e, n)
                return r
                  ? this.shouldUseIntlApi()
                    ? "".concat(this.options.prepend).concat(r.select(t))
                    : this.getSuffixRetroCompatible(r, t)
                  : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "")
              },
            },
            {
              key: "getSuffixRetroCompatible",
              value: function (e, t) {
                var n = this,
                  r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                  o = e.numbers[r]
                this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0] &&
                  (2 === o ? (o = "plural") : 1 === o && (o = ""))
                var a = function () {
                  return n.options.prepend && o.toString()
                    ? n.options.prepend + o.toString()
                    : o.toString()
                }
                return "v1" === this.options.compatibilityJSON
                  ? 1 === o
                    ? ""
                    : "number" == typeof o
                    ? "_plural_".concat(o.toString())
                    : a()
                  : "v2" === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === e.numbers.length &&
                      1 === e.numbers[0])
                  ? a()
                  : this.options.prepend && r.toString()
                  ? this.options.prepend + r.toString()
                  : r.toString()
              },
            },
            {
              key: "shouldUseIntlApi",
              value: function () {
                return !ne.includes(this.options.compatibilityJSON)
              },
            },
          ]),
          e
        )
      })()
      function ie(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ie(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ie(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var ue = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          h.default(this, e),
            (this.logger = j.create("interpolator")),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e
              }),
            this.init(t)
        }
        return (
          g.default(e, [
            {
              key: "init",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                e.interpolation || (e.interpolation = { escapeValue: !0 })
                var t = e.interpolation
                ;(this.escape = void 0 !== t.escape ? t.escape : F),
                  (this.escapeValue =
                    void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix
                    ? A(t.prefix)
                    : t.prefixEscaped || "{{"),
                  (this.suffix = t.suffix
                    ? A(t.suffix)
                    : t.suffixEscaped || "}}"),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ","),
                  (this.unescapePrefix = t.unescapeSuffix
                    ? ""
                    : t.unescapePrefix || "-"),
                  (this.unescapeSuffix = this.unescapePrefix
                    ? ""
                    : t.unescapeSuffix || ""),
                  (this.nestingPrefix = t.nestingPrefix
                    ? A(t.nestingPrefix)
                    : t.nestingPrefixEscaped || A("$t(")),
                  (this.nestingSuffix = t.nestingSuffix
                    ? A(t.nestingSuffix)
                    : t.nestingSuffixEscaped || A(")")),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ","),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat =
                    void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp()
              },
            },
            {
              key: "reset",
              value: function () {
                this.options && this.init(this.options)
              },
            },
            {
              key: "resetRegExp",
              value: function () {
                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix)
                this.regexp = new RegExp(e, "g")
                var t = ""
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, "(.+?)")
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix)
                this.regexpUnescape = new RegExp(t, "g")
                var n = ""
                  .concat(this.nestingPrefix, "(.+?)")
                  .concat(this.nestingSuffix)
                this.nestingRegexp = new RegExp(n, "g")
              },
            },
            {
              key: "interpolate",
              value: function (e, t, n, r) {
                var o,
                  a,
                  i,
                  s = this,
                  u =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {}
                function c(e) {
                  return e.replace(/\$/g, "$$$$")
                }
                var l = function (e) {
                  if (e.indexOf(s.formatSeparator) < 0) {
                    var o = I(t, u, e)
                    return s.alwaysFormat
                      ? s.format(
                          o,
                          void 0,
                          n,
                          se(se(se({}, r), t), {}, { interpolationkey: e })
                        )
                      : o
                  }
                  var a = e.split(s.formatSeparator),
                    i = a.shift().trim(),
                    c = a.join(s.formatSeparator).trim()
                  return s.format(
                    I(t, u, i),
                    c,
                    n,
                    se(se(se({}, r), t), {}, { interpolationkey: i })
                  )
                }
                this.resetRegExp()
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    (r && r.interpolation && r.interpolation.skipOnVariables) ||
                    this.options.interpolation.skipOnVariables
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return c(e)
                      },
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? c(s.escape(e)) : c(e)
                      },
                    },
                  ].forEach(function (t) {
                    for (i = 0; (o = t.regex.exec(e)); ) {
                      if (void 0 === (a = l(o[1].trim())))
                        if ("function" == typeof f) {
                          var n = f(e, o, r)
                          a = "string" == typeof n ? n : ""
                        } else {
                          if (p) {
                            a = o[0]
                            continue
                          }
                          s.logger.warn(
                            "missed to pass in variable "
                              .concat(o[1], " for interpolating ")
                              .concat(e)
                          ),
                            (a = "")
                        }
                      else
                        "string" == typeof a ||
                          s.useRawValueToEscape ||
                          (a = C(a))
                      var u = t.safeValue(a)
                      if (
                        ((e = e.replace(o[0], u)),
                        p
                          ? ((t.regex.lastIndex += u.length),
                            (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++i >= s.maxReplaces)
                      )
                        break
                    }
                  }),
                  e
                )
              },
            },
            {
              key: "nest",
              value: function (e, t) {
                var n,
                  r,
                  o = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  i = se({}, a)
                function s(e, t) {
                  var n = this.nestingOptionsSeparator
                  if (e.indexOf(n) < 0) return e
                  var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                    o = "{".concat(r[1])
                  ;(e = r[0]),
                    (o = (o = this.interpolate(o, i)).replace(/'/g, '"'))
                  try {
                    ;(i = JSON.parse(o)), t && (i = se(se({}, t), i))
                  } catch (a) {
                    return (
                      this.logger.warn(
                        "failed parsing options string in nesting for key ".concat(
                          e
                        ),
                        a
                      ),
                      "".concat(e).concat(n).concat(o)
                    )
                  }
                  return delete i.defaultValue, e
                }
                for (
                  i.applyPostProcessor = !1, delete i.defaultValue;
                  (n = this.nestingRegexp.exec(e));

                ) {
                  var u = [],
                    c = !1
                  if (
                    -1 !== n[0].indexOf(this.formatSeparator) &&
                    !/{.*}/.test(n[1])
                  ) {
                    var l = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim()
                    })
                    ;(n[1] = l.shift()), (u = l), (c = !0)
                  }
                  if (
                    (r = t(s.call(this, n[1].trim(), i), i)) &&
                    n[0] === e &&
                    "string" != typeof r
                  )
                    return r
                  "string" != typeof r && (r = C(r)),
                    r ||
                      (this.logger.warn(
                        "missed to resolve "
                          .concat(n[1], " for nesting ")
                          .concat(e)
                      ),
                      (r = "")),
                    c &&
                      (r = u.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          a.lng,
                          se(se({}, a), {}, { interpolationkey: n[1].trim() })
                        )
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0)
                }
                return e
              },
            },
          ]),
          e
        )
      })()
      function ce(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var fe = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          h.default(this, e),
            (this.logger = j.create("formatter")),
            (this.options = t),
            (this.formats = {
              number: function (e, t, n) {
                return new Intl.NumberFormat(t, n).format(e)
              },
              currency: function (e, t, n) {
                return new Intl.NumberFormat(
                  t,
                  le(le({}, n), {}, { style: "currency" })
                ).format(e)
              },
              datetime: function (e, t, n) {
                return new Intl.DateTimeFormat(t, le({}, n)).format(e)
              },
              relativetime: function (e, t, n) {
                return new Intl.RelativeTimeFormat(t, le({}, n)).format(
                  e,
                  n.range || "day"
                )
              },
              list: function (e, t, n) {
                return new Intl.ListFormat(t, le({}, n)).format(e)
              },
            }),
            this.init(t)
        }
        return (
          g.default(e, [
            {
              key: "init",
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = t.interpolation
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ","
              },
            },
            {
              key: "add",
              value: function (e, t) {
                this.formats[e] = t
              },
            },
            {
              key: "format",
              value: function (e, t, n, r) {
                var o = this
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var a = (function (e) {
                      var t = e.toLowerCase().trim(),
                        n = {}
                      if (e.indexOf("(") > -1) {
                        var r = e.split("(")
                        t = r[0].toLowerCase().trim()
                        var o = r[1].substring(0, r[1].length - 1)
                        "currency" === t && o.indexOf(":") < 0
                          ? n.currency || (n.currency = o.trim())
                          : "relativetime" === t && o.indexOf(":") < 0
                          ? n.range || (n.range = o.trim())
                          : o.split(";").forEach(function (e) {
                              if (e) {
                                var t = e.split(":"),
                                  r = O.default(t, 2),
                                  o = r[0],
                                  a = r[1]
                                "false" === a.trim() && (n[o.trim()] = !1),
                                  "true" === a.trim() && (n[o.trim()] = !0),
                                  isNaN(a.trim()) ||
                                    (n[o.trim()] = parseInt(a.trim(), 10)),
                                  n[o.trim()] || (n[o.trim()] = a.trim())
                              }
                            })
                      }
                      return { formatName: t, formatOptions: n }
                    })(t),
                    i = a.formatName,
                    s = a.formatOptions
                  if (o.formats[i]) {
                    var u = e
                    try {
                      var c =
                          (r &&
                            r.formatParams &&
                            r.formatParams[r.interpolationkey]) ||
                          {},
                        l = c.locale || c.lng || r.locale || r.lng || n
                      u = o.formats[i](e, l, le(le(le({}, s), r), c))
                    } catch (f) {
                      o.logger.warn(f)
                    }
                    return u
                  }
                  return (
                    o.logger.warn(
                      "there was no format function for ".concat(i)
                    ),
                    e
                  )
                }, e)
              },
            },
          ]),
          e
        )
      })()
      function pe(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function he(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(e)
          if (t) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      var ge = (function (e) {
        m.default(n, e)
        var t = he(n)
        function n(e, r, o) {
          var a,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
          return (
            h.default(this, n),
            (a = t.call(this)),
            U && E.call(v.default(a)),
            (a.backend = e),
            (a.store = r),
            (a.services = o),
            (a.languageUtils = o.languageUtils),
            (a.options = i),
            (a.logger = j.create("backendConnector")),
            (a.state = {}),
            (a.queue = []),
            a.backend && a.backend.init && a.backend.init(o, i.backend, i),
            a
          )
        }
        return (
          g.default(n, [
            {
              key: "queueLoad",
              value: function (e, t, n, r) {
                var o = this,
                  a = [],
                  i = [],
                  s = [],
                  u = []
                return (
                  e.forEach(function (e) {
                    var r = !0
                    t.forEach(function (t) {
                      var s = "".concat(e, "|").concat(t)
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? i.indexOf(s) < 0 && i.push(s)
                            : ((o.state[s] = 1),
                              (r = !1),
                              i.indexOf(s) < 0 && i.push(s),
                              a.indexOf(s) < 0 && a.push(s),
                              u.indexOf(t) < 0 && u.push(t)))
                    }),
                      r || s.push(e)
                  }),
                  (a.length || i.length) &&
                    this.queue.push({
                      pending: i,
                      loaded: {},
                      errors: [],
                      callback: r,
                    }),
                  {
                    toLoad: a,
                    pending: i,
                    toLoadLanguages: s,
                    toLoadNamespaces: u,
                  }
                )
              },
            },
            {
              key: "loaded",
              value: function (e, t, n) {
                var r = e.split("|"),
                  o = r[0],
                  a = r[1]
                t && this.emit("failedLoading", o, a, t),
                  n && this.store.addResourceBundle(o, a, n),
                  (this.state[e] = t ? -1 : 2)
                var i = {}
                this.queue.forEach(function (n) {
                  var r, s, u, c, l, f
                  ;(r = n.loaded),
                    (s = a),
                    (c = _(r, [o], Object)),
                    (l = c.obj),
                    (f = c.k),
                    (l[f] = l[f] || []),
                    u && (l[f] = l[f].concat(s)),
                    u || l[f].push(s),
                    (function (e, t) {
                      for (var n = e.indexOf(t); -1 !== n; )
                        e.splice(n, 1), (n = e.indexOf(t))
                    })(n.pending, e),
                    t && n.errors.push(t),
                    0 !== n.pending.length ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        i[e] || (i[e] = []),
                          n.loaded[e].length &&
                            n.loaded[e].forEach(function (t) {
                              i[e].indexOf(t) < 0 && i[e].push(t)
                            })
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                  this.emit("loaded", i),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done
                  }))
              },
            },
            {
              key: "read",
              value: function (e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 350,
                  i = arguments.length > 5 ? arguments[5] : void 0
                return e.length
                  ? this.backend[n](e, t, function (s, u) {
                      s && u && o < 5
                        ? setTimeout(function () {
                            r.read.call(r, e, t, n, o + 1, 2 * a, i)
                          }, a)
                        : i(s, u)
                    })
                  : i(null, {})
              },
            },
            {
              key: "prepareLoading",
              value: function (e, t) {
                var n = this,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = arguments.length > 3 ? arguments[3] : void 0
                if (!this.backend)
                  return (
                    this.logger.warn(
                      "No backend was added via i18next.use. Will not load resources."
                    ),
                    o && o()
                  )
                "string" == typeof e &&
                  (e = this.languageUtils.toResolveHierarchy(e)),
                  "string" == typeof t && (t = [t])
                var a = this.queueLoad(e, t, r, o)
                if (!a.toLoad.length) return a.pending.length || o(), null
                a.toLoad.forEach(function (e) {
                  n.loadOne(e)
                })
              },
            },
            {
              key: "load",
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n)
              },
            },
            {
              key: "reload",
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n)
              },
            },
            {
              key: "loadOne",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = e.split("|"),
                  o = r[0],
                  a = r[1]
                this.read(o, a, "read", void 0, void 0, function (r, i) {
                  r &&
                    t.logger.warn(
                      ""
                        .concat(n, "loading namespace ")
                        .concat(a, " for language ")
                        .concat(o, " failed"),
                      r
                    ),
                    !r &&
                      i &&
                      t.logger.log(
                        ""
                          .concat(n, "loaded namespace ")
                          .concat(a, " for language ")
                          .concat(o),
                        i
                      ),
                    t.loaded(e, r, i)
                })
              },
            },
            {
              key: "saveMissing",
              value: function (e, t, n, r, o) {
                var a =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {}
                this.services.utils &&
                this.services.utils.hasLoadedNamespace &&
                !this.services.utils.hasLoadedNamespace(t)
                  ? this.logger.warn(
                      'did not save key "'
                        .concat(n, '" as the namespace "')
                        .concat(t, '" was not yet loaded'),
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                    )
                  : null != n &&
                    "" !== n &&
                    (this.backend &&
                      this.backend.create &&
                      this.backend.create(
                        e,
                        t,
                        n,
                        r,
                        null,
                        de(de({}, a), {}, { isUpdate: o })
                      ),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
              },
            },
          ]),
          n
        )
      })(E)
      function ve() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !0,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            var t = {}
            if (
              ("object" === d.default(e[1]) && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" === d.default(e[2]) || "object" === d.default(e[3]))
            ) {
              var n = e[3] || e[2]
              Object.keys(n).forEach(function (e) {
                t[e] = n[e]
              })
            }
            return t
          },
          interpolation: {
            escapeValue: !0,
            format: function (e, t, n, r) {
              return e
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        }
      }
      function me(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf("cimode") < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        )
      }
      function ye(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(n), !0).forEach(function (t) {
                w.default(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ye(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function we(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = b.default(e)
          if (t) {
            var o = b.default(this).constructor
            n = Reflect.construct(r, arguments, o)
          } else n = r.apply(this, arguments)
          return y.default(this, n)
        }
      }
      function Oe() {}
      function xe(e) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (
          t
        ) {
          "function" == typeof e[t] && (e[t] = e[t].bind(e))
        })
      }
      var Pe = (function (e) {
        m.default(n, e)
        var t = we(n)
        function n() {
          var e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0
          if (
            (h.default(this, n),
            (e = t.call(this)),
            U && E.call(v.default(e)),
            (e.options = me(r)),
            (e.services = {}),
            (e.logger = j),
            (e.modules = { external: [] }),
            xe(v.default(e)),
            o && !e.isInitialized && !r.isClone)
          ) {
            if (!e.options.initImmediate)
              return e.init(r, o), y.default(e, v.default(e))
            setTimeout(function () {
              e.init(r, o)
            }, 0)
          }
          return e
        }
        return (
          g.default(n, [
            {
              key: "init",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = arguments.length > 1 ? arguments[1] : void 0
                "function" == typeof t && ((n = t), (t = {})),
                  !t.defaultNS &&
                    t.ns &&
                    ("string" == typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : t.ns.indexOf("translation") < 0 &&
                        (t.defaultNS = t.ns[0]))
                var r = ve()
                function o(e) {
                  return e ? ("function" == typeof e ? new e() : e) : null
                }
                if (
                  ((this.options = be(be(be({}, r), this.options), me(t))),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator &&
                    (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  var a
                  this.modules.logger
                    ? j.init(o(this.modules.logger), this.options)
                    : j.init(null, this.options),
                    this.modules.formatter
                      ? (a = this.modules.formatter)
                      : "undefined" != typeof Intl && (a = fe)
                  var i = new X(this.options)
                  this.store = new K(this.options.resources, this.options)
                  var s = this.services
                  ;(s.logger = j),
                    (s.resourceStore = this.store),
                    (s.languageUtils = i),
                    (s.pluralResolver = new ae(i, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                    })),
                    !a ||
                      (this.options.interpolation.format &&
                        this.options.interpolation.format !==
                          r.interpolation.format) ||
                      ((s.formatter = o(a)),
                      s.formatter.init(s, this.options),
                      (this.options.interpolation.format =
                        s.formatter.format.bind(s.formatter))),
                    (s.interpolator = new ue(this.options)),
                    (s.utils = {
                      hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                    }),
                    (s.backendConnector = new ge(
                      o(this.modules.backend),
                      s.resourceStore,
                      s,
                      this.options
                    )),
                    s.backendConnector.on("*", function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o]
                      e.emit.apply(e, [t].concat(r))
                    }),
                    this.modules.languageDetector &&
                      ((s.languageDetector = o(this.modules.languageDetector)),
                      s.languageDetector.init(
                        s,
                        this.options.detection,
                        this.options
                      )),
                    this.modules.i18nFormat &&
                      ((s.i18nFormat = o(this.modules.i18nFormat)),
                      s.i18nFormat.init && s.i18nFormat.init(this)),
                    (this.translator = new G(this.services, this.options)),
                    this.translator.on("*", function (t) {
                      for (
                        var n = arguments.length,
                          r = new Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o]
                      e.emit.apply(e, [t].concat(r))
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e)
                    })
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = Oe),
                  this.options.fallbackLng &&
                    !this.services.languageDetector &&
                    !this.options.lng)
                ) {
                  var u = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  )
                  u.length > 0 && "dev" !== u[0] && (this.options.lng = u[0])
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn(
                    "init: no languageDetector is used and no lng is defined"
                  )
                var c = [
                  "getResource",
                  "hasResourceBundle",
                  "getResourceBundle",
                  "getDataByLanguage",
                ]
                c.forEach(function (t) {
                  e[t] = function () {
                    var n
                    return (n = e.store)[t].apply(n, arguments)
                  }
                })
                var l = [
                  "addResource",
                  "addResources",
                  "addResourceBundle",
                  "removeResourceBundle",
                ]
                l.forEach(function (t) {
                  e[t] = function () {
                    var n
                    return (n = e.store)[t].apply(n, arguments), e
                  }
                })
                var f = R(),
                  p = function () {
                    var t = function (t, r) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          "init: i18next is already initialized. You should call init just once!"
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone ||
                          e.logger.log("initialized", e.options),
                        e.emit("initialized", e.options),
                        f.resolve(r),
                        n(t, r)
                    }
                    if (
                      e.languages &&
                      "v1" !== e.options.compatibilityAPI &&
                      !e.isInitialized
                    )
                      return t(null, e.t.bind(e))
                    e.changeLanguage(e.options.lng, t)
                  }
                return (
                  this.options.resources || !this.options.initImmediate
                    ? p()
                    : setTimeout(p, 0),
                  f
                )
              },
            },
            {
              key: "loadResources",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Oe,
                  r = n,
                  o = "string" == typeof e ? e : this.language
                if (
                  ("function" == typeof e && (r = e),
                  !this.options.resources ||
                    this.options.partialBundledLanguages)
                ) {
                  if (o && "cimode" === o.toLowerCase()) return r()
                  var a = [],
                    i = function (e) {
                      e &&
                        t.services.languageUtils
                          .toResolveHierarchy(e)
                          .forEach(function (e) {
                            a.indexOf(e) < 0 && a.push(e)
                          })
                    }
                  if (o) i(o)
                  else {
                    var s = this.services.languageUtils.getFallbackCodes(
                      this.options.fallbackLng
                    )
                    s.forEach(function (e) {
                      return i(e)
                    })
                  }
                  this.options.preload &&
                    this.options.preload.forEach(function (e) {
                      return i(e)
                    }),
                    this.services.backendConnector.load(a, this.options.ns, r)
                } else r(null)
              },
            },
            {
              key: "reloadResources",
              value: function (e, t, n) {
                var r = R()
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = Oe),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e)
                  }),
                  r
                )
              },
            },
            {
              key: "use",
              value: function (e) {
                if (!e)
                  throw new Error(
                    "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                  )
                if (!e.type)
                  throw new Error(
                    "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                  )
                return (
                  "backend" === e.type && (this.modules.backend = e),
                  ("logger" === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  "languageDetector" === e.type &&
                    (this.modules.languageDetector = e),
                  "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                  "postProcessor" === e.type && B.addPostProcessor(e),
                  "formatter" === e.type && (this.modules.formatter = e),
                  "3rdParty" === e.type && this.modules.external.push(e),
                  this
                )
              },
            },
            {
              key: "changeLanguage",
              value: function (e, t) {
                var n = this
                this.isLanguageChangingTo = e
                var r = R()
                this.emit("languageChanging", e)
                var o = function (e) {
                    if (
                      ((n.language = e),
                      (n.languages =
                        n.services.languageUtils.toResolveHierarchy(e)),
                      (n.resolvedLanguage = void 0),
                      !(["cimode", "dev"].indexOf(e) > -1))
                    )
                      for (var t = 0; t < n.languages.length; t++) {
                        var r = n.languages[t]
                        if (
                          !(["cimode", "dev"].indexOf(r) > -1) &&
                          n.store.hasLanguageSomeTranslations(r)
                        ) {
                          n.resolvedLanguage = r
                          break
                        }
                      }
                  },
                  a = function (a) {
                    e || a || !n.services.languageDetector || (a = [])
                    var i =
                      "string" == typeof a
                        ? a
                        : n.services.languageUtils.getBestMatchFromCodes(a)
                    i &&
                      (n.language || o(i),
                      n.translator.language || n.translator.changeLanguage(i),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(i)),
                      n.loadResources(i, function (e) {
                        !(function (e, a) {
                          a
                            ? (o(a),
                              n.translator.changeLanguage(a),
                              (n.isLanguageChangingTo = void 0),
                              n.emit("languageChanged", a),
                              n.logger.log("languageChanged", a))
                            : (n.isLanguageChangingTo = void 0),
                            r.resolve(function () {
                              return n.t.apply(n, arguments)
                            }),
                            t &&
                              t(e, function () {
                                return n.t.apply(n, arguments)
                              })
                        })(e, i)
                      })
                  }
                return (
                  e ||
                  !this.services.languageDetector ||
                  this.services.languageDetector.async
                    ? !e &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                      ? this.services.languageDetector.detect(a)
                      : a(e)
                    : a(this.services.languageDetector.detect()),
                  r
                )
              },
            },
            {
              key: "getFixedT",
              value: function (e, t, n) {
                var r = this,
                  o = function e(t, o) {
                    var a
                    if ("object" !== d.default(o)) {
                      for (
                        var i = arguments.length,
                          s = new Array(i > 2 ? i - 2 : 0),
                          u = 2;
                        u < i;
                        u++
                      )
                        s[u - 2] = arguments[u]
                      a = r.options.overloadTranslationOptionHandler(
                        [t, o].concat(s)
                      )
                    } else a = be({}, o)
                    ;(a.lng = a.lng || e.lng),
                      (a.lngs = a.lngs || e.lngs),
                      (a.ns = a.ns || e.ns)
                    var c = r.options.keySeparator || ".",
                      l = n ? "".concat(n).concat(c).concat(t) : t
                    return r.t(l, a)
                  }
                return (
                  "string" == typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = n),
                  o
                )
              },
            },
            {
              key: "t",
              value: function () {
                var e
                return (
                  this.translator &&
                  (e = this.translator).translate.apply(e, arguments)
                )
              },
            },
            {
              key: "exists",
              value: function () {
                var e
                return (
                  this.translator &&
                  (e = this.translator).exists.apply(e, arguments)
                )
              },
            },
            {
              key: "setDefaultNamespace",
              value: function (e) {
                this.options.defaultNS = e
              },
            },
            {
              key: "hasLoadedNamespace",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18next was not initialized",
                      this.languages
                    ),
                    !1
                  )
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      "hasLoadedNamespace: i18n.languages were undefined or empty",
                      this.languages
                    ),
                    !1
                  )
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  a = this.languages[this.languages.length - 1]
                if ("cimode" === r.toLowerCase()) return !0
                var i = function (e, n) {
                  var r =
                    t.services.backendConnector.state[
                      "".concat(e, "|").concat(n)
                    ]
                  return -1 === r || 2 === r
                }
                if (n.precheck) {
                  var s = n.precheck(this, i)
                  if (void 0 !== s) return s
                }
                return (
                  !!this.hasResourceBundle(r, e) ||
                  !this.services.backendConnector.backend ||
                  !(!i(r, e) || (o && !i(a, e)))
                )
              },
            },
            {
              key: "loadNamespaces",
              value: function (e, t) {
                var n = this,
                  r = R()
                return this.options.ns
                  ? ("string" == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e)
                    }),
                    r)
                  : (t && t(), Promise.resolve())
              },
            },
            {
              key: "loadLanguages",
              value: function (e, t) {
                var n = R()
                "string" == typeof e && (e = [e])
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return r.indexOf(e) < 0
                  })
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e)
                    }),
                    n)
                  : (t && t(), Promise.resolve())
              },
            },
            {
              key: "dir",
              value: function (e) {
                if (
                  (e ||
                    (e =
                      this.resolvedLanguage ||
                      (this.languages && this.languages.length > 0
                        ? this.languages[0]
                        : this.language)),
                  !e)
                )
                  return "rtl"
                return [
                  "ar",
                  "shu",
                  "sqr",
                  "ssh",
                  "xaa",
                  "yhd",
                  "yud",
                  "aao",
                  "abh",
                  "abv",
                  "acm",
                  "acq",
                  "acw",
                  "acx",
                  "acy",
                  "adf",
                  "ads",
                  "aeb",
                  "aec",
                  "afb",
                  "ajp",
                  "apc",
                  "apd",
                  "arb",
                  "arq",
                  "ars",
                  "ary",
                  "arz",
                  "auz",
                  "avl",
                  "ayh",
                  "ayl",
                  "ayn",
                  "ayp",
                  "bbz",
                  "pga",
                  "he",
                  "iw",
                  "ps",
                  "pbt",
                  "pbu",
                  "pst",
                  "prp",
                  "prd",
                  "ug",
                  "ur",
                  "ydd",
                  "yds",
                  "yih",
                  "ji",
                  "yi",
                  "hbo",
                  "men",
                  "xmn",
                  "fa",
                  "jpr",
                  "peo",
                  "pes",
                  "prs",
                  "dv",
                  "sam",
                  "ckb",
                ].indexOf(
                  this.services.languageUtils.getLanguagePartFromCode(e)
                ) > -1 || e.toLowerCase().indexOf("-arab") > 1
                  ? "rtl"
                  : "ltr"
              },
            },
            {
              key: "cloneInstance",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Oe,
                  o = be(be(be({}, this.options), t), { isClone: !0 }),
                  a = new n(o),
                  i = ["store", "services", "language"]
                return (
                  i.forEach(function (t) {
                    a[t] = e[t]
                  }),
                  (a.services = be({}, this.services)),
                  (a.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
                  }),
                  (a.translator = new G(a.services, a.options)),
                  a.translator.on("*", function (e) {
                    for (
                      var t = arguments.length,
                        n = new Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r]
                    a.emit.apply(a, [e].concat(n))
                  }),
                  a.init(o, r),
                  (a.translator.options = a.options),
                  (a.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
                  }),
                  a
                )
              },
            },
            {
              key: "toJSON",
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage,
                }
              },
            },
          ]),
          n
        )
      })(E)
      w.default(Pe, "createInstance", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0
        return new Pe(e, t)
      })
      var ke = Pe.createInstance()
      ;(ke.createInstance = Pe.createInstance), (e.exports = ke)
    },
    8003: function (e, t, n) {
      "use strict"
      function r() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      }
      function o() {
        return "undefined" != typeof WeakMap
          ? new WeakMap()
          : {
              add: r,
              delete: r,
              get: r,
              set: r,
              has: function (e) {
                return !1
              },
            }
      }
      n.r(t),
        n.d(t, {
          outdent: function () {
            return v
          },
        }),
        (e = n.hmd(e))
      var a = Object.prototype.hasOwnProperty,
        i = function (e, t) {
          return a.call(e, t)
        }
      function s(e, t) {
        for (var n in t) i(t, n) && (e[n] = t[n])
        return e
      }
      var u = /^[ \t]*(?:\r\n|\r|\n)/,
        c = /(?:\r\n|\r|\n)[ \t]*$/,
        l = /^(?:[\r\n]|$)/,
        f = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/
      function d(e, t, n) {
        var r = 0,
          o = e[0].match(f)
        o && (r = o[1].length)
        var a = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g")
        t && (e = e.slice(1))
        var i = n.newline,
          s = n.trimLeadingNewline,
          l = n.trimTrailingNewline,
          p = "string" == typeof i,
          d = e.length
        return e.map(function (e, t) {
          return (
            (e = e.replace(a, "$1")),
            0 === t && s && (e = e.replace(u, "")),
            t === d - 1 && l && (e = e.replace(c, "")),
            p &&
              (e = e.replace(/\r\n|\n|\r/g, function (e) {
                return i
              })),
            e
          )
        })
      }
      function h(e, t) {
        for (var n = "", r = 0, o = e.length; r < o; r++)
          (n += e[r]), r < o - 1 && (n += t[r])
        return n
      }
      function g(e) {
        return i(e, "raw") && i(e, "length")
      }
      var v = (function e(t) {
        var n = o(),
          r = o(),
          a = s(
            function o(a) {
              for (var i = [], u = 1; u < arguments.length; u++)
                i[u - 1] = arguments[u]
              if (g(a)) {
                var c = a,
                  f =
                    (i[0] === o || i[0] === v) && p.test(c[0]) && l.test(c[1]),
                  m = f ? r : n,
                  y = m.get(c)
                if ((y || ((y = d(c, f, t)), m.set(c, y)), 0 === i.length))
                  return y[0]
                var b = h(y, f ? i.slice(1) : i)
                return b
              }
              return e(s(s({}, t), a || {}))
            },
            {
              string: function (e) {
                return d([e], !1, t)[0]
              },
            }
          )
        return a
      })({ trimLeadingNewline: !0, trimTrailingNewline: !0 })
      t.default = v
      try {
        ;(e.exports = v),
          Object.defineProperty(v, "__esModule", { value: !0 }),
          (v.default = v),
          (v.outdent = v)
      } catch (m) {}
    },
    3999: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          I18nContext: function () {
            return R
          },
          I18nextProvider: function () {
            return le
          },
          Trans: function () {
            return Y
          },
          Translation: function () {
            return ce
          },
          composeInitialProps: function () {
            return T
          },
          date: function () {
            return ge
          },
          getDefaults: function () {
            return L
          },
          getI18n: function () {
            return D
          },
          getInitialProps: function () {
            return A
          },
          initReactI18next: function () {
            return I
          },
          number: function () {
            return me
          },
          plural: function () {
            return be
          },
          select: function () {
            return ye
          },
          selectOrdinal: function () {
            return we
          },
          setDefaults: function () {
            return C
          },
          setI18n: function () {
            return N
          },
          time: function () {
            return ve
          },
          useSSR: function () {
            return fe
          },
          useTranslation: function () {
            return re
          },
          withSSR: function () {
            return he
          },
          withTranslation: function () {
            return se
          },
        })
      var r = n(6479),
        o = n.n(r),
        a = n(8),
        i = n.n(a),
        s = n(9713),
        u = n.n(s),
        c = n(7294),
        l = n(8262),
        f = n.n(l),
        p = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g
      function d(e) {
        var t = {
            type: "tag",
            name: "",
            voidElement: !1,
            attrs: {},
            children: [],
          },
          n = e.match(/<\/?([^\s]+?)[/\s>]/)
        if (
          n &&
          ((t.name = n[1]),
          (f()[n[1]] || "/" === e.charAt(e.length - 2)) && (t.voidElement = !0),
          t.name.startsWith("!--"))
        ) {
          var r = e.indexOf("--\x3e")
          return { type: "comment", comment: -1 !== r ? e.slice(4, r) : "" }
        }
        for (var o = new RegExp(p), a = null; null !== (a = o.exec(e)); )
          if (a[0].trim())
            if (a[1]) {
              var i = a[1].trim(),
                s = [i, ""]
              i.indexOf("=") > -1 && (s = i.split("=")),
                (t.attrs[s[0]] = s[1]),
                o.lastIndex--
            } else
              a[2] &&
                (t.attrs[a[2]] = a[3].trim().substring(1, a[3].length - 1))
        return t
      }
      var h = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        g = /^\s*$/,
        v = Object.create(null)
      function m(e, t) {
        switch (t.type) {
          case "text":
            return e + t.content
          case "tag":
            return (
              (e +=
                "<" +
                t.name +
                (t.attrs
                  ? (function (e) {
                      var t = []
                      for (var n in e) t.push(n + '="' + e[n] + '"')
                      return t.length ? " " + t.join(" ") : ""
                    })(t.attrs)
                  : "") +
                (t.voidElement ? "/>" : ">")),
              t.voidElement
                ? e
                : e + t.children.reduce(m, "") + "</" + t.name + ">"
            )
          case "comment":
            return e + "\x3c!--" + t.comment + "--\x3e"
        }
      }
      var y = {
          parse: function (e, t) {
            t || (t = {}), t.components || (t.components = v)
            var n,
              r = [],
              o = [],
              a = -1,
              i = !1
            if (0 !== e.indexOf("<")) {
              var s = e.indexOf("<")
              r.push({
                type: "text",
                content: -1 === s ? e : e.substring(0, s),
              })
            }
            return (
              e.replace(h, function (s, u) {
                if (i) {
                  if (s !== "</" + n.name + ">") return
                  i = !1
                }
                var c,
                  l = "/" !== s.charAt(1),
                  f = s.startsWith("\x3c!--"),
                  p = u + s.length,
                  h = e.charAt(p)
                if (f) {
                  var v = d(s)
                  return a < 0
                    ? (r.push(v), r)
                    : ((c = o[a]).children.push(v), r)
                }
                if (
                  (l &&
                    (a++,
                    "tag" === (n = d(s)).type &&
                      t.components[n.name] &&
                      ((n.type = "component"), (i = !0)),
                    n.voidElement ||
                      i ||
                      !h ||
                      "<" === h ||
                      n.children.push({
                        type: "text",
                        content: e.slice(p, e.indexOf("<", p)),
                      }),
                    0 === a && r.push(n),
                    (c = o[a - 1]) && c.children.push(n),
                    (o[a] = n)),
                  (!l || n.voidElement) &&
                    (a > -1 &&
                      (n.voidElement || n.name === s.slice(2, -1)) &&
                      (a--, (n = -1 === a ? r : o[a])),
                    !i && "<" !== h && h))
                ) {
                  c = -1 === a ? r : o[a].children
                  var m = e.indexOf("<", p),
                    y = e.slice(p, -1 === m ? void 0 : m)
                  g.test(y) && (y = " "),
                    ((m > -1 && a + c.length >= 0) || " " !== y) &&
                      c.push({ type: "text", content: y })
                }
              }),
              r
            )
          },
          stringify: function (e) {
            return e.reduce(function (e, t) {
              return e + m("", t)
            }, "")
          },
        },
        b = y,
        w = n(4575),
        O = n.n(w),
        x = n(3913),
        P = n.n(x)
      function k(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var j,
        E = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
        },
        R = c.createContext()
      function C() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        E = S(S({}, E), e)
      }
      function L() {
        return E
      }
      var _ = (function () {
        function e() {
          O()(this, e), (this.usedNamespaces = {})
        }
        return (
          P()(e, [
            {
              key: "addUsedNamespaces",
              value: function (e) {
                var t = this
                e.forEach(function (e) {
                  t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                })
              },
            },
            {
              key: "getUsedNamespaces",
              value: function () {
                return Object.keys(this.usedNamespaces)
              },
            },
          ]),
          e
        )
      })()
      function N(e) {
        j = e
      }
      function D() {
        return j
      }
      var I = {
        type: "3rdParty",
        init: function (e) {
          C(e.options.react), N(e)
        },
      }
      function T(e) {
        return function (t) {
          return new Promise(function (n) {
            var r = A()
            e.getInitialProps
              ? e.getInitialProps(t).then(function (e) {
                  n(S(S({}, e), r))
                })
              : n(r)
          })
        }
      }
      function A() {
        var e = D(),
          t = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
          n = {},
          r = {}
        return (
          e.languages.forEach(function (n) {
            ;(r[n] = {}),
              t.forEach(function (t) {
                r[n][t] = e.getResourceBundle(n, t) || {}
              })
          }),
          (n.initialI18nStore = r),
          (n.initialLanguage = e.language),
          n
        )
      }
      function M() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r]
          "string" == typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
            (e = console).warn.apply(e, n)
        }
      }
      var F = {}
      function U() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        ;("string" == typeof t[0] && F[t[0]]) ||
          ("string" == typeof t[0] && (F[t[0]] = new Date()),
          M.apply(void 0, t))
      }
      function W(e, t, n) {
        e.loadNamespaces(t, function () {
          if (e.isInitialized) n()
          else {
            e.on("initialized", function t() {
              setTimeout(function () {
                e.off("initialized", t)
              }, 0),
                n()
            })
          }
        })
      }
      function H(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if (!t.languages || !t.languages.length)
          return U("i18n.languages were undefined or empty", t.languages), !0
        var r = t.languages[0],
          o = !!t.options && t.options.fallbackLng,
          a = t.languages[t.languages.length - 1]
        if ("cimode" === r.toLowerCase()) return !0
        var i = function (e, n) {
          var r = t.services.backendConnector.state["".concat(e, "|").concat(n)]
          return -1 === r || 2 === r
        }
        return (
          !(
            n.bindI18n &&
            n.bindI18n.indexOf("languageChanging") > -1 &&
            t.services.backendConnector.backend &&
            t.isLanguageChangingTo &&
            !i(t.isLanguageChangingTo, e)
          ) &&
          (!!t.hasResourceBundle(r, e) ||
            !t.services.backendConnector.backend ||
            !(!i(r, e) || (o && !i(a, e))))
        )
      }
      function q(e) {
        return (
          e.displayName ||
          e.name ||
          ("string" == typeof e && e.length > 0 ? e : "Unknown")
        )
      }
      var V = ["format"],
        z = [
          "children",
          "count",
          "parent",
          "i18nKey",
          "tOptions",
          "values",
          "defaults",
          "components",
          "ns",
          "i18n",
          "t",
        ]
      function K(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : K(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function J(e, t) {
        if (!e) return !1
        var n = e.props ? e.props.children : e.children
        return t ? n.length > 0 : !!n
      }
      function Q(e) {
        return e
          ? e && e.children
            ? e.children
            : e.props && e.props.children
          : []
      }
      function Z(e) {
        return Array.isArray(e) ? e : [e]
      }
      function $(e, t) {
        if (!e) return ""
        var n = "",
          r = Z(e),
          a = t.transKeepBasicHtmlNodesFor || []
        return (
          r.forEach(function (e, r) {
            if ("string" == typeof e) n += "".concat(e)
            else if (c.isValidElement(e)) {
              var s = Object.keys(e.props).length,
                u = a.indexOf(e.type) > -1,
                l = e.props.children
              if (!l && u && 0 === s) n += "<".concat(e.type, "/>")
              else if (l || (u && 0 === s))
                if (e.props.i18nIsDynamicList)
                  n += "<".concat(r, "></").concat(r, ">")
                else if (u && 1 === s && "string" == typeof l)
                  n += "<"
                    .concat(e.type, ">")
                    .concat(l, "</")
                    .concat(e.type, ">")
                else {
                  var f = $(l, t)
                  n += "<".concat(r, ">").concat(f, "</").concat(r, ">")
                }
              else n += "<".concat(r, "></").concat(r, ">")
            } else if (null === e)
              M(
                "Trans: the passed in value is invalid - seems you passed in a null child."
              )
            else if ("object" === i()(e)) {
              var p = e.format,
                d = o()(e, V),
                h = Object.keys(d)
              if (1 === h.length) {
                var g = p ? "".concat(h[0], ", ").concat(p) : h[0]
                n += "{{".concat(g, "}}")
              } else
                M(
                  "react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",
                  e
                )
            } else
              M(
                "Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",
                e
              )
          }),
          n
        )
      }
      function G(e, t, n, r, o) {
        if ("" === t) return []
        var a = r.transKeepBasicHtmlNodesFor || [],
          s = t && new RegExp(a.join("|")).test(t)
        if (!e && !s) return [t]
        var u = {}
        !(function e(t) {
          Z(t).forEach(function (t) {
            "string" != typeof t &&
              (J(t)
                ? e(Q(t))
                : "object" !== i()(t) ||
                  c.isValidElement(t) ||
                  Object.assign(u, t))
          })
        })(e)
        var l = b.parse("<0>".concat(t, "</0>")),
          f = B(B({}, u), o)
        function p(e, t, n) {
          var r = Q(e),
            o = h(r, t.children, n)
          return (function (e) {
            return (
              "[object Array]" === Object.prototype.toString.call(e) &&
              e.every(function (e) {
                return c.isValidElement(e)
              })
            )
          })(r) && 0 === o.length
            ? r
            : o
        }
        function d(e, t, n, r, o) {
          e.dummy && (e.children = t),
            n.push(
              c.cloneElement(
                e,
                B(B({}, e.props), {}, { key: r }),
                o ? void 0 : t
              )
            )
        }
        function h(t, o, u) {
          var l = Z(t)
          return Z(o).reduce(function (t, o, g) {
            var v,
              m,
              y,
              b =
                o.children &&
                o.children[0] &&
                o.children[0].content &&
                n.services.interpolator.interpolate(
                  o.children[0].content,
                  f,
                  n.language
                )
            if ("tag" === o.type) {
              var w = l[parseInt(o.name, 10)]
              !w && 1 === u.length && u[0][o.name] && (w = u[0][o.name]),
                w || (w = {})
              var O =
                  0 !== Object.keys(o.attrs).length
                    ? ((v = { props: o.attrs }),
                      ((y = B({}, (m = w))).props = Object.assign(
                        v.props,
                        m.props
                      )),
                      y)
                    : w,
                x = c.isValidElement(O),
                P = x && J(o, !0) && !o.voidElement,
                k = s && "object" === i()(O) && O.dummy && !x,
                S =
                  "object" === i()(e) &&
                  null !== e &&
                  Object.hasOwnProperty.call(e, o.name)
              if ("string" == typeof O) {
                var j = n.services.interpolator.interpolate(O, f, n.language)
                t.push(j)
              } else if (J(O) || P) {
                d(O, p(O, o, u), t, g)
              } else if (k) {
                var E = h(l, o.children, u)
                t.push(c.cloneElement(O, B(B({}, O.props), {}, { key: g }), E))
              } else if (Number.isNaN(parseFloat(o.name))) {
                if (S) d(O, p(O, o, u), t, g, o.voidElement)
                else if (r.transSupportBasicHtmlNodes && a.indexOf(o.name) > -1)
                  if (o.voidElement)
                    t.push(
                      c.createElement(o.name, {
                        key: "".concat(o.name, "-").concat(g),
                      })
                    )
                  else {
                    var R = h(l, o.children, u)
                    t.push(
                      c.createElement(
                        o.name,
                        { key: "".concat(o.name, "-").concat(g) },
                        R
                      )
                    )
                  }
                else if (o.voidElement) t.push("<".concat(o.name, " />"))
                else {
                  var C = h(l, o.children, u)
                  t.push(
                    "<".concat(o.name, ">").concat(C, "</").concat(o.name, ">")
                  )
                }
              } else if ("object" !== i()(O) || x)
                1 === o.children.length && b
                  ? t.push(
                      c.cloneElement(O, B(B({}, O.props), {}, { key: g }), b)
                    )
                  : t.push(c.cloneElement(O, B(B({}, O.props), {}, { key: g })))
              else {
                var L = o.children[0] ? b : null
                L && t.push(L)
              }
            } else if ("text" === o.type) {
              var _ = r.transWrapTextNodes,
                N = n.services.interpolator.interpolate(
                  o.content,
                  f,
                  n.language
                )
              _
                ? t.push(
                    c.createElement(
                      _,
                      { key: "".concat(o.name, "-").concat(g) },
                      N
                    )
                  )
                : t.push(N)
            }
            return t
          }, [])
        }
        return Q(h([{ dummy: !0, children: e || [] }], l, Z(e || []))[0])
      }
      function Y(e) {
        var t = e.children,
          n = e.count,
          r = e.parent,
          a = e.i18nKey,
          i = e.tOptions,
          s = void 0 === i ? {} : i,
          u = e.values,
          l = e.defaults,
          f = e.components,
          p = e.ns,
          d = e.i18n,
          h = e.t,
          g = o()(e, z),
          v = (0, c.useContext)(R) || {},
          m = v.i18n,
          y = v.defaultNS,
          b = d || m || D()
        if (!b)
          return (
            U(
              "You will need to pass in an i18next instance by using i18nextReactModule"
            ),
            t
          )
        var w =
            h ||
            b.t.bind(b) ||
            function (e) {
              return e
            },
          O = B(B({}, L()), b.options && b.options.react),
          x = p || w.ns || y || (b.options && b.options.defaultNS)
        x = "string" == typeof x ? [x] : x || ["translation"]
        var P = l || $(t, O) || O.transEmptyNodeValue || a,
          k = O.hashTransKey,
          S = a || (k ? k(P) : P),
          j = u
            ? s.interpolation
            : {
                interpolation: B(
                  B({}, s.interpolation),
                  {},
                  { prefix: "#$?", suffix: "?$#" }
                ),
              },
          E = B(
            B(B(B({}, s), {}, { count: n }, u), j),
            {},
            { defaultValue: P, ns: x }
          ),
          C = G(f || t, S ? w(S, E) : P, b, O, E),
          _ = void 0 !== r ? r : O.defaultTransParent
        return _ ? c.createElement(_, g, C) : C
      }
      var X = n(3038),
        ee = n.n(X)
      function te(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function re(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.i18n,
          r = (0, c.useContext)(R) || {},
          o = r.i18n,
          a = r.defaultNS,
          i = n || o || D()
        if ((i && !i.reportNamespaces && (i.reportNamespaces = new _()), !i)) {
          U(
            "You will need to pass in an i18next instance by using initReactI18next"
          )
          var s = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e
            },
            u = [s, {}, !1]
          return (u.t = s), (u.i18n = {}), (u.ready = !1), u
        }
        i.options.react &&
          void 0 !== i.options.react.wait &&
          U(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
          )
        var l = ne(ne(ne({}, L()), i.options.react), t),
          f = l.useSuspense,
          p = l.keyPrefix,
          d = e || a || (i.options && i.options.defaultNS)
        ;(d = "string" == typeof d ? [d] : d || ["translation"]),
          i.reportNamespaces.addUsedNamespaces &&
            i.reportNamespaces.addUsedNamespaces(d)
        var h =
          (i.isInitialized || i.initializedStoreOnce) &&
          d.every(function (e) {
            return H(e, i, l)
          })
        function g() {
          return i.getFixedT(null, "fallback" === l.nsMode ? d : d[0], p)
        }
        var v = (0, c.useState)(g),
          m = ee()(v, 2),
          y = m[0],
          b = m[1],
          w = (0, c.useRef)(!0)
        ;(0, c.useEffect)(
          function () {
            var e = l.bindI18n,
              t = l.bindI18nStore
            function n() {
              w.current && b(g)
            }
            return (
              (w.current = !0),
              h ||
                f ||
                W(i, d, function () {
                  w.current && b(g)
                }),
              e && i && i.on(e, n),
              t && i && i.store.on(t, n),
              function () {
                ;(w.current = !1),
                  e &&
                    i &&
                    e.split(" ").forEach(function (e) {
                      return i.off(e, n)
                    }),
                  t &&
                    i &&
                    t.split(" ").forEach(function (e) {
                      return i.store.off(e, n)
                    })
              }
            )
          },
          [i, d.join()]
        )
        var O = (0, c.useRef)(!0)
        ;(0, c.useEffect)(
          function () {
            w.current && !O.current && b(g), (O.current = !1)
          },
          [i]
        )
        var x = [y, i, h]
        if (((x.t = y), (x.i18n = i), (x.ready = h), h)) return x
        if (!h && !f) return x
        throw new Promise(function (e) {
          W(i, d, function () {
            e()
          })
        })
      }
      var oe = ["forwardedRef"]
      function ae(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                u()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function se(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        return function (n) {
          function r(r) {
            var a = r.forwardedRef,
              i = o()(r, oe),
              s = re(e, i),
              u = ee()(s, 3),
              l = u[0],
              f = u[1],
              p = u[2],
              d = ie(ie({}, i), {}, { t: l, i18n: f, tReady: p })
            return (
              t.withRef && a
                ? (d.ref = a)
                : !t.withRef && a && (d.forwardedRef = a),
              c.createElement(n, d)
            )
          }
          ;(r.displayName = "withI18nextTranslation(".concat(q(n), ")")),
            (r.WrappedComponent = n)
          return t.withRef
            ? c.forwardRef(function (e, t) {
                return c.createElement(
                  r,
                  Object.assign({}, e, { forwardedRef: t })
                )
              })
            : r
        }
      }
      var ue = ["ns", "children"]
      function ce(e) {
        var t = e.ns,
          n = e.children,
          r = re(t, o()(e, ue)),
          a = ee()(r, 3),
          i = a[0],
          s = a[1],
          u = a[2]
        return n(i, { i18n: s, lng: s.language }, u)
      }
      function le(e) {
        var t = e.i18n,
          n = e.defaultNS,
          r = e.children,
          o = (0, c.useMemo)(
            function () {
              return { i18n: t, defaultNS: n }
            },
            [t, n]
          )
        return (0, c.createElement)(R.Provider, { value: o }, r)
      }
      function fe(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.i18n,
          o = (0, c.useContext)(R) || {},
          a = o.i18n,
          i = r || a || D()
        ;(i.options && i.options.isClone) ||
          (e &&
            !i.initializedStoreOnce &&
            ((i.services.resourceStore.data = e),
            (i.options.ns = Object.values(e).reduce(function (e, t) {
              return (
                Object.keys(t).forEach(function (t) {
                  e.indexOf(t) < 0 && e.push(t)
                }),
                e
              )
            }, i.options.ns)),
            (i.initializedStoreOnce = !0),
            (i.isInitialized = !0)),
          t &&
            !i.initializedLanguageOnce &&
            (i.changeLanguage(t), (i.initializedLanguageOnce = !0)))
      }
      var pe = ["initialI18nStore", "initialLanguage"]
      function de(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function he() {
        return function (e) {
          function t(t) {
            var n = t.initialI18nStore,
              r = t.initialLanguage,
              a = o()(t, pe)
            return (
              fe(n, r),
              c.createElement(
                e,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                    t % 2
                      ? de(Object(n), !0).forEach(function (t) {
                          u()(e, t, n[t])
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : de(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          )
                        })
                  }
                  return e
                })({}, a)
              )
            )
          }
          return (
            (t.getInitialProps = T(e)),
            (t.displayName = "withI18nextSSR(".concat(q(e), ")")),
            (t.WrappedComponent = e),
            t
          )
        }
      }
      var ge = function () {
          return ""
        },
        ve = function () {
          return ""
        },
        me = function () {
          return ""
        },
        ye = function () {
          return ""
        },
        be = function () {
          return ""
        },
        we = function () {
          return ""
        }
    },
    8262: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    },
    8037: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.dq = g),
        (t.mc = function (e) {
          return g(e, v())
        }),
        (t.c4 = t.ZP = void 0)
      var o = r(n(7316)),
        a = r(n(1506)),
        i = r(n(5354)),
        s = r(n(7154)),
        u = r(n(5697)),
        c = r(n(7294)),
        l = n(9499),
        f = n(2098),
        p = n(1752)
      t.cP = p.parsePath
      var d = [
          "to",
          "getProps",
          "onClick",
          "onMouseEnter",
          "activeClassName",
          "activeStyle",
          "innerRef",
          "partiallyActive",
          "state",
          "replace",
          "_location",
        ],
        h = function (e) {
          return null == e ? void 0 : e.startsWith("/")
        }
      function g(e, t) {
        var n, r
        if ((void 0 === t && (t = m()), !y(e))) return e
        if (e.startsWith("./") || e.startsWith("../")) return e
        var o =
          null !== (n = null !== (r = t) && void 0 !== r ? r : v()) &&
          void 0 !== n
            ? n
            : "/"
        return (
          "" +
          (null != o && o.endsWith("/") ? o.slice(0, -1) : o) +
          (e.startsWith("/") ? e : "/" + e)
        )
      }
      var v = function () {
          return ""
        },
        m = function () {
          return ""
        },
        y = function (e) {
          return (
            e &&
            !e.startsWith("http://") &&
            !e.startsWith("https://") &&
            !e.startsWith("//")
          )
        }
      var b = function (e, t) {
          return "number" == typeof e
            ? e
            : y(e)
            ? h(e)
              ? g(e)
              : (function (e, t) {
                  return h(e) ? e : (0, f.resolve)(e, t)
                })(e, t)
            : e
        },
        w = {
          activeClassName: u.default.string,
          activeStyle: u.default.object,
          partiallyActive: u.default.bool,
        }
      function O(e) {
        return c.default.createElement(l.Location, null, function (t) {
          var n = t.location
          return c.default.createElement(
            x,
            (0, s.default)({}, e, { _location: n })
          )
        })
      }
      var x = (function (e) {
        function t(t) {
          var n
          ;(n = e.call(this, t) || this).defaultGetProps = function (e) {
            var t = e.isPartiallyCurrent,
              r = e.isCurrent
            return (n.props.partiallyActive ? t : r)
              ? {
                  className: [n.props.className, n.props.activeClassName]
                    .filter(Boolean)
                    .join(" "),
                  style: (0, s.default)({}, n.props.style, n.props.activeStyle),
                }
              : null
          }
          var r = !1
          return (
            "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = !0),
            (n.state = { IOSupported: r }),
            (n.abortPrefetch = null),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          )
        }
        ;(0, i.default)(t, e)
        var n = t.prototype
        return (
          (n._prefetch = function () {
            var e = window.location.pathname + window.location.search
            this.props._location &&
              this.props._location.pathname &&
              (e = this.props._location.pathname + this.props._location.search)
            var t = b(this.props.to, e),
              n = (0, p.parsePath)(t),
              r = n.pathname + n.search
            if (e !== r) return ___loader.enqueue(r)
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var e = this.io,
                t = e.instance,
                n = e.el
              this.abortPrefetch && this.abortPrefetch.abort(),
                t.unobserve(n),
                t.disconnect()
            }
          }),
          (n.handleRef = function (e) {
            var t,
              n,
              r,
              o = this
            this.props.innerRef &&
            Object.prototype.hasOwnProperty.call(this.props.innerRef, "current")
              ? (this.props.innerRef.current = e)
              : this.props.innerRef && this.props.innerRef(e),
              this.state.IOSupported &&
                e &&
                (this.io =
                  ((t = e),
                  (n = function (e) {
                    e
                      ? (o.abortPrefetch = o._prefetch())
                      : o.abortPrefetch && o.abortPrefetch.abort()
                  }),
                  (r = new window.IntersectionObserver(function (e) {
                    e.forEach(function (e) {
                      t === e.target &&
                        n(e.isIntersecting || e.intersectionRatio > 0)
                    })
                  })).observe(t),
                  { instance: r, el: t }))
          }),
          (n.render = function () {
            var e = this,
              t = this.props,
              n = t.to,
              r = t.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = t.onClick,
              u = t.onMouseEnter,
              f =
                (t.activeClassName,
                t.activeStyle,
                t.innerRef,
                t.partiallyActive,
                t.state),
              h = t.replace,
              g = t._location,
              v = (0, o.default)(t, d)
            var m = b(n, g.pathname)
            return y(m)
              ? c.default.createElement(
                  l.Link,
                  (0, s.default)(
                    {
                      to: m,
                      state: f,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (e) {
                        u && u(e)
                        var t = (0, p.parsePath)(m)
                        ___loader.hovering(t.pathname + t.search)
                      },
                      onClick: function (t) {
                        if (
                          (i && i(t),
                          !(
                            0 !== t.button ||
                            e.props.target ||
                            t.defaultPrevented ||
                            t.metaKey ||
                            t.altKey ||
                            t.ctrlKey ||
                            t.shiftKey
                          ))
                        ) {
                          t.preventDefault()
                          var n = h,
                            r = encodeURI(m) === g.pathname
                          "boolean" != typeof h && r && (n = !0),
                            window.___navigate(m, { state: f, replace: n })
                        }
                        return !0
                      },
                    },
                    v
                  )
                )
              : c.default.createElement("a", (0, s.default)({ href: m }, v))
          }),
          t
        )
      })(c.default.Component)
      x.propTypes = (0, s.default)({}, w, {
        onClick: u.default.func,
        to: u.default.string.isRequired,
        replace: u.default.bool,
        state: u.default.object,
      })
      var P = c.default.forwardRef(function (e, t) {
        return c.default.createElement(O, (0, s.default)({ innerRef: t }, e))
      })
      t.ZP = P
      t.c4 = function (e, t) {
        window.___navigate(b(e, window.location.pathname), t)
      }
    },
    1752: function (e, t) {
      "use strict"
      ;(t.__esModule = !0),
        (t.parsePath = function (e) {
          var t = e || "/",
            n = "",
            r = "",
            o = t.indexOf("#")
          ;-1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)))
          var a = t.indexOf("?")
          ;-1 !== a && ((n = t.substr(a)), (t = t.substr(0, a)))
          return {
            pathname: t,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r,
          }
        })
    },
    9679: function (e, t, n) {
      "use strict"
      t.p2 = t.$C = void 0
      var r = n(1432)
      t.$C = r.ScrollHandler
      var o = n(4855)
      t.p2 = o.useScrollRestoration
    },
    1432: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0)
      var o = r(n(1506)),
        a = r(n(5354)),
        i = (function (e, t) {
          if (!t && e && e.__esModule) return e
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e }
          var n = c(t)
          if (n && n.has(e)) return n.get(e)
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var a in e)
            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
              var i = o ? Object.getOwnPropertyDescriptor(e, a) : null
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = e[a])
            }
          ;(r.default = e), n && n.set(e, r)
          return r
        })(n(7294)),
        s = r(n(5697)),
        u = n(1142)
      function c(e) {
        if ("function" != typeof WeakMap) return null
        var t = new WeakMap(),
          n = new WeakMap()
        return (c = function (e) {
          return e ? n : t
        })(e)
      }
      var l = i.createContext(new u.SessionStorage())
      ;(t.ScrollContext = l), (l.displayName = "GatsbyScrollContext")
      var f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a]
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this)._stateStorage =
              new u.SessionStorage()),
            (t._isTicking = !1),
            (t._latestKnownScrollY = 0),
            (t.scrollListener = function () {
              ;(t._latestKnownScrollY = window.scrollY),
                t._isTicking ||
                  ((t._isTicking = !0),
                  requestAnimationFrame(t._saveScroll.bind((0, o.default)(t))))
            }),
            (t.windowScroll = function (e, n) {
              t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e)
            }),
            (t.scrollToHash = function (e, n) {
              var r = document.getElementById(e.substring(1))
              r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView()
            }),
            (t.shouldUpdateScroll = function (e, n) {
              var r = t.props.shouldUpdateScroll
              return !r || r.call((0, o.default)(t), e, n)
            }),
            t
          )
        }
        ;(0, a.default)(t, e)
        var n = t.prototype
        return (
          (n._saveScroll = function () {
            var e = this.props.location.key || null
            e &&
              this._stateStorage.save(
                this.props.location,
                e,
                this._latestKnownScrollY
              ),
              (this._isTicking = !1)
          }),
          (n.componentDidMount = function () {
            var e
            window.addEventListener("scroll", this.scrollListener)
            var t = this.props.location,
              n = t.key,
              r = t.hash
            n && (e = this._stateStorage.read(this.props.location, n)),
              e
                ? this.windowScroll(e, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0)
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener("scroll", this.scrollListener)
          }),
          (n.componentDidUpdate = function (e) {
            var t,
              n = this.props.location,
              r = n.hash,
              o = n.key
            o && (t = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), e) : this.windowScroll(t, e)
          }),
          (n.render = function () {
            return i.createElement(
              l.Provider,
              { value: this._stateStorage },
              this.props.children
            )
          }),
          t
        )
      })(i.Component)
      ;(t.ScrollHandler = f),
        (f.propTypes = {
          shouldUpdateScroll: s.default.func,
          children: s.default.element.isRequired,
          location: s.default.object.isRequired,
        })
    },
    1142: function (e, t) {
      "use strict"
      ;(t.__esModule = !0), (t.SessionStorage = void 0)
      var n = "___GATSBY_REACT_ROUTER_SCROLL",
        r = (function () {
          function e() {}
          var t = e.prototype
          return (
            (t.read = function (e, t) {
              var r = this.getStateKey(e, t)
              try {
                var o = window.sessionStorage.getItem(r)
                return o ? JSON.parse(o) : 0
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0
              }
            }),
            (t.save = function (e, t, r) {
              var o = this.getStateKey(e, t),
                a = JSON.stringify(r)
              try {
                window.sessionStorage.setItem(o, a)
              } catch (i) {
                ;(window && window[n]) || (window[n] = {}),
                  (window[n][o] = JSON.parse(a))
              }
            }),
            (t.getStateKey = function (e, t) {
              var n = "@@scroll|" + e.pathname
              return null == t ? n : n + "|" + t
            }),
            e
          )
        })()
      t.SessionStorage = r
    },
    4855: function (e, t, n) {
      "use strict"
      ;(t.__esModule = !0),
        (t.useScrollRestoration = function (e) {
          var t = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null)
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (i.current) {
                  var r = n.read(t, e)
                  i.current.scrollTo(0, r || 0)
                }
              },
              [t.key]
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(t, e, i.current.scrollTop)
              },
            }
          )
        })
      var r = n(1432),
        o = n(7294),
        a = n(9499)
    },
    4999: function (e, t, n) {
      t.components = {
        "component---src-pages-404-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(883)]).then(
            n.bind(n, 9616)
          )
        },
        "component---src-pages-index-js": function () {
          return Promise.all([n.e(351), n.e(678)]).then(n.bind(n, 7704))
        },
        "component---src-pages-page-2-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(617)]).then(
            n.bind(n, 9863)
          )
        },
        "component---src-pages-using-ssr-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(476)]).then(
            n.bind(n, 9579)
          )
        },
        "component---src-pages-using-typescript-tsx": function () {
          return Promise.all([n.e(532), n.e(351), n.e(970)]).then(
            n.bind(n, 2815)
          )
        },
        "component---src-templates-using-dsg-js": function () {
          return Promise.all([n.e(532), n.e(351), n.e(713)]).then(
            n.bind(n, 8243)
          )
        },
      }
    },
    5182: function (e, t, n) {
      e.exports = [
        { plugin: n(6988), options: { plugins: [] } },
        {
          plugin: n(992),
          options: {
            plugins: [],
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            display: "minimal-ui",
            icon: "src/images/gatsby-icon.png",
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: "query",
            crossOrigin: "anonymous",
            include_favicon: !0,
            cacheDigest: "4a9773549091c227cd2eb82ccd9c5e3a",
          },
        },
        {
          plugin: n(733),
          options: {
            plugins: [],
            localeJsonSourceName: "locale",
            languages: ["ua", "ru", "en"],
            defaultLanguage: "ru",
            siteUrl: "http://localhost:8000/",
            i18nextOptions: {
              interpolation: { escapeValue: !1 },
              keySeparator: !1,
              nsSeparator: !1,
            },
            pages: [
              {
                matchPath: "/:lang?/blog/:uid",
                getLanguageFromPath: !0,
                excludeLanguages: ["es"],
              },
              { matchPath: "/preview", languages: ["ru"] },
            ],
          },
        },
        { plugin: n(9037), options: { plugins: [] } },
      ]
    },
    7343: function (e, t, n) {
      var r = n(5182),
        o = n(5894).jN,
        a = o.getResourceURLsForPathname,
        i = o.loadPage,
        s = o.loadPageSync
      ;(t.h = function (e, t, n, o) {
        void 0 === t && (t = {})
        var u = r.map(function (n) {
          if (n.plugin[e]) {
            ;(t.getResourceURLsForPathname = a),
              (t.loadPage = i),
              (t.loadPageSync = s)
            var r = n.plugin[e](t, n.options)
            return r && o && (t = o({ args: t, result: r, plugin: n })), r
          }
        })
        return (u = u.filter(function (e) {
          return void 0 !== e
        })).length > 0
          ? u
          : n
          ? [n]
          : []
      }),
        (t.I = function (e, t, n) {
          return r.reduce(function (n, r) {
            return r.plugin[e]
              ? n.then(function () {
                  return r.plugin[e](t, r.options)
                })
              : n
          }, Promise.resolve())
        })
    },
    8110: function (e, t, n) {
      "use strict"
      n.d(t, {
        Z: function () {
          return r
        },
      })
      var r = (function (e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function (t, n) {
              ;(e[t] || (e[t] = [])).push(n)
            },
            off: function (t, n) {
              e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
            },
            emit: function (t, n) {
              ;(e[t] || []).slice().map(function (e) {
                e(n)
              }),
                (e["*"] || []).slice().map(function (e) {
                  e(t, n)
                })
            },
          }
        )
      })()
    },
    2257: function (e, t, n) {
      "use strict"
      n.d(t, {
        UD: function () {
          return p
        },
        Cj: function () {
          return h
        },
        GA: function () {
          return d
        },
        DS: function () {
          return f
        },
      })
      var r = n(2098),
        o = n(1578),
        a = function (e) {
          if (void 0 === e) return e
          var t = e.split("?"),
            n = t[0],
            r = t[1],
            o = void 0 === r ? "" : r
          return (
            o && (o = "?" + o),
            "/" === n
              ? "/" + o
              : "/" === n.charAt(n.length - 1)
              ? n.slice(0, -1) + o
              : n + o
          )
        },
        i = n(969),
        s = new Map(),
        u = [],
        c = function (e) {
          var t = decodeURIComponent(e)
          return (0, o.Z)(t, decodeURIComponent("")).split("#")[0]
        }
      function l(e) {
        return e.startsWith("/") ||
          e.startsWith("https://") ||
          e.startsWith("http://")
          ? e
          : new URL(
              e,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname
      }
      var f = function (e) {
          u = e
        },
        p = function (e) {
          var t = g(e),
            n = u.map(function (e) {
              var t = e.path
              return { path: e.matchPath, originalPath: t }
            }),
            o = (0, r.pick)(n, t)
          return o ? a(o.route.originalPath) : null
        },
        d = function (e) {
          var t = g(e),
            n = u.map(function (e) {
              var t = e.path
              return { path: e.matchPath, originalPath: t }
            }),
            o = (0, r.pick)(n, t)
          return o ? o.params : {}
        },
        h = function e(t) {
          var n = c(l(t))
          if (s.has(n)) return s.get(n)
          var r = (0, i.J)(t)
          if (r) return e(r.toPath)
          var o = p(n)
          return o || (o = g(t)), s.set(n, o), o
        },
        g = function (e) {
          var t = c(l(e))
          return "/index.html" === t && (t = "/"), (t = a(t))
        }
    },
    5444: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          Link: function () {
            return o.ZP
          },
          withAssetPrefix: function () {
            return o.mc
          },
          withPrefix: function () {
            return o.dq
          },
          graphql: function () {
            return d
          },
          parsePath: function () {
            return o.cP
          },
          navigate: function () {
            return o.c4
          },
          useScrollRestoration: function () {
            return a.p2
          },
          StaticQueryContext: function () {
            return c
          },
          StaticQuery: function () {
            return f
          },
          PageRenderer: function () {
            return s.a
          },
          useStaticQuery: function () {
            return p
          },
          prefetchPathname: function () {
            return u
          },
        })
      var r = n(7294),
        o = n(8037),
        a = n(9679),
        i = n(861),
        s = n.n(i),
        u = n(5894).ZP.enqueue,
        c = r.createContext({})
      function l(e) {
        var t = e.staticQueryData,
          n = e.data,
          o = e.query,
          a = e.render,
          i = n ? n.data : t[o] && t[o].data
        return r.createElement(
          r.Fragment,
          null,
          i && a(i),
          !i && r.createElement("div", null, "Loading (StaticQuery)")
        )
      }
      var f = function (e) {
          var t = e.data,
            n = e.query,
            o = e.render,
            a = e.children
          return r.createElement(c.Consumer, null, function (e) {
            return r.createElement(l, {
              data: t,
              query: n,
              render: o || a,
              staticQueryData: e,
            })
          })
        },
        p = function (e) {
          var t
          r.useContext
          var n = r.useContext(c)
          if (isNaN(Number(e)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                e +
                "`);\n"
            )
          if (null !== (t = n[e]) && void 0 !== t && t.data) return n[e].data
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          )
        }
      function d() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        )
      }
    },
    5894: function (e, t, n) {
      "use strict"
      n.d(t, {
        uQ: function () {
          return f
        },
        kL: function () {
          return b
        },
        ZP: function () {
          return x
        },
        hs: function () {
          return P
        },
        jN: function () {
          return O
        },
        N1: function () {
          return w
        },
      })
      var r = n(1721)
      function o(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e)
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e)
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return o(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? o(e, t)
                  : void 0
              )
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      var i = (function (e) {
          if ("undefined" == typeof document) return !1
          var t = document.createElement("link")
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e)
          } catch (n) {
            return !1
          }
          return !1
        })("prefetch")
          ? function (e, t) {
              return new Promise(function (n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link")
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", e),
                    Object.keys(t).forEach(function (e) {
                      o.setAttribute(e, t[e])
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(o)
                } else r()
              })
            }
          : function (e) {
              return new Promise(function (t, n) {
                var r = new XMLHttpRequest()
                r.open("GET", e, !0),
                  (r.onload = function () {
                    200 === r.status ? t() : n()
                  }),
                  r.send(null)
              })
            },
        s = {},
        u = function (e, t) {
          return new Promise(function (n) {
            s[e]
              ? n()
              : i(e, t)
                  .then(function () {
                    n(), (s[e] = !0)
                  })
                  .catch(function () {})
          })
        },
        c = n(8110),
        l = n(2257),
        f = { Error: "error", Success: "success" },
        p = function (e) {
          return (e && e.default) || e
        },
        d = function (e) {
          var t = e.split("?"),
            n = t[0],
            r = t[1]
          return (
            "/page-data/" +
            ("/" === n
              ? "index"
              : (function (e) {
                  return (e = "/" === e[0] ? e.slice(1) : e).endsWith("/")
                    ? e.slice(0, -1)
                    : e
                })(n)) +
            "/page-data.json" +
            (r ? "?" + r : "")
          )
        }
      function h(e, t) {
        return (
          void 0 === t && (t = "GET"),
          new Promise(function (n) {
            var r = new XMLHttpRequest()
            r.open(t, e, !0),
              (r.onreadystatechange = function () {
                4 == r.readyState && n(r)
              }),
              r.send(null)
          })
        )
      }
      var g,
        v = function (e, t) {
          void 0 === t && (t = null)
          var n = {
            componentChunkName: e.componentChunkName,
            path: e.path,
            webpackCompilationHash: e.webpackCompilationHash,
            matchPath: e.matchPath,
            staticQueryHashes: e.staticQueryHashes,
            getServerDataError: e.getServerDataError,
          }
          return { component: t, json: e.result, page: n }
        },
        m = (function () {
          function e(e, t) {
            ;(this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.isPrefetchQueueRunning = !1),
              (this.prefetchQueued = []),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = e),
              (0, l.DS)(t)
          }
          var t = e.prototype
          return (
            (t.memoizedGet = function (e) {
              var t = this,
                n = this.inFlightNetworkRequests.get(e)
              return (
                n ||
                  ((n = h(e, "GET")), this.inFlightNetworkRequests.set(e, n)),
                n
                  .then(function (n) {
                    return t.inFlightNetworkRequests.delete(e), n
                  })
                  .catch(function (n) {
                    throw (t.inFlightNetworkRequests.delete(e), n)
                  })
              )
            }),
            (t.setApiRunner = function (e) {
              ;(this.apiRunner = e),
                (this.prefetchDisabled = e("disableCorePrefetching").some(
                  function (e) {
                    return e
                  }
                ))
            }),
            (t.fetchPageDataJson = function (e) {
              var t = this,
                n = e.pagePath,
                r = e.retries,
                o = void 0 === r ? 0 : r,
                a = d(n)
              return this.memoizedGet(a).then(function (r) {
                var a = r.status,
                  i = r.responseText
                if (200 === a)
                  try {
                    var s = JSON.parse(i)
                    if (void 0 === s.path)
                      throw new Error("not a valid pageData response")
                    var u = n.split("?")[1]
                    return (
                      u && !s.path.includes(u) && (s.path += "?" + u),
                      Object.assign(e, { status: f.Success, payload: s })
                    )
                  } catch (c) {}
                return 404 === a || 200 === a
                  ? "/404.html" === n || "/500.html" === n
                    ? Object.assign(e, { status: f.Error })
                    : t.fetchPageDataJson(
                        Object.assign(e, {
                          pagePath: "/404.html",
                          notFound: !0,
                        })
                      )
                  : 500 === a
                  ? t.fetchPageDataJson(
                      Object.assign(e, {
                        pagePath: "/500.html",
                        internalServerError: !0,
                      })
                    )
                  : o < 3
                  ? t.fetchPageDataJson(Object.assign(e, { retries: o + 1 }))
                  : Object.assign(e, { status: f.Error })
              })
            }),
            (t.loadPageDataJson = function (e) {
              var t = this,
                n = (0, l.Cj)(e)
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n)
                return Promise.resolve(r)
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function (e) {
                return t.pageDataDb.set(n, e), e
              })
            }),
            (t.findMatchPath = function (e) {
              return (0, l.UD)(e)
            }),
            (t.loadPage = function (e) {
              var t = this,
                n = (0, l.Cj)(e)
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n)
                return r.error
                  ? { error: r.error, status: r.status }
                  : Promise.resolve(r.payload)
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n)
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n),
              ]).then(function (e) {
                var r = e[1]
                if (r.status === f.Error) return { status: f.Error }
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  s = a.staticQueryHashes,
                  u = void 0 === s ? [] : s,
                  l = {},
                  p = t.loadComponent(i).then(function (t) {
                    var n
                    return (
                      (l.createdAt = new Date()),
                      !t || t instanceof Error
                        ? ((l.status = f.Error), (l.error = t))
                        : ((l.status = f.Success),
                          !0 === r.notFound && (l.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: e[0]
                              ? e[0].webpackCompilationHash
                              : "",
                          })),
                          (n = v(o, t))),
                      n
                    )
                  }),
                  d = Promise.all(
                    u.map(function (e) {
                      if (t.staticQueryDb[e]) {
                        var n = t.staticQueryDb[e]
                        return { staticQueryHash: e, jsonPayload: n }
                      }
                      return t
                        .memoizedGet("/page-data/sq/d/" + e + ".json")
                        .then(function (t) {
                          var n = JSON.parse(t.responseText)
                          return { staticQueryHash: e, jsonPayload: n }
                        })
                        .catch(function () {
                          throw new Error(
                            "We couldn't load \"/page-data/sq/d/" + e + '.json"'
                          )
                        })
                    })
                  ).then(function (e) {
                    var n = {}
                    return (
                      e.forEach(function (e) {
                        var r = e.staticQueryHash,
                          o = e.jsonPayload
                        ;(n[r] = o), (t.staticQueryDb[r] = o)
                      }),
                      n
                    )
                  })
                return Promise.all([p, d])
                  .then(function (e) {
                    var r,
                      o = e[0],
                      a = e[1]
                    return (
                      o &&
                        ((r = Object.assign({}, o, { staticQueryResults: a })),
                        (l.payload = r),
                        c.Z.emit("onPostLoadPageResources", {
                          page: r,
                          pageResources: r,
                        })),
                      t.pageDb.set(n, l),
                      l.error ? { error: l.error, status: l.status } : r
                    )
                  })
                  .catch(function (e) {
                    return { error: e, status: f.Error }
                  })
              })
              return (
                o
                  .then(function () {
                    t.inFlightDb.delete(n)
                  })
                  .catch(function (e) {
                    throw (t.inFlightDb.delete(n), e)
                  }),
                this.inFlightDb.set(n, o),
                o
              )
            }),
            (t.loadPageSync = function (e, t) {
              void 0 === t && (t = {})
              var n = (0, l.Cj)(e)
              if (this.pageDb.has(n)) {
                var r,
                  o = this.pageDb.get(n)
                if (o.payload) return o.payload
                if (null !== (r = t) && void 0 !== r && r.withErrorDetails)
                  return { error: o.error, status: o.status }
              }
            }),
            (t.shouldPrefetch = function (e) {
              return (
                !!(function () {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1
                    if (navigator.connection.saveData) return !1
                  }
                  return !0
                })() && !this.pageDb.has(e)
              )
            }),
            (t.prefetch = function (e) {
              var t = this
              if (!this.shouldPrefetch(e))
                return {
                  then: function (e) {
                    return e(!1)
                  },
                  abort: function () {},
                }
              if (this.prefetchTriggered.has(e))
                return {
                  then: function (e) {
                    return e(!0)
                  },
                  abort: function () {},
                }
              var n = { resolve: null, reject: null, promise: null }
              ;(n.promise = new Promise(function (e, t) {
                ;(n.resolve = e), (n.reject = t)
              })),
                this.prefetchQueued.push([e, n])
              var r = new AbortController()
              return (
                r.signal.addEventListener("abort", function () {
                  var n = t.prefetchQueued.findIndex(function (t) {
                    return t[0] === e
                  })
                  ;-1 !== n && t.prefetchQueued.splice(n, 1)
                }),
                this.isPrefetchQueueRunning ||
                  ((this.isPrefetchQueueRunning = !0),
                  setTimeout(function () {
                    t._processNextPrefetchBatch()
                  }, 3e3)),
                {
                  then: function (e, t) {
                    return n.promise.then(e, t)
                  },
                  abort: r.abort.bind(r),
                }
              )
            }),
            (t._processNextPrefetchBatch = function () {
              var e = this
              ;(
                window.requestIdleCallback ||
                function (e) {
                  return setTimeout(e, 0)
                }
              )(function () {
                var t = e.prefetchQueued.splice(0, 4),
                  n = Promise.all(
                    t.map(function (t) {
                      var n = t[0],
                        r = t[1]
                      return (
                        e.prefetchTriggered.has(n) ||
                          (e.apiRunner("onPrefetchPathname", { pathname: n }),
                          e.prefetchTriggered.add(n)),
                        e.prefetchDisabled
                          ? r.resolve(!1)
                          : e.doPrefetch((0, l.Cj)(n)).then(function () {
                              e.prefetchCompleted.has(n) ||
                                (e.apiRunner("onPostPrefetchPathname", {
                                  pathname: n,
                                }),
                                e.prefetchCompleted.add(n)),
                                r.resolve(!0)
                            })
                      )
                    })
                  )
                e.prefetchQueued.length
                  ? n.then(function () {
                      setTimeout(function () {
                        e._processNextPrefetchBatch()
                      }, 3e3)
                    })
                  : (e.isPrefetchQueueRunning = !1)
              })
            }),
            (t.doPrefetch = function (e) {
              var t = this,
                n = d(e)
              return u(n, { crossOrigin: "anonymous", as: "fetch" }).then(
                function () {
                  return t.loadPageDataJson(e)
                }
              )
            }),
            (t.hovering = function (e) {
              this.loadPage(e)
            }),
            (t.getResourceURLsForPathname = function (e) {
              var t = (0, l.Cj)(e),
                n = this.pageDataDb.get(t)
              if (n) {
                var r = v(n.payload)
                return [].concat(a(y(r.page.componentChunkName)), [d(t)])
              }
              return null
            }),
            (t.isPageNotFound = function (e) {
              var t = (0, l.Cj)(e),
                n = this.pageDb.get(t)
              return !n || n.notFound
            }),
            (t.loadAppData = function (e) {
              var t = this
              return (
                void 0 === e && (e = 0),
                this.memoizedGet("/page-data/app-data.json").then(function (n) {
                  var r,
                    o = n.status,
                    a = n.responseText
                  if (200 !== o && e < 3) return t.loadAppData(e + 1)
                  if (200 === o)
                    try {
                      var i = JSON.parse(a)
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error("not a valid app-data response")
                      r = i
                    } catch (s) {}
                  return r
                })
              )
            }),
            e
          )
        })(),
        y = function (e) {
          return (window.___chunkMapping[e] || []).map(function (e) {
            return "" + e
          })
        },
        b = (function (e) {
          function t(t, n, r) {
            var o
            return (
              (o =
                e.call(
                  this,
                  function (e) {
                    if (!t.components[e])
                      throw new Error(
                        "We couldn't find the correct component chunk with the name " +
                          e
                      )
                    return t.components[e]()
                      .then(p)
                      .catch(function (e) {
                        return e
                      })
                  },
                  n
                ) || this),
              r &&
                o.pageDataDb.set((0, l.Cj)(r.path), {
                  pagePath: r.path,
                  payload: r,
                  status: "success",
                }),
              o
            )
          }
          ;(0, r.Z)(t, e)
          var n = t.prototype
          return (
            (n.doPrefetch = function (t) {
              return e.prototype.doPrefetch.call(this, t).then(function (e) {
                if (e.status !== f.Success) return Promise.resolve()
                var t = e.payload,
                  n = t.componentChunkName,
                  r = y(n)
                return Promise.all(r.map(u)).then(function () {
                  return t
                })
              })
            }),
            (n.loadPageDataJson = function (t) {
              return e.prototype.loadPageDataJson
                .call(this, t)
                .then(function (e) {
                  return e.notFound
                    ? h(t, "HEAD").then(function (t) {
                        return 200 === t.status ? { status: f.Error } : e
                      })
                    : e
                })
            }),
            t
          )
        })(m),
        w = function (e) {
          g = e
        },
        O = {
          enqueue: function (e) {
            return g.prefetch(e)
          },
          getResourceURLsForPathname: function (e) {
            return g.getResourceURLsForPathname(e)
          },
          loadPage: function (e) {
            return g.loadPage(e)
          },
          loadPageSync: function (e, t) {
            return void 0 === t && (t = {}), g.loadPageSync(e, t)
          },
          prefetch: function (e) {
            return g.prefetch(e)
          },
          isPageNotFound: function (e) {
            return g.isPageNotFound(e)
          },
          hovering: function (e) {
            return g.hovering(e)
          },
          loadAppData: function () {
            return g.loadAppData()
          },
        },
        x = O
      function P() {
        return g ? g.staticQueryDb : {}
      }
    },
    804: function (e, t, n) {
      "use strict"
      var r = n(1721),
        o = n(7294),
        a = n(7343),
        i = n(2257),
        s = (function (e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return (
            (0, r.Z)(t, e),
            (t.prototype.render = function () {
              var e = Object.assign({}, this.props, {
                  params: Object.assign(
                    {},
                    (0, i.GA)(this.props.location.pathname),
                    this.props.pageResources.json.pageContext.__params
                  ),
                }),
                t = (0, o.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, e, {
                    key: this.props.path || this.props.pageResources.page.path,
                  })
                )
              return (0, a.h)(
                "wrapPageElement",
                { element: t, props: e },
                t,
                function (t) {
                  return { element: t.result, props: e }
                }
              ).pop()
            }),
            t
          )
        })(o.Component)
      t.Z = s
    },
    9917: function (e, t, n) {
      "use strict"
      var r = n(1721),
        o = n(7343),
        a = n(7294),
        i = n(3935),
        s = n(9499),
        u = n(9679),
        c = n(5444),
        l = n(5894),
        f = n(969),
        p = n(8110),
        d = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          },
          "aria-live": "assertive",
          "aria-atomic": "true",
        },
        h = n(2393),
        g = n(8037)
      function v(e) {
        var t = (0, f.J)(e),
          n = window.location,
          r = n.hash,
          o = n.search
        return null != t && (window.___replace(t.toPath + o + r), !0)
      }
      var m = ""
      window.addEventListener("unhandledrejection", function (e) {
        ;/loading chunk \d* failed./i.test(e.reason) &&
          m &&
          (window.location.pathname = m)
      })
      var y = function (e, t) {
          v(e.pathname) ||
            ((m = e.pathname),
            (0, o.h)("onPreRouteUpdate", { location: e, prevLocation: t }))
        },
        b = function (e, t) {
          v(e.pathname) ||
            (0, o.h)("onRouteUpdate", { location: e, prevLocation: t })
        },
        w = function (e, t) {
          if ((void 0 === t && (t = {}), "number" != typeof e)) {
            var n = (0, g.cP)(e),
              r = n.pathname,
              a = n.search,
              i = n.hash,
              u = (0, f.J)(r)
            if ((u && (e = u.toPath + a + i), window.___swUpdated))
              window.location = r + a + i
            else {
              var c = setTimeout(function () {
                p.Z.emit("onDelayedLoadPageResources", { pathname: r }),
                  (0, o.h)("onRouteUpdateDelayed", {
                    location: window.location,
                  })
              }, 1e3)
              l.ZP.loadPage(r + a).then(function (n) {
                if (!n || n.status === l.uQ.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = r),
                    void clearTimeout(c)
                  )
                n &&
                  n.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources",
                    }),
                  (window.location = r + a + i)),
                  (0, s.navigate)(e, t),
                  clearTimeout(c)
              })
            }
          } else h.V5.navigate(e)
        }
      function O(e, t) {
        var n = this,
          r = t.location,
          a = r.pathname,
          i = r.hash,
          s = (0, o.h)("shouldUpdateScroll", {
            prevRouterProps: e,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function (e) {
              return [0, n._stateStorage.read(e, e.key)]
            },
          })
        if (s.length > 0) return s[s.length - 1]
        if (e && e.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0]
        return !0
      }
      var x = (function (e) {
          function t(t) {
            var n
            return (
              ((n = e.call(this, t) || this).announcementRef = a.createRef()), n
            )
          }
          ;(0, r.Z)(t, e)
          var n = t.prototype
          return (
            (n.componentDidUpdate = function (e, t) {
              var n = this
              requestAnimationFrame(function () {
                var e = "new page at " + n.props.location.pathname
                document.title && (e = document.title)
                var t = document.querySelectorAll("#gatsby-focus-wrapper h1")
                t && t.length && (e = t[0].textContent)
                var r = "Navigated to " + e
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r)
              })
            }),
            (n.render = function () {
              return a.createElement(
                "div",
                Object.assign({}, d, { ref: this.announcementRef })
              )
            }),
            t
          )
        })(a.Component),
        P = function (e, t) {
          var n, r
          return (
            e.href !== t.href ||
            (null == e || null === (n = e.state) || void 0 === n
              ? void 0
              : n.key) !==
              (null == t || null === (r = t.state) || void 0 === r
                ? void 0
                : r.key)
          )
        },
        k = (function (e) {
          function t(t) {
            var n
            return (n = e.call(this, t) || this), y(t.location, null), n
          }
          ;(0, r.Z)(t, e)
          var n = t.prototype
          return (
            (n.componentDidMount = function () {
              b(this.props.location, null)
            }),
            (n.shouldComponentUpdate = function (e) {
              return (
                !!P(e.location, this.props.location) &&
                (y(this.props.location, e.location), !0)
              )
            }),
            (n.componentDidUpdate = function (e) {
              P(e.location, this.props.location) &&
                b(this.props.location, e.location)
            }),
            (n.render = function () {
              return a.createElement(
                a.Fragment,
                null,
                this.props.children,
                a.createElement(x, { location: location })
              )
            }),
            t
          )
        })(a.Component),
        S = n(804),
        j = n(4999)
      function E(e, t) {
        for (var n in e) if (!(n in t)) return !0
        for (var r in t) if (e[r] !== t[r]) return !0
        return !1
      }
      var R = (function (e) {
          function t(t) {
            var n
            n = e.call(this) || this
            var r = t.location,
              o = t.pageResources
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources:
                  o ||
                  l.ZP.loadPageSync(r.pathname + r.search, {
                    withErrorDetails: !0,
                  }),
              }),
              n
            )
          }
          ;(0, r.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var n = e.location
              return t.location.href !== n.href
                ? {
                    pageResources: l.ZP.loadPageSync(n.pathname + n.search, {
                      withErrorDetails: !0,
                    }),
                    location: Object.assign({}, n),
                  }
                : { location: Object.assign({}, n) }
            })
          var n = t.prototype
          return (
            (n.loadResources = function (e) {
              var t = this
              l.ZP.loadPage(e).then(function (n) {
                n && n.status !== l.uQ.Error
                  ? t.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = e))
              })
            }),
            (n.shouldComponentUpdate = function (e, t) {
              return t.pageResources
                ? this.state.pageResources !== t.pageResources ||
                    this.state.pageResources.component !==
                      t.pageResources.component ||
                    this.state.pageResources.json !== t.pageResources.json ||
                    !(
                      this.state.location.key === t.location.key ||
                      !t.pageResources.page ||
                      (!t.pageResources.page.matchPath &&
                        !t.pageResources.page.path)
                    ) ||
                    (function (e, t, n) {
                      return E(e.props, t) || E(e.state, n)
                    })(this, e, t)
                : (this.loadResources(e.location.pathname + e.location.search),
                  !1)
            }),
            (n.render = function () {
              return this.props.children(this.state)
            }),
            t
          )
        })(a.Component),
        C = n(1578),
        L = JSON.parse(
          '[{"path":"/en/404.html","matchPath":"/en/404.html"},{"path":"/en/page-2/","matchPath":"/en/page-2/"},{"path":"/en/using-dsg","matchPath":"/en/using-dsg"},{"path":"/en/using-ssr/","matchPath":"/en/using-ssr/"},{"path":"/en/using-typescript/","matchPath":"/en/using-typescript/"},{"path":"/ua/404.html","matchPath":"/ua/404.html"},{"path":"/ua/page-2/","matchPath":"/ua/page-2/"},{"path":"/ua/using-dsg","matchPath":"/ua/using-dsg"},{"path":"/ua/using-ssr/","matchPath":"/ua/using-ssr/"},{"path":"/ua/using-typescript/","matchPath":"/ua/using-typescript/"},{"path":"/en/","matchPath":"/en/"},{"path":"/ua/","matchPath":"/ua/"},{"path":"/en/404/","matchPath":"/en/*"},{"path":"/ua/404/","matchPath":"/ua/*"}]'
        ),
        _ = new l.kL(j, L, window.pageData)
      ;(0, l.N1)(_),
        _.setApiRunner(o.h),
        (window.asyncRequires = j),
        (window.___emitter = p.Z),
        (window.___loader = l.jN),
        h.V5.listen(function (e) {
          e.location.action = e.action
        }),
        (window.___push = function (e) {
          return w(e, { replace: !1 })
        }),
        (window.___replace = function (e) {
          return w(e, { replace: !0 })
        }),
        (window.___navigate = function (e, t) {
          return w(e, t)
        }),
        (0, o.I)("onClientEntry").then(function () {
          ;(0, o.h)("registerServiceWorker").filter(Boolean).length > 0 &&
            n(154)
          var e = function (e) {
              return a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                a.createElement(S.Z, e)
              )
            },
            t = a.createContext({}),
            f = (function (e) {
              function n() {
                return e.apply(this, arguments) || this
              }
              return (
                (0, r.Z)(n, e),
                (n.prototype.render = function () {
                  var e = this.props.children
                  return a.createElement(s.Location, null, function (n) {
                    var r = n.location
                    return a.createElement(R, { location: r }, function (n) {
                      var r = n.pageResources,
                        o = n.location,
                        i = (0, l.hs)()
                      return a.createElement(
                        c.StaticQueryContext.Provider,
                        { value: i },
                        a.createElement(
                          t.Provider,
                          { value: { pageResources: r, location: o } },
                          e
                        )
                      )
                    })
                  })
                }),
                n
              )
            })(a.Component),
            p = (function (n) {
              function o() {
                return n.apply(this, arguments) || this
              }
              return (
                (0, r.Z)(o, n),
                (o.prototype.render = function () {
                  var n = this
                  return a.createElement(t.Consumer, null, function (t) {
                    var r = t.pageResources,
                      o = t.location
                    return a.createElement(
                      k,
                      { location: o },
                      a.createElement(
                        u.$C,
                        { location: o, shouldUpdateScroll: O },
                        a.createElement(
                          s.Router,
                          {
                            basepath: "",
                            location: o,
                            id: "gatsby-focus-wrapper",
                          },
                          a.createElement(
                            e,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path ||
                                  "/500.html" === r.page.path
                                    ? (0, C.Z)(o.pathname, "")
                                    : encodeURI(
                                        (r.page.matchPath || r.page.path).split(
                                          "?"
                                        )[0]
                                      ),
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    )
                  })
                }),
                o
              )
            })(a.Component),
            d = window,
            h = d.pagePath,
            g = d.location
          h &&
            "" + h !== g.pathname + (h.includes("?") ? g.search : "") &&
            !(
              _.findMatchPath((0, C.Z)(g.pathname, "")) ||
              h.match(/^\/(404|500)(\/?|.html)$/) ||
              h.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            (0, s.navigate)(
              "" + h + (h.includes("?") ? "" : g.search) + g.hash,
              { replace: !0 }
            ),
            l.jN.loadPage(g.pathname + g.search).then(function (e) {
              if (!e || e.status === l.uQ.Error) {
                var t =
                  "page resources for " +
                  g.pathname +
                  " not found. Not rendering React"
                if (e && e.error) throw (console.error(t), e.error)
                throw new Error(t)
              }
              window.___webpackCompilationHash = e.page.webpackCompilationHash
              var n = (0, o.h)(
                  "wrapRootElement",
                  { element: a.createElement(p, null) },
                  a.createElement(p, null),
                  function (e) {
                    return { element: e.result }
                  }
                ).pop(),
                r = function () {
                  var e = a.useRef(!1)
                  return (
                    a.useEffect(function () {
                      e.current ||
                        ((e.current = !0),
                        performance.mark &&
                          performance.mark("onInitialClientRender"),
                        (0, o.h)("onInitialClientRender"))
                    }, []),
                    a.createElement(f, null, n)
                  )
                },
                s = (0, o.h)(
                  "replaceHydrateFunction",
                  void 0,
                  i.hydrateRoot ? i.hydrateRoot : i.hydrate
                )[0]
              function u() {
                var e =
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : null
                s === i.hydrateRoot
                  ? s(e, a.createElement(r, null))
                  : s(a.createElement(r, null), e)
              }
              var c = document
              if (
                "complete" === c.readyState ||
                ("loading" !== c.readyState && !c.documentElement.doScroll)
              )
                setTimeout(function () {
                  u()
                }, 0)
              else {
                var d = function e() {
                  c.removeEventListener("DOMContentLoaded", e, !1),
                    window.removeEventListener("load", e, !1),
                    u()
                }
                c.addEventListener("DOMContentLoaded", d, !1),
                  window.addEventListener("load", d, !1)
              }
            })
        })
    },
    6947: function (e, t, n) {
      "use strict"
      n.r(t)
      var r = n(7294),
        o = n(5894),
        a = n(804)
      t.default = function (e) {
        var t = e.location,
          n = o.ZP.loadPageSync(t.pathname)
        return n
          ? r.createElement(
              a.Z,
              Object.assign({ location: t, pageResources: n }, n.json)
            )
          : null
      }
    },
    861: function (e, t, n) {
      var r
      e.exports = ((r = n(6947)) && r.default) || r
    },
    3639: function (e, t) {
      t.O = function (e) {
        return e
      }
    },
    969: function (e, t, n) {
      "use strict"
      n.d(t, {
        J: function () {
          return a
        },
      })
      var r = new Map(),
        o = new Map()
      function a(e) {
        var t = r.get(e)
        return t || (t = o.get(e.toLowerCase())), t
      }
      ;[].forEach(function (e) {
        e.ignoreCase ? o.set(e.fromPath, e) : r.set(e.fromPath, e)
      })
    },
    154: function (e, t, n) {
      "use strict"
      n.r(t)
      var r = n(7343)
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/sw.js")
            .then(function (e) {
              e.addEventListener("updatefound", function () {
                ;(0, r.h)("onServiceWorkerUpdateFound", { serviceWorker: e })
                var t = e.installing
                console.log("installingWorker", t),
                  t.addEventListener("statechange", function () {
                    switch (t.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.h)("onServiceWorkerUpdateReady", {
                              serviceWorker: e,
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            (0, r.h)("onServiceWorkerInstalled", {
                              serviceWorker: e,
                            }))
                        break
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          (0, r.h)("onServiceWorkerRedundant", {
                            serviceWorker: e,
                          })
                        break
                      case "activated":
                        ;(0, r.h)("onServiceWorkerActive", { serviceWorker: e })
                    }
                  })
              })
            })
            .catch(function (e) {
              console.error("Error during service worker registration:", e)
            })
    },
    1578: function (e, t, n) {
      "use strict"
      function r(e, t) {
        return (
          void 0 === t && (t = ""),
          t
            ? e === t
              ? "/"
              : e.startsWith(t + "/")
              ? e.slice(t.length)
              : e
            : e
        )
      }
      n.d(t, {
        Z: function () {
          return r
        },
      })
    },
    9037: function () {},
    6125: function (e, t, n) {
      "use strict"
      n.d(t, {
        L: function () {
          return b
        },
        M: function () {
          return j
        },
        P: function () {
          return S
        },
        _: function () {
          return c
        },
        a: function () {
          return s
        },
        b: function () {
          return h
        },
        c: function () {
          return F
        },
        g: function () {
          return g
        },
      })
      var r = n(7294),
        o = (n(4041), n(1224), n(5697)),
        a = n.n(o),
        i = n(3935)
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          s.apply(this, arguments)
        )
      }
      function u(e, t) {
        return (
          (u =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          u(e, t)
        )
      }
      function c(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = {},
          a = Object.keys(e)
        for (r = 0; r < a.length; r++)
          t.indexOf((n = a[r])) >= 0 || (o[n] = e[n])
        return o
      }
      var l = new Set(),
        f = function () {
          return (
            "undefined" != typeof HTMLImageElement &&
            "loading" in HTMLImageElement.prototype
          )
        }
      function p(e) {
        e && l.add(e)
      }
      function d(e) {
        return l.has(e)
      }
      function h(e, t, r, o, a, i, u, c) {
        var l, f
        return (
          void 0 === c && (c = {}),
          null != u &&
            u.current &&
            !("objectFit" in document.documentElement.style) &&
            ((u.current.dataset.objectFit =
              null != (l = c.objectFit) ? l : "cover"),
            (u.current.dataset.objectPosition =
              "" + (null != (f = c.objectPosition) ? f : "50% 50%")),
            (function (e) {
              try {
                var t = function () {
                    window.objectFitPolyfill(e.current)
                  },
                  r = (function () {
                    if (!("objectFitPolyfill" in window))
                      return Promise.resolve(
                        n.e(231).then(n.t.bind(n, 7231, 23))
                      ).then(function () {})
                  })()
                Promise.resolve(r && r.then ? r.then(t) : t())
              } catch (e) {
                return Promise.reject(e)
              }
            })(u)),
          s({}, r, {
            loading: o,
            shouldLoad: e,
            "data-main-image": "",
            style: s({}, c, { opacity: t ? 1 : 0 }),
            onLoad: function (e) {
              if (!t) {
                p(i)
                var n = e.currentTarget,
                  r = new Image()
                ;(r.src = n.currentSrc),
                  r.decode
                    ? r
                        .decode()
                        .catch(function () {})
                        .then(function () {
                          a(!0)
                        })
                    : a(!0)
              }
            },
            ref: u,
          })
        )
      }
      function g(e, t, n, r, o, a, i, u) {
        var c = {}
        a &&
          ((c.backgroundColor = a),
          "fixed" === n
            ? ((c.width = r),
              (c.height = o),
              (c.backgroundColor = a),
              (c.position = "relative"))
            : ("constrained" === n || "fullWidth" === n) &&
              ((c.position = "absolute"),
              (c.top = 0),
              (c.left = 0),
              (c.bottom = 0),
              (c.right = 0))),
          i && (c.objectFit = i),
          u && (c.objectPosition = u)
        var l = s({}, e, {
          "aria-hidden": !0,
          "data-placeholder-image": "",
          style: s(
            { opacity: t ? 0 : 1, transition: "opacity 500ms linear" },
            c
          ),
        })
        return l
      }
      var v,
        m = ["children"],
        y = function (e) {
          var t = e.layout,
            n = e.width,
            o = e.height
          return "fullWidth" === t
            ? r.createElement("div", {
                "aria-hidden": !0,
                style: { paddingTop: (o / n) * 100 + "%" },
              })
            : "constrained" === t
            ? r.createElement(
                "div",
                { style: { maxWidth: n, display: "block" } },
                r.createElement("img", {
                  alt: "",
                  role: "presentation",
                  "aria-hidden": "true",
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    o +
                    "' width='" +
                    n +
                    "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                  style: {
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  },
                })
              )
            : null
        },
        b = function (e) {
          var t = e.children,
            n = c(e, m)
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(y, s({}, n)),
            t,
            !1
          )
        },
        w = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
        O = ["fallback", "sources", "shouldLoad"],
        x = function (e) {
          var t = e.src,
            n = e.srcSet,
            o = e.loading,
            a = e.alt,
            i = void 0 === a ? "" : a,
            u = e.shouldLoad,
            l = e.innerRef,
            f = c(e, w)
          return r.createElement(
            "img",
            s({}, f, {
              decoding: "async",
              loading: o,
              src: u ? t : void 0,
              "data-src": u ? void 0 : t,
              srcSet: u ? n : void 0,
              "data-srcset": u ? void 0 : n,
              alt: i,
              ref: l,
            })
          )
        },
        P = (0, r.forwardRef)(function (e, t) {
          var n = e.fallback,
            o = e.sources,
            a = void 0 === o ? [] : o,
            i = e.shouldLoad,
            u = void 0 === i || i,
            l = c(e, O),
            f = l.sizes || (null == n ? void 0 : n.sizes),
            p = r.createElement(
              x,
              s({}, l, n, { sizes: f, shouldLoad: u, innerRef: t })
            )
          return a.length
            ? r.createElement(
                "picture",
                null,
                a.map(function (e) {
                  var t = e.media,
                    n = e.srcSet,
                    o = e.type
                  return r.createElement("source", {
                    key: t + "-" + o + "-" + n,
                    type: o,
                    media: t,
                    srcSet: u ? n : void 0,
                    "data-srcset": u ? void 0 : n,
                    sizes: f,
                  })
                }),
                p
              )
            : p
        })
      ;(x.propTypes = {
        src: o.string.isRequired,
        alt: o.string.isRequired,
        sizes: o.string,
        srcSet: o.string,
        shouldLoad: o.bool,
      }),
        (P.displayName = "Picture"),
        (P.propTypes = {
          alt: o.string.isRequired,
          shouldLoad: o.bool,
          fallback: o.exact({
            src: o.string.isRequired,
            srcSet: o.string,
            sizes: o.string,
          }),
          sources: o.arrayOf(
            o.oneOfType([
              o.exact({
                media: o.string.isRequired,
                type: o.string,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
              o.exact({
                media: o.string,
                type: o.string.isRequired,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
            ])
          ),
        })
      var k = ["fallback"],
        S = function (e) {
          var t = e.fallback,
            n = c(e, k)
          return t
            ? r.createElement(
                P,
                s({}, n, { fallback: { src: t }, "aria-hidden": !0, alt: "" })
              )
            : r.createElement("div", s({}, n))
        }
      ;(S.displayName = "Placeholder"),
        (S.propTypes = {
          fallback: o.string,
          sources: null == (v = P.propTypes) ? void 0 : v.sources,
          alt: function (e, t, n) {
            return e[t]
              ? new Error(
                  "Invalid prop `" +
                    t +
                    "` supplied to `" +
                    n +
                    "`. Validation failed."
                )
              : null
          },
        })
      var j = (0, r.forwardRef)(function (e, t) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(P, s({ ref: t }, e)),
          r.createElement(
            "noscript",
            null,
            r.createElement(P, s({}, e, { shouldLoad: !0 }))
          )
        )
      })
      ;(j.displayName = "MainImage"), (j.propTypes = P.propTypes)
      var E = function (e, t, n) {
          return e.alt || "" === e.alt
            ? a().string.apply(
                a(),
                [e, t, n].concat([].slice.call(arguments, 3))
              )
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html'
              )
        },
        R = { image: a().object.isRequired, alt: E },
        C = ["style", "className"],
        L = (function (e) {
          var t, o
          function a(t) {
            var n
            return (
              ((n = e.call(this, t) || this).root = (0, r.createRef)()),
              (n.hydrated = { current: !1 }),
              (n.forceRender = { current: !1 }),
              (n.lazyHydrator = null),
              (n.ref = (0, r.createRef)()),
              (n.unobserveRef = void 0),
              (n.state = { isLoading: f(), isLoaded: !1 }),
              n
            )
          }
          ;(o = e),
            ((t = a).prototype = Object.create(o.prototype)),
            (t.prototype.constructor = t),
            u(t, o)
          var l = a.prototype
          return (
            (l._lazyHydrate = function (e, t) {
              var r = this,
                o = this.root.current.querySelector("[data-gatsby-image-ssr]")
              return f() && o && !this.hydrated.current
                ? ((this.hydrated.current = !0), Promise.resolve())
                : n
                    .e(503)
                    .then(n.bind(n, 9503))
                    .then(function (n) {
                      var o = n.lazyHydrate,
                        a = JSON.stringify(r.props.image.images)
                      r.lazyHydrator = o(
                        s(
                          {
                            image: e.image.images,
                            isLoading: t.isLoading || d(a),
                            isLoaded: t.isLoaded || d(a),
                            toggleIsLoaded: function () {
                              null == e.onLoad || e.onLoad(),
                                r.setState({ isLoaded: !0 })
                            },
                            ref: r.ref,
                          },
                          e
                        ),
                        r.root,
                        r.hydrated,
                        r.forceRender
                      )
                    })
            }),
            (l._setupIntersectionObserver = function (e) {
              var t = this
              void 0 === e && (e = !0),
                n
                  .e(175)
                  .then(n.bind(n, 7175))
                  .then(function (n) {
                    var r = (0, n.createIntersectionObserver)(function () {
                      if (t.root.current) {
                        var n = JSON.stringify(t.props.image.images)
                        null == t.props.onStartLoad ||
                          t.props.onStartLoad({ wasCached: e && d(n) }),
                          t.setState({ isLoading: !0, isLoaded: e && d(n) })
                      }
                    })
                    t.root.current && (t.unobserveRef = r(t.root))
                  })
            }),
            (l.shouldComponentUpdate = function (e, t) {
              var n = this,
                r = !1
              return (
                this.state.isLoading ||
                  !t.isLoading ||
                  t.isLoaded ||
                  (this.forceRender.current = !0),
                this.props.image.images !== e.image.images &&
                  (this.unobserveRef &&
                    (this.unobserveRef(),
                    this.hydrated.current &&
                      this.lazyHydrator &&
                      (0, i.render)(null, this.root.current)),
                  this.setState({ isLoading: !1, isLoaded: !1 }, function () {
                    n._setupIntersectionObserver(!1)
                  }),
                  (r = !0)),
                this.root.current && !r && this._lazyHydrate(e, t),
                !1
              )
            }),
            (l.componentDidMount = function () {
              if (this.root.current) {
                var e = this.root.current.querySelector(
                    "[data-gatsby-image-ssr]"
                  ),
                  t = JSON.stringify(this.props.image.images)
                if (f() && e) {
                  var n, r
                  if (
                    (null == (n = (r = this.props).onStartLoad) ||
                      n.call(r, { wasCached: !1 }),
                    e.complete)
                  ) {
                    var o, a
                    null == (o = (a = this.props).onLoad) || o.call(a), p(t)
                  } else {
                    var i = this
                    e.addEventListener("load", function n() {
                      e.removeEventListener("load", n),
                        null == i.props.onLoad || i.props.onLoad(),
                        p(t)
                    })
                  }
                  return
                }
                this._setupIntersectionObserver(!0)
              }
            }),
            (l.componentWillUnmount = function () {
              this.unobserveRef &&
                (this.unobserveRef(),
                this.hydrated.current &&
                  this.lazyHydrator &&
                  this.lazyHydrator())
            }),
            (l.render = function () {
              var e = this.props.as || "div",
                t = this.props.image,
                n = t.width,
                o = t.height,
                a = t.layout,
                i = (function (e, t, n) {
                  var r = {},
                    o = "gatsby-image-wrapper"
                  return (
                    "fixed" === n
                      ? ((r.width = e), (r.height = t))
                      : "constrained" === n &&
                        (o =
                          "gatsby-image-wrapper gatsby-image-wrapper-constrained"),
                    { className: o, "data-gatsby-image-wrapper": "", style: r }
                  )
                })(n, o, a),
                u = i.style,
                l = i.className,
                f = c(i, C),
                p = this.props.className
              this.props.class && (p = this.props.class)
              var d = (function (e, t, n) {
                var r = null
                return (
                  "fullWidth" === e &&
                    (r =
                      '<div aria-hidden="true" style="padding-top: ' +
                      (n / t) * 100 +
                      '%;"></div>'),
                  "constrained" === e &&
                    (r =
                      '<div style="max-width: ' +
                      t +
                      'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                      n +
                      "' width='" +
                      t +
                      "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
                  r
                )
              })(a, n, o)
              return r.createElement(
                e,
                s({}, f, {
                  style: s({}, u, this.props.style, {
                    backgroundColor: this.props.backgroundColor,
                  }),
                  className: l + (p ? " " + p : ""),
                  ref: this.root,
                  dangerouslySetInnerHTML: { __html: d },
                  suppressHydrationWarning: !0,
                })
              )
            }),
            a
          )
        })(r.Component),
        _ = function (e) {
          if (!e.image) return null
          var t = e.image,
            n = JSON.stringify([
              t.width,
              t.height,
              t.layout,
              e.className,
              e.class,
              e.backgroundColor,
            ])
          return r.createElement(L, s({ key: n }, e))
        }
      ;(_.propTypes = R), (_.displayName = "GatsbyImage")
      var N,
        D = [
          "src",
          "__imageData",
          "__error",
          "width",
          "height",
          "aspectRatio",
          "tracedSVGOptions",
          "placeholder",
          "formats",
          "quality",
          "transformOptions",
          "jpgOptions",
          "pngOptions",
          "webpOptions",
          "avifOptions",
          "blurredOptions",
        ],
        I = function (e, t) {
          return "fullWidth" !== e.layout ||
            ("width" !== t && "height" !== t) ||
            !e[t]
            ? a().number.apply(a(), [e, t].concat([].slice.call(arguments, 2)))
            : new Error(
                '"' +
                  t +
                  '" ' +
                  e[t] +
                  " may not be passed when layout is fullWidth."
              )
        },
        T = new Set(["fixed", "fullWidth", "constrained"]),
        A = {
          src: a().string.isRequired,
          alt: E,
          width: I,
          height: I,
          sizes: a().string,
          layout: function (e) {
            if (void 0 !== e.layout && !T.has(e.layout))
              return new Error(
                "Invalid value " +
                  e.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".'
              )
          },
        },
        M =
          ((N = _),
          function (e) {
            var t = e.src,
              n = e.__imageData,
              o = e.__error,
              a = c(e, D)
            return (
              o && console.warn(o),
              n
                ? r.createElement(N, s({ image: n }, a))
                : (console.warn("Image not loaded", t), null)
            )
          })
      function F(e) {
        var t = e.children
        return (
          r.useEffect(function () {
            n.e(503).then(n.bind(n, 9503))
          }, []),
          t
        )
      }
      ;(M.displayName = "StaticImage"), (M.propTypes = A)
    },
    6988: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          wrapRootElement: function () {
            return a
          },
        })
      var r = n(7294),
        o = n(6125)
      function a(e) {
        var t = e.element
        return r.createElement(o.c, null, t)
      }
    },
    1224: function (e) {
      "use strict"
      var t = function (e, t) {
        if ("string" != typeof e && !Array.isArray(e))
          throw new TypeError("Expected the input to be `string | string[]`")
        t = Object.assign({ pascalCase: !1 }, t)
        var n
        return (
          (e = Array.isArray(e)
            ? e
                .map(function (e) {
                  return e.trim()
                })
                .filter(function (e) {
                  return e.length
                })
                .join("-")
            : e.trim()),
          0 === e.length
            ? ""
            : 1 === e.length
            ? t.pascalCase
              ? e.toUpperCase()
              : e.toLowerCase()
            : (e !== e.toLowerCase() &&
                (e = (function (e) {
                  for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) {
                    var a = e[o]
                    t && /[a-zA-Z]/.test(a) && a.toUpperCase() === a
                      ? ((e = e.slice(0, o) + "-" + e.slice(o)),
                        (t = !1),
                        (r = n),
                        (n = !0),
                        o++)
                      : n && r && /[a-zA-Z]/.test(a) && a.toLowerCase() === a
                      ? ((e = e.slice(0, o - 1) + "-" + e.slice(o - 1)),
                        (r = n),
                        (n = !1),
                        (t = !0))
                      : ((t = a.toLowerCase() === a && a.toUpperCase() !== a),
                        (r = n),
                        (n = a.toUpperCase() === a && a.toLowerCase() !== a))
                  }
                  return e
                })(e)),
              (e = e
                .replace(/^[_.\- ]+/, "")
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
                  return t.toUpperCase()
                })
                .replace(/\d+(\w|$)/g, function (e) {
                  return e.toUpperCase()
                })),
              (n = e),
              t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
        )
      }
      ;(e.exports = t), (e.exports.default = t)
    },
    992: function (e, t, n) {
      "use strict"
      var r = n(5318)
      n(5444), r(n(1632))
    },
    1632: function (e, t) {
      "use strict"
      ;(t.__esModule = !0), (t.default = void 0)
      t.default = function (e, t) {
        var n = "manifest.webmanifest"
        if (!Array.isArray(t)) return n
        var r = t.find(function (t) {
          return e.startsWith(t.start_url)
        })
        return r ? "manifest_" + r.lang + ".webmanifest" : n
      }
    },
    9604: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.I18nextContext = void 0)
      var o = r(n(7294)).default.createContext({
        language: "en",
        languages: ["en"],
        routed: !1,
        defaultLanguage: "en",
        generateDefaultLanguagePage: !1,
        originalPath: "/",
        path: "/",
      })
      t.I18nextContext = o
    },
    2094: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.wrapPageElement = void 0)
      var o = r(n(7154)),
        a = (r(n(5179)), r(n(7294))),
        i = n(5444),
        s = r(n(9771)),
        u = n(8742),
        c = r(n(6678)),
        l = n(3999),
        f = n(9604)
      r(n(8003))
      t.wrapPageElement = function (e, t) {
        var n,
          r = e.element,
          p = e.props,
          d = t.i18nextOptions,
          h = void 0 === d ? {} : d,
          g = t.redirect,
          v = void 0 === g || g,
          m = t.generateDefaultLanguagePage,
          y = void 0 !== m && m,
          b = t.siteUrl,
          w = t.localeJsonNodeName,
          O = void 0 === w ? "locales" : w,
          x = t.fallbackLanguage
        if (p) {
          var P,
            k,
            S = p.data,
            j = p.pageContext,
            E = p.location,
            R = j.i18n,
            C = R.routed,
            L = R.language,
            _ = R.languages,
            N = R.originalPath,
            D = R.defaultLanguage,
            I = R.path
          if (v && !C) {
            var T = E.search
            if ("undefined" != typeof window) {
              var A =
                window.localStorage.getItem(u.LANGUAGE_KEY) ||
                (0, s.default)({ languages: _, fallback: x || L })
              if (
                (_.includes(A) || (A = L),
                window.localStorage.setItem(u.LANGUAGE_KEY, A),
                A !== D)
              ) {
                var M = T || "",
                  F = (0, i.withPrefix)(
                    "/" +
                      A +
                      ((P = E.pathname),
                      (k = (0, i.withPrefix)("/")),
                      P.startsWith(k) ? P.replace(k, "/") : P) +
                      M +
                      E.hash
                  )
                return window.___replace(F), null
              }
            }
          }
          var U =
            (null == S || null === (n = S[O]) || void 0 === n
              ? void 0
              : n.edges) || []
          _.length > 1 && U.length, 0
          var W = U.map(function (e) {
              return e.node.ns
            }),
            H = h.defaultNS || "translation"
          H =
            W.find(function (e) {
              return e !== H
            }) || H
          var q = W.filter(function (e) {
              return e !== H
            }),
            V = U.reduce(function (e, t) {
              var n = t.node,
                r = JSON.parse(n.data)
              return (
                n.language in e || (e[n.language] = {}),
                (e[n.language][n.ns] = r),
                e
              )
            }, {}),
            z = c.default.createInstance()
          return (
            z.init(
              (0, o.default)({}, h, {
                resources: V,
                lng: L,
                fallbackLng: D,
                defaultNS: H,
                fallbackNS: q,
                react: { useSuspense: !1 },
              })
            ),
            z.language !== L && z.changeLanguage(L),
            (function (e, t) {
              return function (n) {
                return a.default.createElement(
                  l.I18nextProvider,
                  { i18n: e },
                  a.default.createElement(
                    f.I18nextContext.Provider,
                    { value: t },
                    n
                  )
                )
              }
            })(z, {
              routed: C,
              language: L,
              languages: _,
              originalPath: N,
              defaultLanguage: D,
              generateDefaultLanguagePage: y,
              siteUrl: b,
              path: I,
            })(r)
          )
        }
      }
    },
    8742: function (e, t) {
      "use strict"
      ;(t.__esModule = !0), (t.LANGUAGE_KEY = void 0)
      t.LANGUAGE_KEY = "gatsby-i18next-language"
    },
    733: function (e, t, n) {
      var r = n(2094).wrapPageElement
      t.wrapPageElement = r
    },
    9499: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          BaseContext: function () {
            return M
          },
          Link: function () {
            return J
          },
          Location: function () {
            return I
          },
          LocationProvider: function () {
            return T
          },
          Match: function () {
            return X
          },
          Redirect: function () {
            return Y
          },
          Router: function () {
            return F
          },
          ServerLocation: function () {
            return A
          },
          createHistory: function () {
            return x
          },
          createMemorySource: function () {
            return P
          },
          globalHistory: function () {
            return S
          },
          isRedirect: function () {
            return Z
          },
          matchPath: function () {
            return c
          },
          navigate: function () {
            return j
          },
          redirectTo: function () {
            return $
          },
          useLocation: function () {
            return ee
          },
          useMatch: function () {
            return re
          },
          useNavigate: function () {
            return te
          },
          useParams: function () {
            return ne
          },
        })
      var r = n(7294),
        o = n(1143),
        a = n.n(o),
        i = n(3639),
        s = function (e, t) {
          return e.substr(0, t.length) === t
        },
        u = function (e, t) {
          for (
            var n = void 0,
              r = void 0,
              o = t.split("?")[0],
              i = m(o),
              s = "" === i[0],
              u = v(e),
              c = 0,
              l = u.length;
            c < l;
            c++
          ) {
            var f = !1,
              d = u[c].route
            if (d.default) r = { route: d, params: {}, uri: t }
            else {
              for (
                var g = m(d.path),
                  y = {},
                  w = Math.max(i.length, g.length),
                  O = 0;
                O < w;
                O++
              ) {
                var x = g[O],
                  P = i[O]
                if (h(x)) {
                  y[x.slice(1) || "*"] = i
                    .slice(O)
                    .map(decodeURIComponent)
                    .join("/")
                  break
                }
                if (void 0 === P) {
                  f = !0
                  break
                }
                var k = p.exec(x)
                if (k && !s) {
                  ;-1 === b.indexOf(k[1]) || a()(!1)
                  var S = decodeURIComponent(P)
                  y[k[1]] = S
                } else if (x !== P) {
                  f = !0
                  break
                }
              }
              if (!f) {
                n = { route: d, params: y, uri: "/" + i.slice(0, O).join("/") }
                break
              }
            }
          }
          return n || r || null
        },
        c = function (e, t) {
          return u([{ path: e }], t)
        },
        l = function (e, t) {
          if (s(e, "/")) return e
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            a = t.split("?")[0],
            i = m(r),
            u = m(a)
          if ("" === i[0]) return y(a, o)
          if (!s(i[0], ".")) {
            var c = u.concat(i).join("/")
            return y(("/" === a ? "" : "/") + c, o)
          }
          for (var l = u.concat(i), f = [], p = 0, d = l.length; p < d; p++) {
            var h = l[p]
            ".." === h ? f.pop() : "." !== h && f.push(h)
          }
          return y("/" + f.join("/"), o)
        },
        f = function (e, t) {
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              m(r)
                .map(function (e) {
                  var n = p.exec(e)
                  return n ? t[n[1]] : e
                })
                .join("/"),
            s = t.location,
            u = (s = void 0 === s ? {} : s).search,
            c = (void 0 === u ? "" : u).split("?")[1] || ""
          return (i = y(i, a, c))
        },
        p = /^:(.+)/,
        d = function (e) {
          return p.test(e)
        },
        h = function (e) {
          return e && "*" === e[0]
        },
        g = function (e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : m(e.path).reduce(function (e, t) {
                  return (
                    (e += 4),
                    !(function (e) {
                      return "" === e
                    })(t)
                      ? d(t)
                        ? (e += 2)
                        : h(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  )
                }, 0),
            index: t,
          }
        },
        v = function (e) {
          return e.map(g).sort(function (e, t) {
            return e.score < t.score
              ? 1
              : e.score > t.score
              ? -1
              : e.index - t.index
          })
        },
        m = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/")
        },
        y = function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r]
          return (
            e +
            ((n = n.filter(function (e) {
              return e && e.length > 0
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          )
        },
        b = ["uri", "path"],
        w =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        O = function (e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            o = t.href,
            a = t.origin,
            i = t.protocol,
            s = t.host,
            u = t.hostname,
            c = t.port,
            l = e.location.pathname
          !l && o && k && (l = new URL(o).pathname)
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: u,
            port: c,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || "initial",
          }
        },
        x = function (e, t) {
          var n = [],
            r = O(e),
            o = !1,
            a = function () {}
          return {
            get location() {
              return r
            },
            get transitioning() {
              return o
            },
            _onTransitionComplete: function () {
              ;(o = !1), a()
            },
            listen: function (t) {
              n.push(t)
              var o = function () {
                ;(r = O(e)), t({ location: r, action: "POP" })
              }
              return (
                e.addEventListener("popstate", o),
                function () {
                  e.removeEventListener("popstate", o),
                    (n = n.filter(function (e) {
                      return e !== t
                    }))
                }
              )
            },
            navigate: function (t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = i.state,
                u = i.replace,
                c = void 0 !== u && u
              if ("number" == typeof t) e.history.go(t)
              else {
                s = w({}, s, { key: Date.now() + "" })
                try {
                  o || c
                    ? e.history.replaceState(s, null, t)
                    : e.history.pushState(s, null, t)
                } catch (f) {
                  e.location[c ? "replace" : "assign"](t)
                }
              }
              ;(r = O(e)), (o = !0)
              var l = new Promise(function (e) {
                return (a = e)
              })
              return (
                n.forEach(function (e) {
                  return e({ location: r, action: "PUSH" })
                }),
                l
              )
            },
          }
        },
        P = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = e.indexOf("?"),
            n = {
              pathname: t > -1 ? e.substr(0, t) : e,
              search: t > -1 ? e.substr(t) : "",
            },
            r = 0,
            o = [n],
            a = [null]
          return {
            get location() {
              return o[r]
            },
            addEventListener: function (e, t) {},
            removeEventListener: function (e, t) {},
            history: {
              get entries() {
                return o
              },
              get index() {
                return r
              },
              get state() {
                return a[r]
              },
              pushState: function (e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? "" : u
                r++,
                  o.push({ pathname: s, search: c.length ? "?" + c : c }),
                  a.push(e)
              },
              replaceState: function (e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? "" : u
                ;(o[r] = { pathname: s, search: c }), (a[r] = e)
              },
              go: function (e) {
                var t = r + e
                t < 0 || t > a.length - 1 || (r = t)
              },
            },
          }
        },
        k = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        S = x(k ? window : P()),
        j = S.navigate,
        E =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }
      function R(e, t) {
        var n = {}
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
        return n
      }
      function C(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function")
      }
      function L(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t
      }
      function _(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t))
      }
      var N = function (e, t) {
          var n = (0, r.createContext)(t)
          return (n.displayName = e), n
        },
        D = N("Location"),
        I = function (e) {
          var t = e.children
          return r.createElement(D.Consumer, null, function (e) {
            return e ? t(e) : r.createElement(T, null, t)
          })
        },
        T = (function (e) {
          function t() {
            var n, r
            C(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = L(this, e.call.apply(e, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              L(r, n)
            )
          }
          return (
            _(t, e),
            (t.prototype.getContext = function () {
              var e = this.props.history
              return { navigate: e.navigate, location: e.location }
            }),
            (t.prototype.componentDidCatch = function (e, t) {
              if (!Z(e)) throw e
              ;(0, this.props.history.navigate)(e.uri, { replace: !0 })
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              t.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete()
            }),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.state.refs,
                n = this.props.history
              n._onTransitionComplete(),
                (t.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      e.unmounted ||
                        e.setState(function () {
                          return { context: e.getContext() }
                        })
                    })
                  })
                }))
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.state.refs
              ;(this.unmounted = !0), e.unlisten()
            }),
            (t.prototype.render = function () {
              var e = this.state.context,
                t = this.props.children
              return r.createElement(
                D.Provider,
                { value: e },
                "function" == typeof t ? t(e) : t || null
              )
            }),
            t
          )
        })(r.Component)
      T.defaultProps = { history: S }
      var A = function (e) {
          var t = e.url,
            n = e.children,
            o = t.indexOf("?"),
            a = void 0,
            i = ""
          return (
            o > -1 ? ((a = t.substring(0, o)), (i = t.substring(o))) : (a = t),
            r.createElement(
              D.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: "" },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.")
                  },
                },
              },
              n
            )
          )
        },
        M = N("Base", { baseuri: "/", basepath: "/", navigate: S.navigate }),
        F = function (e) {
          return r.createElement(M.Consumer, null, function (t) {
            return r.createElement(I, null, function (n) {
              return r.createElement(U, E({}, t, n, e))
            })
          })
        },
        U = (function (e) {
          function t() {
            return C(this, t), L(this, e.apply(this, arguments))
          }
          return (
            _(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.location,
                n = e.navigate,
                o = e.basepath,
                a = e.primary,
                i = e.children,
                s = (e.baseuri, e.component),
                c = void 0 === s ? "div" : s,
                f = R(e, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component",
                ]),
                p = r.Children.toArray(i).reduce(function (e, t) {
                  var n = ae(o)(t)
                  return e.concat(n)
                }, []),
                d = t.pathname,
                h = u(p, d)
              if (h) {
                var g = h.params,
                  v = h.uri,
                  m = h.route,
                  y = h.route.value
                o = m.default ? o : m.path.replace(/\*$/, "")
                var b = E({}, g, {
                    uri: v,
                    location: t,
                    navigate: function (e, t) {
                      return n(l(e, v), t)
                    },
                  }),
                  w = r.cloneElement(
                    y,
                    b,
                    y.props.children
                      ? r.createElement(
                          F,
                          { location: t, primary: a },
                          y.props.children
                        )
                      : void 0
                  ),
                  O = a ? H : c,
                  x = a ? E({ uri: v, location: t, component: c }, f) : f
                return r.createElement(
                  M.Provider,
                  { value: { baseuri: v, basepath: o, navigate: b.navigate } },
                  r.createElement(O, x, w)
                )
              }
              return null
            }),
            t
          )
        })(r.PureComponent)
      U.defaultProps = { primary: !0 }
      var W = N("Focus"),
        H = function (e) {
          var t = e.uri,
            n = e.location,
            o = e.component,
            a = R(e, ["uri", "location", "component"])
          return r.createElement(W.Consumer, null, function (e) {
            return r.createElement(
              z,
              E({}, a, { component: o, requestFocus: e, uri: t, location: n })
            )
          })
        },
        q = !0,
        V = 0,
        z = (function (e) {
          function t() {
            var n, r
            C(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i]
            return (
              (n = r = L(this, e.call.apply(e, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (e) {
                !r.state.shouldFocus && e && e.focus()
              }),
              L(r, n)
            )
          }
          return (
            _(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              if (null == t.uri) return E({ shouldFocus: !0 }, e)
              var n = e.uri !== t.uri,
                r =
                  t.location.pathname !== e.location.pathname &&
                  e.location.pathname === e.uri
              return E({ shouldFocus: n || r }, e)
            }),
            (t.prototype.componentDidMount = function () {
              V++, this.focus()
            }),
            (t.prototype.componentWillUnmount = function () {
              0 === --V && (q = !0)
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              e.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus()
            }),
            (t.prototype.focus = function () {
              var e = this.props.requestFocus
              e
                ? e(this.node)
                : q
                ? (q = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus())
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = (t.children, t.style),
                o = (t.requestFocus, t.component),
                a = void 0 === o ? "div" : o,
                i =
                  (t.uri,
                  t.location,
                  R(t, [
                    "children",
                    "style",
                    "requestFocus",
                    "component",
                    "uri",
                    "location",
                  ]))
              return r.createElement(
                a,
                E(
                  {
                    style: E({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function (t) {
                      return (e.node = t)
                    },
                  },
                  i
                ),
                r.createElement(
                  W.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              )
            }),
            t
          )
        })(r.Component)
      ;(0, i.O)(z)
      var K = function () {},
        B = r.forwardRef
      void 0 === B &&
        (B = function (e) {
          return e
        })
      var J = B(function (e, t) {
        var n = e.innerRef,
          o = R(e, ["innerRef"])
        return r.createElement(M.Consumer, null, function (e) {
          e.basepath
          var a = e.baseuri
          return r.createElement(I, null, function (e) {
            var i = e.location,
              u = e.navigate,
              c = o.to,
              f = o.state,
              p = o.replace,
              d = o.getProps,
              h = void 0 === d ? K : d,
              g = R(o, ["to", "state", "replace", "getProps"]),
              v = l(c, a),
              m = encodeURI(v),
              y = i.pathname === m,
              b = s(i.pathname, m)
            return r.createElement(
              "a",
              E(
                { ref: t || n, "aria-current": y ? "page" : void 0 },
                g,
                h({
                  isCurrent: y,
                  isPartiallyCurrent: b,
                  href: v,
                  location: i,
                }),
                {
                  href: v,
                  onClick: function (e) {
                    if ((g.onClick && g.onClick(e), ie(e))) {
                      e.preventDefault()
                      var t = p
                      if ("boolean" != typeof p && y) {
                        var n = E({}, i.state),
                          r = (n.key, R(n, ["key"]))
                        ;(o = E({}, f)),
                          (a = r),
                          (t =
                            (s = Object.keys(o)).length ===
                              Object.keys(a).length &&
                            s.every(function (e) {
                              return a.hasOwnProperty(e) && o[e] === a[e]
                            }))
                      }
                      u(v, { state: f, replace: t })
                    }
                    var o, a, s
                  },
                }
              )
            )
          })
        })
      })
      function Q(e) {
        this.uri = e
      }
      J.displayName = "Link"
      var Z = function (e) {
          return e instanceof Q
        },
        $ = function (e) {
          throw new Q(e)
        },
        G = (function (e) {
          function t() {
            return C(this, t), L(this, e.apply(this, arguments))
          }
          return (
            _(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.navigate,
                n = e.to,
                r = (e.from, e.replace),
                o = void 0 === r || r,
                a = e.state,
                i = (e.noThrow, e.baseuri),
                s = R(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ])
              Promise.resolve().then(function () {
                var e = l(n, i)
                t(f(e, s), { replace: o, state: a })
              })
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = (e.navigate, e.to),
                n = (e.from, e.replace, e.state, e.noThrow),
                r = e.baseuri,
                o = R(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri",
                ]),
                a = l(t, r)
              return n || $(f(a, o)), null
            }),
            t
          )
        })(r.Component),
        Y = function (e) {
          return r.createElement(M.Consumer, null, function (t) {
            var n = t.baseuri
            return r.createElement(I, null, function (t) {
              return r.createElement(G, E({}, t, { baseuri: n }, e))
            })
          })
        },
        X = function (e) {
          var t = e.path,
            n = e.children
          return r.createElement(M.Consumer, null, function (e) {
            var o = e.baseuri
            return r.createElement(I, null, function (e) {
              var r = e.navigate,
                a = e.location,
                i = l(t, o),
                s = c(i, a.pathname)
              return n({
                navigate: r,
                location: a,
                match: s ? E({}, s.params, { uri: s.uri, path: t }) : null,
              })
            })
          })
        },
        ee = function () {
          var e = (0, r.useContext)(D)
          if (!e)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          return e.location
        },
        te = function () {
          var e = (0, r.useContext)(M)
          if (!e)
            throw new Error(
              "useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          return e.navigate
        },
        ne = function () {
          var e = (0, r.useContext)(M)
          if (!e)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          var t = ee(),
            n = c(e.basepath, t.pathname)
          return n ? n.params : null
        },
        re = function (e) {
          if (!e)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            )
          var t = (0, r.useContext)(M)
          if (!t)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            )
          var n = ee(),
            o = l(e, t.baseuri),
            a = c(o, n.pathname)
          return a ? E({}, a.params, { uri: a.uri, path: e }) : null
        },
        oe = function (e) {
          return e.replace(/(^\/+|\/+$)/g, "")
        },
        ae = function e(t) {
          return function (n) {
            if (!n) return null
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, e(t))
            var o, i, s
            if (
              (n.props.path || n.props.default || n.type === Y || a()(!1),
              n.type !== Y || (n.props.from && n.props.to) || a()(!1),
              n.type === Y &&
                ((o = n.props.from),
                (i = n.props.to),
                (s = function (e) {
                  return d(e)
                }),
                m(o).filter(s).sort().join("/") !==
                  m(i).filter(s).sort().join("/")) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 }
            var u = n.type === Y ? n.props.from : n.props.path,
              c = "/" === u ? t : oe(t) + "/" + oe(u)
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? oe(c) + "/*" : c,
            }
          }
        },
        ie = function (e) {
          return (
            !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          )
        }
    },
    1143: function (e) {
      "use strict"
      e.exports = function (e, t, n, r, o, a, i, s) {
        if (!e) {
          var u
          if (void 0 === t)
            u = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            )
          else {
            var c = [n, r, o, a, i, s],
              l = 0
            ;(u = new Error(
              t.replace(/%s/g, function () {
                return c[l++]
              })
            )).name = "Invariant Violation"
          }
          throw ((u.framesToPop = 1), u)
        }
      }
    },
    1721: function (e, t, n) {
      "use strict"
      function r(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          r(e, t)
        )
      }
      function o(e, t) {
        ;(e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t)
      }
      n.d(t, {
        Z: function () {
          return o
        },
      })
    },
  },
  function (e) {
    e.O(0, [774], function () {
      return (t = 9917), e((e.s = t))
      var t
    })
    e.O()
  },
])
//# sourceMappingURL=app-5871b0f84dc32ef47b04.js.map
