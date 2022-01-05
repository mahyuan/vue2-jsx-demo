import 'assets/jsx.css';
import info from 'assets/data';

export default {
  props: {
    msg: {
      type: String,
      default: 'hello 小米'
    }
  },
  data() {
    return {
      info,
      random: '',
      textValue: '',
      result: ''
    }
  },
  render(h) {
    const  { logo, content } = this.info;
    const logoNode = this.getLogoNode(h, logo);
    const descNode = this.getDescNode(h);
    const contentNode = this.getContentNode(h, content)
    const textAreaNode = this.getTextAreaNodes(h)

    const children = [ logoNode, descNode, contentNode, textAreaNode ].flat()
    return h('div', {
      class: { hello: true }
    },
    children
    )
  },
  methods: {
    getLogoNode(h, logo) {
      return h('img', {
        class: { 'logo': true },
        attrs: { alt: logo.alt, src: logo.src }
      })
    },
    getContentNode(h, content) {
      if (!Array.isArray(content)) {
        return null
      }

      const children = content.map(item => {
        const { header, links } = item;
        const headerNode = this.getHeaderNodes(h, header)
        const ulNode = this.getUlNodes(h, links)
        return [headerNode, ulNode]
      })


      return children.flat()
    },
    getDescNode(h) {
      return [
        h('h1', {
          class: { header: true },
          on: { click: this.handleHeaderClick }
        },  this.random ? this.random : this.msg),
        h('p',
          [
            'For a guide and recipes on how to configure / customize this project,',
            h('br'),
            'check out the ',
            h('a', {
              attrs: {
                href: 'https://cli.vuejs.org', target: '_blank', rel: 'noopener'
              }
            }, 'vue-cli documentation'),
            '.'
          ]
        ),
      ]
    },
    getHeaderNodes(h, header) {
      return h('h3', header)
    },
    getUlNodes(h, links) {
      const liNodes = this.getLinkNodes(h, links)
      return h('ul', liNodes)
    },
    getLinkNodes(h, links) {
      const nodes = links.map(link => {
        const { text, attrs } = link;

        return h('li', [
          h('a', { attrs }, text)
        ])
      })
      return nodes;
    },
    getTextAreaNodes(h) {
      return h('div',
        {
          class: { textInputWrap: true },
        },
        [
          h('input', {
            class: {
              textArea: true, emptyInput: !this.textValue
            },
            domProps: {
              value: this.textValue
            },
            on: {
              input:  (event) => {
                this.onTextAreaInput(event)
              }
            },
          }),
          h('span', {
            class: { textShow: true }
          }, ` X 3 = ${ this.result }`)
        ]
      )
    },
    onTextAreaInput(event) {
      const value = event.target.value.trim()
      if (!value) {
        this.result = ''
      } else {
        if (isNaN(Number(value)) ) {
          this.result = value.repeat(3)
        } else {
          this.result = Number(value) * 3
        }
      }
      this.textValue = value
    },
    handleHeaderClick() {
      this.random = Math.random().toString().slice(2)
    },
  }
  /* render(h) {
        return h('div', {
            class: {
                hello: true
            },
        }, [
            h('img', {
                class: {
                    logo: true
                },
                attrs: {
                    alt: "Vue logo", src: 'https://cn.vuejs.org/images/logo.svg'
                }
            }),
            h('h1', this.msg),
            h('p',
                [
                    'For a guide and recipes on how to configure / customize this project,',
                    h('br'),
                    'check out the ',
                    h('a', {
                        attrs: {
                            href: 'https://cli.vuejs.org', target: '_blank', rel: 'noopener'
                        }
                    }, 'vue-cli documentation'),
                    '.'
                ]
            ),
            h('h3', 'Installed CLI Plugins'),
            h('ul', [
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel", target: "_blank", rel: "noopener"
                        },
                    }, 'babel')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" ,target: "_blank", rel: "noopener"
                        },

                    }, 'eslint')
                ])
            ]),
            h('h3', 'Essential Links'),
            h('ul', [
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://vuejs.org", target: "_blank", rel: "noopener"
                        },
                    }, 'Core Docs')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://forum.vuejs.org" ,target: "_blank", rel: "noopener"
                        },

                    }, 'Forum')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://chat.vuejs.org" ,target: "_blank", rel: "noopener"
                        },

                    }, 'Community Chat')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://twitter.com/vuejs" ,target: "_blank", rel: "noopener"
                        },

                    }, 'Twitter')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://news.vuejs.org" ,target: "_blank", rel: "noopener"
                        },

                    }, 'News')
                ])
            ]),
            h('h3', 'Ecosystem'),
            h('ul', [
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://router.vuejs.org", target: "_blank", rel: "noopener"
                        },
                    }, 'vue-router')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://vuex.vuejs.org" ,target: "_blank", rel: "noopener"
                        },

                    }, 'vuex')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://github.com/vuejs/vue-devtools#vue-devtools", target: "_blank", rel: "noopener"
                        },

                    }, 'vue-devtools')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://vue-loader.vuejs.org" ,target: "_blank", rel: "noopener"
                        },

                    }, 'vue-loader')
                ]),
                h('li', [
                    h('a', {
                        attrs: {
                            href: "https://github.com/vuejs/awesome-vue" ,target: "_blank", rel: "noopener"
                        },

                    }, 'awesome-vue')
                ])
            ]),
        ])
    }
    */
}
