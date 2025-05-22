import { newSpecPage } from '@stencil/core/testing';
import { DCarousel } from '../d-carousel';

describe('d-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DCarousel],
      html: `<d-carousel></d-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <d-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d-carousel>
    `);
  });
});
