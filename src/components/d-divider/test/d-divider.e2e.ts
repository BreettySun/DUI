import { newE2EPage } from '@stencil/core/testing';

describe('d-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-divider></d-divider>');

    const element = await page.find('d-divider');
    expect(element).toHaveClass('hydrated');
  });
});
