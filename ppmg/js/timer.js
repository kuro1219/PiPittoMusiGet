//タイマーID
let timerID;

//「スタート」ボタン押下時に呼び出される関数。
function start() {

  timerID = setTimeout(function () {
    window.location.href = 'newresult.html';
  }, 301 * 1000);
}

//イベントリスナー登録（スタート）
document.getElementById('start').addEventListener('click', start, false);