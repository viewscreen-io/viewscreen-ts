export type RowBlock<T extends string = string> = {
  type: 'row';
  props: {
    columns: {
      components: {
        id: T;
        align?: 'left' | 'center' | 'right';
      }[];
      background?: boolean;
      flexGrow?: number;
      maxWidth?: number;
    }[];
  };
};

export type Block = RowBlock;
