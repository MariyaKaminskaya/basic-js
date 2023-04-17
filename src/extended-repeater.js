const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res;
 
  let arrStr = [];
  let arrAdd = [];
let add = (options.addition !== undefined) ? `${options.addition}` : "";
let separator = (options.separator !== undefined) ? `${options.separator}` : "+";
let addSeparator = (options.additionSeparator !== undefined) ? `${options.separator}` : "|";
let repeat =   (options.repeatTimes !== undefined) ?  options.repeatTimes : 1;
let repeatAdd =   (options.additionRepeatTimes !== undefined) ?  options.additionRepeatTimes : 1;

let additionRepStr;
if (add === "") {
  while (repeat-- > 0)
  {arrStr.push(str)};
  res = arrStr.join(`${separator}`);
  return res;

} else {
  while (repeatAdd-- > 0) {
    arrAdd.push(add)};
    additionRepStr = arrAdd.join(`${addSeparator}`);
    res =  `${str}${additionRepStr}${separator}`;
    res = res.repeat(repeat);
    let substrCount = `${separator}`.length;
    res= res.split("").reverse().join("");
    res = res.substring(substrCount);
    
    return res.split("").reverse().join("");
  }


}

module.exports = {
  repeater
};
