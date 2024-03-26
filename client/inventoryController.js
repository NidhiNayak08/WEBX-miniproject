// inventoryController.js

angular.module("inventoryApp").controller("InventoryController", [
  "$scope",
  "InventoryService",
  function ($scope, InventoryService) {
    // Initialize inventory list
    $scope.inventoryItems = [];

    // Load inventory items
    $scope.loadInventory = function () {
      InventoryService.getInventoryItems().then(function (response) {
        $scope.inventoryItems = response.data;
      });
    };

    // Create a new inventory item
    $scope.createInventory = function () {
      InventoryService.createInventoryItem($scope.newItem)
        .then(function (response) {
          $scope.inventoryItems.push(response.data); // Add new item to the list
          $scope.newItem = {}; // Clear form
        })
        .catch(function (error) {
          console.error("Error creating inventory item:", error);
        });
    };

    // Update an inventory item
    $scope.updateInventory = function (item) {
      InventoryService.updateInventoryItem(item._id, item)
        .then(function (response) {
          // Handle update success
        })
        .catch(function (error) {
          console.error("Error updating inventory item:", error);
        });
    };

    // Delete an inventory item
    $scope.deleteInventory = function (id, index) {
      InventoryService.deleteInventoryItem(id)
        .then(function (response) {
          $scope.inventoryItems.splice(index, 1); // Remove item from array
        })
        .catch(function (error) {
          console.error("Error deleting inventory item:", error);
        });
    };

    // Load initial inventory
    $scope.loadInventory();
  },
]);
