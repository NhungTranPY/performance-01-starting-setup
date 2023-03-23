import { initProducts, addProduct } from './product-management';


function initProducts() {
    renderProducts(products, deleteProduct);
}

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
