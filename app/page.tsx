import { getPosts, getNotices, getBannerSlides, getWhyUs, getStats, getTeachers, getTestimonials, getHomeGallery, getHomeEvents, getFacilities } from "@/lib/api"
import Link from "next/link";
import { schoolConfig } from "./config/school";
import HeroSlider from "./components/HeroSlider";

const fallbackTeachers = [
  { name: "Mrs. Sunita Sharma", subject: "Principal & English", emoji: "👩🏫", image: undefined as string | undefined },
  { name: "Mr. Rajesh Kumar", subject: "Mathematics", emoji: "👨🏫", image: undefined as string | undefined },
  { name: "Mrs. Priya Singh", subject: "Science", emoji: "👩🔬", image: undefined as string | undefined },
  { name: "Mr. Amit Verma", subject: "Social Studies", emoji: "👨💼", image: undefined as string | undefined },
];

const fallbackTestimonials = [
  { name: "Ravi Sharma", role: "Parent of Class V student", text: "The school has transformed my child's confidence. The teachers are dedicated and the environment is nurturing." },
  { name: "Meena Gupta", role: "Parent of Class III student", text: "Excellent infrastructure and caring staff. My daughter loves going to school every day!" },
  { name: "Suresh Patel", role: "Parent of Class VII student", text: "The balance of academics and extracurricular activities is perfect. Highly recommend this school." },
];

const fallbackWhyUs = [
  { icon: "🏆", image: "/acadmic-excellence.png", title: "Academic Excellence", desc: "Consistent top results with a focus on conceptual learning and critical thinking." },
  { icon: "🌱", title: "Holistic Development", desc: "Sports, arts, music, and life skills alongside academics for all-round growth." },
  { icon: "👩💻", title: "Modern Infrastructure", desc: "Smart classrooms, well-equipped labs, and high-speed internet throughout campus." },
  { icon: "❤️", title: "Safe & Caring", desc: "A safe, inclusive environment where every child feels valued and supported." },
  { icon: "🎓", title: "Expert Faculty", desc: "Experienced, trained teachers passionate about making learning enjoyable." },
  { icon: "🤝", title: "Parent Partnership", desc: "Regular PTMs and open communication to keep parents involved in their child's journey." },
];

const fallbackGallery = [
  { emoji: "🏃", label: "Sports Day", image: undefined as string | undefined },
  { emoji: "🎨", label: "Art Exhibition", image: undefined as string | undefined },
  { emoji: "🔬", label: "Science Fair", image: undefined as string | undefined },
  { emoji: "🎭", label: "Annual Function", image: undefined as string | undefined },
  { emoji: "📚", label: "Library", image: undefined as string | undefined },
  { emoji: "🎵", label: "Music Class", image: undefined as string | undefined },
  { emoji: "🏆", label: "Award Ceremony", image: undefined as string | undefined },
  { emoji: "🌿", label: "Nature Walk", image: undefined as string | undefined },
];

const fallbackEvents = [
  { title: "Annual Sports Day", date: "25 Mar", category: "Sports", desc: "Athletic competitions and team sports for all students." },
  { title: "Science Exhibition", date: "10 Apr", category: "Academics", desc: "Students showcase innovative science projects." },
  { title: "Annual Cultural Function", date: "15 May", category: "Cultural", desc: "Music, dance, and drama performances by students." },
];

function stripHtml(html: string) {
  return html?.replace(/<[^>]+>/g, "").trim() ?? "";
}

