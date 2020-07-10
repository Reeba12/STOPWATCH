var m=0;
var s=0;
var ms=0;
var min = document.getElementById("m")
var millisec = document.getElementById("ms")
var sec= document.getElementById("s") 
var interval;
function reset(){
    m=0;
    s=0;
    ms=0;
    min.innerHTML =m;
    sec.innerHTML=s;
    millisec.innerHTML=ms;
    clearInterval(interval)
    document.getElementById("btn1").disabled=false;
}
function stop(){
    clearInterval(interval)
    document.getElementById("btn1").disabled= false;
    // document.getElementById("mins").innerHTML = m;
    // document.getElementById("sec").innerHTML = s;
    // document.getElementById("msec").innerHTML = ms;
    // save(m,s,ms);
    return (m,s,ms);
}
function save(){
    document.getElementById("mins").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
    document.getElementById("msec").innerHTML = ms;
}
// save(stop())
function disablebtn(){
    document.getElementById("btn1").disabled= true;
 start();  
}
function start(){
    interval = setInterval(function milisec(){
    ms++
    millisec.innerHTML =ms;
    if(ms>=100){
       s++
        ms=0;
    sec.innerHTML = s;
      
    }
    else if (s>=60) {
        m++
        s=0;
        min.innerHTML = m;
    }
    },10)
    }
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      