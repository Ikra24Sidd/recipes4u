let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");
 
for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}

let switchTab=document.getElementById("switch");
switchTab.addEventListener("click",function()
  {
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[1].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[1].classList.add("active");

  });
//SIGN UP VALIDATION 
document.getElementById("signUp").onclick = function() {signUp()};

function myFunction2() {
    var x = document.getElementById("demo2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function signUp(){
  var email= document.getElementById("email").value;  
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  if ( name != "" && password != "" && email!=""){
    // window.alert ("Sing Up Successful!!!");
    document.getElementById("demo1").innerHTML ="Sign Up Successful!!!"
    myFunction2();
    setInterval(function(){window.location = "home.html"; },3000); // Redirecting to other page.
    }
  else{
    document.getElementById("demo2").innerHTML ="Please fill all the details!!"
  }
  return false;
}

//LOG IN VALIDATION

document.getElementById("LogIn").onclick = function() {LogIn()};
function myFunction() {
    var x = document.getElementById("demo4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function LogIn(){
  var email= document.getElementById("email1").value;  
  var password = document.getElementById("password1").value;
  if ( password != "" && email!=""){
    document.getElementById("demo3").innerHTML ="Logged In Successfully!!!"
    myFunction();
    setInterval(function(){window.location = "home.html"; },3000); 
    
      // Redirecting to other page.
    }
  else{
    document.getElementById("demo4").innerHTML ="Please fill all the details!!"
  }
  return false;
}

// HOVER ON BUTTONS

function mouseOver() {
  document.getElementById("signUp").style.backgroundColor = "rgb(25, 138, 25)";
}

function mouseOut() {
  document.getElementById("signUp").style.backgroundColor = "#9f48e6";
}

function mouseOver1() {
    document.getElementById("LogIn").style.backgroundColor = "rgb(25, 138, 25)";
  }
  
  function mouseOut1() {
    document.getElementById("LogIn").style.backgroundColor = "#9f48e6";
  }
  //login home

  function gohome(){
    window.location = "home.html";
  }