export default async function Home() {
  const { home, about, name } = schoolConfig;
  const [posts, wpNotices, wpSlides, wpWhyUs, wpStats, wpTeachers, wpTestimonials, wpGallery, wpEvents, wpFacilities] = await Promise.all([
    getPosts(), getNotices(), getBannerSlides(), getWhyUs(), getStats(), getTeachers(), getTestimonials(), getHomeGallery(), getHomeEvents(), getFacilities()
  ]);

  // Notices
  const notices = Array.isArray(wpNotices) && wpNotices.length > 0
    ? wpNotices.map((n: any) => n.title.rendered)
    : home.notices;

  // Banner Slides
  const bannerSlides = Array.isArray(wpSlides) && wpSlides.length > 0
    ? wpSlides.map((s: any) => ({
        title: s.title.rendered,
        subtitle: stripHtml(s.excerpt?.rendered ?? ""),
        image: s._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? undefined,
      }))
    : undefined;

  // Why Us
  const whyUsItems = Array.isArray(wpWhyUs) && wpWhyUs.length > 0
    ? wpWhyUs.map((w: any) => ({
        title: w.title.rendered,
        desc: stripHtml(w.excerpt?.rendered ?? ""),
        image: w._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? undefined,
        icon: "🏆",
      }))
    : fallbackWhyUs;

  // Stats
  const stats = Array.isArray(wpStats) && wpStats.length > 0
    ? wpStats.map((s: any) => ({
        label: s.title.rendered,
        value: stripHtml(s.excerpt?.rendered ?? ""),
      }))
    : home.stats;

  // Teachers
  const teachers = Array.isArray(wpTeachers) && wpTeachers.length > 0
    ? wpTeachers.map((t: any) => ({
        name: t.title.rendered,
        subject: stripHtml(t.excerpt?.rendered ?? ""),
        image: t._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? undefined,
        emoji: "👨🏫",
      }))
    : fallbackTeachers;

  // Testimonials
  const testimonials = Array.isArray(wpTestimonials) && wpTestimonials.length > 0
    ? wpTestimonials.map((t: any) => ({
        name: t.title.rendered,
        role: stripHtml(t.excerpt?.rendered ?? ""),
        text: stripHtml(t.content?.rendered ?? ""),
      }))
    : fallbackTestimonials;

  // Gallery Preview
  const galleryItems = Array.isArray(wpGallery) && wpGallery.length > 0
    ? wpGallery.map((g: any) => ({
        label: g.title.rendered,
        image: g._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? undefined,
        emoji: "📷",
      }))
    : fallbackGallery;

  // Events
  const events = Array.isArray(wpEvents) && wpEvents.length > 0
    ? wpEvents.map((e: any) => {
        const d = new Date(e.date);
        const day = d.getDate().toString();
        const mon = d.toLocaleString("en", { month: "short" });
        return {
          title: e.title.rendered,
          date: `${day} ${mon}`,
          category: stripHtml(e.excerpt?.rendered ?? ""),
          desc: stripHtml(e.content?.rendered ?? ""),
        };
      })
    : fallbackEvents;

  // Facilities
  const facilities = Array.isArray(wpFacilities) && wpFacilities.length > 0
    ? wpFacilities.map((f: any) => ({
        title: f.title.rendered,
        description: stripHtml(f.excerpt?.rendered ?? ""),
        image: f._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? undefined,
        icon: "🏫",
      }))
    : schoolConfig.facilities;

  return (
    <div>
      {/* Notices marquee */}
      <div className="bg-primary text-white py-2 overflow-hidden">
        <div className="flex items-center gap-4 px-4">
          <span className="font-bold text-xs whitespace-nowrap bg-secondary px-3 py-1 rounded">📢 NOTICES</span>
          <div className="overflow-hidden flex-1">
            <span className="animate-marquee text-sm">{notices.join("  •  ")}</span>
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <HeroSlider slides={bannerSlides} />

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl font-bold text-primary mb-4">Welcome to {name}</h2>
            <div className="w-14 h-1 bg-secondary mb-6 rounded" />
            <p className="text-gray-600 leading-relaxed mb-4">{about.principalMessage}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{about.directorMessage}</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/about" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors">
                Read More
              </Link>
              <Link href="/contact" className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Our Vision", desc: about.vision },
              { icon: "🚀", title: "Our Mission", desc: about.mission },
              { icon: "🏫", title: "Est. " + schoolConfig.established, desc: "Years of quality education and excellence." },
              { icon: "🌟", title: "CBSE Affiliated", desc: "Following national curriculum standards." },
            ].map((item) => (
              <div key={item.title} className="bg-accent rounded-xl p-5 card-hover">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-primary text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-title">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1">Why Choose Us</p>
            <h2>What Makes Us Different</h2>
            <div className="divider" />
            <p>We provide a world-class education experience that prepares students for life.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyUsItems.map((item) => (
              <div key={item.title} className="feature-card bg-white rounded-xl overflow-hidden text-center card-hover shadow-sm">
                {item.image
                  ? <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                  : <div className="text-5xl py-8 bg-accent">{item.icon}</div>
                }
                <div className="p-6">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs / Facilities */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="section-title">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1">Our Programs</p>
          <h2>Facilities & Programs</h2>
          <div className="divider" />
          <p>State-of-the-art facilities to support every aspect of student development.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {facilities.map((f) => (
            <div key={f.title} className="bg-white border border-border rounded-xl overflow-hidden text-center card-hover shadow-sm">
              {f.image
                ? <img src={f.image} alt={f.title} className="w-full h-36 object-cover" />
                : <div className="text-4xl py-5">{f.icon}</div>
              }
              <div className="p-4">
                <h3 className="font-bold text-primary text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/facilities" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors">
            View All Facilities
          </Link>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-title">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1">Our Team</p>
            <h2>Meet Our Teachers</h2>
            <div className="divider" />
            <p>Dedicated educators committed to inspiring and nurturing every student.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teachers.map((t) => (
              <div key={t.name} className="teacher-card">
                {/* Top banner */}
                <div className="h-20 w-full" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }} />
                {/* Avatar overlapping banner */}
                <div className="-mt-10 mb-3 flex justify-center">
                  {t.image
                    ? <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                    : <div className="teacher-avatar">{t.emoji}</div>
                  }
                </div>
                <div className="teacher-info">
                  <h3 className="font-bold text-primary text-sm">{t.name}</h3>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: "var(--secondary)" }}>{t.subject}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="section-title">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1">Gallery</p>
          <h2>School Life in Pictures</h2>
          <div className="divider" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryItems.map((item) => (
            <div key={item.label} className="gallery-item">
              {item.image
                ? <img src={item.image} alt={item.label} className="w-full h-full object-cover absolute inset-0" />
                : item.emoji
              }
              <div className="gallery-overlay">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-6 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-title">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1">Events</p>
            <h2 className="text-white">Upcoming Events</h2>
            <div className="divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.title} className="bg-white/10 rounded-xl p-6 card-hover border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary rounded-lg px-3 py-2 text-center min-w-[60px]">
                    <div className="text-xl font-bold text-white">{event.date.split(" ")[0]}</div>
                    <div className="text-xs text-white/80">{event.date.split(" ")[1]}</div>
                  </div>
                  <div>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-white/80">{event.category}</span>
                    <h3 className="font-bold text-white mt-1 mb-1">{event.title}</h3>
                    <p className="text-sm text-white/70">{event.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/events" className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-title">
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-1">Testimonials</p>
            <h2>What Parents Say</h2>
            <div className="divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card card-hover">
                <p className="text-gray-600 leading-relaxed mt-4 mb-4 text-sm">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-lg">👤</div>
                  <div>
                    <div className="font-bold text-primary text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, var(--secondary) 0%, #e8920a 100%)" }}>
        <h2 className="text-3xl font-bold text-white mb-3">Admissions Open for 2025-26</h2>
        <p className="text-white/80 mb-8 text-lg">Secure your child&apos;s future. Limited seats available.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/admissions#enquiry" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
            Apply Now
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
