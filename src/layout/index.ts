type Section<C extends string[]> = {
  background?: boolean;
  vAlign?: 'top' | 'center' | 'bottom';
  components: C;
  flexGrow?: number;
};

export type OneColumnBlock<S1 extends string[] = string[]> = {
  type: 'one-column';
  sections: {
    one: Section<S1>;
  };
};

export type TwoColumnBlock<
  S1 extends string[] = string[],
  S2 extends string[] = string[]
> = {
  type: 'two-column';
  sections: {
    one: Section<S1>;
    two: Section<S2>;
  };
};

export type ThreeColumnBlock<
  S1 extends string[] = string[],
  S2 extends string[] = string[],
  S3 extends string[] = string[]
> = {
  type: 'three-column';
  sections: {
    one: Section<S1>;
    two: Section<S2>;
    three: Section<S3>;
  };
};

export type FourColumnBlock<
  S1 extends string[] = string[],
  S2 extends string[] = string[],
  S3 extends string[] = string[],
  S4 extends string[] = string[]
> = {
  type: 'four-column';
  sections: {
    one: Section<S1>;
    two: Section<S2>;
    three: Section<S3>;
    four: Section<S4>;
  };
};

export type Block =
  | OneColumnBlock
  | TwoColumnBlock
  | ThreeColumnBlock
  | FourColumnBlock;
