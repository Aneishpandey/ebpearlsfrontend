"use client"

import { useState, useCallback, memo } from "react"
import Button from "../common/Button"

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
}

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))

      // Clear error when user starts typing
      if (formErrors[name]) {
        setFormErrors((prev) => ({
          ...prev,
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
    <section className="contact-us">
      <div className="contact-us-container">
        <h2 className="contact-us-title">Contact us</h2>
        <p className="contact-us-subtitle">Speak with our team to see how we can help your business.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={`form-input ${formErrors.name ? "error" : ""}`}
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`form-input ${formErrors.email ? "error" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your best contact number"
              className={`form-input ${formErrors.phone ? "error" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          </div>

          <div className="form-group">
  <input
    type="text"
    name="company"
    placeholder="Business or company name"
    className={`form-input company-input ${formErrors.company ? "error" : ""}`}
    value={formData.company}
    onChange={handleChange}
  />
  {formErrors.company && <span className="error-message">{formErrors.company}</span>}
</div>

          <Button text="Submit" variant="primary" type="submit" className="button" disabled={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default memo(ContactUs)
