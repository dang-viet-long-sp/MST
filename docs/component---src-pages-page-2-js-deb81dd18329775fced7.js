"use strict"
;(self.webpackChunkgatsby_starter_default =
  self.webpackChunkgatsby_starter_default || []).push([
  [617],
  {
    7198: function (t, e, n) {
      var a = n(7294),
        r = n(5444),
        i = n(6600)
      e.Z = function (t) {
        var e,
          n = t.children,
          l = (0, r.useStaticQuery)("3649515864")
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(i.Z, {
            siteTitle:
              (null === (e = l.site.siteMetadata) || void 0 === e
                ? void 0
                : e.title) || "Title",
          }),
          a.createElement(
            "div",
            {
              style: {
                margin: "0 auto",
                maxWidth: 960,
                padding: "0 1.0875rem 1.45rem",
              },
            },
            a.createElement("main", null, n),
            a.createElement(
              "footer",
              { style: { marginTop: "2rem" } },
              "© ",
              new Date().getFullYear(),
              ", Built with",
              " ",
              a.createElement(
                "a",
                { href: "https://www.gatsbyjs.com" },
                "Gatsby"
              )
            )
          )
        )
      }
    },
    6179: function (t, e, n) {
      var a = n(7294),
        r = n(5414),
        i = n(5444)
      function l(t) {
        var e,
          n,
          l = t.description,
          o = t.lang,
          c = t.meta,
          m = t.title,
          s = (0, i.useStaticQuery)("63159454").site,
          u = l || s.siteMetadata.description,
          d = null === (e = s.siteMetadata) || void 0 === e ? void 0 : e.title
        return a.createElement(r.Helmet, {
          htmlAttributes: { lang: o },
          title: m,
          titleTemplate: d ? "%s | " + d : null,
          meta: [
            { name: "description", content: u },
            { property: "og:title", content: m },
            { property: "og:description", content: u },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            {
              name: "twitter:creator",
              content:
                (null === (n = s.siteMetadata) || void 0 === n
                  ? void 0
                  : n.author) || "",
            },
            { name: "twitter:title", content: m },
            { name: "twitter:description", content: u },
          ].concat(c),
        })
      }
      ;(l.defaultProps = { lang: "en", meta: [], description: "" }), (e.Z = l)
    },
    9863: function (t, e, n) {
      n.r(e)
      var a = n(7294),
        r = n(5444),
        i = n(7198),
        l = n(6179)
      e.default = function () {
        return a.createElement(
          i.Z,
          null,
          a.createElement(l.Z, { title: "Page two" }),
          a.createElement("h1", null, "Hi from the second page"),
          a.createElement("p", null, "Welcome to page 2"),
          a.createElement(r.Link, { to: "/" }, "Go back to the homepage")
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-page-2-js-deb81dd18329775fced7.js.map
