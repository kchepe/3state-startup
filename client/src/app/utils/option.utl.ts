import { IOption } from '../common/Select';

const generateOptions = <T>(items: T[], labelKey: keyof T, valueKey: keyof T): IOption[] =>
  items.map((item: T) => ({
    label: item[labelKey] as string,
    value: item[valueKey] as string,
  }));

export default generateOptions;
