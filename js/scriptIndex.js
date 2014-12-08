$(document).ready(
function() {


$("#partieGauche").niceScroll();
$("#partieDroite").niceScroll();
$("#partieDroite").getNiceScroll().hide();

//$("#images li").css("height", $(".imagesDroite").innerHeight());
  var a=20;
  var lastScroll = 0;
  var images= $('#partieDroite');
  var imageRajoute =0;

  setTimeout(function(){
    $( "#titrePrincipal" ).removeClass( "titreIntro" );
  },100);
    $( "#li4" ).removeClass( "navIntro" );
  setTimeout(function(){
    $( "#li3" ).removeClass( "navIntro" );
  },500);
  setTimeout(function(){
    $( "#li2" ).removeClass( "navIntro" );
  },1000);
  setTimeout(function(){
    $( "#li1" ).removeClass( "navIntro" );
  },1500);
  
 $('a').click(function() {
        $.smoothScroll({
            scrollElement: $('#partieGauche'),
            scrollTarget: $(this).attr('href')
        });
        return false;
    });
  $('a').click(function() {
        $.smoothScroll({
            scrollElement: $('#partieDroite'),
            scrollTarget: $(this).attr('href')
        });
        return false;
    });



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

});
