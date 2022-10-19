
const products = [
    {
        name: "Slogan Print T-Shirt [Zara]",
        price: 1440.35,
        id: 'slogan-print-t-shirt',
        images: [
            'media/zara/0977310251_6_1_1.jpg',
            'media/zara/0977310251_6_2_1.jpg',
            'media/zara/0977310251_6_3_1.jpg'
        ],
        position: 0
    },
    {
        name: "TB Peacock T-shirt Pink [Taibo Bacar]",
        price: 20000,
        id: 'tb-peackock-t-shirt-pink',
        images: [
            'media/taibo-bacar/BG-TBX1-T3-750x750.jpg',
            'media/taibo-bacar/BG-TBX1-T3.1-750x750.jpg',
            'media/taibo-bacar/BG-TBX1-T3.5-750x750.jpg'
        ],
        position: 0
    },
    {
        name: "Wool Blend Coat [Zara]",
        price: 6276.42,
        id: 'wool-blend-coat',
        images: [
            'media/zara/9621310706_6_1_1.jpg',
            'media/zara/9621310706_6_2_1.jpg',
            'media/zara/9621310706_6_3_1.jpg'
        ],
        position: 0
    },
    {
        name: "Men's T-Shirt [Nike]",
        price: 3191.5,
        id: 'mens-t-shirt',
        images: [
            'media/nike/aed62f74-1171-43ec-a148-290f4a75ee07.webp',
            'media/nike/18a20211-82a9-462c-ae42-b6b32b8837ca.webp',
            'media/nike/sportswear-mens-t-shirt-NQQxNp.jpg'
        ],
        position: 0
    },
    {
        name: "Military Shoulder Bag [Bape]",
        price: 11234.08,
        id: 'color-camo-military-shoulder-bag',
        images: [
            'media/bape/0ZXBGM182025DRDX-pdp-1.jpg',
            'media/bape/0ZXBGM182025DRDX-pdp-2.jpg'
        ],
        position: 0
    },
    {
        name: "Transition Baseball Hat [Taibo Bacar]",
        price: 10000,
        id: 'transition-baseball-hat',
        images: [
            'media/taibo-bacar/TR-BHT-BLKGLD-01-750x750.jpg',
            'media/taibo-bacar/TR-BHT-BLKGLD-02-750x750.jpg',
            'media/taibo-bacar/TR-BHT-BLKGLD-03-750x750.jpg',
        ],
        position: 0
    },
    {
        name: "Textured Sweater [Zara]",
        price: 2506.28,
        id: 'textured-sweater',
        images: [
            'media/zara/3332340803_6_1_1.jpg',
            'media/zara/3332340803_6_2_1.jpg',
            'media/zara/3332340803_6_3_1.jpg',
        ],
        position: 0
    },
    {
        name: "Men's French Terry Pants [Nike]",
        price: 5744.7,
        id: 'french-terry-pants',
        images: [
            'media/nike/52ae7ff2-0aa1-471e-a7a3-cb5535a1d994.webp',
            'media/nike/4ea86c88-f1ea-4431-981c-2bc3f124ca34.webp',
            'media/nike/0700cc45-cdbe-4f0c-adfd-b2dfdd06548e.webp',
        ],
        position: 0
    },
    {
        name: "Basic Slim Fit T-Shirt [Zara]",
        price: 623.35,
        id: 'basic-slim-fit-t-shirt',
        images: [
            'media/zara/5584411500_6_1_1.jpg',
            'media/zara/5584411500_6_2_1.jpg',
            'media/zara/5584411500_6_3_1.jpg',
        ],
        position: 0
    },
    {
        name: "Men's Washed French Terry Pants [Nike]",
        price: 6063.85,
        id: 'washed-french-terry-pants',
        images: [
            'media/nike/2690b977-f65a-4cea-bc1c-7b368abce93a.webp',
            'media/nike/d57d149d-d969-4f03-ad3c-5a70dfc6fc68.webp',
            'media/nike/5e4861da-a80a-4d3a-bf66-6d7f55cb5bae.webp',
        ],
        position: 0
    },
    {
        name: "Logo Bomber Jacket [Taibo Bacar]",
        price: 45000,
        id: 'logo-bomber-jacket',
        images: [
            'media/taibo-bacar/Bomber-GLD-1-750x750.jpg',
            'media/taibo-bacar/Bomber-GLD-2-750x750.jpg',
            'media/taibo-bacar/Bomber-GLD-3-750x750.jpg',
        ],
        position: 0
    },
    {
        name: "Men's Basketball T-Shirt [Nike]",
        price: 2275,
        id: 'mens-basketball-t-shirt',
        images: [
            'media/nike/151a5d81-4c34-4ee7-bf3f-4715399e0935.webp',
            'media/nike/ef126745-0184-4ac6-935d-2d229bef8b0d.webp',
            'media/nike/3c6ef1a5-dd5b-4139-8488-350f2f1f2afa.webp',
        ],
        position: 0
    },
    {
        name: "Basic Bomber Jacker [Zara]",
        price: 2502.81,
        id: 'basic-bomber-jacket',
        images: [
            'media/zara/4302410800_6_1_1.jpg',
            'media/zara/4302410800_6_2_1.jpg',
            'media/zara/4302410800_6_3_1.jpg',
        ],
        position: 0
    },
];


