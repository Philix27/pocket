'use client';
import { useTheme } from 'next-themes';
import { TextP } from '../custom';
import Select from 'react-select';

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
      <div className={'w-full flex flex-col items-start '}>
        {props.label && (
          <label htmlFor="category" className="m-0">
            <TextP>{props.label}</TextP>
          </label>
        )}
      </div>
      <Select
        options={props.data}
        className="w-full m-0"
        onChange={(newValue, multi) => {
          props.onChange(newValue?.value!);
        }}
        styles={{
          menu: (base, props) => ({
            ...base,
            background: isDark ? '#19232f' : '#e6e6e6',
            color: isDark ? '#e3e6e6' : '#535353',
            outline: '#4c4847',
            border: 1,
            borderColor: '#4c4847',
            borderStyle: 'solid',
          }),
          option: (base, props) => ({
            ...base,
            background: isDark ? '#19232f' : '#e6e6e6',
            color: isDark ? '#e3e6e6' : '#535353',
            outline: '#4c4847',
          }),
          indicatorsContainer: (base, props) => ({
            ...base,
            background: isDark ? '#19232f' : '#e6e6e6',
            color: isDark ? '#e3e6e6' : '#535353',
            outline: '#4c4847',
          }),

          singleValue: (base, state) => ({
            ...base,
            background: isDark ? '#19232f' : '#e6e6e6',
            color: isDark ? '#e3e6e6' : '#535353',
            outline: '#4c4847',
            // border: 1,
            // borderColor: '#4c4847',
            // borderStyle: 'solid',
          }),
          container: (base, state) => ({
            ...base,
            background: isDark ? '#19232f' : '#e6e6e6',
            color: isDark ? '#e3e6e6' : '#535353',
            border: 1,
            outline: state.isFocused ? '#f24500' : '#4c4847',
            borderColor: '#4c4847',
            borderStyle: 'solid',
          }),
          valueContainer: (base, state) => ({
            ...base,
            background: isDark ? '#19232f' : '#e6e6e6',
            color: isDark ? '#e3e6e6' : '#535353',
            // outline: '#4c4847',
            // borderColor: '#4c4847',
            // border: 1,
            // borderStyle: 'solid',
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            color: isDark ? '#e3e6e6' : '#e6e6e6',
            background: isDark ? '#19232f' : '#e6e6e6',
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
