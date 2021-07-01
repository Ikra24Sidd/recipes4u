AOS.init();

// nav section
$(document).ready(function()
    {
    $(".search-btn").mouseover(function()
    {
        $(".search-control").addClass("search-control-hover");
        $(".search-btn").addClass("search-hover");
    });
    $(".search-control").mouseout(function()
    {
        $(".search-control").removeClass("search-control-hover");
        $(".search-btn").removeClass("search-hover");
    });
});

$(document).ready(function(){

    $('.fa-hamburger').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });
});

$('nav ul li a').click(function(){
    $('.fa-hamburger').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
});

$(window).on('scroll load',function(){
    if($(window).scrollTop() > 10){
        $('#header').addClass('header-active');
    }else{
        $('#header').removeClass('header-active');
    }
});

// search bar
function searchVal(){
    var val=$("#search-input").val();
    if(val=="mughlai")
    {
        window.location="inner/menu1.html";
    }
    if(val=="french")
    {
        window.location="inner/menu2.html";
    }
    if(val=="italian")
    {
        window.location="inner/menu3.html";
    }
    if(val=="mexican")
    {
        window.location="inner/menu4.html";
    }
    if(val=="thai")
    {
        window.location="inner/menu5.html";
    }
    if(val=="seekh")
    {
        window.location="inner/recipe12.html";

    }
    if(val=="shahi")
    {
        window.location="inner/recipe16.html";

    }
    if(val=="seafood")
    {
        window.location="inner/recipe53.html";

    }
    if(val=="corn")
    {
        window.location="inner/recipe56.html";

    }
    
}

// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.controls .buttons').click(function(){

    $(this).addClass('button-active').siblings().removeClass('button-active');

    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('#popular .image').show(400);
    }else{
        $('#popular .image').not('.'+filter).hide(200);
        $('#popular .image').filter('.'+filter).show(400);
    }

});

$('#send').click(function(){msgAlert()});

   function msgAlert()
   {
    var email= $('#email').val();	
	var name = $('#name').val();
	var message = $('textarea').val();
	if ( message != "" && email != "" && name != "" ){
		window.alert ("Message Sent Successfully!!!");
		}
	else{
		window.alert("Invalid credentials!!!")
	}
	return false;
}
// email
// $("#subBtn").click(function(){
    
// })
function sendEmail() {
    var sendId=$("#sub").val();
	Email.send({
        Host: "smtp.gmail.com",
        Username: "recipes4uiu@gmail.com",
        Password: "24ikraumra03",
        To: sendId,
        From: "recipes4uiu@gmail.com",
        Subject: "recipes4u Subscribed!!",
        Body: "Thankyou for subscribing recipes4u!. Enjoy the mouth watering cuisines from all over the world!!!",
      })
        .then(function (message) {
          alert("Successfully subscribed!")
        });
}

function sendEmail2() {
    var name=$("#name").val();
    var sendMsg=$("#email").val();
    var msg=$('textarea').val();
	Email.send({
        Host: "smtp.gmail.com",
        Username: "recipes4uiu@gmail.com",
        Password: "24ikraumra03",
        To: sendMsg,
        From: "recipes4uiu@gmail.com",
        Subject: "Thankyou for the feedback!!",
        Body: "Thankyou " + name+ " for your valuable feedback. Enjoy the mouth watering cuisines from all over the world!!! <br> Here's a copy of your feedback <br><br><br>" + msg,
      })
        .then(function (message) {
          alert("Thanks for the feedback!")
        });
}

// 'receiver@email_address.com',



















// 