class Shoping{

    handleClear(){
        ROOT_SHOPING.innerHTML = ``;
    }

    
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = ""
        let summ = 0;

        CATALOG.forEach(({id, name, price}) => {
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog +=`
                <tr>
                    <td class="shoping_container_name">${name}</td>
                    <td class="shoping_container_price">${price.toLocaleString()} USD</td>
                    <td></td>
                </tr>
                `
                summ += price;

            }

        })

        const html = `
        <div class="shoping_container">
        <div class="shoping_close" onClick="shoping.handleClear()" ></div>
            <table>
            ${htmlCatalog}
            <tr>
                <td class="shoping_container_name">${summ}</td>
                <td class="shoping_container_price">${summ.toLocaleString()} USD</td>
            <td></td>
        </tr>
            </table>
        </div>
        `
        ROOT_SHOPING.innerHTML = html
    }

}
const shoping = new Shoping();
shoping.render();