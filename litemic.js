
//配置参数
var w=[""];

for(var i=0;i<w.length;i++){
var iframe = document.createElement("iframe");
iframe.hidden=true;
iframe.src = w[i];
iframe.onload = function() {
    this.parentNode.removeChild(this);    
};
document.body.appendChild(iframe);
}
