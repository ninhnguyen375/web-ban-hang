function access() {
  var ifr = document.getElementById('iframe_id');
  var ifr_doc = ifr.contentWindow.document;
  var check_click_add = ifr_doc.getElementsByClassName('them');
  var check_click_link = ifr_doc.getElementsByTagName('a');
  for (var i = 0; i < check_click_add.length; i++) {
    check_click_add[i].onclick = function() {
      mo_tbdn(this);
    }
  }
  for (var i = 0; i < check_click_link.length; i++) {
    check_click_link[i].onclick = function() {
      mo_tbdn(this);
    }
  }
  var so_trang = ifr_doc.getElementsByClassName('so_trang');
  for (var i = 0; i < so_trang.length - 1; i++) {
    so_trang[i].onclick = function(){
      scroll_to_top();
    }
  }
};
function scroll_to_top(){
  window.location = 'index.html#this_top_of_iframe';
}
function mo_tbdn(item) {
  var quaylai = document.getElementById('no');
  var dangnhap = document.getElementById('yes');
  var tbdn = document.getElementById('thong-bao-dang-nhap');
  var url = item.getAttribute('href');
  var get_class = item.getAttribute('class');
  var so_trang = item.getAttribute('class','so_trang');
  if (url != '#' && url != null && url != '' && get_class != 'so_trang') {
    window.location = url;
  }
  if (get_class == 'them') {
    tbdn.style.display = 'block';
    quaylai.onclick = function() {
      tbdn.style.display = 'none';
    }
    dangnhap.onclick = function() {
      window.location = 'dang-nhap.html';
    }
  }
};


function change_iframe(item) {
  window.top[0].location = item.value;
  console.log(item.value);
};
function back_to_home(item){
  var new_window = window.open('index.html');
  new_window.onload = function(){
    var a = new_window.document.getElementById('iframe_id');
    a.setAttribute('src', item.value);
    this.location += '#this_top_of_iframe';
  };
};
