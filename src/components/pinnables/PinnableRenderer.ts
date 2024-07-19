import { css, html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html";

export enum Kind {
  DEFAULT,
}

export interface Spec {
  kind: Kind;
  transform: {
    w: number; // width
    h: number; // height
    x?: number; // x pos
    y?: number; // y pos
    z?: number; // z index
    a?: number; // rotation angle
  };
  styles?: string;
  // TODO(nmcapule): For debugging. Do not use.
  html?: string;
}

@customElement("pinnable-renderer")
export class PinnableRenderer extends LitElement {
  static styles = css`
    .container {
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      border-radius: 6px;
      padding: 8px;
      box-sizing: border-box;
      width: 200px;
    }
  `;

  @property({ type: Object })
  spec?: Spec;

  @state()
  toggleSpec = false;

  render() {
    return html`
      <div
        class="container"
        style="
          width: ${this.spec?.transform.w}px;
          height: ${this.spec?.transform.h}px;
          ${unsafeCSS(this.spec?.styles)}"
        @mouseenter=${(e) => (this.toggleSpec = true)}
        @mouseleave=${(e) => (this.toggleSpec = false)}
      >
        ${this.toggleSpec
          ? html`<pre>${JSON.stringify(this.spec, null, 2)}</pre>`
          : unsafeHTML(this.spec?.html)}
      </div>
    `;
  }
}
