export type Input = {
  type: 'input';
  props: {
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    maxLength?: number;
    value?: string;
    allowClear?: boolean;
    triggerOn?: 'press-enter'[];
  };
};
