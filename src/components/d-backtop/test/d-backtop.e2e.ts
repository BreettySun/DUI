import { newE2EPage } from '@stencil/core/testing';

describe('d-backtop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-backtop></d-backtop>');

    const element = await page.find('d-backtop');
    expect(element).toHaveClass('hydrated');
  });
});
