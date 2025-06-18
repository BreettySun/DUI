import { newE2EPage } from '@stencil/core/testing';

describe('d-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-breadcrumb></d-breadcrumb>');

    const element = await page.find('d-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
