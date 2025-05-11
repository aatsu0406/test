//即時関数：グローバル汚染（他のファイルで使っている変数とぶつかりエラーになる）を防ぐために即時関数で囲ってあげる（お作法）
(() => {

  const $doc = document;  //WebページのDOM全体を取得（DOM：HTMLページを構成する要素）
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]'); //DOM要素の中から条件に当てはまるDOMを取得する
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active'; //大文字で書いてあげると定数ということを明示的にできる（お作法）
  const navLen = $nav.length;

  //初期化
  const init = () => {  //JavaScriptで最初に実行させたいという命令の時に使う
    $content[0].style.display = 'block';
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault(); //リンク要素を無効化できる);

    //クリックされたnavとそのdataを取得
    const $this = e.target; //eのtarget：どの要素がクリックされたかというDOM要素を取得するプロパティ
    const targetVal = $this.dataset.nav //dataset：そのDOM要素のデータ属性を取得するプロパティ

    //対象外のnav,contents全て一旦リセットする
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    };

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適用・発火
  let index = 0;
  while(index < navLen){
    $nav[index].addEventListener('click',(e) => {
      handleClick(e)
    });
    index++;
  };
})();