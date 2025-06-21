
const urlEmail ="mailto:ayush_kumar24@outlook.com";
const urlLinkedin = "https://www.linkedin.com/in/jkayushkumar";
const urlFigma = "https://www.figma.com/@ayushkumar_in";
const urlInsta = "https://www.instagram.com/ayushkumar.in";
const urlResume = "assets/documents/AyushKumar_Resume.pdf"


function openNewTab(site){
    switch (site){
        case 'linkedin':
            window.open(urlLinkedin, '_blank').focus();
            break;
        case 'figma':
            window.open(urlFigma,'_blank').focus();
            break;
        case 'email':
            window.open(urlEmail,'_blank').focus();
            break;
        case 'insta':
            window.open(urlInsta,'_blank').focus();
            break;
        case 'resume':
            window.open(urlResume,'_blank').focus();
    }
}

function ctaClick(action){
    switch(action){
        case 'resume':
            break;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // console.log(document.getElementById('content').clientHeight);
    document.getElementById('sea').style.height = (document.getElementById('content').clientHeight) + 100 + "px";
    document.getElementById('background').style.height = (document.getElementById('content').clientHeight) + 100 + "px";
    document.getElementsByClassName('particles-js-canvas-el')[0].style.height = (document.getElementById('content').clientHeight) + 100 + "px";
    setTimeout(function() {
        // console.log(document.getElementsByClassName('particles-js-canvas-el')[0].style.height);
        window.dispatchEvent(new Event('resize'));
        setTimeout(function(){document.getElementById('mainLoader').style.display ="none";},2800);
    }, 100);
});