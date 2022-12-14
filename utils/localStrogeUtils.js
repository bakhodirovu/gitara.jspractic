class LocalStrogeUtils {
    constructor(){
        this.keyname = 'products';
    }

    getProducts(){
        const productsLocalStorage = localStorage.getItem(this.keyname);
        if (productsLocalStorage !== null){
            return JSON.parse(productsLocalStorage);
        }
        return [];
        
    }

    putProducts(id){
        let products = this.getProducts();
        const index = products.indexOf(id);
        let pushProduct = false;

        if(index === -1){
            products.push(id)
            pushProduct =true;
        }else{
            products.splice(index, 1)
        }
       
        localStorage.setItem(this.keyname, JSON.stringify(products));

        return{pushProduct,products};

    }
}
const localStorageUtil = new LocalStrogeUtils();


