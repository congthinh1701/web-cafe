
{
    useId:[
        {
            maDonHang:'',
            total:'',
            address:{},
            note:'',
            name:'',
            email:'',
            phone:'',
            product:[]
        }
    ]
}

thuật toán lưu dữ liệu cookie

1/ add vào cookie 1 useId user
2/ onChange lưu giỏ hàng vào firebase theo userId
3/ xét nếu userId cookie trùng với firebase thì hiển thị 
4/ thiết lập thời gian xóa cookie 
5/ nếu cookie bị xóa thì sẽ xóa dữ liệu từ firebase
link tham khảo
https://completejavascript.com/tim-hieu-ve-http-cookie-voi-javascript/

cách 2

lưu giỏ hàng vào firebase với key là userId 
load trang web nếu userId user == với key giỏ hàng thì load ra giỏ hàng hiện có