let vatly = +prompt("Nhập điểm môn Vật Lý");
let hoahoc = +prompt("Nhập điểm môn Hóa Học");
let sinhhoc = +prompt("Nhập điểm môn Sinh Học");
let diemtong = vatly + hoahoc + sinhhoc;
let diemtrungbinh = diemtong / 3;
document.writeln("Điểm môn Vật Lý:" + " " + vatly)
document.writeln("Điểm môn Hóa Học:" + " " + hoahoc)
document.writeln("Điểm môn Sinh Học:" + " " + sinhhoc)
document.writeln("Điểm tổng:" + " " + diemtong);
document.writeln("Điểm trung bình:" + " " + diemtrungbinh);
