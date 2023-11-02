'use client';

import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { close } from '@/assets';
import StarsCanvas from '../canvas/Stars';
import { textVariant } from '../../utils/motion';
import AnimatedWrapper from '../Wrappers/AnimatedWrapper';
import { UIContext } from '@/context/ui/UIContext';

interface Form {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { isContactPopUpOpen, toggleContactPopUp } = useContext(UIContext);

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
      return alert('Name length should have a length of at least 2 letters.');
    }

    if (!form.email.includes('@')) {
      return alert('Your email is invalid');
    }

    if (form.message.trim().length < 10) {
      return alert('The message should be at least 10 letters long.');
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
          alert('Thank you. Your message was succesfully sent');
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong');
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
            <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
              Get in touch
            </p>
            <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
              Contact.
            </h3>

            <form onSubmit={handleSubmit} className='mt-6 sm:grid sm:grid-cols-2  gap-8'>
              <div>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Your Name</span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col my-4'>
                  <span className='text-white font-medium mb-4'>Your email</span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
              </div>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-tertiary mt-4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                {loading ? 'Sending...' : 'Send'}
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

