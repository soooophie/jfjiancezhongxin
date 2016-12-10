/**
 * Created by xuefei on 2016/8/29.
 */
$(function(){
    // $('#js-list li').hover(function(){
    //     $(this).siblings().find('a').removeClass('rehov').addClass('hov');
    // },function(){
    //     $(this).siblings().find('a').addClass('rehov').removeClass('hov');
    // });
    ////////////////// menu  //////////////////////
    $('.js-nav li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    },function(){
        $(this).removeClass('active');
    });
    /////////////////  首页轮播  //////////////////
    var liLenth = ($('.js-picbox').find('li').length) * (230+15);
    $('.js-picbox').css('width',liLenth);
    $('.js-prev').click(function(){
        prev();
    });
    $('.js-next').click(function(){
        next();
    });
});

var num = 1;
function prev(){

    var picBox = $('.js-picbox');
    var liNum = picBox.find('li').length;

    var picBoxLeft = Math.abs(parseInt(picBox.css('left')));
    var remian = parseInt(liNum * (230+15) - Math.abs(picBoxLeft));

    if(num <= liNum){
        if(remian <= 950){
            $('.js-prev').addClass('prevgray');
            return;
        }else{
            $('.js-prev').removeClass('prevgray');
            $('.js-next').removeClass('nextgray');
            num++;
            picBox.stop().animate({
                left : -num*(230+15)
            });
        }

    }
};
function next(){

    var picBox = $('.js-picbox');

    if(parseInt(picBox.css('left')) == 0){
        $('.js-next').addClass('nextgray');
        return;
    }else{
        $('.js-prev').removeClass('prevgray');
        $('.js-next').removeClass('nextgray');
        num--;
        picBox.stop().animate({
            left : -num*(230+15)
        });
    }

};