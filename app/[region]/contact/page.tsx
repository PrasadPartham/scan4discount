"use client";

import { Mail, Phone, MapPin, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          shopName: formData.get('shopName'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        toast.success('Message Sent Successfully!', {
          description: 'We\'ll get back to you within 24 hours.',
          duration: 5000,
          icon: <CheckCircle2 className="text-green-500" />,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error('Failed to Send Message', {
          description: 'Please try again or contact us directly.',
          duration: 5000,
          icon: <XCircle className="text-red-500" />,
        });
      }
    } catch (error) {
      toast.error('Connection Error', {
        description: 'Please check your internet and try again.',
        duration: 5000,
        icon: <XCircle className="text-red-500" />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 pt-6 text-white">
      <Toaster 
        position="top-right" 
        richColors 
        closeButton
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
          },
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in <span className="text-yellow-400">Touch</span>
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Have questions, need support, or want a custom plan?
          We're here to help you grow your business.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl 
                     rounded-2xl p-8 space-y-6"
        >
          <Input label="Name" type="text" name="name" placeholder="Your name" />
          <Input label="Email" type="email" name="email" placeholder="you@example.com" />
          <Input label="Shop Name" type="text" name="shopName" placeholder="Your shop name" />

          <div>
            <label className="block text-sm text-white/70 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us how we can help you..."
              className="w-full rounded-xl bg-black/40 border border-white/10 
                         px-4 py-3 text-white placeholder-white/40
                         focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold 
                       hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center space-y-8"
        >
          <ContactItem
            icon={<Mail className="w-6 h-6 text-yellow-400" />}
            title="Email"
            value="support@scan4discount.com"
          />

          <ContactItem
            icon={<Phone className="w-6 h-6 text-yellow-400" />}
            title="Phone"
            values={[
              "🇮🇳 +91 89776 39611",
              "🇺🇸 +1 (214) 842 - 5345",
            ]}
          />

          <ContactItem
            icon={<MapPin className="w-6 h-6 text-yellow-400" />}
            title="Locations"
            values={[
              "🇮🇳 India",
              "🇺🇸 United States",
            ]}
          />
        </motion.div>
      </div>
    </main>
  );
}


function ContactItem({
  icon,
  title,
  value,
  values,
}: {
  icon: React.ReactNode;
  title: string;
  value?: string;
  values?: string[];
}) {
  const list = values ?? (value ? [value] : []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-4"
    >
      <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <ul className="mt-1 space-y-1">
          {list.map((item, index) => (
            <li key={index} className="text-white/70 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Input({
  label,
  type,
  name,
  placeholder,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-black/40 border border-white/10 
                   px-4 py-3 text-white placeholder-white/40
                   focus:outline-none focus:border-yellow-400 transition"
      />
    </div>
  );
}