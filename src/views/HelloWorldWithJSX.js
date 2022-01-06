import 'assets/jsx.css';
import info from 'assets/data';
import AnchoredHeading from '../components/AnchoredHeading'

export default {
  props: {
    msg: {
      type: String,
      default: 'hello 小米'
    },
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
    const { logo, content } = this.info;
    const contentNode = this.renderContent(h, content)

    return (
      <div class="hello">
        <AnchoredHeading level={1}>header1</AnchoredHeading>
        <AnchoredHeading level={2}>header2</AnchoredHeading>
        <AnchoredHeading level={3}>header3</AnchoredHeading>
        <AnchoredHeading level={4}>header4</AnchoredHeading>
        <AnchoredHeading level={5}>header5</AnchoredHeading>

        <img class="logo" src={logo.src} alt={logo.alt} />
        <h1
          class={{header: true}}
          onClick={this.handleHeaderClick}>
          { this.random ? this.random : this.msg }
        </h1>
        <p>
          For a guide and recipes on how to configure / customize this project,<br/>
          check out the
          <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        { contentNode }
        { this.renderTextArea(h) }
      </div>
    )
  },
  methods: {
    handleHeaderClick() {
      console.log('click')
      this.random = Math.random().toString().slice(2)
    },
    renderContent(h, content) {
      if (!Array.isArray(content)) {
        return null
      }

      const result = content.map(item => {
        const { header, links } = item;

        return <div>
          <h3>{ header }</h3>
          {
            this.renderList(h, links)
          }
        </div>
      })


      return (
        <div> { result } </div>
      )

    },
    renderList(h, links) {
      return (
        <div>
          {
            links.map(link => {
              const { text, attrs } = link;
              return (
                <li>
                  <a href={attrs.href} rel={attrs.rel} alt={attrs.alt}>{ text }</a>
                </li>
              )
            })
          }
        </div>
      )
    },
    renderTextArea(h) {
      return (
        <div class="textInputWrap">
          <input
            v-model_trim:stop={this.textValue}
            placeholder="input---"
            v-on:input={this.onTextAreaInput} />
          {/* <input
            vModel={this.textValue}
            placeholder="input---"
            vOn:input={this.onTextAreaInput} />
          <input
            value={this.textValue}
            class={{ textArea: true, emptyInput: !this.textValue }}
            onInput={this.onTextAreaInput}
          ></input> */}
          <span class={{ textShow: true }}> X 3 = { this.result }</span>
        </div>
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
    }
  }
}