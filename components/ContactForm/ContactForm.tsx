'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { SubmitHandler } from 'react-hook-form';
import { FormData } from '@/types';
import { sendEmail } from '@/app/actions/sendMail';

export const ContactForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

   const onSubmit: SubmitHandler<FormData> = async data => {
    setLoading(true);
    const response = await sendEmail(data);
    setLoading(false);
    if (response.success) {
      toast.success('Email sent successfully!');
    } else {
      toast.error('Failed to send email.');
    }
    reset();
  };
  return (
    <>
   <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' },
              })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters' },
              })}
              aria-invalid={errors.message ? 'true' : 'false'}
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <Toaster
          toastOptions={{
            success: {
              style: {
                background: '#4caf50',
                color: '#fff',
              },
            },
            error: {
              style: {
                background: '#f44336',
                color: '#fff',
              },
            },
          }}
      />
    </>
  );
};

export default ContactForm;
