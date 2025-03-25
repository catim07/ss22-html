let arr=[1,3,5,2,6];
let chan=0,le=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        chan+=arr[i];
    }else{
        le+=arr[i];
    }
}
console.log(` tổng số chẵn là ${chan}
    tổng số lẻ là: ${le}`);