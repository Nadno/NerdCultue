const sliderImage = [
    { 
        img_url: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Aprenda como desenvolver sua lógica',
        description: 'Hoje em dia com toda tecnologia disponível, ter uma boa habilidade lógica pode ser de grande importância!'
    },
    {
        img_url: 'https://images.unsplash.com/photo-1547659165-68bd40a0856c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Entenda porque nootebook gamers não duram muito',
        description: 'Quem nunca quis poder parar em um cantinho longe de casa e poder jogar aquele game incrível?'
    },
    {
        img_url: 'https://images.unsplash.com/photo-1583634852966-130c15654305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        title: 'Quanto custaria ter uma sala de jogos?',
        description: 'Se você nunca sonhou em ter uma sala só de jogos, então você não é um gamer de verdade!'
    }
];

const popularEl = document.querySelector('.popular-container');

const renderImg = id => {
    const img = sliderImage[id];
    
    popularEl.querySelector('img').setAttribute('src', img.img_url);
    popularEl.querySelector('img').setAttribute('alt', `Noticia-${img.title}`);
    popularEl.querySelector('.title').innerHTML = "";
    popularEl.querySelector('.title').appendChild(document.createTextNode(img.title));
    popularEl.querySelector('.description').innerHTML = "";
    popularEl.querySelector('.description').appendChild(document.createTextNode(img.description));
};

let sliderId = 0;

const popularButton = popularEl.querySelector('.popular-button');

popularButton.addEventListener('click', (e) => {
    const direction = e.target.getAttribute('id');

    if(direction === 'next') {
        if(sliderId === 2) {
            sliderId = 0;
        } else {
            sliderId++;
        }
    } else if (direction === 'back') {
        if(sliderId === 0) {
            sliderId = 2;
        } else {
            sliderId--;
        }
    }

    renderImg(sliderId);
});

renderImg(sliderId);