import React from 'react'
import '/src/assets/components/solutions/pages/LiveStockPilot.css'
import live1 from "./live-1.jpg"
import live2 from "./live-2.jpg"
import live3 from "./live-3.jpg"
import live4 from "./live-4.jpg"
import live5 from "./live-5.jpg"
import live6 from "./live-6.jpg"
import live8 from "./live-8.jpg"

const LiveStockPilot = () => {
    return (
        <>
            <div className="main">
                {/* <--------------PART-1----------> */}
                <div className="market-1">
                    <div className="under-1">
                        <h1>LiveStock<br /> <span>Pilot</span></h1>
                    </div>

                    <div className="under-2">
                        <h2>Optimizing Livestock Management with AI-Powered Precision</h2>

                        <span>Scanning a field of crops is straightforward, but livestock monitoring presents unique challenges due to the mobility of animals. This is where our AI-enabled Livestock Pilot solution, powered by AgriPilot.ai, excels. Utilizing advanced computer vision drones and AI/ML technologies, Livestock Pilot helps farmers monitor animals and remotely control feeding, milking, and cleaning systems.</span>
                    </div>
                </div>

                {/* <-------PART-2-------> */}
                <div className="part-2">
                    <div className="under-3">
                        <h1>Optimizing Livestock Care and Operations</h1><br />
                        <span>With Livestock Pilot, you can:</span>
                        <br />
                        <br />
                        <ul>
                            <li>Enhance animal health and productivity
                            </li>
                            <li>Optimize feed and resource management

                            </li>
                            <li>Improve breeding and genetic outcomes

                            </li>
                            <li>Track and analyze herd performance data

                            </li>
                        </ul>
                    </div>

                    <div className="under-4">
                        <img src={live1} alt="" />
                    </div>

                </div>
                {/* <------------PAART-3----------------> */}
                <div className="part-3">
                    <section class="how-it-works">
                        <div class="content-box">
                            <h2>How Does Livestock Pilot Work?</h2>
                            <p>
                                Livestock Pilot leverages AI algorithms to analyze data from multiple sources, including historical records, environmental sensors, drones, genetic profiles, weather forecasts, and market trends. By identifying patterns and correlations beyond human perception, Livestock Pilot equips farmers to make proactive, evidence-based decisions.
                            </p>
                        </div>
                    </section>
                </div>

                {/* <-----------PART-4----------------> */}
                <div className="part-4">
                    <section class="use-cases">
                        <div class="text-section">
                            <h1>Livestock Pilot<br />Use Cases</h1>
                            <p>Elevate animal welfare and operational efficiency through innovative monitoring, precision feeding, and smart systems.</p>
                        </div>

                        <div class="cards-section">
                            <div class="card">
                                <img id='live3' src={live3} alt="Animal Populations" />
                                <span class="label">Animal Populations</span>
                            </div>
                            <div class="card">
                                <img id='live2' src={live2} alt="Disease Detection & Management" />
                                <span class="label">Disease Detection &<br />Management</span>
                            </div>
                        </div>
                    </section>
                    {/* <----------------!!-------------> */}

                    <div className="subpart4">
                        <section class="features-grid">
                            <div class="feature-box">
                                <img id='live4' src={live4} alt="Precision Feeding" />
                                <span class="feature-label">Precision Feeding</span>
                            </div>
                            <div class="feature-box">
                                <img id='live5' src={live5} alt="Automated Monitoring" />
                                <span class="feature-label">Automated Monitoring</span>
                            </div>
                            <div class="feature-box">
                                <img id='live6' src={live6} alt="Milking System" />
                                <span class="feature-label">Milking System</span>
                            </div>
                        </section>
                    </div>

                </div>

                {/* <-----------PART-5----------> */}
                <div className="paart-5">
                    <section class="benefits">
                        <h2>Key Benefits</h2>
                        <div class="benefit-grid">
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/10561/10561763.png" alt="Productivity" />
                                <h3>Increased Productivity</h3>
                                <p>Optimized feeding improves animal health and growth rates, while automated milking systems maximize milk production efficiency.</p>
                            </div>
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/6134/6134531.png" alt="Welfare" />
                                <h3>Improved Animal Welfare</h3>
                                <p>Early disease detection and continuous real-time monitoring ensure timely interventions and prevent outbreaks.</p>
                            </div>
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="Cost Reduction" />
                                <h3>Cost Reduction</h3>
                                <p>Automation of feeding, milking, and monitoring reduces labor requirements and minimizes feed waste, lowering overall costs.</p>
                            </div>
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/8081/8081307.png" alt="Sustainability" />
                                <h3>Sustainability</h3>
                                <p>Efficient resource use reduces the environmental footprint of livestock farming, & improved animal welfare leads to more sustainable practices.</p>
                            </div>
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/4342/4342809.png" alt="Income" />
                                <h3>Enhanced Income</h3>
                                <p>High-quality milk and healthier livestock command better market prices, while preventing disease outbreaks minimizes financial losses.</p>
                            </div>
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/9432/9432156.png" alt="Data-Driven" />
                                <h3>Data-Driven Decision Making</h3>
                                <p>AI insights enable proactive and informed decisions, while integration with market trends helps align production with demand.</p>
                            </div>
                            <div class="benefit-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/7534/7534670.png" alt="Security" />
                                <h3>Improved Safety & Security</h3>
                                <p>Computer vision drones enhance animal population security, and remote monitoring allows constant oversight.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <----------PART-6-------------> */}
                <div className="part-6">
                    <section class="why-livestock">
                        <div class="text-section">
                            <h2>Why Choose Livestock Pilot?</h2>
                            <p>
                                Livestock Pilot solutions optimize productivity, enhance animal welfare, and mitigate environmental impacts. By harnessing AI/ML to unlock insights from vast datasets, farmers can make informed decisions that drive sustainable growth and success in their operations.
                            </p>
                            <p class="highlight">
                                Shape the Future of Livestock Management with Livestock Pilot... Dive in Today!
                            </p>
                        </div>
                        <div class="image-section">
                            <img id='live8' src={live8} alt="Livestock Illustration" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
export default LiveStockPilot