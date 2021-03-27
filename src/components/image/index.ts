export type Image = {
  type: 'image';
  props: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};
