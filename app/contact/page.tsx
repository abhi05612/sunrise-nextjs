"use client";
import { useState } from "react";
import { schoolConfig } from "../config/school";

export default function ContactPage() {
  const { contact } = schoolConfig;
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "sent" : "error");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact info */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-5">Get in Touch</h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex gap-3 items-start">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-semibold text-primary">Address</div>
                <div className="text-sm">{contact.address}</div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl">📞</span>
              <div>
                <div className="font-semibold text-primary">Phone</div>
                <a href={`tel:${contact.phone}`} className="text-sm hover:text-secondary">{contact.phone}</a>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl">✉️</span>
              <div>
                <div className="font-semibold text-primary">Email</div>
                <a href={`mailto:${contact.email}`} className="text-sm hover:text-secondary">{contact.email}</a>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-accent rounded-lg h-52 flex items-center justify-center text-gray-400 text-sm">
            {contact.mapEmbed
              ? <iframe src={contact.mapEmbed} className="w-full h-full rounded-lg" loading="lazy" />
              : "📍 Map will appear here (add Google Maps embed URL in config)"}
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-5">Send a Message</h2>

          {status === "sent" ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm mt-1">We&apos;ll get back to you soon.</p>
              <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                className="mt-4 text-sm text-primary underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full border border-border rounded px-4 py-2 text-sm" placeholder="Your Name *"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              <input type="email" className="w-full border border-border rounded px-4 py-2 text-sm" placeholder="Email Address *"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              <input className="w-full border border-border rounded px-4 py-2 text-sm" placeholder="Phone Number"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <input className="w-full border border-border rounded px-4 py-2 text-sm" placeholder="Subject"
                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
              <textarea className="w-full border border-border rounded px-4 py-2 text-sm" rows={4} placeholder="Your Message *"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
              {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={status === "sending"}
                className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-secondary transition-colors disabled:opacity-60">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
