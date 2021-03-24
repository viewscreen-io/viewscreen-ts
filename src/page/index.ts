import { Component } from '../components';
import { Block } from '../layout';

export interface Page {
  id?: string;
  projectId?: string;
  name?: string;
  props: {
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
