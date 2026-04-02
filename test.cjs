const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));
    
    await page.goto('file://' + process.cwd() + '/index.html');
    await page.waitForTimeout(1000);
    
    const title = await page.title();
    console.log('Title:', title);
    
    const heroTitle = await page.textContent('.hero-title');
    console.log('Hero:', heroTitle.trim().substring(0, 50));
    
    const services = await page.locator('.service-card').count();
    console.log('Services:', services);
    
    const form = await page.locator('#project-form').count();
    console.log('Form exists:', form > 0);
    
    if (errors.length > 0) {
        console.log('ERRORS:', errors);
        process.exit(1);
    }
    
    console.log('All checks passed!');
    await browser.close();
})();
