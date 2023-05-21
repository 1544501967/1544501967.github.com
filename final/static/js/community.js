var community={
    url: ['static/media/7.png','static/media/8.png',"static/media/9.png"],
    user_text: ["薛子谦","周杰伦","房东的猫"],
    title: ["橘子海","写给黄淮","我用什么把你留住"],
    text: ["YES,it really,really,really could happen",
            "你是我患得患失的梦啊！我是你可有可无的人",
        "为什么 在放手时刻眼泪会掉落"]
}
console.log(community.title[0]);
console.log(community.text[0]);
$(function(){
    $.each(community.title,function(index,data){
        $(".r_title").eq(index).html(data);
        $(".user_text").eq(index).html(community.user_text[index]);
    }),
    $.each(community.text,function(index,data){
        
        $(".r_text").eq(index).html(data);
    }),
    $.each(community.url,function(index,data){
        $(".main_img").eq(index).css("background-image","url('"+data+"')")
    })
})