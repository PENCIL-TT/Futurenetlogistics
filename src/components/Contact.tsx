import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>

        {!submitted ? (
          <form
            action="https://formsubmit.co/info@oneglobalqatar.com"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            {/* IMPORTANT FORM SUBMIT CONFIG */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />
            <input type="hidden" name="_template" value="table" />

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border px-4 py-3 rounded-md"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border px-4 py-3 rounded-md"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full border px-4 py-3 rounded-md"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-3 rounded-md hover:bg-red-hover transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          /* THANK YOU MESSAGE */
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-accent mb-2">
              Thank You!
            </h3>
            <p className="text-muted-foreground">
              Your message has been sent successfully.  
              We will get back to you shortly.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Contact;
