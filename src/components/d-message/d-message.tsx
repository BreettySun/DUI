import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'd-message',
  styleUrl: 'd-message.css',
  shadow: true,
})
export class DMessage {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
