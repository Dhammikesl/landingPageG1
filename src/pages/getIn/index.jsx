import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';




const GetInTouch = () => {
    const [formSuccess, setFormSuccess] = useState(false);
    const [formFail, setFormFail] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (Object.keys(newErrors).length === 0) {
            const formBody = {
                Name: formData.name,
                Email: formData.email,
                Company: formData.company,
                Message: formData.message
            };

            return fetch(
                {
                    mode: "no-cors",
                    method: "POST",
                    body: JSON.stringify(formBody),
                    headers: new Headers({
                        "Content-Type": "application/json"
                    })
                }
            )
                .then((res) => {
                    setFormSuccess(true)

                    setFormData({
                        name: "",    
                        email: "",
                        company: "",
                        message: ""
                    });

                })
                .catch((err) => {
                    setFormFail(true)
                });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='row p-0 m-0'>
            <div className='col-12 p-0 m-0'>
                <div className='section-padding' id='get-in-touch'>
                    <div className='row p-0 m-0'>
                        <div className='col-lg-6 col-12 order-lg-1 order-md-2 order-sm-2 order-2'>
                            <div className='card crd-get-in-touch'>
                                <div className='card-body'>
                                    <div className='title-6 text-start'>
                                    Request a demonstration to experience the seamless management of clients, employees, and assets, all within a unified platform.
                                    </div>
                                    <div className='frm-wrap text-start'>
                                        <form onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && <small className="text-danger">{errors.name}</small>}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Your E-mail Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <small className="text-danger">{errors.email}</small>}
                                                <span><small id="emailHelp" className="form-text ms-2 text-muted">
                                                    *We'll never share your email with anyone else.</small></span>
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="company"
                                                    placeholder="Your Company Name"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    rows="3"
                                                    placeholder="Message (optional)"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            {/* <div>
                                                <ReCAPTCHA
                                                    sitekey=""
                                                    onChange={(value) => {
                                                        console.log("Captcha value:", value);
                                                    }}
                                                />
                                            </div> */}
                                            <div className='hero-input mt-3'>
                                                <button variant='accent' className='btn btn-accent' type="submit">Request a Demo</button>
                                            </div>

                                            <div
                                                className={
                                                    formSuccess ? "form-msg success show" : "form-msg success"
                                                }
                                            >
                                                <span>
                                                    Thank you for your message! We'll be in touch with you shortly.
                                                </span>
                                            </div>
                                            <div className={formFail ? "form-msg fail show" : "form-msg fail"}>
                                                <span>
                                                    There was a problem sending your message. Please try again.
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='get-in-touch-plc' className='col-lg-6 col-12 order-lg-2 order-md-1 order-sm-1 order-1'>
                            <div className='detail-get-in-touch text-lg-start'>
                                <div className='title-3 mb-5'>GET IN TOUCH</div>
                                <div className='sub-title-1 mb-4'>Start Your <br /> Transformation</div>
                                <div className='sub-title-3'>Ready to overcome SiteName service challenges?</div>
                                <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                                <p className='mt-3'>Sed in fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
