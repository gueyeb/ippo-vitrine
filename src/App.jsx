import { useEffect, useState } from 'react';
import { privacyPolicy } from './content/policyData.js';

const screenshotItems = [
  {
    title: 'Accueil de session',
    description: 'Lancez une marche et visualisez rapidement le temps, la distance et les pas.',
    src: '/screenshots/session-home.svg'
  },
  {
    title: 'Carte du trajet',
    description: 'Suivez l’itinéraire enregistré pendant votre session de marche.',
    src: '/screenshots/route-map.svg'
  },
  {
    title: 'Historique',
    description: 'Retrouvez vos sorties précédentes et consultez leurs détails.',
    src: '/screenshots/history.svg'
  },
  {
    title: 'Statistiques',
    description: 'Gardez un œil sur vos tendances et vos progrès.',
    src: '/screenshots/stats.svg'
  }
];

const features = [
  'Suivi de marche avec distance, durée et pas',
  'Trajets GPS enregistrés localement',
  'Historique des sessions et notes personnelles',
  'Approche privacy-first: vos données restent sur votre appareil'
];

function useHashRoute() {
  const getRoute = () => (window.location.hash || '#/').replace(/^#/, '');
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <header className="site-header">
        <a className="brand" href="#/" aria-label="Ippo accueil">
          <img src="/assets/logo-ippo.png" alt="" width="40" height="40" />
          <span>Ippo</span>
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#screenshots">Captures</a>
          <a href="#download">Télécharger</a>
          <a href="#/privacy" className="nav-privacy">Confidentialité</a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 Ippo. Fait avec passion pour le bien-être.</p>
          <div className="footer-links">
            <a href="#/privacy">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section className={`section ${className}`} id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="section-container">
        {(eyebrow || title) && (
          <header className="section-header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 id={id ? `${id}-title` : undefined} className="balance-text">{title}</h2>}
          </header>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <Section className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Application mobile de marche</p>
          <h1 className="balance-text">Marchez, suivez votre progression, gardez le contrôle de vos données.</h1>
          <p className="hero-description">
            Ippo vous aide à enregistrer vos sessions de marche, vos itinéraires et votre progression,
            avec une approche centrée sur la confidentialité.
          </p>
          <div className="cta-group" id="download">
            <a className="button primary" href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              App Store
            </a>
            <a className="button secondary" href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-wrapper">
            <img src="/assets/splashscreen-ippo.png" alt="Aperçu de l’application Ippo" width="360" height="740" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Features() {
  return (
    <Section id="features" eyebrow="Pourquoi Ippo" title="Simple, utile et respectueux de votre vie privée">
      <ul className="feature-grid">
        {features.map((item) => (
          <li key={item} className="feature-item">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Screenshots() {
  return (
    <Section id="screenshots" eyebrow="Aperçu" title="Captures d’écran de l’application">
      <div className="screenshot-grid">
        {screenshotItems.map((shot) => (
          <article className="screenshot-card" key={shot.title}>
            <div className="screenshot-image-container">
              <img src={shot.src} alt={shot.title} loading="lazy" width="280" height="560" />
            </div>
            <div className="screenshot-info">
              <h3>{shot.title}</h3>
              <p>{shot.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function PrivacyCallout() {
  return (
    <Section className="privacy-callout-section">
      <div className="callout-card">
        <h2>Votre vie privée, notre priorité</h2>
        <p>
          Ippo adopte une approche privacy-first : les données de marche, de localisation et de session sont
          stockées localement sur votre appareil. Rien ne sort de votre téléphone.
        </p>
        <a className="button secondary" href="#/privacy">
          Lire les règles complètes
        </a>
      </div>
    </Section>
  );
}

function HomePage() {
  return (
    <Layout>
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <PrivacyCallout />
      </main>
    </Layout>
  );
}

function PrivacyPage() {
  return (
    <div className="privacy-page">
      <header className="privacy-top-nav">
        <a className="back-link" href="#/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Retour à l’accueil
        </a>
      </header>

      <main className="privacy-content-wrapper">
        <article className="policy">
          <header className="policy-header">
            <h1>{privacyPolicy.title}</h1>
            <p className="last-updated">Dernière mise à jour : {privacyPolicy.lastUpdated}</p>
          </header>

          <div className="policy-body">
            <p className="intro">{privacyPolicy.intro}</p>
            {privacyPolicy.sections.map((section) => (
              <section key={section.heading} className="policy-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items?.map((item) => (
                  <div key={item.title} className="policy-subsection">
                    <h3>{item.title}</h3>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {section.ordered ? (
                  <ol>
                    {section.ordered.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();

  return route === '/privacy' ? <PrivacyPage /> : <HomePage />;
}

