(function() {
  var app = angular.module('myStore', ['store-directives']);

 	app.controller('StoreController', ['$http',function($http){
    var store = this;
    store.products = [];
    $http.get('https://raw.githubusercontent.com/SamSunny95/Lab3-Sams_CapStore/63b154948c2c92027733be0fa964e873ac6208e5/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
