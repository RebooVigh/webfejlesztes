
// A másik kód a Szabályok oldal script tagjében van

const alaphatter = '#FFE4C4';
const alapszoveg = '#2f4f4f';
const alapkeret = '#000';

const articles = document.querySelectorAll('article');
const asides = document.querySelectorAll('aside')

window.addEventListener('load', function () {
    const kedvenccsapat = localStorage.getItem('csapatszin');
    if (kedvenccsapat) {
        const szinek = kedvenccsapat.split(',');
        const [hatter, szoveg, keret] = szinek;
        szintvalt(hatter, szoveg, keret);
    } else {
        szintvalt(alaphatter, alapszoveg, alapkeret);
    }
});

function szintvalt(hatter, szoveg, keret) {
    articles.forEach(function (article) {
        article.style.backgroundColor = hatter;
        article.style.color = szoveg;
        article.style.border = `2px solid ${keret}`;
    });
    asides.forEach(function (aside) {
        aside.style.backgroundColor = hatter;
        aside.style.color = szoveg;
        aside.style.border = `2px solid ${keret}`;
    });
}

document.getElementById('gomb1').addEventListener('click', function () {
    szintvalt('#841617', '#fff', '#FDF9D8');
    localStorage.setItem('csapatszin', '#841617,#fff,#FDF9D8');
});

document.getElementById('gomb2').addEventListener('click', function () {
    szintvalt('#FA4616', '#fff', '#003087');
    localStorage.setItem('csapatszin', '#FA4616,#fff,#003087');
});

document.getElementById('gomb3').addEventListener('click', function () {
    szintvalt('#0000CD', '#fff', '#fff');
    localStorage.setItem('csapatszin', '#0000CD,#fff,#fff');
});

document.getElementById('gomb4').addEventListener('click', function () {
    szintvalt('#FF7300', '#fff', '#000');
    localStorage.setItem('csapatszin', '#FF7300,#fff,#000');
});

document.getElementById('gomb5').addEventListener('click', function () {
    szintvalt('#9E1B32', '#fff', '#828A8F');
    localStorage.setItem('csapatszin', '#9E1B32,#fff,#828A8F');
});

document.getElementById('gomb6').addEventListener('click', function () {
    szintvalt('#1E90FF', '#fff', '#FFD100');
    localStorage.setItem('csapatszin', '#1E90FF,#fff,#FFD100');
});

document.getElementById('gomb7').addEventListener('click', function () {
    szintvalt('#8C1515', '#fff', '#4D4F53');
    localStorage.setItem('csapatszin', '#8C1515,#fff,#4D4F53');
});

document.getElementById('gomb8').addEventListener('click', function () {
    szintvalt('#B7410E', '#fff', '#fff');
    localStorage.setItem('csapatszin', '#B7410E,#fff,#fff');
});

document.getElementById('reset').addEventListener('click', function () {
    szintvalt(alaphatter, alapszoveg, alapkeret);
    localStorage.setItem('csapatszin', `${alaphatter},${alapszoveg},${alapkeret}`);
});//

szintvalt()
