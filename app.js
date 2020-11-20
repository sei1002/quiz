const question = 'FCバルセロナで歴史上最高と呼ばれる選手は誰?';
const answers = [
  'クライフ',
  'ロナウジーニョ',
  'メッシ',
  'プジョル'
];
const correct = 'メッシ';

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];

//ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[0].textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});