$(document).ready(
function() {

$("#partieGauche").niceScroll();
$("#partieDroite").niceScroll();
$("#partieDroite").getNiceScroll().hide();

  var a=20;
  var lastScroll = 0;
  var images= $('#partieDroite');
  var imageRajoute =0;

  logoCentre();
  $(window).resize(function(e){
    logoCentre();
  });
  window.onload = function(){
      logoCentre();
  }
  setTimeout(function(){
    $( "#titrePrincipal" ).removeClass( "titreIntro" );
  },200);
    $( "#li1" ).removeClass( "navIntro" );
  setTimeout(function(){
    $( "#li2" ).removeClass( "navIntro" );
  },400);
  setTimeout(function(){
    $( "#li3" ).removeClass( "navIntro" );
  },700);
  setTimeout(function(){
    $( "#li4" ).removeClass( "navIntro" );
  },1000);
  setTimeout(function(){
    $( "#li5" ).removeClass( "navIntro" );
  },1300);
  setTimeout(function(){
    $( "#li6" ).removeClass( "navIntro" );
  },1600);
  
 $('.navScroll').click(function() {
        $.smoothScroll({
            scrollElement: $('#partieGauche'),
            scrollTarget: $(this).attr('href')
        });
        return false;
    });
  $('.navScroll').click(function() {
        $.smoothScroll({
            scrollElement: $('#partieDroite'),
            scrollTarget: $(this).attr('href')
        });
        return false;
    });
  $("#journal").css({ "background-size": $("#journal").innerHeight()+" 100%" })

$("#partieGauche").scroll(function() {
 a=$("#partieDroite").scrollTop();
  var st = $(this).scrollTop();
  if (st > lastScroll){
  	a+=20;
  }
  else {
  	a-=20;
  }
  $('#partieDroite').bind('scroll', function(){
    if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
    {
  	 images.append($('#images').html());
     imageRajoute++;
    }
  })

  $("#partieDroite").scrollTop(a);
  lastScroll = st;
  if($(this).scrollTop() > 200) {
    $( "#personnage1" ).css( "opacity", "1" );
  }
});

$('#partieGauche').mousewheel(function(evt){
    if($('#partieGauche').scrollTop() + $('#partieGauche').innerHeight()+300>=$('#partieGauche')[0].scrollHeight){
          var st = $(this).scrollTop();
            a+=20;
          $("#partieDroite").scrollTop(a);
          lastScroll = st;
      }
});

$('#partieDroite').mousewheel(function(evt){
 	$('#partieDroite').bind('scroll', function(){
  if($(this).scrollTop() + $(this).innerHeight()+300>=$(this)[0].scrollHeight){
	 images.append($('.conteneurImages').html());
   imageRajoute++;
    supprimerImages();
  }
  })
});

function supprimerImages(){
    if(imageRajoute>3){
  $('.conteneurImages').children('ul:first-child').remove();
  }
}

function logoCentre(){
  var hauteurFenetre = $(window).height();

  $( "#sectionLogo" ).css( "height", hauteurFenetre);
  var hauteurMargeLogo = $(window).height()/2- $( "#logo" ).height()/2+30;
  $( "#logo" ).css( "padding-top", hauteurMargeLogo);
}

});
