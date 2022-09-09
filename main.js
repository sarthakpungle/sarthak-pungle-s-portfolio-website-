function changeImageOver() 
{
document.getElementById("profile").src="my.jpg";
document.getElementById("profile").style.height="500px";

}

function changeImageout()
{
    document.getElementById("profile").src="https://rizeyond.com/assets/images/thaer.png";
}

function ok(){
    hi.style.color="cyan";
    hi.style.border="5px solid indigo";
    hi.style.borderRadius="50px";
    document.getElementById("hi").innerHTML="Hi I am sarthak";
}

function ko(){
    hi.style.color="yellow";
    hi.style.border="0px"; 
    document.getElementById("hi").innerHTML="Hi!";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }