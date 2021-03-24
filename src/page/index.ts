import { Component } from '../components';
import { Block } from '../layout';

export type Page<C = Component, B = Block> = {
  id?: string;
  projectId?: string;
  name?: string;
  props: {
    components: {
      [name: string]: C;
    };
    layout?: {
      blocks: B[];
    };
  };
  createdAt?: string;
  updatedAt?: string;
};
