import nightmare from 'nightmare';
import { API_ROOT } from '../src/constants/API';

describe('When visit the homepage', () => {

  it('welcomes the user', async () => {
    const page = nightmare().goto(API_ROOT);
    const text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Thinknetica Blog');
  });

  it('goto about', async () => {
    const page = nightmare().goto(API_ROOT).click('a[href$="/about"]');
    const text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('About page');
  });

  it('goto contacts', async () => {
    const page = nightmare().goto(API_ROOT).click('a[href$="/contacts"]');
    const text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('Message');
  });

});
