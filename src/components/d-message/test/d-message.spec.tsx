import { newSpecPage } from '@stencil/core/testing';
import { DMessage } from '../d-message';

describe('d-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DMessage],
      html: `<d-message></d-message>`,
    });
    expect(page.root).toEqualHtml(`
      <d-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-message>
    `);
  });
});
