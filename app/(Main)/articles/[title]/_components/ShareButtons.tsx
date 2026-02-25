"use client";

import { useEffect, useState } from "react";

type Props = {
  title: string;
};

export default function ShareButtons({ title }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <span className="text-sm text-[#8B7D72]">مشاركة المقال:</span>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-green-500 text-white text-sm hover:opacity-90">
        واتساب
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm hover:opacity-90">
        فيسبوك
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-black text-white text-sm hover:opacity-90">
        X
      </a>

      {/* Telegram */}
      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-full bg-sky-500 text-white text-sm hover:opacity-90">
        تيليجرام
      </a>

      {/* Copy Link */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
          alert("تم نسخ رابط المقال");
        }}
        className="px-3 py-1.5 rounded-full bg-gray-200 text-sm hover:bg-gray-300">
        نسخ الرابط
      </button>
    </div>
  );
}
