/**
 * This is a simple component created to simplifie header creations
 */
angular.module('primeiraApp').component('contentHeader', {
  //This is used to define how the component inputs will behave
  //@ is type text
  //> is a one-way binding and is usually used with variables
  //& is used for outputs
  bindings: {
    name: '@', //header name
    small: '@' //header content
  },
  template:  `
    <section>
    <h1>{{$ctrl.name}}</h1>
    <small>{{$ctrl.small}}</small>
    </section>
  `
});
