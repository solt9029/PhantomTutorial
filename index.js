var page=require("webpage").create();
var system=require("system");
var url="http://solt9029.com";//デフォルトのURLはsolt9029ページ

if(system.args.length>1){
	url=system.args[1];
}

var time=Date.now();

page.open(url, function(status) {
	//キャプチャできたかどうかステータスを表示する
  console.log("Status: " + status);

  if(status === "success") {
  	time=Date.now()-time;//かかった時間（キャプチャに）
  	var capture_img_path='./capture_imgs/'+Date.now()+".png";//保存する場所

    page.render(capture_img_path);//キャプチャ画像を保存する

    console.log(capture_img_path+" saved.");
    console.log(time+" milliseconds used.");
  }
  phantom.exit();
});