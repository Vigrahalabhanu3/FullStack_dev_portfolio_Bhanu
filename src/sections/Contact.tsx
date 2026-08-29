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
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') setStatus('idle');
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
        USER_ID,
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
      icon: <Mail className="h-4 w-4 text-blue-600" />,
      title: 'Email',
      content: 'banuvigrahala@gmail.com',
      link: 'mailto:banuvigrahala@gmail.com',
    },
    {
      icon: <Phone className="h-4 w-4 text-blue-600" />,
      title: 'Phone',
      content: '+91 76719 88410',
      link: 'tel:+917671988410',
    },
    {
      icon: <MapPin className="h-4 w-4 text-blue-600" />,
      title: 'Location',
      content: 'Jangareddy Gudem, Andhra Pradesh, India',
      link: null,
    },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Vigrahalabhanu3', icon: Github },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhanu-prasad-848003289', icon: Linkedin },
    { label: 'Twitter / X', href: 'https://x.com/bhanu7671988410', icon: Twitter },
  ];

  const fields = [
    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
    { id: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
  ];

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle
        title="Get in Touch"
        highlight="Touch"
        subtitle="Have a project in mind or want to collaborate? Let's talk."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* Contact form */}
        <motion.div
          className="contact-card p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6">
            <p className="section-label mb-2">
              <Send className="h-3.5 w-3.5" />
              Send a message
            </p>
            <h3 className="text-xl font-semibold text-slate-900">I'd love to hear from you</h3>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field, index) => (
                <motion.div
                  key={field.id}
                  className={field.id === 'subject' ? 'sm:col-span-2' : ''}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.07 + 0.1, duration: 0.4 }}
                >
                  <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-slate-700">
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
                    autoComplete={field.id === 'email' ? 'email' : field.id === 'name' ? 'name' : 'off'}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.4 }}
            >
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact-input resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </motion.div>

            {status !== 'idle' && (
              <motion.p
                className={`mt-4 rounded-lg px-4 py-3 text-sm font-medium ${
                  status === 'success'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-red-50 text-red-700'
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status === 'success'
                  ? "✓ Message sent! I'll get back to you soon."
                  : '✕ Something went wrong. Please try again.'}
              </motion.p>
            )}

            <button
              type="submit"
              className="blue-button mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="contact-card p-6 md:p-8">
            <h3 className="mb-5 text-lg font-semibold text-slate-900">Contact Details</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors duration-200 hover:border-blue-100 hover:bg-blue-50/40"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.07 + 0.2, duration: 0.4 }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {info.title}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="mt-0.5 break-words text-sm font-medium text-slate-700 hover:text-blue-600"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-slate-700">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="contact-card p-6">
            <h4 className="mb-4 text-sm font-semibold text-slate-900">Find me online</h4>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-0.5"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
