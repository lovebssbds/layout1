$(function(){
    console.log("load");
    $(".main-nav").mouseenter(function(){
        $(".main-nav .drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".main-nav .drop").stop().slideUp();
    })

    //tap
})