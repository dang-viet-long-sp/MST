;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [351],
  {
    862: function (e, t, n) {
      var r = n(8).default
      function o(e) {
        if ("function" != typeof WeakMap) return null
        var t = new WeakMap(),
          n = new WeakMap()
        return (o = function (e) {
          return e ? n : t
        })(e)
      }
      ;(e.exports = function (e, t) {
        if (!t && e && e.__esModule) return e
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e }
        var n = o(t)
        if (n && n.has(e)) return n.get(e)
        var i = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var c = a ? Object.getOwnPropertyDescriptor(e, u) : null
            c && (c.get || c.set)
              ? Object.defineProperty(i, u, c)
              : (i[u] = e[u])
          }
        return (i.default = e), n && n.set(e, i), i
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0)
    },
    2993: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView
      function i(e, a) {
        if (e === a) return !0
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1
          var u, c, l, s
          if (Array.isArray(e)) {
            if ((u = e.length) != a.length) return !1
            for (c = u; 0 != c--; ) if (!i(e[c], a[c])) return !1
            return !0
          }
          if (n && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1
            for (s = e.entries(); !(c = s.next()).done; )
              if (!a.has(c.value[0])) return !1
            for (s = e.entries(); !(c = s.next()).done; )
              if (!i(c.value[1], a.get(c.value[0]))) return !1
            return !0
          }
          if (r && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1
            for (s = e.entries(); !(c = s.next()).done; )
              if (!a.has(c.value[0])) return !1
            return !0
          }
          if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((u = e.length) != a.length) return !1
            for (c = u; 0 != c--; ) if (e[c] !== a[c]) return !1
            return !0
          }
          if (e.constructor === RegExp)
            return e.source === a.source && e.flags === a.flags
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === a.valueOf()
          if (e.toString !== Object.prototype.toString)
            return e.toString() === a.toString()
          if ((u = (l = Object.keys(e)).length) !== Object.keys(a).length)
            return !1
          for (c = u; 0 != c--; )
            if (!Object.prototype.hasOwnProperty.call(a, l[c])) return !1
          if (t && e instanceof Element) return !1
          for (c = u; 0 != c--; )
            if (
              (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c]) ||
                !e.$$typeof) &&
              !i(e[l[c]], a[l[c]])
            )
              return !1
          return !0
        }
        return e != e && a != a
      }
      e.exports = function (e, t) {
        try {
          return i(e, t)
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            )
          throw n
        }
      }
    },
    5414: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          Helmet: function () {
            return he
          },
        })
      var r,
        o,
        i,
        a,
        u = n(5697),
        c = n.n(u),
        l = n(4839),
        s = n.n(l),
        f = n(2993),
        p = n.n(f),
        d = n(7294),
        y = n(6494),
        h = n.n(y),
        g = "bodyAttributes",
        m = "htmlAttributes",
        b = "titleAttributes",
        v = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        T =
          (Object.keys(v).map(function (e) {
            return v[e]
          }),
          "charset"),
        w = "cssText",
        O = "href",
        E = "http-equiv",
        A = "innerHTML",
        C = "itemprop",
        S = "name",
        k = "property",
        j = "rel",
        x = "src",
        L = "target",
        P = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        _ = "defaultTitle",
        I = "defer",
        M = "encodeSpecialCharacters",
        N = "onChangeClientState",
        R = "titleTemplate",
        D = Object.keys(P).reduce(function (e, t) {
          return (e[P[t]] = t), e
        }, {}),
        H = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
        B = "data-react-helmet",
        Y =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e
              },
        q = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
        },
        U = (function () {
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
        F =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        K = function (e, t) {
          var n = {}
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
          return n
        },
        W = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t
        },
        z = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;")
        },
        G = function (e) {
          var t = Q(e, v.TITLE),
            n = Q(e, R)
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t
            })
          var r = Q(e, _)
          return t || r || void 0
        },
        V = function (e) {
          return Q(e, N) || function () {}
        },
        $ = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e]
            })
            .map(function (t) {
              return t[e]
            })
            .reduce(function (e, t) {
              return F({}, e, t)
            }, {})
        },
        Z = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[v.BASE]
            })
            .map(function (e) {
              return e[v.BASE]
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                  var i = r[o].toLowerCase()
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n)
                }
              return t
            }, [])
        },
        J = function (e, t, n) {
          var r = {}
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  re(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      Y(t[e]) +
                      '"'
                  ),
                !1)
              )
            })
            .map(function (t) {
              return t[e]
            })
            .reverse()
            .reduce(function (e, n) {
              var o = {}
              n.filter(function (e) {
                for (
                  var n = void 0, i = Object.keys(e), a = 0;
                  a < i.length;
                  a++
                ) {
                  var u = i[a],
                    c = u.toLowerCase()
                  ;-1 === t.indexOf(c) ||
                    (n === j && "canonical" === e[n].toLowerCase()) ||
                    (c === j && "stylesheet" === e[c].toLowerCase()) ||
                    (n = c),
                    -1 === t.indexOf(u) ||
                      (u !== A && u !== w && u !== C) ||
                      (n = u)
                }
                if (!n || !e[n]) return !1
                var l = e[n].toLowerCase()
                return (
                  r[n] || (r[n] = {}),
                  o[n] || (o[n] = {}),
                  !r[n][l] && ((o[n][l] = !0), !0)
                )
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t)
                })
              for (var i = Object.keys(o), a = 0; a < i.length; a++) {
                var u = i[a],
                  c = h()({}, r[u], o[u])
                r[u] = c
              }
              return e
            }, [])
            .reverse()
        },
        Q = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n]
            if (r.hasOwnProperty(t)) return r[t]
          }
          return null
        },
        X =
          ((r = Date.now()),
          function (e) {
            var t = Date.now()
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function () {
                  X(e)
                }, 0)
          }),
        ee = function (e) {
          return clearTimeout(e)
        },
        te =
          "undefined" != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              X
            : n.g.requestAnimationFrame || X,
        ne =
          "undefined" != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              ee
            : n.g.cancelAnimationFrame || ee,
        re = function (e) {
          return console && "function" == typeof console.warn && console.warn(e)
        },
        oe = null,
        ie = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            o = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            u = e.noscriptTags,
            c = e.onChangeClientState,
            l = e.scriptTags,
            s = e.styleTags,
            f = e.title,
            p = e.titleAttributes
          ce(v.BODY, r), ce(v.HTML, o), ue(f, p)
          var d = {
              baseTag: le(v.BASE, n),
              linkTags: le(v.LINK, i),
              metaTags: le(v.META, a),
              noscriptTags: le(v.NOSCRIPT, u),
              scriptTags: le(v.SCRIPT, l),
              styleTags: le(v.STYLE, s),
            },
            y = {},
            h = {}
          Object.keys(d).forEach(function (e) {
            var t = d[e],
              n = t.newTags,
              r = t.oldTags
            n.length && (y[e] = n), r.length && (h[e] = d[e].oldTags)
          }),
            t && t(),
            c(e, y, h)
        },
        ae = function (e) {
          return Array.isArray(e) ? e.join("") : e
        },
        ue = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = ae(e)),
            ce(v.TITLE, t)
        },
        ce = function (e, t) {
          var n = document.getElementsByTagName(e)[0]
          if (n) {
            for (
              var r = n.getAttribute(B),
                o = r ? r.split(",") : [],
                i = [].concat(o),
                a = Object.keys(t),
                u = 0;
              u < a.length;
              u++
            ) {
              var c = a[u],
                l = t[c] || ""
              n.getAttribute(c) !== l && n.setAttribute(c, l),
                -1 === o.indexOf(c) && o.push(c)
              var s = i.indexOf(c)
              ;-1 !== s && i.splice(s, 1)
            }
            for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f])
            o.length === i.length
              ? n.removeAttribute(B)
              : n.getAttribute(B) !== a.join(",") &&
                n.setAttribute(B, a.join(","))
          }
        },
        le = function (e, t) {
          var n = document.head || document.querySelector(v.HEAD),
            r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
            o = Array.prototype.slice.call(r),
            i = [],
            a = void 0
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e)
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === A) n.innerHTML = t.innerHTML
                    else if (r === w)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText))
                    else {
                      var u = void 0 === t[r] ? "" : t[r]
                      n.setAttribute(r, u)
                    }
                n.setAttribute(B, "true"),
                  o.some(function (e, t) {
                    return (a = t), n.isEqualNode(e)
                  })
                    ? o.splice(a, 1)
                    : i.push(n)
              }),
            o.forEach(function (e) {
              return e.parentNode.removeChild(e)
            }),
            i.forEach(function (e) {
              return n.appendChild(e)
            }),
            { oldTags: o, newTags: i }
          )
        },
        se = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n
            return t ? t + " " + r : r
          }, "")
        },
        fe = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return Object.keys(e).reduce(function (t, n) {
            return (t[P[n] || n] = e[n]), t
          }, t)
        },
        pe = function (e, t, n) {
          switch (e) {
            case v.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })[B] = !0),
                    (o = fe(n, r)),
                    [d.createElement(v.TITLE, o, e)]
                  )
                  var e, n, r, o
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var o = se(n),
                      i = ae(t)
                    return o
                      ? "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          o +
                          ">" +
                          z(i, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          ' data-react-helmet="true">' +
                          z(i, r) +
                          "</" +
                          e +
                          ">"
                  })(e, t.title, t.titleAttributes, n)
                },
              }
            case g:
            case m:
              return {
                toComponent: function () {
                  return fe(t)
                },
                toString: function () {
                  return se(t)
                },
              }
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, n) {
                      var r,
                        o = (((r = { key: n })[B] = !0), r)
                      return (
                        Object.keys(t).forEach(function (e) {
                          var n = P[e] || e
                          if (n === A || n === w) {
                            var r = t.innerHTML || t.cssText
                            o.dangerouslySetInnerHTML = { __html: r }
                          } else o[n] = t[e]
                        }),
                        d.createElement(e, o)
                      )
                    })
                  })(e, t)
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var o = Object.keys(r)
                          .filter(function (e) {
                            return !(e === A || e === w)
                          })
                          .reduce(function (e, t) {
                            var o =
                              void 0 === r[t] ? t : t + '="' + z(r[t], n) + '"'
                            return e ? e + " " + o : o
                          }, ""),
                        i = r.innerHTML || r.cssText || "",
                        a = -1 === H.indexOf(e)
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        o +
                        (a ? "/>" : ">" + i + "</" + e + ">")
                      )
                    }, "")
                  })(e, t, n)
                },
              }
          }
        },
        de = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            o = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            u = e.noscriptTags,
            c = e.scriptTags,
            l = e.styleTags,
            s = e.title,
            f = void 0 === s ? "" : s,
            p = e.titleAttributes
          return {
            base: pe(v.BASE, t, r),
            bodyAttributes: pe(g, n, r),
            htmlAttributes: pe(m, o, r),
            link: pe(v.LINK, i, r),
            meta: pe(v.META, a, r),
            noscript: pe(v.NOSCRIPT, u, r),
            script: pe(v.SCRIPT, c, r),
            style: pe(v.STYLE, l, r),
            title: pe(v.TITLE, { title: f, titleAttributes: p }, r),
          }
        },
        ye = s()(
          function (e) {
            return {
              baseTag: Z([O, L], e),
              bodyAttributes: $(g, e),
              defer: Q(e, I),
              encode: Q(e, M),
              htmlAttributes: $(m, e),
              linkTags: J(v.LINK, [j, O], e),
              metaTags: J(v.META, [S, T, E, k, C], e),
              noscriptTags: J(v.NOSCRIPT, [A], e),
              onChangeClientState: V(e),
              scriptTags: J(v.SCRIPT, [x, A], e),
              styleTags: J(v.STYLE, [w], e),
              title: G(e),
              titleAttributes: $(b, e),
            }
          },
          function (e) {
            oe && ne(oe),
              e.defer
                ? (oe = te(function () {
                    ie(e, function () {
                      oe = null
                    })
                  }))
                : (ie(e), (oe = null))
          },
          de
        )(function () {
          return null
        }),
        he =
          ((o = ye),
          (a = i =
            (function (e) {
              function t() {
                return q(this, t), W(this, e.apply(this, arguments))
              }
              return (
                (function (e, t) {
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
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !p()(this.props, e)
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null
                  switch (e.type) {
                    case v.SCRIPT:
                    case v.NOSCRIPT:
                      return { innerHTML: t }
                    case v.STYLE:
                      return { cssText: t }
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  )
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    o = e.newChildProps,
                    i = e.nestedChildren
                  return F(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      F({}, o, this.mapNestedChildrenToProps(n, i)),
                    ])),
                    t)
                  )
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    o = e.newProps,
                    i = e.newChildProps,
                    a = e.nestedChildren
                  switch (r.type) {
                    case v.TITLE:
                      return F(
                        {},
                        o,
                        (((t = {})[r.type] = a),
                        (t.titleAttributes = F({}, i)),
                        t)
                      )
                    case v.BODY:
                      return F({}, o, { bodyAttributes: F({}, i) })
                    case v.HTML:
                      return F({}, o, { htmlAttributes: F({}, i) })
                  }
                  return F({}, o, (((n = {})[r.type] = F({}, i)), n))
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = F({}, t)
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r
                      n = F({}, n, (((r = {})[t] = e[t]), r))
                    }),
                    n
                  )
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {}
                  return (
                    d.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var o = e.props,
                          i = o.children,
                          a = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {}
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[D[n] || n] = e[n]), t
                            }, t)
                          })(K(o, ["children"]))
                        switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                          case v.LINK:
                          case v.META:
                          case v.NOSCRIPT:
                          case v.SCRIPT:
                          case v.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: a,
                              nestedChildren: i,
                            })
                            break
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: a,
                              nestedChildren: i,
                            })
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  )
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = K(e, ["children"]),
                    r = F({}, n)
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    d.createElement(o, r)
                  )
                }),
                U(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      o.canUseDOM = e
                    },
                  },
                ]),
                t
              )
            })(d.Component)),
          (i.propTypes = {
            base: c().object,
            bodyAttributes: c().object,
            children: c().oneOfType([c().arrayOf(c().node), c().node]),
            defaultTitle: c().string,
            defer: c().bool,
            encodeSpecialCharacters: c().bool,
            htmlAttributes: c().object,
            link: c().arrayOf(c().object),
            meta: c().arrayOf(c().object),
            noscript: c().arrayOf(c().object),
            onChangeClientState: c().func,
            script: c().arrayOf(c().object),
            style: c().arrayOf(c().object),
            title: c().string,
            titleAttributes: c().object,
            titleTemplate: c().string,
          }),
          (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (i.peek = o.peek),
          (i.rewind = function () {
            var e = o.rewind()
            return (
              e ||
                (e = de({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            )
          }),
          a)
      ;(he.renderStatic = he.rewind), (t.default = he)
    },
    4839: function (e, t, n) {
      "use strict"
      var r,
        o = n(7294),
        i = (r = o) && "object" == typeof r && "default" in r ? r.default : r
      function a(e, t, n) {
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
      }
      var u = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.")
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          )
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          )
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            )
          var c,
            l = []
          function s() {
            ;(c = e(
              l.map(function (e) {
                return e.props
              })
            )),
              f.canUseDOM ? t(c) : n && (c = n(c))
          }
          var f = (function (e) {
            var t, n
            function o() {
              return e.apply(this, arguments) || this
            }
            ;(n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (o.peek = function () {
                return c
              }),
              (o.rewind = function () {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  )
                var e = c
                return (c = void 0), (l = []), e
              })
            var a = o.prototype
            return (
              (a.UNSAFE_componentWillMount = function () {
                l.push(this), s()
              }),
              (a.componentDidUpdate = function () {
                s()
              }),
              (a.componentWillUnmount = function () {
                var e = l.indexOf(this)
                l.splice(e, 1), s()
              }),
              (a.render = function () {
                return i.createElement(r, this.props)
              }),
              o
            )
          })(o.PureComponent)
          return (
            a(
              f,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component"
                })(r) +
                ")"
            ),
            a(f, "canUseDOM", u),
            f
          )
        }
      }
    },
    9438: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.Helmet = void 0)
      var o = r(n(7316)),
        i = r(n(7294)),
        a = n(5414),
        u = n(3396),
        c = ["children"]
      t.Helmet = function (e) {
        var t = e.children,
          n = (0, o.default)(e, c),
          r = (0, u.useI18next)(),
          l = r.languages,
          s = r.language,
          f = r.originalPath,
          p = r.defaultLanguage,
          d = r.siteUrl,
          y = void 0 === d ? "" : d,
          h = function (e) {
            var t = y + (e === p ? "" : "/" + e) + f
            return t.endsWith("/") ? t : t + "/"
          }
        return i.default.createElement(
          a.Helmet,
          n,
          i.default.createElement("html", { lang: s }),
          i.default.createElement("link", { rel: "canonical", href: h(s) }),
          l.map(function (e) {
            return i.default.createElement("link", {
              rel: "alternate",
              key: e,
              href: h(e),
              hrefLang: e,
            })
          }),
          i.default.createElement("link", {
            rel: "alternate",
            href: h(p),
            hrefLang: "x-default",
          }),
          t
        )
      }
    },
    439: function (e, t, n) {
      "use strict"
      var r = n(5318),
        o = n(862)
      ;(t.__esModule = !0), (t.Link = void 0)
      var i = r(n(7154)),
        a = r(n(7316)),
        u = o(n(7294)),
        c = n(9604),
        l = n(5444),
        s = n(8742),
        f = ["language", "to", "onClick"],
        p = u.default.forwardRef(function (e, t) {
          var n = e.language,
            r = e.to,
            o = e.onClick,
            p = (0, a.default)(e, f),
            d = (0, u.useContext)(c.I18nextContext),
            y = n || d.language,
            h =
              "" +
              (function (e) {
                return d.generateDefaultLanguagePage || e !== d.defaultLanguage
                  ? "/" + e
                  : ""
              })(y) +
              r
          return u.default.createElement(
            l.Link,
            (0, i.default)({}, p, {
              to: h,
              innerRef: t,
              hrefLang: y,
              onClick: function (e) {
                n && localStorage.setItem(s.LANGUAGE_KEY, n), o && o(e)
              },
            })
          )
        })
      t.Link = p
    },
    6535: function (e, t, n) {
      "use strict"
      t.__esModule = !0
      var r = n(3999)
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === r[e]) || (t[e] = r[e]))
      })
      var o = n(9604)
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) || (t[e] = o[e]))
      })
      var i = n(3396)
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) || (t[e] = i[e]))
      })
      var a = n(439)
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) || (t[e] = a[e]))
      })
      var u = n(9438)
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) || (t[e] = u[e]))
      })
    },
    3396: function (e, t, n) {
      "use strict"
      var r = n(5318)
      ;(t.__esModule = !0), (t.useI18next = void 0)
      var o = r(n(7154)),
        i = n(3999),
        a = n(7294),
        u = n(5444),
        c = n(9604),
        l = n(8742)
      t.useI18next = function (e, t) {
        var n = (0, i.useTranslation)(e, t),
          r = n.i18n,
          s = n.t,
          f = n.ready,
          p = (0, a.useContext)(c.I18nextContext),
          d = p.routed,
          y = p.defaultLanguage,
          h = p.generateDefaultLanguagePage,
          g = function (e) {
            return h || e !== y ? "/" + e : ""
          }
        return (0, o.default)({}, p, {
          i18n: r,
          t: s,
          ready: f,
          navigate: function (e, t) {
            var n = g(p.language),
              r = d ? "" + n + e : "" + e
            return (0, u.navigate)(r, t)
          },
          changeLanguage: function (e, t, n) {
            var r =
              "" +
              g(e) +
              (t ||
                (function (e) {
                  if (!d) return e
                  var t = e.indexOf("/", 1)
                  return e.substring(t)
                })(window.location.pathname)) +
              window.location.search
            return (
              localStorage.setItem(l.LANGUAGE_KEY, e), (0, u.navigate)(r, n)
            )
          },
        })
      }
    },
    5093: function (e, t, n) {
      e.exports = n(6535)
    },
    6600: function (e, t, n) {
      "use strict"
      var r = n(7294),
        o = n(5093)
      t.Z = function (e) {
        var t = e.title,
          n = (0, o.useI18next)(),
          i = n.languages,
          a = n.originalPath
        return r.createElement(
          "header",
          { className: "main-header" },
          r.createElement(
            "h1",
            { style: { margin: 0 } },
            r.createElement(
              o.Link,
              { to: "/", style: { color: "white", textDecoration: "none" } },
              t
            )
          ),
          r.createElement(
            "ul",
            { className: "languages" },
            i.map(function (e) {
              return r.createElement(
                "li",
                { key: e },
                r.createElement(o.Link, { to: a, language: e }, e)
              )
            })
          )
        )
      }
    },
  },
])
//# sourceMappingURL=commons-ba0ab078b409a42dd79c.js.map
