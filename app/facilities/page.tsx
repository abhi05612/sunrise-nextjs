import { schoolConfig } from "../config/school";

export default function FacilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-4 text-center">Our Facilities</h1>
      <p className="text-center text-gray-500 mb-10">World-class infrastructure for holistic development</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schoolConfig.facilities.map((f) => (
          <div key={f.title} id={f.title.toLowerCase().replace(/\s+/g, "-")}
            className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-secondary transition-all">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-bold text-primary mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
