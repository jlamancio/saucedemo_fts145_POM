import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';

let browser, context, page;
let loginPage, inventoryPage;

Given('que estou na pagina de login', async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await page.goto('https://www.saucedemo.com/');
});

When('preencho o { string } e a { string }', async (usuario, senha) => {
    await loginPage.login(usuario, senha);
});

When('acesso a opcao Login', async () => {
    await loginPage.acionar_botao_login();
});

Then('vou para a pagina { string } e vejo { string }', async () => {
    await inventoryPage.verificarPaginaInventario()
});

