/**
 * non boolean values can be evaluated as truthy and falsy
 * 
 * 0, NaN, undefined, null, false, ''
 * 
 * everything else going to give an error or evaluate to true
 */

 result = '' || 'potato chip' //result is potato chip
 result = '' && 'potato chip' //result is ''  -- short circuiting
 result = 'dog' || 'cat' //result is dog  -- short circuiting
 result = 'dog' && 'cat' //result is cat

 /**
  * Can use this to do guard operator: object.methodName && object.methodName();
  * and the default operator: input || 'Default Field Value' 
  */