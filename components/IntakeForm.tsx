"use client";

import React, { useState } from 'react';

const STEPS = [
    { key: 'general', title: 'General Information' },
    { key: 'emergency', title: 'Emergency Contact' },
    { key: 'preferences', title: 'Preferences' },
    { key: 'extensions', title: 'Extension History' },
    { key: 'medical', title: 'Medical History' },
    { key: 'lifestyle', title: 'Lifestyle Questions' },
];

export default function IntakeForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '', dob: '', address: '', city: '', state: '', zip: '',
        phone: '', email: '', occupation: '',
        emergencyName: '', emergencyPhone: '',
        emailList: '', howHeard: '',
        hadExtensions: '', extensionHistory: '',
        // Medical
        healthProblems: '', medication: '', eczema: '', itchyScalp: '',
        alopecia: '', chemo: '', pregnant: '', givenBirth: '',
        greasyHair: '', scalpProducts: '', hairDamage: '', allergies: '',
        allergiesExplain: '', medications: '', medicationsExplain: '',
        // Lifestyle
        exercise: '', saunas: '', tanningBeds: '', headGear: '', glasses: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you! Your intake form has been submitted. We will review it before your appointment.');
    };

    const nextStep = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
            document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const RadioGroup = ({ name, label }: { name: string; label: string }) => (
        <div className="intake-radio-row">
            <span className="intake-radio-label">{label}</span>
            <div className="intake-radio-options">
                <label className="intake-radio">
                    <input type="radio" name={name} value="yes" onChange={handleChange} />
                    <span className="intake-radio-mark"></span>
                    Yes
                </label>
                <label className="intake-radio">
                    <input type="radio" name={name} value="no" onChange={handleChange} />
                    <span className="intake-radio-mark"></span>
                    No
                </label>
            </div>
        </div>
    );

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="intake-section intake-step-content" key="step-0">
                        <h3 className="intake-section-title">General Information</h3>
                        <div className="intake-grid-2">
                            <div className="intake-field">
                                <label>Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                            </div>
                            <div className="intake-field">
                                <label>Date of Birth</label>
                                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="intake-field">
                            <label>Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street address" />
                        </div>
                        <div className="intake-grid-3">
                            <div className="intake-field">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                            </div>
                            <div className="intake-field">
                                <label>State</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
                            </div>
                            <div className="intake-field">
                                <label>Zip Code</label>
                                <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip" />
                            </div>
                        </div>
                        <div className="intake-grid-2">
                            <div className="intake-field">
                                <label>Phone #</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" required />
                            </div>
                            <div className="intake-field">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                            </div>
                        </div>
                        <div className="intake-field">
                            <label>Occupation</label>
                            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Your occupation" />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="intake-section intake-step-content" key="step-1">
                        <h3 className="intake-section-title">Emergency Contact</h3>
                        <div className="intake-grid-2">
                            <div className="intake-field">
                                <label>Contact Name</label>
                                <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} placeholder="Emergency contact name" />
                            </div>
                            <div className="intake-field">
                                <label>Phone #</label>
                                <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="(555) 000-0000" />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="intake-section intake-step-content" key="step-2">
                        <h3 className="intake-section-title">Preferences</h3>
                        <RadioGroup name="emailList" label="Would you like to be added to our email list for specials and discounts?" />
                        <div className="intake-field">
                            <label>How did you hear about us?</label>
                            <input type="text" name="howHeard" value={formData.howHeard} onChange={handleChange} placeholder="Social media, referral, etc." />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="intake-section intake-step-content" key="step-3">
                        <h3 className="intake-section-title">Extension History</h3>
                        <RadioGroup name="hadExtensions" label="Have you had extensions before?" />
                        <div className="intake-field">
                            <label>If yes, please describe your extension history:</label>
                            <textarea name="extensionHistory" value={formData.extensionHistory} onChange={handleChange} rows={4} placeholder="Type of extensions, how long you wore them, any issues..."></textarea>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="intake-section intake-step-content" key="step-4">
                        <h3 className="intake-section-title">Medical History</h3>
                        <RadioGroup name="healthProblems" label="Do you suffer from health problems that may cause extensions to be unsuitable?" />
                        <RadioGroup name="medication" label="Are you taking medication that affects your hair growth?" />
                        <RadioGroup name="eczema" label="Do you suffer from Eczema or Psoriasis?" />
                        <RadioGroup name="itchyScalp" label="Do you have an itchy or sensitive scalp?" />
                        <RadioGroup name="alopecia" label="Have you ever suffered from Alopecia or any type of hair loss?" />
                        <RadioGroup name="chemo" label="Have you ever had Chemotherapy?" />
                        <RadioGroup name="pregnant" label="Are you or could you be pregnant?" />
                        <RadioGroup name="givenBirth" label="Have you given birth within the last 6 months?" />
                        <RadioGroup name="greasyHair" label="Do you suffer from greasy hair?" />
                        <RadioGroup name="scalpProducts" label="Do any products cause your scalp to itch, become dry, or greasy?" />
                        <RadioGroup name="hairDamage" label="Do the best of your knowledge, do you have hair damage or breakage?" />
                        <RadioGroup name="allergies" label="Do you have any allergies?" />
                        <div className="intake-field">
                            <label>If yes, please explain:</label>
                            <textarea name="allergiesExplain" value={formData.allergiesExplain} onChange={handleChange} rows={3} placeholder="Please describe any allergies..."></textarea>
                        </div>
                        <RadioGroup name="medications" label="Are you currently taking any medications or supplements?" />
                        <div className="intake-field">
                            <label>If yes, please explain:</label>
                            <textarea name="medicationsExplain" value={formData.medicationsExplain} onChange={handleChange} rows={3} placeholder="Please list medications or supplements..."></textarea>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="intake-section intake-step-content" key="step-5">
                        <h3 className="intake-section-title">Lifestyle Questions</h3>
                        <RadioGroup name="exercise" label="Do you exercise regularly?" />
                        <RadioGroup name="saunas" label="Do you use saunas or steam rooms?" />
                        <RadioGroup name="tanningBeds" label="Do you use tanning beds?" />
                        <RadioGroup name="headGear" label="Do you wear protective head gear (i.e. helmets)?" />
                        <RadioGroup name="glasses" label="Do you wear glasses?" />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="intake-form" className="section intake-form-section">
            <div className="container">
                <div className="intake-header">
                    <span className="intake-eyebrow">New Clients</span>
                    <h2>Hair Extensions Client Intake Form</h2>
                    <p>Please fill out this form before your appointment so we can provide you with the best service possible.</p>
                </div>

                {/* Progress Indicator */}
                <div className="intake-progress">
                    {STEPS.map((step, index) => (
                        <div
                            key={step.key}
                            className={`intake-progress-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                        >
                            <div className="intake-progress-circle">
                                {index < currentStep ? (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <span>{index + 1}</span>
                                )}
                            </div>
                            <span className="intake-progress-label">{step.title}</span>
                            {index < STEPS.length - 1 && <div className="intake-progress-line" />}
                        </div>
                    ))}
                </div>

                <form className="intake-form" onSubmit={handleSubmit}>
                    {renderStep()}

                    {/* Navigation Buttons */}
                    <div className="intake-nav">
                        {currentStep > 0 && (
                            <button type="button" className="btn intake-nav-btn intake-nav-back" onClick={prevStep}>
                                ← Back
                            </button>
                        )}
                        {currentStep < STEPS.length - 1 ? (
                            <button type="button" className="btn intake-nav-btn intake-nav-next" onClick={nextStep}>
                                Next →
                            </button>
                        ) : (
                            <button type="submit" className="btn intake-submit-btn">
                                Submit Intake Form
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
