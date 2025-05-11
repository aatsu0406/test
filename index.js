//JSの基礎文法
//変数
let unko = 'Hello world!';

//定数
const bigUnko = 'He..Hello world!';

//配列
let inoki = ['いーち','にーい','さーん','ダーー！！'];

//ループ文
// let index = 0; //カウント指定
// while(index < inoki.length){
//   //繰り返したい命令文
//   console.log(inoki[index]);
//   index++; //数字を1足す
// }

//if /else
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...');
// }

//関数
const test = (arg) => {  //アロー関数の例
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...');
  }
};

// test(3); //関数の呼び出し

//オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!')
  }
};

//出力
// console.log(unko2.goToilet());
// console.log(unko2.color);
// console.log(window.innerWidth); //wibdow関数、ブラウザの横幅などの情報を見たいときに使える
// window.alert('Hi'); //ブラウザ上でポップアップ表示させられる

// console.log(document); //表示している全体のオブジェクト表示
// console.log(document.getElementsByTagName('button')[1]); //HTMLのタグ取得

//イベント ユーザーが何かしらのアクションをすること（ボタン押したり、スクロールしたり）
document.getElementsByTagName('button')[0].addEventListener('click',() => { //指定したイベント発生時の処理
  //命令を書く
  window.alert('Hello world!')
});

