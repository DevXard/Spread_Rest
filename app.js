// function restVals(...vals){
//     return vals.reduce((sum, next) => sum + next)
// }

// const nums = [4, 5, 88, 123, 0.92, 34]

// Math.max(...nums)

let filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


let findMin = (...nums) => Math.min(...nums);

let mergeObjecs = (obj1, obj2) => ({...obj1, ...obj2});

let doubleAndReturnArgs = (arr, ...vals) => {
    let newVals = vals.map((val) => val * 2)
    return [...arr, ...newVals]
}

let removeRandomItems = (...itmes) => {
    //create a new array
    let arr = [...itmes];
    // get random index from array
    let index = Math.floor(Math.random() * arr.length)
    console.log(index)
    //remove a random item
    arr.splice(index, 1)
    return arr
}

let extend = (arr1, arr2) => [...arr1, ...arr2];

let addKeyValue = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val
    return newObj
}

let removeKey = (obj, key) => {
    let newObj = {...obj};

    delete newObj[key]

    return {...newObj}
}

let combine = (obj1, obj2) => ({...obj1, ...obj2});

let update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}