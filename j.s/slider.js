$(document).ready(function() {


    $('ul li a').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("." + $(this).data('scroll')).offset().top +5
        },2000);
    $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });

   
    $(window).scroll(function () {

        $('.block').each(function () {
           // $('nav').animate({'opacity':.5},2000);
           
            
            if ($(window).scrollTop() >= $(this).offset().top - 5) {
                var blockId = $(this).attr('id');
                $('nav li a[data-scroll="' + blockId + '"]').addClass('active').parent().siblings().find('a').removeClass('active');
            }
        });

        if($(window).scrollTop() >= 1000) {
            $('nav').css('background','rgba(0,0,0,.5)');
            
            $('.scrollTop').fadeIn(1000);
        } else {
            $('.scrollTop').fadeOut(1000);
            $('nav').css('background','rgb(0,0,0)');
            $('.menu').css('background','rgb(0,0,0)');
        }
        
});


$('.scrollTop').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    },2000);
});

//create slider



$('.indicator li').on('click', function () {
        
    $(this).addClass('active').siblings().removeClass('active');
    
    $("." +  $(this).data('img')).addClass('active').siblings().removeClass('active');
});

$('.slider .fa-chevron-right').on('click', function () {
    
    if ($('.indicator li.active').is(':last-child')) {
        $('.indicator li').eq(0).click();
    } else {
         
        $('.indicator .active').next().click();
    }
    
});
$('.slider .fa-chevron-left').on('click', function () {
    
    
    if ($('.indicator li.active').is(':first-child')) {
        $('.indicator li').eq(4).click();
    } else {
         
        $('.indicator li.active').prev().click();
    }
  
});


//create menu 

$(".menu .icon i").on("click",function(){
$('.menu,.menu ul').toggleClass('hide');
$(this).toggleClass('fa-times');

});




$('.config .icon').on('click',function(){
    $('.config').toggleClass('isvisible');

   if($('.config').hasClass('isvisible')){
    
   $('.config').animate({left:'0px'},1000);
}else {
    $('.config').animate({left:'-200px'},1000);
   }

});

$('.config .list li').on('click',function(){

//$("body").attr('data-color',$(this).data('color'));
$('.background').attr('data-color',$(this).data('color'));
//$('.background').animate({background:$('config .list li').data('color')},2000);

});

$('.animatedbar span').each(function(){
$(this).animate({width:$(this).data('progress')+ "%"},8000);
});

$('.num span').animate(2000,function(){
for (var i =0; i <= $('.num span').data('prog');i += 50){
      $(this).text(i)
}
});

function itter(){
$('.cards').on('click','.card',function(){
    var index = 0;
$(this).animate({left: '20%', marginTop:'20px'},500,function(){
      index--;
      $(this).css('z-index',index);
      
   // $(this).animate({left: $(this).css('left'),marginTop:0});
}).animate({left:$(this).css('left'), marginTop: '0px'},500);
});
};
itter();
function warn(){
$('.num').fadeOut(1000,function(){$(this).fadeIn(1000);
    warn();
});

}
$(".additem .fa-plus").one('click',function(){
var newItem = $("<div class='additem1'> <div>");
var img = $(this).parents('.additem').find('img').attr('src');
var newImg = $('<img>').attr('src',img);
newItem.append(newImg);


var newP = $('<p class="newp"></p>');
var p = $(this).parents('.addicon').siblings('p').text();
newP.append(p);



var newicon = $('<span class="delete">Delete</span>');
newicon.css("color",'white').css('background','red').css('border-radius','10px').css('display','inline-block').css('width','45px').css('line-height','20px').css('height','20px').css('padding','10px').css('margin','5px').css('margin-top','20px').css('cursor','pointer');
var icon = $('.addicon div').html();

var newAddIcon = $('<div></div>');
newAddIcon.append(icon);
newAddIcon.children().remove();
newAddIcon.append(newicon);


var caption = $("<div class='caption'></div>");
caption.append(newP);
caption.append(newAddIcon);
newItem.append(caption);

$('#cartsec').append(newItem);


calcAll();
newicon.on('click',function(){
    /* var del = $(this).parent();
     var del1 = del.parent();
      del1.parent().remove();
 */
 $(this).parents('.additem1').fadeOut(2000).detach();
 calcAll();

});

function calcAll(){
    var count = $('.countitem').text($("#cartsec .additem1").length);
}


warn();

});
});
