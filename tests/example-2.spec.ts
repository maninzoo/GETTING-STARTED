import { test, expect } from '@playwright/test';

test('직원조회', async ({ page }) => {
  await page.goto('https://www.inswave.com/gw/websquare/websquare.html?w2xPath=/gw/index.xml#')

  await page.locator('#treeview1_label_2').click();
  await page.locator('#treeview1_label_4').click();
  await expect(page.frameLocator('#tabControl1_contents_H110020_Tab_body').getByText('직원조회')).toBeVisible();
});
