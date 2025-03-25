let arr=[3,1,0,7,2,0,0,6,1,1];
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);