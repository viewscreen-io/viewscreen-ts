export type Button = {
  type: 'button';
  props: {
    text: string;
    style?: 'default' | 'primary' | 'link' | 'dashed';
    href?: string;
    target?: string;
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    triggerOn?: 'click'[];
  };
};
