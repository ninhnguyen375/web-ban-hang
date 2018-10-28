/*Thông báo đăng nhập khi click vào ô mua hàng hoặc thêm sản phẩm*/
var them = document.getElementsByClassName("them");
var quaylai = document.getElementsByClassName("no");
var dangnhap = document.getElementsByClassName("ok");
var tbdn = document.getElementsByClassName("thong-bao-dang-nhap");
var i;
for (i = 0; i < them.length; i++) {
  them[i].onclick = function() {
    tbdn[0].style.display = 'block';
  }
}
quaylai[0].onclick = function() {
  tbdn[0].style.display = 'none';
}
dangnhap[0].onclick = function() {
  window.location = "dang-nhap.html";
}
/* END-Thông báo đăng nhập khi click vào ô mua hàng hoặc thêm sản phẩm */


/* Phóng to ảnh sản phẩm */

var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
img.onclick = function() {
  modal.style.display = "block";
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}
/* End - Phóng to ảnh sản phẩm */
