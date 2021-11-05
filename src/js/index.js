// Função que mostra a div com base na seleção do usuário
const showDiv = (element, div) => {
    let areas = document.getElementsByClassName('area-default');
    Object.keys(areas).forEach(item => {
        areas[item].style.display = 'none';
    });
    
    let actives = document.getElementsByClassName('active');
    Object.keys(actives).forEach(item => {
        actives[item].classList.remove('active');
    });

    element.classList.add('active');
    div.style.display = 'flex';
}

// Função que inclui uma nova linha de parâmetro/cabeçalho
const includeNewRow = (divDad) => {
    let div = document.createElement('div');
    div.classList.add('values');

    let inputKey = document.createElement('input');
    inputKey.classList.add('key');
    inputKey.placeholder = 'Key';

    let inputValue = document.createElement('input');
    inputValue.classList.add('value');
    inputValue.placeholder = 'Value';

    div.appendChild(inputKey);
    div.appendChild(inputValue);
    divDad.appendChild(div);
}

// 
const selectTypeAuth = (a) => {
    console.log(a);
}