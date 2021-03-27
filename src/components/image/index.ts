export type Image = {
  type: 'image';
  props: {
    src: string;
    href?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
};
