import type { Component } from '../components';
import type { Block } from '../layout';

export interface Page {
  meta?: {
    [key: string]: string;
  };
  components: {
    [id: string]: Component;
  };
  layout?: {
    blocks: Block[];
  };
}
