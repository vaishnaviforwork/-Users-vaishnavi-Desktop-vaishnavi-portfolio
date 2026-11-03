import type { ReactNode } from 'react'
import Image from 'next/image'
import { about, concepts, contact, metrics, principles, projects, writing } from '@/content'

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p> }
function SectionTitle({ index, title, id }: { index: string; title: string; id: string }) { return <div className="section-title" id={id}><Eyebrow>{index} / {title}</Eyebrow><span className="rule" /></div> }
function PortfolioImage({ src, alt, className, sizes, preload = false, fit = 'cover' }: { src: string; alt: string; className: string; sizes: string; preload?: boolean; fit?: 'cover' | 'contain' }) { return <div className={`portfolio-image ${className}`}><Image src={src} alt={alt} fill sizes={sizes} unoptimized preload={preload} style={{ objectFit: fit }} /></div> }

function Header() {
  return <header className="site-header"><a href="#home" className="wordmark">VD<span>®</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Selected work</a><a href="#lab">Concept lab</a><a href="#contact">Contact <Arrow diagonal /></a></nav><a className="header-cta" href={`mailto:${contact.email}`}>Let’s talk <Arrow diagonal /></a></header>
}

function ProjectCard({ project, tint }: { project: typeof projects[number]; tint: string }) {
  return <a href={`#${project.id}`} className={`project-card text-card ${tint}`}><div className="project-card-top"><Eyebrow>{project.number} — {project.type}</Eyebrow><Arrow diagonal /></div><PortfolioImage src={project.image} alt={project.imageAlt} className="project-card-art" sizes="(max-width: 650px) 42vw, 42vw" fit="contain"/><div className="project-card-bottom"><h3>{project.title}</h3><span className="small-link">Explore project <Arrow /></span></div></a>
}

