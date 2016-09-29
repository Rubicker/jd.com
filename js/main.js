$(function(){

  //header下拉菜单效果
  (function sendArea(){
    $('.area li:not(".bj")').mouseover(function(){
    	$(this).css({background:'#F4F4F4',color:'#C81623'})
    })
    $('.area li:not(".bj")').mouseout(function(){
    	$(this).css({background:'#FFF',color:'#666'})
    })
    //头部下拉菜单
    var menu = $('.dropdown');
    menu.each(function(i){
    	menu.eq(i).mouseover(function(){
    		$(this).css({background:'#fff',borderRight:'1px solid #ddd',borderLeft:'1px solid #ddd'})
    		$('.changes').eq(i).css({display:'block'})
    		$('.x').eq(i).css({transform:'rotateZ(180deg)'})
    		if(menu.eq(i).find(".mobileIcon")){
    			menu.eq(i).find(".mobileIcon").attr("src","imgs/mobile-hover.jpg");
    		}
    	})
    	menu.eq(i).mouseout(function(){
    		$(this).css({background:'#f1f1f1',borderRight:'1px solid #f1f1f1',borderLeft:'1px solid #f1f1f1'})
    		$('.changes').eq(i).css({display:'none'})
    		$('.x').eq(i).css({transform:'rotateZ(0)'})
    		if($(this).find(".mobileIcon")){
    			$(".mobileIcon").attr("src","imgs/mobile.png");
    		}
    	})
    })
  })();

  //search效果
  (function search(){
    var inputArea = $(".search-bar-l");
    inputArea.focus(function(){
    	if($(this).val()=="游戏本"){
    		$(this).val("");
    	}
    })
    inputArea.blur(function(){
    	if($(this).val()==""){
    		$(this).val("游戏本");
    	}
    })
    var shopCart = $('.cart');
    shopCart.hover(function(){
    	$(this).css({background:'#fff',borderBottom:'1px solid #fff'})
    	$('.cart-hide').css({display:'block'});
    },function(){
    	$('.cart-hide').css({display:'none'})
    	$(this).css({background:'#f1f1f1',borderBottom:"1px solid #dfdfdf"})
    })
  })();

  //banner-hidden及标题Hover效果
  (function uptitleHover(){
    var title = $('.uptitle');
    var uptitleText = title.find('.text');
    var uptitleIcon = title.find('.arrowIcon');
    var list = $('.list');
    var hBanner = $('.banner-hidden');
    var listTitle = $('.list-title');
    title.each(function(i){
      title.eq(i).hover(function(){
        uptitleText.eq(i).css({background:'#C81623'});
        uptitleIcon.eq(i).css({background:'#B50613'});
      },function(){
        uptitleText.eq(i).css({background:'#7C7171'});
        uptitleIcon.eq(i).css({background:'#5C5251'});
      })
    })
    list.each(function(i){
      list.eq(i).hover(function(){
        $(this).css({background:'#F7F7F7',borderLeft:'1px solid #B61D1D'});
        $(this).find('.list-title').css({color:'#B61D1D'});
        hBanner.eq(i).show();
        $(this).find('img').hide();
      },function(){
        $(this).find('img').show();
        hBanner.hide();
        list.css({background:'#C81623',borderLeft:'none'});
        listTitle.css({color:'#fff'});
      })
    })
  })();

  /*banner main-loop大屏滚动轮播效果*/
  (function autoPlay(){
    var num = 0;
    var img = $('.main-loop-imgs img');
    var changeBtn = $('.main-loop-radius');
    var rBtn = $('.main-loop-buttons-r');
    var lBtn = $('.main-loop-buttons-l');
    //定义loop轮播函数
    function loop(){
      num++;
      if(num == 6){
      num = 0;
      }
      img.fadeOut();
      img.eq(num).fadeIn();
      changeBtn.css({background:'#3e3e3e'})
      changeBtn.eq(num).css({background:'#B61B1F'})
    }
    //设置定时器
    var timer = setInterval(loop,3500);

    //设置图片Hover效果，hover时轮播停止，左右按钮出现；鼠标离开时，轮播继续，按钮消失
    img.hover(function(){
      rBtn.show();
      lBtn.show();
      clearInterval(timer);
    },function(){
      rBtn.hide();
      lBtn.hide();
      timer = setInterval(loop,3500);
    })
    //设置图片下部圆形切换按钮hover效果，hover时轮播停止，颜色改变，同时切换到相应的图片，鼠标离开时，轮播继续
    changeBtn.hover(function(){
      var index=$(this).index();
      changeBtn.css({background:'#3e3e3e'})
      $(this).css({background:'#B61B1F'})
      img.fadeOut();
      img.eq(index).fadeIn();
      num = index;
      clearInterval(timer);
    },function(){
      timer =setInterval(loop,3500)
    })
    //设置左右按钮hover效果，hover时按钮出现，轮播停止，鼠标离开时按钮消失，轮播结束
    lBtn.mouseover(function(){
      rBtn.show();
      lBtn.show();
      clearInterval(timer);
    })
    rBtn.mouseover(function(){
      rBtn.show();
      lBtn.show();
      clearInterval(timer);
    })
    lBtn.mouseout(function(){
      rBtn.hide();
      lBtn.hide();
      timer = setInterval(loop,3500);
    })
    rBtn.mouseout(function(){
      rBtn.hide();
      lBtn.hide();
      timer = setInterval(loop,3500);
    })
    // 设置左右按钮click效果
    rBtn.click(function(){
      loop();
    })
    lBtn.click(function(){
      num--;
      if(num == -1){
      num = 5;
      }
      img.fadeOut();
      img.eq(num).fadeIn();
      changeBtn.css({background:'#3e3e3e'})
      changeBtn.eq(num).css({background:'#B61B1F'})
    })
  })();

  //今日推荐轮播特效
  (function todayLoop(){
    var imgs = $(".change-img img");
    var changeboxes = $('.change-boxes');
    var arrowGroup = $(".arrow-group");
    var leftArrow = $(".left-arrow");
    var rightArrow = $(".right-arrow");
    var cib = $(".change-img-box");
    var cibLen = cib.length;
    imgs.mouseover(function(){
      arrowGroup.show();
    })
    imgs.mouseout(function(){
      arrowGroup.hide();
    })
    arrowGroup.mouseover(function(){
      arrowGroup.show();
    })
    arrowGroup.mouseout(function(){
      arrowGroup.hide();
    })

    var num = 1;
    function changeGoL(direction){
      if(direction == "l"){
        num++;
        if(num == 5){
          changeboxes.animate({left:-1003*num},1000,function(){
            changeboxes.css({'left':'-1003px'});
          })
          num = 1;
        }else{
          changeboxes.animate({left:-1003*num},1000)
        }
      }else if(direction == "r"){
        num--;
        if(num == 0){
          changeboxes.animate({left:-1003*num},1000,function(){
            changeboxes.css({'left':'-4012px'});
          })
          num = 4;
        }else{
          changeboxes.animate({left:-1003*num},1000)
        }
      }
    }
    leftArrow.click(function(){
      changeGoL("l");
    })
    rightArrow.click(function(){
      changeGoL("r");
    })
  })();

  //猜你喜欢切换效果
  (function guessWhatYouLike(){
    var getchange = $('.getchange');
    var imgboxes = $('.like-content-c');
    var num = 0;
    getchange.click(function(){
      num++;
      if(num == imgboxes.length){
        num = 0;
      }
      imgboxes.hide();
      imgboxes.eq(num).show();
    })
  })();

  //猜你喜欢换背景及红线特效
  (function redLine(){
    var getchange=$(".getchange");
    var yBtn=$(".youlike-btn");
    var redLine = $('.i');
    var circle = $('.circle');
    getchange.hover(function(){
      yBtn.attr('src','imgs/youlikeBtnHover.png');
      redLine.css({right:1210,width:0}).animate({right:0,width:365},1000);
      circle.css({right:1210}).animate({right:-4},1000);
    },function(){
      yBtn.attr('src','imgs/youlikeBtn.png');
      redLine.css({right:0,width:365});
      circle.css({right:-4});
    })
  })();

  //楼层选项卡切换效果
  function floorTabs(num){
    var floor = $('.activefloor').eq(num);
    var tabBtn = floor.find('.tabItem');
    var a = floor.find('.moreactivea');
    var changem = $('.onefloor').find('.change-m');
    var changer = $('.onefloor').find('.change-r');
    var changecards = $('.twofloor').find('.tchangecards');
    tabBtn.each(function(i){
      tabBtn.eq(i).hover(function(){
        if(num == 1){
          changecards.hide();
          changecards.eq(i).show();
        }else if(num == 0){
          changem.hide();
          changer.hide();
          changem.eq(i).show();
          changer.eq(i).show();
        }
        tabBtn.removeClass('moreactiveli');
        tabBtn.eq(i).addClass("moreactiveli");
        a.css({borderRight:'1px solid #ccc'});
        a.eq(i).css({borderRight:'1px solid #fff'});
        a.eq(i-1).css({borderRight:'1px solid #fff'});
      })
    })
  }
  floorTabs(0);
  floorTabs(1);
  //楼层轮播效果
  function floorloop(num){
    var floor = $('.activefloor').eq(num);
    var btn = floor.find('.btn');
    var imgbox = floor.find('.imgbox');
    var imgwidth = (num == 0)? 439:339;
    var index = 1;
    var boxLoop = setInterval(loop,3000);
    function loop(){
      index++;
      if(index == 5){
        imgbox.animate({left:-imgwidth*index},500,function(){
          imgbox.css({left:-imgwidth});
        })
        index = 1;
      }else{
        imgbox.animate({left:-imgwidth*index},500);
      }
      btn.css({background:'#3E3E3E'});
      btn.eq(index-1).css({background:'#B61B1F'});
    }
    btn.each(function(i){
      btn.eq(i).hover(function(){
        index = i;
        clearInterval(boxLoop);
        btn.css({background:'#3E3E3E'});
        btn.eq(i).css({background:'#B61B1F'});
        imgbox.css({left:-imgwidth*(i+1)});
      },function(){
        boxLoop = setInterval(loop,3000);
      })
    })
    imgbox.find('img').hover(function(){
      clearInterval(boxLoop);
    },function(){
      boxLoop = setInterval(loop,3000);
    })
  }
  floorloop(0);
  floorloop(1);

  //天天低价晒单区轮播
  (function discountEffect(){
    var discountlength = $('.discount-content-rcb')
    function discountLoop(){
      $('.rcbpar').animate({top:-20},500,function(){
      var first=$('.discount-content-rcb').eq(0);
      var last=$('.discount-content-rcb').eq(5);
      last.insertBefore(first);
      $('.rcbpar').css({top:-160});
    });
    }
    var disLoop = setInterval(discountLoop,3000);
    var imgs = $('.discount-content-rcb').find('img');
    imgs.hover(function(){
      clearInterval(disLoop)
    },function(){
      disLoop = setInterval(discountLoop,3000)
    })
  })();
  //天天低价图片背景动画效果
  (function moveBcg(){
    $('img',$('.discount-leftboxs2')).hover(function(){
      $(this).animate({marginLeft:-5})
    },function(){
      $(this).animate({marginLeft:0})
    })
  })();

  //右侧固定条效果
  (function rightFixed(){
    var rightfixed = $('.right-fixed');
    var cH = $(window).height();
    var changefix = $('.change-fix');
    var word = $('.hidden-word');
    var imgs = $('.images-par');
    var rightb = $('.right-b');
    rightb.height(cH);
    rightfixed.height(cH);
    changefix.each(function(i){
      changefix.eq(i).hover(function(){
        word.eq(i).show();
        word.eq(i).animate({marginLeft:-60},200);
        imgs.eq(i).css({background:'#c81623'})
      },function(){
        word.eq(i).hide();
        word.eq(i).animate({marginLeft:0},200);
        imgs.eq(i).css({background:'#7A6E6E'})
      })
    })
  })();
  //右侧固定条回到顶部效果
  (function goTop(){
    var topBtn = $('.gotop');
    topBtn.click(function(){
      $('body,html').animate({scrollTop:0},1000);
    })
  })();

  //左侧固定条hover效果
  (function leftFixed(){
    $('.leftfixeddivs').each(function(i){
      $('.leftfixeddivs').eq(i).hover(function(){
        $('.hid-numb').eq(i).css({display:'block'});
        $('.hid-descri').eq(i).css({display:'block'})
      },function(){
        $('.hid-numb').eq(i).css({display:'none'});
        $('.hid-descri').eq(i).css({display:'none'})
      })
      $('.leftfixeddivs').eq(i).click(function(){
        $("html,body").animate({scrollTop:$('.activefloor').eq(i).offset().top},1000);
      })
    })
  })();

  //按需加载及左侧固定条效果
  var scrollTimer = null;
  $(window).scroll(function(){
    var leftfixedboxs = $('.leftfixedboxes');
    var loadbox = $(".loadbox");
    var ch = $(window).height();
    var sTop = $(window).scrollTop();
    var floors = $('.activefloor');
    //左侧固定条效果
    floors.each(function(i){
      if(sTop>floors.eq(i).offset().top-200){
        $(".numb").css({display:'block',color:'#625351'});
        $(".descri").css({display:'none'});
        $(".descri").eq(i).css({display:"block",color:'#C81623'});
        $(".floorst").eq(i).css({zIndex:999999});
        $('.floors').eq(i).css({color:'#CCCCCC'});
        $(".numb").eq(i).css({display:'none'});
        $(".floorst").eq(i).animate({top:-36},800);
      }
    })
    //处理IEscroll事件卡顿问题
    if(scrollTimer){
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function(){
      if(sTop>1400 && sTop<8000){
    	leftfixedboxs.show();
      }else{
    	leftfixedboxs.hide();
      }
      //lazyload
      loadbox.each(function(i){
        if(loadbox.eq(i).offset().top<(ch + sTop)){
          var imgs = loadbox.eq(i).find('img');
          imgs.each(function(j){
            if(imgs.eq(j).src == null){
              imgs.eq(j).attr('src',imgs.eq(j).attr('lazysrc'));
            }
          })
        }
      })
    },50)

  })
})
