'use client';

import React, { memo } from 'react';
import { Form, UseFormReturn } from 'react-hook-form';

// import { AppAccordion, Form } from '@/comps';

import { IFormSchema } from '../formSchema';
import { clientInfo, footerInfo, invoiceItems, personalInfo } from './info';
import { AppAccordion } from './info/accordion';

export const styles = {
  inputGroup: `
    flex flex-col md:flex-row
    w-full flex-grow-[1] 
    md:space-x-8
    items-center 
    justify-center
`,
};

const FormsComps = memo(Comps);

function Comps(props: { form: UseFormReturn<IFormSchema>; onSubmit: (values: IFormSchema) => void }) {
  const { form, onSubmit } = props;

  return (
    <Form {...form} className="w-full px-5">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`
            w-full 
        `}
      >
        <AppAccordion
          data={[personalInfo({ form }), clientInfo({ form }), invoiceItems({ form }), footerInfo({ form })]}
        />

        {/* <Button type="submit" onClick={() => onsubmit}>Submit</Button> */}
      </form>
    </Form>
  );
}

export default FormsComps;
