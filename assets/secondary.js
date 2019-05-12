let clickCount = 1;
window.onload = function(){document.getElementById("btnSwitchAvatar").title="Switch to Evil Ryu avatar";}
document.getElementById("btnSwitchAvatar").addEventListener("click", ()=>{
    if(clickCount % 2!=0){
        document.getElementById("btnSwitchAvatar").textContent="Normal";
        document.getElementById("avatarNormal").style.display='none';
        document.getElementById("avatarEvil").style.display='block';
        document.getElementById("btnSwitchAvatar").title="Switch to normal Ryu avatar";
    }
    else{
        document.getElementById("btnSwitchAvatar").textContent="Evil";
        document.getElementById("avatarEvil").style.display='none'; 
        document.getElementById("avatarNormal").style.display='block';
        document.getElementById("btnSwitchAvatar").title="Switch to Evil Ryu avatar";
    }
     clickCount++;
       });