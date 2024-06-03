import React, { useState } from "react";
import './contact.css';

const Contact = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        termsAccepted: false,
    });

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.termsAccepted) {
            alert("Please accept the terms and conditions");
            return;
        }
        try {
            const response = await fetch("https://getform.io/f/zazkjjeb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Form submitted successfully!");
                setIsPopupOpen(false);
                setFormData({
                    email: '',
                    firstName: '',
                    lastName: '',
                    termsAccepted: false,
                });
            } else {
                alert("Failed to submit the form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form");
        }
    };

    return (
        <div className="contact-section">
            <div className="text-container">
                <div className="award-container">
                    AWARD WINNING
                </div>
                <div className="agency-container">
                    Digital Marketing Agency
                </div>
                <div className="small-container">
                    Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
                </div>
                <div className="contact-container" onClick={togglePopup}>
                    CONTACT US
                </div>
            </div>
            <div className="img-container"></div>
            {isPopupOpen && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-form" onClick={(e) => e.stopPropagation()}>
                        <h2>Talk to Us</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    required
                                />
                                I accept to Fyle's terms and conditions, and provide consent to send me communication.
                            </label>
                            <button type="submit">Contact Us</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
