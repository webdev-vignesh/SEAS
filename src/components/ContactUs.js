import ContactBg from '../assets/rainbow-vortex.png';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9zfnox8', 'template_81k8iud', form.current, 'HYBjjeuMQGpesJ2gH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      document.getElementById("form").reset();
  };

    return (
      <div id="contactus">
        <div className="flex flex-col lg:flex-row justify-between md:px-4" style={{backgroundImage : `url(${ContactBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',}}>
          <div className="my-6 mx-10 md:mx-6 ">
            <h1 className="text-center font-bold text-2xl">Get In Touch</h1>
            <p className="">Want to find out how SEAS can solve problems specific to your business? Let's talk.</p>
            <div>
              <form id="form" ref={form} onSubmit={sendEmail} className= "mt-4 mx-10 border-[1px] border-black p-4 bg-white rounded-lg">
                <div className="flex flex-col mt-2">
                  <label className="font-semibold">Name:</label>
                  <input className=" mt-2 rounded-md p-1 bg-gray-200" type="text" name="user_name" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="font-semibold">Email:</label>
                  <input className=" mt-2 rounded-md p-1 bg-gray-200" type="email" name="user_email" placeholder="Enter your email" />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="font-semibold">Message:</label>
                  <textarea className="mt-2 h-24 p-1 rounded-md bg-gray-200" placeholder="Enter your message.." name="message" />
                </div>
                <div className="mt-3">
                  <input className=" mx-auto  rounded-lg transition-colors duration-150 focus:shadow-outline p-2 text-white bg-blue-500 hover:bg-blue-800" type="submit" value="Send" onClick={()=>{window.alert("Thank you for contacting us!");}} />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col my-10 mx-10 md:mx-0 lg:mr-auto space-y-5">
            <div className="flex lg:justify-between space-x-6 md:space-x-10 lg:space-x-10 mb-4 md:ml-16 lg:mt-10 items-center">
            <a href="tel:+919092094930">
              <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
            <a href="mailto:sakthi.seas@gmail.com" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>  
            <a href="https://www.linkedin.com/company/s-e-a-a-s/" target="_blank" rel="noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-160-461814.png?w=256&f=avif" alt="linkedin" className="h-10 w-10 border-[2px] rounded-md border-black"/></a>
            </div>
            <div className="md:ml-16">
              <h5 className="font-bold text-2xl">SEAS Tech</h5>
              <p>No. 11, 1st Floor, Avvai Street</p>
              <p>Meenakshi Amman Nagar, </p>
              <p>Alwarthiru Nagar, Valasaravakkam</p>
              <p>Chennai - 600087</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  