function ProjectDetail({ project }: { project: typeof projects[number] }) {
  return <article id={project.id} className="project-detail text-only">
    <div className="project-copy"><Eyebrow>{project.number} / {project.type}</Eyebrow><h3>{project.title}</h3><a href={project.href} target="_blank" rel="noreferrer" className="text-link">{project.linkLabel} <Arrow diagonal /></a>
      <div className="episode-feature"><div><h4 className="subhead">Episode Architecture</h4><div className="episode-list">{project.episodes.map((episode, i) => <details className="episode" key={episode[0]}><summary><span className="episode-number">Ep{i + 1}/</span><span>{episode[0]}</span><span className="plus">+</span></summary><div className="episode-body"><em>{episode[1]}</em><p>{episode[2]}</p></div></details>)}</div></div><PortfolioImage src={project.image} alt={project.imageAlt} className="episode-art" sizes="(max-width: 650px) 90vw, 280px" fit="contain"/></div>
      <h4 className="subhead">Script Development</h4>{project.developmentIntro && <p>{project.developmentIntro}</p>}<ul className="plain-list">{project.development.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  </article>
}

function ConceptCard({ title, label, image, hook, description, process, exploring, href, accent }: { title: string; label: string; image: string; hook: string; description: string; process: string; exploring: string[]; href?: string; accent: string }) {
  return <article className={`concept-card ${accent}`}><div className="concept-head"><div><Eyebrow>{label}</Eyebrow><h3>{title}</h3></div><span className="concept-glyph">✳</span></div><PortfolioImage src={image} alt={`${title} concept artwork`} className="concept-art" sizes="(max-width: 650px) 90vw, 40vw"/><p className="concept-hook">{hook}</p><p className="concept-description">{description}</p><div className="concept-process"><Eyebrow>My creative process</Eyebrow>{process.split('\n\n').map((part) => <p key={part}>{part}</p>)}</div><div className="exploring"><Eyebrow>What I'm exploring</Eyebrow><ul className="plain-list">{exploring.map((item) => <li key={item}>{item}</li>)}</ul></div>{href && <a className="text-link" href={href} target="_blank" rel="noreferrer">View the first two episodes here <Arrow diagonal /></a>}</article>
}

export default function Home() {
  const [openerBeforeWhy, openerAfterWhy] = about.opener.split('why')
  return <><Header/><main>
    <section className="hero section-pad" id="home"><div className="hero-kicker"><span>Content strategy · Editorial · Storytelling</span></div><div className="hero-main"><div className="hero-title-wrap"><h1>Stories <span className="amp">&</span><br/>Strategies<span className="period">.</span></h1><p className="hero-name">Vaishnavi Desai</p></div><div className="hero-side"><PortfolioImage src="/images/vaishnavi-portrait.jpg" alt="Vaishnavi Desai" className="hero-art" sizes="(max-width: 650px) 82vw, 350px" preload/><div className="hero-index"><span>01—06</span><span>Scroll to explore ↓</span></div></div></div><div className="hero-bottom"><a href="#work">Selected work <Arrow /></a></div></section>

    <section className="about section-pad" id="about">
      <SectionTitle index="01" title="Inside my mind" id="about-heading"/>
      <h2 className="about-thought">{openerBeforeWhy}<i>why</i>{openerAfterWhy}</h2>
      <div className="about-layout">
        <div className="about-opening"><p>{about.intro}</p></div>
        <div className="two-sides">
          <div className="side-label"><Eyebrow>Two sides of me do the work:</Eyebrow></div>
          <div className="venn-diagram" aria-label={`THE CREATIVE in me ${about.creative} THE CREATOR in me ${about.creator}`}>
            <div className="venn-circle venn-creative"><span>THE CREATIVE</span><p>in me {about.creative}</p></div>
            <div className="venn-circle venn-creator"><span>THE CREATOR</span><p>in me {about.creator}</p></div>
            <span className="venn-marker" aria-hidden="true">↓</span>
          </div>
          <p className="meet-line">I do my best work here.</p>
        </div>
      </div>
      <div className="about-bottom">
        <div className="interests"><Eyebrow>Forever curious about:</Eyebrow><div className="tag-list">{about.interests.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="anatomy"><Eyebrow>The Anatomy of My Work:</Eyebrow>{about.anatomy.map(([label, detail]) => <div className="anatomy-row" key={label}><span>{label}:</span><p>{detail}</p></div>)}</div>
      </div>
    </section>

    <section className="selected section-pad" id="work"><SectionTitle index="02" title="Projects" id="selected-heading"/><div className="section-intro"><h2>Selected<br/><i>Work.</i></h2></div><div className="project-grid"><ProjectCard project={projects[0]} tint="ink-card"/><ProjectCard project={projects[1]} tint="grey-card"/></div>
      <div className="work-details"><Eyebrow>Non-fiction podcast scripts</Eyebrow><ProjectDetail project={projects[0]}/><ProjectDetail project={projects[1]}/></div>
      <div className="writing-work"><div className="writing-title"><h3>Editorial &<br/><i>Long-form</i></h3></div><div className="writing-list">{writing.slice(0, 3).map((item, i) => <a href={item.href} target="_blank" rel="noreferrer" className="writing-row" key={item.title}><span className="row-num">0{i + 1}</span><PortfolioImage src={item.image} alt={item.imageAlt} className="writing-art" sizes="96px" fit="contain"/><div><h4>{item.title}</h4><p>{item.description}</p></div><span className="row-action">{item.action} <Arrow diagonal /></span></a>)}</div></div>
      <div className="brand-work"><div className="brand-heading"><h3>Website<br/><i>Content</i></h3></div><div className="brand-grid">{writing.slice(3).map((item, i) => <a className={`brand-card brand-${i}`} href={item.href} target="_blank" rel="noreferrer" key={item.title}><PortfolioImage src={item.image} alt={item.imageAlt} className="brand-art" sizes="(max-width: 650px) 42vw, 250px" fit="contain"/><h4>{item.title}</h4><p>{item.description}</p><span className="text-link">{item.action} <Arrow diagonal /></span></a>)}</div></div>
    </section>

    <section className="lab section-pad" id="lab"><SectionTitle index="03" title="Concept lab" id="lab-heading"/><div className="lab-intro"><h2>Not every idea<br/>starts with a <i>brief.</i></h2><div><p>Some start with a question.<br/>Some start with a story.<br/>Some start with an image that won't leave my head.</p><p>This is where I take them for a walk.</p></div></div><div className="concept-grid"><ConceptCard {...concepts.fifth} accent="dream-card"/><ConceptCard {...concepts.vanity} accent="vanity-card"/></div></section>

    <section className="approach section-pad"><SectionTitle index="04" title="How I work" id="approach-heading"/><div className="principle-list">{principles.map(([title, desc], i) => <div className="principle" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{desc}</p><span className="principle-mark">↗</span></div>)}</div></section>

    <section className="numbers section-pad"><SectionTitle index="05" title="By the numbers" id="numbers-heading"/><div className="metric-grid">{metrics.map(([number, label]) => <div className="metric" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>

    <section className="contact section-pad" id="contact"><SectionTitle index="06" title="Let’s connect" id="contact-heading"/><div className="contact-main"><div><h2>Let’s make<br/>something worth<br/><i>consuming.</i></h2></div><div className="contact-note"><p>You've seen how I think, what I've built and what I want to make next.</p><p>If there's an interesting problem to solve, I'm interested.</p><a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} <Arrow diagonal /></a></div></div><div className="contact-bottom"><strong>Vaishnavi<br/>Desai<span>.</span></strong><div className="contact-links"><a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div><a href="#home" className="back-top">Back to top ↑</a></div></section>
  </main><footer className="site-footer"><span>© Vaishnavi Desai</span><span>Stories & Strategies</span></footer></>
}
