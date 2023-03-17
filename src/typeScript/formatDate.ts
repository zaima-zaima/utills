

/**
 * 将时间戳转换为指定格式时间
 * @param {string} timeStamp 时间戳
 * @param {string} symbol 间隔符号
 * @param {boolean} time 格式化时间是否存在H:m:s
 * @returns 
 */

export default function (timeStamp:string | number,symbol:string="-",time=false) {

    if(!timeStamp) {
        return null;
    }
  
    const date = new Date(+timeStamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');

    if(time) {
        const hour = date.getHours();
        const min = date.getMinutes();
        const seconds = date.getSeconds();
       return year + symbol + month + symbol + day + " " + hour + ":" + min + ":" + seconds;
    } else {
        return year + symbol + month + symbol + day;
    }
}