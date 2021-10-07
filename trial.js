// console.log('lol')
const text='BUILD - LOCK - ACHIEVE'
var textHeading=document.querySelector('.intro-secondary-heading')
var ind=0;
var displaytext=' ';
(function type_writer(){
    displaytext=text.slice(0,ind++)
    // console.log(displaytext)
    if(ind==text.length+2){
        ind=1
        displaytext='&nbsp;'
    }
    textHeading.innerHTML=displaytext
    setTimeout(type_writer,400);
}());