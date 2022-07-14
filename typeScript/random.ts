/**
 * 随机产生一个整数
 * 
 * @param min 最小值
 * @param max 最大值
 * @returns 随机生成指定阈值的数字
 */

export function randomNumberGenerator(min:number,max:number):number {
    return Math.floor(Math.random()*(max - min) + min);
}