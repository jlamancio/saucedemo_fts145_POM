export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title';
    };

    async verificarpaginaInventario() {
        await this.page.waitForSelector(this.title);
        const titulo_secao = await this.page.textContent(this.title);
        if !titulo_secao.includes('Products')) {
            throw new Error('Login falhou: não é a págian de inventário');
        };
    };
};