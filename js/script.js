$(".hmenu").click(function () {
  // 上下パターン
  //   $("nav").slideToggle(500);
  $(this).toggleClass("close");
  // return false これ以降何もしない
  return false;
});

// Bパターンの設定
$("body").click(function () {
  $(".hmenu").removeClass("close");
});

$(".hmenu2").click(function () {
  // 上下パターン
  //   $("nav").slideToggle(500);
  $(this).toggleClass("close");
  // return false これ以降何もしない
  return false;
});

// Bパターンの設定
$("body").click(function () {
  $(".hmenu2").removeClass("close");
});
