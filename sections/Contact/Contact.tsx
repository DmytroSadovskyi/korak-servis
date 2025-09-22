import {ContactForm} from "@/components/ContactForm";

export const Contact = () => {

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Please describe your question and we will answer you</p>
        </div>
       <ContactForm/>
      </div>
    </section>
  );
};
