import { newSpecPage } from '@stencil/core/testing';
import { DBacktop } from '../d-backtop';

describe('d-backtop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DBacktop],
      html: `<d-backtop></d-backtop>`,
    });
    expect(page.root).toEqualHtml(`
      <d-backtop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-backtop>
    `);
  });
});
