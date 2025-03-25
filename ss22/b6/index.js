let arr=[3,1,0,7,2,0,0,6];
let count=0;
let check=prompt("mời bạn nhập một số nguyên: ");
if(check<0||isNaN(check)){
    console.log("số không hợp lệ");
}else{
    for(let i=0;i<arr.length;i++){
        if(check==arr[i]){
            count++;
        }
    }
    console.log(` số ${check} xuất hiện ${count} lần`);
}