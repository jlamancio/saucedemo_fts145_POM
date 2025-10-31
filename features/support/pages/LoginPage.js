export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '[data-test="login-button"]';
        this.url = 'https://www.saucedemo.com/';
    };

    // Funções que interagem com a página

    async login(username, password) {
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
    };

    async acionarBotaoLogin() {
        await this.page.click(this.loginButton);
    };
};