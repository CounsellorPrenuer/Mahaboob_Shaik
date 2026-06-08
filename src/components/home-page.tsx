"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  AtSign,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  GraduationCap,
  Headset,
  Link2,
  Mail,
  MapPin,
  Phone,
  ScrollText,
  Stethoscope,
  Brain,
} from "lucide-react";

type Service = {
  _key: string;
  title: string;
  description: string;
  audience: string;
  mode: string;
};

type PackageItem = {
  _key: string;
  name: string;
  category: string;
  subtitle: string;
  priceLabel: string;
  duration: string;
  isPopular?: boolean;
  features: string[];
};

type AddOnItem = {
  _key: string;
  name: string;
  priceLabel: string;
  description: string;
};

type Testimonial = {
  _key: string;
  title: string;
  quote: string;
  source: string;
};

type GalleryItem = {
  _key: string;
  title: string;
  image?: {
    asset?: {
      url?: string;
    };
  };
};

export type SiteContent = {
  brandName: string;
  tagline: string;
  shortAbout: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  founderImage?: {
    asset?: {
      url?: string;
    };
  };
  logoImage?: {
    asset?: {
      url?: string;
    };
  };
  founder: {
    name: string;
    credentials: string;
    roleLine: string;
    summary: string;
    highlights: string[];
  };
  services: Service[];
  packageSection: {
    eyebrow?: string;
    title: string;
    description: string;
    categories: string[];
    packages: PackageItem[];
    addOnTitle?: string;
    addOnDescription?: string;
    addOns: AddOnItem[];
  };
  testimonials: Testimonial[];
  contact: {
    title: string;
    intro: string;
    phone: string;
    email: string;
    location: string;
    appointmentNote: string;
    instagram?: string;
    linkedin?: string;
  };
  gallery: GalleryItem[];
};

function fixCmsText(text: string) {
  return text
    .replace(/(\d)\?(\d)/g, "$1–$2")
    .replace(/\?(\d)/g, "₹$1")
    .replace(/(\w)\?(\w)/g, "$1'$2");
}

const icons = [GraduationCap, Stethoscope, BriefcaseBusiness];
const addOnIcons = [
  ClipboardList,
  ScrollText,
  Headset,
  Phone,
  GraduationCap,
  Brain,
  GraduationCap,
];

