export type Upload = {
  type: 'upload';
  props: {
    url: string;
    name?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    headers?: {
      [key: string]: string;
    };
    data?: {
      [key: string]: string;
    };
  };
};
