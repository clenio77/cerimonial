import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import useForm from '../hooks/useForm';
import { sendContactForm } from '../services/contactService';
import { isEmail, isPhone, isRequired } from '../utils/validators';

export default function Contato() {
  const {
    values,
    setValues,
    touched,
    setTouched,
    errors,
    setErrors,
    handleChange,
    handleBlur,
  } = useForm({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const eventTypeRef = useRef();
  const eventDateRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      if (errors.name) nameRef.current?.focus();
      else if (errors.email) emailRef.current?.focus();
      else if (errors.phone) phoneRef.current?.focus();
      else if (errors.eventType) eventTypeRef.current?.focus();
      else if (errors.eventDate) eventDateRef.current?.focus();
      else if (errors.message) messageRef.current?.focus();
    }
  }, [errors]);

  function validate(values) {
    const newErrors = {};
    if (!isRequired(values.name)) newErrors.name = 'Nome é obrigatório.';
    if (!isRequired(values.email)) newErrors.email = 'Email é obrigatório.';
    else if (!isEmail(values.email)) newErrors.email = 'Email inválido.';
    if (!isRequired(values.phone)) newErrors.phone = 'Telefone é obrigatório.';
    else if (!isPhone(values.phone)) newErrors.phone = 'Telefone inválido.';
    if (!isRequired(values.eventType)) newErrors.eventType = 'Tipo de evento é obrigatório.';
    if (!isRequired(values.eventDate)) newErrors.eventDate = 'Data do evento é obrigatória.';
    if (!isRequired(values.message)) newErrors.message = 'Mensagem é obrigatória.';
    return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      eventType: true,
      eventDate: true,
      message: true
    });
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    try {
      const res = await sendContactForm(values);
      setFormStatus({
        submitted: true,
        success: res.success,
        message: res.message
      });
      if (res.success) {
        setValues({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: ''
        });
        setTouched({});
      }
    } catch (err) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Erro ao enviar mensagem. Tente novamente.'
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Estou à disposição para ajudar a tornar seu evento especial
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
              <p className="text-gray-600 mb-8">
                Ficarei feliz em responder suas perguntas e discutir como posso ajudar a tornar seu evento especial. Entre em contato por qualquer um dos meios abaixo ou preencha o formulário.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 mr-4 rounded-full">
                    <FaPhone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-gray-600">(00) 00000-0000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 mr-4 rounded-full">
                    <FaEnvelope className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">contato@cerimonial.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 mr-4 rounded-full">
                    <FaMapMarkerAlt className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-600">Rua Exemplo, 123 - Cidade, Estado</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold mb-4">Horário de Atendimento</h3>
                <p className="text-gray-600 mb-2">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-600">Sábado: 9h às 13h</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
              {formStatus.submitted ? (
                <div className={`bg-${formStatus.success ? 'green' : 'red'}-100 border-${formStatus.success ? 'green' : 'red'}-400 text-${formStatus.success ? 'green' : 'red'}-800 border-l-4 p-4 mb-4`}>
                  {formStatus.message}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-live="polite">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome <span className="text-red-600" aria-hidden="true">*</span></label>
                    <input
                      ref={nameRef}
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Seu nome"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                    />
                    {errors.name && touched.name && (
                      <span id="name-error" className="text-red-600 text-sm" aria-live="assertive">{errors.name}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email <span className="text-red-600" aria-hidden="true">*</span></label>
                    <input
                      ref={emailRef}
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="seu.email@exemplo.com"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && touched.email && (
                      <span id="email-error" className="text-red-600 text-sm" aria-live="assertive">{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefone <span className="text-red-600" aria-hidden="true">*</span></label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="(00) 00000-0000"
                      required
                      aria-invalid={!!errors.phone}
                      aria-describedby="phone-error"
                    />
                    {errors.phone && touched.phone && (
                      <span id="phone-error" className="text-red-600 text-sm" aria-live="assertive">{errors.phone}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-gray-700 font-bold mb-2">Tipo de Evento <span className="text-red-600" aria-hidden="true">*</span></label>
                    <input
                      ref={eventTypeRef}
                      type="text"
                      id="eventType"
                      name="eventType"
                      value={values.eventType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border ${errors.eventType && touched.eventType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Ex: Casamento, Aniversário, etc."
                      required
                      aria-invalid={!!errors.eventType}
                      aria-describedby="eventType-error"
                    />
                    {errors.eventType && touched.eventType && (
                      <span id="eventType-error" className="text-red-600 text-sm" aria-live="assertive">{errors.eventType}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-gray-700 font-bold mb-2">Data do Evento <span className="text-red-600" aria-hidden="true">*</span></label>
                    <input
                      ref={eventDateRef}
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={values.eventDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    {errors.eventDate && touched.eventDate && (
                      <span id="eventDate-error" className="text-red-600 text-sm" aria-live="assertive">{errors.eventDate}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem <span className="text-red-600" aria-hidden="true">*</span></label>
                    <textarea
                      ref={messageRef}
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Como podemos ajudar?"
                      rows="5"
                      required
                    ></textarea>
                    {errors.message && touched.message && (
                      <span id="message-error" className="text-red-600 text-sm" aria-live="assertive">{errors.message}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-60"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
