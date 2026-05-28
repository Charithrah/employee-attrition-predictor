import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain, Upload, ChevronRight, BarChart3, ShieldCheck,
  Users, Star, CheckCircle, ArrowRight, TrendingDown,
  Clock, Zap, Target, MessageSquare, Building, ChevronDown,
  Play, Award, Globe, Database,
} from "lucide-react";

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const steps = [
  { icon: <Upload size={28} />, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", num: "01", title: "Upload HR Data", desc: "Securely upload your employee dataset in CSV or Excel format." },
  { icon: <Brain size={28} />, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20", num: "02", title: "AI Processes Data", desc: "XGBoost model analyzes 30+ behavioral and role-based features." },
  { icon: <BarChart3 size={28} />, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", num: "03", title: "View Risk Scores", desc: "Each employee gets an attrition risk score with explanations." },
  { icon: <Target size={28} />, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", num: "04", title: "Take Action", desc: "Receive personalized AI retention recommendations per employee." },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "HR Director, TechFlow Inc.", avatar: "SM", color: "bg-blue-500/20 text-blue-300", stars: 5, quote: "AttritionAI cut our voluntary turnover by 38% in the first quarter. The explainable AI feature helped us have the right conversations with at-risk employees." },
  { name: "Rajan Iyer", role: "People Analytics Lead, InnovateCo", avatar: "RI", color: "bg-purple-500/20 text-purple-300", stars: 5, quote: "The prediction accuracy is remarkable. We used to guess who might leave — now we know weeks in advance and can act proactively." },
  { name: "Priya Sharma", role: "CHRO, GlobalEdge Solutions", avatar: "PS", color: "bg-green-500/20 text-green-300", stars: 5, quote: "Implementation was seamless. The dashboard gives our managers real-time visibility into team health without any extra training needed." },
];

const plans = [
  { name: "Starter", price: "$49", period: "/mo", color: "border-white/10", badge: null, features: ["Up to 100 employees","Monthly predictions","Basic dashboard","Email support","CSV export"] },
  { name: "Growth", price: "$149", period: "/mo", color: "border-blue-500", badge: "Most Popular", features: ["Up to 1,000 employees","Real-time predictions","Advanced analytics","Explainable AI insights","Priority support","API access"] },
  { name: "Enterprise", price: "Custom", period: "", color: "border-white/10", badge: null, features: ["Unlimited employees","Custom ML models","White-label dashboard","Dedicated CSM","SSO & compliance","SLA guarantee"] },
];

const faqs = [
  { q: "What data do I need to get started?", a: "You need a basic HR dataset with fields like job role, department, tenure, salary band, performance score, and overtime status. We provide a template to help standardize your data." },
  { q: "How accurate is the attrition prediction?", a: "Our XGBoost model achieves 92% accuracy on standard IBM HR datasets and 87-94% on client data depending on data quality and size." },
  { q: "Is my employee data secure?", a: "Absolutely. We use AES-256 encryption, SOC 2 Type II compliant infrastructure, and never share your data with third parties." },
  { q: "Can I integrate AttritionAI with my existing HRMS?", a: "Yes. We offer native integrations with Workday, SAP SuccessFactors, BambooHR, and a REST API for custom integrations." },
  { q: "How long does setup take?", a: "Most teams are up and running within 24 hours. Upload your data, and AI predictions are ready within minutes." },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? "border-blue-500/40 bg-blue-500/5" : "border-white/10 bg-white/5"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center px-6 py-5 text-left gap-4">
        <span className="font-medium text-base">{q}</span>
        <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-blue-400" : ""}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${open ? "max-h-40 pb-5 px-6" : "max-h-0"}`}>
        <p className="text-gray-400 leading-7 text-sm">{a}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("risk");
  return (
    <div className="bg-black text-white overflow-hidden font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">Attrition<span className="text-blue-500">AI</span></h1>
          <div className="hidden md:flex gap-10 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Analytics</a>
            <a href="#" className="hover:text-white transition-colors">Prediction</a>
            <a href="#" className="hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 duration-300">Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full top-20 left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full bottom-10 right-10"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="uppercase tracking-[5px] text-blue-400 mb-4">AI Powered HR Intelligence</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              Predict Employee Attrition<span className="text-blue-500"> Before It Happens</span>
            </h1>
            <p className="text-gray-400 text-lg leading-8 mb-10">
              Smart employee attrition prediction using XGBoost, explainable AI insights, retention analytics, and real-time HR dashboards.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full flex items-center gap-2 text-lg duration-300 shadow-2xl shadow-blue-600/30">
                Upload Dataset <Upload size={20} />
              </button>
              <button className="border border-white/20 hover:border-white px-8 py-4 rounded-full flex items-center gap-2 text-lg backdrop-blur-xl duration-300">
                Live Demo <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-gray-400">Attrition Risk</p>
                  <h2 className="text-5xl font-bold text-red-500">87%</h2>
                </div>
                <div className="w-24 h-24 rounded-full border-[10px] border-red-500 flex items-center justify-center"><Brain size={35} /></div>
              </div>
              <div className="space-y-6">
                {[["Overtime","92%","bg-red-500","w-[92%]"],["Job Satisfaction","81%","bg-yellow-400","w-[81%]"],["Distance From Home","74%","bg-blue-500","w-[74%]"]].map(([label,val,color,w]) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2"><span>{label}</span><span>{val}</span></div>
                    <div className="w-full bg-gray-800 rounded-full h-3"><div className={`${color} h-3 rounded-full ${w}`}></div></div>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-5 rounded-3xl bg-blue-600/10 border border-blue-500/20">
                <p className="text-blue-400 font-semibold mb-2">AI Recommendation</p>
                <p className="text-gray-300 leading-7">Offer flexible work options and schedule a manager feedback session to reduce resignation risk.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Smart HR Analytics Platform</h2>
            <p className="text-gray-400 text-lg">Everything HR teams need to predict and prevent attrition.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{Icon:Brain,color:"text-blue-500",title:"AI Prediction",desc:"Predict employee resignation risk using advanced XGBoost models."},
              {Icon:BarChart3,color:"text-purple-500",title:"Analytics Dashboard",desc:"View attrition trends, department insights, and employee data."},
              {Icon:ShieldCheck,color:"text-green-500",title:"Explainable AI",desc:"Understand the top reasons behind every attrition prediction."}
            ].map(({Icon,color,title,desc}) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:scale-105 duration-500">
                <Icon className={`${color} mb-6`} size={40} />
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400 leading-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[["92","text-blue-500","Prediction Accuracy","%"],["50","text-purple-500","Employees Analysed","K+"],
            ["120","text-green-500","Companies Supported","+"],["35","text-red-500","Attrition Reduced","%"]
          ].map(([val,color,label,suffix]) => (
            <div key={label}>
              <h2 className={`text-5xl font-bold ${color} mb-3`}><Counter end={parseInt(val)} suffix={suffix} /></h2>
              <p className="text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-purple-400 uppercase tracking-[5px] text-sm mb-4 block">Simple Process</span>
            <h2 className="text-5xl font-bold mb-6">How AttritionAI Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">From raw HR data to actionable retention insights in minutes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative">
                {i < steps.length - 1 && <div className="hidden md:block absolute top-14 left-[60%] w-full h-px border-t border-dashed border-white/20 z-0"></div>}
                <div className={`relative z-10 bg-white/5 border ${s.bg} rounded-[28px] p-7 hover:scale-105 duration-500`}>
                  <div className="flex justify-between items-start mb-6">
                    <div className={s.color}>{s.icon}</div>
                    <span className="text-4xl font-bold text-white/10">{s.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-6">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 uppercase tracking-[5px] text-sm mb-4 block">Interactive Preview</span>
            <h2 className="text-5xl font-bold mb-6">Everything in One Dashboard</h2>
            <p className="text-gray-400 text-lg">See exactly what your HR team gets.</p>
          </div>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {[["risk","Risk Overview"],["dept","Department View"],["trends","Attrition Trends"]].map(([id,label]) => (
              <button key={id} onClick={() => setActiveTab(id)} className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab===id?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-white/5 border border-white/10 text-gray-400 hover:text-white"}`}>{label}</button>
            ))}
          </div>
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
            {activeTab === "risk" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Employee Risk Scores</h3>
                  <span className="text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">12 High Risk Employees</span>
                </div>
                <div className="space-y-4">
                  {[["John M.","Sales",91,"red"],["Priya K.","Engineering",78,"yellow"],["Leo T.","HR",65,"yellow"],["Ananya R.","Finance",42,"green"],["David S.","Marketing",28,"green"]].map(([name,dept,risk,c]) => (
                    <div key={name} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center font-semibold text-sm shrink-0">{name[0]}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between mb-1"><span className="font-medium text-sm">{name}</span><span className="text-sm font-bold" style={{color:c==="red"?"#ef4444":c==="yellow"?"#facc15":"#22c55e"}}>{risk}%</span></div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500">{dept}</span>
                          <div className="flex-1 bg-gray-800 rounded-full h-2"><div className="h-2 rounded-full" style={{width:`${risk}%`,background:c==="red"?"#ef4444":c==="yellow"?"#facc15":"#22c55e"}}></div></div>
                        </div>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium shrink-0 ${c==="red"?"bg-red-500/15 text-red-400":c==="yellow"?"bg-yellow-500/15 text-yellow-400":"bg-green-500/15 text-green-400"}`}>{c==="red"?"High Risk":c==="yellow"?"Medium":"Low Risk"}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "dept" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Department Attrition Breakdown</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[["Sales",34,"text-red-400 bg-red-500/10 border-red-500/20"],["Engineering",18,"text-yellow-400 bg-yellow-500/10 border-yellow-500/20"],["HR",14,"text-yellow-400 bg-yellow-500/10 border-yellow-500/20"],["Finance",9,"text-green-400 bg-green-500/10 border-green-500/20"],["Marketing",12,"text-yellow-400 bg-yellow-500/10 border-yellow-500/20"],["Operations",7,"text-green-400 bg-green-500/10 border-green-500/20"]].map(([dept,pct,cls]) => (
                    <div key={dept} className={`p-5 rounded-2xl border ${cls}`}>
                      <div className="flex justify-between mb-3"><span className="font-medium">{dept}</span><span className="font-bold text-lg">{pct}%</span></div>
                      <div className="w-full bg-gray-800/60 rounded-full h-2"><div className="h-2 rounded-full" style={{width:`${pct*2.5}%`,background:pct>25?"#ef4444":pct>15?"#facc15":"#22c55e"}}></div></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "trends" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">12-Month Attrition Trend</h3>
                <div className="flex items-end gap-3 h-48 mt-4">
                  {[28,32,35,30,26,22,18,20,16,13,11,9].map((v,i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full rounded-t-lg" style={{height:`${v*4}px`,background:"linear-gradient(to top, #3b82f6, #818cf8)",opacity:0.7+(i*0.025)}}></div>
                      <span className="text-xs text-gray-500">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[["Peak Month","Mar — 35%","text-red-400"],["Current","Dec — 9%","text-green-400"],["Improvement","↓ 74%","text-blue-400"]].map(([label,val,color]) => (
                    <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">{label}</p>
                      <p className={`font-bold text-lg ${color}`}>{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full bottom-0 right-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-green-400 uppercase tracking-[5px] text-sm mb-4 block">Trusted by HR Leaders</span>
            <h2 className="text-5xl font-bold mb-6">Real Results, Real Teams</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t,i) => (
              <motion.div key={i} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="bg-white/5 border border-white/10 rounded-[30px] p-8 flex flex-col hover:border-white/20 hover:scale-[1.02] duration-500">
                <div className="flex gap-1 mb-6">{Array(t.stars).fill(0).map((_,j)=><Star key={j} size={16} className="text-yellow-400 fill-yellow-400"/>)}</div>
                <p className="text-gray-300 leading-7 flex-1 mb-8 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}>{t.avatar}</div>
                  <div><p className="font-semibold text-sm">{t.name}</p><p className="text-gray-500 text-xs">{t.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-400 uppercase tracking-[5px] text-sm mb-4 block">Transparent Pricing</span>
            <h2 className="text-5xl font-bold mb-6">Plans That Scale With You</h2>
            <p className="text-gray-400 text-lg">Start free for 14 days. No credit card required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((p,i) => (
              <div key={p.name} className={`rounded-[30px] p-8 border-2 relative hover:scale-[1.02] duration-500 ${i===1?"border-blue-500 bg-blue-600/5":"border-white/10 bg-white/5"}`}>
                {p.badge && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg shadow-blue-600/30">{p.badge}</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-8"><span className="text-5xl font-bold">{p.price}</span><span className="text-gray-400">{p.period}</span></div>
                <ul className="space-y-4 mb-10">
                  {p.features.map(f=>(<li key={f} className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle size={16} className="text-green-400 shrink-0"/>{f}</li>))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${i===1?"bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 text-white":"border border-white/20 hover:border-white"}`}>
                  {p.price==="Custom"?"Contact Sales":"Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10">Integrates with your existing HR stack</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {["Workday","SAP SuccessFactors","BambooHR","ADP","Greenhouse","Slack"].map(brand => (
              <div key={brand} className="bg-white/5 border border-white/10 rounded-2xl px-8 py-4 text-gray-400 text-sm font-medium hover:border-white/20 hover:text-white transition-all duration-300">{brand}</div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-16">
            {[[ShieldCheck,"text-green-400","SOC 2 Type II","Certified"],[Globe,"text-blue-400","GDPR","Compliant"],[Award,"text-yellow-400","ISO 27001","Certified"],[Database,"text-purple-400","AES-256","Encrypted"]].map(([Icon,color,title,sub]) => (
              <div key={title} className="flex items-center gap-3">
                <Icon size={22} className={color}/>
                <div><p className="text-sm font-semibold">{title}</p><p className="text-xs text-gray-500">{sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 uppercase tracking-[5px] text-sm mb-4 block">Got Questions?</span>
            <h2 className="text-5xl font-bold mb-6">Frequently Asked</h2>
          </div>
          <div className="space-y-4">{faqs.map((f,i) => <FAQItem key={i} {...f}/>)}</div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div whileInView={{opacity:1,scale:1}} initial={{opacity:0,scale:0.96}} viewport={{once:true}} className="relative rounded-[40px] p-14 overflow-hidden text-center border border-blue-500/30 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black">
            <div className="absolute inset-0 bg-blue-600/5 blur-3xl"></div>
            <div className="relative z-10">
              <TrendingDown size={48} className="text-blue-400 mx-auto mb-6"/>
              <h2 className="text-5xl font-bold mb-6">Ready to Reduce Attrition?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Join 120+ companies using AttritionAI to retain their best talent. Start your free 14-day trial.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-2 shadow-2xl shadow-blue-600/40 duration-300">Start Free Trial <ArrowRight size={20}/></button>
                <button className="border border-white/20 hover:border-white px-10 py-4 rounded-full text-lg flex items-center gap-2 duration-300"><Play size={20}/> Watch Demo</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <h2 className="text-xl font-bold tracking-wider mb-4">Attrition<span className="text-blue-500">AI</span></h2>
              <p className="text-gray-500 text-sm leading-6">AI-powered employee attrition prediction and HR analytics platform.</p>
            </div>
            {[["Product",["Features","Pricing","Integrations","Changelog"]],["Company",["About","Blog","Careers","Contact"]],["Legal",["Privacy Policy","Terms of Service","Cookie Policy"]]].map(([heading,links]) => (
              <div key={heading}>
                <h3 className="font-semibold mb-4 text-sm">{heading}</h3>
                <ul className="space-y-3">{links.map(l => <li key={l}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className="text-gray-500 text-sm">© 2026 AttritionAI • Employee Attrition Prediction System</p>
            <div className="flex gap-6">{["Twitter","LinkedIn","GitHub"].map(s => <a key={s} href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{s}</a>)}</div>
          </div>
        </div>
      </footer>

    </div>
  );
}