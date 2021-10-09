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



const navBar=document.querySelector('.navbar')
var navbarBrand=document.querySelector('.navbar-brand')
window.addEventListener('scroll',()=>{
  var scroll=window.scrollY;
  console.log(scroll)
  if(scroll>500){
    navbarBrand.innerHTML='<img src="./images/robolution.jpg" alt="" style="width: 60px;" />'
    navBar.classList.add('navbar-dark')
    // navBar.classList.add('bg-dark')
    navBar.classList.add('fixed-top')
  }
  else if(scroll<500){
    navbarBrand.innerHTML='<img src="./images/bit.png" alt="" style="width: 60px;" />'
    navBar.classList.remove('navbar-dark')
    // navBar.classList.remove('bg-dark')
    navBar.classList.remove('fixed-top')
  }
})