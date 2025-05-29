import { newSpecPage } from '@stencil/core/testing';
import { DModal } from '../d-modal';

describe('d-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DModal],
      html: `<d-modal></d-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <d-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-modal>
    `);
  });
});
