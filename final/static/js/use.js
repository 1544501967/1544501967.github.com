$(function(){
    $(".u-select span").click(function(){
        $(this).addClass("u-select-selected").siblings().removeClass("u-select-selected");
        console.log($(this).index());
        if($(this).index()){
            $(".love-music").show().siblings().hide();
        }
        else {
            $(".new-music").show().siblings().hide();
        }
    })
})