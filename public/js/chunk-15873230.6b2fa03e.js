;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-15873230'],
  {
    '2a5e': function (t, e, i) {
      'use strict'
      i.d(e, 'a', function () {
        return s
      }),
      i.d(e, 'e', function () {
        return a
      }),
      i.d(e, 'g', function () {
        return r
      }),
      i.d(e, 'f', function () {
        return c
      }),
      i.d(e, 'c', function () {
        return o
      }),
      i.d(e, 'i', function () {
        return l
      }),
      i.d(e, 'b', function () {
        return u
      }),
      i.d(e, 'd', function () {
        return d
      }),
      i.d(e, 'h', function () {
        return f
      })
      i('1313')
      var n = i('b775'),
        s = function () {
          return Object(n['a'])('/banner')
        },
        a = function (t) {
          return Object(n['a'])({
            method: 'get',
            url: '/personalized?limit='.concat(t),
          })
        },
        r = function () {
          return Object(n['a'])('/recommend/resource')
        },
        c = function (t) {
          return Object(n['a'])({
            method: 'get',
            url: '/playlist/detail?id='.concat(t),
          })
        },
        o = function (t) {
          return Object(n['a'])({
            method: 'get',
            url: '/likelist?id='.concat(t),
          })
        },
        l = function (t, e) {
          return Object(n['a'])({
            method: 'get',
            url: '/like?id='.concat(t, '&like=').concat(e),
          })
        },
        u = function (t, e, i) {
          return Object(n['a'])({
            method: 'get',
            url: '/comment/hot?id='
              .concat(t, '&type=')
              .concat(e, '&limit=')
              .concat(i),
          })
        },
        d = function (t) {
          var e = t.id,
            i = t.limit,
            s = void 0 === i ? 20 : i,
            a = t.page,
            r = void 0 === a ? 0 : a,
            c = t.before,
            o = void 0 === c ? 0 : c,
            l = r * s
          return Object(n['a'])({
            method: 'get',
            url: '/comment/playlist?id='
              .concat(e, '&limit=')
              .concat(s, '&offset=')
              .concat(l, '&before=')
              .concat(o),
          })
        },
        f = function (t) {
          var e = t.id,
            i = t.limit,
            s = void 0 === i ? 30 : i,
            a = t.page,
            r = void 0 === a ? 0 : a,
            c = r * s
          return Object(n['a'])({
            method: 'get',
            url: '/playlist/subscribers?id='
              .concat(e, '&limit=')
              .concat(s, '&offset=')
              .concat(c),
          })
        }
    },
    '64f9': function (t, e, i) {
      'use strict'
      i('c27f')
    },
    '79ce': function (t, e, i) {
      'use strict'
      i.r(e)
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e
          return i('div', { staticClass: 'Search view-main' }, [
            i(
              'div',
              { staticClass: 'search-list mtop-20' },
              [
                i('div', { staticClass: 'font-bold' }, [
                  t._v(
                    '找到 ' +
                      t._s(t.Count) +
                      ' 个 ' +
                      t._s(t.typename) +
                      ' 的搜索结果',
                  ),
                ]),
                i(
                  'ul',
                  { staticClass: 'search-menu' },
                  t._l(t.types, function (e, n) {
                    return i(
                      'li',
                      {
                        key: n,
                        staticClass: 'search-menu-item',
                        class: n === t.active ? 'isActive' : '',
                        on: {
                          click: function (i) {
                            return t.search(n, e.name, e.type)
                          },
                        },
                      },
                      [t._v(' ' + t._s(e.name) + ' ')],
                    )
                  }),
                  0,
                ),
                i(
                  'el-skeleton',
                  { attrs: { rows: 6, animated: '', loading: t.loading } },
                  [
                    t.loading || 1 !== t.type
                      ? t._e()
                      : [
                        i(
                          'el-table',
                          {
                            staticStyle: { width: '100%' },
                            attrs: { data: t.searchRes, stripe: '' },
                            on: { 'row-click': t.getOneSong },
                          },
                          [
                            i('el-table-column', {
                              attrs: { type: 'index', width: '50' },
                            }),
                            i('el-table-column', {
                              attrs: { prop: 'favicon', width: '30' },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: 'default',
                                    fn: function (e) {
                                      return [
                                        i(
                                          'span',
                                          {
                                            on: {
                                              click: function (i) {
                                                return t.likeMusic(e.row)
                                              },
                                            },
                                          },
                                          [
                                            i(
                                              'div',
                                              {
                                                staticStyle: {
                                                  width: '38px',
                                                },
                                              },
                                              [
                                                e.row.isLiked
                                                  ? i('i', {
                                                    staticClass:
                                                          'iconfont icon-aixin1',
                                                    staticStyle: {
                                                      color: 'red',
                                                    },
                                                  })
                                                  : i('i', {
                                                    staticClass:
                                                          'iconfont icon-aixin',
                                                  }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                !1,
                                501320547,
                              ),
                            }),
                            i('el-table-column', {
                              attrs: {
                                prop: 'name',
                                label: '音乐标题',
                                width: '211',
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: 'default',
                                    fn: function (e) {
                                      return [
                                        i(
                                          'span',
                                          {
                                            staticClass: 'nameText',
                                            staticStyle: {
                                              'margin-left': '10px',
                                            },
                                          },
                                          [t._v(t._s(e.row.name))],
                                        ),
                                        1 === e.row.fee
                                          ? i(
                                            'div',
                                            { staticClass: 'vip-tag' },
                                            [t._v('VIP')],
                                          )
                                          : t._e(),
                                        0 !== e.row.mv
                                          ? i(
                                            'div',
                                            { staticClass: 'vip-tag' },
                                            [t._v('MV')],
                                          )
                                          : t._e(),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                !1,
                                3151587853,
                              ),
                            }),
                            i('el-table-column', {
                              attrs: {
                                prop: 'ar[0].name',
                                label: '歌手',
                                width: '80',
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                    t.loading || 10 !== t.type
                      ? t._e()
                      : [
                        i(
                          'ul',
                          { staticClass: 'info-list' },
                          t._l(t.searchRes, function (e) {
                            return i(
                              'li',
                              { key: e.id, staticClass: 'info-item' },
                              [
                                i('img', {
                                  staticClass: 'sub-img mleft-10',
                                  attrs: { src: e.blurPicUrl, alt: '' },
                                }),
                                i(
                                  'div',
                                  {
                                    staticClass: 'sub-title font-14 mleft-10',
                                  },
                                  [t._v(t._s(e.name))],
                                ),
                                i(
                                  'div',
                                  { staticClass: 'sub-item font-12' },
                                  [
                                    i(
                                      'span',
                                      {
                                        staticClass: 'mleft-10',
                                        staticStyle: {
                                          color: 'rgb(103, 103, 103)',
                                        },
                                      },
                                      [t._v(' ' + t._s(e.artist.name) + ' ')],
                                    ),
                                  ],
                                ),
                              ],
                            )
                          }),
                          0,
                        ),
                      ],
                    t.loading || 100 !== t.type
                      ? t._e()
                      : [
                        i(
                          'ul',
                          { staticClass: 'info-list' },
                          t._l(t.searchRes, function (e) {
                            return i(
                              'li',
                              {
                                key: e.id,
                                staticClass: 'info-item',
                                on: {
                                  click: function (i) {
                                    return t.goArtistInfo(e.id)
                                  },
                                },
                              },
                              [
                                i('img', {
                                  staticClass: 'sub-img mleft-10',
                                  attrs: { src: e.picUrl, alt: '' },
                                }),
                                i(
                                  'div',
                                  {
                                    staticClass: 'sub-title font-14 mleft-10',
                                  },
                                  [t._v(t._s(e.name))],
                                ),
                              ],
                            )
                          }),
                          0,
                        ),
                      ],
                    t.loading || 1e3 !== t.type
                      ? t._e()
                      : [
                        i(
                          'ul',
                          { staticClass: 'info-list' },
                          t._l(t.searchRes, function (e) {
                            return i(
                              'li',
                              {
                                key: e.id,
                                staticClass: 'info-item',
                                on: {
                                  click: function (i) {
                                    return t.goPlayListDetail(e.id)
                                  },
                                },
                              },
                              [
                                i('img', {
                                  staticClass: 'sub-img mleft-10',
                                  attrs: { src: e.coverImgUrl, alt: '' },
                                }),
                                i(
                                  'div',
                                  {
                                    staticClass: 'sub-title font-14 mleft-10',
                                  },
                                  [t._v(t._s(e.name))],
                                ),
                                i(
                                  'div',
                                  { staticClass: 'sub-item font-12' },
                                  [
                                    i(
                                      'span',
                                      {
                                        staticClass: 'mleft-10',
                                        staticStyle: {
                                          color: 'rgb(103, 103, 103)',
                                        },
                                      },
                                      [
                                        t._v(
                                          ' ' +
                                              t._s(e.creator.nickname) +
                                              ' ',
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            )
                          }),
                          0,
                        ),
                      ],
                    t.loading || 1002 !== t.type
                      ? t._e()
                      : [
                        i(
                          'ul',
                          { staticClass: 'info-list' },
                          t._l(t.searchRes, function (e) {
                            return i(
                              'li',
                              { key: e.id, staticClass: 'info-item' },
                              [
                                i('img', {
                                  staticClass: 'sub-img mleft-10',
                                  attrs: { src: e.avatarUrl, alt: '' },
                                }),
                                i(
                                  'div',
                                  {
                                    staticClass: 'sub-title font-14 mleft-10',
                                  },
                                  [t._v(' ' + t._s(e.nickname) + ' ')],
                                ),
                              ],
                            )
                          }),
                          0,
                        ),
                      ],
                    t.loading || 1004 !== t.type
                      ? t._e()
                      : [
                        i('div', { staticClass: 'vdDetail' }, [
                          i(
                            'ul',
                            t._l(t.searchRes, function (e, n) {
                              return i(
                                'li',
                                {
                                  key: n,
                                  on: {
                                    click: function (i) {
                                      return t.goMvDetail(e.id)
                                    },
                                  },
                                },
                                [
                                  i('div', { staticClass: 'vd' }, [
                                    i('img', {
                                      attrs: { src: e.cover, alt: '' },
                                    }),
                                    i('p', [t._v(t._s(e.name))]),
                                    i('span', [
                                      t._v(t._s('by' + e.artists[0].name)),
                                    ]),
                                  ]),
                                ],
                              )
                            }),
                            0,
                          ),
                        ]),
                      ],
                  ],
                  2,
                ),
              ],
              1,
            ),
          ])
        },
        s = [],
        a = i('f9ea'),
        r = (i('e186'), i('1baf'), i('e456'), i('af46'), i('b80b')),
        c = i('2a5e'),
        o = {
          name: 'Search',
          props: ['keyword'],
          data: function () {
            return {
              searchRes: [],
              Count: 0,
              types: [
                { name: '单曲', type: 1 },
                { name: '专辑', type: 10 },
                { name: '歌手', type: 100 },
                { name: '歌单', type: 1e3 },
                { name: '用户', type: 1002 },
                { name: 'MV', type: 1004 },
              ],
              active: 0,
              loading: !0,
              type: 1,
              typename: '单曲',
              isListenId: 0,
              songMsg: {},
              likeIdList: [],
            }
          },
          created: function () {
            this.init()
          },
          computed: {
            uid: function () {
              return this.$store.state.login.profile.userId
            },
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
              }
            },
            init: function () {
              var t = arguments,
                e = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function i() {
                  var n, s, a, c, o
                  return regeneratorRuntime.wrap(function (i) {
                    while (1)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (n =
                              t.length > 0 && void 0 !== t[0]
                                ? t[0]
                                : e.keyword),
                            (s = t.length > 1 && void 0 !== t[1] ? t[1] : 1),
                            (a = t.length > 2 && void 0 !== t[2] ? t[2] : 0),
                            (e.type = s),
                            (i.next = 6),
                            Object(r['b'])(n, s, a)
                          )
                        case 6:
                          return (
                            (c = i.sent),
                            (o = c.data.result),
                            (i.next = 10),
                            e.getLikeIdList(e.uid)
                          )
                        case 10:
                          1 === s
                            ? ((e.type = s),
                            (e.Count = o.songCount),
                            o.songs.forEach(function (t) {
                              e.$set(t, 'isLiked', e.isLiked(t.id)),
                              e.searchRes.push(t)
                            }))
                            : 10 === s
                              ? ((e.searchRes = o.albums),
                              (e.Count = o.albumCount))
                              : 100 === s
                                ? ((e.searchRes = o.artists),
                                (e.Count = o.artistCount))
                                : 1e3 === s
                                  ? ((e.searchRes = o.playlists),
                                  (e.Count = o.playlistCount))
                                  : 1002 === s
                                    ? ((e.searchRes = o.userprofiles),
                                    (e.Count = o.userprofileCount))
                                    : 1004 === s &&
                              ((e.searchRes = o.mvs), (e.Count = o.mvCount)),
                          (e.loading = !1)
                        case 12:
                        case 'end':
                          return i.stop()
                      }
                  }, i)
                }),
              )()
            },
            goMvDetail: function (t) {
              this.$router.push('/videodetail/mv/' + t)
            },
            search: function (t, e, i) {
              ;(this.loading = !0),
              (this.active = t),
              (this.typename = e),
              this.init(this.keyword, i)
            },
            goPlayListDetail: function (t) {
              this.$router.push('/playlistdetail/'.concat(t))
            },
            goArtistInfo: function (t) {
              this.$router.push('/artistdetail/'.concat(t))
            },
            getLikeIdList: function (t) {
              var e = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function i() {
                  var n
                  return regeneratorRuntime.wrap(function (i) {
                    while (1)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (i.next = 2), Object(c['c'])(t)
                        case 2:
                          ;(n = i.sent), (e.likeIdList = n.data.ids)
                        case 4:
                        case 'end':
                          return i.stop()
                      }
                  }, i)
                }),
              )()
            },
            isLiked: function (t) {
              return -1 !== this.likeIdList.indexOf(t)
            },
            likeMusic: function (t) {
              var e = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function i() {
                  return regeneratorRuntime.wrap(function (i) {
                    while (1)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (t.isLiked = !t.isLiked),
                            (i.next = 3),
                            Object(c['i'])(t.id, t.isLiked)
                          )
                        case 3:
                          e.init(e.keyword, e.type)
                        case 4:
                        case 'end':
                          return i.stop()
                      }
                  }, i)
                }),
              )()
            },
          },
          watch: {
            $route: function (t, e) {
              this.init(this.keyword, this.type)
            },
          },
        },
        l = o,
        u = (i('64f9'), i('cba8')),
        d = Object(u['a'])(l, n, s, !1, null, null, null)
      e['default'] = d.exports
    },
    c27f: function (t, e, i) {},
  },
])
//# sourceMappingURL=chunk-15873230.6b2fa03e.js.map
