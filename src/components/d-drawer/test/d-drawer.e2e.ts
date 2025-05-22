import { newE2EPage } from '@stencil/core/testing';

describe('d-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-drawer></d-drawer>');

    const element = await page.find('d-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
