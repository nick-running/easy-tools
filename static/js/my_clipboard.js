new ClipboardJS('button', {
  target: function(trigger) {
    return trigger.parentElement.nextElementSibling;
  }
})
var app = new Vue({
  el: '#app',
  data: {
    donateModal: {
      visible: false
    },
    str: '',
    entryHeight: 100,
    clipboardList: [],
    focusIndex: null,
    resize: {
      startY: null
    }
  },
  methods: {
    handleDonate: function(){
      this.donateModal.visible = true
    },
    textareaFocus: function($event){
      $event.target.select()
    },
    onChange: function($event){
      console.log($event)
    },
    initHeight: function () {
      var _this = this
      this.clipboardList.forEach(function (n,idx) {
        if(!n.height) {
          var height = _this.$refs['tx'+idx][0].offsetHeight
          _this.$set(_this.clipboardList[idx], 'height', height)
        }
      })
    },
    add: function() {
      if(this.str) {
        this.clipboardList.unshift({text: this.str})
        this.saveData()
      }
    },
    remove: function(index){
      this.clipboardList.splice(index, 1)
      this.saveData()
    },
    update: function(index, $event) {
      this.clipboardList[index].text = $event.target.value
      this.saveData()
    },
    saveData: function(){
      localStorage.clipboardList = JSON.stringify(this.clipboardList)
    },
    resizeDown: function (ev, index) {
      this.focusIndex = index
      this.resize.startY = ev.clientY
    }
  },
  mounted: function () {
    var _this = this
    var prevDistance = null
    window.onmousemove = function (ev) {
      // console.log(ev.clientX);
      if(_this.focusIndex!=undefined) {
        var vDistance = ev.clientY-_this.resize.startY
        if(!prevDistance) prevDistance = vDistance
        // console.log(vDistance);
        var txHeight = _this.$refs['tx'+_this.focusIndex][0].offsetHeight
        // console.log('vDistance is:'+vDistance);
        // console.log('prevDistance is:'+prevDistance);
        // console.log('vDistance-prevDistance is:'+(vDistance-prevDistance));
        _this.$set(_this.clipboardList[_this.focusIndex], 'height', txHeight+(vDistance-prevDistance))
        prevDistance = vDistance
      }else{
        prevDistance = null
      }
    }
    window.onmouseup = function () {
      _this.focusIndex = null
      _this.saveData()
    }
    _this.initHeight()
  },
  created: function () {
    // console.log(localStorage.list)
    this.clipboardList = JSON.parse(localStorage.clipboardList || '[]')
    console.log('localStorage.list, 请注意保存！ '+JSON.parse(localStorage.list));
    // console.log(this.$refs.entryTextarea)
    // console.log(localStorage.list)
  }
})
