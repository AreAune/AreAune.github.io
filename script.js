document.addEventListener('DOMContentLoaded', function () {
    var products = [
        { id: 1, name: 'Sample Product 1', price: 29.99, image: 'pictures/shop-placeholder.png' },
        { id: 2, name: 'Sample Product 2', price: 39.99, image: 'pictures/shop-placeholder.png' },
        { id: 3, name: 'Sample Product 3', price: 49.99, image: 'pictures/shop-placeholder.png' },
        { id: 4, name: 'Sample Product 4', price: 59.99, image: 'pictures/shop-placeholder.png' },
        { id: 5, name: 'Sample Product 5', price: 69.99, image: 'pictures/shop-placeholder.png' },
        { id: 6, name: 'Sample Product 6', price: 79.99, image: 'pictures/shop-placeholder.png' },
        { id: 7, name: 'Sample Product 7', price: 89.99, image: 'pictures/shop-placeholder.png' },
        { id: 8, name: 'Sample Product 8', price: 99.99, image: 'pictures/shop-placeholder.png' },
        { id: 9, name: 'Sample Product 9', price: 109.99, image: 'pictures/shop-placeholder.png' },
        { id: 10, name: 'Sample Product 10', price: 119.99, image: 'pictures/shop-placeholder.png' },
        { id: 11, name: 'Sample Product 11', price: 129.99, image: 'pictures/shop-placeholder.png' }
    ];
    var productsContainer = document.querySelector('.products');
    function renderProduct(product) {
        var productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = "\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n            \n            <div class=\"price\">$").concat(product.price.toFixed(2), "</div>\n            ").concat(product.name, "\n        ");
        productsContainer.appendChild(productElement);
    }
    products.forEach(renderProduct);
});
