'use client';

import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((reject) => setTimeout(reject, 1000));

      toast.success('Thank you for your message! We will get back to you soon.', {
        position: 'top-right',
      });

      reset();
    } catch (error) {
      toast.error('Error submitting form. Please try again.', {
        position: 'top-right',
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Please describe your question and we will answer you</p>
        </div>

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

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
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
      </div>
    </section>
  );
};
