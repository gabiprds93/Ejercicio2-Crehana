let object = { 'a': [{ 'b': { 'c': 3 } }] };
let path = 'a.b.c';
let defaultValue = 'default';

let object2 = {a: { b: { c: 3 } } };
let path2 = 'a.b.c';
let defaultValue2 = 5; 

let object3 = {a: { b: { c: 3 } } };
let path3 = 'a.b.d';
let defaultValue3 = 5; 

const object4 = {a: 1, b: { c: 1 }};
let path4 = 'b.c';
let defaultValue4 = 4; 

// const a = getIn(object, path, defaultValue);
// console.log("resultado", a);

// const b = getIn(object2, path2, defaultValue2);
// console.log("resultado", b);

// const c = getIn(object3, path3, defaultValue3);
// console.log("resultado", c);

const d = getIn(object4, path4, defaultValue4);
console.log("resultado", d);

function getIn(object, path, defaultValue)
{
    // debugger;
    let pathArray = path.split('.');  
    let result;
    for(let n in object)
    {
        console.log("n", n);
        if(n == pathArray[0])
        {
            object = object[pathArray[0]];
            path = pathArray.slice(1).join('.');
            if(path == "")
            {
                return object;
            }
            result = getIn(object, path, defaultValue)
        }
    }
    if(result == undefined)
    {
        return defaultValue;
    }
    else
    {
        return result;        
    }
}