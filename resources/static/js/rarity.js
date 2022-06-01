let span = document.querySelectorAll('span'),
    heading = document.querySelectorAll('.heading2'),
    content = document.querySelectorAll('.content2'),
    nav = document.querySelector('.navbar1'),
    h1 = document.querySelector('h1');

const expandCircle = (e) => {
    let linkClicked = e.target.textContent;
    span[0].classList.remove('hidden');
    document.body.style.overflow = "auto";
    
    nav.style.zIndex = 99;
    
    for(let i=0; i < heading.length; i++) {

        if(linkClicked == heading[i].textContent) {
            content[i].classList.remove('col-lg-4');
            content[i].classList.add('col-lg-12');
            content[i].classList.remove('shrinkCircle');
            content[i].classList.add('expandCircle');
        } else if(linkClicked == "Styles") {
            span[0].classList.add('hidden');
            content[i].classList.remove('col-lg-12');
            content[i].classList.add('col-lg-4');
            content[i].classList.remove('shrinkCircle');
            content[i].classList.remove('expandCircle');
        } else {
            content[i].classList.remove('expandCircle');
            content[i].classList.add('shrinkCircle');
        }
    }
};

for(let i=0; i < span.length; i++) {
    span[i].addEventListener('click', expandCircle);
}
