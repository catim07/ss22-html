let arr=[3,1,2,0,0,6,6,6,6,6,6,7];
let count=0, valuejuan=0;
for(let i=0;i<arr.length;i++){
    let value=arr[i],countcheck=0;
    for(let j=0;j<arr.length-1;j++){
        if(value==arr[j]){
            countcheck++;
        }
    }
    if(countcheck > count || (countcheck === count && value < valuejuan)){
        count=countcheck;
        valuejuan=arr[i];
    }
}
console.log(valuejuan);