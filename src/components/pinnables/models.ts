export enum PinnableKind {
  DEFAULT,
}

export interface PinnableSpec {
  kind: PinnableKind;
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
