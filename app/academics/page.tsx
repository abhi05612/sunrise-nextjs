export default function AcademicsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Academics</h1>

      <section id="curriculum" className="mb-10 bg-white border border-border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-3">📖 Curriculum</h2>
        <p className="text-gray-600">
          Our curriculum follows the CBSE pattern with a strong focus on conceptual understanding,
          critical thinking, and co-curricular activities. Each class is designed to build on the
          previous year's learning with age-appropriate content.
        </p>
      </section>

      <section id="exam-policy" className="mb-10 bg-white border border-border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-3">📋 Examination Policy</h2>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>✔ Continuous and Comprehensive Evaluation (CCE) pattern</li>
          <li>✔ Two terms per academic year</li>
          <li>✔ Regular class tests, unit tests, and term exams</li>
          <li>✔ Project-based assessments for practical subjects</li>
          <li>✔ No detention policy up to Class V</li>
        </ul>
      </section>

      <section id="calendar" className="mb-10 bg-white border border-border rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-3">📅 Academic Calendar</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          {[
            { month: "April", event: "New session begins" },
            { month: "June–July", event: "Summer vacation" },
            { month: "August", event: "Independence Day celebration" },
            { month: "October", event: "Half-yearly exams" },
            { month: "November", event: "Annual Sports Day" },
            { month: "December", event: "Winter vacation" },
            { month: "January", event: "Annual function / Cultural fest" },
            { month: "March", event: "Final exams & result declaration" },
          ].map((item) => (
            <div key={item.month} className="flex gap-3 items-start">
              <span className="bg-accent text-primary font-semibold px-2 py-1 rounded text-xs whitespace-nowrap">{item.month}</span>
              <span>{item.event}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="bg-accent rounded-lg p-6">
        <h2 className="text-xl font-bold text-primary mb-3">🏆 Results</h2>
        <p className="text-gray-600 text-sm">
          Results are declared after each term exam. Students can collect their report cards from
          the school office. Previous year results and toppers list will be published here.
        </p>
      </section>
    </div>
  );
}
