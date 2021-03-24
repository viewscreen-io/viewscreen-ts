type Section = {
  background?: boolean;
  vAlign?: 'top' | 'center' | 'bottom';
  components: string[];
  flexGrow?: number;
};

export type OneColumnBlock = {
  type: 'one-column';
  sections: {
    one: Section;
  };
};

export type TwoColumnBlock = {
  type: 'two-column';
  sections: {
    one: Section;
    two: Section;
  };
};

export type ThreeColumnBlock = {
  type: 'three-column';
  sections: {
    one: Section;
    two: Section;
    three: Section;
  };
};

export type FourColumnBlock = {
  type: 'four-column';
  sections: {
    one: Section;
    two: Section;
    three: Section;
    four: Section;
  };
};

export type Block =
  | OneColumnBlock
  | TwoColumnBlock
  | ThreeColumnBlock
  | FourColumnBlock;
