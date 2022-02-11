;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-23ec1ab2'],
  {
    '09a7': function (t, e, n) {
      'use strict'
      var i = n('7e70'),
        a = n('434b').map,
        s = n('2574'),
        r = s('map')
      i(
        { target: 'Array', proto: !0, forced: !r },
        {
          map: function (t) {
            return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
          },
        },
      )
    },
    '0c49': function (t, e, n) {},
    '2c5e': function (t, e, n) {},
    '4e34': function (t, e, n) {
      'use strict'
      n('6aa1')
    },
    '6aa1': function (t, e, n) {},
    '84f7': function (t, e, n) {
      'use strict'
      n('fd3a')
    },
    '906d': function (t, e, n) {},
    ca65: function (t, e, n) {
      'use strict'
      n('0c49')
    },
    d4d3: function (t, e, n) {
      'use strict'
      n('2c5e')
    },
    f843: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'artistListInfo view-main' },
            [
              n(
                'el-skeleton',
                { attrs: { rows: 1, animated: '', loading: t.loading } },
                [
                  n('div', { staticClass: 'artistInfo' }, [
                    n('div', { staticClass: 'img-wrap' }, [
                      n('img', {
                        attrs: { src: t.singerDetails.cover, alt: '' },
                      }),
                    ]),
                    n('p', { staticClass: 'pname' }, [
                      n('span', [t._v(t._s(t.singerDetails.name))]),
                      n('button', [
                        n('i', {
                          staticClass: 'icon iconfont icon-tianjiawenjian',
                        }),
                        t._v(' 收藏 '),
                      ]),
                    ]),
                    n('p', { staticClass: 'pNumber' }, [
                      n('span', [
                        t._v('单曲数:' + t._s(t.singerDetails.albumSize)),
                      ]),
                      n('span', [
                        t._v('专辑数:' + t._s(t.singerDetails.albumSize)),
                      ]),
                      n('span', [t._v('MV数:' + t._s(t.singerDetails.mvSize))]),
                    ]),
                  ]),
                  n(
                    'van-tabs',
                    {
                      model: {
                        value: t.active,
                        callback: function (e) {
                          t.active = e
                        },
                        expression: 'active',
                      },
                    },
                    [
                      n(
                        'van-tab',
                        { attrs: { title: '专辑' } },
                        [n('Album')],
                        1,
                      ),
                      n('van-tab', { attrs: { title: 'MV' } }, [n('Mv')], 1),
                      n(
                        'van-tab',
                        { attrs: { title: '歌手详情' } },
                        [n('Singerdetails')],
                        1,
                      ),
                      n(
                        'van-tab',
                        { attrs: { title: '相似歌手' } },
                        [n('Similar')],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          )
        },
        a = [],
        s = n('f9ea'),
        r = (n('e186'), n('b775')),
        c = function (t) {
          return Object(r['a'])({
            method: 'get',
            url: '/artist/detail?id='.concat(t),
          })
        },
        o = function (t) {
          return Object(r['a'])({
            method: 'get',
            url: '/artist/top/song?id='.concat(t),
          })
        },
        l = function (t) {
          return Object(r['a'])({
            method: 'get',
            url: '/artist/album?id='.concat(t),
          })
        },
        u = function (t) {
          return Object(r['a'])({
            method: 'get',
            url: '/artist/mv?id='.concat(t),
          })
        },
        d = function (t) {
          return Object(r['a'])({
            method: 'get',
            url: '/simi/artist?id='.concat(t),
          })
        },
        f = function (t) {
          return Object(r['a'])({
            method: 'get',
            url: '/artist/desc?id='.concat(t),
          })
        },
        m = function (t) {
          return Object(r['a'])({ method: 'get', url: 'album?id='.concat(t) })
        },
        g = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'Album' },
            [
              n('div', { staticClass: 'top50' }, [
                t._m(0),
                n(
                  'div',
                  { staticClass: 'topList' },
                  [
                    t._m(1),
                    n(
                      'el-table',
                      {
                        staticStyle: { width: '100%' },
                        attrs: { data: t.tableData, stripe: '' },
                        on: { 'row-click': t.getOneSong },
                      },
                      [
                        n('el-table-column', {
                          attrs: { prop: 'index', label: '', width: '50px' },
                        }),
                        n('el-table-column', {
                          attrs: {
                            prop: 'name',
                            label: '音乐标题',
                            width: '90px',
                          },
                        }),
                        n('el-table-column', {
                          attrs: { prop: 'dt', label: '时长' },
                        }),
                      ],
                      1,
                    ),
                    n('p', [
                      n('span', { on: { click: t.getMore } }, [
                        t._v(t._s(t.flag ? '点击加载更多' : '点我收起')),
                      ]),
                    ]),
                  ],
                  1,
                ),
              ]),
              t._l(t.allHotAlbums, function (e, i) {
                return n('div', { key: e.id, staticClass: 'top50' }, [
                  n('div', { staticClass: 'topImg' }, [
                    n('img', {
                      attrs: { src: e.blurPicUrl, alt: '' },
                      on: {
                        click: function (n) {
                          return t.getTo('albumdetail', e.id)
                        },
                      },
                    }),
                  ]),
                  n('div', { staticClass: 'topList' }, [
                    n('p', [
                      n('span', [t._v(t._s(e.name))]),
                      n('i', { staticClass: 'icon iconfont icon-bofang' }),
                    ]),
                    n('table', [
                      t._m(2, !0),
                      n(
                        'tbody',
                        t._l(t.allAlbumSongMsg[i], function (e, i) {
                          return n(
                            'tr',
                            {
                              key: i,
                              on: {
                                click: function (n) {
                                  return t.getOneSong(e)
                                },
                              },
                            },
                            [
                              n('td', { staticStyle: { width: '50px' } }, [
                                t._v(t._s(e.idKey)),
                              ]),
                              n('td', { staticClass: 'sl' }, [
                                t._v(t._s(e.name)),
                              ]),
                              n('td', [t._v(t._s(t._f('dataFilter')(e.dt)))]),
                            ],
                          )
                        }),
                        0,
                      ),
                    ]),
                  ]),
                ])
              }),
            ],
            2,
          )
        },
        p = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: 'topImg' }, [
              n('img', {
                attrs: {
                  src: 'http://47.102.159.133/img/top50.89421d54.png',
                  alt: '',
                },
              }),
            ])
          },
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('p', [
              n('span', [t._v('热门50首')]),
              n('i', { staticClass: 'icon iconfont icon-bofang' }),
            ])
          },
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('thead', [
              n('tr', [
                n('th', { staticStyle: { width: '50px' } }),
                n('th', { staticStyle: { width: '90px' } }, [t._v('音乐标题')]),
                n('th', { attrs: { aid: 'aAlbum.id' } }, [t._v('时长')]),
              ]),
            ])
          },
        ],
        h = (n('1baf'), n('e456'), n('af46'), n('4f84'), n('09a7'), n('007d')),
        v = n('c32d'),
        b = n.n(v),
        _ = {
          data: function () {
            return {
              id: this.$route.params.id,
              tableData: [],
              index: 1,
              flag: !0,
              allHotAlbums: [],
              allTime: [],
              isListenId: 0,
              songMsg: {},
              allAlbumSongMsg: [],
            }
          },
          filters: {
            dataFilter: function (t) {
              return b()(t).format('mm:ss')
            },
          },
          mounted: function () {
            this.getArtisListInfo(this.id), this.getAlbum(this.id)
          },
          methods: {
            getOneSong: function (t) {
              if (this.isListenId !== t.id) {
                this.isListenId = t.id
                var e = {}
                ;(e.songName = t.name),
                (e.singer = t.ar[0].name),
                (e.id = t.id),
                (e.picUrl = t.al.picUrl),
                (this.songMsg = e),
                this.$store.dispatch('songDetail/getoneMusic', e),
                this.$store.commit('songDetail/setplayListTracks', [t])
              } else
                this.$store.state.songDetail.isPlay ||
                  this.$store.commit('songDetail/playback')
            },
            getTo: function (t, e) {
              this.$router.push('/' + t + '/' + e)
            },
            getArtisListInfo: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i, a
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), o(t)
                        case 2:
                          ;(i = n.sent),
                          (a = i.data.songs),
                          a.forEach(function (t, e) {
                            ;(t.index = e + 1),
                            (t.dt = b()(t.dt).format('mm:ss'))
                          }),
                          e.flag
                            ? (e.tableData = a.slice(0, 10))
                            : (e.tableData = a)
                        case 6:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
            getAlbum: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i, a
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), l(t)
                        case 2:
                          ;(i = n.sent),
                          (a = i.data.hotAlbums),
                          a.forEach(function (t, n) {
                            var i = t.id
                            e.getTime(i), (t.index = n + 1)
                          }),
                          (e.allHotAlbums = a)
                        case 6:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
            getTime: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i, a
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), m(t)
                        case 2:
                          ;(i = n.sent),
                          (a = i.data.songs),
                          a.forEach(function (t, n) {
                            var i = b()(t.dt).format('mm:ss')
                            e.allTime.push(i)
                          })
                        case 5:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
            getMore: function () {
              ;(this.flag = !this.flag), this.getArtisListInfo(this.id)
            },
          },
          watch: {
            allAlumId: function (t) {
              var e = this
              t.forEach(function (t) {
                Object(h['a'])(t).then(function (t) {
                  t.data.songs.forEach(function (t, e) {
                    t.idKey = e + 1
                  }),
                  e.allAlbumSongMsg.push(t.data.songs)
                })
              })
            },
          },
          computed: {
            allAlumId: function () {
              var t = this.allHotAlbums.map(function (t) {
                return t.id
              })
              return t
            },
          },
        },
        w = _,
        C = (n('ca65'), n('cba8')),
        x = Object(C['a'])(w, g, p, !1, null, '5c3ff01a', null),
        A = x.exports,
        I = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'mv' },
            t._l(t.videos, function (e) {
              return n('div', { key: e.id, staticClass: 'mvInfo' }, [
                n('div', { staticClass: 'mvImgInfo' }, [
                  n('img', {
                    attrs: { src: e.imgurl16v9, alt: '' },
                    on: {
                      click: function (n) {
                        return t.turnToPlay(e.id)
                      },
                    },
                  }),
                  n('div', { staticClass: 'positionIcon' }, [
                    n('i', { staticClass: 'el-icon-video-play icon1' }),
                    n('span', { staticClass: 'spn1' }, [t._v(t._s(e.num))]),
                    n('span', [t._v(t._s(e.flag ? '万' : ''))]),
                  ]),
                ]),
                n('p', [t._v(t._s(e.name))]),
              ])
            }),
            0,
          )
        },
        k = [],
        O = {
          data: function () {
            return { videos: [], id: this.$route.params.id }
          },
          mounted: function () {
            this.getArtisListInfo(this.id)
          },
          methods: {
            getArtisListInfo: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i, a
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), u(t)
                        case 2:
                          ;(i = n.sent),
                          (a = i.data.mvs),
                          a.forEach(function (t) {
                            t.playCount > 1e4
                              ? ((t.num = parseInt(t.playCount / 1e4)),
                              (t.flag = !0))
                              : ((t.num = t.playCount), (t.flag = !1))
                          }),
                          (e.videos = a)
                        case 6:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
            turnToPlay: function (t) {
              this.$router.push('/videodetail/mv/'.concat(t))
            },
          },
        },
        j = O,
        y = (n('d4d3'), Object(C['a'])(j, I, k, !1, null, '21ff6171', null)),
        S = y.exports,
        D = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'el-skeleton',
            { attrs: { rows: 5, animated: '', loading: t.loading } },
            [
              n(
                'div',
                { staticClass: 'similarSinger' },
                t._l(t.similarArtist, function (e) {
                  return n('div', { key: e.id, staticClass: 'similarInfo' }, [
                    n('div', { staticClass: 'imgInfo' }, [
                      n('img', { attrs: { src: e.picUrl, alt: '' } }),
                    ]),
                    n('p', [t._v(t._s(e.name))]),
                  ])
                }),
                0,
              ),
            ],
          )
        },
        $ = [],
        L = {
          data: function () {
            return { id: this.$route.params.id, similarArtist: [], loading: !0 }
          },
          mounted: function () {
            this.getSimilarInfo(this.id)
          },
          methods: {
            getSimilarInfo: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i, a
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), d(t)
                        case 2:
                          ;(i = n.sent),
                          (a = i.data.artists),
                          a.push({ picUrl: '', name: '' }),
                          (e.similarArtist = a),
                          (e.loading = !1)
                        case 7:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
          },
        },
        E = L,
        R = (n('ffce'), Object(C['a'])(E, D, $, !1, null, null, null)),
        M = R.exports,
        T = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'introduce' },
            [
              n(
                'el-skeleton',
                { attrs: { rows: 5, animated: '', loading: t.loading } },
                [
                  n(
                    'div',
                    { staticClass: 'ins' },
                    [
                      n('h2', [t._v('个人简介')]),
                      n('p', { staticClass: 'selfins' }, [
                        t._v(t._s(t.selfDetail)),
                      ]),
                      t._l(t.details, function (e, i) {
                        return n('div', { key: i, staticClass: 'others' }, [
                          n('h2', [t._v(t._s(e.ti))]),
                          n('p', { staticClass: 'otherp' }, [
                            t._v(t._s(e.txt)),
                          ]),
                        ])
                      }),
                    ],
                    2,
                  ),
                ],
              ),
            ],
            1,
          )
        },
        U = [],
        H = {
          data: function () {
            return {
              id: this.$route.params.id,
              details: [],
              selfDetail: [],
              loading: !0,
            }
          },
          mounted: function () {
            this.getArtisListInfo(this.id)
          },
          methods: {
            getArtisListInfo: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), f(t)
                        case 2:
                          ;(i = n.sent),
                          (e.selfDetail = i.data.briefDesc),
                          (e.details = i.data.introduction),
                          (e.loading = !1)
                        case 6:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
          },
        },
        P = H,
        z = (n('4e34'), Object(C['a'])(P, T, U, !1, null, '7a79d277', null)),
        F = z.exports,
        J = {
          props: ['id'],
          components: { Album: A, Mv: S, Similar: M, Singerdetails: F },
          data: function () {
            return { singerDetails: [], active: 2, loading: !0 }
          },
          mounted: function () {
            this.getArtisListInfo(this.id)
          },
          methods: {
            getArtisListInfo: function (t) {
              var e = this
              return Object(s['a'])(
                regeneratorRuntime.mark(function n() {
                  var i
                  return regeneratorRuntime.wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), c(t)
                        case 2:
                          ;(i = n.sent),
                          (e.singerDetails = i.data.data.artist),
                          (e.loading = !1)
                        case 5:
                        case 'end':
                          return n.stop()
                      }
                  }, n)
                }),
              )()
            },
          },
        },
        K = J,
        N = (n('84f7'), Object(C['a'])(K, i, a, !1, null, '24e10c6b', null))
      e['default'] = N.exports
    },
    fd3a: function (t, e, n) {},
    ffce: function (t, e, n) {
      'use strict'
      n('906d')
    },
  },
])
//# sourceMappingURL=chunk-23ec1ab2.d0c48a08.js.map
