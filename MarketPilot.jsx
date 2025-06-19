import React from 'react'
import '/src/assets/components/solutions/pages/MarketPilot.css'
import market1 from "./market-1.jpg"
import market3 from "./market-3.jpg"
import market4 from "./market-4.jpg"
import market5 from "./market-5.jpg"
import market6 from "./market-6.jpg"
import market7 from "./market-7.jpg"
import market8 from "./market-8.jpg"
import market9 from "./market-9.jpg"
import market10 from "./market-10.jpg"

export const MarketPilot = () => {
  return (
    <>
      {/* <----------PART-1-------> */}
      <div className="market">
        <div className="market-1">
          <div className="under-1">
            <h1>Market <br /> <span>Pilot</span></h1>
          </div>

          <div className="under-2">
            <h2>Connecting Buyers & Sellers for Agricultural Success</h2>
            <span>In the competitive agricultural industry, factors such as demand dynamics, price fluctuations, trade flows, limited market access, and the role of intermediaries significantly impact farmers' profitability. Middlemen often prevent farmers from getting the true value for their goods, and fragmented supply chains exacerbate the issue. To address these challenges, AgriPilot.ai introduces “Market Pilot”, a digital platform designed to provide accurate, timely, and tailored market insights, helping farmers optimize their marketing and sales strategies.</span>
          </div>
        </div>

        {/* <-------PART-2-------> */}
        <div className="part-2">
          <div className="under-3">
            <h1>Enhancing Market Insights, Driving Profits</h1><br />
            <span>With Market Pilot, you can:</span>
            <br />
            <br />
            <ul>
              <li>Align production with consumer demand</li>
              <li>Optimize pricing strategies for maximum profit
              </li>
              <li>Streamline logistics and cut post-harvest losses
              </li>
              <li>Stay ahead with market trends
              </li>
            </ul>
          </div>

          <div className="under-4">
            <img src={market1} alt="" />
          </div>

        </div>

        {/* <---------PART-3-------> */}
        <div className="part-3">
          <section class="market-help">
            <h2>How Market Pilot Can Help</h2>
            <div class="help-grid">
              <div class="help-item">
                <img src={market3} alt="Tablet with veggies" />
                <div class="text-content">
                  <h3>Real-time Visibility</h3>
                  <p>Market Pilot provides AI/ML-driven insights from real-time data on inventory, demand, and logistics. This enables users to anticipate market changes and manage proactively.</p>
                </div>
              </div>
              <div class="help-item">
                <img id='market4' src={market4} alt="Farmers handshake" />
                <div class="text-content">
                  <h3>Spot Emerging Opportunities</h3>
                  <p>With market intelligence, farmers can identify and capitalize on new opportunities.</p>
                </div>
              </div>
            </div>
            <br /><br /><br />
            {/* <--------------------!!----------------> */}
            <div class="help-grid">
              <div class="help-item">
                <img id='market5' src={market5} alt="Tablet with veggies" />
                <div class="text-content">
                  <h3>Demand Forecasting</h3>
                  <p>Accurate forecasting helps farmers plan their production and supply, reducing waste and maximizing profits.</p>
                </div>
              </div>
              <div class="help-item">
                <img id='market4' src={market6} alt="Farmers handshake" />
                <div class="text-content">
                  <h3>Logistics Coordination</h3>
                  <p>Intelligent algorithms optimize logistics, ensuring timely and cost-effective delivery of products.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <------------PART-4--------------> */}
        <div className="part-4">
          <section class="how-it-works">
            <h1>How It Works</h1>
            <p><strong>At Market Pilot, the process is simple:</strong></p>

            <div class="steps-container">
              <div class="step">
                <img src={market7} alt="Upload Produce" />
                <h3>Upload Produce</h3>
                <p>Farmers can easily upload a photo and details of their produce using a mobile device.</p>
              </div>
              <div class="step">
                <img id='market8' src={market8} alt="Enter Stock Details" />
                <h3>Enter Stock Details</h3>
                <p>Provide the available stock information to attract potential buyers.</p>
              </div>
              <div class="step">
                <img id='market9' src={market9} alt="Connect with Buyers" />
                <h3>Connect with Buyers</h3>
                <p>Buyers can browse a diverse range of products and directly connect with farmers or suppliers.</p>
              </div>
              <div class="step">
                <img src={market10} alt="Manage Logistics0" />
                <h3>Manage Logistics</h3>
                <p>Our platform supports logistics, ensuring smooth operations from farm to market.</p>
              </div>
            </div>
          </section>
        </div>

        {/* <----------PART-5--------> */}
        <div className="part-5">
          <section class="key-benefits">
            <h2>Key Benefits</h2>
            <div class="benefits-container">
              <div class="benefit-box">
                <img src="https://cdn-icons-png.flaticon.com/512/857/857681.png" alt="Price Discovery" />
                <h3>Enhanced Price Discovery</h3>
                <p>By removing intermediaries, farmers can directly connect with buyers, ensuring they receive a fair price for their produce.</p>
              </div>
              <div class="benefit-box">
                <img src="https://cdn-icons-png.flaticon.com/512/833/833593.png" alt="Market Reach" />
                <h3>Improved Market Reach</h3>
                <p>Farmers and agripreneurs can expand their market reach, accessing a broader customer base without relying on middlemen.</p>
              </div>
              <div class="benefit-box">
                <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Logistics Support" />
                <h3>Logistics Support</h3>
                <p>Market Pilot provides end-to-end logistics support, ensuring smooth and reliable operations from farm to market.</p>
              </div>
              <div class="benefit-box">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Quality Assurance" />
                <h3>Quality Assurance</h3>
                <p>Our platform guarantees quality control, giving buyers confidence in the products they purchase.</p>
              </div>
            </div>
          </section>
        </div>

        {/* <------------PART-6---------------> */}
        <div className="part-6">
          <div class="why-market-section">
            <div class="why-market-container">
              <div class="why-left">
                <h2>Why <br /> Market <br /> Pilot?</h2>
              </div>
              <div class="why-right">
                <p>
                  Market Pilot allows farmers to bypass middlemen, directly connecting with consumers and boosting their income.
                  By providing a centralized platform, it enhances the coordination of the agricultural value chain, minimizing
                  delays and reducing waste. With easy-to-use technology, farmers can upload their produce details with a simple
                  photo and stock information, reaching potential buyers efficiently.
                </p>
                <p class="highlight-text">
                  Connect; Optimize and Thrive with Market Pilot...!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
