!(function () {
  "use strict"
  var e,
    t,
    n,
    r,
    o,
    c,
    s,
    a = {},
    i = {}
  function u(e) {
    var t = i[e]
    if (void 0 !== t) return t.exports
    var n = (i[e] = { id: e, loaded: !1, exports: {} })
    return a[e](n, n.exports, u), (n.loaded = !0), n.exports
  }
  ;(u.m = a),
    (e = []),
    (u.O = function (t, n, r, o) {
      if (!n) {
        var c = 1 / 0
        for (f = 0; f < e.length; f++) {
          ;(n = e[f][0]), (r = e[f][1]), (o = e[f][2])
          for (var s = !0, a = 0; a < n.length; a++)
            (!1 & o || c >= o) &&
            Object.keys(u.O).every(function (e) {
              return u.O[e](n[a])
            })
              ? n.splice(a--, 1)
              : ((s = !1), o < c && (c = o))
          if (s) {
            e.splice(f--, 1)
            var i = r()
            void 0 !== i && (t = i)
          }
        }
        return t
      }
      o = o || 0
      for (var f = e.length; f > 0 && e[f - 1][2] > o; f--) e[f] = e[f - 1]
      e[f] = [n, r, o]
    }),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return u.d(t, { a: t }), t
    }),
    (n = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e)
        }
      : function (e) {
          return e.__proto__
        }),
    (u.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e
        if (16 & r && "function" == typeof e.then) return e
      }
      var o = Object.create(null)
      u.r(o)
      var c = {}
      t = t || [null, n({}), n([]), n(n)]
      for (var s = 2 & r && e; "object" == typeof s && !~t.indexOf(s); s = n(s))
        Object.getOwnPropertyNames(s).forEach(function (t) {
          c[t] = function () {
            return e[t]
          }
        })
      return (
        (c.default = function () {
          return e
        }),
        u.d(o, c),
        o
      )
    }),
    (u.d = function (e, t) {
      for (var n in t)
        u.o(t, n) &&
          !u.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
    }),
    (u.f = {}),
    (u.e = function (e) {
      return Promise.all(
        Object.keys(u.f).reduce(function (t, n) {
          return u.f[n](e, t), t
        }, [])
      )
    }),
    (u.u = function (e) {
      return (
        ({
          21: "component---src-pages-news-news-js",
          127: "component---src-pages-graduates-graduates-js",
          129: "component---src-pages-news-item-news-item-js",
          351: "commons",
          393: "2a6b294a8e40256a70761d2a1abedb7d5a8a0be5",
          428: "component---src-pages-history-history-js",
          476: "component---src-pages-using-ssr-js",
          532: "styles",
          553: "component---src-pages-offer-offer-js",
          617: "component---src-pages-page-2-js",
          678: "component---src-pages-index-js",
          704: "component---src-pages-admissions-admissions-js",
          713: "component---src-templates-using-dsg-js",
          724: "component---src-pages-sections-sections-js",
          753: "component---src-pages-works-works-js",
          773: "component---src-pages-directions-directions-js",
          842: "component---src-pages-teacher-teacher-js",
          883: "component---src-pages-404-js",
          898: "component---src-pages-studentscience-studentscience-js",
          970: "component---src-pages-using-typescript-tsx",
        }[e] || e) +
        "-" +
        {
          21: "93db9a8a08009faa6d40",
          127: "bd3c7b34a7f6b5a1c14a",
          129: "b442e62b9db0e4c8db46",
          175: "4f5eec3dd4c4a5e05eef",
          231: "b2d35ff9bb1952aa22d1",
          351: "4bd87c8ed82b88b4d165",
          393: "01886fa54f851e918626",
          428: "4444f56d5655182eca9f",
          476: "06dd4ce7c2f8249b1c94",
          503: "b802c0d13bba191fe982",
          532: "355f3a4a5b234877dc92",
          553: "0877b9e6037cafac4a22",
          617: "deb81dd18329775fced7",
          678: "4ef52f8fa38d7d144018",
          704: "165ac943e027cc93a51f",
          713: "15a3b6cc784bc13b902a",
          724: "4ae67d5e6d0cf1724b26",
          753: "bab0b0c4f6ff740631d6",
          773: "cb2f355d7b345525d8ea",
          842: "18eb079e3006cf03b402",
          883: "50361b0ba42e69343369",
          898: "d170098819b887a7d68d",
          970: "6b22f96f461a187f1b87",
        }[e] +
        ".js"
      )
    }),
    (u.miniCssF = function (e) {
      return "styles.c1c54928c00ba88df9f8.css"
    }),
    (u.g = (function () {
      if ("object" == typeof globalThis) return globalThis
      try {
        return this || new Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    })()),
    (u.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            )
          },
        }),
        e
      )
    }),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r = {}),
    (o = "gatsby-starter-default:"),
    (u.l = function (e, t, n, c) {
      if (r[e]) r[e].push(t)
      else {
        var s, a
        if (void 0 !== n)
          for (
            var i = document.getElementsByTagName("script"), f = 0;
            f < i.length;
            f++
          ) {
            var d = i[f]
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == o + n
            ) {
              s = d
              break
            }
          }
        s ||
          ((a = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          u.nc && s.setAttribute("nonce", u.nc),
          s.setAttribute("data-webpack", o + n),
          (s.src = e)),
          (r[e] = [t])
        var l = function (t, n) {
            ;(s.onerror = s.onload = null), clearTimeout(p)
            var o = r[e]
            if (
              (delete r[e],
              s.parentNode && s.parentNode.removeChild(s),
              o &&
                o.forEach(function (e) {
                  return e(n)
                }),
              t)
            )
              return t(n)
          },
          p = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          )
        ;(s.onerror = l.bind(null, s.onerror)),
          (s.onload = l.bind(null, s.onload)),
          a && document.head.appendChild(s)
      }
    }),
    (u.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (u.p = "/"),
    (c = function (e) {
      return new Promise(function (t, n) {
        var r = u.miniCssF(e),
          o = u.p + r
        if (
          (function (e, t) {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var o =
                (s = n[r]).getAttribute("data-href") || s.getAttribute("href")
              if ("stylesheet" === s.rel && (o === e || o === t)) return s
            }
            var c = document.getElementsByTagName("style")
            for (r = 0; r < c.length; r++) {
              var s
              if ((o = (s = c[r]).getAttribute("data-href")) === e || o === t)
                return s
            }
          })(r, o)
        )
          return t()
        !(function (e, t, n, r) {
          var o = document.createElement("link")
          ;(o.rel = "stylesheet"),
            (o.type = "text/css"),
            (o.onerror = o.onload =
              function (c) {
                if (((o.onerror = o.onload = null), "load" === c.type)) n()
                else {
                  var s = c && ("load" === c.type ? "missing" : c.type),
                    a = (c && c.target && c.target.href) || t,
                    i = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                    )
                  ;(i.code = "CSS_CHUNK_LOAD_FAILED"),
                    (i.type = s),
                    (i.request = a),
                    o.parentNode.removeChild(o),
                    r(i)
                }
              }),
            (o.href = t),
            document.head.appendChild(o)
        })(e, o, t, n)
      })
    }),
    (s = { 658: 0 }),
    (u.f.miniCss = function (e, t) {
      s[e]
        ? t.push(s[e])
        : 0 !== s[e] &&
          { 532: 1 }[e] &&
          t.push(
            (s[e] = c(e).then(
              function () {
                s[e] = 0
              },
              function (t) {
                throw (delete s[e], t)
              }
            ))
          )
    }),
    (function () {
      var e = { 658: 0 }
      ;(u.f.j = function (t, n) {
        var r = u.o(e, t) ? e[t] : void 0
        if (0 !== r)
          if (r) n.push(r[2])
          else if (/^(532|658)$/.test(t)) e[t] = 0
          else {
            var o = new Promise(function (n, o) {
              r = e[t] = [n, o]
            })
            n.push((r[2] = o))
            var c = u.p + u.u(t),
              s = new Error()
            u.l(
              c,
              function (n) {
                if (u.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    c = n && n.target && n.target.src
                  ;(s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = c),
                    r[1](s)
                }
              },
              "chunk-" + t,
              t
            )
          }
      }),
        (u.O.j = function (t) {
          return 0 === e[t]
        })
      var t = function (t, n) {
          var r,
            o,
            c = n[0],
            s = n[1],
            a = n[2],
            i = 0
          if (
            c.some(function (t) {
              return 0 !== e[t]
            })
          ) {
            for (r in s) u.o(s, r) && (u.m[r] = s[r])
            if (a) var f = a(u)
          }
          for (t && t(n); i < c.length; i++)
            (o = c[i]), u.o(e, o) && e[o] && e[o][0](), (e[c[i]] = 0)
          return u.O(f)
        },
        n = (self.webpackChunkgatsby_starter_default =
          self.webpackChunkgatsby_starter_default || [])
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)))
    })()
})()
//# sourceMappingURL=webpack-runtime-dd23e4c07003a9b259d1.js.map
