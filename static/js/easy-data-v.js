new Vue({
  el: '#app',
  data: {
    bodyEl: null,
    dndTarget: null,
  },
  methods: {
    startDrag: function (ev, dndTarget) {
      event.dataTransfer.setData("type", dndTarget)
      // console.log('ev is: ', ev)
      // var oEl = ev.target
      // var tempItem = ev.target.cloneNode(true)
      // this.dndTarget = dndTarget
      // console.log('tempItem is :', tempItem)
      // var x = oEl.offsetLeft
      // var y = oEl.offsetTop
      // var w = oEl.offsetWidth
      // var h = oEl.offsetHeight
      // console.log(`x is: ${JSON.stringify(x)}`)
      // tempItem.id = dndTarget
      // tempItem.style.position = 'absolute'
      // tempItem.style.backgroundColor = '#5cadff26'
      // tempItem.style.left = x+'px'
      // tempItem.style.top = y+'px'
      // tempItem.style.width = w+'px'
      // tempItem.style.height = h+'px'
      // this.bodyEl.appendChild(tempItem)
    }
  },
  mounted: function () {
    var _this = this
    _this.bodyEl = document.getElementsByTagName('body')[0]
  
    var prevHDistance = null, prevDistance = null
    // window.onmousemove = function (ev) {
    //   // console.log(ev.clientX);
    //   // console.log('ev.clientY is: ', ev.clientY);
    //   if(_this.dndTarget) {
    //     var dndTarget = document.getElementById(_this.dndTarget)
    //     // console.log(`_this.dndTarget is: ${JSON.stringify(_this.dndTarget)}`)
    //     // console.log(dndTarget)
    //     // console.log(`_this.dndTarget.offsetHeight is: ${JSON.stringify(_this.dndTarget.offsetHeight)}`)
    //     // console.log('_this.dndTarget is: ', _this.dndTarget)
    //     // console.log(`dndTarget.offsetLeft is: ${JSON.stringify(dndTarget.offsetLeft)}`)
    //     // console.log(`dndTarget.offsetTop is: ${JSON.stringify(dndTarget.offsetTop)}`)
    //     var hDistance = ev.clientX-dndTarget.offsetLeft
    //     var vDistance = ev.clientY-dndTarget.offsetTop
    //     // console.log(`hDistance is: ${JSON.stringify(hDistance)}`)
    //     // console.log(`vDistance is: ${JSON.stringify(vDistance)}`)
    //     // console.log(`prevDistance is: ${JSON.stringify(prevDistance)}`)
    //     // console.log(`dndTarget.offsetHeight is: ${JSON.stringify(dndTarget.offsetHeight)}`)
    //     if(!prevHDistance) prevHDistance = hDistance
    //     if(!prevDistance) prevDistance = vDistance
    //     // console.log(vDistance);
    //     // var txHeight = _this.$refs['tx'+_this.focusIndex][0].offsetHeight
    //     // console.log('vDistance is:'+vDistance);
    //     // console.log('prevDistance is:'+prevDistance);
    //     // console.log('vDistance-prevDistance is:'+(vDistance-prevDistance));
    //     // _this.$set(_this.clipboardList[_this.focusIndex], 'height', txHeight+(vDistance-prevDistance))
    //
    //     // dndTarget.style.left = dndTarget.offsetLeft+(hDistance - prevHDistance)+'px'
    //     // dndTarget.style.top = dndTarget.offsetTop+(vDistance - prevDistance)+'px'
    //     dndTarget.style.left = ev.clientX+'px'
    //     dndTarget.style.top = ev.clientY+'px'
    //     // dndTarget.style.top = 20+'px'
    //     // console.log(`vDistance - prevDistance is: ${JSON.stringify(vDistance - prevDistance)}`)
    //
    //     prevDistance = vDistance
    //   }else{
    //     prevDistance = null
    //   }
    // }
    // window.onmouseup = function () {
    //   if (_this.dndTarget) {
    //     document.getElementById(_this.dndTarget).remove();
    //   }
    //   _this.dndTarget = null
    //   _this.focusIndex = null
    //   // _this.saveData()
    // }
  }
})