Component({
    options: {
        addGlobalClass: true,
    },
    properties: {

            Class: {
                type: String,
                value: ""
            },
            Style: {
                type: String,
                value: ""
            },
            Id: {
                type: String,
                value: ""
            },
            height: {
                type: Number,
                value: 150
            },
            width: {
                type: Number,
                value: 300
            },
            id: {
                type: String,
                value: ""
            },

    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },

    detached: function () { },

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});