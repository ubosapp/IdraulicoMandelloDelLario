import React from 'react';
import ReactDOM from 'react-dom/client';

// --- Fix: Define a type for blog posts for type safety ---
type BlogPostType = {
  slug: string;
  title: string;
  image: string;
  alt: string;
  excerpt: string;
  content: string;
};

// --- Add: Define a type for partner sites ---
type PartnerSite = {
  title: string;
  description: string;
  url: string;
};

// --- Blog Data ---
const blogPosts: BlogPostType[] = [
  {
    slug: '5-consigli-manutenzione-caldaia-inverno',
    title: '5 Consigli per la Manutenzione della Caldaia Prima dell\'Inverno',
    image: 'https://images.unsplash.com/photo-1582599298945-c8cec7f71151?q=80&w=2070&auto=format&fit=crop',
    alt: 'Primo piano di una caldaia a gas in un locale tecnico.',
    excerpt: 'L\'inverno si avvicina e una caldaia efficiente è fondamentale. Scopri i nostri consigli professionali per non avere brutte sorprese. Un buon idraulico a Mandello del Lario può fare la differenza...',
    content: `
      <p>Con l'arrivo dei primi freddi, assicurarsi che la propria caldaia sia in perfette condizioni è essenziale per garantire comfort, sicurezza e risparmio energetico. Una corretta manutenzione previene guasti improvvisi e costosi. Ecco 5 consigli pratici che ogni buon <strong>idraulico a Mandello del Lario</strong> ti darebbe.</p>
      
      <h3>1. Controlla la Pressione dell'Acqua</h3>
      <p>La pressione dell'impianto è un indicatore vitale della sua salute. Controlla sul manometro della caldaia: il valore ideale si attesta solitamente tra 1 e 1.5 bar. Se la pressione è troppo bassa, la caldaia potrebbe non avviarsi. Puoi ripristinarla agendo sull'apposito rubinetto di carico, ma se il problema persiste, è segno di una perdita che richiede l'intervento di un professionista.</p>
      
      <h3>2. Sfiatare i Termosifoni</h3>
      <p>Se i tuoi termosifoni sono freddi nella parte alta, probabilmente c'è aria all'interno. Sfiatarli è un'operazione semplice: a impianto spento e freddo, apri la valvola di sfiato con l'apposita chiavetta finché non uscirà solo acqua. Questo migliora l'efficienza e riduce i consumi.</p>
      
      <h3>3. Pulizia della Caldaia e dei Fumi</h3>
      <p>La pulizia annuale è un obbligo di legge, ma soprattutto una necessità. Residui e incrostazioni possono compromettere il funzionamento e la sicurezza. L'analisi dei fumi, inoltre, certifica il corretto rendimento e le basse emissioni. Affidati sempre a un tecnico qualificato per questa operazione.</p>
      
      <h3>4. Verificare l'Assenza di Perdite</h3>
      <p>Ispeziona visivamente l'area intorno alla caldaia e i collegamenti idraulici. Piccole gocce o aloni di umidità possono indicare perdite che, se trascurate, possono causare danni maggiori. Un controllo tempestivo da parte di un <strong>idraulico esperto a Mandello del Lario</strong> può risolvere il problema sul nascere.</p>
      
      <h3>5. Pianifica la Manutenzione Annuale con un Professionista</h3>
      <p>Il fai-da-te ha i suoi limiti. La soluzione migliore per la sicurezza e l'efficienza è pianificare un controllo annuale con un idraulico certificato. Solo un professionista può effettuare tutte le verifiche necessarie, pulire i componenti interni e garantire che la tua caldaia funzioni al meglio per tutto l'inverno.</p>
    `
  },
  {
    slug: 'come-riconoscere-perdita-acqua-occulta',
    title: 'Come Riconoscere e Affrontare una Perdita d\'Acqua Occulta',
    image: 'https://images.unsplash.com/photo-1586927904837-5433a7805b59?q=80&w=2072&auto=format&fit=crop',
    alt: 'Macchia di umidità su un muro, segno di una perdita d\'acqua.',
    excerpt: 'Una bolletta dell\'acqua inspiegabilmente alta? Potrebbe essere una perdita occulta. Ecco come individuarla e perché chiamare subito un idraulico a Mandello del Lario.',
    content: `
      <p>Le perdite d'acqua occulte sono un vero incubo: non si vedono, ma causano un aumento dei consumi in bolletta e possono provocare danni strutturali seri all'edificio. Imparare a riconoscere i primi segnali è fondamentale per intervenire tempestivamente.</p>
      
      <h3>Segnali di una Possibile Perdita Occulta</h3>
      <ul>
        <li><strong>Aumento anomalo della bolletta dell'acqua:</strong> È il primo e più evidente campanello d'allarme.</li>
        <li><strong>Contatore dell'acqua che gira a rubinetti chiusi:</strong> Chiudi tutti i rubinetti e controlla il contatore. Se continua a muoversi, c'è una perdita.</li>
        <li><strong>Macchie di umidità, muffa o rigonfiamenti:</strong> Controlla pareti, soffitti e pavimenti, specialmente in prossimità di bagni e cucine.</li>
        <li><strong>Rumori strani:</strong> Un sibilo o un gocciolio costante proveniente dai muri può indicare una tubatura danneggiata.</li>
      </ul>

      <h3>Cosa Fare Subito</h3>
      <p>Se sospetti una perdita, la prima cosa da fare è chiudere la valvola generale dell'acqua per limitare i danni. Successivamente, è cruciale non improvvisare. Rompere un muro alla cieca può essere costoso e inutile.</p>

      <h3>Perché Chiamare un Professionista</h3>
      <p>Un <strong>idraulico professionista a Mandello del Lario</strong> dispone di strumentazioni avanzate per la ricerca di perdite non distruttiva, come termocamere, geofoni e rilevatori a ultrasuoni. Questi strumenti permettono di localizzare il punto esatto della perdita con precisione millimetrica, evitando demolizioni inutili e riducendo drasticamente i costi e i tempi di riparazione. Se hai notato uno di questi segnali, non aspettare: contattaci per un intervento rapido e risolutivo.</p>
    `
  },
  {
    slug: 'disostruzione-scarichi-fai-da-te-vs-professionista',
    title: 'Disostruzione Scarichi: Quando il Fai-da-Te Non Basta',
    image: 'https://images.unsplash.com/photo-1628503845458-3393f9c646b1?q=80&w=2070&auto=format&fit=crop',
    alt: 'Scarico di un lavandino intasato con acqua stagnante.',
    excerpt: 'Uno scarico lento è un problema comune, ma i rimedi casalinghi non sempre funzionano. Vediamo quando è il momento di chiamare un idraulico professionista a Mandello del Lario.',
    content: `
      <p>Un lavandino che non scarica o un WC intasato sono tra i problemi domestici più fastidiosi. L'istinto è spesso quello di ricorrere a prodotti chimici o a metodi fai-da-te, ma non sempre è la scelta giusta. Anzi, a volte può peggiorare la situazione.</p>
      
      <h3>Rimedi Fai-da-Te Comuni: Pro e Contro</h3>
      <p>Metodi come l'uso di ventose, miscele di bicarbonato e aceto, o l'acqua bollente possono essere efficaci per piccole ostruzioni superficiali causate da residui di cibo o capelli. Tuttavia, hanno i loro limiti:</p>
      <ul>
        <li><strong>Prodotti chimici disgorganti:</strong> Possono essere corrosivi per le tubature, soprattutto quelle più vecchie, e sono altamente inquinanti. Inoltre, se non risolvono l'ingorgo, creano un accumulo di sostanze chimiche pericolose nel tubo.</li>
        <li><strong>Sonde manuali:</strong> Se usate in modo scorretto, possono graffiare o danneggiare le pareti interne dei tubi.</li>
      </ul>

      <h3>Quando Chiamare l'Idraulico è Indispensabile</h3>
      <p>Se i metodi casalinghi non funzionano dopo un paio tentativi, è il momento di fermarsi. Insistere potrebbe causare danni seri. Devi assolutamente contattare un <strong>idraulico a Mandello del Lario</strong> se:</p>
      <ul>
        <li><strong>L'ostruzione è profonda:</strong> Se il blocco è lontano nello scarico, i metodi manuali non possono raggiungerlo.</li>
        <li><strong>Più scarichi sono bloccati contemporaneamente:</strong> Questo indica un problema nella colonna di scarico principale, che richiede un intervento professionale.</li>
        <li><strong>Senti rumori di gorgoglio:</strong> Quando usi un altro scarico e senti gorgogliare quello intasato, è un chiaro segno di un blocco importante.</li>
        <li><strong>C'è un ritorno di cattivi odori:</strong> Potrebbe indicare materiale in decomposizione bloccato nelle tubature.</li>
      </ul>
      <p>Un professionista utilizzerà attrezzature come sonde elettriche o sistemi di canal jet ad alta pressione per rimuovere l'ostruzione in modo sicuro ed efficace, senza danneggiare le tubature e risolvendo il problema alla radice.</p>
    `
  }
];

