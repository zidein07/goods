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
    /**
     * Push item to localStorage Array
     * @param id
     * @param item
     * @returns {number}
     */
    pushItem: function (id, item) {
      var dataFromStorage = this.getItem(id);
      var newElementsOfStorage = _.isEmpty(dataFromStorage) ? [] : dataFromStorage;
      if (_.isArray(newElementsOfStorage)) {
        newElementsOfStorage.push(item);
        this.setItem(id, newElementsOfStorage);
        return _.size(newElementsOfStorage);
      }
    },
    /**
     * Set new item to localStorage by id
     * @param id
     * @param data
     */
    setItem: function (id, data) {
      localStorage.setItem(id, JSON.stringify(data));
    },
    
    remove: function (id) {
      this.setItem(id, null);
    },
    getItem: function (id) {
      return JSON.parse(localStorage.getItem(id));
    }
  }
}]);
