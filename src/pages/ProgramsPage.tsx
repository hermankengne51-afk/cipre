import humanRightsImage from "figma:asset/3125837bb6fb0d293e9a45aec041c4db9243a71d.png";
import peaceCohesionImage from "figma:asset/e2d2df0672d030c9c336db86785c7261d5fa3655.png";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  MapPin,
  Scale,
  Sprout,
  Target,
  Users,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function ProgramsPage() {
  const programs = [
    {
      slug: "agriculture-sustainable-entrepreneurship",
      title: "Agriculture, Sustainable Entrepreneurship & Community Hygiene",
      description:
        "Promoting agroecological and organic value chains, eco-entrepreneurship for youth and women, and strengthening community resilience to climate change.",
      icon: Sprout,
      countries: ["West", "Centre", "Adamawa", "East", "Littoral"],
      themes: ["Agroecology", "Entrepreneurship", "Climate Resilience"],
      beneficiaries: "125,000+",
      color: "bg-green-50 text-green-700",
      image:
        "https://images.unsplash.com/photo-1666987571351-737b29874697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwb3JnYW5pYyUyMGZhcm1pbmclMjB2ZWdldGFibGVzJTIwZmllbGR8ZW58MXx8fHwxNzczOTU5NzUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      iconColor: "text-[#1B5E20]",
    },
    {
      slug: "peace-social-cohesion",
      title: "Peace & Social Cohesion",
      description:
        "Preventing drug use in schools, managing land and agropastoral conflicts, and promoting peace through community mediation and cultural activities.",
      icon: Heart,
      countries: ["West", "Centre", "Adamawa", "East", "Littoral"],
      themes: ["Peace Building", "Conflict Management", "Community Mediation"],
      beneficiaries: "85,000+",
      color: "bg-blue-50 text-blue-700",
      image: peaceCohesionImage,
      iconColor: "text-[#D4AF37]",
    },
    {
      slug: "human-rights-citizen-participation",
      title: "Human Rights & Citizen Participation",
      description:
        "Promoting positive parenting, protecting children against violence, and supporting youth participation in democratic processes.",
      icon: Scale,
      countries: ["West", "Centre", "Adamawa", "East", "Littoral"],
      themes: ["Human Rights", "Child Protection", "Youth Participation"],
      beneficiaries: "95,000+",
      color: "bg-amber-50 text-amber-700",
      image: humanRightsImage,
      iconColor: "text-[#388E3C]",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide">
              3 STRATEGIC PROGRAMS
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight max-w-4xl">
            Our Programs
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            We implement integrated, multi-sectoral programs that address
            critical development challenges and create sustainable impact for
            communities across Central Africa.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-[1440px] mx-auto px-12 py-20">
        <div className="grid grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.title}
                to="/programs/$slug"
                params={{ slug: program.slug }}
                className="block"
              >
                <Card className="group relative overflow-hidden border-2 border-neutral-100 hover:border-[#1B5E20]/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Icon Badge on Image */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                      <Icon className={`w-8 h-8 ${program.iconColor}`} />
                    </div>

                    {/* Beneficiaries Badge on Image */}
                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#1B5E20]" />
                        <span className="text-sm font-bold text-[#1B5E20]">
                          {program.beneficiaries}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-8">
                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="mb-3 text-neutral-900 group-hover:text-[#1B5E20] transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Themes */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.themes.map((theme) => (
                        <Badge
                          key={theme}
                          className="bg-[#D7CCC8] text-[#5D4037] hover:bg-[#BCAAA4] border-0 px-3 py-1"
                        >
                          {theme}
                        </Badge>
                      ))}
                    </div>

                    {/* Location Information */}
                    <div className="mb-6 pb-6 border-b-2 border-neutral-100">
                      <div className="flex items-center gap-3 text-neutral-700">
                        <div className="w-9 h-9 rounded-lg bg-[#E8F5E9] flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-[#1B5E20]" />
                        </div>
                        <span className="text-sm font-medium">
                          {program.countries.join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <Button
                      asChild
                      className="w-full bg-[#1B5E20] hover:bg-[#2E7D32] text-white shadow-md group-hover:shadow-lg transition-all pointer-events-none"
                    >
                      <span>
                        Learn More About This Program
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Animated Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute top-8 left-8 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-12 lg:py-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full mb-4 border border-white/20 shadow-lg">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold tracking-wide uppercase text-[13px]">
              Partnership Opportunities
            </span>
          </div>

          <h2 className="mb-3 text-white text-2xl lg:text-3xl">
            Interested in Partnering With Us?
          </h2>

          <p className="text-base lg:text-lg text-white/85 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
            We collaborate with governments, donors, NGOs, and community
            organizations to scale impact and create sustainable change.
          </p>

          {/* Key Partnership Types - Compact Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-3xl mx-auto">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              🏛️ Governments
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              💰 Donors & Foundations
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              🤝 NGOs & CSOs
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              🏢 Private Sector
            </div>
            <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs font-medium">
              🎓 Academic Institutions
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-white text-[#1B5E20] hover:bg-white/95 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-6 py-5 font-bold group"
          >
            <Link to="/partnerships" className="inline-flex items-center">
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
