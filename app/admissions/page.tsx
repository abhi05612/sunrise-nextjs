import { schoolConfig } from "../config/school";
import Link from "next/link";

export default function AdmissionsPage() {
  const { admissions, name } = schoolConfig;
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Admissions</h1>

      {/* Classes offered */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-primary mb-4">Classes Offered</h2>
        <div className="flex flex-wrap gap-3">
          {admissions.classes.map((cls) => (
            <span key={cls} className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              {cls}
            </span>
          ))}
        </div>
      </section>

      {/* Procedure */}
      <section id="procedure" className="mb-10">
        <h2 className="text-xl font-bold text-primary mb-4">Admission Procedure</h2>
        <ol className="space-y-3">
          {admissions.procedure.map((step, i) => (
            <li key={i} className="flex gap-4 items-start bg-white border border-border rounded-lg p-4 shadow-sm">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <span className="text-gray-600">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Documents */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-primary mb-4">Required Documents</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {admissions.documents.map((doc) => (
            <li key={doc} className="flex items-center gap-2 text-gray-600">
              <span className="text-secondary">✔</span> {doc}
            </li>
          ))}
        </ul>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="bg-accent rounded-lg p-8">
        <h2 className="text-xl font-bold text-primary mb-6">Admission Enquiry Form</h2>
        <form className="grid md:grid-cols-2 gap-4">
          <input className="border border-border rounded px-4 py-2 text-sm" placeholder="Child's Name *" required />
          <input className="border border-border rounded px-4 py-2 text-sm" placeholder="Father's Name *" required />
          <input className="border border-border rounded px-4 py-2 text-sm" placeholder="Mother's Name *" required />
          <input className="border border-border rounded px-4 py-2 text-sm" placeholder="Contact Number *" required />
          <input className="border border-border rounded px-4 py-2 text-sm" placeholder="Email Address" />
          <select className="border border-border rounded px-4 py-2 text-sm text-gray-500">
            <option value="">Apply for Class *</option>
            {admissions.classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          <textarea className="border border-border rounded px-4 py-2 text-sm md:col-span-2" rows={3} placeholder="Any message or query..." />
          <button type="submit" className="md:col-span-2 bg-primary text-white py-3 rounded font-semibold hover:bg-secondary transition-colors">
            Submit Enquiry
          </button>
        </form>
      </section>
    </div>
  );
}
