import { newSpecPage } from '@stencil/core/testing';
import { DDrawer } from '../d-drawer';

describe('d-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DDrawer],
      html: `<d-drawer></d-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <d-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-drawer>
    `);
  });
});
