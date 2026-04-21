import Link from "next/link";
import { schoolConfig } from "../config/school";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* School info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xl font-bold text-white">S</div>
            <div>
              <div className="font-bold text-base leading-tight">{schoolConfig.name}</div>
              <div className="text-xs text-white/60">Est. {schoolConfig.established}</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">{schoolConfig.tagline}</p>
          <div className="flex gap-2">
            {[
              { label: "FB", href: schoolConfig.social.facebook },
              { label: "IG", href: schoolConfig.social.instagram },
              { label: "YT", href: schoolConfig.social.youtube },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center text-xs font-bold transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/75">
            {schoolConfig.nav.slice(0, 7).map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-secondary transition-colors flex items-center gap-1">
                  <span className="text-secondary text-xs">›</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <span className="shrink-0">📍</span>
              <span>{schoolConfig.contact.address}</span>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <a href={`tel:${schoolConfig.contact.phone}`} className="hover:text-secondary transition-colors">
                {schoolConfig.contact.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a href={`mailto:${schoolConfig.contact.email}`} className="hover:text-secondary transition-colors">
                {schoolConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Admission CTA */}
        <div>
          <h3 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wide">Admissions</h3>
          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            Admissions open for 2025-26. Limited seats available. Apply today!
          </p>
          <Link href="/admissions#enquiry"
            className="block bg-secondary text-white text-center px-4 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity mb-3">
            Apply for Admission
          </Link>
          <Link href="/downloads"
            className="block border border-white/30 text-white text-center px-4 py-2.5 rounded-full text-sm hover:border-secondary hover:text-secondary transition-colors">
            Download Prospectus
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
        <span>© {new Date().getFullYear()} {schoolConfig.name}. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          <Link href="/downloads" className="hover:text-secondary transition-colors">Downloads</Link>
          <Link href="/admissions" className="hover:text-secondary transition-colors">Admissions</Link>
        </div>
      </div>
    </footer>
  );
}
