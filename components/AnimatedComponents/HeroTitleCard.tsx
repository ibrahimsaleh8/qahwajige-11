"use client";
import { TypingAnimation } from "../ui/typing-animation";

export default function HeroTitleCard() {
  return (
    <TypingAnimation
      className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm md:text-base font-medium backdrop-blur-sm"
      as={"p"}>
      قهوجيين الرياض · ضيافة راقية لمناسباتكم
    </TypingAnimation>
  );
}
