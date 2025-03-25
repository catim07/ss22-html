let check=1,count=0,arr=[];
do{
    let chose=+prompt(`
        1. Nhập vào mảng
        2. Hiển thị mảng
        3. Thêm phần tử
        4. Sửa phần tử
        5. Xóa phần tử
        6. Thoát
        mời bạn chọn số: `);
        switch(chose){
            case 1:
                let value=+prompt("mời bạn nhập phần tử: ");
                arr.push(value);
                count++;
                break;
            case 2:
                if(count==0){
                    console.log("chưa có phần tử trong mảng");
                }else{
                        alert(arr);
                }
                break;
            case 3:
                if(count==0){
                    console.log("chưa có phần tử trong mảng");
                }else{
                    let index=+prompt("mời bạn nhập vị trí: ");
                    let value=prompt("mời bạn nhập giá trị: ");
                    arr.splice(index,0,value);
                }
                break;
            case 4:
                if(count==0){
                    console.log("chưa có phần tử trong mảng");
                }else{
                    let index=+prompt("mời bạn nhập vị trí: ");
                    let value=prompt("mời bạn nhập giá trị: ");
                    arr.splice(index,1,value);
                }
                break;
            case 5:
                if(count==0){
                    console.log("chưa có phần tử trong mảng");
                }else{
                    let index=+prompt("mời bạn nhập vị trí: ");
                    arr.splice(index,1);
                }
                break;
            case 6:
                check=0;
                break
        }
    
}while(check!=0);

