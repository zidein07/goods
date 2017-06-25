GoodsApp.factory('$storage', [function () {
  return {
    /**
     *
     * @param id
     * @param item
     * @param params in current case it's name
     */
    removeItem: function (id, item, params) {
      // TODO: В будущем можно будет доработать сделать фильтрацию таких массивов [1,2,3,4] и тд
      this.setItem(id, _.filter(this.getItem(id), function (storageItem) {
        return storageItem[params] !== item[params];
      }));
      return this.getItem(id);
    },
    pushItem: function (id, item) {
      var dataFromStorage = this.getItem(id);
      var newElementsOfStorage = _.isEmpty(dataFromStorage) ? [] : dataFromStorage;
      newElementsOfStorage.push(item);
      this.setItem(id, newElementsOfStorage);
      return _.size(newElementsOfStorage);
    },
    setItem: function (id, data) {
      localStorage.setItem(id, JSON.stringify(data));
    },
    getItem: function (id) {
      return JSON.parse(localStorage.getItem(id));
    }
  }
}]);
