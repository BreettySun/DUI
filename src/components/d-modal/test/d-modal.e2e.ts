import { newE2EPage } from '@stencil/core/testing';

describe('d-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d-modal></d-modal>');

    const element = await page.find('d-modal');
    expect(element).toHaveClass('hydrated');
  });
});
