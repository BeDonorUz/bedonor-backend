import { MakeOptions } from 'telegram-keyboard';

export const keyboardOptions = (
  columns: MakeOptions['columns'],
  flat: MakeOptions['flat'] = false,
  filterAfterBuild: MakeOptions['filterAfterBuild'] = false,
  pattern: MakeOptions['pattern'] = [1],
  wrap: MakeOptions['wrap'] = () => true,
  filter: MakeOptions['filter'] = () => true,
): MakeOptions => ({
  columns,
  flat,
  filterAfterBuild,
  pattern,
  wrap,
  filter,
});
