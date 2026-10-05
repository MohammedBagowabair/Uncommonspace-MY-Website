import { useState } from 'react'
import { useI18n } from './i18n'
import { phone, wa, maps, tiktok, pitchWa, projects, asset } from './content'

function LangSwitch({ light = false }: { light?: boolean }) {
  const { lang, setLang, t } = useI18n()
  return (
    <div className={`flex gap-1 text-xs font-bold tracking-wide ${light ? 'rounded bg-linen/95 px-1 py-0.5' : ''}`}>
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`min-h-9 min-w-9 px-2 py-1 ${lang === l ? 'text-coral underline decoration-2 underline-offset-4' : 'text-ink/40 hover:text-ink'}`}>
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
      <header className="fixed inset-x-0 top-0 z-50 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 md:px-8 md:py-4">
          <a href="#top" className="font-serif text-xl italic text-linen sm:text-2xl">uncommonspace</a>
          <nav className="hidden gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-linen/80 lg:flex">
            {links.map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-linen">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch light />
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center text-linen lg:hidden"
              aria-label={open ? t('menu_close') : t('menu_open')} onClick={() => setOpen((v) => !v)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-linen/10 px-4 py-3 lg:hidden">
            {links.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block min-h-11 py-3 text-sm font-semibold uppercase tracking-wider text-linen">{t(`nav_${id}`)}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-[85vh] bg-ink text-linen sm:min-h-[92vh]">
        <img src={asset('images/hero.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:min-h-[92vh] sm:pb-16 sm:pt-32 md:px-8 md:pb-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-coral sm:text-xs sm:tracking-[0.3em]">{t('hero_issue')}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-[2.25rem] leading-[1.1] sm:mt-4 sm:text-5xl md:text-7xl lg:text-8xl">
            {t('hero_title')}
          </h1>
          <p className="mt-4 max-w-md text-base text-linen/75 sm:mt-6 sm:text-lg">{t('hero_sub')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a href={`https://wa.me/${wa}`} className="inline-flex min-h-12 items-center justify-center bg-coral px-6 py-3 text-sm font-bold text-white hover:bg-coral/90">{t('hero_cta')}</a>
            <a href="#work" className="inline-flex min-h-12 items-center justify-center border border-linen/40 px-6 py-3 text-sm font-semibold text-linen hover:bg-linen/10">{t('hero_cta2')}</a>
          </div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <img src={asset('images/about.jpg')} alt="" className="aspect-[3/4] w-full object-cover shadow-2xl md:-rotate-2" width={800} height={1000} />
          </div>
          <div className="md:col-span-7 md:pt-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('about_label')}</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">{t('about_title')}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:mt-6 sm:text-lg">{t('about_body')}</p>
            <p className="mt-6 border-l-4 border-coral pl-4 text-sm italic text-ink/60">{t('about_designer')}</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-clay-100/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('services_label')}</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">{t('services_title')}</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {[1,2,3,4].map((n) => (
              <article key={n} className="bg-linen p-6 shadow-sm sm:p-8">
                <span className="font-serif text-4xl italic text-clay-400">0{n}</span>
                <h3 className="mt-3 font-serif text-xl sm:text-2xl">{t(`svc${n}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t(`svc${n}_b`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('work_label')}</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">{t('work_title')}</h2>
              <p className="mt-3 max-w-md text-sm text-ink/50">{t('work_note')}</p>
            </div>
            <p className="hidden text-sm font-semibold text-clay-600 md:block">{t('work_scroll')}</p>
          </div>
        </div>
        {/* Mobile: stack · Desktop: horizontal snap scroll */}
        <div className="mt-8 grid grid-cols-1 gap-6 px-4 sm:mt-10 md:hidden">
          {projects.map((p) => (
            <figure key={p.titleEN}>
              <img src={asset(p.img)} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" width={600} height={800} />
              <figcaption className="mt-3">
                <p className="font-serif text-xl">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-xs uppercase tracking-wider text-coral">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="horizontal-scroll mt-10 hidden gap-5 overflow-x-auto px-4 pb-4 md:flex md:px-8">
          {projects.map((p) => (
            <figure key={`d-${p.titleEN}`} className="w-[360px] flex-shrink-0 snap-start">
              <img src={asset(p.img)} alt="" className="aspect-[3/4] w-full object-cover" loading="lazy" width={600} height={800} />
              <figcaption className="mt-3">
                <p className="font-serif text-xl">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                <p className="text-xs uppercase tracking-wider text-coral">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-ink py-14 text-linen sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('pull_label')}</p>
          {[1, 2, 3].map((n) => (
            <blockquote key={n} className="mt-8 border-t border-linen/15 pt-8 first:mt-6 sm:mt-10 sm:pt-10 first:sm:mt-8">
              <p className="font-serif text-xl leading-snug italic sm:text-2xl md:text-3xl">“{t(`pull${n}`)}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('process_label')}</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">{t('process_title')}</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 md:grid-cols-4">
          {[1,2,3,4].map((n) => (
            <div key={n}>
              <div className="mb-4 h-1 w-12 bg-coral" />
              <h3 className="font-serif text-xl">{t(`step${n}_t`)}</h3>
              <p className="mt-2 text-sm text-ink/60">{t(`step${n}_b`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-clay-200 bg-clay-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20 md:px-8 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">{t('contact_label')}</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">{t('contact_title')}</h2>
          <p className="mt-5 text-sm text-ink/60 sm:mt-6 sm:text-base">{t('contact_hours')}</p>
          <p className="mt-2 max-w-md text-ink/75">{t('contact_address')}</p>
          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
            <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center bg-ink px-5 py-2.5 text-sm font-bold text-linen">{t('contact_phone')}</a>
            <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center bg-coral px-5 py-2.5 text-sm font-bold text-white">{t('contact_wa')}</a>
            <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink/20 px-5 py-2.5 text-sm font-semibold">{t('contact_map')}</a>
            <a href={tiktok} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink/20 px-5 py-2.5 text-sm font-semibold">{t('contact_tt')}</a>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-4 py-10 text-center text-sm text-linen/60 md:px-8">
        <p className="mx-auto max-w-xl">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex min-h-11 items-center font-semibold text-coral hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-linen/30">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
