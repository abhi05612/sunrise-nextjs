import { getGallery } from "@/lib/api";

export default async function GalleryPage() {
  const photos = (await getGallery()) ?? [];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Gallery</h1>

      <section>
        <h2 className="text-xl font-bold text-primary mb-6">📸 Photo Gallery</h2>
        {photos.length === 0 ? (
          <p className="text-center text-gray-400">No photos yet. Upload images in WordPress Media Library.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo: any) => (
              <div key={photo.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={photo.source_url}
                  alt={photo.alt_text || photo.title.rendered}
                  className="w-full h-48 object-cover"
                />
                <div className="bg-white px-3 py-2 text-sm text-gray-600">{photo.title.rendered}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
