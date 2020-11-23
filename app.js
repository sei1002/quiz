const quiz = [
  {
    question: 'FCバルセロナで歴史上最高と呼ばれる選手は誰?',
    answers: [
      'クライフ',
      'ロナウジーニョ',
      'メッシ',
      'プジョル'
    ],
    correct: 'メッシ'
  },{
    question: 'FCバルセロナの永遠のライバルと呼ばれるマドリードがホームのチームはどれ?',
    answers: [
      'エスパニョール',
      'レアル・マドリード',
      'アトレティコ・マドリード',
      'レアル・ソシエダ'
    ],
    correct: 'レアル・マドリード'
  },{
    question: 'FCバルセロナのサッカー哲学を植え付けた人物といえば誰?',
    answers: [
      'クライフ',
      'マラドーナ',
      'メッシ',
      'ライカールト'
    ],
    correct: 'クライフ'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) =>{
  if(correct === e.target.textContent){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  };
}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}