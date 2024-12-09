const slogan = document.getElementById('slogan');

let isEnglish = false;

const translations = {
    pt: {
        
        slogan: 'Clique no botão para reescrever o texto!',
        
        btnText: 'clique aqui '
    },
    en: {
       
        slogan: 'Me de  5,3 por favor!',
  
        btnText: 'voltar texto'
    }
};

langBtn.addEventListener('click', function() {
    if (!isEnglish) {
        
        
        slogan.textContent = translations.en.slogan;
        
        isEnglish = true;
    } else {
     
        slogan.textContent = translations.pt.slogan;
        
        isEnglish = false;
    }
});
