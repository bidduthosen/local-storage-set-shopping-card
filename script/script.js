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

}