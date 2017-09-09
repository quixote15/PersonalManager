angular.module('primeiraApp').component('valueBox', {
  /**
   * This component manages the lte admin boxes that will be displayed on the billing cycles
   * This component uses the gridSystem Factory
   * Note the bindings values uses camelCase but we use the dash
   * like this camel-case=""
   */
  
  bindings: {
    grid: '@', //css grid system info
    colorClass: '@', //bootstrap color class
    value: '@', // value credits or debits
    text: '@', //paragrah
    iconClass: '@' //bootstrap icon class
  },

  //Injecting the gridSystem Factory into this controller
  controller: [
    'gridSystem',
    function(gridSystem) {
      //function onint is called only when the controller and binding are initialized
      //any questions search for angular lifecycles!
      this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
    }
  ],
  //could use templateUrl
  template: `
  <div class="{{ $ctrl.gridClasses }}">
    <div class="small-box {{ $ctrl.colorClass }}">
      <div class="inner">
        <h3>{{ $ctrl.value }}</h3>
        <p>{{ $ctrl.text }}</p>
      </div>
      <div class="icon">
        <i class="{{ $ctrl.iconClass }}"></i>
      </div>
    </div>
  </div>
  `
});
