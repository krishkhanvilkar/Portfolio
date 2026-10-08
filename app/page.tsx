"use client"

import { useEffect, useState } from "react"
import DockShader from "../components/portfolio/dock-shader"

const profile = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%2811%29-5eM4LcXo9WshDgvNQdAkUCyvwGEgNt.jpg"
const brand = (slug: string) => `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/mono.svg`
const roles = [
  ["Founder & Product Lead", "Seedr", "2026 — Present", "Building a verified network for operators, owning the product from zero-to-one discovery through launch."],
  ["Product Management & Agentic AI", "IIT Patna", "2025", ""],
  ["recruit.ai", "Stealth startup", "2025 — 2025", "Fast-built an agentic recruitment product in a focused sprint, taking it from insight to a working product experience."],
  ["UI/UX Designer", "Freelance", "2023 — 2024", ""],
]
const stack = [
  ["React Native", "react"], ["Supabase", "supabase"], ["Expo", "expo"], ["Vercel", "vercel"], ["Figma", "figma"], ["Claude", "anthropic"], ["n8n", "n8n"], ["LangChain", "langchain"],
]
const products = [
  ["recruit.ai", "Agentic workflow automation built with n8n, AI agents, and custom flows to streamline recruitment.", "2025", ["n8n", "AI Agents", "Automation"]],
  ["Medical Ops App", "A robust medical application designed for hospital management and seamless data flow.", "2025", ["Healthcare", "Operations", "Product Design"]],
  ["UX Case Studies", "A collection of end-to-end design case studies — research, journey mapping, wireframes, and validated high-fidelity prototypes.", "2025", ["Figma", "User Research", "Prototyping"]],
  ["Agentic Research Assistant", "A prototype agent that plans, searches, and summarises multi-source research into a structured, citable brief.", "2025", ["Agentic AI", "Prototype"]],
]

function Clock() { const [time, setTime] = useState(""); useEffect(() => { const tick = () => setTime(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()) + " IST"); tick(); const id = setInterval(tick, 1000); return () => clearInterval(id) }, []); return <span>{time}</span> }

function BrandIcon({ slug, label }: { slug: string; label: string }) { return <img src={brand(slug)} alt="" aria-hidden="true" onError={(event) => { event.currentTarget.style.display = "none" }} /> }

