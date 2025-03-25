let num = prompt("Nhập một số nguyên:");
if(num<0||isNaN(num)){
    console.log("dãy ko hợp lệ");
}else{
let reversedNum =num.split("").reverse().join("");
console.log("Số sau khi đảo ngược:", reversedNum);
}