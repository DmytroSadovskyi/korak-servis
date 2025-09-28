import { ContactForm } from "@/components/ContactForm";
import croatianLang from "@/messages/hr.json";

export const Contact = () => {

const {contact: {title, subtitle}} = croatianLang;

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
       <ContactForm/>
      </div>
    </section>
  );
};
