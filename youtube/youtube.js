//変数

let unko = 'Hello World!';

//unko = 'Hello World2!!';

//定数

const bigUnko = 'He..Hell..Hello World!';
//bigUnko = 'Hello!';

//配列
const inoki = ['いーち','にーい','さーん','ダーー！！'];

//ループ文
//let index = 0;
//while(index < inoki.length){
//    console.log(inoki[index])
//    index++;
//}

//if / else
//if(inoki.length > 5){
//    console.log('ボンバイエ！');
//}else {
//    console.log('ボンバ…！');
//}

//関数
const test = (arg) => {
    if(inoki.length > arg){
        console.log('ボンバイエ！');
    }else {
        console.log('ボンバ…！');
    }
}

//オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint'
    goToilet: () => {
        console.log('Hello World!');
    }
};

console.log(window.alert);