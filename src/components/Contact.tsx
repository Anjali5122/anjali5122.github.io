import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    // Simulate async send — wire up to your backend / EmailJS / Formspree here
    // await new Promise((res) => setTimeout(res, 1000));
    document.getElementById('contact-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        // emailjs.sendForm('contact_service', 'contact_form')
        //     .then(() => {
        //         console.log('SUCCESS!');
        //     }, (error: any) => {
        //         console.log('FAILED...', error);
        //     });
      });

    const formElement = document.getElementById('contact-form') as HTMLFormElement;
    emailjs
      .sendForm("service_r6nydd7", "template_1liywbd", formElement, "nwTmmSSrbobBNXMUW")
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log('FAILED...', err);
        }
      );
    setLoading(false);
    setSubmitted(true);

    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>
          Let's <span>Connect</span>
        </h2>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h3>
              Open to new opportunities, collaborations, and interesting
              conversations. Don't hesitate to reach out.
            </h3>

            <div className="contact-detail">
              <p className="contact-detail-label">Location</p>
              <p className="contact-detail-value">Toronto, CA</p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail-label">Email</p>
              <p className="contact-detail-value">anjaliparikh123@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail-label">GitHub</p>
              <p className="contact-detail-value">github.com/anjali5122</p>
            </div>
            <div className="contact-detail">
              <p className="contact-detail-label">LinkedIn</p>
              <a href="https://www.linkedin.com/in/anjali-parikh/" className="contact-detail-value" target="_blank"> www.linkedin.com/in/anjali-parikh</a>
            </div>
          </div>

          {/* Form */}
          {/* <div className="contact-form"> */}
            <form id="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Job opportunity / Collab idea / Just saying hi"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or what you have in mind..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="form-submit">
              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={loading}
                style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              <span className={`submit-status ${submitted ? 'visible' : ''}`}>
                ✓ Message sent!
              </span>
            </div>
            </form>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
