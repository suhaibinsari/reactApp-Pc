import React from "react";
import "./MainSec.css";
import headerImg from "../../assets/headerImg.png";
function MainSec() {
  return (
    /* <div className="card">
	
  <div className="row g-0">

    <div className="col-md-8">
			<h1> Move Your Audience</h1>
    <p className="card-text">Bring Your Website to Life with Our Stunning Web Animations</p>
    </div>
    <div className="col-md-4">
      <div className="card-body">
      <img src={headerImg} className="card-img" alt="Your Image"/>
      </div>
    </div>
  </div>

</div> */

    <section>
      <div className="container-fluid">
        <div className="section">
          <div className="leftText">
            <div className="txtBody">
              <h1 className="moveTxt">
                Move Your
                <br /> Audience
              </h1>
            </div>
            <div className="descriptionTxt">
              Bring Your Website to Life with Our Stunning <br />
              Web Animations
            </div>
          </div>
          <div className="rightImg">
            <img src={headerImg} alt="" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSec;
