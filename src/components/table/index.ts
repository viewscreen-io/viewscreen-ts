export type Table = {
  type: 'table';
  props: {
    data: DataItem[];
    columns: DataColumn[];
    selectedRowKeys?: string[];
    rowSelectionType?: 'checkbox' | 'radio';
    size?: 'small' | 'medium' | 'large';
    pagination?: {
      pageSize?: number;
      position?: (
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
        | 'bottomLeft'
        | 'bottomCenter'
        | 'bottomRight'
      )[];
    };
  };
};

type DataItem = {
  key: string;
  [name: string]: string | number | boolean;
};

type DataColumn = {
  title: string;
  dataIndex?: string;
  actions?: {
    id: string;
    type: 'button';
    props: {
      text: string;
      style?: 'default' | 'primary' | 'link' | 'dashed';
      danger?: boolean;
    };
  }[];
  format?: 'default' | 'markdown';
  align?: 'left' | 'right' | 'center';
};
