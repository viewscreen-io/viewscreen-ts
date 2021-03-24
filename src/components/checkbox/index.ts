export type Checkbox = {
  type: 'checkbox';
  props: {
    value: string | number | boolean;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    triggerOn?: 'change'[];
  };
};
