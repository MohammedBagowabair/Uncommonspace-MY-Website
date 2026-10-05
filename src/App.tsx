import { useI18n } from './i18n'
import { phone, wa, maps, tiktok, pitchWa, projects } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex gap-1 text-xs font-bold tracking-wide">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`px-2 py-1 ${lang === l ? 'text-coral underline decoration-2 underline-offset-4' : 'text-ink/40 hover:text-ink'}`}>
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#top" className="font-serif text-2xl italic text-white">uncommonspace</a>
          <nav className="hidden gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 md:flex">
            {(['about','services','work','process','contact'] as const).map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-white">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3 mix-blend-normal">
            <div className="rounded bg-linen/95 px-1 py-0.5"><LangSwitch /></div>
          </div>
        </div>
      </header>

      {/* Magazine cover hero */}
      <section id="top" className="relative min-h-[92vh] bg-ink text-linen">
        <img
          src="https://images.unsplash.com/photo-1615529182904-14819c35cb3b?w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 md:px-8 md:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coral">{t('hero_issue')}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            {t('hero_title')}
          </h1>
          <p className="mt-6 max-w-md text-lg text-linen/75">{t('hero_sub')}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`https://wa.me/${wa}`} className="bg-coral px-6 py-3 text-sm font-bold text-white hover:bg-coral/90">{t('hero_cta')}</a>
            <a href="#work" className="border border-linen/40 px-6 py-3 text-sm font-semibold text-linen hover:bg-linen/10">{t('hero_cta2')}</a>
          </div>
        </div>
      </section>

      {/* About with overlapping image */}
      <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1618221381711-42ca8ab6f503?w=800&q=80"
              alt=""
              className="aspect-[3/4] w-full object-cover shadow-2xl md:-rotate-2"
            />
          </div>
          <div className="md:col-span-7 md:pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('about_label')}</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">{t('about_title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{t('about_body')}</p>
            <p className="mt-6 border-l-4 border-coral pl-4 text-sm italic text-ink/60">{t('about_designer')}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-clay-100/60">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('services_label')}</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{t('services_title')}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[1,2,3,4].map((n) => (
              <article key={n} className="bg-linen p-8 shadow-sm">
                <span className="font-serif text-4xl italic text-clay-400">0{n}</span>
                <h3 className="mt-3 font-serif text-2xl">{t(`svc${n}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(`svc${n}_b`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal scroll projects */}
      <section id="work" className="py-20 md:py-28">
        <div className="mx-auto flex max-w-6xl items-end justify-between px-4 md:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('work_label')}</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">{t('work_title')}</h2>
            <p className="mt-3 max-w-md text-sm text-ink/50">{t('work_note')}</p>
          </div>
          <p className="hidden text-sm font-semibold text-clay-600 md:block">{t('work_scroll')}</p>
        </div>
        <div className="horizontal-scroll mt-10 flex gap-5 overflow-x-auto px-4 pb-4 md:px-8">
          {projects.map((p) => (
            <figure key={p.titleEN} className="w-[280px] flex-shrink-0 md:w-[360px]">
              <img src={p.img} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" />
              <figcaption className="mt-3">
                <p className="font-serif text-xl">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-xs uppercase tracking-wider text-coral">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pull quotes */}
      <section className="bg-ink py-20 text-linen md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('pull_label')}</p>
          {[1, 2, 3].map((n) => (
            <blockquote key={n} className="mt-10 border-t border-linen/15 pt-10 first:mt-8">
              <p className="font-serif text-2xl leading-snug italic md:text-3xl">“{t(`pull${n}`)}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('process_label')}</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">{t('process_title')}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {[1,2,3,4].map((n) => (
            <div key={n}>
              <div className="mb-4 h-1 w-12 bg-coral" />
              <h3 className="font-serif text-xl">{t(`step${n}_t`)}</h3>
              <p className="mt-2 text-sm text-ink/60">{t(`step${n}_b`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-clay-200 bg-clay-50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('contact_label')}</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">{t('contact_title')}</h2>
          <p className="mt-6 text-ink/60">{t('contact_hours')}</p>
          <p className="mt-2 max-w-md text-ink/75">{t('contact_address')}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${phone}`} className="bg-ink px-5 py-2.5 text-sm font-bold text-linen">{t('contact_phone')}</a>
            <a href={`https://wa.me/${wa}`} className="bg-coral px-5 py-2.5 text-sm font-bold text-white">{t('contact_wa')}</a>
            <a href={maps} target="_blank" rel="noreferrer" className="border border-ink/20 px-5 py-2.5 text-sm font-semibold">{t('contact_map')}</a>
            <a href={tiktok} target="_blank" rel="noreferrer" className="border border-ink/20 px-5 py-2.5 text-sm font-semibold">{t('contact_tt')}</a>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-4 py-10 text-center text-sm text-linen/60 md:px-8">
        <p>{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-block font-semibold text-coral hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-linen/30">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
