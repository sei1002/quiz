const question = 'FCバルセロナで歴史上最高と呼ばれる選手は誰?';
const answers = [
  'クライフ',
  'ロナウジーニョ',
  'メッシ',
  'プジョル'
];
const correct = 'メッシ';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

//ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
  if(correct === $button[0].textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});