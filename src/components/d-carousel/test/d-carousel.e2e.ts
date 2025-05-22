import { newE2EPage } from '@stencil/core/testing';

describe('d-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-carousel></d-carousel>');

    const element = await page.find('d-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
