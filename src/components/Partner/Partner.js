import React from "react";
// import CSS
import "./Partner.css";
// import Images
import tag from "../../assets/tag.png";
import campaign from "../../assets/campaign.png";
import increase from "../../assets/increase.png";
import verify from "../../assets/verify.png";
import services from "../../assets/services.png";
import { useWindowInner } from "../../hooks/useWindowInner";

const Partner = () => {
  const { isMobile } = useWindowInner();
  return (
    <section className="partner" id="partner">
      <div className="container">
        <div className="flex partner-main">
          <div className="partner-right">
            <div className="d-flex">
              <h1>كن شريكا معنا</h1>
              <p>
                كن شريكا معنا في ليفي الآن
                {/* <br> */}و أستمتع بالكثير من المميزات.....
              </p>
            </div>
            <div className="row mt-35 gx-0 partner-cards">
              <div className="col-md-6 col-sm-6 col-12 partner-card">
                <div className="feature">
                  <div className="icon-bg">
                    <img src={campaign} alt="campaign" loading="lazy" />
                  </div>
                  <h5>إعلانات حصرية</h5>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم
                    توليد هذا النص من مولد النص العربى حيث
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 partner-card">
                <div className="feature">
                  <div className="icon-bg">
                    <img src={tag} alt="tag" loading="lazy" />
                  </div>
                  <h5>عروض مستمره</h5>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم
                    توليد هذا النص من مولد النص العربى حيث
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 partner-card">
                <div className="feature">
                  <div className="icon-bg">
                    <img src={increase} alt="increase" loading="lazy" />
                  </div>
                  <h5>زيادة مبيعاتك</h5>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم
                    توليد هذا النص من مولد النص العربى حيث
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 partner-card">
                <div className="feature">
                  <div className="icon-bg">
                    <img src={verify} alt="verify" loading="lazy" />
                  </div>
                  <h5>إنتشار أكثر</h5>
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم
                    توليد هذا النص من مولد النص العربى حيث
                  </p>
                </div>
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="partner-left d-flex align-items-end justify-content-end">
              <img
                className="img-fluid"
                src={services}
                alt="services"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Partner;
