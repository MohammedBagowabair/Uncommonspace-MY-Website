import { useState } from 'react'
import { useI18n } from './i18n'
import { Reveal } from './Reveal'
import { phone, wa, maps, tiktok, pitchWa, projects, asset } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex gap-0.5 rounded-md bg-linen/95 px-1 py-0.5 text-xs font-bold tracking-wide shadow-sm">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`min-h-9 min-w-9 px-2 py-1 transition-all duration-300 ${lang === l ? 'text-coral underline decoration-2 underline-offset-4' : 'text-ink/35 hover:text-ink'}`}>
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  const [open, setOpen] = useState(false)
  const links = (['about','services','work','process','contact'] as const)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="glass-header fixed inset-x-0 top-0 z-50 border-b border-linen/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 md:px-8 md:py-3.5">
          <a href="#top" className="font-serif text-xl italic tracking-tight text-linen sm:text-2xl">uncommonspace</a>
          <nav className="hidden gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-linen/70 lg:flex">
            {links.map((id) => (
              <a key={id} href={`#${id}`} className="transition hover:text-linen">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center text-linen lg:hidden"
              aria-label={open ? t('menu_close') : t('menu_open')} onClick={() => setOpen((v) => !v)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-linen/10 bg-ink/95 px-4 py-3 lg:hidden">
            {links.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block min-h-11 py-3 text-sm font-semibold uppercase tracking-wider text-linen">{t(`nav_${id}`)}</a>
            ))}
          </div>
        )}
      </header>

      {/* Magazine cover hero */}
      <section id="top" className="relative min-h-[88vh] bg-ink text-linen sm:min-h-[94vh]">
        <div className="img-zoom absolute inset-0">
          <img src={asset('images/hero.jpg')} alt="" className="h-full w-full object-cover opacity-50" width={1600} height={1000} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[94vh] sm:pb-20 sm:pt-32 md:px-8 md:pb-28">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-coral">{t('hero_issue')}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-[2.5rem] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.75rem]">
              {t('hero_title')}
            </h1>
            <p className="mt-6 max-w-lg text-base text-linen/70 sm:text-lg">{t('hero_sub')}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-12 items-center justify-center bg-coral px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-coral/30 transition hover:-translate-y-0.5 hover:bg-coral/90">{t('hero_cta')}</a>
              <a href="#work" className="inline-flex min-h-12 items-center justify-center border border-linen/35 px-7 py-3.5 text-sm font-semibold text-linen transition hover:bg-linen/10">{t('hero_cta2')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5">
            <div className="img-zoom shadow-2xl md:-rotate-1">
              <img src={asset('images/about.jpg')} alt="" className="aspect-[3/4] w-full object-cover" width={800} height={1000} />
            </div>
          </Reveal>
          <Reveal className="md:col-span-7 md:pt-16" delay={100}>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">{t('about_label')}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{t('about_title')}</h2>
            <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">{t('about_body')}</p>
            <p className="mt-8 border-l-4 border-coral pl-5 text-sm italic leading-relaxed text-ink/55">{t('about_designer')}</p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-clay-100/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">{t('services_label')}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{t('services_title')}</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[1,2,3,4].map((n) => (
              <Reveal key={n} delay={n * 55}>
                <article className="h-full bg-linen/90 p-7 shadow-sm ring-1 ring-clay-200/60 transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  <span className="font-serif text-5xl italic text-clay-300">0{n}</span>
                  <h3 className="mt-3 font-serif text-2xl">{t(`svc${n}_t`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{t(`svc${n}_b`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">{t('work_label')}</p>
                <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{t('work_title')}</h2>
                <p className="mt-3 max-w-md text-sm text-ink/45">{t('work_note')}</p>
              </div>
              <p className="hidden text-sm font-semibold tracking-wide text-clay-600 md:block">{t('work_scroll')}</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-7 px-4 md:hidden">
          {projects.map((p) => (
            <figure key={p.titleEN} className="img-zoom">
              <img src={asset(p.img)} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" width={600} height={800} />
              <figcaption className="mt-3">
                <p className="font-serif text-xl">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-coral">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="horizontal-scroll mt-12 hidden gap-6 overflow-x-auto px-4 pb-4 md:flex md:px-8">
          {projects.map((p) => (
            <figure key={`d-${p.titleEN}`} className="img-zoom group w-[340px] flex-shrink-0 snap-start lg:w-[380px]">
              <div className="relative">
                <img src={asset(p.img)} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" width={600} height={800} />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                  <div>
                    <p className="font-serif text-xl text-linen">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-coral">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 group-hover:opacity-40">
                <p className="font-serif text-xl">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-coral">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-linen sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">{t('pull_label')}</p>
          </Reveal>
          {[1, 2, 3].map((n) => (
            <Reveal key={n} delay={n * 80}>
              <blockquote className="mt-10 border-t border-linen/12 pt-10 first:mt-8">
                <p className="font-serif text-2xl leading-snug italic tracking-tight sm:text-3xl md:text-[2.15rem]">“{t(`pull${n}`)}”</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">{t('process_label')}</p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{t('process_title')}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {[1,2,3,4].map((n) => (
            <Reveal key={n} delay={n * 50}>
              <div>
                <div className="mb-5 h-0.5 w-14 bg-coral" />
                <h3 className="font-serif text-xl">{t(`step${n}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{t(`step${n}_b`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-clay-200 bg-clay-50/80">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">{t('contact_label')}</p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{t('contact_title')}</h2>
            <p className="mt-6 text-sm text-ink/55 sm:text-base">{t('contact_hours')}</p>
            <p className="mt-2 max-w-md text-ink/70">{t('contact_address')}</p>
            <div className="mt-10 flex flex-wrap gap-2.5">
              <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center bg-ink px-5 py-2.5 text-sm font-bold text-linen transition hover:bg-ink/90">{t('contact_phone')}</a>
              <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center bg-coral px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coral/90">{t('contact_wa')}</a>
              <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white">{t('contact_map')}</a>
              <a href={tiktok} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink/20 px-5 py-2.5 text-sm font-semibold transition hover:bg-white">{t('contact_tt')}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink px-4 py-10 text-center text-sm text-linen/55 md:px-8">
        <p className="mx-auto max-w-xl">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex min-h-11 items-center font-semibold text-coral hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-linen/25">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
