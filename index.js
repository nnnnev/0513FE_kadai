// 参考例

// let fruits = "りんご";
// console.log(fruits);

// let username = "ささきももこ";
// console.log(username);

// 練習問題

// let myname = "佐々木もも子";
// let company = "NEV";
// let favorite = "歌うこと";
// let favoriteNumber = "2";

// console.log("みなさんこんにちは！！！！！！！\n私は"
// + myname + "といいます。\n所属は"
// + company + "です。\n好きなことは"
// + favorite + "です。\n好きな数字は"
// + favoriteNumber + "です。\nよろしくお願いします！！！！");


// 練習問題

// let point = 69;

// 80点以上なら合格
// 70点以上ならもうちょっと(70～79)
// それ以外は不合格
// …をコンソールに出力

// if (point >= 80) {
//     console.log("合格");
// } else if (point < 70) {
//     console.log("不合格");
// } else {
//     console.log("もうちょっと");
// }



// 202305FE講習課題・fizzbuzz問題

for (let count = 1; count <= 100; count++) {
    if (count % 3 === 0) {
        console.log('fizz');
    } else if (count % 5 === 0) {
        console.log('buzz');
    }   else if (count % 15 === 0) {
            console.log('fizzbuzz');

    } else {
        console.log(count);
        console.log(count);

    }
}