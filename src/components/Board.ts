import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { PinnableKind, PinnableSpec } from "./pinnables";

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
  pinnables: PinnableSpec[] = [
    {
      kind: PinnableKind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `<div>
        <marquee><em>he</em>llo
      </div>`,
    },
    {
      kind: PinnableKind.DEFAULT,
      transform: { w: 200, h: 350 },
      html: `oh no`,
    },
    {
      kind: PinnableKind.DEFAULT,
      transform: { w: 100, h: 500 },
      html: `oh no`,
    },
    {
      kind: PinnableKind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `oh no`,
    },
    {
      kind: PinnableKind.DEFAULT,
      transform: { w: 500, h: 300 },
      html: `oh no`,
    },
    {
      kind: PinnableKind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `oh no`,
    },
  ];

  render() {
    return html`
      <pinnable-editor
        style="margin: 100px 100px; height: 520px"
      ></pinnable-editor>
      ${this.pinnables.map(
        (spec) => html`<pinnable-renderer .spec=${spec}></pinnable-renderer>`
      )}
    `;
  }
}
