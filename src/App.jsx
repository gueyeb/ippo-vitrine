import { useEffect, useState } from 'react';
import { privacyPolicy } from './content/privacyPolicy.js';

const screenshotItems = [
  {
    title: 'Accueil de session',
    description: 'Lancez une marche et visualisez rapidement le temps, la distance et les pas.',
    src: '/screenshots/session-home.svg'
  },
  {
    title: 'Carte du trajet',
    description: 'Suivez l\'itinéraire enregistré pendant votre session de marche.',
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

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Ippo accueil">
        <img src="/assets/logo-ippo.png" alt="Logo Ippo" />
        <span>Ippo</span>
      </a>
      <nav className="nav-links" aria-label="Navigation principale">
        <a href="#screenshots">Captures</a>
        <a href="#download">Télécharger</a>
        <a href="#/privacy">Règles de confidentialité</a>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Application mobile de marche</p>
            <h1>Marchez, suivez votre progression, gardez le contrôle de vos données.</h1>
            <p className="hero-text">
              Ippo vous aide à enregistrer vos sessions de marche, vos itinéraires et votre progression,
              avec une approche centrée sur la confidentialité.
            </p>
            <div className="cta-row" id="download">
              <a className="cta-button primary" href="https://apps.apple.com/" target="_blank" rel="noreferrer">
                Télécharger sur l&apos;App Store
              </a>
              <a className="cta-button" href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                Télécharger sur Google Play
              </a>
            </div>
            <p className="helper-text">
              Remplacez les liens par les URL finales de vos fiches App Store / Google Play quand elles seront publiées.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <img src="/assets/splashscreen-ippo.png" alt="" />
          </div>
        </section>

        <section className="features" aria-labelledby="features-title">
          <div className="section-heading">
            <p className="eyebrow">Pourquoi Ippo</p>
            <h2 id="features-title">Simple, utile et respectueux de votre vie privée</h2>
          </div>
          <ul className="feature-list">
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="screenshots" id="screenshots" aria-labelledby="screenshots-title">
          <div className="section-heading">
            <p className="eyebrow">Aperçu</p>
            <h2 id="screenshots-title">Captures d&apos;écran de l&apos;application</h2>
          </div>
          <div className="screenshot-grid">
            {screenshotItems.map((shot) => (
              <article className="screenshot-card" key={shot.title}>
                <img src={shot.src} alt={shot.title} loading="lazy" />
                <div className="screenshot-copy">
                  <h3>{shot.title}</h3>
                  <p>{shot.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="privacy-callout" aria-labelledby="privacy-title">
          <h2 id="privacy-title">Règles de confidentialité</h2>
          <p>
            Ippo adopte une approche privacy-first: les données de marche, de localisation et de session sont
            stockées localement sur votre appareil.
          </p>
          <a className="text-link" href="#/privacy">
            Lire la politique complète
          </a>
        </section>
      </main>
    </>
  );
}

function PrivacyPage() {
  return (
    <div className="privacy-layout">
      <header className="privacy-header">
        <a className="text-link" href="#/">← Retour à l&apos;accueil</a>
        <h1>{privacyPolicy.title}</h1>
        <p className="helper-text">Dernière mise à jour: {privacyPolicy.lastUpdated}</p>
      </header>

      <main className="privacy-content" aria-label="Règles de confidentialité Ippo">
        <p>{privacyPolicy.intro}</p>
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
      </main>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();

  if (route === '/privacy') {
    return <PrivacyPage />;
  }

  return <HomePage />;
}
