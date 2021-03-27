export type iFrame = {
  type: 'iframe';
  props: {
    src: string;
    srcdoc?: string;
    allowFullscreen?: boolean;
    sandbox?: string;
    referrerPolicy?: string;
    allowPaymentRequest?: boolean;
    name?: string;
    width?: number;
    height?: number;
  };
};
