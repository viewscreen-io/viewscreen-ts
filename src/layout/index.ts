type Section = {
  background?: boolean;
  vAlign?: 'top' | 'center' | 'bottom';
  components: string[];
  flexGrow?: number;
};

export type OneColumnBlock = {
  type: 'one-column';
  one: Section;
};

export type TwoColumnBlock = {
  type: 'two-column';
  one: Section;
  two: Section;
};

export type ThreeColumnBlock = {
  type: 'three-column';
  one: Section;
  two: Section;
  three: Section;
};

export type FourColumnBlock = {
  type: 'four-column';
  one: Section;
  two: Section;
  three: Section;
  four: Section;
};
