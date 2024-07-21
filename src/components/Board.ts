import { css, html, LitElement } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import { PinnableKind, PinnableSpec } from "./pinnables";

export class BoardPersistenceService {
  constructor(public readonly key: string) {}

  save(specs: PinnableSpec[]) {
    console.debug(`Saving pinnable specs from key ${this.key}`, specs);
    localStorage.setItem(this.key, JSON.stringify(specs));
  }

  load(): PinnableSpec[] {
    try {
      const item = localStorage.getItem(this.key);
      if (!item) {
        throw new Error(`missing key for key ${this.key}`);
      }
      return JSON.parse(item);
    } catch (e) {
      console.error(`Error loading saved pinnable specs from key: ${this.key}`);
    }
    return null;
  }

  reset() {
    localStorage.clear();
  }
}

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
      id: "default",
      kind: PinnableKind.DEFAULT,
      transform: { w: 460, h: 600 },
      html: `
      <h1>Welcome a-board!</h1>
      <ul>
        <li>Click <code>Add new pinnable</code> to create pinnable
        <li>Click on a pinnable to edit
        <li><b>When editing</b>: <code>Ctrl+s</code> to save
        <li><b>When editing</b>: <code>Ctrl+d</code> to delete
      </ul>
      <pre>
        You can do more stuff here!
        ░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░
        ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░
        ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░
        ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░
        ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░
        ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░ 
        ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░
        ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░
        ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░
        ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░
        ▐▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░
        ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
        ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░
        ░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░
        ░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░
        ░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░
        ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░
        ░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░
        ░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░
      </pre>
      `,
      styles: `
        font-family: Google Sans, Verdana, Arial;
        font-size: 16px;
      `,
    },
  ];

  @state()
  editingSpecs: PinnableSpec;

  private storage = new BoardPersistenceService("default");

  connectedCallback() {
    super.connectedCallback();
    this.specs = this.storage.load() ?? this.specs;
  }

  render() {
    return html`
      <dialog class="editor-dialog">
        <pinnable-editor
          .spec=${this.editingSpecs}
          style="width: 100%; height: 100%"
          @commit=${(ev) => this.commitPinnableSpec(ev.detail)}
          @delete=${(ev) => this.deletePinnableSpec(ev.detail)}
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
      <button @click=${() => this.addPinnableSpec()}>Add new pinnable</button>
      <button @click=${() => this.storage.reset()}>Clear localStorage</button>
    `;
  }

  editPinnableSpec(spec: PinnableSpec) {
    this.editingSpecs = spec;
    this.editorDialog?.show();
  }

  commitPinnableSpec(committedSpec: PinnableSpec) {
    this.specs = this.specs.map((spec) => {
      if (spec.id === committedSpec.id) return committedSpec;
      return spec;
    });
    this.storage.save(this.specs);
    this.editorDialog?.close();
  }

  deletePinnableSpec(deletedSpec: PinnableSpec) {
    this.specs = this.specs.filter((spec) => spec.id !== deletedSpec.id);
    this.storage.save(this.specs);
    this.editorDialog?.close();
  }

  addPinnableSpec() {
    const id = Math.random().toString(36);
    const spec: PinnableSpec = {
      id: id,
      kind: PinnableKind.DEFAULT,
      transform: {
        w: 120,
        h: 80,
      },
      html: `hello world ${id}`,
      styles: "border: 1px dashed gray",
    };
    this.specs = this.specs.concat(spec);
    this.storage.save(this.specs);
    this.editPinnableSpec(spec);
  }
}
