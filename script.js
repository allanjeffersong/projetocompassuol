// script.js

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');
    const itemCountSelect = document.getElementById('item-count');
    
    // Dados dos itens
    const itemData = [
        {
            class: 'container1',
            imageClass: 'imagem1',
            descontoClass: 'desconto30',
            descontoText: '-30%',
            name: 'Syltherine',
            description: 'Stysh cafe chair',
            price: 'Rp 2.500.000',
            oldPrice: 'Rp 3.500.000'
        },
        {
            class: 'container2',
            imageClass: 'imagem2',
            descontoClass: null,
            descontoText: null,
            name: 'Leviosa',
            description: 'Stysh cafe chair',
            price: 'Rp 2.500.000',
            oldPrice: null
        },
        {
            class: 'container3',
            imageClass: 'imagem3',
            descontoClass: 'desconto50',
            descontoText: '-50%',
            name: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rp 7.000.000',
            oldPrice: 'Rp 14.000.000'
        },
        {
            class: 'container4',
            imageClass: 'imagem4',
            descontoClass: 'newverde',
            descontoText: 'New',
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000',
            oldPrice: null
        }
    ];
  
    // Função para criar um item com base nos dados fornecidos
    function createItem(data) {
        const item = document.createElement('div');
        item.classList.add(data.class);
  
        const image = document.createElement('div');
        image.classList.add(data.imageClass);
        item.appendChild(image);
  
        if (data.descontoClass && data.descontoText) {
            const desconto = document.createElement('div');
            desconto.classList.add(data.descontoClass);
            desconto.textContent = data.descontoText;
            item.appendChild(desconto);
        }
  
        const textContainer = document.createElement('div');
        textContainer.classList.add('textcontainer');
  
        const name = document.createElement('h2');
        name.classList.add('sylt');
        name.textContent = data.name;
        textContainer.appendChild(name);
  
        const description = document.createElement('p');
        description.classList.add('stysh');
        description.textContent = data.description;
        textContainer.appendChild(description);
  
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('priscado');
  
        const price = document.createElement('p');
        price.classList.add('p1');
        price.textContent = data.price;
        priceContainer.appendChild(price);
  
        if (data.oldPrice) {
            const oldPrice = document.createElement('p');
            oldPrice.classList.add('preçoriscado');
            oldPrice.textContent = data.oldPrice;
            priceContainer.appendChild(oldPrice);
        }
  
        textContainer.appendChild(priceContainer);
        item.appendChild(textContainer);
  
        return item;
    }
  
    // Função para popular os itens com base na quantidade selecionada
    function populateItems(itemsPerPage) {
        itemsContainer.innerHTML = '';
        for (let i = 0; i < itemsPerPage; i++) {
            const data = itemData[i % itemData.length]; // Repete os itens se necessário
            itemsContainer.appendChild(createItem(data));
        }
    }
  
    // Atualiza a exibição dos itens ao mudar a seleção
    itemCountSelect.addEventListener('change', (e) => {
        const itemsPerPage = parseInt(e.target.value);
        populateItems(itemsPerPage);
    });
  
    // Inicializa com o valor padrão de itens
    const initialItemsPerPage = parseInt(itemCountSelect.value);
    populateItems(initialItemsPerPage);
  });
  