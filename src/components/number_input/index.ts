export type NumberInput = {
  type: 'number-input';
  props: {
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    disabled?: boolean;
    triggerOn?: 'change'[];
  };
};
