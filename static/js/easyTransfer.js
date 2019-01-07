var app = new Vue({
  el: '#app',
  data: {
    socket: null,
    msg: '',
    messages: [],

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
    initSocket: function () {
      var _this = this
      var socket = io('http://tool.easy-skill.cn');
      // var socket = io('http://127.0.0.1:9901');
      _this.socket = socket
      $('#sendBtn').on('click', function(evt) {
      });
      socket.on('opend', function(data) {
        console.log('opend:', data);
      });

      socket.on('joined', function(data) {
        console.log('joined:', data);
        _this.messages.push(data)
      });
      socket.on('msg', function(data) {
        _this.messages.push(data)
      });
    },
    sendMsg: function(){
      if(this.msg) {
        this.socket.emit('msg', this.msg);
        this.msg = ''
      }
    }
  },
  mounted: function () {
    var _this = this
    this.initSocket()

  },
  created: function () {
  }
})