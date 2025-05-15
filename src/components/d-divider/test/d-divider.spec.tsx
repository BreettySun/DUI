import { newSpecPage } from '@stencil/core/testing';
import { DDivider } from '../d-divider';

describe('d-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DDivider],
      html: `<d-divider></d-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <d-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-divider>
    `);
  });
});
