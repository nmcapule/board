import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html";

import { PinnableSpec } from "./models";

@customElement("pinnable-renderer")
export class PinnableRenderer extends LitElement {
  static styles = css`
    .pinnable {
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      border-radius: 6px;
      padding: 8px;
      box-sizing: border-box;
      width: 200px;
      height: 200px;
    }
  `;

  @property({ type: Boolean })
  debugMode = false;

  @property({ type: Object })
  spec?: PinnableSpec;

  @state()
  toggleSpec = false;

  render() {
    return html`
      <div
        class="pinnable"
        style="
          width: ${this.spec?.transform.w}px;
          height: ${this.spec?.transform.h}px;
          ${unsafeCSS(this.spec?.styles)}"
        @mouseenter=${(e) => (this.toggleSpec = true)}
        @mouseleave=${(e) => (this.toggleSpec = false)}
      >
        ${this.toggleSpec && this.debugMode
          ? html`<pre>${JSON.stringify(this.spec, null, 2)}</pre>`
          : unsafeHTML(this.spec?.html)}
      </div>
    `;
  }
}
