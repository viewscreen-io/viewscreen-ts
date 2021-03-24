import { Component } from '../components';
import { Block } from '../layout';

export type Page = {
  id?: string;
  projectId?: string;
  name?: string;
  props: {
    components: {
      [name: string]: Component;
    };
    layout?: {
      blocks: Block[];
    };
  };
  createdAt?: string;
  updatedAt?: string;
};
