'use client';

import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { UIContext } from '@/context/ui/UIContext';
import { close } from '@/public/images';
import StarsCanvas from '../canvas/Stars';
import AnimatedWrapper from '../Wrappers/AnimatedWrapper';
import { textVariant } from '../../utils/motion';
import loadTranslations from '@/utils/loadTranslations';

interface Form {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { lang, isContactPopUpOpen, toggleContactPopUp } = useContext(UIContext);
  const t = loadTranslations(lang).contactPopUp;

  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      return alert(t.alertError1);
    }

    if (!form.email.includes('@')) {
      return alert(t.alertError2);
    }

    if (form.message.trim().length < 10) {
      return alert(t.alertError3);
    }

    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Jose Manuel Montano Mengual',
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_MY_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: '',
            email: '',
            message: '',
          });
          alert(t.alertSuccess);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(t.alertError);
        }
      );
  };

  return (
    isContactPopUpOpen && (
      <section className='overflow-y-auto fixed top-1/2 h-screen left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary w-screen p-6 rounded-md'>
        <AnimatedWrapper>
          <motion.div
            variants={textVariant(0.1)}
            className='bg-black-100 p-8 mt-[10vh] mx-auto lg:max-h-[80vh] relative rounded-2xl lg:max-w-[800px]'
          >
            <Image
              src={close}
              alt='close button'
              className='w-[28px] h-[28px] object-contain absolute right-6 top-4 cursor-pointer'
              onClick={toggleContactPopUp}
            />

            <div>
              <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
                {t.upperTitle}
              </p>
              <a
                className=' mt-4 h-6 flex gap-3'
                target='_blank'
                href={process.env.NEXT_PUBLIC_LINKEDIN}
              >
                {t.callToAction}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-brand-linkedin'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
                  <path d='M8 11l0 5'></path>
                  <path d='M8 8l0 .01'></path>
                  <path d='M12 16l0 -5'></path>
                  <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>
                </svg>
              </a>
            </div>
            <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
              {t.title}
            </h3>

            <form onSubmit={handleSubmit} className='mt-6 sm:grid sm:grid-cols-2  gap-8'>
              <div>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>{t.name}</span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.nameLabel}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col my-4'>
                  <span className='text-white font-medium mb-4'>{t.email}</span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailLabel}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
              </div>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>{t.message}</span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.messageLabel}
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-tertiary mt-4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                {loading ? '...' : t.send}
              </button>
            </form>
          </motion.div>
        </AnimatedWrapper>
        <StarsCanvas />
      </section>
    )
  );
};

export default Contact;

