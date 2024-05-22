
import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'
import { FilterPage } from '../../pages/filter';

test('test', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('standard_user','secret_sauce')

  page.waitForURL('https://www.saucedemo.com/inventory.html')
 
  const Filter = new FilterPage(page)
  await Filter.sortedAtoZ()
  await Filter.filter('za')

  await page.waitForTimeout(5000);
  await Filter.sortedZtoA()
  
});
