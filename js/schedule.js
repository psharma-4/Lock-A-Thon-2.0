var faqCard= document.getElementsByClassName('faq-card');
console.log(faqCard)
var j;
for( j=0;j<faqCard.length;j++){
    faqCard[j].addEventListener('click',function(){
        // this.childNodes[1].childNodes[1].classList.toggle("active");
        var answer = this.childNodes[1].childNodes[3];
        if (answer.style.display === "block") {
            answer.style.display = "none";
          } else {
            answer.style.display = "block";
          }
        console.log(answer)
    })
}