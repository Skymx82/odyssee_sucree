'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: ''
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'odysseesucree82@gmail.com',
      link: 'mailto:odysseesucree82@gmail.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '06 34 84 91 82',
      link: 'tel:+33634849182'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Puycornet (près de Montauban)',
      link: 'https://maps.google.com/?q=101+Route+de+l\'Honor+de+Cos,+82220+Puycornet'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#F3E8FF]/30 relative overflow-hidden" id="contact">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD]/5 via-transparent to-[#D8C7E8]/5" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <Badge 
            variant="secondary" 
            className="mb-8 px-10 py-4 text-sm font-semibold tracking-wider uppercase"
          >
            Contactez-nous
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-8 max-w-4xl">
            Créons Ensemble Votre Gâteau de Rêve
          </h2>
          <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
            Partagez-nous votre projet et donnons vie à vos envies sucrées
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#2D2D2D]">
                Restons en Contact
              </h3>
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                N'hésitez pas à me contacter pour toute demande de création sur mesure, 
                devis ou simplement pour discuter de votre projet.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D8C7E8]/20 group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#6B6B6B] font-medium">{info.title}</p>
                        <p className="text-lg font-semibold text-[#2D2D2D]">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-[#D8C7E8]/20">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#6B6B6B] font-medium">{info.title}</p>
                        <p className="text-lg font-semibold text-[#2D2D2D]">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#FADADD]/20 to-[#D8C7E8]/20 rounded-2xl p-8 border border-[#D8C7E8]/30"
            >
              <p className="text-lg text-[#2D2D2D] font-semibold mb-2">
                ⏱️ Délai de réponse
              </p>
              <p className="text-[#6B6B6B]">
                Je réponds généralement sous 24h pour discuter de votre projet et établir un devis personnalisé.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-[#D8C7E8]/20">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C7E8]/30 focus:border-[#9B7AB8] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C7E8]/30 focus:border-[#9B7AB8] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C7E8]/30 focus:border-[#9B7AB8] focus:outline-none transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Date de l'événement
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C7E8]/30 focus:border-[#9B7AB8] focus:outline-none transition-colors"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Type d'événement *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C7E8]/30 focus:border-[#9B7AB8] focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="Mariage">Mariage</option>
                    <option value="Anniversaire">Anniversaire</option>
                    <option value="Baptême">Baptême</option>
                    <option value="Entreprise">Événement d'entreprise</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#D8C7E8]/30 focus:border-[#9B7AB8] focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez-nous votre projet, vos envies, le nombre de personnes..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-600 text-sm flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all"
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>

                <p className="text-sm text-[#6B6B6B] text-center">
                  En envoyant ce formulaire, vous acceptez d'être contacté par email ou téléphone.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
