export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title';
    };

    async verificarPaginaInventario(url, tituloSecao) {
        const urlEsperada = `/${url}\.html/`;
        await this.page.waitForURL(urlEsperada);
        const urlAtual = await this.page.url();

        await this.page.waitForSelector(this.title);
        const titulo = await this.page.textContent(this.title);

        if (!titulo.includes(tituloSecao) || !urlAtual.includes(urlEsperada)) {
            throw new Error('Login falhou: não é a págian de inventário');
        };
    };
};