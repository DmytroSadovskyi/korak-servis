const ContactForm = () => {
  return (
    <form className="max-w-lg mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Ime</label>
        <input type="text" id="name" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input type="text" id="email" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">Telefon</label>
        <input type="text" id="phone" className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-primary-blue text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all">
        Pošalji
      </button>
    </form>
  );
};

export default ContactForm;
