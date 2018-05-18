var marqueeContent=new Array();
marqueeContent[0]="<a href=https://baike.baidu.com/item/%E6%96%87%E6%98%9F%E4%BC%8A/20791148?fr=aladdin target=_blank>个人介绍</a>";
marqueeContent[1]="<a href=https://m.weibo.cn/status/4224060466007749target=_blank>微博安利</a>";
marqueeContent[2]="<a href=https://search.bilibili.com/all?keyword=%E6%96%87%E6%98%9F%E4%BC%8A&from_source=banner_searchtarget=_blank>相关视频</a>";
var marqueeInterval=new Array();
var marqueeId=0;
var marqueeDelay=2000;
var marqueeHeight=20;
function initMarquee() {
    var str=marqueeContent[0];
    document.write('<div id="marqueeBox" style="overflow:hidden;width:250px;height:'+marqueeHeight+'px" onmouseover="clearInterval(marqueeInterval[0])" onmouseout="marqueeInterval[0]=setInterval(\'startMarquee()\',marqueeDelay)"><div>'+str+'</div></div>');
    marqueeId++;
    marqueeInterval[0]=setInterval("startMarquee()",marqueeDelay);
}
function startMarquee() {
    var str=marqueeContent[marqueeId];
    marqueeId++;
    if(marqueeId>=marqueeContent.length) marqueeId=0;
    if(document.getElementById("marqueeBox").childNodes.length==1) {
        var nextLine=document.createElement('DIV');
        nextLine.innerHTML=str;
        document.getElementById("marqueeBox").appendChild(nextLine);
    }
    else {
        document.getElementById("marqueeBox").childNodes[0].innerHTML=str;
        document.getElementById("marqueeBox").appendChild(document.getElementById("marqueeBox").childNodes[0]);
        document.getElementById("marqueeBox").scrollTop=0;
    }
    clearInterval(marqueeInterval[1]);
    marqueeInterval[1]=setInterval("scrollMarquee()",20);
}
function scrollMarquee() {
    document.getElementById("marqueeBox").scrollTop++;
    if(document.getElementById("marqueeBox").scrollTop%marqueeHeight==(marqueeHeight-1)){
        clearInterval(marqueeInterval[1]);
    }
}
initMarquee();
