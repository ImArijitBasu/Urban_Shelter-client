import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ContactSupport = () => {
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState("");
  const [formData, setFormData] = useState({ name: "", subject: "", message: "" });
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axiosPublic.get("/users/admins");
        setAdmins(res.data);
      } catch (error) {
        console.error("Failed to fetch admins:", error);
      }
    };
    fetchAdmins();
  }, [axiosPublic]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdminChange = (e) => {
    setSelectedAdmin(e.target.value);
  };

  const handleSendEmail = () => {
    if (!selectedAdmin || !formData.name || !formData.subject || !formData.message) {
      Swal.fire("Please fill in all fields.");
      return;
    }

    const adminEmail = admins.find((admin) => admin._id === selectedAdmin)?.email;
    if (!adminEmail) return;

    const subject = encodeURIComponent(`Support Request: ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}`);
    const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-accent dark:text-neutral-white">Contact Support</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary dark:text-neutral-white">Select Admin</label>
          <select value={selectedAdmin} onChange={handleAdminChange} className="w-full p-3 border rounded-md">
            <option value="">Choose an Admin</option>
            {admins?.map((admin) => (
              <option key={admin._id} value={admin._id}>
                {admin.name} ({admin.email})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary dark:text-neutral-white">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary dark:text-neutral-white">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary dark:text-neutral-white">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            rows="4"
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleSendEmail} className="w-full p-3 bg-primary dark:bg-accent text-neutral-white rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSupport;
