export default function (callback:Function,params?:any,empty?:boolean,duration:number=1000) {
    clearTimeout(callback.prototype.id);
    return new Promise(resolve=>{
        callback.prototype.id  = setTimeout(()=>{
            if(empty && typeof params === "string" && !params.trim()) {
                    resolve(null);
            }
            resolve(callback(params && params));
        },duration)
    });
}