'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { SlCalender } from 'react-icons/sl';

import { cn } from '@/lib';
import { Calendar } from './Calender';
import { Popover, PopoverContent, PopoverTrigger } from './PopOver';
import { AppButton } from '../forms';

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <AppButton
          variant={'outline'}
          className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
        >
          <SlCalender className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </AppButton>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        {/* <Calendar mode="single" selected={date} onSelect={setDate} initialFocus /> */}
      </PopoverContent>
    </Popover>
  );
}
