"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

const LABELS: Record<number, string> = {
  1: "سيء",
  2: "مقبول",
  3: "جيد",
  4: "جيد جداً",
  5: "ممتاز",
};

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selected, setSelected] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const active = hover || selected;

  const handleSubmit = async (value: number) => {
    if (submitted !== null || isLoading) return;
    setSelected(value);
    setIsLoading(true);
    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(value);
        try {
          localStorage.setItem(STORAGE_KEY(projectId), String(value));
        } catch {}
        Toast({ icon: "success", message: "شكراً لتقييمك!" });
      } else {
        setSelected(0);
        Toast({
          icon: "error",
          message: data.message || data.error || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelected(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="rating"
      dir="rtl"
      className="py-24 flex items-center justify-center bg-[#fafaf9]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-4xl mx-4 bg-white rounded-2xl border border-stone-100 shadow-sm p-8 text-center">
        {/* Heading */}
        <h2 className="text-xl font-bold text-stone-800 mb-1">
          كيف كانت تجربتك؟
        </h2>

        {/* Stats */}
        {averageRating > 0 && (
          <p className="text-sm text-stone-400 mb-6">
            <span className="font-semibold text-stone-600">
              {averageRating.toFixed(1)}
            </span>
            {" / 5"}
            {totalRatings > 0 && (
              <>
                {" "}
                &middot; {totalRatings}{" "}
                {totalRatings === 1 ? "تقييم" : "تقييمات"}
              </>
            )}
          </p>
        )}

        <AnimatePresence mode="wait">
          {submitted !== null && mounted ? (
            /* ── Submitted state ── */
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-8 h-8 ${
                      s <= submitted
                        ? "fill-amber-400 text-amber-400"
                        : "fill-stone-100 text-stone-100"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-stone-500">
                شكراً! قيّمت بـ{" "}
                <span className="text-amber-500 font-semibold">
                  {LABELS[submitted]}
                </span>
              </p>
            </motion.div>
          ) : (
            /* ── Interactive state ── */
            <motion.div
              key="pick"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={isLoading || !mounted}
                    onClick={() => handleSubmit(s)}
                    onMouseEnter={() => setHover(s)}
                    onMouseLeave={() => setHover(0)}
                    aria-label={`تقييم ${s} من 5`}
                    className="p-1 rounded-lg transition-transform duration-150 hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    <Star
                      className={`w-9 h-9 transition-colors duration-150 ${
                        s <= active
                          ? "fill-amber-400 text-amber-400"
                          : "fill-stone-100 text-stone-100"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Label */}
              <div className="h-5">
                <AnimatePresence mode="wait">
                  {active > 0 && (
                    <motion.p
                      key={active}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="text-sm font-medium text-amber-500">
                      {LABELS[active]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Loading hint */}
              {isLoading && (
                <p className="text-xs text-stone-400">جاري الإرسال...</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
