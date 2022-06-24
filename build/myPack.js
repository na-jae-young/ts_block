//@ts-check  // 타입스크립트의 보호와 체크를 받는다. 자바스크립트의 코드들을 검사하여 제대로 작동되지않음 
// jsDoc  자바스크립트 코드를 바꾸지 않고 주석을 달아주는것만으로도 타입스크립트가 알아서 해석 /**   */ 
/**
 *
 * @param {object} config
 * @param {string}config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
}
/**
 *
 * @param {number} num
 * @returns number
 */
export function exit(num) {
    return num + 1;
} //
