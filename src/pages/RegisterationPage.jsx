import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

// Event Data
const technicalEvents = [
  { id: "hackathon", name: "Hackathon", fee: 300 },
  { id: "paper", name: "Paper Presentation", fee: 150 },
  { id: "debug", name: "Debugging", fee: 100 },
  { id: "quiz", name: "Quiz", fee: 80 },
];

const nonTechnicalEvents = [
  { id: "gaming", name: "Gaming", fee: 200 },
  { id: "treasure", name: "Treasure Hunt", fee: 150 },
  { id: "photography", name: "Photography", fee: 120 },
];

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    selectedEvents: [],
  });

  const [total, setTotal] = useState(0);
  const [eventType, setEventType] = useState("technical");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectEvent = (e) => {
    const eventId = e.target.value;
    if (!eventId) return;

    const eventsList =
      eventType === "technical" ? technicalEvents : nonTechnicalEvents;
    const selectedEvent = eventsList.find((ev) => ev.id === eventId);

    // Prevent duplicates
    if (formData.selectedEvents.some((ev) => ev.id === eventId)) return;

    const updatedEvents = [...formData.selectedEvents, selectedEvent];
    setFormData({ ...formData, selectedEvents: updatedEvents });
    setTotal(total + selectedEvent.fee);
  };

  const removeEvent = (eventId) => {
    const updatedEvents = formData.selectedEvents.filter(
      (ev) => ev.id !== eventId
    );
    const removedEvent = formData.selectedEvents.find((ev) => ev.id === eventId);
    setFormData({ ...formData, selectedEvents: updatedEvents });
    setTotal(total - (removedEvent?.fee || 0));
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/create-order", {
        amount: total * 100,
        currency: "INR",
        receipt: "receipt#1",
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: res.data.amount,
        currency: res.data.currency,
        order_id: res.data.id,
        name: "Arcane 2K25",
        description: "Event Registration Fee",
        handler: function (response) {
          alert("Payment successful: " + response.razorpay_payment_id);
          axios.post("http://localhost:5000/save-registration", {
            ...formData,
            total,
            paymentId: response.razorpay_payment_id,
          });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#7E22CE",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-900 text-white">
        {/* Registration Form */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-purple-400">
            Register for Arcane 2K25
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="college"
            placeholder="College Name"
            className="w-full p-3 rounded bg-gray-800"
            onChange={handleInputChange}
          />

          {/* Toggle between Technical / Non-Technical */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setEventType("technical")}
              className={`px-4 py-2 rounded ${
                eventType === "technical"
                  ? "bg-purple-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setEventType("non-technical")}
              className={`px-4 py-2 rounded ${
                eventType === "non-technical"
                  ? "bg-purple-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              Non-Technical
            </button>
          </div>

          {/* Dropdown to Select Event */}
          <select
            onChange={handleSelectEvent}
            className="w-full mt-4 p-3 rounded bg-gray-800"
            defaultValue=""
          >
            <option value="">Select {eventType} Event</option>
            {(eventType === "technical"
              ? technicalEvents
              : nonTechnicalEvents
            ).map((event) => (
              <option key={event.id} value={event.id}>
                {event.name} (₹{event.fee})
              </option>
            ))}
          </select>

          {/* Selected Events Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {formData.selectedEvents.map((ev) => (
              <div
                key={ev.id}
                className="flex items-center gap-2 bg-purple-700 px-3 py-1 rounded-full"
              >
                <span>{ev.name}</span>
                <button
                  onClick={() => removeEvent(ev.id)}
                  className="bg-red-500 text-white rounded-full px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handlePayment}
            disabled={total === 0}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg mt-6 font-semibold"
          >
            Proceed to Pay
          </button>
        </div>

        {/* Summary Box */}
        <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg h-fit sticky top-6">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <ul className="space-y-2">
            {formData.selectedEvents.map((ev) => (
              <li key={ev.id} className="flex justify-between">
                <span>{ev.name}</span>
                <span className="text-purple-400">₹{ev.fee}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-gray-600" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-purple-400">₹{total}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
