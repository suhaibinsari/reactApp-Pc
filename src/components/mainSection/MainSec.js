import React from "react";
import "./MainSec.css";
import headerImg from "../../assets/headerImg.png";
function MainSec() {
  return (
    /* <div class="card">
	
  <div class="row g-0">

    <div class="col-md-8">
			<h1> Move Your Audience</h1>
    <p class="card-text">Bring Your Website to Life with Our Stunning Web Animations</p>
    </div>
    <div class="col-md-4">
      <div class="card-body">
      <img src={headerImg} class="card-img" alt="Your Image"/>
      </div>
    </div>
  </div>

</div> */

    <section>
      <div class="container-fluid">
        <div class="section">
          <div class="leftText">
            <div class="txtBody">
              <h1 class="moveTxt">
                Move Your
                <br /> Audience
              </h1>
            </div>
            <div class="descriptionTxt">
              Bring Your Website to Life with Our Stunning <br />
              Web Animations
            </div>
          </div>
          <div class="rightImg">
            <img src={headerImg} alt="" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSec;
