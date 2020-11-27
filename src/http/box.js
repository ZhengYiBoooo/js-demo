// 防抖

export function dobiiue(fun, wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            return fun.call(this, Array);
        }, wait);
    };
}




// 节流
export function throttle(func, wait) {
    var timer = null;
    return function () {
        var _this = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                return func.apply(_this, args);
            }, wait);
        }
    };
}


// 数组扁平化  可以将多行嵌套数组合并在同一个数组里面
export function flatten(arr) {
    let result = []
    for (let i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result;
}


// 时间
export function timeout(){
    var x;
    var d=new Date().getDay();
    switch(d){
        case 0:x='今天是星期日';break;
        case 1:x='今天是星期一';break;
        case 2:x='今天是星期二';break;
        case 3:x='今天是星期三';break;
        case 4:x='今天是星期四';break;
        case 5:x='今天是星期五';break;
        case 6:x='今天是星期六';break;
    }
    return x;
}
