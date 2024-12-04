
// A másik kód a Szabályok oldal script tagjében van

const defaultBackgroundColor = '#FFE4C4';
const defaultColor = '#2f4f4f';
const defaultBorderColor = '#000';

const articles = document.querySelectorAll('article');
const asides = document.querySelectorAll('aside')

window.addEventListener('load', function () {
    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme) {
        const colors = savedColorScheme.split(',');
        const [backgroundColor, color, borderColor] = colors;
        applyStyles(backgroundColor, color, borderColor);
    } else {
        applyStyles(defaultBackgroundColor, defaultColor, defaultBorderColor);
    }
});

function applyStyles(backgroundColor, color, borderColor) {
    articles.forEach(function (article) {
        article.style.backgroundColor = backgroundColor;
        article.style.color = color;
        article.style.border = `2px solid ${borderColor}`;
    });
    asides.forEach(function (aside) {
        aside.style.backgroundColor = backgroundColor;
        aside.style.color = color;
        aside.style.border = `2px solid ${borderColor}`;
    });
}

document.getElementById('gomb1').addEventListener('click', function () {
    applyStyles('#841617', '#fff', '#FDF9D8');
    localStorage.setItem('colorScheme', '#841617,#fff,#FDF9D8');
});

document.getElementById('gomb2').addEventListener('click', function () {
    applyStyles('#FA4616', '#fff', '#003087');
    localStorage.setItem('colorScheme', '#FA4616,#fff,#003087');
});

document.getElementById('gomb3').addEventListener('click', function () {
    applyStyles('#0000CD', '#fff', '#fff');
    localStorage.setItem('colorScheme', '#0000CD,#fff,#fff');
});

document.getElementById('gomb4').addEventListener('click', function () {
    applyStyles('#FF7300', '#fff', '#000');
    localStorage.setItem('colorScheme', '#FF7300,#fff,#000');
});

document.getElementById('gomb5').addEventListener('click', function () {
    applyStyles('#9E1B32', '#fff', '#828A8F');
    localStorage.setItem('colorScheme', '#9E1B32,#fff,#828A8F');
});

document.getElementById('gomb6').addEventListener('click', function () {
    applyStyles('#1E90FF', '#fff', '#FFD100');
    localStorage.setItem('colorScheme', '#1E90FF,#fff,#FFD100');
});

document.getElementById('gomb7').addEventListener('click', function () {
    applyStyles('#8C1515', '#fff', '#4D4F53');
    localStorage.setItem('colorScheme', '#8C1515,#fff,#4D4F53');
});

document.getElementById('gomb8').addEventListener('click', function () {
    applyStyles('#B7410E', '#fff', '#fff');
    localStorage.setItem('colorScheme', '#B7410E,#fff,#fff');
});

document.getElementById('reset').addEventListener('click', function () {
    applyStyles(defaultBackgroundColor, defaultColor, defaultBorderColor);
    localStorage.setItem('colorScheme', `${defaultBackgroundColor},${defaultColor},${defaultBorderColor}`);
});//

applyStyles()