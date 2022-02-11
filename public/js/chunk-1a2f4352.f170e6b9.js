;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-1a2f4352'],
  {
    1130: function (t, i, e) {
      'use strict'
      e.r(i)
      var n = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i
          return e(
            'div',
            { staticClass: 'view' },
            [
              e(
                'el-skeleton',
                { attrs: { rows: 6, animated: '', loading: t.loading } },
                [
                  t.loading
                    ? t._e()
                    : [
                      e('div', { staticClass: 'albumdetail' }, [
                        e('div', { staticClass: 'detail-desc' }, [
                          e('div', { staticClass: 'detail-img-wrapper' }, [
                            e('img', {
                              staticClass: 'img img-radius-8 img-border',
                              attrs: { src: t.albList.picUrl },
                            }),
                          ]),
                          e('div', { staticClass: 'detail-desc-info' }, [
                            e('div', { staticClass: 'info-title' }, [
                              e('div', { staticClass: 'tag' }, [
                                t._v('专辑'),
                              ]),
                              e('span', { staticClass: 'titlename' }, [
                                t._v(t._s(t.albList.name)),
                              ]),
                            ]),
                            e('ul', { staticClass: 'info-btn' }, [
                              e(
                                'button',
                                {
                                  staticClass: 'btn btn-red',
                                  on: { click: t.playListSongs },
                                },
                                [
                                  e('i', {
                                    staticClass: 'el-icon-caret-right',
                                  }),
                                ],
                              ),
                              e('button', { staticClass: 'btn btn-white' }, [
                                e('i', {
                                  staticClass: 'el-icon-folder-checked',
                                }),
                              ]),
                              e('button', { staticClass: 'btn btn-white' }, [
                                e('i', { staticClass: 'el-icon-share' }),
                              ]),
                            ]),
                            e('div', { staticClass: 'detail-tag' }, [
                              e('span', [t._v('歌手 : ')]),
                              e(
                                'span',
                                {
                                  staticStyle: {
                                    margin: '10px',
                                    'font-size': '14px',
                                    color: '#3771dd',
                                  },
                                },
                                [t._v(t._s(t.albList.artist.name))],
                              ),
                            ]),
                            e('div', { staticClass: 'num-info' }, [
                              e('span', [t._v('时间 :')]),
                              e('span', [
                                t._v(
                                  t._s(
                                    t._f('datefilter')(t.albList.publishTime),
                                  ) + ' ',
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        e(
                          'div',
                          { staticClass: 'detail-head' },
                          [
                            e(
                              'van-tabs',
                              {
                                model: {
                                  value: t.active,
                                  callback: function (i) {
                                    t.active = i
                                  },
                                  expression: 'active',
                                },
                              },
                              [
                                e(
                                  'van-tab',
                                  { attrs: { title: '歌曲列表' } },
                                  [
                                    e('AlbumList', {
                                      attrs: { list: t.songs },
                                    }),
                                  ],
                                  1,
                                ),
                                e(
                                  'van-tab',
                                  { attrs: { title: '评论' } },
                                  [
                                    e('AlbumComment', {
                                      attrs: { list: t.albList },
                                    }),
                                  ],
                                  1,
                                ),
                                e(
                                  'van-tab',
                                  { attrs: { title: '专辑详情' } },
                                  [
                                    e(
                                      'div',
                                      {
                                        staticStyle: { 'font-weight': '700' },
                                      },
                                      [t._v('专辑介绍')],
                                    ),
                                    e('div', { staticClass: 'my-pre' }, [
                                      e('p', {
                                        domProps: {
                                          innerHTML: t._s(
                                            t.albList.description,
                                          ),
                                        },
                                      }),
                                    ]),
                                  ],
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ]),
                    ],
                ],
                2,
              ),
            ],
            1,
          )
        },
        s = [],
        a = e('f9ea'),
        o = (e('e186'), e('e456'), e('af46'), e('1baf'), e('1313'), e('b775')),
        c = function (t) {
          return Object(o['a'])({ method: 'get', url: '/album?id='.concat(t) })
        },
        r = function (t) {
          var i = t.id,
            e = t.limit,
            n = void 0 === e ? 20 : e,
            s = t.page,
            a = void 0 === s ? 0 : s,
            c = a * n
          return Object(o['a'])({
            method: 'get',
            url: '/comment/album?id='
              .concat(i, '&limit=')
              .concat(n, '&offset=')
              .concat(c),
          })
        },
        l = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i
          return e(
            'el-skeleton',
            { attrs: { rows: 6, animated: '', loading: t.loading } },
            [
              e(
                'el-table',
                {
                  staticStyle: { width: '100%' },
                  attrs: { data: t.list, stripe: '' },
                  on: { 'row-click': t.getOneSong },
                },
                [
                  e('el-table-column', {
                    staticStyle: { color: 'rgb(195, 195, 219)' },
                    attrs: { type: 'index', label: '', width: '50' },
                  }),
                  e('el-table-column', {
                    attrs: { prop: 'tag', label: '', width: '30' },
                    scopedSlots: t._u([
                      {
                        key: 'default',
                        fn: function (i) {
                          return [
                            e(
                              'span',
                              {
                                on: {
                                  click: function (e) {
                                    return t.likeMusic(i.row.id)
                                  },
                                },
                              },
                              [
                                e('div', [
                                  t.isLiked(i.row.id)
                                    ? e('i', {
                                      staticClass: 'iconfont icon-aixin1',
                                      staticStyle: { color: 'red' },
                                    })
                                    : e('i', {
                                      staticClass: 'iconfont icon-aixin',
                                    }),
                                ]),
                              ],
                            ),
                          ]
                        },
                      },
                    ]),
                  }),
                  e('el-table-column', {
                    attrs: {
                      prop: 'name',
                      label: '音乐标题',
                      'show-overflow-tooltip': '',
                    },
                    scopedSlots: t._u([
                      {
                        key: 'default',
                        fn: function (i) {
                          return [
                            e('span', [t._v(t._s(i.row.name))]),
                            0 !== i.row.alia.length
                              ? e(
                                'span',
                                { staticStyle: { color: '#969697' } },
                                [t._v('(' + t._s(i.row.alia[0]) + ')')],
                              )
                              : t._e(),
                            0 !== i.row.mv
                              ? e(
                                'span',
                                {
                                  staticClass: 'vip-tag',
                                  staticStyle: {
                                    color: 'rgb(236, 73, 73)',
                                    'border-color': 'rgb(236, 73, 73)',
                                  },
                                },
                                [
                                  t._v('MV'),
                                  e('i', {
                                    staticClass: 'el-icon-caret-right',
                                  }),
                                ],
                              )
                              : t._e(),
                            1 == i.row.fee
                              ? e('span', { staticClass: 'vip-tag' }, [
                                t._v('VIP'),
                              ])
                              : t._e(),
                          ]
                        },
                      },
                    ]),
                  }),
                  e('el-table-column', {
                    attrs: {
                      prop: 'ar[0].name',
                      label: '歌手',
                      width: '80',
                      'show-overflow-tooltip': '',
                    },
                  }),
                ],
                1,
              ),
            ],
            1,
          )
        },
        u = [],
        d = e('2a5e'),
        m = {
          props: ['list'],
          data: function () {
            return { likeIdList: [], loading: !0 }
          },
          computed: {
            uid: function () {
              return this.$store.state.login.profile.userId
            },
          },
          created: function () {
            this.getLikeIdList(this.uid)
          },
          methods: {
            getOneSong: function (t) {
              if (this.isListenId !== t.id) {
                this.$store.commit('songDetail/songAllMsg', t),
                (this.isListenId = t.id)
                var i = {}
                ;(i.songName = t.name),
                (i.singer = t.ar[0].name),
                (i.id = t.id),
                (i.picUrl = t.al.picUrl),
                (this.songMsg = i),
                this.$store.dispatch('songDetail/getoneMusic', i)
              } else
                this.$store.state.songDetail.isPlay ||
                  this.$store.commit('songDetail/playback')
            },
            getLikeIdList: function (t) {
              var i = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function e() {
                  var n
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(d['c'])(t)
                        case 2:
                          ;(n = e.sent),
                          (i.likeIdList = n.data.ids),
                          (i.loading = !1)
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )()
            },
            isLiked: function (t) {
              return -1 !== this.likeIdList.indexOf(t)
            },
            likeMusic: function (t) {
              var i = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function e() {
                  var n
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          i.getLikeIdList(i.uid),
                          (n = i.isLiked(t)),
                          Object(d['i'])(t, !n),
                          i.getLikeIdList(i.uid)
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )()
            },
          },
        },
        g = m,
        f = (e('a963'), e('cba8')),
        p = Object(f['a'])(g, l, u, !1, null, null, null),
        b = p.exports,
        v = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i
          return e(
            'div',
            { staticClass: 'comment' },
            [
              e(
                'el-skeleton',
                { attrs: { rows: 6, animated: '', loading: t.loading } },
                [
                  t.loading
                    ? t._e()
                    : [
                      e('div', { staticClass: 'area-wrap' }, [
                        e('textarea', { staticClass: 'text-area' }),
                        e('div', { staticClass: 'word-num' }, [t._v('140')]),
                      ]),
                      e('div', { staticClass: 'btn-wrap' }, [
                        e('div', { staticClass: 'at-btv' }, [
                          e('button', { staticClass: 'no-btn' }, [t._v('@')]),
                          e('button', { staticClass: 'no-btn' }, [t._v('#')]),
                        ]),
                        e('div', { staticClass: 'send-btn' }, [
                          e('button', { staticClass: 'btn btn-white' }, [
                            t._v('评论'),
                          ]),
                        ]),
                      ]),
                      e(
                        'div',
                        { staticClass: 'hot-wrap' },
                        [
                          e('div', { staticClass: 'font-16 font-bold' }, [
                            t._v('最新评论'),
                          ]),
                          t._l(t.comments, function (i, n) {
                            return e(
                              'div',
                              {
                                key: i.commentId,
                                staticClass: 'comment-item',
                              },
                              [
                                e('div', { staticClass: 'comment_main' }, [
                                  e('div', { staticClass: 'img-wrap' }, [
                                    e('img', {
                                      staticClass: 'img',
                                      attrs: {
                                        src: i.user.avatarUrl,
                                        alt: '',
                                      },
                                    }),
                                  ]),
                                  e('div', { staticClass: 'comment-wrap' }, [
                                    e(
                                      'div',
                                      { staticClass: 'comment-content' },
                                      [
                                        e(
                                          'span',
                                          {
                                            staticStyle: {
                                              color: 'rgb(80, 125, 175)',
                                            },
                                          },
                                          [
                                            t._v(
                                              t._s(i.user.nickname) + '：',
                                            ),
                                          ],
                                        ),
                                        e('span', [t._v(t._s(i.content))]),
                                        e(
                                          'div',
                                          { staticClass: 'reply-content' },
                                          [
                                            t.replied[n].length > 0
                                              ? [
                                                e(
                                                  'span',
                                                  {
                                                    staticClass:
                                                          'font-12 pointer',
                                                    staticStyle: {
                                                      'margin-left': '5px',
                                                      color:
                                                            'rgb(80, 125, 175)',
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      ' @' +
                                                            t._s(
                                                              t.replied[n][0]
                                                                .user.nickname,
                                                            ) +
                                                            '： ',
                                                    ),
                                                  ],
                                                ),
                                                e(
                                                  'span',
                                                  {
                                                    staticClass: 'font-12',
                                                  },
                                                  [
                                                    t._v(
                                                      ' ' +
                                                            t._s(
                                                              t.replied[n][0]
                                                                .content,
                                                            ) +
                                                            ' ',
                                                    ),
                                                  ],
                                                ),
                                              ]
                                              : t._e(),
                                          ],
                                          2,
                                        ),
                                      ],
                                    ),
                                    e(
                                      'div',
                                      { staticClass: 'comment-info' },
                                      [
                                        e(
                                          'div',
                                          {
                                            staticClass: 'time',
                                            staticStyle: {
                                              color: 'rgb(159, 159, 159)',
                                              'font-size': '12px',
                                            },
                                          },
                                          [t._v(' ' + t._s(i.timeStr) + ' ')],
                                        ),
                                        e(
                                          'div',
                                          { staticClass: 'comment-btn' },
                                          [
                                            e(
                                              'button',
                                              {
                                                staticClass: 'no-btn',
                                                staticStyle: {
                                                  'font-size': '12px',
                                                },
                                              },
                                              [
                                                e('i', {
                                                  staticClass:
                                                      'iconfont icon-dianzan',
                                                }),
                                                t._v(
                                                  ' ' +
                                                      t._s(i.likedCount) +
                                                      ' ',
                                                ),
                                                e('span'),
                                              ],
                                            ),
                                            e('div', {
                                              staticClass: 'div-column',
                                            }),
                                            e(
                                              'button',
                                              { staticClass: 'no-btn' },
                                              [
                                                e('i', {
                                                  staticClass:
                                                      'iconfont icon-fenxiang',
                                                }),
                                              ],
                                            ),
                                            e('div', {
                                              staticClass: 'div-column',
                                            }),
                                            e(
                                              'button',
                                              { staticClass: 'no-btn' },
                                              [
                                                e('i', {
                                                  staticClass:
                                                      'iconfont icon-jianyi',
                                                  staticStyle: {
                                                    'font-size': '19px',
                                                  },
                                                }),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ]),
                                ]),
                                e('div', { staticClass: 'div-line' }),
                              ],
                            )
                          }),
                          e(
                            'div',
                            {
                              staticClass: 'flex_center',
                              staticStyle: { 'margin-top': '10px' },
                            },
                            [
                              e('el-pagination', {
                                attrs: {
                                  background: '',
                                  layout: 'prev, pager, next',
                                  comments: t.comments,
                                  'page-size': 20,
                                  'current-page': t.currentPage,
                                  total: t.commentCount,
                                },
                                on: { 'current-change': t.currentChange },
                              }),
                            ],
                            1,
                          ),
                        ],
                        2,
                      ),
                    ],
                ],
                2,
              ),
            ],
            1,
          )
        },
        h = [],
        C = {
          props: ['list'],
          data: function () {
            return {
              comments: [],
              loading: !0,
              replied: [],
              currentPage: 1,
              offset: 0,
              commentCount: 0,
            }
          },
          created: function () {
            this.getAlbumComment()
          },
          methods: {
            getAlbumComment: function () {
              var t = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function i() {
                  var e
                  return regeneratorRuntime.wrap(function (i) {
                    while (1)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (t.loading = !0), (i.next = 3), r({ id: t.list.id })
                          )
                        case 3:
                          ;(e = i.sent),
                          (t.comments = e.data.comments),
                          (t.commentCount = e.data.total),
                          e.data.comments.forEach(function (i) {
                            t.replied.push(i.beReplied)
                          }),
                          (t.loading = !1)
                        case 8:
                        case 'end':
                          return i.stop()
                      }
                  }, i)
                }),
              )()
            },
            currentChange: function (t) {
              var i = this
              ;(this.currentPage = t),
              r({ id: this.list.id, page: this.currentPage - 1 }).then(
                function (t) {
                  i.comments = t.data.comments
                },
              )
            },
          },
        },
        _ = C,
        w = (e('3f40'), Object(f['a'])(_, v, h, !1, null, null, null)),
        k = w.exports,
        L = e('c32d'),
        y = e.n(L),
        x = {
          name: 'AlbumListDetail',
          props: { id: { type: String, required: !0 } },
          components: { AlbumList: b, AlbumComment: k },
          data: function () {
            return {
              active: 0,
              loading: !0,
              albList: {},
              songs: [],
              isListenId: 0,
              songMsg: {},
              listSongMsg: [],
            }
          },
          created: function () {
            this.getAlbumDetail(this.id)
          },
          methods: {
            playListSongs: function () {
              this.$store.commit('songDetail/setSongList', this.listSongMsg),
              this.$store.dispatch(
                'songDetail/getoneMusic',
                this.listSongMsg[0],
              )
            },
            getAlbumDetail: function (t) {
              var i = this
              return Object(a['a'])(
                regeneratorRuntime.mark(function e() {
                  var n
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), c(t)
                        case 2:
                          ;(n = e.sent),
                          (i.albList = n.data.album),
                          (i.songs = n.data.songs),
                          (i.loading = !1),
                          i.$store.commit(
                            'songDetail/setplayListTracks',
                            i.songs,
                          ),
                          i.songs.forEach(function (t) {
                            var e = {}
                              ;(e.songName = t.name),
                            (e.singer = t.ar[0].name),
                            (e.id = t.id),
                            (e.picUrl = t.al.picUrl),
                            i.listSongMsg.push(e)
                          })
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )()
            },
          },
          filters: {
            datefilter: function (t) {
              return y()(t).format('YYYY-MM-DD')
            },
          },
        },
        S = x,
        O = (e('487f'), Object(f['a'])(S, n, s, !1, null, null, null))
      i['default'] = O.exports
    },
    1895: function (t, i, e) {},
    2081: function (t, i, e) {},
    '2a5e': function (t, i, e) {
      'use strict'
      e.d(i, 'a', function () {
        return s
      }),
      e.d(i, 'e', function () {
        return a
      }),
      e.d(i, 'g', function () {
        return o
      }),
      e.d(i, 'f', function () {
        return c
      }),
      e.d(i, 'c', function () {
        return r
      }),
      e.d(i, 'i', function () {
        return l
      }),
      e.d(i, 'b', function () {
        return u
      }),
      e.d(i, 'd', function () {
        return d
      }),
      e.d(i, 'h', function () {
        return m
      })
      e('1313')
      var n = e('b775'),
        s = function () {
          return Object(n['a'])('/banner')
        },
        a = function (t) {
          return Object(n['a'])({
            method: 'get',
            url: '/personalized?limit='.concat(t),
          })
        },
        o = function () {
          return Object(n['a'])('/recommend/resource')
        },
        c = function (t) {
          return Object(n['a'])({
            method: 'get',
            url: '/playlist/detail?id='.concat(t),
          })
        },
        r = function (t) {
          return Object(n['a'])({
            method: 'get',
            url: '/likelist?id='.concat(t),
          })
        },
        l = function (t, i) {
          return Object(n['a'])({
            method: 'get',
            url: '/like?id='.concat(t, '&like=').concat(i),
          })
        },
        u = function (t, i, e) {
          return Object(n['a'])({
            method: 'get',
            url: '/comment/hot?id='
              .concat(t, '&type=')
              .concat(i, '&limit=')
              .concat(e),
          })
        },
        d = function (t) {
          var i = t.id,
            e = t.limit,
            s = void 0 === e ? 20 : e,
            a = t.page,
            o = void 0 === a ? 0 : a,
            c = t.before,
            r = void 0 === c ? 0 : c,
            l = o * s
          return Object(n['a'])({
            method: 'get',
            url: '/comment/playlist?id='
              .concat(i, '&limit=')
              .concat(s, '&offset=')
              .concat(l, '&before=')
              .concat(r),
          })
        },
        m = function (t) {
          var i = t.id,
            e = t.limit,
            s = void 0 === e ? 30 : e,
            a = t.page,
            o = void 0 === a ? 0 : a,
            c = o * s
          return Object(n['a'])({
            method: 'get',
            url: '/playlist/subscribers?id='
              .concat(i, '&limit=')
              .concat(s, '&offset=')
              .concat(c),
          })
        }
    },
    '3f40': function (t, i, e) {
      'use strict'
      e('1895')
    },
    '487f': function (t, i, e) {
      'use strict'
      e('eb24')
    },
    a963: function (t, i, e) {
      'use strict'
      e('2081')
    },
    eb24: function (t, i, e) {},
  },
])
//# sourceMappingURL=chunk-1a2f4352.f170e6b9.js.map
