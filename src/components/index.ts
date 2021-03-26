export type { Button } from './button';
export type { Checkbox } from './checkbox';
export type { Heading } from './heading';
export type { Input } from './input';
export type { Markdown } from './markdown';
export type { NumberInput } from './number_input';
export type { RadioGroup } from './radio_group';
export type { Select } from './select';
export type { TextArea } from './text_area';
export type { Table } from './table';

import type { Button } from './button';
import type { Checkbox } from './checkbox';
import type { Heading } from './heading';
import type { Input } from './input';
import type { Markdown } from './markdown';
import type { NumberInput } from './number_input';
import type { RadioGroup } from './radio_group';
import type { Select } from './select';
import type { TextArea } from './text_area';
import type { Table } from './table';

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