function addProducts() {
    const lista = document.getElementById('lista-de-produtos');
    for(const product of products) {
        lista.innerHTML += '<div class="item">' +
                                '<div class="item-image" id="' + product.id + '" style="background-image: url(\'' + product.images[0] + '\');">' +
                                    '<input class="go-back-button image-navigation-button" type="button" title="Ver imagem anterior" onclick="putPreviousImage(\'' + product.id + '\')" value="&larr;"/>' +
                                    '<input class="go-forward-button image-navigation-button" type="button" title="Ver imagem seguinte" onclick="putNextImage(\'' + product.id + '\')" value="&rarr;"/>' +
                                '</div>' +
                                '<div class="item-details">' +
                                    '<p id="' + product.id + '-text">' + product.name + '<spam style="position: absolute; right: 0; color: #ffac38; font-weight: bolder; font-size: 20px; margin-right: 10px;">^</spam></p>' +
                                    '<p>Pre&ccedil;o: <spam id="' + product.id + '-price" class="item-price">' + product.price + '</spam> Mt</p>' +
                                    '<input class="quantity-button" type="button" title="Diminuir a quantidade" onclick="reduceQuantity(\'' + product.id + '\')" value="-"/><label id="' + product.id + '-label" for="' + product.id + '-quantity">0</label><input class="quantity-button" type="button" title="Aumentar a quantidade" onclick="addQuantity(\'' + product.id + '\')" value="+"/><br/>' +
                                    '<input type="range" min="0" max="10" id="' + product.id + '-quantity" name="' + product.id + '-quantity" onchange="calculatePrice(\'' + product.id + '\')" value="0"/>' +
                                    '<p><spam id="' + product.id + '-total-price" class="item-total-price">0</spam> Mt</p>' +
                                    '<input type="hidden" name="' + product.id + '-total-price" value="0"/>' +
                                '</div>' +
                            '</div>';
    }
}

function putPreviousImage(id) {
    const image = document.getElementById(id);
    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            if(products[i].position == 0) {
                products[i].position = products[i].images.length - 1;
            } else {
                products[i].position--;
            }
            image.style.backgroundImage = "url(" + products[i].images[products[i].position] + ")";
        }
    }
}

function putNextImage(id) {
    const image = document.getElementById(id);
    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            if(products[i].position == products[i].images.length - 1) {
                products[i].position = 0;
            } else {
                products[i].position++;
            }
            image.style.backgroundImage = "url(" + products[i].images[products[i].position] + ")";
        }
    }
}

function calculatePrice(id) {
    const range = document.getElementById(id + '-quantity');
    const label = document.getElementById(id + '-label');
    const price = document.getElementById(id + '-price');
    const totalPrice = document.getElementById(id + '-total-price');
    const totalPriceHidden = document.forms[0].elements.namedItem(id + '-total-price');
    label.innerHTML = range.value;
    totalPrice.innerHTML = parseFloat(price.innerHTML)*parseInt(range.value);
    totalPriceHidden.value = totalPrice.innerHTML;
    document.getElementById('td-' + id + '-quantity').innerHTML = range.value;
    document.getElementById('td-' + id + '-preco-total').innerHTML = totalPrice.innerHTML;
    actualizarPrecoTotal();
}

function addQuantity(id) {
    const range = document.getElementById(id + '-quantity');
    if(range.value != 10) {
        range.value = parseInt(range.value) + 1;
    }
    calculatePrice(id);
}

function reduceQuantity(id) {
    const range = document.getElementById(id + '-quantity');
    if(range.value != 0) {
        range.value -= 1;
    }
    calculatePrice(id);
}

function actualizarPrecoTotal() {
    document.getElementById('preco-total').innerHTML = parseInt(document.getElementById('td-slogan-print-t-shirt-preco-total').innerHTML) +
    parseInt(document.getElementById('td-tb-peackock-t-shirt-pink-preco-total').innerHTML) +
    parseInt(document.getElementById('td-wool-blend-coat-preco-total').innerHTML) + 
    parseInt(document.getElementById('td-mens-t-shirt-preco-total').innerHTML);
}