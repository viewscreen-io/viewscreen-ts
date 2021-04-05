export type Image = {
  type: 'image';
  props: {
    src: string;
    href?: string;
    target?: string;
    alt?: string;
    width?: number;
    height?: number;
    borderRadius?: number;
  };
};
