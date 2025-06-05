import { newE2EPage } from '@stencil/core/testing';

describe('d-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-message></d-message>');

    const element = await page.find('d-message');
    expect(element).toHaveClass('hydrated');
  });
});
