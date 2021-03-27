export type Heading = {
  type: 'heading';
  props: {
    value: string;
    level: 1 | 2 | 3 | 4 | 5;
  };
};
