export { Button } from './button';
export { Checkbox } from './checkbox';
export { Heading } from './heading';
export { Input } from './input';
export { Markdown } from './markdown';
export { NumberInput } from './number_input';
export { RadioGroup } from './radio_group';
export { Select } from './select';
export { TextArea } from './text_area';
export { Table } from './table';

import { Button } from './button';
import { Checkbox } from './checkbox';
import { Heading } from './heading';
import { Input } from './input';
import { Markdown } from './markdown';
import { NumberInput } from './number_input';
import { RadioGroup } from './radio_group';
import { Select } from './select';
import { TextArea } from './text_area';
import { Table } from './table';

export type Component =
  | Button
  | Checkbox
  | Heading
  | Input
  | Markdown
  | NumberInput
  | RadioGroup
  | Select
  | TextArea
  | Table;