export default function Home() {
  const [light, setLight] = useState(false)
  const [fullStack, setFullStack] = useState(false)
  return <main id="top" className={light ? "site light" : "site"}>
    <div className="noise" /><div className="wave" aria-hidden="true" />
    <section className="hero"><div className="avatar-wrap"><img src={profile} alt="Krish Khanvilkar in a snowy mountain landscape" className="avatar" /><i /></div><h1>Krish Khanvilkar</h1><div className="clock"><b /> <Clock /></div><div className="bio"><p>I&apos;m a 20-year-old product manager and UX designer passionate about building verifiable systems — products where trust isn&apos;t assumed, it&apos;s proven.</p><p>I obsess over real-world problems, move quickly from insight to prototype, and design experiences that feel simple on the surface while staying rigorous underneath.</p></div></section>
    <div className="content">
      <section className="card experience"><header><label>PREVIOUSLY</label></header>{roles.map(([title, org, year, detail], i) => <details key={title} open={i === 0}><summary><span><strong>{title}</strong><small>{org}</small></span><em>{year}</em><b>⌄</b></summary>{detail && <div className="detail"><p>{detail}</p>{i === 0 && <ul><li>Defined the product vision, roadmap, and verification model end to end.</li><li>Designed the full mobile experience in Figma and shipped it with React Native &amp; Supabase.</li><li>Ran user interviews with early operators to prioritise the core loop.</li></ul>}</div>}</details>)}</section>
      <section className="card stack" id="stack"><header><label>WHAT I BUILD WITH</label><button onClick={() => setFullStack(!fullStack)} aria-expanded={fullStack}>View Full Stack <span>{fullStack ? "⌃" : "⌄"}</span></button></header><div className={`marquee ${fullStack ? "expanded" : ""}`}><div className="marquee-track">{[...stack, ...stack].map(([name, slug], i) => <span key={`${name}-${i}`}><BrandIcon slug={slug} label={name} />{name}</span>)}</div></div>{fullStack && <div className="stack-more" aria-label="Full technology stack"><div>{stack.map(([name, slug]) => <span key={name}><BrandIcon slug={slug} label={name} />{name}</span>)}</div><div>{[["TypeScript","typescript"],["Next.js","nextjs"],["AI SDK","vercel"],["GitHub","github"],["Notion","notion"],["Linear","linear"],["Postgres","postgresql"],["Tailwind CSS","tailwindcss"]].map(([name, slug]) => <span key={name}><BrandIcon slug={slug} label={name} />{name}</span>)}</div></div>}</section>
      <section className="card disciplines"><label>BEYOND THE STACK</label><h2>Product, UX, and AI</h2><p className="muted">The disciplines I bring to every team and every build.</p><div className="discipline-grid">{[["Product Management", "Discovery, prioritisation, and roadmaps grounded in real user problems."],["UX/UI Design", "Research-led interfaces that feel obvious, fast, and trustworthy."],["Agentic AI", "Designing products where autonomous agents do real, verifiable work."],["Rapid Prototyping", "From idea to clickable, testable build in days, not months."]].map(([a,b]) => <div key={String(a)}><h3>• <span>{String(a)}</span></h3><p>{b}</p></div>)}</div></section>
      <section className="card flagship"><div className="eyebrow"><label>FLAGSHIP PRODUCT</label><span className="live"><i /> Live</span></div><div className="seedr-glow" aria-hidden="true" /><h2>Seedr</h2><p>The verified network for relentless operators to build the next big thing.</p><div className="pills"><span>⌘ Built with React Native &amp; Supabase</span><span>◉ Identity-verified profiles</span></div><div className="specs"><div><label>PLATFORM</label><b>React Native<br />Expo</b></div><div><label>BACKEND</label><b>Supabase</b></div><div><label>ROLE</label><b>Product &amp; UX<br />Design</b></div></div><a href="https://seedr-eta.vercel.app" target="_blank" rel="noreferrer">Visit Seedr ↗</a></section>
      <section className="products" id="products"><label>PRODUCTS SO FAR</label>{products.map(([name, desc, year, tags]) => <article className="card product" key={String(name)}><div><h3>{String(name)}</h3><p>{String(desc)}</p><div className="tags">{(tags as string[]).map(t => <span key={String(t)}>{String(t)}</span>)}</div></div><time>{year}</time></article>)}</section>
      <section className="education" id="education"><label>EDUCATION</label><div className="edu-row"><div><h3>Product Management &amp; Agentic AI</h3><p>IIT Patna</p></div><time>2025 — 2026</time></div><div className="edu-row"><div><h3>Bachelor of Management Studies</h3><p>Mumbai University</p></div><time>2023 — 2026</time></div><div className="edu-row"><div><h3>Project Management Essentials</h3><p>Howard University</p></div><time>2024</time></div><div className="edu-row"><div><h3>Google UX Design Professional Certificate</h3><p>Google</p></div><time>2023</time></div></section>
      <section className="card contact" id="contact"><label>GET IN TOUCH</label><h2>Let&apos;s build something<br />that matters</h2><p>Open to product roles, design collaborations, and conversations with fellow operators.</p><div className="contact-actions"><a className="primary" href="https://cal.com/krish-khanvilkar" target="_blank" rel="noreferrer">▣ &nbsp; Schedule a meeting</a><a href="mailto:khanvilkarkrish38@gmail.com">□ &nbsp; Email me</a></div><div className="social"><a href="https://linkedin.com/in/krishkhanvilkar" target="_blank" rel="noreferrer">in</a><a href="https://github.com" target="_blank" rel="noreferrer">◉</a><a href="https://x.com/thekrish__" target="_blank" rel="noreferrer">𝕏</a><a href="https://instagram.com/kr1sh.k_" target="_blank" rel="noreferrer">◎</a></div></section>
      <footer>© 2026 Krish Khanvilkar</footer>
    </div>
    <nav className="dock" aria-label="Quick navigation"><DockShader light={light} /><a href="#top" aria-label="Home">⌂</a><a href="#products" aria-label="Products">⊞</a><a href="https://linkedin.com/in/krishkhanvilkar" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">◉</a><a href="https://x.com/thekrish__" target="_blank" rel="noreferrer" aria-label="X">𝕏</a><a href="https://instagram.com/kr1sh.k_" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a href="#education" aria-label="Education">▦</a><button onClick={() => setLight(!light)} aria-label="Toggle light mode">☼</button></nav>
  </main>
}
