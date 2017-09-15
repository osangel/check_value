'use strict';
var check = require('./index.js')
var obj1 = null
var obj2 = undefined
var obj3 = {}
var obj4 = {a:1}
// check().checkObj(obj1).end(function(res,result){
// 	console.log(result)
// 	console.log(res)
// })
// check().checkObj(obj2).end(function(res,result){
// 	console.log(result)
// 	console.log(res)
// })
// check().checkObj(obj3).end(function(res,result){
// 	console.log(result)
// 	console.log(res)
// })
// check().isNotEmpty(obj4).isObj(obj4).objHasContent(obj4).end(function(result,res){
// 	console.log(result,res)
// })
check().checkStr('').end(function(res,aa){
	console.log(res,aa)
})
// check().checkObj(obj4).end(function(res,result){
// 	console.log(result)
// 	console.log(res)
// })


// function getParamName() {}

// function fn() {
//   var param1 = 0
//   var a = 2

//   console.log(getParamName(a))
// }

// function callWithVariableName(fn) {
//   eval('(' + fn.toString().replace(/\bgetParamName\s*\(([a-zA-Z_$][\w_$]*)\)/g, function(u,v) {
//     return "'" + v + "'"
//   }) + '())')
// }

// callWithVariableName(fn)