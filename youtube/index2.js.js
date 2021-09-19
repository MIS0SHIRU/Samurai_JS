const question = 'おーい　といえば？';
const answers = [
    'おまえぇ',
    'カルシウム',
    'リズム天国',
    'お茶'
];
const correct = 'カルシウム';

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

$button[0].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button'[0].textContent){
        window.alert('正解！');
    } else {
        window.alert('おしい！');
    }
});