import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './features',
    timeout: 30000,
    retries: 1,
    use: {
        baseUrl: 'https://www.saucedemo.com/',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },

});

