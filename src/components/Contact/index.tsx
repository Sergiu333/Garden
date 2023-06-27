import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import type { ContactData, ContactUsProps } from './types';
import { FC, useState } from 'react';
import Image from 'next/image';

const initialFormData: ContactData = {
  name: '',
  phone: '',
  email: '',
  interes: '',
  message: '',
};

const Contact: FC<ContactUsProps> = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().min(2, 'Too short!').required('Name is required'),
    phone: Yup.string().trim().min(2, 'Too short!').required('Phone is required'),
    message: Yup.string().trim().min(2, 'Too short!').required('Message is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    interes: Yup.string().trim().min(2, 'Too short!').required('Interes is required'),
    services: Yup.array().min(1, 'At least one service must be selected'),
  });

  const handleSubmit = async (data: ContactData, { resetForm }: FormikHelpers<ContactData>) => {
    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    resetForm();
  };

  return (
    <div className="bg-[#2C2B2B] bg-contact relative overflow-hidden">
      <div className="absolute w-[99vw] h-[136px] rectangle-contact top-0" />
      <div className="absolute -ml-[170px] top-16">
        <div className="relative w-[600px] h-[800px] lg:w-[800px] lg:h-[1000px]">
          <Image src="/home.svg" alt="image" fill={true} style={{ objectFit: 'contain' }} />
        </div>
      </div>
      <div className="px-[20px] sm:px-[100px] md:px-[150px] py-[100px] md:py-[224px] flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-[16px] z-10 ">
          <div className="font-bold text-[30px] md:text-[40px] lg:text-[64px] leading-[139%]">
            <div className="text-w">Un foișor pentru</div>
            <div className="text-o">grădina ta?</div>
          </div>
          <div className="text-[25px] md:text-[28px] lg:text-[32px] leading-[111%] text-w/[65%] max-w-[610px]">
            Foișoare de calitate superioară, aducând magia în grădina ta.
          </div>
        </div>
        <Formik
          initialValues={initialFormData}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-10 md:20 items-center justify-center z-10 pt-10 lg:pt-0">
              <div className="flex flex-col gap-10">
                <div className="flex flex-row gap-[15px]">
                  <div className="flex flex-col gap-[64px]">
                    <div>
                      <Field
                        type="text"
                        className={`w-full bg-transparent outline-0 border-b focus:border-b-grey-1 ${
                          errors.name && touched.name ? 'border-b-red-600' : 'border-b-grey-1'
                        } text-[20px] md:text-[25px] leading-6 md:leading-[25px] cursor-scale small py-1.5 text-w`}
                        placeholder="Nume"
                        name="name"
                      />
                      {errors.name && touched.name ? (
                        <div className="text-red-500">{errors.name}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field
                        type="email"
                        className={`w-full bg-transparent outline-0 border-b focus:border-b-grey-1 ${
                          errors.email && touched.email ? 'border-b-red-600' : 'border-b-grey-1'
                        } text-[20px] md:text-[25px] leading-6 md:leading-[25px] cursor-scale small py-1.5 text-w`}
                        placeholder="Email"
                        name="email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500">{errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[64px]">
                    <div>
                      <Field
                        type="text"
                        className={`w-full bg-transparent outline-0 border-b focus:border-b-grey-1 ${
                          errors.phone && touched.phone ? 'border-b-red-600' : 'border-b-grey-1'
                        } text-[20px] md:text-[25px] leading-6 md:leading-[25px] cursor-scale small py-1.5 text-w`}
                        placeholder="Telefon"
                        name="phone"
                      />
                      {errors.phone && touched.phone ? (
                        <div className="text-red-500">{errors.phone}</div>
                      ) : null}
                    </div>
                    <div>
                      <Field
                        type="text"
                        className={`w-full bg-transparent outline-0 border-b focus:border-b-grey-1 ${
                          errors.interes && touched.interes ? 'border-b-red-600' : 'border-b-grey-1'
                        } text-[20px] md:text-[25px] leading-6 md:leading-[25px] cursor-scale small py-1.5 text-w`}
                        placeholder="Sunt interesat in.."
                        name="interes"
                      />
                      {errors.interes && touched.interes ? (
                        <div className="text-red-500">{errors.interes}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <Field
                    type="text"
                    className={`w-full bg-transparent outline-0 border-b focus:border-b-grey-1 ${
                      errors.message && touched.message ? 'border-b-red-600' : 'border-b-grey-1'
                    } text-[20px] md:text-[25px] leading-6 md:leading-[25px] cursor-scale small py-1.5 text-w`}
                    placeholder="Mesaj / Propunere"
                    name="message"
                  />
                  {errors.message && touched.message ? (
                    <div className="text-red-500">{errors.message}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="text-[#1B1B1B] bg-[#FFFBFB] rounded-[8px] px-[24px] py-[12px] border font-semibold lg:w-fit"
                >
                  Trimite
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
