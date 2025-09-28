'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { SubmitHandler } from 'react-hook-form';
import { FormData } from '@/types';
import { sendEmail } from '@/app/actions/sendMail';
import croatianLang from '@/messages/hr.json';

export const ContactForm = () => {

  const {contact: {form:{nameLabel,requiredNameMessage,nameInvalidMessage,requiredEmailMessage,requiredMessageMessage,emailInvalidMessage,submitButton,processingMessage,emailLabel,errorMessage,messageInvalidMessage,messageLabel, successMessage}}} = croatianLang;

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
      toast.success(successMessage);
    } else {
      toast.error(errorMessage);
    }
    reset();
  };
  return (
    <>
   <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      
          <div className="form-group">
            <label htmlFor="name">{nameLabel}</label>
            <input
              id="name"
              type="text"
              {...register('name', {
                required: requiredNameMessage,
                minLength: { value: 2, message: nameInvalidMessage },
              })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">{emailLabel}</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: requiredEmailMessage,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: emailInvalidMessage,
                },
              })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">{messageLabel}</label>
            <textarea
              id="message"
              rows={5}
              {...register('message', {
                required: requiredMessageMessage,
                minLength: { value: 10, message: messageInvalidMessage },
              })}
              aria-invalid={errors.message ? 'true' : 'false'}
            ></textarea>
            {errors.message && <p className="error">{errors.message.message}</p>}
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? processingMessage : submitButton}
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
