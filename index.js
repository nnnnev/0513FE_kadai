
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
    }
}
