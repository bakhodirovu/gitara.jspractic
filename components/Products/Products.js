class Products{
    constructor(){
        this.classNameActive = 'products_element_btn_active';
        this.labelAdd = "Добавить в корзину"
        this.labelRemove = "Удалить в корзину"
    }
    hendleSetLocal(element,id){
        
      const {pushProduct,products} =  localStorageUtil.putProducts(id);

        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;  
            }
            headerPage.render(products.length);
    }
    render(){
        
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        
        CATALOG.forEach(({id, name, price, img}) => {
            let activeClass ="";
            let activeText ="";

                if(productsStore.indexOf(id) === -1){
                    activeText = this.labelAdd;
                }else{
                    activeClass = ' '+this.classNameActive;
                    activeText = this.labelRemove;
                }

            htmlCatalog += `
            <li class="products_elements">
                <span class="products_element_name">${name}</span>
                <img class="products_element_img" src="${img}"/>
                <span class="products_element_price">
                ⚡️
               ${price.toLocaleString()} USD </span>
                <button class="products_element_btn ${activeClass}" onClick="productsPage.hendleSetLocal(this,'${id}');">
                ${activeText}
                </button>
            </li>
            `;
        });

        const html = `
        <ul class="products_container">
         ${htmlCatalog}
        </ul>
        `;
        
        ROOT_PRODUCTS.innerHTML= html;
    }
}
const productsPage = new Products();
