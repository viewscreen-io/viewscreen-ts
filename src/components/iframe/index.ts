export type iFrame = {
  type: 'iframe';
  props: {
    src: string;
    srcdoc?: string;
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
    allowPaymentRequest?: boolean;
    name?: string;
    width?: number;
    height?: number;
  };
};
