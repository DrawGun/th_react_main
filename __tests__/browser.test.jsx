import nightmare from 'nightmare';
import { APP_ROOT } from '../src/constants/API';

describe('When visit the homepage', () => {

  it('welcomes the user', async () => {
    const page = nightmare().goto(APP_ROOT);
    const text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Thinknetica Blog');
  });

  it('goto about', async () => {
    const page = nightmare().goto(APP_ROOT).click('a[href$="/about"]');
    const text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('About page');
  });

  it('goto contacts', async () => {
    const page = nightmare().goto(APP_ROOT).click('a[href$="/contacts"]');
    const text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Message');
  });

});
