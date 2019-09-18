myVue = new Vue({
  el: '#app',
  data: {
    dndTarget: null,
  },
  methods: {
    startDrag: function (ev, dndTarget) {
      console.log('dndTarget is: ', JSON.stringify(dndTarget))
      if (dndTarget !== 'widget') {
        event.dataTransfer.setData("type", dndTarget);
      }else if(dndTarget==='widget'){
        // ev.preventDefault()
        event.dataTransfer.setData("id", event.target.parentNode.id);
      }
    },
    handleContainerDrop: function (ev) {
      event.preventDefault();
      var target = ev.target
      var id = ev.dataTransfer.getData("id");
      var type = ev.dataTransfer.getData("type");
      console.log('type is: ', JSON.stringify(type))
      console.log('id is: ', JSON.stringify(id))
      if(type.indexOf('resize')!==-1) return
      // console.log('type is: ', JSON.stringify(type))
      var x = ev.offsetX
      var y = ev.offsetY
      if (!id) {
        var oWidgetHolder = document.querySelector('.widget-holder');
        var newWidgetHolder = oWidgetHolder.cloneNode(true)
        // console.log('target.clientX is: ', JSON.stringify(target.clientX))
        newWidgetHolder.style.left = x+'px'
        newWidgetHolder.style.top = y+'px'
        newWidgetHolder.id = 'id'+new Date().getTime()
        ev.target.appendChild(newWidgetHolder)
      }else{
        var widgetHolder = document.getElementById(id)
        widgetHolder.style.left = x+'px'
        widgetHolder.style.top = y+'px'
      }
    },
    resizeStartDrag: function (ev) {
      event.dataTransfer.setData("type", 'resize');
// ev.stopPropagation()
      // ev.preventDefault()
      // console.log('resizeStartDrag...')
    },
    resizeDragging: function (ev, type) {
      console.log('resizeDragging...')
      console.log('type is: ', JSON.stringify(type))
      var parent = ev.target.parentNode
      console.log('parent is: ', parent)
      console.log('parent.width is: ', JSON.stringify(parent.width))
      switch (type) {
        case 'resize-top-right':
          console.log('ev is: ', ev)
          console.log('parent.style.top is: ', JSON.stringify(parent.style.top))
          console.log('parent.offsetY+ev.offsetY is: ', JSON.stringify(parent.offsetY+ev.offsetY))
          parent.style.width = parent.offsetWidth+ev.offsetX+'px'
          parent.style.top = parent.offsetTop+ev.offsetY+'px'
          parent.style.height = parent.offsetHeight+ev.offsetX+'px'
          break
        case 'resize-center-right':
          parent.style.width = parent.offsetWidth+ev.offsetX+'px'
          break
        case 'resize-bottom-right':
          parent.style.width = parent.offsetWidth+ev.offsetX+'px'
          break
      }
      console.log('ev is: ', ev)
    }
  },
  mounted: function () {
  
  }
})