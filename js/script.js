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

$(".hmenu3").click(function () {
  // 上下パターン
  //   $("nav").slideToggle(500);
  $(this).toggleClass("close");
  // return false これ以降何もしない
  return false;
});

// Bパターンの設定
$("body").click(function () {
  $(".hmenu3").removeClass("close");
});
