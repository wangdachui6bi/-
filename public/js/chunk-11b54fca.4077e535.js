;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-11b54fca'],
  {
    1865: function (t, i, s) {
      'use strict'
      s('2735')
    },
    2735: function (t, i, s) {},
    f841: function (t, i, s) {
      'use strict'
      s.r(i)
      var a = function () {
          var t = this,
            i = t.$createElement,
            s = t._self._c || i
          return s(
            'div',
            { staticClass: 'ArtistList' },
            [
              s(
                'el-skeleton',
                { attrs: { rows: 6, animated: '', loading: t.loading } },
                [
                  s('p', [
                    s(
                      'button',
                      {
                        on: {
                          click: function (i) {
                            t.isShow = !t.isShow
                          },
                        },
                      },
                      [t._v('打开列表')],
                    ),
                  ]),
                  s(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: t.isShow,
                          expression: 'isShow',
                        },
                      ],
                      staticClass: 'tag-wrapper',
                    },
                    [
                      s('div', { staticClass: 'languages' }, [
                        s('span', { staticClass: 'lang' }, [t._v('语种:')]),
                        s(
                          'div',
                          { staticClass: 'el-radio-group' },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'el-radio',
                                on: { click: t.allLang },
                              },
                              [t._v('全部')],
                            ),
                            t._l(t.countries, function (i) {
                              return s(
                                'div',
                                {
                                  key: i.id1,
                                  staticClass: 'el-radio',
                                  on: {
                                    click: function (s) {
                                      return t.countryId(i.id1)
                                    },
                                  },
                                },
                                [t._v(' ' + t._s(i.name) + ' ')],
                              )
                            }),
                          ],
                          2,
                        ),
                      ]),
                      s('div', { staticClass: 'languages' }, [
                        s('span', { staticClass: 'sort' }, [t._v('分类:')]),
                        s(
                          'div',
                          { staticClass: 'el-radio-group' },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'el-radio',
                                on: { click: t.allsort },
                              },
                              [t._v('全部')],
                            ),
                            t._l(t.sorts, function (i) {
                              return s(
                                'div',
                                {
                                  key: i.id,
                                  staticClass: 'el-radio',
                                  on: {
                                    click: function (s) {
                                      return t.sortId(i.id)
                                    },
                                  },
                                },
                                [t._v(' ' + t._s(i.name) + ' ')],
                              )
                            }),
                          ],
                          2,
                        ),
                      ]),
                      s('div', { staticClass: 'languages' }, [
                        s('span', { staticClass: 'choice' }, [t._v('筛选:')]),
                        s(
                          'div',
                          { staticClass: 'el-radio-group' },
                          [
                            s(
                              'div',
                              {
                                staticClass: 'el-radio',
                                on: { click: t.filterAll },
                              },
                              [t._v('全部')],
                            ),
                            t._l(t.alphabet, function (i, a) {
                              return s(
                                'div',
                                {
                                  key: a,
                                  staticClass: 'el-radio',
                                  on: {
                                    click: function (s) {
                                      return t.zmId(i)
                                    },
                                  },
                                },
                                [t._v(' ' + t._s(i) + ' ')],
                              )
                            }),
                          ],
                          2,
                        ),
                      ]),
                    ],
                  ),
                  s(
                    'div',
                    { staticClass: 'imgList' },
                    t._l(t.message, function (i) {
                      return s(
                        'div',
                        { key: i.id, staticClass: 'imgListInfo' },
                        [
                          s('img', {
                            attrs: { src: i.img1v1Url },
                            on: {
                              click: function (s) {
                                return t.toArtisInfo(i.id)
                              },
                            },
                          }),
                          s('p', [t._v(t._s(i.name))]),
                        ],
                      )
                    }),
                    0,
                  ),
                ],
              ),
            ],
            1,
          )
        },
        n = [],
        e = s('f9ea'),
        r = (s('e186'), s('1313'), s('b775')),
        o = function (t) {
          var i = t.type,
            s = t.area,
            a = t.initial
          return Object(r['a'])({
            method: 'get',
            url: '/artist/list?limit=30&offset=0&type='
              .concat(i, '&area=')
              .concat(s, '&initial=')
              .concat(a),
          })
        },
        c = {
          name: 'ArtistList',
          data: function () {
            return {
              loading: !0,
              message: [],
              allid: -1,
              saveSortId: -1,
              saveCountryId: -1,
              saveZmId: -1,
              sorts: [
                { id: 1, name: '男歌手' },
                { id: 2, name: '女歌手' },
                { id: 3, name: '乐队' },
              ],
              countries: [
                { id1: 7, name: '华语' },
                { id1: 96, name: '欧美' },
                { id1: 8, name: '日本' },
                { id1: 16, name: '韩国' },
                { id1: 0, name: '其他' },
              ],
              isShow: !1,
              alphabet: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'G',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
                '#',
              ],
            }
          },
          mounted: function () {
            this.getArtisList()
          },
          methods: {
            getArtisList: function (t, i, s) {
              var a = this
              return Object(e['a'])(
                regeneratorRuntime.mark(function t() {
                  var i
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            o({
                              type: a.saveSortId,
                              area: a.saveCountryId,
                              initial: a.saveZmId,
                            })
                          )
                        case 2:
                          ;(i = t.sent),
                          (a.message = i.data.artists),
                          (a.loading = !1)
                        case 5:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                }),
              )()
            },
            sortId: function (t) {
              ;(this.saveSortId = t), this.getArtisList()
            },
            countryId: function (t) {
              ;(this.saveCountryId = t), this.getArtisList()
            },
            zmId: function (t) {
              ;(this.saveZmId = t), this.getArtisList()
            },
            allLang: function () {
              ;(this.saveCountryId = -1), this.getArtisList()
            },
            allsort: function () {
              ;(this.saveSortId = -1), this.getArtisList()
            },
            filterAll: function () {
              ;(this.saveZmId = -1), this.getArtisList()
            },
            toArtisInfo: function (t) {
              this.$router.push('/artistdetail/'.concat(t))
            },
          },
        },
        l = c,
        d = (s('1865'), s('cba8')),
        u = Object(d['a'])(l, a, n, !1, null, null, null)
      i['default'] = u.exports
    },
  },
])
//# sourceMappingURL=chunk-11b54fca.4077e535.js.map
