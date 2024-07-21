import { css, html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import { PinnableKind, PinnableSpec } from "./pinnables";

@customElement("the-board")
export class Board extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 12px;
    }

    .editor-dialog {
      z-index: 100;
      width: 80vw;
      height: 80vh;
      border-radius: 4px;
      outline: 0;
      border: 0;
      padding: 0;
      box-shadow: 0px 2px 32px #c3c3c3;
    }

    .pinnable {
      cursor: pointer;
    }
  `;

  @query("dialog.editor-dialog")
  editorDialog: HTMLDialogElement;

  @state()
  specs: PinnableSpec[] = [
    {
      id: "1",
      kind: PinnableKind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `<div>
        <marquee><em>he</em>llo
      </div>`,
    },
    {
      id: "2",
      kind: PinnableKind.DEFAULT,
      transform: { w: 200, h: 350 },
      html: `oh no`,
    },
    {
      id: "3",
      kind: PinnableKind.DEFAULT,
      transform: { w: 100, h: 500 },
      html: `oh no`,
    },
    {
      id: "4",
      kind: PinnableKind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `oh no`,
    },
    {
      id: "5",
      kind: PinnableKind.DEFAULT,
      transform: { w: 500, h: 300 },
      html: `oh no`,
    },
    {
      id: "6",
      kind: PinnableKind.DEFAULT,
      transform: { w: 300, h: 300 },
      html: `oh no`,
    },
  ];

  @state()
  editingSpecs: PinnableSpec;

  render() {
    return html`
      <dialog class="editor-dialog">
        <pinnable-editor
          .spec=${this.editingSpecs}
          style="width: 100%; height: 100%"
          @commit=${(ev) => this.commitPinnableSpec(ev.detail)}
        ></pinnable-editor>
      </dialog>
      ${this.specs.map(
        (spec) =>
          html`<pinnable-renderer
            class="pinnable"
            .spec=${spec}
            @click=${() => this.editPinnableSpec(spec)}
          ></pinnable-renderer>`
      )}
    `;
  }

  editPinnableSpec(spec: PinnableSpec) {
    this.editingSpecs = spec;
    this.editorDialog?.show();
  }

  commitPinnableSpec(committedSpec: PinnableSpec) {
    console.log(committedSpec);
    this.specs = this.specs.map((spec) => {
      if (spec.id === committedSpec.id) return committedSpec;
      return spec;
    });
    this.editorDialog?.close();
  }
}
