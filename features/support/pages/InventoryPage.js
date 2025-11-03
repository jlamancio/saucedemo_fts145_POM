export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '[data-test="title"]'
    };

    async verificarPaginaInventario(tituloSecao) {
        await this.page.waitForSelector(this.title);
        const titulo = await this.page.textContent(this.title);

        if (!titulo.includes(tituloSecao)) { 
            throw new Error('Login falhou: não é a página de inventário');
        };
    };
};