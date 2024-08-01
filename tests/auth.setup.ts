import { test as setup, expect } from '@playwright/test';

const authFile = '.auth/user.json';

setup('authenticate', async({ page }) => {
    await page.goto('https://www.inswave.com/gw/websquare/websquare.html?w2xPath=/gw/login.xml');
    await page.locator('#sSabun').fill('100103');
    await page.locator('#sPwd').fill('103100');
    await page.locator('#btn_login').click();

    await page.waitForURL('https://www.inswave.com/gw/websquare/websquare.html?w2xPath=/gw/index.xml#')
    
    await expect(page.frameLocator('#tabControl1_contents_000000_Tab_body').getByText('공지사항')).toBeVisible();

    await page.context().storageState({path: authFile});
});
