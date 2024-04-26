let obj1={
    name:"person",age:5
}
let obj2={age:5,name:"person"}


if(compare(obj1,obj2)){
    console.log("equal");
}else{
    console.log("not equal");
}

function compare(obj1,obj2){
    let str1=JSON.stringify(Object.keys(obj1).sort());  
    let str2=JSON.stringify(Object.keys(obj2).sort());
    return str1===str2
}