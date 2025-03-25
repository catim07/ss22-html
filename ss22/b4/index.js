let num=prompt("mời bạn nhập dãy số: ");
let arr=num.split("");
let check=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>check){
        check=arr[i];
    }
}
console.log("số lớn nhất trong dãy số là: "+check);