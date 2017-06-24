GoodsApp.service('GoodsApiResponseService', function () {
  var errorType = {
    GOODS_UNKNOWN_ERROR: 'GOODS_UNKNOWN_ERROR',
    GOODS_PROTOCOL_ERROR: 'GOODS_PROTOCOL_ERROR'
  };
  var Response = function (serverResponse) {
    this.response = serverResponse;
    this.errorStatus = false;
    this.errorType = null;
    this.errorCode = null;
    this.errorMessage = null;
  };
  /**
   *
   * @returns {*}
   */
  Response.prototype.getResults = function () {
    return this.response.results;
  };
  /**
   *
   * @returns {boolean}
   */
  Response.prototype.hasResults = function () {
    return !_.isEmpty(this.response.results);
  };

  Response.prototype.hasNotResults = function () {
    return _.isEmpty(this.response.results);
  };

  /**
   * Link of the next page
   * @returns {*|string|boolean|jQuery.next|(function(): Object)|next}
     */
  Response.prototype.getNextLink = function () {
    return this.response.next;
  };

  Response.prototype.getPrevLink = function () {
    return this.response.next;
  };

  /**
   * @returns {number|*}
   */
  Response.prototype.getCount = function () {
    return this.response.count;
  };

  return function (serverResponse) {
    return new Response(serverResponse);
  }
});
