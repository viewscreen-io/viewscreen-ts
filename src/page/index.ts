import type { Component } from '../components';
import type { Block } from '../layout';

export interface Page {
  id?: string;
  projectId?: string;
  name?: string;
  props: {
    meta?: {
      [key: string]: string;
    };
    components: {
      [id: string]: Component;
    };
    layout?: {
      blocks: Block[];
    };
  };
  createdAt?: string;
  updatedAt?: string;
}
