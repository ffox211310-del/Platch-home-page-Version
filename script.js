function goGame(url){
  if(url === "#"){
    alert("まだ準備中！");
    return;
  }
  window.location.href = url;
}

// メニュー開閉
function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// ページ表示
function showPage(id){
  document.getElementById("menu").style.display = "none";
  document.getElementById(id).style.display = "block";
}

// 戻る
function goBack(){
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
}