function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function HomePage({ content }: { content: SiteContent }) {
  const groupedPackages = useMemo(
    () =>
      content.packageSection.categories.map((category) => ({
        category,
        items: content.packageSection.packages.filter(
          (item) => item.category === category,
        ),
      })),
    [content.packageSection.categories, content.packageSection.packages],
  );

  const [activeCategory, setActiveCategory] = useState(
    content.packageSection.categories[0] ?? "",
  );

  const activeGroup =
    groupedPackages.find((group) => group.category === activeCategory) ??
    groupedPackages[0] ?? { category: "", items: [] };

  return (
    <div className="bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,20,39,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[var(--line)] bg-white/90">
              <Image
                src={content.logoImage?.asset?.url ?? "/source-media/info-2.png"}
                alt={content.brandName}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <p className="font-[family:var(--font-display)] text-xl font-semibold text-white">
                Dr. Mahaboob Shaik
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                Educational & Career Counselling
              </p>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            {[
              ["Home", "#home"],
              ["About Founder", "#about-founder"],
              ["Services", "#services"],
              ["Packages", "#packages"],
              ["Gallery", "#gallery"],
              ["Testimonials", "#testimonials"],
              ["Contact Us", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(184,134,64,0.32),_transparent_32%),linear-gradient(135deg,_#071427_0%,_#0d2441_46%,_#173457_100%)]"
        >
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm uppercase tracking-[0.38em] text-[var(--gold)]">
                {content.tagline}
              </p>
              <h1 className="font-[family:var(--font-display)] text-5xl leading-tight font-semibold text-white md:text-7xl">
                {content.heroTitle}
              </h1>
              <p className="mt-5 text-xl text-[var(--mist)] md:text-2xl">
                {content.heroSubtitle}
              </p>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/74">
                {content.heroDescription}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-[var(--navy)] transition hover:brightness-105"
                >
                  {content.heroPrimaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/24 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {content.heroSecondaryCta}
                </a>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["45+", "Years of leadership"],
                  ["1,500+", "Bed teaching hospital experience"],
                  ["Global", "Mentorship and consultations"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/12 bg-white/7 p-5 backdrop-blur"
                  >
                    <p className="font-[family:var(--font-display)] text-3xl text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/72">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about-founder"
          className="bg-[linear-gradient(180deg,_#f6f3ee_0%,_#ffffff_100%)] py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--gold-soft)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-4 shadow-[0_24px_80px_rgba(13,36,65,0.1)]">
                <Image
                  src={content.founderImage?.asset?.url ?? "/source-media/info-1.jpeg"}
                  alt={content.founder.name}
                  width={650}
                  height={760}
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold-deep)]">
                About Founder
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-[var(--navy)] md:text-6xl">
                {content.founder.name}
              </h2>
              <p className="mt-3 text-lg text-[var(--navy)]/72">
                {content.founder.credentials}
              </p>
              <p className="mt-3 text-xl text-[var(--navy)]">{content.founder.roleLine}</p>
              <p className="mt-8 text-lg leading-8 text-[var(--navy)]/78">
                {content.founder.summary}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {content.founder.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-white p-5 shadow-sm"
                  >
                    <p className="text-base leading-7 text-[var(--navy)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold-deep)]">
                Services
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-[var(--navy)] md:text-6xl">
                Strategic guidance across education, medicine, and professional growth.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {content.services.map((service, index) => {
                const Icon = icons[index] ?? GraduationCap;
                return (
                  <article
                    key={service._key}
                    className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,_#ffffff_0%,_#f7f3ea_100%)] p-8 shadow-[0_18px_50px_rgba(13,36,65,0.08)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--navy)] text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-[family:var(--font-display)] text-2xl text-[var(--navy)]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--navy)]/76">
                      {service.description}
                    </p>
                    <dl className="mt-6 space-y-3 text-sm text-[var(--navy)]/72">
                      <div>
                        <dt className="font-semibold text-[var(--navy)]">Who it is for</dt>
                        <dd className="mt-1">{service.audience}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-[var(--navy)]">Mode</dt>
                        <dd className="mt-1">{service.mode}</dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="packages"
          className="bg-[linear-gradient(180deg,_#f6f3ee_0%,_#ffffff_100%)] py-24 text-[var(--navy)]"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold-deep)]">
                {content.packageSection.eyebrow ?? "Mentoria Packages"}
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-5xl text-[var(--navy)] md:text-7xl">
                {content.packageSection.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--navy)]/70 md:text-2xl">
                {content.packageSection.description}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {content.packageSection.categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-4 text-sm font-semibold uppercase transition md:min-w-52 ${
                    category === activeGroup.category
                      ? "bg-[var(--navy)] text-white shadow-[0_10px_30px_rgba(13,36,65,0.25)]"
                      : "border border-[var(--line)] bg-white text-[var(--navy)] shadow-[0_8px_24px_rgba(13,36,65,0.08)] hover:bg-[var(--gold-soft)]"
                  }`}
                >
                  {fixCmsText(category)}
                </button>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {activeGroup.items.map((item) => (
                <article
                  key={item._key}
                  className={`relative flex h-full flex-col rounded-[1.75rem] border ${
                    item.isPopular
                      ? "border-[var(--gold-deep)] bg-white shadow-[0_24px_70px_rgba(13,36,65,0.12)]"
                      : "border-[var(--line)] bg-white shadow-[0_18px_45px_rgba(13,36,65,0.08)]"
                  } p-8 text-[var(--navy)]`}
                >
                  {item.isPopular ? (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-lg bg-[var(--gold)] px-5 py-2 text-xl font-semibold text-[var(--navy)] shadow-[0_8px_24px_rgba(184,134,64,0.35)]">
                      Popular
                    </div>
                  ) : null}
                  <h3 className="mt-4 font-[family:var(--font-display)] text-3xl text-[var(--navy)] md:text-5xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-xl text-[var(--navy)]/65">{item.subtitle}</p>
                  <div className="mt-6">
                    <p className="font-[family:var(--font-display)] text-4xl text-[var(--gold-deep)] md:text-6xl">
                      {fixCmsText(item.priceLabel)}
                    </p>
                    {item.duration ? (
                      <p className="mt-3 text-lg text-[var(--navy)]/72">
                        {fixCmsText(item.duration)}
                      </p>
                    ) : null}
                  </div>
                  <div className="mt-8 pt-2">
                    <p className="text-2xl font-semibold text-[var(--navy)]/75">
                      Features:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-lg leading-8 text-[var(--navy)]/80"
                        >
                          <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-[var(--gold-deep)]" />
                          <span>{fixCmsText(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-4 text-xl font-semibold text-white transition hover:brightness-110"
                  >
                    Book Now
                  </a>
                </article>
              ))}
            </div>

            {content.packageSection.addOns.length ? (
              <div className="mt-20">
                <div className="mx-auto max-w-4xl text-center">
                  <h3 className="font-[family:var(--font-display)] text-4xl text-[var(--navy)] md:text-5xl">
                    {content.packageSection.addOnTitle ??
                      "Want To Customise Your Mentorship Plan?"}
                  </h3>
                  <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--navy)]/72 md:text-lg">
                    {content.packageSection.addOnDescription ??
                      "If you want to subscribe to specific services, you can choose one or more of the following."}
                  </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {content.packageSection.addOns.map((item, index) => {
                    const Icon = addOnIcons[index] ?? ClipboardList;

                    return (
                      <article
                        key={item._key}
                        className="grid overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white shadow-[0_18px_45px_rgba(13,36,65,0.08)] md:grid-cols-[160px_1fr]"
                      >
                        <div className="flex items-center justify-center bg-[linear-gradient(180deg,_#ffffff_0%,_#f7f3ea_100%)] p-8">
                          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-[var(--navy)] shadow-[0_10px_30px_rgba(13,36,65,0.12)]">
                            <Icon className="h-10 w-10" />
                          </div>
                        </div>
                        <div className="p-6 md:p-7">
                          <h4 className="font-[family:var(--font-display)] text-2xl leading-tight text-[var(--navy)]">
                            {item.name}
                          </h4>
                          <p className="mt-3 font-[family:var(--font-display)] text-2xl text-[var(--gold-deep)]">
                            {fixCmsText(item.priceLabel)}
                          </p>
                          <p className="mt-4 text-base leading-7 text-[var(--navy)]/78">
                            {fixCmsText(item.description)}
                          </p>
                          <a
                            href="#contact"
                            className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                          >
                            Buy Now
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section
          id="gallery"
          className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(184,134,64,0.18),_transparent_32%),linear-gradient(135deg,_#071427_0%,_#0d2441_46%,_#173457_100%)] py-24"
        >
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
                Gallery
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-white md:text-6xl">
                Academic milestones, publications, and professional sessions.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.gallery.map((item) => (
                <div
                  key={item._key}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/8"
                >
                  <div className="flex h-72 items-center justify-center bg-white/95 p-4">
                    <Image
                      src={item.image?.asset?.url ?? "/source-media/info-3.jpeg"}
                      alt={item.title}
                      width={420}
                      height={320}
                      className="max-h-full w-full object-contain"
                    />
                  </div>
                  <p className="px-4 py-4 text-sm text-white/86">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[var(--bg)] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold-deep)]">
                Testimonials
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl text-[var(--navy)] md:text-6xl">
                Social proof built over decades of teaching, surgery, and mentorship.
              </h2>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {content.testimonials.map((item) => (
                <article
                  key={item._key}
                  className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_18px_50px_rgba(13,36,65,0.08)]"
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                    {item.title}
                  </p>
                  <p className="mt-5 text-lg leading-8 text-[var(--navy)]/76">
                    “{item.quote}”
                  </p>
                  <p className="mt-6 font-semibold text-[var(--navy)]">{item.source}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[linear-gradient(160deg,_#09192f_0%,_#102845_48%,_#1a3858_100%)] py-24 text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--gold)]">
                Contact Us
              </p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl md:text-6xl">
                {content.contact.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/74">
                {content.contact.intro}
              </p>
              <div className="mt-10 space-y-5">
                {[
                  { icon: Phone, value: content.contact.phone },
                  { icon: Mail, value: content.contact.email },
                  { icon: MapPin, value: content.contact.location },
                ].map(({ icon: ItemIcon, value }) => {
                  return (
                    <div
                      key={value}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/7 p-5"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                        <ItemIcon className="h-5 w-5 text-[var(--gold)]" />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/52">
                          Contact detail
                        </p>
                        <p className="mt-1 text-base text-white/88">{value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                {content.contact.appointmentNote}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-[0_22px_80px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  ["Name", "Share your full name"],
                  ["Email", content.contact.email],
                  ["Phone", content.contact.phone],
                  ["Purpose", "Career clarity, mentorship, or consultation"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {title}
                    </p>
                    <p className="mt-3 text-base text-white/88">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Preferred next step
                </p>
                <p className="mt-3 text-base leading-7 text-white/86">
                  Reach out by WhatsApp, phone, or email to schedule a personalised
                  discussion. Share your goals and we will guide you toward the right next
                  step with clarity and structure.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${normalizePhone(content.contact.phone)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-4 text-sm font-semibold text-[var(--navy)] transition hover:brightness-105"
                >
                  Start on WhatsApp
                </a>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/16 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Email Directly
                </a>
              </div>
              <div className="mt-8 flex gap-4">
                {content.contact.instagram ? (
                  <a
                    href={content.contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 transition hover:bg-white/14"
                  >
                    <AtSign className="h-5 w-5" />
                  </a>
                ) : null}
                {content.contact.linkedin ? (
                  <a
                    href={content.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 transition hover:bg-white/14"
                  >
                    <Link2 className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
