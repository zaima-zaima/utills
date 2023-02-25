// 得到一个被排除的数组

/**
 * 
 * @param {Array} originArray 完整的原数组
 * @param {Array} eArray 需要被排除的数组
 * @param {Boolean} isOriginal 数组的每一项是否是不可引用数据，默认值为false
 * @param {String} attach 如果每一项是可引用的数据，需要指定唯一标识，默认为id
 */

export function eliminate (originArray: Array<any>,eArray:Array<any>,isOriginal:boolean=false,attach="id") {
    let boolean = true;
    let array = [] as Array<any>;
    if(!isOriginal) {
        for(let i = 0; i < originArray.length; i ++) {
            for(let j = 0; j < eArray.length; j ++) {
                if(originArray[i][attach] === eArray[j][attach]) {
                    boolean = false;
                }
            }
            if(boolean) {
                array.push(originArray[i]);
            }
            boolean = true;
        }
    }
    return array;
}