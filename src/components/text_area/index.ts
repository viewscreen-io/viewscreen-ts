export type TextArea = {
  type: 'text-area';
  props: {
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    minRows?: number;
    maxRows?: number;
    maxLength?: number;
    value?: string;
    allowClear?: boolean;
    monospace?: boolean;
  };
};
