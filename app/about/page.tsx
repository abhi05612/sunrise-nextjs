import { schoolConfig } from "../config/school";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  const { about, name } = schoolConfig;
  return (
    <div>
      <PageHeader title="About Us" subtitle="Learn about our school's story, vision, and values" breadcrumb="About Us" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Vision & Mission */}
        <section id="vision" className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-accent rounded-xl p-6 card-hover">
            <div className="text-4xl mb-3">🎯</div>
            <h2 className="text-xl font-bold text-primary mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">{about.vision}</p>
          </div>
          <div className="bg-accent rounded-xl p-6 card-hover">
            <div className="text-4xl mb-3">🚀</div>
            <h2 className="text-xl font-bold text-primary mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">{about.mission}</p>
          </div>
        </section>

        {/* Director Message */}
        <section id="director" className="mb-8 bg-white border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-border">Director's Message</h2>
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-4xl shrink-0">👨‍💼</div>
            <div>
              <p className="text-gray-600 italic leading-relaxed mb-4">"{about.directorMessage}"</p>
              <p className="font-bold text-primary">— {about.directorName}</p>
              <p className="text-sm text-muted">Director, {name}</p>
            </div>
          </div>
        </section>

        {/* Principal Message */}
        <section id="principal" className="bg-white border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-border">Principal's Message</h2>
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-4xl shrink-0">👩‍🏫</div>
            <div>
              <p className="text-gray-600 italic leading-relaxed mb-4">"{about.principalMessage}"</p>
              <p className="font-bold text-primary">— {about.principalName}</p>
              <p className="text-sm text-muted">Principal, {name}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
