$(function () {
    // 货源检查页面
    var hgS1 = new selectSwiper({
        el: '.select_box1',
        data: ['吃饭', '睡觉', '打豆豆'],
        init: function (index) {
            if (index !== -1) {
                $('.btn1').val(this.data[index]);
            }
        },
        okFunUndefind: function () {
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {
            console.log(index);
            $('.btn1').val(this.data[index]);
        },
        closeFun: function () {
            console.log('取消');
        },
    });
    $('.btn1').on('click', function () {
        hgS1.openSelectSwiper();
    });
    var hgS2 = new selectSwiper({
        el: '.select_box2',
        // mustSelect: true,
        // activeIndex: 0,
        data: ['哈哈2', '呵呵2', '嘻嘻2', '嘿嘿2', '呼呼2', '咳咳2', '嘘嘘2'],
        init: function (index) {
            if (index !== -1) {
                $('.btn2').val(this.data[index]);
            }
        }, okFunUndefind: function () {
            alert
                ('必须选择一项');
        }, okFun: function (index) {
            $('.btn2').val(this.data[index]);
        },
        closeFun: function () {
            console.log('取消');
        },
    });
    $('.btn2').on('click', function () {
        hgS2.openSelectSwiper();
    });
    var hgS3 = new selectSwiper({
        el: '.select_box3',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        init: function (index) {
            if (index !== -1) {
                $('.btn3').val(this.data[index]);
            }
        }, okFunUndefind: function () {
            alert
                ('必须选择一项'); return false;
        }, okFun: function (index) {
            $('.btn3').val(this.data[index]);
        }, closeFun: function () {
            console.log('取消');
        },
    });
    $('.btn3').on('click', function () {
        hgS3.openSelectSwiper();
    });
     var hgS4 = new selectSwiper({
        el: '.select_box4',
        // mustSelect: true,
        // activeIndex: 5,
        data: ['星期日', '星期日', '星期日', '星期日', '星期日', '星期六', '星期日'],
        init: function (index) {
            if (index !== -1) {
                $('.btn4').val(this.data[index]);
            }
        }, okFunUndefind: function () {
            alert
                ('必须选择一项'); return false;
        }, okFun: function (index) {
            $('.btn4').val(this.data[index]);
        }, closeFun: function () {
            console.log('取消');
        },
    });
    $('.btn4').on('click', function () {
        hgS4.openSelectSwiper();
    });
    // 清空
    $('.qk').click(function () {
        $('.inspect-ul li input').val('')
    })
    // 三级联动
    $("#city1").Picker({
        city: true,
        area: true,
        pca: ['广东', '深圳', '南山'],
        pick: function (res) {
            console.log(res)
        }
    })
    $("#city2").Picker({
        city: true,
        area: true,
        pca: ['广东', '广州', '越秀'],
        pick: function (res) {
            console.log(res)
        }
    })
    // 返回
    $('.nav a img').click(function(){
        window.history.go(-1)
    })
})