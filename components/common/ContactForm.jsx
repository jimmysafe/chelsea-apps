import Accordion from './Accordion'
import { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { siteUrl } from '../../utils'

const ContactForm = () => {

    const [submitting, setSubmitting] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage]= useState(false)
    const [showErrorMessage, setShowErrorMessage]= useState(false)
    
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '', 
          company: '',  
          message: ''
        },
        onSubmit: async(values) => {
            setSubmitting(true)
            let res = await axios.post(`${siteUrl}/api/mail`, { values })
            if(res.data.success) {
                setSubmitting(false)
                formik.handleReset()
                setShowSuccessMessage(true)
                setShowErrorMessage(false)
            } else {
                setSubmitting(false)
                setShowSuccessMessage(false)
                setShowErrorMessage(true)
            }
        },
      });

    
    return (
        <div id="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 py-5">
                        <h3 className="contact-title" style={{ color: 'white', padding: '9px 0'}}>Contact us</h3>
                        <div className="form-container">
                        
                            <form id="form_contact" className="input-form" onSubmit={formik.handleSubmit}>
                                <div className="cover-form">
                                    <input 
                                        name="name"
                                        type="text" 
                                        className="input-style name-contact" 
                                        placeholder="Name" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.name}
                                    />
                                </div>
                                <div className="cover-form">
                                    <input 
                                        name="email"
                                        type="email" 
                                        className="input-style email-contact" 
                                        placeholder="Email" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.email}
                                        required
                                    />
                                </div>
                                <div className="cover-form">
                                    <input 
                                        name="company"
                                        type="text" 
                                        className="input-style company-contact" 
                                        placeholder="Company" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.company}
                                        required
                                    />
                                </div>
                                <div className="cover-form">
                                    <textarea 
                                        name="message" 
                                        className="input-style message-contact" 
                                        cols="40" 
                                        rows="10"  
                                        aria-required="true" 
                                        aria-invalid="false" 
                                        placeholder="Message" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.message}
                                        required
                                    />
                                </div>

                                {showErrorMessage || showSuccessMessage &&
                                    <div className="notification">
                                        {showSuccessMessage && 
                                            <div className="notification-message success">
                                                <p>Message Sent! Check your inbox</p>
                                            </div>
                                        }
                                        {showErrorMessage &&
                                            <div className="notification-message error">
                                                <p>Oops! Something went wrong</p>
                                            </div>
                                        }
                                    </div>
                                }

                                <div className="leak svg-right svg-white">                              
                                {/* {{ source ('images/shape.svg') }} */}
                                </div>
                                <button 
                                    type="submit"
                                    className="form-contact-submit progress-button" 
                                    data-style="fill" 
                                    data-horizontal
                                    disabled={submitting}
                                >
                                        {submitting ? 'Loading..' : 'Submit'}
                                </button>
                        </form>
                        
                        </div>
                    </div>
                    
                    <div className="col-md-5 py-5">
                        <Accordion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
