//returns an array of favorited objects
//not yet using this


var favorites = angular.module('FavoritesService'), []);

  var this.favorites = [];
//  var this.currentUser = {};


  this.popFavorites = function() {
    if(Meteor.user()){
      currentUser = Meteor.user();
      Meteor.call('getFavorites', currentUser.favoritedResources, function(error, result){
           if(error){
             console.log(error.reason);
             return;
           }
         Session.set('faves', result);
         console.log("result "+ result);
       });

       this.favorites = Session.get('faves');
      console.log(this.favorites);
      return this.favorites;

    }
  }


  this.isFavorite = function(resourceID) {
    var flag = false;
    for(res in Meteor.user().favoritedResources) {
      //console.log(Meteor.user().favoritedResources[res]);
      if(resourceID === Meteor.user().favoritedResources[res]) {
        flag = true;
        break;
      }
    }

    if(flag) {
      //console.log("is favorite");
      return true;
    }
    else {
      //console.log("not favorite");
      return false;
    }
  }

  this.toggleFavorite = function(resourceID) {

    if(this.isFavorite(resourceID)) {
      console.log("removing favorite");
      Meteor.call('removeFavorite', resourceID);
    }
    else {
      console.log("adding favorite");
      Meteor.call('addFavorite', resourceID);
    }
    console.log(Meteor.user().favoritedResources);
  }

  this.getFaves = function(){
    if(Meteor.user()) {
      if(!this.favorites){
        if( this.favorites.length == 0){
          return this.popFavorites();
        }

      }
      else {
        return this.favorites;
      }
    }
  }

})