// --- Add: JSON data for partner sites ---
const partnerSites: PartnerSite[] = [
  {
    title: 'Fabbro Pronto Intervento Lecco',
    description: 'Servizi di apertura porte, sostituzione serrature e riparazioni urgenti 24/7 in tutta la provincia di Lecco.',
    url: 'https://example.com/fabbro-lecco'
  },
  {
    title: 'Elettricista Urgente Como',
    description: 'Riparazione di guasti elettrici, impianti civili e industriali, certificazioni e pronto intervento a Como e dintorni.',
    url: 'https://example.com/elettricista-como'
  },
  {
    title: 'Spurghi Varese e Provincia',
    description: 'Servizi di autospurgo, disostruzione fognature, pulizia pozzi neri e videoispezioni per privati e aziende.',
    url: 'https://example.com/spurghi-varese'
  }
];


const AffiliateBanner = ({ onAffiliateClick, onReferralClick }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <aside className={`affiliate-banner ${isExpanded ? 'expanded' : ''}`} aria-label="Annuncio per idraulici">
            <div className="container">
                <div id="affiliate-main-content" className="affiliate-main-content">
                    <div className="affiliate-content">
                        <span className="affiliate-icon" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4z"/>
                            </svg>
                        </span>
                        <div className="affiliate-text">
                        <p><strong>SEI UN IDRAULICO?</strong> Questo sito è in affitto! Trova nuovi clienti a Mandello del Lario.</p>
                        <p className="affiliate-disclaimer">(Nota: questo sito è una demo in affitto e non rappresenta un'azienda idraulica attiva)</p>
                        <a href="#contatti" onClick={onReferralClick} className="referral-link">
                            Conosci un idraulico a cui può interessare questo sito? Contattaci!
                        </a>
                        </div>
                    </div>
                    <a href="#contatti" className="btn" onClick={onAffiliateClick}>Contattaci Subito</a>
                </div>
                <button 
                    className="affiliate-toggle"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                    aria-controls="affiliate-main-content"
                >
                    <p><strong>SEI UN IDRAULICO?</strong></p>
                    <span className="chevron" aria-hidden="true"></span>
                </button>
            </div>
        </aside>
    );
};

