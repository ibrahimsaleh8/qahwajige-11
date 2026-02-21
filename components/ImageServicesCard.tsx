import Image from "next/image";

export default function ImageServicesCard({
  image,
  index,
}: {
  image: { url: string; alt?: string };
  index: number;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={image.url}
          alt={image.alt ?? `Image ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
      </div>

      {/* Card footer */}
      {image.alt && (
        <div className="px-5 py-4">
          <p className="text-sm font-medium text-neutral-300 truncate">
            {image.alt}
          </p>
        </div>
      )}

      {/* Hover accent border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-indigo-500/30 transition-all duration-500 pointer-events-none" />
    </div>
  );
}
