import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Kind, Spec } from "./pinnables/PinnableRenderer";

@customElement("the-board")
export class Board extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
  `;

  @property()
  pinnables: Spec[] = [
    {
      kind: Kind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `<div>
        <marquee><em>he</em>llo
      </div>`,
    },
    {
      kind: Kind.DEFAULT,
      transform: { w: 200, h: 350 },
      html: `oh no`,
    },
    {
      kind: Kind.DEFAULT,
      transform: { w: 100, h: 500 },
      html: `oh no`,
    },
    {
      kind: Kind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `oh no`,
    },
    {
      kind: Kind.DEFAULT,
      transform: { w: 500, h: 300 },
      html: `oh no`,
    },
    {
      kind: Kind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `oh no`,
    },
  ];

  render() {
    return html`
      ${this.pinnables.map(
        (spec) => html`<pinnable-renderer .spec=${spec}></pinnable-renderer>`
      )}
    `;
  }
}
