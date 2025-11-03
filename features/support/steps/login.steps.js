import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';

let browser, context, page;         // variáveis para o playwright
let loginPage, inventoryPage;       // variáveis para manipulação das classes

Given('que estou na pagina de login', async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await page.goto('https://www.saucedemo.com/');
});

When('preencho o {string} e a {string}', async (usuario, senha) => {
    await loginPage.login(usuario, senha);
});

When('acesso a opcao Login', async () => {
    await loginPage.acionarBotaoLogin();
});

Then('vou para a pagina: {string} e vejo o titulo: {string}', async (url, titulo_secao) => {
    await inventoryPage.verificarPaginaInventario(titulo_secao);
    await browser.close();
});



















