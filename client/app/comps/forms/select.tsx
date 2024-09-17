'use client';
import { useTheme } from 'next-themes';
import { TextP } from '../custom';
import Select, { ActionMeta, OnChangeValue } from 'react-select';

export const AppSelect = (props: {
  label?: string;
  onChange: (newValue: string) => void;
  data: {
    label: string;
    value: string;
  }[];
}) => {
  const theme = useTheme();
  const isDark = theme.theme == 'dark';

  return (
    <>
      <div className={'w-full flex flex-col items-start'}>
        {props.label && (
          <label htmlFor="category" className="mb-1">
            <TextP>{props.label}</TextP>
          </label>
        )}
      </div>
      <Select
        options={props.data}
        className="bg-card text-foreground w-full"
        onChange={(newValue, multi) => {
          props.onChange(newValue?.value!);
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: isDark ? '#e3e6e6' : '#e6e6e6',
            background: isDark ? '#19232f' : '#535353',
            borderColor: state.isFocused ? '#f24500' : '#4c4847',
            outline: state.isFocused ? '#f24500' : '#4c4847',
            border: 1,
            borderStyle: 'solid',
          }),
        }}
      />
    </>
  );
};
