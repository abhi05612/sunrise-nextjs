import { getGallery } from "@/lib/api";

const fallbackPhotos = [
  { id: 1, title: "Sports Day", src: "/images/gallery/sports.jpeg" },
  { id: 2, title: "Art Exhibition", src: "/images/gallery/art.jpeg" },
  { id: 3, title: "Science Fair", src: "/images/gallery/science.jpeg" },
  { id: 4, title: "Annual Function", src: "/images/gallery/annual.jpeg" },
  { id: 5, title: "Library", src: "/images/gallery/library.jpeg" },
  { id: 6, title: "Music Class", src: "/images/gallery/music.jpeg" },
  { id: 7, title: "Award Ceremony", src: "/images/gallery/award.jpeg" },
  { id: 8, title: "Nature Walk", src: "/images/gallery/nature-walk.jpeg" },
];

export default async function GalleryPage() {
  const wpPhotos = (await getGallery()) ?? [];

  const photos = wpPhotos.length > 0
    ? wpPhotos.map((photo: any) => ({
        id: photo.id,
        title: photo.alt_text || photo.title.rendered,
        src: photo.source_url,
      }))
    : fallbackPhotos;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Gallery</h1>
      <section>
        <h2 className="text-xl font-bold text-primary mb-6">📸 Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo: { id: number; title: string; src: string }) => (
            <div key={photo.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={photo.src} alt={photo.title} className="w-full h-48 object-cover" />
              <div className="bg-white px-3 py-2 text-sm text-gray-600">{photo.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
