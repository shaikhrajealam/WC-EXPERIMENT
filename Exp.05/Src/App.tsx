import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[A-Za-z]{6,}$/.test(form.firstName)) {
      alert("First name must contain only letters and be at least 6 characters long.");
      return;
    }
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)) {
      alert("Enter a valid email address.");
      return;
    }
    if (!/^\d{10}$/.test(form.mobile)) {
      alert("Mobile number must be 10 digits.");
      return;
    }
    if (form.lastName.trim() === "" || form.address.trim() === "") {
      alert("Last Name and Address cannot be empty.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>📝 Registration Page</h1>
        <p className="subtitle">Please fill in the details below</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
          <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} />
          <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange}></textarea>
          <button type="submit">Register</button>
        </form>

        {submitted && (
          <div className="success">
            <h3>Registration Successful 🎉</h3>
            <p>Welcome, {form.firstName}!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
