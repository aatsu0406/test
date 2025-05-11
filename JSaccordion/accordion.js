(() => {  //即時関数でグローバル汚染防止

  class Accordion {
    //初期化
    constructor(obj){

      console.log(obj.hookName);
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while(index < triggerLen){
        $trigger[index].addEventListener('click',(e) => this.clickHandler(e));  //クラス内では関数の呼び出しにはthis.をつけないといけない（this：クラスそのものを参照している）
        index++;
      }
    }

    //クリックしたら実行される処理
    clickHandler(e){
      e.preventDefault();

      const $target = e.currentTarget;  //クリックされた要素自身を取得
      const $content = $target.nextElementSibling;  //隣接した兄弟要素を取得

      if($content.style.display === 'block'){
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      };
    };
  }

  const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
  });

  const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
  });
})();