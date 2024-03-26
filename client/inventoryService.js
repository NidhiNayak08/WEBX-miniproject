angular.module("inventoryApp").service("InventoryService", [
  "$http",
  function ($http) {
    const baseUrl = "http://localhost:3001/inventory";

    // Get all inventory items
    this.getInventoryItems = function () {
      return $http.get(baseUrl);
    };

    // Create a new inventory item
    this.createInventoryItem = function (item) {
      return $http.post(baseUrl, item);
    };

    // Update an existing inventory item
    this.updateInventoryItem = function (id, item) {
      return $http.put(`${baseUrl}/${id}`, item);
    };

    // Delete an existing inventory item
    this.deleteInventoryItem = function (id) {
      return $http.delete(`${baseUrl}/${id}`);
    };
  },
]);
