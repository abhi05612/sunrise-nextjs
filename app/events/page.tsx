import { getEvents } from "@/lib/api";

const categoryColors: Record<string, string> = {
  Sports: "bg-green-100 text-green-700",
  Academics: "bg-blue-100 text-blue-700",
  Cultural: "bg-purple-100 text-purple-700",
  National: "bg-orange-100 text-orange-700",
  Festival: "bg-red-100 text-red-700",
  Academic: "bg-blue-100 text-blue-700",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Events & Celebrations</h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-400">No events found. Add posts in the "events" category in WordPress.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event: any) => {
            const category = event._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "General";
            return (
              <div key={event.id} className="bg-white border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-primary" dangerouslySetInnerHTML={{ __html: event.title.rendered }} />
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[category] ?? "bg-gray-100 text-gray-600"}`}>
                    {category}
                  </span>
                </div>
                <p className="text-xs text-secondary font-semibold mb-2">
                  📅 {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
