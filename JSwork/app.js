//クイズ文、選択肢、答えを配列に格納
const quiz = [
  {
    question:'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
    answers:[
      'スーパーファミコン',
      'プレステ２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct:'ニンテンドーDS'
  }
  , {
    question:'糸井重里が規格に関わった、任天堂の看板ゲームといえば？',
    answers:[
      'MOTHER2',
      'スーパーマリオブラザーズ3',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct:'MOTHER2'
  }
  , {
    question:'ファイナルファンタジーⅣの主人公の名前は？',
    answers:[
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct:'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');  //定数前に$つけることでHTMLのオブジェクト入ってると認識しやすい（お約束事）
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

//関数呼び出し
setupQuiz();

const clickHandler = (e) => { //e:イベントのオブジェクト
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちら実行
    setupQuiz();
  } else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e) => { 
    clickHandler(e);
  });
  handlerIndex++;
};