"use client";

import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const FormSection: React.FC = () => {
    const [phone, setPhone] = useState("");

    return (
        <section className="homepage-registration section-spacing pt-0">
            <div className="relative max-w-6xl section-spacing  rounded-lg mx-auto w-full bg-[url('/images/from-bg.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 z-0 rounded-lg" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[50px] p-6">
                    <div className="right hidden lg:block" />
                    <div className="left order-1 lg:order-2">
                        <form className="w-full space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input-with-bg"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input-with-bg"
                                required
                            />

                            <div className="phone-wrapper">
                                <PhoneInput
                                    country={"in"}
                                    value={phone}
                                    enableSearch={true}
                                    onChange={(value) => setPhone(value)}
                                    inputClass="input-with-bg !w-full !text-black !border-none !outline-none"
                                    containerClass="w-full phone-input "
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                                <div className="item">
                                    <select name="" className="input-with-bg" id="">
                                        <option value="" className="hidden"> Select State </option>
                                        <option value=""> Uttar Pradesh </option>
                                        <option value=""> Delhi </option>
                                        <option value=""> Kerala </option>
                                    </select>
                                </div>
                                <div className="item">
                                    <select name="" className="input-with-bg" id="">
                                        <option value="" className="hidden"> Select City </option>
                                        <option value=""> Uttar Pradesh </option>
                                        <option value=""> Delhi </option>
                                        <option value=""> Kerala </option>
                                    </select>
                                </div>
                            </div>

                            <input
                                type="password"
                                placeholder="Choose Password"
                                className="input-with-bg"
                                required
                            />
                            <div>
                                <label className="label cursor-pointer gap-4 items-start">
                                    <input type="checkbox" className="checkbox mt-[4px] checkbox-sm checkbox-secondary" />
                                    <span className="text-wrap text-white">
                                        I have read and understood MAT guidelines, eligibility criteria, etc, to fill online Application Form. I also agree to receive communication through Email, SMS, WhatsApp, etc from AIMA *
                                    </span>
                                </label>
                            </div>

                            <div className="flex justify-center md:justify-start">
                                <button className="btn-secondary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;