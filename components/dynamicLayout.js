Vue.component('dynamic-layout', {
  template:
    `
      <div class="dynamic-layout"
       @dblclick.stop.prevent="changeFlexDirection"
       @drop="handleDrop"
       ondragover="event.preventDefault()"
       :style="styles">
        <slot></slot>
      </div>
    `,
  props: {
    // isSelected: {
    //   type: Boolean,
    //   default: false
    // },
    flexType: {
      type: String,
      default: '1'
    }
  },
  data: function () {
    return {
      // isSelected: false,
      styles: {
        flex: this.flexType,
        flexDirection: 'row'
      },
    }
  },
  methods: {
    handleDrop: function (ev) {
      var data = event.dataTransfer.getData("Text");
      console.log('ev is: ', ev)
    },
    // handleSelect: function () {
    //   this.isSelected = !this.isSelected
    // }
    changeFlexDirection: function () {
      if (this.styles.flexDirection === 'row') {
        this.styles.flexDirection = 'column'
      }else{
        this.styles.flexDirection = 'row'
      }
    }
  }
})