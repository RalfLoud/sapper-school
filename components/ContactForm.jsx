"use client";

import { useEffect, useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toastVisible, setToastVisible] = useState(false);
  
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const text = `
🟢 Новое сообщение:
👤 Имя: ${form.name}
📧 Email: ${form.email}
💬 Сообщение: ${form.message}
`;
    
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
            text,
          }),
        }
      );
      
      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 4000);
      } else {
        alert("Ошибка при отправке сообщения");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка сети");
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Связаться с нами</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="name"
          type="text"
          placeholder="Имя"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full bg-dark border border-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-dark border border-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition"
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          rows="5"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full bg-dark border border-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-primary transition"
        />
        <button
          type="submit"
          className="bg-primary text-black font-bold text-sm uppercase px-6 py-3 rounded-md shadow-lg hover:scale-105 transition transform duration-300"
        >
          Отправить
        </button>
      </form>
      
      {/* ✅ TOAST */}
      {toastVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-600 text-white px-6 py-4 rounded-lg shadow-xl animate-fadeInUp font-medium">
            ✅ Сообщение отправлено!
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;