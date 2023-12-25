import React from 'react'


const Contact = () => {

  return (
    <>
    <br /><br /><br />
    <div>

      <div className="container bg-dark text-white py-5 mt-4">
        <h1 className="text-center">Get in Touch</h1>
        <p className="para text-justify text-center">
          We welcome any inquiries, feedback, or collaboration opportunities you might have.
           Our team is dedicated to providing assistance, answering your questions, and exploring potential partnerships. 
           Feel free to reach out to us via the provided contact information or form below.
            We value your input and look forward to connecting with you.
        </p>
      </div>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107589.51508352974!2d74.00703207751118!3d32.57492745398489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b031e43442d%3A0x870fd23543d684c!2sGujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699952946301!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ "border": 0 }}
        AllowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">

      </iframe> */}
      <div className="container mt-4">
        <h2>Feel free to contact us</h2>
        
        <div className="contact-form">
          <form action='https://formspree.io/f/mqkvopnw' method="POST">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder='username' autoComplete='off' required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" name='email' placeholder='email' autoComplete='off' required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="message" rows="5" placeholder='message' required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
             <br />
        </div>
      </div>
    </div>

  </>
  )
}

export default Contact
