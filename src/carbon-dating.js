const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  const MODERN_ACTIVITY =15;
  const HALF_LIFE_PERIOD =5730;
  const k = 0.693 / HALF_LIFE_PERIOD;
 if (typeof str === "string" && typeof +str ==="number" && +str > 0 && +str <=15) {
  let res = Math.log(MODERN_ACTIVITY/str)/k;


  return Math.ceil(res);
 }else {
  return false};
  
}

module.exports = {
  dateSample
};
