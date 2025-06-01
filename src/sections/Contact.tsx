import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Import emailjs

const SERVICE_ID = 'service_86238my';
const TEMPLATE_ID = 'template_vgryewi';
const USER_ID = '5Chut7FuFRfrhyX6Z';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [sending, setSending] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      );
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Sorry, something went wrong. Please try again later.');
    }
    setSending(false);
  };

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      const items = document.querySelectorAll('.contact-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('fade-in-up');
        }, 150 * index);
      });
    }
  }, [inView, animationTriggered]);

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5 text-blue-600" />, 
      title: 'Email', 
      content: 'banuvigrahala@gmail.com', 
      link: 'mailto:banuvigrahala@gmail.com' 
    },
    { 
      icon: <Phone className="h-5 w-5 text-blue-600" />, 
      title: 'Phone', 
      content: '+91 76719 88410', 
      link: 'tel:7671988410' 
    },
    { 
      icon: <MapPin className="h-5 w-5 text-blue-600" />, 
      title: 'Location', 
      content: 'pin-code:534447 Jangareddy Gudem, Mangisetti Gudem , AP, India',
      link: null 
    }
  ];

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="Let's Connect with Bhanu " 
        highlight="Connect with Bhanu"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="contact-item opacity-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="Your email address"
              /> 
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="Subject of your message"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact-input"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button type="submit" className="blue-button w-full" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="contact-item opacity-0 lg:pl-8">
          <div className="bg-white rounded-xl shadow-md p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-full mr-4">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-blue-600">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-5">
                <a 
                  href="https://github.com/Vigrahalabhanu3" 
                  className="p-2 bg-blue-50 rounded-full text-blue-700 hover:bg-blue-100 transition-colors duration-700"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/bhanu-prasad-848003289" 
                  className="p-2 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/bhanu7671988410" 
                  className="p-2 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;