const Header = ({ onNavClick, onContactClick, activeSection, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header className="header" aria-label="Intestazione del sito">
    <div className="container">
      <a href="/" className="logo" onClick={(e) => { e.preventDefault(); onNavClick(e, true); }}>Idraulico Mandello</a>
      <nav className="desktop-nav" aria-label="Navigazione principale">
        <div className="nav-links">
          <a href="#servizi" onClick={onNavClick} className={activeSection === 'servizi' ? 'active' : ''}>Servizi</a>
          <a href="#chi-siamo" onClick={onNavClick} className={activeSection === 'chi-siamo' ? 'active' : ''}>Chi Siamo</a>
          <a href="#zone" onClick={onNavClick} className={activeSection === 'zone' ? 'active' : ''}>Zone</a>
          <a href="#testimonianze" onClick={onNavClick} className={activeSection === 'testimonianze' ? 'active' : ''}>Testimonianze</a>
          <a href="#blog" onClick={onNavClick} className={activeSection === 'blog' ? 'active' : ''}>Blog</a>
          <a href="#contatti" onClick={onContactClick} className={activeSection === 'contatti' ? 'active' : ''}>Contatti</a>
        </div>
      </nav>
      <a href="#contatti" className="btn desktop-btn" onClick={onContactClick}>Preventivo Gratuito</a>
      <button
        className={`mobile-nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label={isMobileMenuOpen ? "Chiudi menu di navigazione" : "Apri menu di navigazione"}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </header>
);

const MobileMenu = ({ isOpen, onNavClick, onContactClick, activeSection }) => {
  if (!isOpen) return null;

  return (
    <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true">
      <nav className="mobile-menu-nav">
        <a href="#servizi" onClick={onNavClick} className={activeSection === 'servizi' ? 'active' : ''}>Servizi</a>
        <a href="#chi-siamo" onClick={onNavClick} className={activeSection === 'chi-siamo' ? 'active' : ''}>Chi Siamo</a>
        <a href="#zone" onClick={onNavClick} className={activeSection === 'zone' ? 'active' : ''}>Zone</a>
        <a href="#testimonianze" onClick={onNavClick} className={activeSection === 'testimonianze' ? 'active' : ''}>Testimonianze</a>
        <a href="#blog" onClick={onNavClick} className={activeSection === 'blog' ? 'active' : ''}>Blog</a>
        <a href="#contatti" onClick={onContactClick} className={activeSection === 'contatti' ? 'active' : ''}>Contatti</a>
        <a href="#contatti" className="btn" onClick={onContactClick}>Preventivo Gratuito</a>
      </nav>
    </div>
  );
};

const Hero = ({ onContactClick }) => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-content">
      <h1 id="hero-title">Idraulico a Mandello del Lario: Pronto Intervento 24/7</h1>
      <p>Riparazioni idrauliche rapide e professionali per casa e azienda. Affidati alla nostra esperienza.</p>
      <a href="#contatti" className="btn" onClick={onContactClick}>Richiedi un Intervento</a>
    </div>
  </section>
);

const services = [
  { icon: '🔧', title: 'Riparazioni Idrauliche', description: 'Perdite, rotture, sostituzione rubinetteria e molto altro.' },
  { icon: '🚽', title: 'Disostruzioni', description: 'Interventi rapidi per scarichi intasati di WC, lavandini e docce.' },
  { icon: '🚿', title: 'Installazione Sanitari', description: 'Montaggio di WC, bidet, lavabi, docce e vasche da bagno.' },
  { icon: '🔥', title: 'Impianti Termoidraulici', description: 'Realizzazione e manutenzione di impianti di riscaldamento.' },
  { icon: '💧', title: 'Ricerca Perdite', description: 'Individuazione precisa di perdite d’acqua occulte con strumentazione.' },
  { icon: '♨️', title: 'Manutenzione Caldaie', description: 'Controllo, pulizia e manutenzione ordinaria della tua caldaia.' },
];

const Services = () => (
  <section id="servizi" aria-labelledby="services-title">
    <div className="container">
      <h2 id="services-title">I Nostri Servizi</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.title} className="service-card">
            <div className="icon" aria-hidden="true">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="chi-siamo" aria-labelledby="about-title">
    <div className="container">
      <h2 id="about-title">Professionisti al Vostro Servizio</h2>
      <div className="about-content">
        <img src="https://as2.ftcdn.net/v2/jpg/02/76/95/92/1000_F_276959273_b0eZg90qO24aQv2AyIZw4q7n3M73A7tW.jpg" alt="Idraulico professionista che ripara un WC in un bagno moderno" />
        <div className="about-text">
          <h3>La tua tranquillità è la nostra priorità.</h3>
          <p>
            Con anni di esperienza nel settore, offriamo un servizio idraulico completo a Mandello del Lario e dintorni.
            La nostra missione è risolvere ogni problema con la massima efficienza, professionalità e trasparenza, garantendo interventi duraturi e di alta qualità.
          </p>
          <p>
            Utilizziamo solo materiali certificati e le migliori tecnologie per assicurarti un servizio impeccabile, dalla piccola riparazione alla realizzazione di impianti complessi.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const zones = [
  'Mandello Centro',
  'Rongio',
  'Molina',
  'Olcio',
  'Somana',
  'Maggiana',
  'Crebbio',
  'Luzzeno',
  'Mandello Basso',
];

const InterventionZones = () => (
  <section id="zone" aria-labelledby="zones-title">
    <div className="container">
      <h2 id="zones-title">Zone di Intervento a Mandello del Lario</h2>
      <div className="zones-content">
        <div className="zones-list-container">
          <p>Operiamo con interventi rapidi in tutte le frazioni di Mandello del Lario. Ecco le principali zone coperte dal nostro servizio di idraulico:</p>
          <ul className="zones-list">
            {zones.map(zone => (
              <li key={zone}>{zone}</li>
            ))}
          </ul>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22223.11116631482!2d9.30138407481267!3d45.91897914582844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478418041c3a6461%3A0x4028bb274ca2250!2s23826%20Mandello%20del%20Lario%2C%20Province%20of%20Lecco%2C%20Italy!5e0!3m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa zone di intervento a Mandello del Lario"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);


const testimonials = [
  {
    quote: "Servizio rapidissimo e risolutivo! Avevo una perdita in bagno e sono intervenuti in meno di un'ora. Professionali e onesti. Consigliatissimi!",
    author: "Maria Rossi",
    location: "Mandello Centro"
  },
  {
    quote: "Finalmente ho risolto il problema dello scarico lento in cucina. L'idraulico è stato molto competente e mi ha anche dato ottimi consigli per la manutenzione. Prezzi giusti.",
    author: "Paolo Bianchi",
    location: "Olcio"
  },
  {
    quote: "Ho chiamato per la manutenzione annuale della caldaia. Puntuali, precisi e molto puliti nel lavoro. Mi affiderò sicuramente a loro anche in futuro.",
    author: "Giulia Colombo",
    location: "Maggiana"
  }
];

const Testimonials = () => (
  <section id="testimonianze" aria-labelledby="testimonials-title">
    <div className="container">
      <h2 id="testimonials-title">Cosa Dicono di Noi</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-author">{testimonial.author}, <span>{testimonial.location}</span></p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const BlogCard: React.FC<{ post: BlogPostType; onSelectPost: (slug: string) => void }> = ({ post, onSelectPost }) => (
  <div className="blog-card">
    <img src={post.image} alt={post.alt} className="blog-card-image" />
    <div className="blog-card-content">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <button onClick={() => onSelectPost(post.slug)} className="btn">Leggi di più</button>
    </div>
  </div>
);

const BlogPreview: React.FC<{ onSelectPost: (slug: string) => void }> = ({ onSelectPost }) => (
  <section id="blog" aria-labelledby="blog-title">
    <div className="container">
      <h2 id="blog-title">Dal Nostro Blog</h2>
      <div className="blog-grid">
        {blogPosts.slice(0, 3).map(post => (
          <BlogCard key={post.slug} post={post} onSelectPost={onSelectPost} />
        ))}
      </div>
    </div>
  </section>
);

const BlogPostPage: React.FC<{ post: BlogPostType; onGoHome: () => void }> = ({ post, onGoHome }) => (
  <main>
    <article className="blog-post-page">
      <div className="container">
        <header className="blog-post-header">
          <h1>{post.title}</h1>
        </header>
        <img src={post.image} alt={post.alt} className="blog-post-image" />
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <button onClick={onGoHome} className="btn">Torna alla Home</button>
      </div>
    </article>
  </main>
);

const Contact = ({ prefilledMessage, onPrivacyClick }) => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    if (prefilledMessage || prefilledMessage === '') {
      setFormState(prevState => ({ ...prevState, message: prefilledMessage }));
    }
  }, [prefilledMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!consent) {
      alert('Per favore, accetta la nostra politica sulla privacy per continuare.');
      return;
    }

    setStatus('sending');

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formState.name,
                email: formState.email,
                message: formState.message,
            }),
        });
        
        if (!response.ok) {
            // Try to get error details from the body, but handle cases where it's not JSON
            const contentType = response.headers.get("content-type");
            let errorMessage = 'Si è verificato un errore nel server.';
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const errorData = await response.json();
                errorMessage = errorData.error || errorMessage;
            } else {
                const errorText = await response.text();
                console.error("Server returned non-JSON error:", errorText);
                errorMessage = 'Il server ha risposto con un errore. Controlla i log della funzione per i dettagli.';
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log('SUCCESS!', data.message);
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setConsent(false);
    } catch (err) {
        console.log('FAILED...', err);
        setStatus('error');
    }
  };

  return (
    <section id="contatti" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-header">
          <h2 id="contact-title">Contattaci per Riparazioni Idrauliche</h2>
          <p>Richiedi un preventivo gratuito o informazioni per il tuo intervento a Mandello del Lario. Compila il modulo o chiamaci.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required value={formState.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={formState.email} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio</label>
            <textarea id="message" name="message" rows={6} placeholder="Descrivi il tuo problema..." required value={formState.message} onChange={handleInputChange}></textarea>
          </div>
          <div className="form-group-consent">
            <input type="checkbox" id="privacy-consent" name="privacy-consent" checked={consent} onChange={() => setConsent(!consent)} required />
            <label htmlFor="privacy-consent">
              Ho letto l'<a href="#" onClick={(e) => { e.preventDefault(); onPrivacyClick(); }}>informativa privacy</a> e acconsento al trattamento dei miei dati personali.
            </label>
          </div>
          <button type="submit" className="btn" disabled={!consent || status === 'sending'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            {status === 'sending' ? 'Invio in corso...' : 'Invia Richiesta'}
          </button>
          
          {status === 'success' && (
            <p className="form-status success">Messaggio inviato con successo! Ti risponderemo al più presto.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Si è verificato un errore. Riprova più tardi o contattaci telefonicamente.</p>
          )}
        </form>

        <div className="contact-alternative">
          <h3>Preferisci parlare con noi?</h3>
          <p>Siamo disponibili 24/7 per emergenze.</p>
          <a href="tel:+391234567890" className="phone-link" aria-label="Chiama il numero +39 123 456 7890">
            <span role="img" aria-hidden="true">📞</span> +39 123 456 7890
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavClick, onSitiAmiciClick }) => (
  <footer className="footer" aria-label="Piè di pagina">
    <div className="container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Idraulico Mandello Del Lario</h3>
          <p>Il tuo idraulico di fiducia per interventi a Mandello del Lario. Pronto intervento 24 ore su 24, 7 giorni su 7 per ogni emergenza.</p>
          <p><strong>Sito Web:</strong> idraulicomandellodelario.site</p>
        </div>
        <div className="footer-column">
          <h3>Contatti</h3>
          <p><a href="tel:+391234567890">+391234567890</a></p>
          <p><a href="mailto:info@idraulicomandello.it">info@idraulicomandello.it</a></p>
          <p>Via Fittizia 123, Mandello del Lario (LC)</p>
        </div>
        <div className="footer-column">
          <h3>Link Utili</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => onNavClick(e, true)}>Home</a></li>
            <li><a href="#servizi" onClick={onNavClick}>Servizi</a></li>
            <li><a href="#zone" onClick={onNavClick}>Zone</a></li>
            <li><a href="#testimonianze" onClick={onNavClick}>Testimonianze</a></li>
            <li><a href="#blog" onClick={onNavClick}>Blog</a></li>
            <li><a href="#contatti" onClick={onNavClick}>Contatti</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onSitiAmiciClick(); }}>Siti Amici</a></li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2025 Idraulico Mandello Del Lario. Tutti i diritti riservati.</p>
      </div>
    </div>
  </footer>
);

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Chiudi finestra">&times;</button>
        <h2 id="privacy-policy-title">Informativa sulla Privacy</h2>
        <p>Questa informativa descrive quali dati personali raccogliamo e come li trattiamo, in conformità con il Regolamento (UE) 2016/679 (GDPR).</p>
        
        <h3>Titolare del Trattamento dei Dati</h3>
        <p>Idraulico Mandello del Lario<br/>
        Email del Titolare: info@idraulicomandellodellario.site<br/>
        <strong>Nota:</strong> Questo sito è gestito per conto di un professionista idraulico. L'identità del titolare effettivo verrà comunicata in fase di contatto diretto.</p>
        
        <h3>Tipi di Dati Raccolti</h3>
        <p>Fra i Dati Personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono: nome, email e dati di utilizzo (raccolti tramite cookie tecnici).</p>
        
        <h3>Finalità del Trattamento dei Dati Raccolti</h3>
        <p>I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri servizi, così come per le seguenti finalità: Contattare l'Utente. I dati forniti tramite il modulo di contatto (nome, email, messaggio) verranno utilizzati esclusivamente per rispondere alla richiesta inviata.</p>

        <h3>Modalità e luogo del trattamento dei Dati raccolti</h3>
        <p>Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.</p>

        <h3>Periodo di conservazione</h3>
        <p>I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. Pertanto, i dati raccolti per finalità riconducibili all'esecuzione di un preventivo o di un servizio saranno trattenuti sino a quando sia completata tale esecuzione.</p>

        <h3>Diritti dell’Utente</h3>
        <p>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l’Utente ha il diritto di: revocare il consenso in ogni momento, opporsi al trattamento dei propri Dati, accedere ai propri Dati, verificare e chiedere la rettificazione, ottenere la limitazione del trattamento, ottenere la cancellazione o rimozione dei propri Dati Personali, ricevere i propri Dati o farli trasferire ad altro titolare.</p>
        
        <h3>Cookie Policy</h3>
        <p>Questo sito utilizza Cookie. I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Questo sito utilizza unicamente cookie tecnici, essenziali per il corretto funzionamento del sito e per salvare le preferenze dell'utente (come il consenso ai cookie stessi).</p>
      </div>
    </div>
  );
};

const SitiAmiciModal: React.FC<{ isOpen: boolean; onClose: () => void; sites: PartnerSite[] }> = ({ isOpen, onClose, sites }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="siti-amici-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Chiudi finestra">&times;</button>
        <h2 id="siti-amici-title">I Nostri Siti Partner</h2>
        <p>Scopri gli altri nostri siti tematici disponibili per il noleggio, dedicati a professionisti locali.</p>
        <div className="siti-amici-list">
          {sites.map(site => (
            <article key={site.url} className="siti-amici-card">
              <h3>{site.title}</h3>
              <p>{site.description}</p>
              <a href={site.url} className="btn" target="_blank" rel="noopener noreferrer">Visita il Sito</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const CookieBanner = ({ onAccept, onPrivacyClick }) => (
  <div className="cookie-banner" role="region" aria-label="Informativa sui cookie">
    <p>
      Questo sito utilizza cookie tecnici per garantire il suo corretto funzionamento. Per maggiori informazioni, consulta la nostra <a href="#" onClick={(e) => { e.preventDefault(); onPrivacyClick(); }}>Privacy Policy</a>.
    </p>
    <button className="btn" onClick={onAccept}>Accetto</button>
  </div>
);


function App() {
  const [prefilledMessage, setPrefilledMessage] = React.useState('');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = React.useState(false);
  const [isSitiAmiciModalOpen, setIsSitiAmiciModalOpen] = React.useState(false);
  const [showCookieBanner, setShowCookieBanner] = React.useState(false);
  const [activePostSlug, setActivePostSlug] = React.useState<string | null>(null);
  const [activeSection, setActiveSection] = React.useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  // --- FIX: Refs to prevent scroll handler during programmatic navigation ---
  const isNavigatingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie_consent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen || isPrivacyModalOpen || isSitiAmiciModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen, isPrivacyModalOpen, isSitiAmiciModalOpen]);
  
  React.useEffect(() => {
    if (activePostSlug) {
      setActiveSection('blog');
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    if (sections.length === 0) return;

    const handleScroll = () => {
      // --- FIX: Prevent scroll handler from running during programmatic scroll ---
      if (isNavigatingRef.current) {
        return;
      }
      
      const middleOfViewport = window.innerHeight / 2;
      let newActiveSection = '';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= middleOfViewport) {
          newActiveSection = section.id;
        } else {
          break;
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
          const lastSection = sections[sections.length - 1];
          if (lastSection) {
              newActiveSection = lastSection.id;
          }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activePostSlug]);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookie_consent', 'true');
  };
  
  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  const openSitiAmiciModal = () => setIsSitiAmiciModalOpen(true);
  const closeSitiAmiciModal = () => setIsSitiAmiciModalOpen(false);
  
  const handleSelectPost = (slug: string) => {
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      setActivePostSlug(slug);
      document.title = `${post.title} | Idraulico Mandello Del Lario`;
      window.scrollTo(0, 0);
    }
  };

  const handleGoHome = () => {
    setActivePostSlug(null);
    document.title = 'Idraulico Mandello Del Lario';
  };

  const handleInternalLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, isLogo = false) => {
    event.preventDefault();
    const targetHref = event.currentTarget.getAttribute('href');
    
    if (!targetHref) return;

    const isTargetingSection = targetHref.startsWith('#');

    if (isTargetingSection) {
      setActiveSection(targetHref.substring(1));
    } else if (isLogo) {
      setActiveSection('');
    }

    const navigateToSection = () => {
      const targetElement = isTargetingSection ? document.querySelector(targetHref) : null;
      
      if (targetElement) {
        isNavigatingRef.current = true;
        targetElement.scrollIntoView({ behavior: 'smooth' });

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = window.setTimeout(() => {
          isNavigatingRef.current = false;
        }, 800); // Duration should be enough for smooth scroll to finish
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    if (activePostSlug) {
      handleGoHome();
      setTimeout(navigateToSection, 100);
    } else {
      navigateToSection();
    }
  };
  
  const createMobileClickHandler = (handler) => (event) => {
      handler(event);
      setIsMobileMenuOpen(false);
  };

  const handleAffiliateClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    handleInternalLinkClick(event);
    setPrefilledMessage("Sono un idraulico e sarei interessato a noleggiare questo sito web. Vorrei ricevere maggiori informazioni.");
  };

  const handleReferralClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    handleInternalLinkClick(event);
    setPrefilledMessage("Conosco un idraulico che potrebbe essere interessato a questo sito. Vorrei mettervi in contatto.");
  };

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    handleInternalLinkClick(event);
    setPrefilledMessage('');
  };

  const activePost = blogPosts.find(p => p.slug === activePostSlug);
  
  if (activePost) {
    return (
      <>
        <div className="sticky-top-container">
          <AffiliateBanner 
            onAffiliateClick={handleAffiliateClick} 
            onReferralClick={handleReferralClick}
          />
          <Header 
            onNavClick={handleInternalLinkClick} 
            onContactClick={handleContactClick} 
            activeSection={activeSection}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <MobileMenu
              isOpen={isMobileMenuOpen}
              onNavClick={createMobileClickHandler(handleInternalLinkClick)}
              onContactClick={createMobileClickHandler(handleContactClick)}
              activeSection={activeSection}
          />
        </div>
        <BlogPostPage post={activePost} onGoHome={handleGoHome} />
        <Footer onNavClick={handleInternalLinkClick} onSitiAmiciClick={openSitiAmiciModal} />
        <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
        <SitiAmiciModal isOpen={isSitiAmiciModalOpen} onClose={closeSitiAmiciModal} sites={partnerSites} />
      </>
    );
  }
  
  return (
    <>
      <div className="sticky-top-container">
        <AffiliateBanner 
          onAffiliateClick={handleAffiliateClick} 
          onReferralClick={handleReferralClick}
        />
        <Header 
          onNavClick={handleInternalLinkClick} 
          onContactClick={handleContactClick} 
          activeSection={activeSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <MobileMenu
            isOpen={isMobileMenuOpen}
            onNavClick={createMobileClickHandler(handleInternalLinkClick)}
            onContactClick={createMobileClickHandler(handleContactClick)}
            activeSection={activeSection}
        />
      </div>
      <main>
        <Hero onContactClick={handleContactClick} />
        <Services />
        <About />
        <InterventionZones />
        <Testimonials />
        <BlogPreview onSelectPost={handleSelectPost} />
        <Contact prefilledMessage={prefilledMessage} onPrivacyClick={openPrivacyModal} />
      </main>
      <Footer onNavClick={handleInternalLinkClick} onSitiAmiciClick={openSitiAmiciModal} />

      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
      <SitiAmiciModal isOpen={isSitiAmiciModalOpen} onClose={closeSitiAmiciModal} sites={partnerSites} />
      {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} onPrivacyClick={openPrivacyModal} />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);