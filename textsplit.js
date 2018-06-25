// var splitByLastDot = function(text) {
//     var index = text.lastIndexOf('.');
//     return [text.slice(0, index), text.slice(index + 1)]
// }

// console.log(splitByLastDot('123.2345'))


Str = '123.23';

var a = Str.substring(0, Str.lastIndexOf("."))

console.log(a);