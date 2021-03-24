import { Component } from '../components';
import { Block } from '../layout';

type Components = {
  [name: string]: Component;
};

type Layout = {
  blocks: Block[];
};

export type Page<C = Components, L = Layout> = {
  id?: string;
  projectId?: string;
  name?: string;
  props: {
    components: C;
    layout?: L;
  };
  createdAt?: string;
  updatedAt?: string;
};
