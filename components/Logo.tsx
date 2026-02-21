import Link from "next/link";

export default function Logo({
  brandName,
  theme,
}: {
  brandName: string;
  theme: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-bold text-lg hover:opacity-80 transition ${theme == "light" ? "text-white" : "text-neutral-900"}`}>
      <svg
        viewBox="0 0 24 24"
        className={`w-7 h-7 fill-primary ${theme == "light" ? "fill-white" : "fill-primary"}`}
        aria-hidden="true">
        <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
      </svg>
      <span>{brandName}</span>
    </Link>
  );
}
