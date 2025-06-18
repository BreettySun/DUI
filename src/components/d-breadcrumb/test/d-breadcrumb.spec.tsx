import { newSpecPage } from '@stencil/core/testing';
import { DBreadcrumb } from '../d-breadcrumb';

describe('d-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DBreadcrumb],
      html: `<d-breadcrumb></d-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <d-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-breadcrumb>
    `);
  });
});
