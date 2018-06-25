var chocolateBars = {"snickers", "hundard grand", "kitkat", "skittles"} 

function addElementToEndOfArray(array, element) {
  return (element, ... array)
}
  
function destructivelyAddElementToEndOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  return (... array, element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementinArray(element, index){
  return element(index)
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
  return array
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.slice(0, array.length - 1);
}