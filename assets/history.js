let videoClickCount = 1;
window.onload = function(){
    document.getElementById("btnSwitchVideo").title="Switch to Evil Ryu story video";
    }
     document.getElementById("btnSwitchVideo").addEventListener("click", ()=>{
            if(videoClickCount % 2!=0){
                document.getElementById("btnSwitchVideo").textContent="Normal Ryu";
                document.getElementById("normalVideo").style.display='none';
                document.getElementById("evilVideo").style.display='block';
                document.getElementById("btnSwitchVideo").title="Switch to normal Ryu story video";
                document.getElementById("RyuHistory").innerText="History of Evil Ryu";
            }
            else{
                document.getElementById("btnSwitchVideo").textContent="Evil";
                document.getElementById("evilVideo").style.display='none'; 
                document.getElementById("normalVideo").style.display='block';
                document.getElementById("btnSwitchVideo").title="Switch to Evil Ryu story video";
                document.getElementById("RyuHistory").innerText="History of Ryu";
            }
            videoClickCount++;
               });       
    
    