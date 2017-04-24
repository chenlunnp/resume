$(function(){

	alert("您好，很期待可以和你取得联系！");
	var sm_items  = $(".sm_item");
	var stu_contents = $(".stu_content");

//焦点轮播
	sm_items.each(function(index) {
		var itemNode = $(this);
		itemNode.mouseover(function() {
			itemNode.addClass('item_selected').siblings().removeClass('item_selected');
			var index = itemNode.index();
			stu_contents.eq(index).fadeIn(300).siblings().fadeOut(300);
		});
	});

//自动轮播
	var  i = 0;
	var timer = setInterval(autoplay,3000);

	function autoplay(){
		i++;
		if( i == 3){
			i = 0;
		};
		// console.log(i);
		stu_contents.eq(i).fadeIn(300).siblings().fadeOut(300);
		sm_items.eq(i).addClass('item_selected').siblings().removeClass('item_selected');
	};

	$("#studyMessage").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(autoplay,3000);
	});

//点击轮播
	var prev = $("#btns .left_btn"),
		next = $("#btns .right_btn");

	prev.click(function(){
		i--;
		if(i == -1){
			i = 2;
		};
		stu_contents.eq(i).fadeIn(300).siblings().fadeOut(300);
		sm_items.eq(i).addClass('item_selected').siblings().removeClass('item_selected');
	});

	next.click(function(){
		autoplay();
	});
//返回到顶部
	var backTop = $("#backTop");
	backTop.click(function() {
		$("body,html").animate({scrollTop:0}, 500);
	});
});

