function render(){
    const productStore =localStorageUtil.getProducts();

    headerPage.render(productStore.length); 
    
    productsPage.render();
}
render();