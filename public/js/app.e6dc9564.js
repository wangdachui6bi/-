;(function (t) {
  function e(e) {
    for (
      var i, a, c = e[0], r = e[1], u = e[2], l = 0, d = [];
      l < c.length;
      l++
    )
      (a = c[l]),
      Object.prototype.hasOwnProperty.call(s, a) && s[a] && d.push(s[a][0]),
      (s[a] = 0)
    for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
    f && f(e)
    while (d.length) d.shift()()
    return o.push.apply(o, u || []), n()
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], i = !0, a = 1; a < n.length; a++) {
        var c = n[a]
        0 !== s[c] && (i = !1)
      }
      i && (o.splice(e--, 1), (t = r((r.s = n[0]))))
    }
    return t
  }
  var i = {},
    a = { app: 0 },
    s = { app: 0 },
    o = []
  function c(t) {
    return (
      r.p +
      'js/' +
      ({}[t] || t) +
      '.' +
      {
        'chunk-11b54fca': '4077e535',
        'chunk-15873230': '6b2fa03e',
        'chunk-1a2f4352': 'f170e6b9',
        'chunk-23ec1ab2': 'd0c48a08',
        'chunk-25d56716': '8d6a74ea',
        'chunk-2d4c3c99': '2cc4294e',
        'chunk-2db4d2c7': 'd89760d9',
        'chunk-2f8760f8': 'd86555cf',
        'chunk-3000f2f3': '01ca9bda',
        'chunk-4b039ecb': '199e9a22',
        'chunk-5f8776b6': '6cc214ef',
        'chunk-6a40f2d5': '021cb09f',
        'chunk-6daadaa2': '87538314',
        'chunk-704ce592': '915586d7',
        'chunk-7a4d5936': '021b92b2',
        'chunk-b069beca': 'd5ad2368',
        'chunk-e550198c': 'b24b90b1',
      }[t] +
      '.js'
    )
  }
  function r(e) {
    if (i[e]) return i[e].exports
    var n = (i[e] = { i: e, l: !1, exports: {} })
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports
  }
  ;(r.e = function (t) {
    var e = [],
      n = {
        'chunk-11b54fca': 1,
        'chunk-15873230': 1,
        'chunk-1a2f4352': 1,
        'chunk-23ec1ab2': 1,
        'chunk-25d56716': 1,
        'chunk-2d4c3c99': 1,
        'chunk-2db4d2c7': 1,
        'chunk-2f8760f8': 1,
        'chunk-3000f2f3': 1,
        'chunk-4b039ecb': 1,
        'chunk-5f8776b6': 1,
        'chunk-6a40f2d5': 1,
        'chunk-6daadaa2': 1,
        'chunk-704ce592': 1,
        'chunk-7a4d5936': 1,
        'chunk-b069beca': 1,
        'chunk-e550198c': 1,
      }
    a[t]
      ? e.push(a[t])
      : 0 !== a[t] &&
        n[t] &&
        e.push(
          (a[t] = new Promise(function (e, n) {
            for (
              var i =
                  'css/' +
                  ({}[t] || t) +
                  '.' +
                  {
                    'chunk-11b54fca': '963d2184',
                    'chunk-15873230': '4409232f',
                    'chunk-1a2f4352': 'd23b8193',
                    'chunk-23ec1ab2': 'e43d314d',
                    'chunk-25d56716': '129122ad',
                    'chunk-2d4c3c99': '01a395ed',
                    'chunk-2db4d2c7': '64612879',
                    'chunk-2f8760f8': 'e1266b16',
                    'chunk-3000f2f3': 'b36ef722',
                    'chunk-4b039ecb': 'e9927e06',
                    'chunk-5f8776b6': 'da8b60bc',
                    'chunk-6a40f2d5': '5bf50764',
                    'chunk-6daadaa2': '912bbf01',
                    'chunk-704ce592': '3507c2c2',
                    'chunk-7a4d5936': 'd5dbea5f',
                    'chunk-b069beca': '495b9fa6',
                    'chunk-e550198c': 'f07a6d4d',
                  }[t] +
                  '.css',
                s = r.p + i,
                o = document.getElementsByTagName('link'),
                c = 0;
              c < o.length;
              c++
            ) {
              var u = o[c],
                l = u.getAttribute('data-href') || u.getAttribute('href')
              if ('stylesheet' === u.rel && (l === i || l === s)) return e()
            }
            var d = document.getElementsByTagName('style')
            for (c = 0; c < d.length; c++) {
              ;(u = d[c]), (l = u.getAttribute('data-href'))
              if (l === i || l === s) return e()
            }
            var f = document.createElement('link')
            ;(f.rel = 'stylesheet'),
            (f.type = 'text/css'),
            (f.onload = e),
            (f.onerror = function (e) {
              var i = (e && e.target && e.target.src) || s,
                o = new Error(
                  'Loading CSS chunk ' + t + ' failed.\n(' + i + ')',
                )
                ;(o.code = 'CSS_CHUNK_LOAD_FAILED'),
              (o.request = i),
              delete a[t],
              f.parentNode.removeChild(f),
              n(o)
            }),
            (f.href = s)
            var h = document.getElementsByTagName('head')[0]
            h.appendChild(f)
          }).then(function () {
            a[t] = 0
          })),
        )
    var i = s[t]
    if (0 !== i)
      if (i) e.push(i[2])
      else {
        var o = new Promise(function (e, n) {
          i = s[t] = [e, n]
        })
        e.push((i[2] = o))
        var u,
          l = document.createElement('script')
        ;(l.charset = 'utf-8'),
        (l.timeout = 120),
        r.nc && l.setAttribute('nonce', r.nc),
        (l.src = c(t))
        var d = new Error()
        u = function (e) {
          ;(l.onerror = l.onload = null), clearTimeout(f)
          var n = s[t]
          if (0 !== n) {
            if (n) {
              var i = e && ('load' === e.type ? 'missing' : e.type),
                a = e && e.target && e.target.src
              ;(d.message =
                'Loading chunk ' + t + ' failed.\n(' + i + ': ' + a + ')'),
              (d.name = 'ChunkLoadError'),
              (d.type = i),
              (d.request = a),
              n[1](d)
            }
            s[t] = void 0
          }
        }
        var f = setTimeout(function () {
          u({ type: 'timeout', target: l })
        }, 12e4)
        ;(l.onerror = l.onload = u), document.head.appendChild(l)
      }
    return Promise.all(e)
  }),
  (r.m = t),
  (r.c = i),
  (r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
  }),
  (r.r = function (t) {
    'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(t, '__esModule', { value: !0 })
  }),
  (r.t = function (t, e) {
    if ((1 & e && (t = r(t)), 8 & e)) return t
    if (4 & e && 'object' === typeof t && t && t.__esModule) return t
    var n = Object.create(null)
    if (
      (r.r(n),
      Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
      2 & e && 'string' != typeof t)
    )
      for (var i in t)
        r.d(
          n,
          i,
          function (e) {
            return t[e]
          }.bind(null, i),
        )
    return n
  }),
  (r.n = function (t) {
    var e =
        t && t.__esModule
          ? function () {
            return t['default']
          }
          : function () {
            return t
          }
    return r.d(e, 'a', e), e
  }),
  (r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }),
  (r.p = '/'),
  (r.oe = function (t) {
    throw (console.error(t), t)
  })
  var u = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = u.push.bind(u)
  ;(u.push = e), (u = u.slice())
  for (var d = 0; d < u.length; d++) e(u[d])
  var f = l
  o.push([0, 'chunk-vendors']), n()
})({
  0: function (t, e, n) {
    t.exports = n('4cae')
  },
  '007d': function (t, e, n) {
    'use strict'
    n.d(e, 'b', function () {
      return a
    }),
    n.d(e, 'a', function () {
      return s
    })
    var i = n('b775'),
      a = function (t) {
        return Object(i['a'])({ method: 'get', url: '/song/url?id=' + t })
      },
      s = function (t) {
        return Object(i['a'])({ method: 'get', url: '/album?id=' + t })
      }
  },
  '1a09': function (t, e, n) {
    'use strict'
    n('d0c0')
  },
  '1ec0': function (t, e, n) {
    'use strict'
    n.r(e)
    var i = n('f9ea'),
      a = (n('e186'), n('1233'), n('e456'), n('af46'), n('f203'), n('9252')),
      s = { categories: [], sub: [] },
      o = {
        setcategories: function (t, e) {
          t.categories = e
        },
        setsub: function (t, e) {
          t.sub = e
        },
      },
      c = {
        getAlcat: function (t) {
          return Object(i['a'])(
            regeneratorRuntime.mark(function e() {
              var n, i
              return regeneratorRuntime.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (n = t.commit), (e.next = 3), Object(a['a'])()
                    case 3:
                      ;(i = e.sent),
                      n('setcategories', i.data.categories),
                      n('setsub', i.data.sub)
                    case 6:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )()
        },
      },
      r = {
        catesub: function (t) {
          var e = []
          for (var n in t.categories) {
            var i = []
            t.sub.forEach(function (t) {
              t.category === Number(n) && i.push(t)
            }),
            e.push(i)
          }
          return e
        },
      }
    e['default'] = {
      namespaced: !0,
      state: s,
      mutations: o,
      actions: c,
      getters: r,
    }
  },
  2219: function (t, e, n) {
    'use strict'
    n.r(e)
    var i = { keyword: '' },
      a = {
        setKeyword: function (t, e) {
          t.keyword = e
        },
      },
      s = {},
      o = {}
    e['default'] = {
      namespaced: !0,
      state: i,
      mutations: a,
      actions: s,
      getters: o,
    }
  },
  3089: function (t, e) {
    t.exports = vant
  },
  '33c7': function (t, e, n) {
    'use strict'
    n.r(e)
    var i = n('f9ea'),
      a = (n('e186'), n('a818'), n('e456'), n('af46'), n('007d')),
      s = n('3089'),
      o = n('8bbf'),
      c = n.n(o),
      r = {
        singleSongMsg: {},
        isHavesong: !1,
        songListAll: [],
        isPlay: !1,
        songAllMsg: [],
        playListTracks: [],
        islisten: !1,
      },
      u = {
        setMp3Url: function (t, e) {
          ;(t.singleSongMsg = e), (t.isHavesong = !0), (t.isPlay = !0)
          var n = t.songListAll.findIndex(function (e) {
            return e.id === t.singleSongMsg.id
          })
          ;-1 === n && t.songListAll.push(t.singleSongMsg)
        },
        setSongList: function (t, e) {
          ;(t.songListAll = e),
          (t.singleSongMsg = e[0]),
          (t.isHavesong = !0),
          (t.isPlay = !0),
          (t.islisten = !0)
        },
        songAllMsg: function (t, e) {
          t.songAllMsg = e
        },
        setplayListTracks: function (t, e) {
          t.playListTracks = e
        },
        playback: function (t) {
          t.isPlay = !0
        },
        controlPlay: function (t, e) {
          t.isPlay = !t.isPlay
        },
        nextsong: function (t) {
          if (1 === t.songListAll.length)
            return (
              (t.isPlay = !1), Object(s['Toast'])('您的歌单没有其他歌曲了'), 0
            )
          if (0 === t.songListAll.length)
            return Object(s['Toast'])('请添加歌曲到歌单'), 0
          t.isPlay = !0
          var e = t.songListAll.findIndex(function (e) {
            return e.id === t.singleSongMsg.id
          })
          t.songListAll.forEach(function (n, i) {
            return e === t.songListAll.length - 1
              ? ((t.singleSongMsg = t.songListAll[0]),
              t.singleSongMsg.songUrl || f(t.singleSongMsg),
              0)
              : (e + 1 >= t.songListAll.length
                ? (t.singleSongMsg = t.songListAll[0])
                : (t.singleSongMsg = t.songListAll[e + 1]),
              t.singleSongMsg.songUrl || f(t.singleSongMsg),
              0)
          })
        },
        presong: function (t) {
          if (1 === t.songListAll.length)
            return Object(s['Toast'])('您的歌单没有其他歌曲了'), 0
          if (0 === t.songListAll.length)
            return Object(s['Toast'])('请添加歌曲到歌单'), 0
          t.isPlay = !0
          var e = t.songListAll.findIndex(function (e) {
            return e.id === t.singleSongMsg.id
          })
          t.songListAll.forEach(function (n, i) {
            return 0 === e
              ? ((t.singleSongMsg = t.songListAll[t.songListAll.length - 1]),
              t.singleSongMsg.songUrl || f(t.singleSongMsg),
              0)
              : n.id === t.singleSongMsg.id
                ? ((t.singleSongMsg = t.songListAll[i - 1]),
                t.singleSongMsg.songUrl || f(t.singleSongMsg),
                0)
                : void 0
          })
        },
      },
      l = {
        getoneMusic: function (t, e) {
          return Object(i['a'])(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      Object(a['b'])(e.id).then(function (n) {
                        c.a.set(e, 'songUrl', n.data.data[0].url),
                        t.commit('setMp3Url', e)
                      })
                    case 1:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            }),
          )()
        },
      },
      d = {}
    function f(t) {
      Object(a['b'])(t.id).then(function (e) {
        c.a.set(t, 'songUrl', e.data.data[0].url)
      })
    }
    e['default'] = {
      namespaced: !0,
      state: r,
      mutations: u,
      actions: l,
      getters: d,
    }
  },
  '34ce': function (t, e, n) {},
  '4cae': function (t, e, n) {
    'use strict'
    n.r(e)
    n('7c32'), n('3d07'), n('44fb'), n('1599')
    var i = n('8bbf'),
      a = n.n(i),
      s = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', { attrs: { id: 'app' } }, [n('Layout')], 1)
      },
      o = [],
      c = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          { staticClass: 'layout' },
          [
            t.$route.meta.needHead
              ? [n('TopBar'), n('div', { staticClass: 'TopBar-space' })]
              : t._e(),
            n(
              'div',
              { staticClass: 'main' },
              [
                t.TabList.includes(t.$route.path)
                  ? [n('TabBar'), n('div', { staticClass: 'TabBar-space' })]
                  : t._e(),
                n('router-view'),
              ],
              2,
            ),
            t.$route.meta.needHead
              ? [n('FooBar'), n('div', { staticClass: 'FooBar-space' })]
              : t._e(),
          ],
          2,
        )
      },
      r = [],
      u = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', { staticClass: 'FooBar' }, [
          n('div', { staticClass: 'footer-bar' }, [
            n('div', { staticClass: 'player' }, [
              n('div', { staticClass: 'player-container' }, [
                n('div', { staticClass: 'player-left' }, [
                  n('img', {
                    staticClass: 'img-border',
                    attrs: { src: t.picUrl },
                  }),
                  t.listenStatus
                    ? n('div', { staticClass: 'music-info' }, [
                      n('div', { staticClass: 'font-14 w-150 text-hidden' }, [
                        t._v(' ' + t._s(t.singleSongMsg.songName) + ' '),
                      ]),
                      n('div', { staticClass: 'font-12 w-100 text-hidden' }, [
                        t._v(' ' + t._s(t.singleSongMsg.singer) + ' '),
                      ]),
                    ])
                    : n('div', { staticClass: 'music-info' }, [
                      n('div', { staticClass: 'font-14 w-150 text-hidden' }, [
                        t._v('未知歌名'),
                      ]),
                      n('div', { staticClass: 'font-12 w-100 text-hidden' }, [
                        t._v('未知歌手名'),
                      ]),
                    ]),
                ]),
                n('div', { staticClass: 'player-wrapper' }, [
                  n('div', { staticClass: 'player-bar' }, [
                    n(
                      'div',
                      {
                        staticClass: 'player-bar-btn',
                        on: {
                          click: function (e) {
                            t.premusic(), (t.active = 1)
                          },
                        },
                      },
                      [
                        n('i', {
                          class: [
                            'iconfont',
                            'icon-shangyishou',
                            { active: 1 === t.active },
                          ],
                        }),
                      ],
                    ),
                    n(
                      'div',
                      {
                        staticClass: 'player-bar-btn',
                        on: { click: t.controlPlay },
                      },
                      [
                        t.isPlay
                          ? n('i', {
                            staticClass: 'iconfont icon-tingzhi',
                            staticStyle: { color: 'red' },
                          })
                          : n('i', { staticClass: 'iconfont icon-bofang1' }),
                      ],
                    ),
                    n(
                      'div',
                      {
                        staticClass: 'player-bar-btn',
                        on: {
                          click: function (e) {
                            t.nextmusic(), (t.active = 2)
                          },
                        },
                      },
                      [
                        n('i', {
                          class: [
                            'iconfont',
                            'icon-xiayishou',
                            { active: 2 === t.active },
                          ],
                        }),
                      ],
                    ),
                    t._m(0),
                  ]),
                ]),
                n('audio', {
                  ref: 'audioRef',
                  attrs: { src: t.musicUrl, autoplay: '' },
                  on: { ended: t.nextmusic },
                }),
                n('div', { staticClass: 'btn-other' }),
              ]),
            ]),
          ]),
        ])
      },
      l = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'player-bar-btn' }, [
            n('i', { staticClass: 'iconfont icon-aixin' }),
          ])
        },
      ],
      d =
        (n('a818'),
        n('9d39'),
        n('e456'),
        n('5ad0'),
        {
          name: 'FooBar',
          data: function () {
            return { active: 0, isHistoryHave: !1 }
          },
          methods: {
            nextmusic: function () {
              1 === this.$store.state.songDetail.songListAll.length
                ? (this.$refs.audioRef.play(),
                (this.$refs.audioRef.currentTime = 0))
                : this.$store.commit('songDetail/nextsong')
            },
            controlPlay: function () {
              void 0 !== this.singleSongMsg.id &&
                this.$store.commit('songDetail/controlPlay')
            },
            premusic: function () {
              this.$store.commit('songDetail/presong')
            },
          },
          watch: {
            isPlay: function (t) {
              if ('' === this.musicUrl) return 0
              t ? this.$refs.audioRef.play() : this.$refs.audioRef.pause()
            },
            singleSongMsg: function (t) {
              var e = this.historyplayList.findIndex(function (e) {
                return e.id === t.id
              })
              if (((this.isHistoryHave = -1 !== e), !this.isHistoryHave)) {
                var n = this.$store.state.songDetail.playListTracks.find(
                  function (e) {
                    return e.id === t.id
                  },
                )
                this.historyplayList.push(n)
              }
              localStorage.historyplayList = JSON.stringify(
                this.historyplayList,
              )
            },
          },
          computed: {
            historyplayList: function () {
              return JSON.parse(localStorage.historyplayList || '[]')
            },
            listenStatus: function () {
              return this.$store.state.songDetail.isHavesong
            },
            picUrl: function () {
              return this.singleSongMsg.picUrl
                ? this.singleSongMsg.picUrl
                : 'https://cdn.jsdelivr.net/gh/crazybox521/blogImg/music.jpg'
            },
            singleSongMsg: function () {
              return this.$store.state.songDetail.singleSongMsg
            },
            musicUrl: function () {
              return this.singleSongMsg.songUrl
                ? this.singleSongMsg.songUrl
                : ''
            },
            isPlay: function () {
              return this.$store.state.songDetail.isPlay
            },
            local: function () {
              return this.$store.state.login.accountHistory
            },
            accountId: function () {
              return this.$store.state.login.accountId
            },
          },
        }),
      f = d,
      h = (n('8784'), n('cba8')),
      p = Object(h['a'])(f, u, l, !1, null, '102ba8fa', null),
      g = p.exports,
      m = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n('div', { staticClass: 'TopBar' }, [
          n(
            'div',
            { staticClass: 'header-bar' },
            [
              n(
                'div',
                { staticClass: 'menu-btn', on: { click: t.showPopup } },
                [n('span')],
              ),
              n('div', { staticClass: 'btn-history' }, [
                n(
                  'button',
                  {
                    staticClass: 'btn-circle',
                    on: {
                      click: function (e) {
                        return t.$router.go(-1)
                      },
                    },
                  },
                  [n('van-icon', { attrs: { name: 'arrow-left' } })],
                  1,
                ),
              ]),
              n('SearchInput'),
              n(
                'div',
                { staticClass: 'avatar-wrap' },
                [
                  n('el-avatar', {
                    attrs: { size: 'small', src: t.profile.avatarUrl },
                  }),
                ],
                1,
              ),
              n('div', { staticClass: 'login-info' }, [
                n('span', { on: { click: t.open } }, [
                  t._v(t._s(t.profile.nickname)),
                ]),
              ]),
              n(
                'div',
                {
                  staticClass: 'asideBar',
                  class: t.isCollapse ? 'active' : '',
                },
                [
                  n(
                    'el-menu',
                    {
                      staticClass: 'el-menu-vertical-demo',
                      attrs: {
                        router: '',
                        'default-active': t.$route.path,
                        collapse: t.isCollapse,
                      },
                    },
                    [
                      n('el-menu-item', { attrs: { index: '/' } }, [
                        t._v('发现音乐'),
                      ]),
                      n('el-menu-item', { attrs: { index: '/video' } }, [
                        t._v('视频'),
                      ]),
                      n(
                        'el-menu-item-group',
                        [
                          n(
                            'span',
                            { attrs: { slot: 'title' }, slot: 'title' },
                            [t._v('我的音乐')],
                          ),
                          n(
                            'el-menu-item',
                            { attrs: { index: '/dailyrecom' } },
                            [t._v('每日推荐')],
                          ),
                          n(
                            'el-menu-item',
                            { attrs: { index: '/historyplay' } },
                            [t._v('最近播放')],
                          ),
                          n(
                            'el-menu-item',
                            { attrs: { index: '/mycollection' } },
                            [t._v('我的收藏')],
                          ),
                        ],
                        1,
                      ),
                      n(
                        'el-menu-item-group',
                        [
                          n(
                            'span',
                            { attrs: { slot: 'title' }, slot: 'title' },
                            [t._v('创建的歌单')],
                          ),
                          t._l(t.createdList, function (e) {
                            return n(
                              'el-menu-item',
                              {
                                key: e.id,
                                attrs: { index: '/playlistdetail/' + e.id },
                              },
                              [
                                -1 !== e.name.indexOf('喜欢的音乐')
                                  ? n('i', {
                                    staticClass: 'iconfont icon-aixin',
                                  })
                                  : n('i', {
                                    staticClass: 'iconfont icon-gedan',
                                  }),
                                t._v(' ' + t._s(e.name) + ' '),
                              ],
                            )
                          }),
                        ],
                        2,
                      ),
                      n(
                        'el-menu-item-group',
                        [
                          n(
                            'span',
                            { attrs: { slot: 'title' }, slot: 'title' },
                            [t._v('收藏的歌单')],
                          ),
                          t._l(t.collectedList, function (e) {
                            return n(
                              'el-menu-item',
                              {
                                key: e.id,
                                staticClass: 'el-menu-item el-menu-item',
                                attrs: { index: '/playlistdetail/' + e.id },
                              },
                              [
                                n('i', { staticClass: 'iconfont icon-gedan' }),
                                t._v(' ' + t._s(e.name) + ' '),
                              ],
                            )
                          }),
                        ],
                        2,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          ),
        ])
      },
      b = [],
      v = n('f9ea'),
      y = n('2791'),
      k = (n('e186'), n('ee0e'), n('7736')),
      w = n('7555'),
      C = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          { staticClass: 'search-input' },
          [
            n('el-input', {
              ref: 'refInput',
              attrs: { placeholder: '搜索', 'prefix-icon': 'el-icon-search' },
              on: { focus: t.onFocus, blur: t.onChange },
              nativeOn: {
                keyup: function (e) {
                  return !e.type.indexOf('key') &&
                    t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                    ? null
                    : t.search(t.input)
                },
              },
              model: {
                value: t.input,
                callback: function (e) {
                  t.input = e
                },
                expression: 'input',
              },
            }),
            n(
              'div',
              {
                directives: [
                  {
                    name: 'show',
                    rawName: 'v-show',
                    value: t.isOnFocus,
                    expression: 'isOnFocus',
                  },
                ],
                staticClass: 'search-info_tip',
              },
              [
                n('div', { staticClass: 'his-search' }, [
                  n('div', { staticClass: 'hot-title font-14' }, [
                    n('span', [t._v('搜索历史')]),
                    n(
                      'button',
                      { staticClass: 'no-btn', on: { click: t.delHistory } },
                      [n('i', { staticClass: 'el-icon-delete' })],
                    ),
                  ]),
                  n(
                    'div',
                    { staticClass: 'his-wrap' },
                    t._l(t.searchHistory, function (e, i) {
                      return n(
                        'button',
                        {
                          key: i,
                          staticClass: 'btn btn-white his-item font-12',
                          on: {
                            click: function (n) {
                              return t.search(e)
                            },
                          },
                        },
                        [t._v(' ' + t._s(e) + ' ')],
                      )
                    }),
                    0,
                  ),
                ]),
                n(
                  'div',
                  { staticClass: 'hot-search mtop-20' },
                  [
                    n('div', { staticClass: 'hot-title font-14' }, [
                      t._v('热搜榜'),
                    ]),
                    t._l(t.hotList, function (e, i) {
                      return n(
                        'div',
                        {
                          key: i,
                          staticClass: 'hot-item',
                          class: i < 3 ? 'top-item' : '',
                          on: {
                            click: function (n) {
                              return t.search(e.searchWord)
                            },
                          },
                        },
                        [
                          n('div', { staticClass: 'item-index' }, [
                            t._v(t._s(i + 1)),
                          ]),
                          n('div', { staticClass: 'item-info' }, [
                            n('div', { staticClass: 'key-word' }, [
                              n('span', { staticClass: 'font-12 item-key' }, [
                                t._v(t._s(e.searchWord)),
                              ]),
                              n(
                                'span',
                                {
                                  staticClass: 'font-12 mleft-10',
                                  staticStyle: { color: 'rgb(194, 193, 193)' },
                                },
                                [t._v(' ' + t._s(e.score) + ' ')],
                              ),
                            ]),
                            n('div', [
                              n(
                                'span',
                                {
                                  staticClass: 'font-12',
                                  staticStyle: { color: 'rgb(153, 153, 153)' },
                                },
                                [t._v(' ' + t._s(e.content) + ' ')],
                              ),
                            ]),
                          ]),
                        ],
                      )
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
      O = [],
      _ = (n('cf33'), n('e6eb'), n('b80b')),
      x = {
        name: 'SearchInput',
        data: function () {
          return {
            input: '',
            isOnFocus: !1,
            searchHistory: [],
            hotList: [],
            keyword: '',
          }
        },
        created: function () {
          this.init(), (this.input = this.$store.state.search.keyword)
        },
        methods: {
          search: function (t) {
            var e = this
            return Object(v['a'])(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        ;(e.input = t), (e.keyword = t)
                      case 2:
                      case 'end':
                        return n.stop()
                    }
                }, n)
              }),
            )()
          },
          onChange: function () {
            var t = this
            setTimeout(function () {
              t.isOnFocus = !1
            }, 50)
          },
          onFocus: function () {
            this.isOnFocus = !0
          },
          delHistory: function () {
            ;(this.searchHistory = []), localStorage.removeItem('search')
          },
          init: function () {
            var t = this
            return Object(v['a'])(
              regeneratorRuntime.mark(function e() {
                var n, i
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t.searchHistory = JSON.parse(
                            localStorage.getItem('search') || '[]',
                          )),
                          (e.next = 3),
                          Object(_['a'])()
                        )
                      case 3:
                        ;(n = e.sent), (i = n.data.data), (t.hotList = i)
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
        },
        watch: {
          keyword: function (t, e) {
            t !== e &&
              (this.$router.push('/search/'.concat(this.keyword)),
              (this.isOnFocus = !1),
              this.$store.commit('search/setKeyword', this.keyword))
          },
        },
      },
      j = x,
      L = (n('4dc0'), Object(h['a'])(j, C, O, !1, null, 'f3f79a32', null)),
      S = L.exports
    n('8f10')
    function M() {
      for (
        var t = document.cookie.split(';'), e = '.' + location.host, n = 0;
        n < t.length;
        n++
      ) {
        var i = t[n],
          a = i.indexOf('='),
          s = a > -1 ? i.substr(0, a) : i
        document.cookie =
          s +
          '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=' +
          e +
          '; path=/'
      }
      if (t.length > 0)
        for (var o = 0; o < t.length; o++) {
          var c = t[o],
            r = c.indexOf('='),
            u = r > -1 ? c.substr(0, r) : c
          document.cookie =
            u +
            '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=' +
            e +
            '; path=/'
        }
    }
    var T = M,
      H = {
        name: 'TopBar',
        data: function () {
          return { isCollapse: !1, createdList: [], collectedList: [] }
        },
        components: { SearchInput: S },
        computed: Object(y['a'])({}, Object(k['c'])('login', ['profile'])),
        methods: {
          showPopup: function () {
            this.isCollapse = !this.isCollapse
          },
          getAccount: function () {
            var t = this
            return Object(v['a'])(
              regeneratorRuntime.mark(function e() {
                var n
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Object(w['i'])()
                      case 2:
                        ;(n = e.sent),
                        t.$store.commit('login/setProfile', n.data.profile),
                        t.$store.commit('login/setAccount', n.data.account),
                        Object(w['g'])(
                          t.$store.state.login.profile.userId,
                        ).then(function (e) {
                          var n = e.data.playlist
                            ;(t.createdList = n.filter(function (t) {
                            return !t.subscribed
                          })),
                          (t.collectedList = n.filter(function (t) {
                            return t.subscribed
                          }))
                        })
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )()
          },
          open: function () {
            var t = this
            this.$confirm('将要退出登录 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            })
              .then(function () {
                Object(w['f'])(),
                sessionStorage.removeItem('isLogin'),
                T(),
                t.$message({ type: 'success', message: '退出成功!' }),
                location.reload(!0)
              })
              .catch(function () {
                t.$message({ type: 'info', message: '已取消' })
              })
          },
        },
        created: function () {
          this.getAccount()
        },
      },
      $ = H,
      A = (n('9c32'), Object(h['a'])($, m, b, !1, null, null, null)),
      P = A.exports,
      E = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e
        return n(
          'div',
          { staticClass: 'TabBar' },
          [
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
                n('van-tab', {
                  attrs: { title: '个性推荐', to: '/personalrecom' },
                }),
                n('van-tab', { attrs: { title: '歌单', to: '/playlist' } }),
                n('van-tab', { attrs: { title: '排行榜', to: '/toplist' } }),
                n('van-tab', { attrs: { title: '歌手', to: '/artistlist' } }),
                n('van-tab', { attrs: { title: '最新音乐', to: '/newsongs' } }),
              ],
              1,
            ),
          ],
          1,
        )
      },
      I = [],
      U = {
        name: 'TabBar',
        data: function () {
          return { active: 0 }
        },
        watch: {
          $route: {
            immediate: !0,
            handler: function (t, e) {
              this.active = [
                '/personalrecom',
                '/playlist',
                '/toplist',
                '/artistlist',
                '/newsongs',
              ].indexOf(t.path)
            },
          },
        },
      },
      D = U,
      B = (n('1a09'), Object(h['a'])(D, E, I, !1, null, null, null)),
      R = B.exports,
      F = {
        name: 'layout',
        data: function () {
          return {
            TabList: [
              '/personalrecom',
              '/playlist',
              '/toplist',
              '/artistlist',
              '/newsongs',
            ],
          }
        },
        components: { FooBar: g, TopBar: P, TabBar: R },
      },
      N = F,
      q = (n('5940'), Object(h['a'])(N, c, r, !1, null, '63b86ceb', null)),
      J = q.exports,
      V = { components: { Layout: J } },
      z = V,
      K = (n('5c0b'), Object(h['a'])(z, s, o, !1, null, null, null)),
      G = K.exports,
      W = n('6c65'),
      Q = (n('1313'), n('6389')),
      X = n.n(Q),
      Y =
        (n('b141'),
        n('df9c'),
        {
          name: 'notFound',
          path: '*',
          component: function () {
            return n.e('chunk-6a40f2d5').then(n.bind(null, '3ee3'))
          },
          meta: { needHead: !1, tittle: '找不到页面' },
        }),
      Z = [
        {
          name: 'Login',
          path: '/login',
          component: function () {
            return n.e('chunk-b069beca').then(n.bind(null, 'd9c9'))
          },
          meta: { needHead: !1, tittle: '登录' },
        },
      ],
      tt = [
        {
          path: '/personalrecom',
          component: function () {
            return n.e('chunk-704ce592').then(n.bind(null, '7fb2'))
          },
          meta: { needHead: !0, tittle: '个性推荐' },
        },
        {
          name: 'ArtistList',
          path: '/artistlist',
          component: function () {
            return n.e('chunk-11b54fca').then(n.bind(null, 'f841'))
          },
          meta: { needHead: !0, tittle: '歌手列表' },
        },
        {
          name: 'TopList',
          path: '/toplist',
          component: function () {
            return n.e('chunk-25d56716').then(n.bind(null, '8192'))
          },
          meta: { needHead: !0, tittle: '排行榜' },
        },
        {
          name: 'ArtistListInfo',
          path: '/artistdetail/:id',
          component: function () {
            return n.e('chunk-23ec1ab2').then(n.bind(null, 'f843'))
          },
          props: !0,
          meta: { needHead: !0, tittle: '歌手主页' },
        },
        {
          name: 'PlayList',
          path: '/playlist',
          component: function () {
            return n.e('chunk-3000f2f3').then(n.bind(null, 'ccce'))
          },
          meta: { needHead: !0, tittle: '歌单列表' },
        },
        {
          name: 'Newsongs',
          path: '/newsongs',
          component: function () {
            return n.e('chunk-7a4d5936').then(n.bind(null, 'cf2f'))
          },
          meta: { needHead: !0, tittle: '最新音乐' },
        },
        {
          name: 'PlayListDetail',
          path: '/playlistdetail/:id',
          component: function () {
            return n.e('chunk-2db4d2c7').then(n.bind(null, 'a37f'))
          },
          props: !0,
          meta: { needHead: !0, tittle: '歌单详情' },
        },
        {
          props: !0,
          name: 'AlbumDetail',
          path: '/albumdetail/:id',
          component: function () {
            return n.e('chunk-1a2f4352').then(n.bind(null, '1130'))
          },
          meta: { needHead: !0, tittle: '专辑详情' },
        },
        {
          name: 'PlayMvDetail',
          path: '/videodetail/mv/:id',
          component: function () {
            return n.e('chunk-e550198c').then(n.bind(null, '720a'))
          },
          props: !0,
          meta: { needHead: !0, tittle: 'MV详情' },
        },
      ],
      et = [
        {
          name: 'DailyRecom',
          path: '/dailyrecom',
          component: function () {
            return n.e('chunk-6daadaa2').then(n.bind(null, '2dcf'))
          },
          meta: { needHead: !0, tittle: '每日推荐' },
        },
      ],
      nt = {
        name: 'Search',
        path: '/search/:keyword',
        component: function () {
          return n.e('chunk-15873230').then(n.bind(null, '79ce'))
        },
        props: !0,
        meta: { needHead: !0, tittle: '搜索结果' },
      },
      it = [
        {
          name: 'Video',
          path: '/video',
          component: function () {
            return n.e('chunk-2f8760f8').then(n.bind(null, '4aa1'))
          },
          props: !0,
          meta: { needHead: !0, tittle: '视频推荐' },
        },
        {
          name: 'VideoDetail',
          path: '/videodetail/v/:id',
          props: !0,
          component: function () {
            return n.e('chunk-2d4c3c99').then(n.bind(null, '89a0'))
          },
          meta: { needHead: !0, tittle: '视频详情' },
        },
      ],
      at = {
        name: 'MyCollection',
        path: '/mycollection',
        component: function () {
          return n.e('chunk-4b039ecb').then(n.bind(null, 'f620'))
        },
        meta: { needHead: !0, tittle: '我的收藏' },
      },
      st = {
        name: 'HistoryPlay',
        path: '/historyplay',
        component: function () {
          return n.e('chunk-5f8776b6').then(n.bind(null, 'f711'))
        },
        meta: { needHead: !0, tittle: '最近播放' },
      },
      ot = n('3089')
    a.a.use(ot['Toast']), a.a.use(X.a)
    var ct = [].concat(
        Object(W['a'])(Z),
        Object(W['a'])(tt),
        Object(W['a'])(et),
        Object(W['a'])(it),
        [nt, Y, st, at, { path: '/', redirect: '/personalrecom' }],
      ),
      rt = new X.a({ routes: ct })
    rt.beforeEach(function (t, e, n) {
      '/login' !== t.path
        ? sessionStorage.getItem('isLogin')
          ? n()
          : n('/login')
        : sessionStorage.getItem('isLogin')
          ? (Object(ot['Toast'])('您已登录！'), rt.push('/'))
          : n()
    }),
    rt.afterEach(function (t, e) {
      document.title = t.meta.tittle
    })
    var ut = rt,
      lt = (n('bab0'), n('c653')),
      dt = lt.keys().reduce(function (t, e) {
        var n = e.replace(/^\.\/(.*)\.\w+$/, '$1'),
          i = lt(e)
        return (t[n] = i.default), t
      }, {})
    a.a.use(k['a'])
    var ft = new k['a'].Store({ modules: dt })
    n('a2f0'), n('c00b'), n('44ce')
    ;(a.a.config.productionTip = !1),
    new a.a({
      render: function (t) {
        return t(G)
      },
      store: ft,
      router: ut,
    }).$mount('#app'),
    (window.onunload = function () {
      T()
    })
  },
  '4dc0': function (t, e, n) {
    'use strict'
    n('d7b6')
  },
  5940: function (t, e, n) {
    'use strict'
    n('6f6e')
  },
  '5c0b': function (t, e, n) {
    'use strict'
    n('5c48')
  },
  '5c48': function (t, e, n) {},
  6389: function (t, e) {
    t.exports = VueRouter
  },
  '6f6e': function (t, e, n) {},
  7555: function (t, e, n) {
    'use strict'
    n.d(e, 'e', function () {
      return a
    }),
    n.d(e, 'f', function () {
      return s
    }),
    n.d(e, 'i', function () {
      return o
    }),
    n.d(e, 'g', function () {
      return c
    }),
    n.d(e, 'd', function () {
      return r
    }),
    n.d(e, 'c', function () {
      return u
    }),
    n.d(e, 'b', function () {
      return l
    }),
    n.d(e, 'h', function () {
      return d
    }),
    n.d(e, 'a', function () {
      return f
    })
    n('1313')
    var i = n('b775'),
      a = function (t) {
        var e = t.phone,
          n = t.password
        return Object(i['a'])({
          method: 'POST',
          url: '/login/cellphone',
          data: { phone: e, password: n },
        })
      },
      s = function () {
        return Object(i['a'])({ method: 'get', url: '/logout' })
      },
      o = function () {
        return Object(i['a'])({
          method: 'get',
          url: '/user/account?'.concat(new Date().getTime()),
        })
      },
      c = function (t) {
        return Object(i['a'])({
          method: 'get',
          url: '/user/playlist?uid='.concat(t),
        })
      },
      r = function (t) {
        return Object(i['a'])({
          method: 'get',
          url: '/login/qr/key?timestamp='.concat(t),
        })
      },
      u = function (t) {
        var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0
        return Object(i['a'])({
          method: 'get',
          url: '/login/qr/create?key='
            .concat(t, '&&qrimg=')
            .concat(e, '&&timestamp=')
            .concat(n),
        })
      },
      l = function (t, e) {
        return Object(i['a'])({
          method: 'get',
          url: '/login/qr/check?key='.concat(t, '&timestamp=').concat(e),
        })
      },
      d = function (t) {
        return Object(i['a'])({
          method: 'get',
          url: '/captcha/sent?phone='.concat(t),
        })
      },
      f = function (t, e) {
        var n = Date.now()
        return Object(i['a'])({
          method: 'get',
          url: '/captcha/verify?phone='
            .concat(t, '&&captcha=')
            .concat(e, '&timestamp=')
            .concat(n),
        })
      }
  },
  7761: function (t, e, n) {},
  8784: function (t, e, n) {
    'use strict'
    n('34ce')
  },
  '8bbf': function (t, e) {
    t.exports = Vue
  },
  9252: function (t, e, n) {
    'use strict'
    n.d(e, 'a', function () {
      return a
    }),
    n.d(e, 'c', function () {
      return s
    }),
    n.d(e, 'd', function () {
      return o
    }),
    n.d(e, 'b', function () {
      return c
    })
    n('1313')
    var i = n('b775'),
      a = function () {
        return Object(i['a'])({ method: 'get', url: '/playlist/catlist' })
      },
      s = function () {
        return Object(i['a'])({ method: 'get', url: '/playlist/hot' })
      },
      o = function (t) {
        var e = t.limit,
          n = void 0 === e ? 50 : e,
          a = t.order,
          s = void 0 === a ? 'hot' : a,
          o = t.cat,
          c = t.page,
          r = void 0 === c ? 0 : c,
          u = r * n
        return (
          (o = encodeURIComponent(o)),
          Object(i['a'])({
            method: 'get',
            url: '/top/playlist?limit='
              .concat(n, '&&order=')
              .concat(s, '&&cat=')
              .concat(o, '&&offset=')
              .concat(u),
          })
        )
      },
      c = function (t) {
        var e = t.limit,
          n = void 0 === e ? 1 : e,
          a = t.cat
        return (
          (a = encodeURIComponent(a)),
          Object(i['a'])({
            method: 'get',
            url: '/top/playlist/highquality?limit='
              .concat(n, '&&cat=')
              .concat(a),
          })
        )
      }
  },
  '9c32': function (t, e, n) {
    'use strict'
    n('7761')
  },
  a2f0: function (t, e, n) {},
  b5ce: function (t, e, n) {
    'use strict'
    n.r(e)
    var i = {
        profile: {},
        account: {},
        isLogin: sessionStorage.getItem('isLogin'),
        accountId: null,
        accountHistory: [],
      },
      a = {
        setProfile: function (t, e) {
          t.profile = e
        },
        setAccount: function (t, e) {
          ;(t.account = e), (t.accountId = e.id)
        },
      },
      s = {},
      o = {}
    e['default'] = {
      namespaced: !0,
      state: i,
      mutations: a,
      actions: s,
      getters: o,
    }
  },
  b775: function (t, e, n) {
    'use strict'
    var i = n('cebe'),
      a = n.n(i),
      s = a.a.create({ baseURL: 'http://localhost:3000', withCredentials: !0 })
    e['a'] = s
  },
  b80b: function (t, e, n) {
    'use strict'
    n.d(e, 'a', function () {
      return a
    }),
    n.d(e, 'b', function () {
      return s
    })
    n('1313')
    var i = n('b775'),
      a = function () {
        return Object(i['a'])({ method: 'get', url: '/search/hot/detail' })
      },
      s = function (t, e, n) {
        return Object(i['a'])({
          method: 'get',
          url: '/cloudsearch?keywords='
            .concat(t, '&&type=')
            .concat(e, '&&offset=')
            .concat(n),
        })
      }
  },
  c00b: function (t, e, n) {},
  c32d: function (t, e) {
    t.exports = moment
  },
  c653: function (t, e, n) {
    var i = {
      './login.js': 'b5ce',
      './playlist.js': '1ec0',
      './search.js': '2219',
      './songDetail.js': '33c7',
    }
    function a(t) {
      var e = s(t)
      return n(e)
    }
    function s(t) {
      if (!n.o(i, t)) {
        var e = new Error("Cannot find module '" + t + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      return i[t]
    }
    ;(a.keys = function () {
      return Object.keys(i)
    }),
    (a.resolve = s),
    (t.exports = a),
    (a.id = 'c653')
  },
  cebe: function (t, e) {
    t.exports = axios
  },
  d0c0: function (t, e, n) {},
  d7b6: function (t, e, n) {},
})
//# sourceMappingURL=app.e6dc9564.js.map
