$("#recipeBtn").click(function(){

  $('#recipeContent').html("");

var url = "https://api.edamam.com/search?app_id=9867db95&app_key=efd167d9a6093d14feffeb3b381b93ed&q=" + $('#recipeInput').val();

  if($("#health1").is(':checked')){
    url += '&health=vegetarian';
  }

  if($("#health2").is(':checked')){
    url += '&health=peanut-free';
  }

    if($("#health3").is(':checked')){
    url += '&diet=balanced';
  }

    if($("#health4").is(':checked')){
    url += '&calories=100-500';
  }

console.log(url);

  $.getJSON(url, function(result){

  }).done(function(data){
    if( data.count != 0 ){
    console.log(status);

    data.hits.forEach(function(r,i){
      var recipeItems = "";
      data.hits[i].recipe.ingredients.forEach(function(recipeItem){
        recipeItems += '<li>' + recipeItem.text + '</li>';
      });
      $('#recipeContent').append('<div class="recipeItem" data-menu="closed"><div class="recipeTitle">' + data.hits[i].recipe.label + '</div><img src="' + data.hits[i].recipe.image + '" class="recipeImage"><div class="yield">Serves ' + data.hits[i].recipe.yield + '</div><ul>' + recipeItems + '</ul></div>');
      $(".recipeItem").click(function(){
        $(this).css("height","auto");
      });
    });
  } else {
    $('#recipeContent').html('<h4>error</h4>');
    $('#recipeContent').append('<h1>Sorry, there was a problem finding a match.</h1>');
  }
  }).fail(function(jqxhr, textStatus, error){
    $('#recipeContent').html('<h4>' + textStatus + '</h4>');
    $('#recipeContent').append('<h1>Sorry, there was a problem finding a match.</h1>');
  });
});