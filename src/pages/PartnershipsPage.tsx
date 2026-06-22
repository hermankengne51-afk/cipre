import worldBankLogo from "figma:asset/0f3157bc870c707cfc94a341acb99fd717beaea8.png";
import unicefLogo from "figma:asset/1dcc138988ba0f2f35f702aa230e153debff0cd9.png";
import kinderLogo from "figma:asset/6d7b381019970409836a5a3de27e25fb93d0a2db.png";
import fcsLogo from "figma:asset/9b4f041048fc646190563b935df6235661a1256b.png";
import euLogo from "figma:asset/9cc76be8f643d325d3acd8437f45f4006e7d7e72.png";
import brotLogo from "figma:asset/10f22c72b5080368e755905365699e53ea5f9a5a.png";
import ottoLogo from "figma:asset/26d566c7052b852f41b08b5a12a508531949687f.png";
import mintpLogo from "figma:asset/55b1be532d0aa323946022b9fcf2392769b86bc7.png";
import sternsingerLogo from "figma:asset/75ed8d227fe83489eff19385e24dae8c8881a583.png";
import mensenLogo from "figma:asset/974ea7924ca3e0f4c3ddb6e3ce7568e31a7e397b.png";
import zfdLogo from "figma:asset/4546e353464ab8fa0f9bcdeab9d49baeb8c625a8.png";
import kerkLogo from "figma:asset/066782dfbc0a87b81392fa351e1b5d7518e97ba7.png";
import aicsLogo from "figma:asset/70049539d4c7e9dd3cb03b6d53699049cefb496a.png";
import gizLogo from "figma:asset/a4eff97416a5687f2e72780a4dd251d8aad8a5c1.png";
import dynamiqueLogo from "figma:asset/a581cc13aa011fc63871fe456d2215e1dd6c45c5.png";
import cooperationLogo from "figma:asset/dd9b5d13413cd072d94a6c32ee1d6fde9a0ef280.png";
import { ArrowRight, Handshake, TrendingUp, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function PartnershipsPage() {
  const { t } = useLanguage();

  const partnerCategories = [
    {
      title: "International Development Partners",
      icon: Handshake,
      description:
        "Multilateral and bilateral development agencies supporting our programs",
      count: 12,
    },
    {
      title: "Private Sector Partners",
      icon: Handshake,
      description:
        "Corporate partners providing technical expertise and resources",
      count: 8,
    },
    {
      title: "Civil Society Organizations",
      icon: Users,
      description: "NGOs and community-based organizations we collaborate with",
      count: 45,
    },
    {
      title: "Academic & Research Institutions",
      icon: Handshake,
      description:
        "Universities and research centers advancing knowledge together",
      count: 18,
    },
  ];

  const majorPartners = [
    { name: "Brot für die Welt", type: "Development Partner", logo: brotLogo },
    { name: "UNICEF", type: "UN Agency", logo: unicefLogo },
    { name: "Kerk in Actie", type: "Development Partner", logo: kerkLogo },
    {
      name: "Mensen met een Missie",
      type: "Development Partner",
      logo: mensenLogo,
    },
    { name: "Ziviler Friedensdienst", type: "Peace Service", logo: zfdLogo },
    {
      name: "Kinder Rechte Afrika",
      type: "Development Partner",
      logo: kinderLogo,
    },
    {
      name: "Dynamique dans l'échange",
      type: "Development Partner",
      logo: dynamiqueLogo,
    },
    {
      name: "Die Sternsinger",
      type: "Development Partner",
      logo: sternsingerLogo,
    },
    {
      name: "FCS Culture Solidali",
      type: "Development Partner",
      logo: fcsLogo,
    },
    { name: "European Union", type: "Development Partner", logo: euLogo },
    { name: "AICS", type: "Development Agency", logo: aicsLogo },
    { name: "Otto per Mille", type: "Development Partner", logo: ottoLogo },
    {
      name: "Coopération Allemande",
      type: "Development Partner",
      logo: cooperationLogo,
    },
    { name: "GIZ-BMZ", type: "Development Partner", logo: gizLogo },
    { name: "World Bank", type: "Financial Institution", logo: worldBankLogo },
    { name: "MINTP", type: "Government Partner", logo: mintpLogo },
  ];

  const benefits = [
    "Access to our extensive network of community-based organizations",
    "Evidence-based program design and implementation support",
    "Strong local knowledge and contextual understanding",
    "Proven track record of delivering sustainable impact",
    "Transparent governance and financial management",
    "Commitment to gender equality and social inclusion",
  ];

  const partnershipTypes = [
    {
      title: "Program Funding",
      description:
        "Support specific programs aligned with your strategic priorities and our areas of expertise.",
    },
    {
      title: "Research Collaboration",
      description:
        "Partner on research studies, evaluations, and knowledge generation initiatives.",
    },
    {
      title: "Technical Partnership",
      description:
        "Exchange expertise, methodologies, and innovative approaches to development challenges.",
    },
    {
      title: "Advocacy Alliance",
      description:
        "Join forces to advance policy reforms and systemic change on critical issues.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-14">
          <div className="flex items-center gap-2 mb-3">
            <Handshake className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide">
              {t("partnerships.hero.badge")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight max-w-4xl">
            {t("partnerships.hero.title")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t("partnerships.hero.description")}
          </p>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="max-w-[1440px] mx-auto px-12 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1B5E20]/5 px-5 py-2 rounded-full border border-[#1B5E20]/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#1B5E20] animate-pulse" />
            <span className="text-sm font-medium text-[#1B5E20]">
              Our Network
            </span>
          </div>
          <h2 className="mb-4 text-[20px] font-bold">Our Partner Network</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Building collaborative relationships across sectors and continents
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {partnerCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="group relative p-8 text-center hover:shadow-2xl transition-all duration-500 border-t-4 border-t-transparent hover:border-t-[#1B5E20] bg-white overflow-hidden"
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                    <Icon className="w-10 h-10 text-[#1B5E20] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] mb-3">
                    {category.count}
                  </div>
                  <h3 className="text-lg mb-3 group-hover:text-[#1B5E20] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Major Partners */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-bold">Major Partners</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Trusted collaborators driving sustainable development across
              Central Africa
            </p>
          </div>

          <div className="grid grid-cols-6 gap-6">
            {majorPartners.map((partner) => (
              <Card
                key={partner.name}
                className="group p-8 flex flex-col items-center justify-center text-center min-h-[200px] hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-[#1B5E20]/30 relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#1B5E20]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all" />

                <div className="relative w-full">
                  <div className="w-32 h-32 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl mb-5 mx-auto flex items-center justify-center p-4 group-hover:bg-gradient-to-br group-hover:from-[#1B5E20]/10 group-hover:to-[#2E7D32]/10 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Handshake className="w-12 h-12 text-neutral-400 group-hover:text-[#1B5E20] transition-colors" />
                    )}
                  </div>
                  <div className="font-semibold mb-2 text-sm group-hover:text-[#1B5E20] transition-colors">
                    {partner.name}
                  </div>
                  <div className="text-xs text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full inline-block">
                    {partner.type}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="max-w-[1440px] mx-auto px-12 py-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1B5E20]/5 px-5 py-2 rounded-full border border-[#1B5E20]/20 mb-6">
              <Handshake className="w-4 h-4 text-[#1B5E20]" />
              <span className="text-sm font-medium text-[#1B5E20]">
                Why Choose Us
              </span>
            </div>

            <h2 className="mb-6 text-[20px] font-bold">
              Why Partner With CIPCRE?
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              With nearly three decades of experience, we bring deep local
              knowledge, proven methodologies, and a commitment to sustainable
              impact that makes us an effective partner for development
              initiatives.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#1B5E20]/5 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Handshake className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed pt-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#1B5E20]/5 rounded-full blur-3xl" />

            <Card className="relative p-12 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white shadow-2xl overflow-hidden rounded-3xl">
              {/* Decorative overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 w-12 bg-[#D4AF37] rounded-full" />
                  <h3 className="text-white text-2xl">Partnership Impact</h3>
                </div>

                <div className="space-y-8">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-5xl font-bold mb-2 text-[#D4AF37]">
                      €45M+
                    </div>
                    <div className="text-neutral-100">
                      Total partnership funding managed
                    </div>
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-5xl font-bold mb-2 text-[#D4AF37]">
                      98%
                    </div>
                    <div className="text-neutral-100">
                      Partner satisfaction rate
                    </div>
                  </div>
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-5xl font-bold mb-2 text-[#D4AF37]">
                      85+
                    </div>
                    <div className="text-neutral-100">Active partnerships</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 py-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1B5E20]/5 px-5 py-2 rounded-full border border-[#1B5E20]/20 mb-4">
              <Handshake className="w-4 h-4 text-[#1B5E20]" />
              <span className="text-sm font-medium text-[#1B5E20]">
                Collaboration Models
              </span>
            </div>
            <h2 className="mb-4 text-[20px] font-bold">
              Partnership Opportunities
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Flexible collaboration models designed to meet your organization's
              goals
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {partnershipTypes.map((type) => (
              <Card
                key={type.title}
                className="group relative p-10 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-[#1B5E20] bg-white overflow-hidden rounded-xl"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Handshake className="w-6 h-6 text-[#1B5E20]" />
                    </div>
                    <div className="h-0.5 flex-1 max-w-[80px] bg-gradient-to-r from-[#1B5E20] to-transparent rounded-full" />
                  </div>

                  <h3 className="mb-4 text-2xl group-hover:text-[#1B5E20] transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-base">
                    {type.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-[#1B5E20] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-sm font-medium">Join Our Network</span>
          </div>

          <h2 className="mb-3 text-3xl leading-tight max-w-3xl mx-auto">
            Become a Partner
          </h2>
          <p className="text-base text-neutral-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            Let's explore how we can work together to create sustainable
            development outcomes and social transformation.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button
              size="lg"
              className="bg-white text-[#1B5E20] hover:bg-neutral-100 shadow-xl hover:shadow-2xl transition-all px-6 py-4 text-base group"
            >
              <span>Download Partnership Prospectus</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:bg-white hover:text-[#1B5E20] px-6 py-4 text-base backdrop-blur-sm"
            >
              Contact Partnerships Team
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Handshake className="w-6 h-6 mx-auto mb-2 text-[#D4AF37]" />
              <div className="text-sm text-neutral-100">Global Reach</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Users className="w-6 h-6 mx-auto mb-2 text-[#D4AF37]" />
              <div className="text-sm text-neutral-100">Local Expertise</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-[#D4AF37]" />
              <div className="text-sm text-neutral-100">Proven Impact</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
