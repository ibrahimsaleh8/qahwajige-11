import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LFZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

const socialLinks = [
  {
    href: "https://www.instagram.com/qahwajeyn",
    label: "instagram",
    icon: <FaInstagram className="w-5 h-5" />,
    bg: "bg-[#c13584]",
  },
  {
    href: "https://www.tiktok.com/@user61719922769991",
    label: "tiktok",
    icon: <FaTiktok className="w-5 h-5" />,
    bg: "bg-black",
  },
  {
    href: "https://www.facebook.com/SbabinAlkahwaa/?_rdr",
    label: "facebook",
    icon: <FaFacebookF className="w-5 h-5" />,
    bg: "bg-[#1877f2]",
  },
  {
    href: "https://x.com/NghmAbw11703",
    label: "twitter",
    icon: <FaTwitter className="w-5 h-5" />,
    bg: "bg-[#1da1f2]",
  },
  {
    href: "https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng",
    label: "youtube",
    icon: <FaYoutube className="w-5 h-5" />,
    bg: "bg-[#ff0000]",
  },
];

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "الرئيسية", href: "#home" },
      { name: "عن الشركة", href: "#about" },
      { name: "خدماتنا", href: "#services" },
      { name: "اتصل بنا", href: "#contact" },
    ],
  };

  return (
    <footer className="border-t border-black/5 relative z-10 overflow-hidden bg-[#0F172B] text-white">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Logo theme="light" brandName={brandName ?? ""} />
              <p className="mb-6 leading-relaxed">{description}</p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-bold text-lg mb-6">خدماتنا</p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={"#services"}
                    className="text-white/80 hover:text-main-color transition-colors inline-block">
                    قهوجيين وصبابين
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#services"}
                    className="text-white/80 hover:text-main-color transition-colors inline-block">
                    تجهيز حفلات
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-bold text-lg mb-6">استكشف</p>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-main-color transition-colors inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-white font-bold text-lg mb-6">تواصل معنا</p>
              <ul className="space-y-4 text-white/80">
                {address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1" />
                    <span>{address}</span>
                  </li>
                )}
                {email && (
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1" />
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-main-color transition-colors">
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1" />
                    <a
                      href={`tel:${phone}`}
                      className="hover:text-main-color transition-colors">
                      {phone}
                    </a>
                  </li>
                )}
              </ul>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.href}
                    className={`flex items-center justify-center w-10 h-10 ${social.bg} rounded-full text-white hover:opacity-80 transition-opacity`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white font-bold text-lg mb-6">مكاننا</p>

              <div className="w-full aspect-video md:aspect-21/9 min-h-55 bg-slate-800">
                <iframe
                  src={mapEmbedSrc}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع قهوجيين الرياض على الخريطة"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <p className="text-white/60 text-sm text-center md:text-center">
              © {currentYear} {brandName}. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
