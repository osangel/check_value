module.exports = (obj)=>{
	return {
		isNotEmpty:isNotEmpty,
		isNotNull:isNotNull,
		isNotUndefined:isNotUndefined,
		isObj:isObj,
		objHasContent:objHasContent,
		isStr:isStr,
		strHasContent:strHasContent,
		end:end,
		checkObj:checkObj,
		checkStr:checkStr
	}
}


var result = true
var stepArr = []
var resArr = []

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var _isNotEmpty = function(tmp){                 //同时判断undefined和null
	if(tmp == null){
		result = false
	}
}
var _isNotNull = function(tmp){
	if (!tmp && typeof(tmp)!="undefined" && tmp!=0){                     //var a = undefined     a==null    结果为true   所以不能用a==null来判断
		result = false
	}
	
}
var _isNotUndefined = function(tmp){
	if(typeof(tmp) === 'undefined'){
		result = false
	}
	
}
var _objHasContent = function(obj){                                     //判断这个对象有内容
	for(var a in obj){
		return 
	}
	result = false
}
var _strHasContent = function(str){                                          // 判断字符串不为空字符串；  空格 制表符等算作有内容
	var _str = str
	if (_str.replace(/(^s*)|(s*$)/g, "").length ==0) 
	{ 
	 	result = false 
	} 
}
var _isStr = function(str){                                             //是字符串
	if(!(typeof(str) === 'string') == true)
		result = false
}

var _isObj = function(obj){												//是对象
	if(!(typeof(obj) === 'object')==true){
		result = false
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var isNotNull = function(tmp){
	stepArr.push({
		func:_isNotNull,
		key:tmp,
		funcName:'isNotNull'
	})
	return this
}
var isNotUndefined = function(tmp){
	stepArr.push({
		func:_isNotUndefined,
		key:tmp,
		funcName:'isNotUndefined'
	})
	return this
}
var isNotEmpty = function(tmp){
	stepArr.push({
		func:_isNotEmpty,
		key:tmp,
		funcName:'isNotEmpty'
	})
	return this
}
var objHasContent = function(obj){
	stepArr.push({
		func:_objHasContent,
		key:obj,
		funcName:'objHasContent'
	})	
	return this
}
var isObj = function(obj){
	stepArr.push({
		func:_isObj,
		key:obj,
		funcName:'isObj'
	})	
	return this
}
var isStr = function(str){
	stepArr.push({
		func:_isStr,
		key:str,
		funcName:'isStr'
	})	
	return this
}
var strHasContent = function(str){
	stepArr.push({
		func:_strHasContent,
		funcName:'strHasContent',
		key:str
	})	
	return this
}

/////////////////////////////////////////////////////////////////////////////////////组合方法//////////////////////////////////////////////////////////////////////////
var checkObj = function(obj){
	isNotEmpty.call(this,obj).isObj.call(this,obj).objHasContent.call(this,obj)
	return this
}
var checkStr = function(str){
	isNotEmpty.call(this,str).isStr.call(this,str).strHasContent.call(this,str)
	return this
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var end = function(cb){
	if(stepArr.length>0){
		var length = stepArr.length
		for(var i =0;i<length;i++){
			var value = stepArr[i]
			value.func(value.key)
			resArr.push({
				insert:value.key,
				func:value.funcName,
				result:result
			})
			if(result == false){
				if(cb){
					cb(false,resArr)
					return
				}
				else
					return false
			}
		}
		if(cb)
			cb(true,resArr)
		else
			return true
	}
	else{
		if(cb)
			cb(true,[])
		else
			return true
	}

}