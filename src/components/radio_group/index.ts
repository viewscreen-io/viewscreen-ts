export type RadioGroup = {
  type: 'radio-group';
  props: {
    options: {
      label: string;
      value: string | number | boolean;
    }[];
    disabled?: boolean;
    value?: string | number | boolean;
    layout?: 'horizontal' | 'vertical';
    triggerOn?: 'change'[];
  };
};
