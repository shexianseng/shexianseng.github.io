/**
 * Created by Administrator on 2018-07-12.
 */
//������ť��ʼ
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});
//������ť����
//����1��ʼ
$(function () {
    $(".bx-sj1").click(function () {
        $(".bx-nav-one .bx-nav").toggle("slow");
    });
});
$(function () {
    $(".bx-nav li").hover(function () {
        $(this).find(".bx-nav-fd").stop(true, true).show("slow");
    }, function () {
        $(this).find(".bx-nav-fd").stop(true, true).hide("slow");
    });
})
//999����1����
//*********����2��ʼ*****************
$(function () {
    $(".bx-sj2").click(function () {
        $(".bx-nav-tow .bx-nav").slideToggle("slow");
        $(".bx-nav-yz").slideToggle("slow");
    })
})
//******����2����********

$(function () {

    $(".bx-nav-yz ul li").hover(function () {
        $(this).find(".div-fd").stop(true, true).slideDown();
    }, function () {
        $(this).find(".div-fd").stop(true, true).slideUp();
    })
});


//*********���ض���*********

$("#returnTop").click(function () {
    var speed = 1000;//�������ٶ�
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
//******���ض���********

//*********pcת�ֻ�����*********

$('a[href*=#]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                scrollTop: targetOffset
            }, 900);
            return false;
        }
    }
});

//********pcת�ֻ�����***********

//*********����**********
//var isHover = false;
//$(function () {
//    $(".a").hover(function () {
//        isHover = true;
//        $(".b").show();
//    }, function () {
//        isHover = false;
//        setTimeout(function () {
//            if (!isHover) {
//                $(".b").fadeOut();
//            }
//        }, 10);
//    });
//    $(".b").hover(function () {
//        isHover = true;
//    }, function () {
//        isHover = false;
//        $(".b").fadeOut();
//    });
//});

//********����*******

//**************ѡ�***********
//$(function () {
//    $(".b_1").hide();
//    var li = document.getElementsByClassName("a_1");
//    var div = document.getElementsByClassName("b_1");
//    for (var x = 0; x < li.length; x++) {
//        li[x].index = x;
//        li[x].onmousemove = function () {
//            div[0].style.display = "block"
//            $(this).addClass("cur").siblings("li").removeClass("cur");
//            for (var b = 0; b < div.length; b++) {

//                div[b].style.display = "none"

//            }
//            div[this.index].style.display = "block"


//        }
//    }
//})
//**********ѡ�**********

//***********����***********
//$(function () {
//    $(window).scroll(function () {
//        var a = $("#index-one-lo").offset().top - $(window).scrollTop();

//        if (a <=0) {
//            $(".index-one-lo").addClass("index-one-lo1")
//        }else(
//             $(".index-one-lo").removeClass("index-one-lo1")

//            )

//    })
//})
//*********����*********


//*******�����л�********


//var langue = '<%=Session["lang"]%>';
//if (langue == "zh-cn") {
//    $(".yy").removeClass("cur")
//    $(".yy").eq(0).addClass("cur");
//
//} else {
//    $(".yy").removeClass("cur")
//    $(".yy").eq(1).addClass("cur");
//
//}

//*********�����л�*********

//***********�⵼��*********
$(function () {
    $("#bx-side-btn-r").click(function () {
        $(".bx-side-nav2").show();
        $(".bx-side-nav-list2").css("right", "0");
    });
    $(".bx-side-nav2 i").click(function () {
        $(".bx-side-nav2").hide();
        $(".bx-side-nav-list2").css("right", "-260px");
    });
    $(".bx-side-nav2").click(function () {
        $(".bx-side-nav2").hide();
        $(".bx-side-nav-list2").css("right", "-260px");
    });

});


$(function () {
    $("#bx-side-btn-l").click(function () {
        $(".bx-side-nav").show();
        $(".bx-side-nav-list").css("left", "0");
    });
    $(".bx-side-nav i").click(function () {
        $(".bx-side-nav").hide();
        $(".bx-side-nav-list").css("left", "-260px");

    });
    $(".bx-side-nav").click(function () {
        $(".bx-side-nav").hide();
        $(".bx-side-nav-list").css("left", "-260px");

    });

});
//**********�⵼��*****************

//ul ��������ʾͼƬ
//var a = $("#ul-a  li").length;
//if (a == 0) {
//    $("#ul-a").addClass("nodata-img");
//} else {
//    $("#ul-a").removeClass("nodata-img");
//};
//ul ��������ʾͼƬ
    

// ����
$(function () {
    $(".bx-sideBar li").hover(function () {
        $(this).find(".div-fc").stop(true, true).show("slow");
    }, function () {
        $(this).find(".div-fc").stop(true, true).hide("slow");
    })
})

//����


//*****�˲���Ƹ����*****
$(document).ready(function () {
    var $submenu = $('.submenu');
    var $mainmenu = $('.mainmenu');
    $submenu.hide();
    $mainmenu.on('click', 'li', function () {

        var bl = 0;
        $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();

        if ($(this).find(".arrow").attr("class") == "s") {
            $(this).find(".arrow").removeClass("s");
        } else {
            if ($(this).find(".arrow").hasClass("s")) {
                $(".arrow").removeClass("s");
                bl = 1;
            }
            $(".arrow").removeClass("s");
            $(".mainmenu li").removeClass("li")
            if (bl == 0) {
                $(this).find(".arrow").addClass("s");
                $(this).addClass("li")
            }
        }
    });
});

//***�˲���Ƹ����****


//*****����

$(function () {
    $(".btn-popup").click(function () {
        $(".bx-popup").show();
    })
})
//*****����

//*****��������
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 27) { // �� Esc 
            //Ҫ��������
            $(".bx-popup").hide();
        }
        if (e && e.keyCode == 113) { // �� F2 
            //Ҫ��������
        }
        if (e && e.keyCode == 13) { // enter ��
            //Ҫ��������
        }
    };
//*****��������

//***ul li ��������ʾ****
var a = $("#ul2  li").length;
if (a == 0) {
    $("#ul2 ").addClass("nodata-img");
} else {
    $("#ul2 ").removeClass("nodata-img");
};
//***ul li ��������ʾ****
