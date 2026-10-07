"use client"

import { useEffect, useState } from "react"

const profile = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2811%29-5eM4LcXo9WshDgvNQdAkUCyvwGEgNt.jpg"
const roles = [
  ["Founder & Product Lead", "Seedr", "2025 — Present", "Building a verified network for operators, owning the product from zero-to-one discovery through launch."],
  ["Product & Agentic AI Fellow", "Vishleshan i-Hub, IIT Patna", "2025", ""],
  ["UX Designer", "Freelance", "2024 — 2025", ""],
  ["Volunteer Coordinator", "Pack-A-Meal", "2023 — 2024", ""],
]
const stack = ["◈ React Native", "✦ Supabase", "△ Expo", "▲ Vercel", "◌ Figma", "⌘ n8n", "✳ Antigravity", "◉ Claude Code"]
const products = [
  ["recruit.ai", "Agentic workflow automation built with n8n, AI agents, and custom flows to streamline recruitment.", "2025", ["n8n", "AI Agents", "Automation"]],
  ["Medical Ops App", "A robust medical application designed for hospital management and seamless data flow.", "2025", ["Healthcare", "Operations", "Product Design"]],
  ["UX Case Studies", "A collection of end-to-end design case studies — research, journey mapping, wireframes, and validated high-fidelity prototypes.", "2025", ["Figma", "User Research", "Prototyping"]],
  ["Pack-A-Meal Volunteering", "Community initiative coordinating volunteers to pack and distribute meals, with a lightweight system for sign-ups and scheduling.", "2024", ["Operations", "Community", "Impact"]],
  ["Agentic Research Assistant", "A prototype agent that plans, searches, and summarises multi-source research into a structured, citable brief.", "2025", ["Agentic AI", "Prototype"]],
]

function Clock() { const [time, setTime] = useState(""); useEffect(() => { const tick = () => setTime(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()) + " IST"); tick(); const id = setInterval(tick, 1000); return () => clearInterval(id) }, []); return <span>{time}</span> }

export default function Home() {
  const [light, setLight] = useState(false)
  return <main className={light ? "site light" : "site"}>
    <div className="noise" />
    <div className="wave" aria-hidden="true" />
    <section className="hero"><div className="avatar-wrap"><img src={profile} alt="Krish Khanvilkar in a snowy mountain landscape" className="avatar" /><i /></div><h1>Krish Khanvilkar</h1><div className="clock"><b /> <Clock /></div><div className="bio"><p>I&apos;m a 21-year-old product manager and UX designer passionate about building verifiable systems — products where trust isn&apos;t assumed, it&apos;s proven.</p><p>I obsess over real-world problems, move quickly from insight to prototype, and design experiences that feel simple on the surface while staying rigorous underneath.</p></div></section>
    <div className="content">
      <section className="card experience"><header><label>PREVIOUSLY</label></header>{roles.map(([title, org, year, detail], i) => <details key={title} open={i === 0}><summary><span><strong>{title}</strong><small>{org}</small></span><em>{year}</em><b>⌄</b></summary>{detail && <div className="detail"><p>{detail}</p><ul><li>Defined the product vision, roadmap, and verification model end to end.</li><li>Designed the full mobile experience in Figma and shipped it with React Native &amp; Supabase.</li><li>Ran user interviews with early operators to prioritise the core loop.</li></ul></div>}</details>)}</section>
      <section className="card stack"><header><label>WHAT I BUILD WITH</label><button>View Full Stack <span>⌄</span></button></header><div className="marquee"><div className="marquee-track">{[...stack, ...stack].map((x, i) => <span key={i}>{x}</span>)}</div></div></section>
      <section className="card disciplines"><label>BEYOND THE STACK</label><h2>Product, UX, and AI</h2><p className="muted">The disciplines I bring to every team and every build.</p><div className="discipline-grid">{[["Product Management", "Discovery, prioritisation, and roadmaps grounded in real user problems."],["UX/UI Design", "Research-led interfaces that feel obvious, fast, and trustworthy."],["Agentic AI", "Designing products where autonomous agents do real, verifiable work."],["Rapid Prototyping", "From idea to clickable, testable build in days, not months."]].map(([a,b]) => <div key={String(a)}><h3>• <span>{String(a)}</span></h3><p>{String(b)}</p></div>)}</div></section>
      <section className="card flagship"><div className="eyebrow"><label>FLAGSHIP PRODUCT</label><span className="live"><i /> Live</span></div><h2>Seedr</h2><p>The verified network for relentless operators to build the next big thing.</p><div className="pills"><span>⌘ Built with React Native &amp; Supabase</span><span>◉ Identity-verified profiles</span></div><div className="specs"><div><label>PLATFORM</label><b>React Native<br />Expo</b></div><div><label>BACKEND</label><b>Supabase</b></div><div><label>ROLE</label><b>Product &amp; UX<br />Design</b></div></div><a href="https://seedr.startup.app" target="_blank">Visit Seedr ↗</a></section>
      <section className="products"><label>PRODUCTS SO FAR</label>{products.map(([name, desc, year, tags]) => <article className="card product" key={String(name)}><div><h3>{name}</h3><p>{desc}</p><div className="tags">{(tags as string[]).map(t => <span key={t}>{t}</span>)}</div></div><time>{year}</time></article>)}</section>
      <section className="education"><label>EDUCATION</label><div className="edu-row"><div><h3>Bachelor of Management Studies</h3><p>Mumbai University</p></div><time>2023 — 2026</time></div><div className="edu-row"><div><h3>Product Management &amp; Agentic AI Certification</h3><p>Vishleshan i-Hub, IIT Patna &amp; Masai School</p></div><time>2025 — 2026</time></div><div className="edu-row"><div><h3>Google UX Design Professional Certificate</h3><p>Google</p></div><time>2024</time></div></section>
      <section className="card contact"><label>GET IN TOUCH</label><h2>Let&apos;s build something<br />that matters</h2><p>Open to product roles, design collaborations, and conversations with fellow operators.</p><div className="contact-actions"><a className="primary" href="mailto:hello@krishkhanvilkar.com">▣ &nbsp; Schedule a meeting</a><a href="mailto:hello@krishkhanvilkar.com">□ &nbsp; Email me</a><a href="https://wa.me/919999999999">◉ &nbsp; WhatsApp</a></div><div className="social"><a href="https://linkedin.com" target="_blank">in</a><a href="https://github.com" target="_blank">◉</a><a href="https://x.com/thekrish" target="_blank">𝕏</a><a href="https://instagram.com/kr1sh.k" target="_blank">◎</a></div></section>
      <footer>© 2026 Krish Khanvilkar</footer>
    </div>
    <nav className="dock"><a href="#top">⌂</a><a href="#products">⊞</a><a href="https://linkedin.com">in</a><a href="https://github.com">◉</a><a href="https://x.com/thekrish">𝕏</a><a href="https://instagram.com/kr1sh.k">◎</a><button onClick={() => setLight(!light)} aria-label="Toggle light mode">☼</button></nav>
  </main>
}
