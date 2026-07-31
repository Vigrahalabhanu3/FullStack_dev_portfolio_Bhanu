import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus('idle');
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
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setSending(false);
  };

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

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Vigrahalabhanu3',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bhanu-prasad-848003289',
      icon: Linkedin,
    },
    {
      label: 'Twitter',
      href: 'https://x.com/bhanu7671988410',
      icon: Twitter,
    },
  ];

  const fields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Your email address' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject of your message' },
  ];

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="Let's Connect with Bhanu " 
        highlight="Connect with Bhanu"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          className="contact-card p-6 md:p-8"
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7">
            <p className="mb-2 inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
              <Send className="h-4 w-4" />
              Start a conversation
            </p>
            <h3 className="text-2xl font-bold text-slate-900">Send me a message</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field, index) => (
                <motion.div
                  key={field.id}
                  className={field.id === 'subject' ? 'md:col-span-2' : ''}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08 + 0.12, duration: 0.45 }}
                >
                  <label htmlFor={field.id} className="mb-2 block font-semibold text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.36, duration: 0.45 }}
            >
              <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">Message</label>
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
            </motion.div>

            {status !== 'idle' && (
              <motion.p
                className={`mt-5 rounded-md px-4 py-3 text-sm font-semibold ${
                  status === 'success'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-red-50 text-red-700'
                }`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status === 'success'
                  ? 'Thank you for your message. I will get back to you soon.'
                  : 'Sorry, something went wrong. Please try again later.'}
              </motion.p>
            )}
            
            <motion.button
              type="submit"
              className="blue-button group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden disabled:cursor-not-allowed disabled:opacity-70"
              disabled={sending}
              whileHover={!sending ? { y: -4, boxShadow: '0 18px 34px rgba(37, 99, 235, 0.26)' } : {}}
              whileTap={!sending ? { scale: 0.97 } : {}}
            >
              <motion.span
                className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/45 blur-sm"
                initial={{ x: '-140%', opacity: 0 }}
                whileHover={!sending ? { x: '140%', opacity: [0, 0.55, 0] } : {}}
                transition={{ duration: 0.72, ease: 'easeOut' }}
              />
              <span className="relative z-10">{sending ? 'Sending...' : 'Send Message'}</span>
              <motion.span
                className="relative z-10"
                animate={sending ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 0.8, repeat: sending ? Infinity : 0 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.button>
          </form>
        </motion.div>
        
        <motion.div
          className="lg:pl-4"
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-card relative h-full overflow-hidden p-6 md:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50" />
            <h3 className="relative mb-6 text-2xl font-bold text-slate-900">Contact Information</h3>
            
            <div className="relative mb-8 space-y-5">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="group flex items-start rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-colors duration-300 hover:border-blue-100 hover:bg-blue-50/40"
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.08 + 0.24, duration: 0.45 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="mr-4 rounded-md bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-white">{info.icon}</div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="break-words text-gray-600 hover:text-blue-600">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative">
              <h4 className="mb-4 font-semibold text-gray-900">Follow Me</h4>
              <div className="flex gap-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-blue-700 transition-colors duration-300 hover:bg-white"
                    aria-label={label}
                    whileHover={{ y: -4, rotate: 3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
