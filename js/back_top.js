document.querySelector("#content").onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.querySelector("#content").scrollTop > 100) {
        document.getElementById("back_top").style.display = "block";
    } else {
        document.getElementById("back_top").style.display = "none";
    }
}
// 点击按钮，返回顶部
function topFunction() {
    // animate
    // document.querySelector("#content").scrollTop=0;
    $("#content").animate({scrollTop: '0px'},500);
    // while(document.querySelector("#content").scrollTop>0){
    //     document.querySelector("#content").scrollTop-=20;
        
    // }
    // document.querySelector("#content").scrollTop = 0;
}