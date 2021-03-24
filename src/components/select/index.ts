export type Select = {
  type: 'select';
  props: {
    options: {
      value: string | number;
      label: string;
    }[];
    mode?: 'multiple' | 'single';
    allowClear?: boolean;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    triggerOn?: 'change'[];
    value?: (string | number)[];
  };
};
