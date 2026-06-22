import cipcreLogoImage from "figma:asset/caec5ffe76d4276c16acc5b010fe6fe3f70a49c2.png";
import { Link, useLocation } from "@tanstack/react-router";
import { Globe, HandHeart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: t("header.home") },
    { path: "/programs", label: t("header.programs") },
    { path: "/documentation", label: t("header.documentation") },
    { path: "/news", label: t("header.news") },
    { path: "/events", label: t("header.events") },
    { path: "/media", label: t("header.media") },
    { path: "/partnerships", label: t("header.partnerships") },
    { path: "/contact", label: t("header.contact") },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 lg:gap-3">
            <img
              src={cipcreLogoImage}
              alt="CIPCRE Logo"
              className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
            />
            <div>
              <div className="font-semibold text-[#1B5E20] text-sm lg:text-base">
                {t("header.cipcre")}
              </div>
              <div className="text-[10px] lg:text-xs text-neutral-600 hidden sm:block">
                {t("header.fullName")}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation & Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm transition-colors ${
                    isActive(item.path)
                      ? "text-[#1B5E20] font-medium"
                      : "text-neutral-700 hover:text-[#1B5E20]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Volunteer Program Button */}
            <Button
              asChild
              size="sm"
              className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white shadow-md ml-2"
            >
              <Link to="/volunteer" className="flex items-center gap-2">
                <HandHeart className="w-4 h-4" />
                <span>{t("header.volunteer")}</span>
              </Link>
            </Button>

            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-4 border-l border-neutral-200 pl-4">
              <Globe className="w-4 h-4 text-neutral-500" />
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={
                  language === "en" ? "bg-[#1B5E20] h-8 px-3" : "h-8 px-3"
                }
              >
                EN
              </Button>
              <Button
                variant={language === "fr" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("fr")}
                className={
                  language === "fr" ? "bg-[#1B5E20] h-8 px-3" : "h-8 px-3"
                }
              >
                FR
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-1">
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={
                  language === "en"
                    ? "bg-[#1B5E20] h-7 px-2 text-xs"
                    : "h-7 px-2 text-xs"
                }
              >
                EN
              </Button>
              <Button
                variant={language === "fr" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("fr")}
                className={
                  language === "fr"
                    ? "bg-[#1B5E20] h-7 px-2 text-xs"
                    : "h-7 px-2 text-xs"
                }
              >
                FR
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 p-0"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-neutral-200 bg-white">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm transition-colors rounded-lg ${
                    isActive(item.path)
                      ? "text-[#1B5E20] font-medium bg-[#1B5E20]/5"
                      : "text-neutral-700 hover:text-[#1B5E20] hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Volunteer Button */}
              <Link
                to="/volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-3 px-4 py-3 text-sm font-medium text-white bg-[#1B5E20] hover:bg-[#2E7D32] rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <HandHeart className="w-4 h-4" />
                <span>{t("header.volunteer")}</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
