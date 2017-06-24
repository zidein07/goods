GoodsApp.factory('GoodsApiService',['$http', 'GoodsApiResponseService', function ($http, GoodsApiResponseService) {
  var apiLink = '/';

  function starWarsApiHandler(serverResponse) {
    return GoodsApiResponseService(serverResponse.data);
  }
  return {
    buildLink: function (path) {
      return apiLink + path;
    },
    getGoods: function (params) {
      return $http({
        url: 'http://swapi.co/api/starships/',
        method: 'GET',
        params: params
      }).then(starWarsApiHandler);
    }
  }
}]);
