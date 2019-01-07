var app = new Vue({
  el: '#app',
  data: {
    toolbar: {
      edit: false
    },
    modal: {
      action: '',
      title: '',
      prjIdx: null,
      name: '',
      desc: '',
    },
    projectList: [],
    entryHeight: 100,
    list: []
  },
  methods: {
    onTitleClick: function(item) {
      if(item.desc) {
        this.$set(item, 'isShowDetail', !item.isShowDetail)
        localStorage.projectList = JSON.stringify(this.projectList)
      }
    },
    edit: function(action, index){
      $('#myModal').modal()
      this.modal.action = action
      if(action==='add') {
        this.toolbar.edit = false
      }else if(action==='update') {
        var item = this.projectList[index]
        this.modal.prjIdx = index
        this.modal.name = item.name
        this.modal.desc = item.desc
      }
    },
    remove: function(index) {
      var _this = this
      layer.confirm('是否删除'+this.projectList[index].name+'此项目?', {icon: 3, title:'提示'}, function(layerIdx){
        _this.projectList.splice(index, 1)
        _this.saveData()
        if(!_this.projectList.length) {
          _this.toolbar.edit = false
        }
        layer.close(layerIdx);
      });
    },
    submitNow: function(){
      var desc = this.modal.desc
      var name = this.modal.name
      if(!name) {
        layer.msg('请输入项目名称', {icon: 2})
        return
      }

      var action = this.modal.action
      if(action==='add') {
        this.projectList.push({name: name, desc: desc, isShowDetail: true})
      }else if(action==='update') {
        var row = this.projectList[this.modal.prjIdx]
        row.name = name
        row.desc = desc
        row.isShowDetail = true
      }
      this.saveData()
      $('#myModal').modal('hide')
    },
    saveData: function(){
      localStorage.projectList = JSON.stringify(this.projectList)
    }
  },
  mounted: function () {
    var _this = this
    $('#myModal').on('hidden.bs.modal', function () {
      _this.modal.action = ''
      _this.modal.prjIdx = null
      _this.modal.name = ''
      _this.modal.desc = ''
    })
  },
  created: function () {
    this.projectList = JSON.parse(localStorage.projectList || '[]')
  }
})
