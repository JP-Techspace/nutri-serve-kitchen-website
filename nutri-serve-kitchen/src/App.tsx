
import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChefHat,
  ChevronDown,
  Clock3,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Star,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { siteConfig } from "./siteConfig";

/* =========================================================
  SERVICES
========================================================= */

const services = [
  {
    icon: Heart,
    title: "Wellness Meals",
    text: "Wholesome meals thoughtfully prepared for health, recovery and everyday nourishment.",
  },
  {
    icon: ChefHat,
    title: "House-Call Chef",
    text: "A personal chef experience brought to your home for relaxed, nourishing meals.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meal Prep",
    text: "Convenient, balanced meal prep for busy individuals, families and working teams.",
  },
  {
    icon: CalendarDays,
    title: "Event Catering",
    text: "Fresh catering for corporate events, birthdays, family gatherings, chama days and more.",
  },
];

/* =========================================================
   WELLNESS NEEDS
========================================================= */

const wellnessNeeds = [
  "Convalescent meals to help regain strength",
  "Gentle, easy-to-digest meals for patients",
  "Supportive meals for those undergoing treatment",
  "Low-salt, low-sugar and other special diets as advised",
];

/* =========================================================
   CATERING EVENTS
========================================================= */

const cateringEvents = [
  "Corporate Events",
  "Birthdays",
  "Chamas",
  "Hiking Groups",
  "Family & Social Gatherings",
  "And more",
];

/* =========================================================
   NUTRI-SERVE MEDIA GALLERY
========================================================= */

