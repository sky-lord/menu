$("#recipeBtn").click(function(){
  
  $("#health1").click(function(){
  var url = "https://api.edamam.com/search?app_id=9867db95&app_key=efd167d9a6093d14feffeb3b381b93ed&health=vegetarian&q=" + $('#recipeInput').val();
  });

 var url = "https://api.edamam.com/search?app_id=9867db95&app_key=efd167d9a6093d14feffeb3b381b93ed&q=" + $('#recipeInput').val();

  $.getJSON(url, function(data){
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
  });
});