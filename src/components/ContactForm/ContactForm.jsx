"use client"

import { useState, useCallback, memo } from "react"
import Button from "../common/Button"
import "./ContactForm.css"

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))

      // Clear error when user starts typing
      if (formErrors[name]) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }))
      }
    },
    [formErrors],
  )

  const validateForm = useCallback(() => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    }

    if (!formData.company.trim()) {
      errors.company = "Company name is required"
    }

    return errors
  }, [formData])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      const errors = validateForm()
      setFormErrors(errors)

      if (Object.keys(errors).length === 0) {
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
          console.log("Form submitted:", formData)
          setFormData(initialFormState)
          setIsSubmitting(false)
        }, 1000)
      }
    },
    [formData, validateForm],
  )

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-subtitle">Speak with our team to see how we can help your business.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className={`form-input ${formErrors.name ? "error" : ""}`}
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className={`form-input ${formErrors.email ? "error" : ""}`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className={`form-input ${formErrors.phone ? "error" : ""}`}
              placeholder="Your best contact number"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="company"
              className={`form-input ${formErrors.company ? "error" : ""}`}
              placeholder="Business or company name"
              value={formData.company}
              onChange={handleChange}
            />
            {formErrors.company && <span className="error-message">{formErrors.company}</span>}
          </div>

          <Button text="Submit" variant="primary" className="submit-button" type="submit" disabled={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default memo(ContactForm)
