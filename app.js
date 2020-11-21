const question = 'FCバルセロナで歴史上最高と呼ばれる選手は誰?';
const answers = [
  'クライフ',
  'ロナウジーニョ',
  'メッシ',
  'プジョル'
];
const correct = 'メッシ';

const $button = document.getElementsByTagName('button');

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();




//ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});

$button[1].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});

$button[2].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});

$button[3].addEventListener('click', (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});