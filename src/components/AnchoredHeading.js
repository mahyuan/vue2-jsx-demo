import Vue from 'vue';

const AnchoredHeading = Vue.component('anchored-heading', {
  functional: true,
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render(h, context) {
    const { props: {level }, children } = context;
    const TagNode = `h${level}`;
    return <TagNode>{ children }</TagNode>
  }
})

export default AnchoredHeading