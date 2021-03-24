export type Heading = {
  type: 'heading';
  props: {
    value: string;
    style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  };
};
