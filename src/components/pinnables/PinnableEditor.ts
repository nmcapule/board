import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators";
import { PinnableKind, PinnableSpec } from "./models";

const DEFAULT_SPEC: PinnableSpec = {
  kind: PinnableKind.DEFAULT,
  transform: {
    w: 320,
    h: 240,
  },
  html: "",
  styles: "",
};

@customElement("pinnable-editor")
export class PinnableEditor extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      position: relative;
      align-items: stretch;
      background-color: #efefef;
      box-sizing: border-box;
      padding: 8px;
      gap: 8px;

      /** magicpattern.design */
      background-color: #e5e5f7;
      opacity: 0.8;
      background-image: radial-gradient(#444cf7 0.5px, transparent 0.5px),
        radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
      background-size: 20px 20px;
      background-position: 0 0, 10px 10px;
    }

    :host > .preview {
      width: 50%;
      overflow: auto;
    }

    :host > .preview > .message {
      color: #6a6a6a;
    }

    :host > .editor {
      width: 50%;
      padding: 4px;
      margin: 0;
      border: 0;
      border-radius: 4px;
      box-sizing: border-box;
      background-color: #ffffff;
    }

    .editor:focus {
      border: 0;
      outline: 0;
    }
  `;

  @query("textarea.editor")
  editor: HTMLTextAreaElement;

  @property({ type: Object })
  spec: PinnableSpec = DEFAULT_SPEC;

  @state()
  message: string;

  render() {
    return html`
      <div class="preview">
        ${this.message
          ? html`<pre class="message">${this.message}</pre>`
          : html``}
        <pinnable-renderer .spec=${this.spec}></pinnable-renderer>
      </div>
      <textarea
        class="editor"
        contenteditable
        .value=${JSON.stringify(this.spec, undefined, 2)}
        @input=${this._onChange}
        @keydown=${this._onKeyDown}
      ></textarea>
    `;
  }

  private _onChange(_ev: InputEvent) {
    this._updateSpecFromEditor();
    this.dispatchEvent(
      new CustomEvent<PinnableSpec>("change", {
        detail: this.spec,
        bubbles: true,
        composed: true,
      })
    );
  }

  private _onKeyDown(ev: KeyboardEvent) {
    // Test implementation. It eradicates history (undo,redo) atm :P
    if (ev.key === "Tab") {
      this.editor.setRangeText(
        "  ",
        this.editor.selectionStart,
        this.editor.selectionEnd,
        "end"
      );
      ev.preventDefault();
    }
    if (ev.ctrlKey && ev.key === "s") {
      this._commit();
      ev.preventDefault();
    }
  }

  private _updateSpecFromEditor() {
    this.message = "";
    try {
      this.spec = JSON.parse(this.editor.value);
    } catch (e) {
      this.message = e;
      console.warn("Error on editing pinnable spec:", e);
    }
  }

  private _commit() {
    this._updateSpecFromEditor();
    this.message = `Saved!`;
    this.dispatchEvent(
      new CustomEvent<PinnableSpec>("commit", {
        detail: this.spec,
        bubbles: true,
        composed: true,
      })
    );
  }
}
