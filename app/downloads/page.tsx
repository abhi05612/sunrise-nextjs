import { schoolConfig } from "../config/school";

export default function DownloadsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Downloads</h1>

      <div className="space-y-3">
        {schoolConfig.downloads.map((item) => (
          <a
            key={item.title}
            href={item.file}
            download
            className="flex items-center justify-between bg-white border border-border rounded-lg px-5 py-4 shadow-sm hover:border-secondary hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <span className="font-medium text-primary group-hover:text-secondary transition-colors">{item.title}</span>
            </div>
            <span className="text-sm bg-accent text-primary px-3 py-1 rounded font-medium">⬇ Download</span>
          </a>
        ))}
      </div>
    </div>
  );
}
