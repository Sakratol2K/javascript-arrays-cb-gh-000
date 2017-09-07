var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var newArray = [element,...array];
  return newArray;
}

function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;

}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1);
  return newArray;

}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length-1);
  return newArray;
}
