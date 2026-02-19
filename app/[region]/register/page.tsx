"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess("✅ Registration request sent successfully!");
      setFormData({
        shopName: "",
        ownerName: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      });
    } else {
      setSuccess("❌ Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-lg w-full bg-white/5 border border-white/10 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-yellow-400">
          Register Your Shop
        </h1>

        <p className="text-white/70 mb-6">
          Fill the form and we’ll contact you to activate your Scan4Discount
          account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="shopName"
            placeholder="Shop Name"
            value={formData.shopName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-white/20"
          />

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-white/20"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-white/20"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-white/20"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-black border border-white/20"
          />

          <textarea
            name="message"
            placeholder="Tell us about your shop (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black border border-white/20"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-center text-sm text-white/80">{success}</p>
        )}
      </div>
    </div>
  );
}
