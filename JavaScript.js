//tooltip

// var className="tool-tip";
var getDocID=function(id){
    return document.getElementById (id);
}
var parentdiv=getDocID("fenlan");

function showtooltip1(obj,id,html,width,height){
    if(getDocID(id)==null){ //id为上面所传递的id，若为空，则要我们自己创建id
        var tooltipp;
   tooltipp=document.createElement("div");
   tooltipp.className="tooltip11";//设置属性名
   tooltipp.id=id;//获取当前id,即我们所传递进去的
    tooltipp.innerHTML=html;//添加html元素
        obj.appendChild(tooltipp);
        //设置显示框的宽高
        tooltipp.style.width=width?width+"px" :"auto";
        tooltipp.style.height=height?height+"px" :"auto";

        //为其定位，使其显示在下面内容之上
        tooltipp.style.position="absolute";
        tooltipp.style.display="block";

        //调整框所在为止，使其在鼠标下面
        var left=obj.offsetLeft;
        var top=obj.offsetTop+40;

        //把盒子的位置设置为当前的left top
        tooltipp.style.left=left+"px";
        tooltipp.style.top=top+"px";

        //鼠标监听事件
        obj.addEventListener("mouseout",function () {
            setTimeout(function () {
                getDocID(id).style.display="none";
            },1000);
        });
    }else{
 getDocID(id).style.display="block";
    }
}

parentdiv.addEventListener("mousemove",function (e) {
    var target=e.target;
    if(target.className=="tooltip1"){
        var _html;
        var _id;
        var _width;
        var _height;
        switch (target.id) {
            case "huashui":
           _id="hs";
           _html="<iframe src='http://www.ncwu.edu.cn/'></iframe>"
           _width=300;
           _height="auto";

           break;
            case "jinzhuan":
                _id="jz";
                _html="金砖国家网络大学是全球化时代中国、俄国、印度、巴西和南非五国高等教育领域" +
                    "积极整合利用国家各国学术资源、拓展国际交流平台，提升核心竞争力的共同选择。"
                _width=200;
                break;
            case "shijian":
                _id="sj";
                _html="到目前为止已经六年时间。"
                _width=100;
                break;
        }
        showtooltip1(target,_id,_html,_width,_height);//向方法里传递参数
    }
});



var guize={
    rules:{
        studentid:{
            required:true,
            minlength:6
        },
        username:{
            required:true,
            minlength:3,
            maxlength:6
        },
        mima:{
            required:true,
            minlength:6,
            maxlength:18
        },
        cmima:{
            required:true,
            equal:"[name='mima']"
        }
    },messages:{
        required:"学号是必填项！",
        minlength:"最短长度为6！"
    },
    username:{
        required:"姓名是必须填写的！",
        minlength:"最短长度为3",
        maxlength:"最长长度为6"
    },
    mima:{
        required:"密码为必填项",
        minlength:"最短长度为6",
        maxlength:"最长长度为18"
    },
    cmima:{
        required:"重复密码为必填项",
        equalTo:"[name='mima']"
    }
}


$(function(){
    $("#Form").validate(guize);
});

//广告弹框

// setTimeout(function () {
//    $("#huashui1").show();
// },3000)
//
// $(document).ready(function () {
//     $("#huashui1").draggable()
// })
// function init() {
//     window.setInterval(show1,5000); //设置显示时间 5s
// }
//
// function show1() {
//     $("#huashui1").show();//调用此函数使广告弹框显示出来
// }
// function closec() {
//     $("#huashui1").hide()//点击关闭按钮使，弹框消失
// }

//图片轮播
$(".carousel").carousel({
    interval:2000
})


//时间轴
var kecheng={
    init:function () {
        this.lessImgShow()
    },
    //    鼠标监听事件
    stopEventBubble:function (event) {
        var e=event;
        if(e){
            e.stopPropagation()
        }
    },
    //    图片向上显示
    lessImgShow:function () {
        $(".lessionimgbox").bind("mouseover",function (e) {
            var _pop=$(this).find(".img-pop");
            $(this).css({border:"1px solid #1abc9c",width:"226px",height:"300px"});
            TweenMax.to(_pop,0.5,{top:0,ease:Bounce.easeOut});
            kecheng.stopEventBubble(e);
        }),
            $(document).bind("mouseover",function () {
                var _pop=$(this).find(".img-pop");
                $(this).css({border:"0",width:"230px",height:"300px"})
                TweenMax.to(_pop,0.5,{top:300,ease:Bounce.easeIn});
            })

    }

}
$(function () {
    kecheng.init();
})


//设置图片显示或隐藏
for(var i=0;i<5;i++){
    $("<b>").appendTo(document.body);
}

$("#img1").hover(function () {
    $(this).hide(2000,function () {//鼠标放上去隐藏，离开显示
        $(this).show(2000)
    });
})
$("#img2").hover(function () {
    $(this).hide(2000,function () {//鼠标放上去隐藏，离开显示
        $(this).show(2000)
    });
})
$("#img3").hover(function () {
    $(this).hide(1000,function () {//鼠标放上去隐藏，离开显示
        $(this).show(1000)
    });
})
$("#img4").hover(function () {
    $(this).hide(2000,function () {//鼠标放上去隐藏，离开显示
        $(this).show(2000)
    });
})
$("#img5").hover(function () {
    $(this).hide(1000,function () {//鼠标放上去隐藏，离开显示
        $(this).show(1000)
    });
})

//设置标签页
$("#mytab a:last").tab("show")//最后一个默认显示








