const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

///function filterOutOdds(...restOfNums) {
    /// return restOfNums.filter((a) => a % 2 === 0);
/// }
/// Is this acceptable too? 

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//I understand why that works but why wouldn't t he following work - 
// const doubleAndReturnArgs = (arr, ...nums) => [arr, ...nums * 2]
// Wouldn't just arr without the periods in front give whatever is in the array?

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

// the following was my solution and looking at doubleAndReturnArgs above it seems like it would be fine -
// const extend = (arr1, arr2) => [...arr1, ...arr2]

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}