const mediaItems = [
  {
    type: "image",
    src: "/media/catering-1.jpg.jpeg",
    title: "Beautifully Prepared Catering",
    description:
      "Freshly prepared food presented with care for memorable gatherings and special occasions.",
  },
  {
    type: "image",
    src: "/media/catering-2.jpg.jpeg",
    title: "Catering Made With Care",
    description:
      "Wholesome meals prepared to bring people together around good food.",
  },
  {
    type: "image",
    src: "/media/catering-3.jpg.jpeg",
    title: "Fresh Food for Every Occasion",
    description:
      "Thoughtfully prepared dishes suitable for celebrations, gatherings and events.",
  },
  {
    type: "image",
    src: "/media/catering-4.jpg.jpeg",
    title: "A Tasteful Presentation",
    description:
      "Good food deserves a beautiful presentation — fresh, inviting and ready to serve.",
  },
  {
    type: "image",
    src: "/media/catering-5.jpg.jpeg",
    title: "Catering for Groups",
    description:
      "Nutri-Serve brings nourishing and delicious meals to groups of all sizes.",
  },
  {
    type: "video",
    src: "/media/catering-video.mp4.mp4",
    title: "Behind the Catering Experience",
    description:
      "Take a look behind the scenes at the Nutri-Serve catering experience.",
  },
  {
    type: "image",
    src: "/media/dessert.jpg.jpeg",
    title: "Sweet Finishes",
    description:
      "Delicious desserts prepared to add the perfect finishing touch to your meal.",
  },
  {
    type: "image",
    src: "/media/dopefruitcuts-2.jpg.jpeg",
    title: "Fresh Fruit Cuts",
    description:
      "Freshly prepared fruit cuts for a colourful, refreshing and nutritious option.",
  },
  {
    type: "image",
    src: "/media/dopefruitcuts.jpg.jpeg",
    title: "Fresh & Colourful",
    description:
      "Naturally colourful fruit prepared fresh for healthy eating and beautiful presentation.",
  },
  {
    type: "image",
    src: "/media/fruitpresentation.jpg.jpeg",
    title: "Fruit Presentation",
    description:
      "Fresh fruits beautifully arranged for a vibrant and nourishing experience.",
  },
  {
    type: "image",
    src: "/media/fruityyogh.jpg.jpeg",
    title: "Fruity Yoghurt",
    description:
      "A refreshing combination of creamy yoghurt and fresh fruit.",
  },
  {
    type: "image",
    src: "/media/homemeal.jpg.jpeg",
    title: "Wholesome Home Meals",
    description:
      "Comforting, balanced meals prepared with the warmth and care of homemade food.",
  },
  {
    type: "video",
    src: "/media/housecall-video.mp4.mp4",
    title: "House-Call Chef Experience",
    description:
      "A glimpse into Nutri-Serve's personalised house-call chef service.",
  },
  {
    type: "video",
    src: "/media/housecall-video2.mp4.mp4",
    title: "Cooking at Home",
    description:
      "See how we bring thoughtful food preparation directly to our clients' homes.",
  },
  {
    type: "image",
    src: "/media/lentil-bread.jpg.jpeg",
    title: "Lentil Bread",
    description:
      "A wholesome homemade-style option prepared with nutritious ingredients.",
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const service = form.get("service")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(
      `Nutri-Serve enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-forest-900">

      {/* ===================================================
          TOP BAR
      =================================================== */}

      <div className="bg-forest-900 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        Fresh • Balanced • Delicious • Thoughtfully Prepared
      </div>

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="sticky top-0 z-50 border-b border-forest-100/70 bg-cream/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* Logo */}

          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={closeMenu}
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-forest-700 text-white shadow-soft">
              <Leaf size={23} />
            </div>

            <div>
              <p className="font-display text-2xl font-bold leading-none text-forest-900">
                Nutri<span className="text-citrus">-Serve</span>
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-forest-600">
                Kitchen
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-7 md:flex">

            {[
              "Home",
              "Services",
              "About",
              "Gallery",
              "Catering",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-bold text-forest-800 transition hover:text-citrus"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-citrus px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-700"
            >
              Book a Meal
            </a>

          </nav>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-xl p-2 text-forest-900 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Navigation */}

        {menuOpen && (
          <nav className="border-t border-forest-100 bg-cream px-5 py-5 md:hidden">

            <div className="mx-auto flex max-w-7xl flex-col gap-2">

              {[
                "Home",
                "Services",
                "About",
                "Gallery",
                "Catering",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 font-bold text-forest-800 hover:bg-forest-50"
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-citrus px-4 py-3 text-center font-bold text-white"
              >
                Book a Meal
              </a>

            </div>

          </nav>
        )}

      </header>

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section id="home" className="relative">

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-20">

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-forest-700 shadow-sm">

                <Sparkles size={15} className="text-citrus" />

                Nourishment with intention

              </div>

              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-forest-900 sm:text-6xl lg:text-7xl">

                Good food.

                <span className="block text-citrus">
                  Personal care.
                </span>

                Thoughtfully prepared.

              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-forest-700 sm:text-xl">
                Nutri-Serve Kitchen creates wholesome wellness meals,
                personalised house-call chef experiences, convenient meal
                prep and exceptional catering — made with care from our
                kitchen to yours.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-900"
                >
                  Book Your Meal
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-200 bg-white px-7 py-3.5 font-bold text-forest-800 transition hover:border-forest-400"
                >
                  Explore Services
                  <ChevronDown size={18} />
                </a>

              </div>

              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">

                {[
                  ["01", "Wellness"],
                  ["02", "Meal Prep"],
                  ["03", "Catering"],
                ].map(([number, label]) => (

                  <div
                    key={number}
                    className="rounded-2xl border border-forest-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-xs font-black text-citrus">
                      {number}
                    </p>

                    <p className="mt-1 text-sm font-bold text-forest-800">
                      {label}
                    </p>
                  </div>

                ))}

              </div>

            </div>

            {/* Hero Image */}

            <div className="relative mx-auto w-full max-w-xl">

              <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-forest-200/70 blur-2xl" />

              <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-citrus/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-forest-100 shadow-soft">

                <img
                  src="/nutri-serve-banner.jpeg"
                  alt="Nutri-Serve Kitchen food and brand banner"
                  className="h-[520px] w-full object-cover object-top"
                />

              </div>

              <div className="absolute -bottom-5 -left-5 max-w-[230px] rounded-2xl bg-forest-800 p-4 text-white shadow-soft">

                <div className="mb-2 flex items-center gap-2">

                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-citrus"
                  />

                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-citrus"
                  />

                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-citrus"
                  />

                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-citrus"
                  />

                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-citrus"
                  />

                </div>

                <p className="text-sm font-bold">
                  Nourishing bodies, honouring our roots.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            INTRO STRIP
        ================================================= */}

        <section className="bg-forest-800">

          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-white sm:grid-cols-3 lg:px-8">

            {[
              [
                "Fresh ingredients",
                "Wholesome food prepared with care.",
              ],
              [
                "Flexible service",
                "Meals for homes, offices and events.",
              ],
              [
                "Health-minded",
                "Thoughtful options for different dietary needs.",
              ],
            ].map(([title, text]) => (

              <div key={title} className="flex gap-4">

                <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                  <Check size={18} className="text-citrus" />
                </div>

                <div>

                  <p className="font-bold">
                    {title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-forest-100">
                    {text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =================================================
            SERVICES
        ================================================= */}

        <section
          id="services"
          className="scroll-mt-24 px-5 py-20 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">

              <p className="font-black uppercase tracking-[0.2em] text-citrus">
                What we do
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold text-forest-900 sm:text-5xl">
                Food that fits your life
              </h2>

              <p className="mt-4 leading-7 text-forest-700">
                From everyday meals to special occasions, we bring together
                good nutrition, warm service and the comfort of homemade food.
              </p>

            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {services.map(({ icon: Icon, title, text }) => (

                <article
                  key={title}
                  className="group rounded-3xl border border-forest-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >

                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-50 text-forest-700 transition group-hover:bg-forest-800 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-forest-900">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-forest-700">
                    {text}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-citrus"
                  >
                    Enquire
                    <ArrowRight size={15} />
                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            WELLNESS
        ================================================= */}

        <section
          id="about"
          className="scroll-mt-24 bg-forest-50 px-5 py-20 lg:px-8"
        >

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="font-black uppercase tracking-[0.2em] text-citrus">
                Wellness meals
              </p>

              <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight text-forest-900 sm:text-5xl">
                Nourishment with a little more thought behind it.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-forest-700">
                Some seasons of life call for gentler, more intentional food.
                We prepare wholesome meals for people recovering, managing
                special dietary needs, or simply choosing to eat well.
              </p>

              <div className="mt-7 space-y-3">

                {wellnessNeeds.map((item) => (

                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >

                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-700 text-white">
                      <Check size={14} />
                    </span>

                    <p className="text-sm font-semibold leading-6 text-forest-800">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              <p className="mt-6 text-sm font-semibold italic text-forest-600">
                Special diets should follow guidance from your healthcare provider.
              </p>

            </div>

            <div className="relative">

              <div className="rounded-[2rem] bg-forest-800 p-3 shadow-soft">

                <div className="overflow-hidden rounded-[1.5rem] bg-white">

                  <img
                    src="/nutri-serve-banner.jpeg"
                    alt="Nutri-Serve Kitchen healthy meals"
                    className="h-[480px] w-full object-cover object-[50%_55%]"
                  />

                </div>

              </div>

              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-white p-5 shadow-soft sm:-right-6">

                <Leaf className="text-forest-700" />

                <p className="mt-2 font-display text-xl font-bold text-forest-900">
                  Good nutrition
                </p>

                <p className="text-sm text-forest-600">
                  for better living.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            DELIVERY / CHEF
        ================================================= */}

        <section className="px-5 py-20 lg:px-8">

          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">

            <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-forest-100 sm:p-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-citrus/10 text-citrus">
                <ChefHat />
              </div>

              <h2 className="mt-6 font-display text-3xl font-bold text-forest-900">
                House-call chef experience
              </h2>

              <p className="mt-4 leading-7 text-forest-700">
                Want a meal prepared in your own space? Book a personalised
                chef experience designed around your occasion, preferences and
                schedule.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "Personalised menus",
                  "Home service",
                  "Family meals",
                  "Special occasions",
                ].map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full bg-forest-50 px-3 py-2 text-xs font-bold text-forest-700"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

            <div className="rounded-[2rem] bg-citrus p-8 text-white shadow-soft sm:p-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Clock3 />
              </div>

              <h2 className="mt-6 font-display text-3xl font-bold">
                Home & office delivery
              </h2>

              <p className="mt-4 leading-7 text-white/90">
                Good food does not have to interrupt your day. Ask us about
                convenient meal delivery for your home, workplace or team.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-forest-900 transition hover:bg-forest-50"
              >
                Ask about delivery
                <ArrowRight size={17} />
              </a>

            </div>

          </div>

        </section>

        {/* =================================================
            GALLERY / OUR WORK
        ================================================= */}

        <section
          id="gallery"
          className="scroll-mt-24 bg-forest-50 px-5 py-20 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            {/* Gallery Heading */}

            <div className="mx-auto max-w-2xl text-center">

              <p className="font-black uppercase tracking-[0.2em] text-citrus">
                From our kitchen
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold text-forest-900 sm:text-5xl">
                See what we've been serving
              </h2>

              <p className="mt-4 leading-7 text-forest-700">
                Take a look at some of our meals, catering setups, fresh
                creations and behind-the-scenes moments from Nutri-Serve
                Kitchen.
              </p>

            </div>

            {/* Media Grid */}

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {mediaItems.map((item, index) => (

                <article
                  key={`${item.src}-${index}`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest-100 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >

                  {/* IMAGE */}

                  {item.type === "image" && (
                    <div className="aspect-[4/3] overflow-hidden bg-forest-100">

                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                    </div>
                  )}

                  {/* VIDEO */}

                  {item.type === "video" && (
                    <div className="aspect-[4/3] overflow-hidden bg-black">

                      <video
                        src={item.src}
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-cover"
                      />

                    </div>
                  )}

                  {/* MEDIA CAPTION */}

                  <div className="p-5">

                    <div className="mb-2 flex items-center gap-2">

                      <span className="rounded-full bg-forest-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-forest-700">
                        {item.type === "image" ? "Photo" : "Video"}
                      </span>

                    </div>

                    <h3 className="font-display text-xl font-bold text-forest-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-forest-700">
                      {item.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

            {/* Gallery CTA */}

            <div className="mt-12 text-center">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3.5 font-bold text-white transition hover:bg-forest-900"
              >
                Book Your Meal or Event
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </section>

        {/* =================================================
            CATERING
        ================================================= */}

        <section
          id="catering"
          className="scroll-mt-24 bg-forest-900 px-5 py-20 text-white lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">

              <div>

                <p className="font-black uppercase tracking-[0.2em] text-citrus">
                  Outside catering
                </p>

                <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold sm:text-5xl">
                  Bring the goodness to your gathering.
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-forest-100">
                  We cater for intimate and large gatherings with fresh,
                  balanced food that keeps your guests well-fed and happy.
                </p>

              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-citrus px-6 py-3.5 font-bold text-white transition hover:bg-orange-700"
              >
                Plan your event
                <ArrowRight size={18} />
              </a>

            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {cateringEvents.map((event) => (

                <div
                  key={event}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >

                  <span className="grid h-8 w-8 place-items-center rounded-full bg-citrus text-white">
                    <Check size={16} />
                  </span>

                  <span className="font-semibold">
                    {event}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">

              {[
                "Fresh & wholesome",
                "Homemade with love",
                "Safe & hygienic",
              ].map((label) => (

                <div
                  key={label}
                  className="rounded-2xl bg-white/5 p-5 text-center"
                >
                  <p className="font-bold">
                    {label}
                  </p>
                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="px-5 py-20 lg:px-8">

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-forest-50 p-8 text-center sm:p-12">

            <p className="font-black uppercase tracking-[0.2em] text-citrus">
              Eat well • Feel well • Live well
            </p>

            <h2 className="mt-3 font-display text-4xl font-bold text-forest-900 sm:text-5xl">
              Your next good meal starts here.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-forest-700">
              Tell us what you need and we’ll help you find the right
              Nutri-Serve experience for you, your family or your event.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-bold text-white shadow-soft transition hover:bg-forest-900"
            >
              Book Your Meal or Event
              <ArrowRight size={18} />
            </a>

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="scroll-mt-24 bg-white px-5 py-20 lg:px-8"
        >

          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Contact Information */}

            <div>

              <p className="font-black uppercase tracking-[0.2em] text-citrus">
                Get in touch
              </p>

              <h2 className="mt-3 font-display text-4xl font-bold text-forest-900 sm:text-5xl">
                Let’s plan something delicious.
              </h2>

              <p className="mt-5 leading-8 text-forest-700">
                Whether you need a wellness meal, meal prep, a house-call chef
                or catering for an event, send us a message and we’ll take it
                from there.
              </p>

              <div className="mt-8 space-y-4">

                {/* Phone */}

                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center gap-4 rounded-2xl bg-forest-50 p-4 transition hover:bg-forest-100"
                >

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-white">
                    <Phone size={19} />
                  </span>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-forest-500">
                      Call / WhatsApp
                    </p>

                    <p className="font-bold text-forest-900">
                      {siteConfig.phoneDisplay}
                    </p>

                  </div>

                </a>

                {/* Email */}

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-forest-50 p-4 transition hover:bg-forest-100"
                >

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-white">
                    <Mail size={19} />
                  </span>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-forest-500">
                      Email
                    </p>

                    <p className="font-bold text-forest-900">
                      {siteConfig.email}
                    </p>

                  </div>

                </a>

                {/* Location */}

                <div className="flex items-center gap-4 rounded-2xl bg-forest-50 p-4">

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-white">
                    <MapPin size={19} />
                  </span>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-wider text-forest-500">
                      Serving
                    </p>

                    <p className="font-bold text-forest-900">
                      {siteConfig.location}
                    </p>

                  </div>

                </div>

              </div>

              {/* Socials */}

              <div className="mt-7">

                <p className="text-sm font-black text-forest-800">
                  Follow Nutri-Serve Kitchen
                </p>

                <div className="mt-3 flex gap-3">

                  {/* Instagram */}

                  <a
                    aria-label="Instagram"
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-white transition hover:bg-citrus"
                  >
                    <Instagram size={19} />
                  </a>

                  {/* TikTok */}

                  <a
                    aria-label="TikTok"
                    href={siteConfig.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-white transition hover:bg-citrus"
                  >
                    <span className="text-sm font-black">
                      ♪
                    </span>
                  </a>

                  {/* Facebook */}

                  <a
                    aria-label="Facebook"
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-white transition hover:bg-citrus"
                  >
                    <Facebook size={19} />
                  </a>

                </div>

              </div>

            </div>

            {/* Contact Form */}

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-cream p-6 shadow-soft ring-1 ring-forest-100 sm:p-8"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <label className="block">

                  <span className="text-sm font-bold text-forest-800">
                    Your name
                  </span>

                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-100"
                  />

                </label>

                <label className="block">

                  <span className="text-sm font-bold text-forest-800">
                    Email
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-100"
                  />

                </label>

              </div>

              <label className="mt-5 block">

                <span className="text-sm font-bold text-forest-800">
                  What do you need?
                </span>

                <select
                  name="service"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-100"
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option>
                    Wellness meals
                  </option>

                  <option>
                    House-call chef
                  </option>

                  <option>
                    Meal prep
                  </option>

                  <option>
                    Home / office delivery
                  </option>

                  <option>
                    Event catering
                  </option>

                  <option>
                    Something else
                  </option>

                </select>

              </label>

              <label className="mt-5 block">

                <span className="text-sm font-bold text-forest-800">
                  Message
                </span>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your meal, dietary needs, date or event..."
                  className="mt-2 w-full resize-none rounded-xl border border-forest-100 bg-white px-4 py-3 outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-100"
                />

              </label>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-800 px-5 py-3.5 font-bold text-white transition hover:bg-forest-900"
              >

                <Send size={17} />

                Send Enquiry

              </button>

              {submitted && (
                <p className="mt-3 text-center text-sm font-semibold text-forest-700">
                  Your email app should open with the enquiry ready to send.
                </p>
              )}

            </form>

          </div>

        </section>

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-forest-900 px-5 py-10 text-white lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="font-display text-3xl font-bold">
              Nutri<span className="text-citrus">-Serve</span> Kitchen
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-forest-100">
              Nourishing bodies, honouring our roots. Good food, personal care,
              thoughtfully prepared.
            </p>

          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-forest-100">

            <a
              href="#services"
              className="hover:text-citrus"
            >
              Services
            </a>

            <a
              href="#gallery"
              className="hover:text-citrus"
            >
              Gallery
            </a>

            <a
              href="#catering"
              className="hover:text-citrus"
            >
              Catering
            </a>

            <a
              href="#contact"
              className="hover:text-citrus"
            >
              Contact
            </a>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-citrus"
            >
              Instagram
            </a>

            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noreferrer"
              className="hover:text-citrus"
            >
              TikTok
            </a>

            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-citrus"
            >
              Facebook
            </a>

          </div>

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-forest-200">

          © {new Date().getFullYear()} Nutri-Serve Kitchen. All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default App;