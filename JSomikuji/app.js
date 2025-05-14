'use strict';

//ランダムな画像のパスを取得
function getRandomImage (){
  const number = Math.floor(Math.random() * 7);
  // const imagePath = './images/omikuji_' + number.toString() + '.png'; //toString：数字を文字列に変換する
  const imagePath = `./images/omikuji_${number.toString()}.png`; //上記よりこの書き方が好まれる
  return imagePath;
}

function playOmikuji(){
  const timer = setInterval(function(){ //setInterval：関数を繰り返し実行できるwindowのメソッド、第２引数にはミリ秒指定
    document.querySelector('#js-result').setAttribute('src', getRandomImage())  //setAttribute：対象のHTMLタグに対して任意の属性の値を変更できる
  }, 100);
  //3秒後にスロットが止まる処理
  setTimeout(function(){  //setTimeout：一定時間後に処理を実行出来るメソッド、第２引数にはミリ秒指定
    clearInterval(timer) //  clearInterval:setIntervalで実行された処理を取り消せる
  }, 3000);
}

//ボタンを押すとスロットが回転する処理
document.querySelector('#js-button').addEventListener('click', playOmikuji);