const urlLinkedin = "https://www.linkedin.com/in/jkayushkumar";
const urlFigma = "https://www.figma.com/@ayushkumar_in";
const urlEmail ="mailto:ayush_kumar24@outlook.com";

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
    }
}