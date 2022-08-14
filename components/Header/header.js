class Header {
    openShoping(){
        shoping.render();
    }

    render(count){
        const html = `
        <div class="header_container" onClick="headerPage.openShoping()">
            <div class="header_counter">
            🔥 ${count}
            </div>
        </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }

}

const headerPage = new Header();

