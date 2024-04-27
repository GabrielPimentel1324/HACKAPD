const div = document.getElementById('myDiv');

div.addEventListener('mouseover', () => {
    div.classList.add('highlighted');
    
});

div.addEventListener('mouseout', () => {
    div.classList.remove('highlighted');
    
});

function text() {
    const rowtext = document.getElementById('textcontent');
    rowtext.innerHTML ='Feito por squad 10!';
}

