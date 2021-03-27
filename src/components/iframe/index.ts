export type IFrame = {
  type: 'iframe';
  props: {
    src: string;
    srcDoc?: string;
    title?: string;
    allow?: string;
    allowFullScreen?: boolean;
    sandbox?: string;
    referrerPolicy?:
      | ''
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url';
    name?: string;
    width?: number;
    height?: number;
  };
};
