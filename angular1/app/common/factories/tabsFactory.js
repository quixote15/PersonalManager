/**
 * This factory is meant to help showing the tab scenarios 
 * Tab lis , create, update, delete on the billing cilcyes view
 */

angular.module('primeiraApp').factory('tabs', [ function() {
    // This is a ES15 pattern that creates a default value to a object {name = false}
   function show(owner, {
      tabList = false,
      tabCreate = false,
      tabUpdate = false,
      tabDelete = false
   }) {
      owner.tabList = tabList
      owner.tabCreate = tabCreate
      owner.tabUpdate = tabUpdate
      owner.tabDelete = tabDelete
     // console.log(owner)
   }

   return { show }
}])
