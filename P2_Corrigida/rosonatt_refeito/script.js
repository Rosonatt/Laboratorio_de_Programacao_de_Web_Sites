const slogan = document.getElementById('slogan');

let isEnglish = false;

const translations = {
    pt: {
        slogan: 'Clique no botão para reescrever o texto!',
        btnText: 'clique aqui',
        color: 'black'
    },
    en: {
        slogan: 'Me de 5,3 por favor!',
        btnText: 'voltar texto',
        color: 'red' 
    }
};

langBtn.addEventListener('click', function() {
    if (!isEnglish) {
        slogan.textContent = translations.en.slogan;
        slogan.style.color = translations.en.color;
        isEnglish = true;
    } else {
        slogan.textContent = translations.pt.slogan;
        slogan.style.color = translations.pt.color;
        isEnglish = false;
    }
});
