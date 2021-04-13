$(function(){
    // 取消运单
    $('.qxyd').click(function(){
        $('.Cancel-bg').show()
    })
    // 否
    $('.false').click(function(){
        $('.Cancel-bg').hide()
    })
    // 是
    $('.true').click(function(){
        $(this).parents('.Cancel-bg').parent().hide()
    })
    // 取消运输单
    $('.qx').click(function(){
        $('.confirmation-bg').hide()
    })
})