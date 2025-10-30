import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser, context, page;  // variáveis do playwright

BeforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    global.page = page;
});

AfterAll(async () => {
    await browser.close();
});
