import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row contact-container">
          <div className="contact-right">
            <div className="text-bg">
              <p>"لديك تعليق؟"</p>
              <h1>أرسله لنا</h1>
            </div>
          </div>
          {/* <div class="col-md-1 d-lg-flex d-none"></div> */}
          <div className="contact-left">
            <div className="contact-form">
              <div className="contact-form-all-input-div">
                <div className="col mb-3 contact-form-input-div">
                  <input
                    type="text"
                    className="form-control global"
                    placeholder="الأسم"
                  />
                </div>
                <div className="col mb-3 contact-form-input-div">
                  <input
                    type="tel"
                    className="form-control global"
                    placeholder="رقم الهاتف"
                    // placeholder="&#9742; رقم الهاتف"
                  />
                </div>
                <div className="mb-3 contact-form-textarea-div">
                  <textarea
                    className="form-control global"
                    placeholder="رسالتك"
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-purple btn-w-50"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#success-modal"
              >
                إرسال
              </button>
            </div>
          </div>
          {/* <div class="col-md-1"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
