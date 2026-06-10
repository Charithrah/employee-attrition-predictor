import React, { useState, useEffect } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("risk");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    { q: "What data do I need to get started?", a: "You need a basic HR dataset with fields like job role, department, tenure, salary band, performance score, and overtime status. We provide a template to help standardize your data." },
    { q: "How accurate is the attrition prediction?", a: "Our XGBoost model achieves 92% accuracy on standard IBM HR datasets and 87–94% on client data depending on data quality and size." },
    { q: "Is my employee data secure?", a: "Absolutely. We use AES-256 encryption, SOC 2 Type II compliant infrastructure, and never share your data with third parties." },
    { q: "Can I integrate AttritionAI with my existing HRMS?", a: "Yes. We offer native integrations with Workday, SAP SuccessFactors, BambooHR, and a REST API for custom integrations." },
    { q: "How long does setup take?", a: "Most teams are up and running within 24 hours. Upload your data, and AI predictions are ready within minutes." }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Button handlers
  const handleUploadDataset = () => {
    alert("📁 Upload Dataset feature coming soon!\n\nYou'll be able to upload CSV or Excel files.");
    // You can integrate file upload logic here later
  };

  const handleLiveDemo = () => {
    alert("🎬 Live Demo\n\nWatch how AttritionAI predicts employee attrition in real-time!");
    // You can integrate demo video or tour here
  };

  const handleStartFreeTrial = () => {
    setIsSignupModalOpen(true);
  };

  const handleWatchDemo = () => {
    alert("🎬 Demo Video\n\nSee how AttritionAI helps reduce employee turnover by 35%.");
    // You can integrate a video modal or YouTube link here
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList && e.target.classList.contains("modal")) {
        setIsLoginModalOpen(false);
        setIsSignupModalOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <div className="nav-inner">
          <div className="logo">Attrition<span>AI</span></div>
          <ul className="nav-links">
            <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection("features"); }}>Features</a></li>
            <li><a href="#stats" onClick={(e) => { e.preventDefault(); scrollToSection("stats"); }}>Analytics</a></li>
            <li><a href="#dashboard" onClick={(e) => { e.preventDefault(); scrollToSection("dashboard"); }}>Dashboard</a></li>
            <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection("pricing"); }}>Pricing</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection("faq"); }}>FAQ</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="login-btn" onClick={() => setIsLoginModalOpen(true)}>Login</button>
            <button className="nav-cta" onClick={() => setIsSignupModalOpen(true)}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section className="home" id="home">
        <div className="home-glow"></div>
        <div className="home-content">
          <span className="tag">AI POWERED HR INTELLIGENCE</span>
          <h1>Predict Employee Attrition <span>Before It Happens</span></h1>
          <p>Smart employee attrition prediction using XGBoost, AI analytics, retention insights and real-time HR dashboards.</p>
          <div className="home-buttons">
            <button className="start-btn" onClick={() => scrollToSection("hero")}>Get Started →</button>
            <button className="demo-btn" onClick={handleWatchDemo}>▶️ Watch Demo</button>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="hero-grid">
          <div>
            <span className="eyebrow">AI Powered HR Intelligence</span>
            <h1>Predict Employee Attrition <span>Before It Happens</span></h1>
            <p>Smart employee attrition prediction using XGBoost, explainable AI insights, retention analytics, and real-time HR dashboards.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={handleUploadDataset}>⬆ Upload Dataset</button>
              <button className="btn-outline" onClick={handleLiveDemo}>Live Demo ›</button>
            </div>
          </div>
          <div className="hero-card">
            <div className="risk-header">
              <div>
                <div className="risk-label">Attrition Risk</div>
                <div className="risk-value">87%</div>
              </div>
              <div className="risk-circle">🧠</div>
            </div>
            <div className="prog-item">
              <div className="prog-top"><span>Overtime</span><span>92%</span></div>
              <div className="prog-bar"><div className="prog-fill fill-red"></div></div>
            </div>
            <div className="prog-item">
              <div className="prog-top"><span>Job Satisfaction</span><span>81%</span></div>
              <div className="prog-bar"><div className="prog-fill fill-yellow"></div></div>
            </div>
            <div className="prog-item">
              <div className="prog-top"><span>Distance From Home</span><span>74%</span></div>
              <div className="prog-bar"><div className="prog-fill fill-blue"></div></div>
            </div>
            <div className="ai-box">
              <div className="ai-label">AI Recommendation</div>
              <p>Offer flexible work options and schedule a manager feedback session to reduce resignation risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="divider" id="features">
        <div className="section-inner">
          <div className="sec-head">
            <h2>Smart HR Analytics Platform</h2>
            <p>Everything HR teams need to predict, track and reduce employee attrition.</p>
          </div>
          <div className="features-grid">
            <div className="feat-card"><div className="feat-icon c-blue">🧠</div><h3>AI Prediction</h3><p>Predict employee resignation risk using advanced XGBoost machine learning algorithms.</p></div>
            <div className="feat-card"><div className="feat-icon c-purple">📊</div><h3>Analytics Dashboard</h3><p>View live employee insights, analytics and attrition trends.</p></div>
            <div className="feat-card"><div className="feat-icon c-green">🛡️</div><h3>Explainable AI</h3><p>Understand why employees may leave with AI recommendations and insights.</p></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="divider" id="stats">
        <div className="section-inner">
        {/* Add this heading for the stats section */}
          <div className="sec-head">
            <span className="sec-eyebrow" style={{ color: "#60a5fa" }}>Performance Metrics</span>
            <h2>Proven Results That Matter</h2>
            <p>Real metrics from companies using AttritionAI</p>
          </div>
          <div className="stats-grid">
            <div><div className="stat-val c-blue">92%</div><div className="stat-lbl">Prediction Accuracy</div></div>
            <div><div className="stat-val c-purple">50K+</div><div className="stat-lbl">Employees Analysed</div></div>
            <div><div className="stat-val c-green">120+</div><div className="stat-lbl">Companies Supported</div></div>
            <div><div className="stat-val c-red">35%</div><div className="stat-lbl">Attrition Reduced</div></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section divider">
        <div className="how-glow"></div>
        <div className="section-inner">
          <div className="sec-head">
            <span className="sec-eyebrow" style={{ color: "#a78bfa" }}>Simple Process</span>
            <h2>How AttritionAI Works</h2>
            <p>From raw HR data to actionable retention insights in minutes — no data science expertise needed.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card step-blue"><div className="step-top"><div className="step-icon c-blue">⬆️</div><div className="step-num">01</div></div><h3>Upload HR Data</h3><p>Securely upload your employee dataset in CSV or Excel format.</p></div>
            <div className="step-card step-purple"><div className="step-top"><div className="step-icon c-purple">🧠</div><div className="step-num">02</div></div><h3>AI Processes Data</h3><p>XGBoost model analyzes 30+ behavioral and role-based features.</p></div>
            <div className="step-card step-green"><div className="step-top"><div className="step-icon c-green">📊</div><div className="step-num">03</div></div><h3>View Risk Scores</h3><p>Each employee gets an attrition risk score with explanations.</p></div>
            <div className="step-card step-red"><div className="step-top"><div className="step-icon" style={{ color: "#f87171" }}>🎯</div><div className="step-num">04</div></div><h3>Take Action</h3><p>Receive personalized AI retention recommendations per employee.</p></div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="divider" id="dashboard">
        <div className="section-inner">
          <div className="sec-head">
            <span className="sec-eyebrow" style={{ color: "#60a5fa" }}>Interactive Preview</span>
            <h2>Employee Risk Dashboard</h2>
            <p>Live employee attrition monitoring dashboard with real-time risk scores.</p>
          </div>
          <div className="tab-row">
            <button className={`tab-btn ${activeTab === "risk" ? "active" : ""}`} onClick={() => setActiveTab("risk")}>Risk Overview</button>
            <button className={`tab-btn ${activeTab === "dept" ? "active" : ""}`} onClick={() => setActiveTab("dept")}>Department View</button>
            <button className={`tab-btn ${activeTab === "trends" ? "active" : ""}`} onClick={() => setActiveTab("trends")}>Attrition Trends</button>
          </div>
          
          {activeTab === "risk" && (
            <div className="dash-panel">
              <div className="panel-top"><h3>Employee Risk Scores</h3><span className="count-badge">12 High Risk Employees</span></div>
              <div className="risk-rows">
                <div className="risk-row"><div className="emp-avatar">J</div><div className="emp-info"><div className="emp-row1"><span className="emp-name">John M.</span><span className="emp-score-r">91%</span></div><div className="emp-row2"><span className="emp-dept">Sales</span><div className="mini-bar"><div className="mini-fill" style={{ width: "91%", background: "#ef4444" }}></div></div></div></div><span className="risk-chip chip-r">High Risk</span></div>
                <div className="risk-row"><div className="emp-avatar">P</div><div className="emp-info"><div className="emp-row1"><span className="emp-name">Priya K.</span><span className="emp-score-y">78%</span></div><div className="emp-row2"><span className="emp-dept">Engineering</span><div className="mini-bar"><div className="mini-fill" style={{ width: "78%", background: "#facc15" }}></div></div></div></div><span className="risk-chip chip-y">Medium</span></div>
                <div className="risk-row"><div className="emp-avatar">L</div><div className="emp-info"><div className="emp-row1"><span className="emp-name">Leo T.</span><span className="emp-score-y">65%</span></div><div className="emp-row2"><span className="emp-dept">HR</span><div className="mini-bar"><div className="mini-fill" style={{ width: "65%", background: "#facc15" }}></div></div></div></div><span className="risk-chip chip-y">Medium</span></div>
                <div className="risk-row"><div className="emp-avatar">A</div><div className="emp-info"><div className="emp-row1"><span className="emp-name">Ananya R.</span><span className="emp-score-g">42%</span></div><div className="emp-row2"><span className="emp-dept">Finance</span><div className="mini-bar"><div className="mini-fill" style={{ width: "42%", background: "#22c55e" }}></div></div></div></div><span className="risk-chip chip-g">Low Risk</span></div>
                <div className="risk-row"><div className="emp-avatar">D</div><div className="emp-info"><div className="emp-row1"><span className="emp-name">David S.</span><span className="emp-score-g">28%</span></div><div className="emp-row2"><span className="emp-dept">Marketing</span><div className="mini-bar"><div className="mini-fill" style={{ width: "28%", background: "#22c55e" }}></div></div></div></div><span className="risk-chip chip-g">Low Risk</span></div>
              </div>
            </div>
          )}

          {activeTab === "dept" && (
            <div className="dash-panel">
              <div className="panel-top"><h3>Department Attrition Breakdown</h3></div>
              <div className="dept-grid">
                <div className="dept-card dc-r"><div className="dept-top"><span className="dept-name">Sales</span><span className="dept-pct" style={{ color: "#f87171" }}>34%</span></div><div className="prog-bar"><div className="prog-fill" style={{ width: "85%", background: "#ef4444" }}></div></div></div>
                <div className="dept-card dc-y"><div className="dept-top"><span className="dept-name">Engineering</span><span className="dept-pct" style={{ color: "#fbbf24" }}>18%</span></div><div className="prog-bar"><div className="prog-fill" style={{ width: "45%", background: "#facc15" }}></div></div></div>
                <div className="dept-card dc-y"><div className="dept-top"><span className="dept-name">HR</span><span className="dept-pct" style={{ color: "#fbbf24" }}>14%</span></div><div className="prog-bar"><div className="prog-fill" style={{ width: "35%", background: "#facc15" }}></div></div></div>
                <div className="dept-card dc-g"><div className="dept-top"><span className="dept-name">Finance</span><span className="dept-pct" style={{ color: "#4ade80" }}>9%</span></div><div className="prog-bar"><div className="prog-fill" style={{ width: "23%", background: "#22c55e" }}></div></div></div>
                <div className="dept-card dc-y"><div className="dept-top"><span className="dept-name">Marketing</span><span className="dept-pct" style={{ color: "#fbbf24" }}>12%</span></div><div className="prog-bar"><div className="prog-fill" style={{ width: "30%", background: "#facc15" }}></div></div></div>
                <div className="dept-card dc-g"><div className="dept-top"><span className="dept-name">Operations</span><span className="dept-pct" style={{ color: "#4ade80" }}>7%</span></div><div className="prog-bar"><div className="prog-fill" style={{ width: "18%", background: "#22c55e" }}></div></div></div>
              </div>
            </div>
          )}

          {activeTab === "trends" && (
            <div className="dash-panel">
              <div className="panel-top"><h3>12-Month Attrition Trend</h3></div>
              <div className="bar-chart">
                {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i) => {
                  const h = [112,128,140,120,104,88,72,80,64,52,44,36];
                  return <div key={m} className="bar-col"><div className="bar-fill" style={{ height: `${h[i]}px`, opacity: 0.7+i*0.02 }}></div><span className="bar-lbl">{m}</span></div>;
                })}
              </div>
              <div className="trend-stats">
                <div className="trend-stat"><div className="ts-lbl">Peak Month</div><div className="ts-val" style={{ color: "#f87171" }}>Mar — 35%</div></div>
                <div className="trend-stat"><div className="ts-lbl">Current</div><div className="ts-val" style={{ color: "#4ade80" }}>Dec — 9%</div></div>
                <div className="trend-stat"><div className="ts-lbl">Improvement</div><div className="ts-val" style={{ color: "#60a5fa" }}>↓ 74%</div></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="test-section divider">
        <div className="test-glow"></div>
        <div className="section-inner">
          <div className="sec-head"><span className="sec-eyebrow" style={{ color: "#4ade80" }}>Trusted by HR Leaders</span><h2>Real Results, Real Teams</h2></div>
          <div className="test-grid">
            <div className="test-card"><div className="stars">★★★★★</div><p className="test-quote">"AttritionAI cut our voluntary turnover by 38% in the first quarter. The explainable AI feature helped us have the right conversations with at-risk employees."</p><div className="test-author"><div className="t-avatar av-blue">SM</div><div><div className="t-name">Sarah Mitchell</div><div className="t-role">HR Director, TechFlow Inc.</div></div></div></div>
            <div className="test-card"><div className="stars">★★★★★</div><p className="test-quote">"The prediction accuracy is remarkable. We used to guess who might leave — now we know weeks in advance and can act proactively."</p><div className="test-author"><div className="t-avatar av-purple">RI</div><div><div className="t-name">Rajan Iyer</div><div className="t-role">People Analytics Lead, InnovateCo</div></div></div></div>
            <div className="test-card"><div className="stars">★★★★★</div><p className="test-quote">"Implementation was seamless. The dashboard gives our managers real-time visibility into team health without any extra training needed."</p><div className="test-author"><div className="t-avatar av-green">PS</div><div><div className="t-name">Priya Sharma</div><div className="t-role">CHRO, GlobalEdge Solutions</div></div></div></div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="divider" id="pricing">
        <div className="section-inner">
          <div className="sec-head"><span className="sec-eyebrow" style={{ color: "#60a5fa" }}>Transparent Pricing</span><h2>Plans That Scale With You</h2><p>Start free for 14 days. No credit card required.</p></div>
          <div className="pricing-grid">
            <div className="price-card pc-std">
              <div className="plan-name">Starter</div>
              <div className="plan-price"><span className="plan-amount">$49</span><span className="plan-per">/mo</span></div>
              <ul className="plan-feats">
                <li><span className="chk">✓</span>Up to 100 employees</li>
                <li><span className="chk">✓</span>Monthly predictions</li>
                <li><span className="chk">✓</span>Basic dashboard</li>
                <li><span className="chk">✓</span>Email support</li>
                <li><span className="chk">✓</span>CSV export</li>
              </ul>
              <button className="plan-btn pb-outline">Get Started</button>
            </div>
            <div className="price-card pc-pop">
              <div className="pop-badge">Most Popular</div>
              <div className="plan-name">Growth</div>
              <div className="plan-price"><span className="plan-amount">$149</span><span className="plan-per">/mo</span></div>
              <ul className="plan-feats">
                <li><span className="chk">✓</span>Up to 1,000 employees</li>
                <li><span className="chk">✓</span>Real-time predictions</li>
                <li><span className="chk">✓</span>Advanced analytics</li>
                <li><span className="chk">✓</span>Explainable AI insights</li>
                <li><span className="chk">✓</span>Priority support</li>
                <li><span className="chk">✓</span>API access</li>
              </ul>
              <button className="plan-btn pb-filled">Get Started</button>
            </div>
            <div className="price-card pc-std">
              <div className="plan-name">Enterprise</div>
              <div className="plan-price"><span className="plan-amount">Custom</span></div>
              <ul className="plan-feats">
                <li><span className="chk">✓</span>Unlimited employees</li>
                <li><span className="chk">✓</span>Custom ML models</li>
                <li><span className="chk">✓</span>White-label dashboard</li>
                <li><span className="chk">✓</span>Dedicated CSM</li>
                <li><span className="chk">✓</span>SSO & compliance</li>
                <li><span className="chk">✓</span>SLA guarantee</li>
              </ul>
              <button className="plan-btn pb-outline">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-section divider">
        <div className="section-inner">
          <p className="trust-lbl">Integrates with your existing HR stack</p>
          <div className="brand-row">
            <div className="brand-chip">Workday</div>
            <div className="brand-chip">SAP SuccessFactors</div>
            <div className="brand-chip">BambooHR</div>
            <div className="brand-chip">ADP</div>
            <div className="brand-chip">Greenhouse</div>
            <div className="brand-chip">Slack</div>
          </div>
          <div className="cert-row">
            <div className="cert-item"><span className="cert-icon c-green">🛡️</span><div><div className="cert-t">SOC 2 Type II</div><div className="cert-s">Certified</div></div></div>
            <div className="cert-item"><span className="cert-icon c-blue">🌐</span><div><div className="cert-t">GDPR</div><div className="cert-s">Compliant</div></div></div>
            <div className="cert-item"><span className="cert-icon" style={{ color: "#facc15" }}>🏆</span><div><div className="cert-t">ISO 27001</div><div className="cert-s">Certified</div></div></div>
            <div className="cert-item"><span className="cert-icon c-purple">🔒</span><div><div className="cert-t">AES-256</div><div className="cert-s">Encrypted</div></div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="divider" id="faq">
        <div className="section-inner">
          <div className="sec-head"><span className="sec-eyebrow" style={{ color: "#a78bfa" }}>Got Questions?</span><h2>Frequently Asked Questions</h2><p>Everything you need to know about AttritionAI.</p></div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaqIndex === idx ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}>{faq.q}<span className="faq-arrow">▾</span></button>
                <div className="faq-a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-wrap">
        <div className="cta-banner">
          <div className="cta-glow"></div>
          <div className="cta-inner">
            <div className="cta-icon">📉</div>
            <h2>Ready to Reduce Attrition?</h2>
            <p>Join 120+ companies using AttritionAI to retain their best talent. Start your free 14-day trial — no credit card needed.</p>
            <div className="cta-btns">
              <button className="btn-primary" onClick={handleStartFreeTrial}>Start Free Trial →</button>
              <button className="btn-outline" onClick={handleWatchDemo}>▶ Watch Demo</button>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <div className="modal" style={{ display: isLoginModalOpen ? "flex" : "none" }}>
        <div className="modal-box">
          <span className="close" onClick={() => setIsLoginModalOpen(false)}>×</span>
          <h2>Login</h2>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>Login</button>
        </div>
      </div>
      <div className="modal" style={{ display: isSignupModalOpen ? "flex" : "none" }}>
        <div className="modal-box">
          <span className="close" onClick={() => setIsSignupModalOpen(false)}>×</span>
          <h2>Create Account</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Create Password" />
          <button>Create Account</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div><div className="footer-logo">Attrition<span>AI</span></div><p className="footer-desc">AI-powered employee attrition prediction and HR analytics platform.</p></div>
          <div className="footer-col"><h4>Product</h4><ul><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">Integrations</a></li><li><a href="#">Changelog</a></li></ul></div>
          <div className="footer-col"><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact</a></li></ul></div>
          <div className="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li><li><a href="#">Cookie Policy</a></li></ul></div>
        </div>
        <div className="footer-bottom"><p>© 2026 AttritionAI • Employee Attrition Prediction System</p><div className="social-links"><a href="#">Twitter</a><a href="#">LinkedIn</a><a href="#">GitHub</a></div></div>
      </footer>
    </div>
  );
}