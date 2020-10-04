/*
if(confirm('Вы согласны нажать на эту кнопку?')){
    document.write('<h1>Спасибо за согласие!</h1>');
}else {
    document.write('<h4>Извините за беспокойство</h4>');
}
*/

var ansver = prompt('Вы согласны нажать на эту кнопку?');

if(ansver){
    console.log(ansver);
}else {
    console.log('Извините за беспокойство');
}