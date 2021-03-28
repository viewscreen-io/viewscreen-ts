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
import type { Divider } from './divider';
import type { IFrame } from './iframe';
import type { Image } from './image';
import type { Upload } from './upload';

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
  | Table
  | Divider
  | IFrame
  | Image
  | Upload;
