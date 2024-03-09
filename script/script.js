const handleProducts = () =>{
    const inputProductName = document.getElementById('product-name').value;
    const inputProductQuantity = document.getElementById('product-quantity').value;
    displayShowProduct(inputProductName, inputProductQuantity);
    
    document.getElementById('product-name').value = '';
    document.getElementById('product-quantity').value = '';
}

const displayShowProduct = (productName , quantity) =>{
    const productContainer = document.getElementById('product-container');

    const newLi  = document.createElement('li');
    newLi.innerText = `${productName}: ${quantity}`;
    productContainer.appendChild(newLi);
    saveProductToLocalStorage(productName, quantity)
}


const getStoredShoppingCard = () =>{
    let card = {};
    const storedCard = localStorage.getItem('card');
    if(storedCard){
        card = JSON.parse(storedCard);
    }
    return card;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const card = getStoredShoppingCard();
    card[product] =quantity;
    const cardStringify = JSON.stringify(card);
    localStorage.setItem('card', cardStringify);
};


const savedProductFromLocalStorage = ()=>{
    const savedCard = getStoredShoppingCard();
    for(const product in savedCard){
        const quantity = savedCard[product];
        displayShowProduct(product, quantity)
    }
} 

savedProductFromLocalStorage()