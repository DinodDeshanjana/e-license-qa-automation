import { test, expect } from '@playwright/test';

async function login(page) {
  await page.context().clearCookies();

  await page.goto('https://deshan.wuaze.com/login.php');

  await page.fill('#email', 'deshan@gmail.com');
  await page.fill('#password', 'deshan@1234');

  await page.getByRole('button', { name: 'Login' }).click();
}


test('User can apply for exam successfully', async ({ page }) => {
  await login(page);

  await page.goto('https://deshan.wuaze.com/applyexam.php');

  await page.getByTestId('exam-type').selectOption('written');
  await page.getByTestId('apply-btn').click();

  await expect(page).toHaveURL(/dashboard.php/);

  await expect(page.locator('.alert, .success')).toContainText('submitted');
});



test('User cannot apply for same exam twice', async ({ page }) => {
  await login(page);

  await page.goto('https://deshan.wuaze.com/applyexam.php');

  await page.getByTestId('exam-type').selectOption('written');
  await page.getByTestId('apply-btn').click();

  await page.goto('https://deshan.wuaze.com/applyexam.php');

  await page.getByTestId('exam-type').selectOption('written');
  await page.getByTestId('apply-btn').click();

  await expect(page.locator('.alert-danger'))
    .toContainText('already have an active application');
});



test('User cannot submit without selecting exam type', async ({ page }) => {
  await login(page);

  await page.goto('https://deshan.wuaze.com/applyexam.php');

  await page.getByTestId('apply-btn').click();

  await expect(page.locator('.alert-danger'))
    .toContainText('Please select a valid exam type');
});



test('Guest cannot access apply exam page', async ({ page }) => {
  await page.context().clearCookies();

  await page.goto('https://deshan.wuaze.com/applyexam.php');

  await expect(page).toHaveURL(/login.php/);
});