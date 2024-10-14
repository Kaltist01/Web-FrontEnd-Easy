var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX =x+"px";
    back.style.backgroundPositionY =y+"px";
}

var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""){
        alert("账号不能为空")
        return false;
    }else if(mm.value==""){
        alert("密码不能为空");
        return false;
    }else if(zh.value!="kaltist"||mm.value!="123456"){
        alert("账号或密码错误，可选择游客登录");
        return false;
    }
}

