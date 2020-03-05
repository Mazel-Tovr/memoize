

export function memoize(fn) {
    if (typeof fn !== 'function') {
        return null;
    } 
    const cache = new Map();  
    return (...args) => { 
        let arg = JSON.stringify(args);
        console.log(arg);
        console.log(cache.keys);
        if(cache.has(arg))
        {
            return cache.get(arg);
        }
        else
        {
            let result = fn(...args); 
            cache.set(arg,result); 
            return result;
        } 
    }
}

// const add = (a,b)=>(a*b);
// const memoizeAdd =memoize(add);
// console.log(memoizeAdd(1,2));
// console.log(memoizeAdd(1,2));
// console.log(memoizeAdd(1,2));

