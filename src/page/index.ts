import {
  Button,
  Checkbox,
  Heading,
  Input,
  Markdown,
  NumberInput,
  RadioGroup,
  Select,
} from '../components';
import {
  OneColumnBlock,
  TwoColumnBlock,
  ThreeColumnBlock,
  FourColumnBlock,
} from '../layout';

export type Page = {
  id?: string;
  projectId?: string;
  name?: string;
  props: {
    components: {
      [name: string]:
        | Button
        | Checkbox
        | Heading
        | Input
        | Markdown
        | NumberInput
        | RadioGroup
        | Select;
    };
    layout?: {
      blocks: (
        | OneColumnBlock
        | TwoColumnBlock
        | ThreeColumnBlock
        | FourColumnBlock
      )[];
    };
  };
  createdAt?: string;
  updatedAt?: string;
};
