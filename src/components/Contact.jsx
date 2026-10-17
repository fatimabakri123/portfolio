


function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <div className="contact-box">

          <div className="contact-content">
            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Let's build something
              <span> great together.</span>
            </h2>

            <p className="contact-description">
              Have a project in mind or just want to say hello?
              I'd love to hear from you.
            </p>
          </div>

          <div className="contact-links">

            {/* Email */}
           
{/* Email */}
<a href="mailto:fatima9ali10@gmail.com">
  <span className="contact-icon">@</span>
  <span>Email Me</span>
</a>


            {/* GitHub */}
            <a
              href="https://github.com/fatimabakri123"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">GH</span>
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fatima-bakri-307211319?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">in</span>
              <span>LinkedIn</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;



