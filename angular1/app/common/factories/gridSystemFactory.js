angular.module('primeiraApp').factory('gridSystem', [ function() {

  function toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classes = ''
    /**
     * This function return the grid pattern depending on its input params
     *  12 6 -> col-xs-12 col-sm-6
     *  12 6 4 -> col-xs-12 col-sm-6 col-md-4
     * to use this: <meu-component grid="12 6"></meu-component>
     * Also remember to include this factory on meuComponent.js
     */
    if(cols[0]) classes += `col-xs-${cols[0]}`
    if(cols[1]) classes += ` col-sm-${cols[1]}`
    if(cols[2]) classes += ` col-md-${cols[2]}`
    if(cols[3]) classes += ` col-lg-${cols[3]}`

    return classes
  }

  return { toCssClasses }
}])
