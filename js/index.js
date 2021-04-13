$(function () {
    // 首页
    //弹窗确定
    $('.qd').click(function () {
        $(this).parents('.bg').hide()
    })
    // 接单
    $('.orders-button').click(function () {
        $(this).next().show()
    })
    // 关闭登录页
    $('.gb').click(function(){
        $(this).parents('.login-bg').hide()
    })
    // 选择接单车辆
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
});
