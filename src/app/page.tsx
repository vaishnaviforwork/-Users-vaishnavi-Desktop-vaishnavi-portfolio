import Image from 'next/image'
import type { ReactNode } from 'react'
import styles from './portfolio.module.css'
import { about, concepts, contact, metrics, principles, projects, writing } from '@/content'

function Label({ children }: { children: ReactNode }) {
  return <p className={styles.label}>{children}</p>
}

function SectionHeading({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <div className={styles.sectionHeading} id={id}>
      <span>{number}</span>
      <h2>{title}</h2>
      <i aria-hidden="true" />
    </div>
  )
}

function Artwork({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`${styles.artwork} ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 700px) 90vw, 420px" unoptimized />
    </div>
  )
}

function PodcastProject({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={styles.podcast}>
      <Artwork src={project.image} alt={project.imageAlt} className={styles.podcastImage} />
      <div className={styles.podcastContent}>
        <div className={styles.projectMeta}><span>{project.number} / {project.type}</span><a href={project.href} target="_blank" rel="noreferrer">Listen ↗</a></div>
        <h3>{project.title}</h3>
        <details className={styles.disclosure}>
          <summary>Episode architecture <span>+</span></summary>
          <ol className={styles.episodes}>
            {project.episodes.map((episode) => (
              <li key={episode[0]}><strong>{episode[0]}</strong><em>{episode[1]}</em><p>{episode[2]}</p></li>
            ))}
          </ol>
        </details>
        <details className={styles.disclosure}>
          <summary>Script development <span>+</span></summary>
          {project.developmentIntro && <p className={styles.developmentIntro}>{project.developmentIntro}</p>}
          <ul className={styles.development}>{project.development.map((item) => <li key={item}>{item}</li>)}</ul>
        </details>
      </div>
    </article>
  )
}

export default function RedesignPreview() {
  const [beforeWhy, afterWhy] = about.opener.split('why')

  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <a href="#top" className={styles.logo} aria-label="Vaishnavi Desai home">VD<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Selected work</a><a href="#lab">Concept lab</a><a href="#contact">Contact</a>
        </nav>
        <a className={styles.talk} href={`mailto:${contact.email}`}>Let’s talk <span>↗</span></a>
      </header>

      <main id="top" className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroTop}><Label>Content strategy · Editorial · Storytelling</Label></div>
          <div className={styles.heroBody}>
            <div className={styles.heroText}>
              <h1>Stories <i>&</i><br />Strategies<span>.</span></h1>
              <p className={styles.name}>Vaishnavi Desai</p>
            </div>
            <div className={styles.heroVisual}>
              <Artwork src="/images/vaishnavi-portrait.jpg" alt="Vaishnavi Desai" className={styles.portrait} />
              <div className={styles.imageNote}><span>Vaishnavi Desai</span><span>Scroll to explore ↓</span></div>
            </div>
          </div>
          <div className={styles.heroFoot}><span>Stories & Strategies</span><a href="#work">Selected work <b>↓</b></a></div>
        </section>

        <section className={styles.about} id="about">
          <SectionHeading number="01" title="Inside my mind" id="about-heading" />
          <div className={styles.aboutIntro}>
            <h2>{beforeWhy}<i>why</i>{afterWhy}</h2>
            <p>{about.intro}</p>
          </div>
          <div className={styles.twoSides}>
            <Label>Two sides of me do the work</Label>
            <div className={styles.sidePair}>
              <div className={styles.side}><span>01</span><h3>The Creative</h3><p>in me {about.creative}</p></div>
              <div className={styles.side}><span>02</span><h3>The Creator</h3><p>in me {about.creator}</p></div>
              <div className={styles.meet}><span>↙</span><i>I do my best work here.</i></div>
            </div>
          </div>
          <div className={styles.aboutFoot}>
            <div><Label>Forever curious about</Label><div className={styles.tags}>{about.interests.map((interest) => <span key={interest}>{interest}</span>)}</div></div>
            <div className={styles.anatomy}><Label>The anatomy of my work</Label>{about.anatomy.map(([label, detail]) => <p key={label}><b>{label}</b><span>{detail}</span></p>)}</div>
          </div>
        </section>

        <section className={styles.work} id="work">
          <SectionHeading number="02" title="Selected work" id="work-heading" />
          <div className={styles.workLead}><h2>Selected<br /><i>Work.</i></h2></div>
          <div className={styles.subsection}><Label>Non-fiction podcast scripts</Label><div className={styles.podcastList}>{projects.map((project) => <PodcastProject project={project} key={project.id} />)}</div></div>
          <div className={styles.writingGroup}>
            <div className={styles.subsectionTitle}><Label>Editorial & long-form</Label><h3>Editorial &<br /><i>Long-form</i></h3></div>
            <div className={styles.writingRows}>{writing.slice(0, 3).map((item, i) => <a className={styles.writingRow} href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span className={styles.rowNumber}>0{i + 1}</span><Artwork src={item.image} alt={item.imageAlt} className={styles.writingImage} /><span className={styles.writingText}><strong>{item.title}</strong><small>{item.description}</small></span><span className={styles.outbound}>{item.action} ↗</span>
            </a>)}</div>
          </div>
          <div className={styles.brandGroup}><Label>Website & brand content</Label><div className={styles.brandRows}>{writing.slice(3).map((item, i) => <a href={item.href} target="_blank" rel="noreferrer" key={item.title} className={styles.brandRow}>
            <Artwork src={item.image} alt={item.imageAlt} className={styles.brandImage} /><div><span className={styles.rowNumber}>0{i + 4} / WEBSITE CONTENT</span><h3>{item.title}</h3><p>{item.description}</p><span className={styles.outbound}>{item.action} ↗</span></div>
          </a>)}</div></div>
        </section>

        <section className={styles.lab} id="lab">
          <SectionHeading number="03" title="Concept lab" id="lab-heading" />
          <div className={styles.labLead}><h2>Concept<br /><i>Lab.</i></h2></div>
          <div className={styles.conceptList}>{[concepts.fifth, concepts.vanity].map((concept, i) => <article className={styles.concept} key={concept.title}>
            <div className={styles.conceptNumber}>0{i + 1}</div><div className={styles.conceptBody}><Label>{concept.label}</Label><h3>{concept.title}</h3><p className={styles.hook}>{concept.hook}</p><p>{concept.description}</p><details className={styles.disclosure}><summary>Process & explorations <span>+</span></summary>{concept.process.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul className={styles.development}>{concept.exploring.map((item) => <li key={item}>{item}</li>)}</ul></details>{concept.href && <a href={concept.href} target="_blank" rel="noreferrer" className={styles.textLink}>View the first two episodes ↗</a>}</div><Artwork src={concept.image} alt={`${concept.title} concept artwork`} className={styles.conceptImage} />
          </article>)}</div>
        </section>

        <section className={styles.approach}>
          <SectionHeading number="04" title="How I work" id="approach-heading" />
          <div className={styles.approachLead}><h2>How I<br /><i>work.</i></h2></div>
          <ol className={styles.principles}>{principles.map(([title, description], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{description}</p><b>↗</b></li>)}</ol>
        </section>

        <section className={styles.numbers}>
          <SectionHeading number="05" title="By the numbers" id="numbers-heading" />
          <div className={styles.metricGrid}>{metrics.map(([number, label]) => <div className={styles.metric} key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
        </section>

        <section className={styles.contact} id="contact">
          <SectionHeading number="06" title="Contact" id="contact-heading" />
          <div className={styles.contactBody}><h2>Let’s<br /><i>connect.</i></h2><div><a href={`mailto:${contact.email}`}>{contact.email} ↗</a><a href={`tel:${contact.phone.replaceAll(' ', '')}`}>{contact.phone}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
          <div className={styles.footer}><span>Vaishnavi Desai · Stories & Strategies</span><a href="#top">Back to top ↑</a></div>
        </section>
      </main>
    </div>
  )
}
