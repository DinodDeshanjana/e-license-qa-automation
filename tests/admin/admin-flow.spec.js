import { test, expect } from '@playwright/test';

async function adminLogin(page) {
  await page.goto('https://deshan.wuaze.com/login.php');

  await page.fill('#email', 'admindeshan@gmail.com');
  await page.fill('#password', 'admindeshan');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/admin/);
}

test('Admin Full Process Flow', async ({ page }) => {


  await adminLogin(page);


  await page.goto('https://deshan.wuaze.com/admin/examapplications.php');


  const dateInput = page.locator('input[type="date"]').first();

  await dateInput.fill('2026-05-01');

  await page.locator('button:has-text("Approve")').first().click();

  await expect(page.locator('.alert-success')).toBeVisible();


  await page.goto('https://deshan.wuaze.com/admin/examresult.php');

  const resultDropdown = page.locator('select[name="result"]').first();

  if (await resultDropdown.isVisible()) {
    await resultDropdown.selectOption('Pass');

    await page.locator('button:has-text("Save")').first().click();

    await expect(page.locator('.alert-success')).toBeVisible();
  }


  await page.goto('https://deshan.wuaze.com/admin/licenseapprovals.php');

  const issueBtn = page.locator('button:has-text("Issue License")').first();

  if (await issueBtn.isVisible()) {
    await issueBtn.click();
    await expect(page.locator('.alert-success')).toBeVisible();
  }


  const statusDropdown = page.locator('select[name="new_status"]').first();

  if (await statusDropdown.isVisible()) {
    await statusDropdown.selectOption('Ready for Collection');

    await page.locator('button:has-text("Update")').first().click();

    await expect(page.locator('.alert-success')).toBeVisible();
  }

});