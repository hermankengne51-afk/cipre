import img2 from "figma:asset/2b9e3329af547c72b01cad7f64e1abed6065232d.png";
import maternalHealthImage from "figma:asset/3ddffdebb2dbc873c904a9ce4bfbaff67357ee9c.png";
import womenCooperativeImage from "figma:asset/5e262c780ca737e5dd8965928fba0467f0727e07.png";
import awardCeremonyImage from "figma:asset/37f957e108d3b376b388c8fe1d369f4875ddc1ee.png";
import euEducationImage from "figma:asset/55b1be532d0aa323946022b9fcf2392769b86bc7.png";
import img3 from "figma:asset/66eb06301ad335eb67044ca9b4d15db17c547a06.png";
import img7 from "figma:asset/80dc81e9a405016c629a795be370459d11e746b5.png";
import climateAgricultureImage from "figma:asset/154fda0f400f1374ac6c50b0a88a3c0c3c38c7b6.png";
import img4 from "figma:asset/1392f78975a704bcfb47dff1ca28da0536f9319b.png";
import farmerAppImage from "figma:asset/2318b4e87cada8208c2922e5fe0b5a7d77f6cb75.png";
import img1 from "figma:asset/8421c37e3c77f5b3abcec0b2ef82bd5dd46c9a76.png";
import img6 from "figma:asset/aabd3465c1f7f1ef5a5ffdc8e159419fa67451a0.png";
import waterSanitationImage from "figma:asset/d62768ea3a0aa3953ddb46e6e5e1c7fd83b8fde2.png";
import img5 from "figma:asset/ea0482caa84943ea276e709dbbcc0ff944a4fb2b.png";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Download,
  Eye,
  FileText,
  Globe,
  HandHeart,
  Heart,
  Play,
  Scale,
  Sprout,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { VideoModal } from "../components/VideoModal";
import { useLanguage } from "../contexts/LanguageContext";

export function HomePage() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const slides = [img3, img1, img2, img4, img5, img6, img7];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { label: "Years of Experience", value: "34+", icon: TrendingUp },
    { label: "Projects Implemented", value: "450+", icon: Target },
    { label: "Countries of Intervention", value: "12", icon: Globe },
    { label: "Beneficiaries Reached", value: "2.5M+", icon: Users },
    { label: "Volunteers & Partners", value: "850+", icon: HandHeart },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of transparency and accountability in all our operations.",
      icon: Heart,
    },
    {
      title: "Excellence",
      description:
        "We pursue quality and rigor in our programs, research, and partnerships.",
      icon: Target,
    },
    {
      title: "Inclusion",
      description:
        "We ensure equitable participation of marginalized communities in development processes.",
      icon: Users,
    },
    {
      title: "Innovation",
      description:
        "We embrace creative solutions and evidence-based approaches to social challenges.",
      icon: Eye,
    },
  ];

  const principles = [
    "Rights-based approach to development",
    "Gender equality and social inclusion",
    "Community ownership and participation",
    "Evidence-based programming and advocacy",
    "Sustainable impact and systems change",
    "Strategic partnerships and collaboration",
  ];

  const publications = [
    {
      title: "Annual Report 2025 - Impact and Innovation",
      year: "2025",
      category: "Annual Report",
      id: "annual-2025",
      excerpt:
        "Comprehensive overview of our achievements, challenges, and strategic direction for the coming years.",
      image: awardCeremonyImage,
    },
    {
      title: "Gender Equality in Education: A Five-Year Study",
      year: "2024",
      category: "Research Study",
      id: "gender-education-2024",
      excerpt:
        "In-depth analysis of gender disparities in education and effective interventions to promote equality.",
      image: euEducationImage,
    },
    {
      title: "Climate Adaptation Strategies for Smallholder Farmers",
      year: "2024",
      category: "Policy Brief",
      id: "climate-adaptation-2024",
      excerpt:
        "Evidence-based recommendations for building climate resilience in agricultural communities.",
      image: climateAgricultureImage,
    },
    {
      title: "Youth Employment in Central Africa: Challenges and Opportunities",
      year: "2023",
      category: "Evaluation",
      id: "youth-employment-2023",
      excerpt:
        "Analysis of youth employment trends and innovative solutions for job creation.",
      image: farmerAppImage,
    },
    {
      title: "Women's Economic Empowerment: Best Practices from Cameroon",
      year: "2025",
      category: "Case Study",
      id: "women-empowerment-2025",
      excerpt:
        "Successful strategies and lessons learned from women's entrepreneurship programs.",
      image: womenCooperativeImage,
    },
    {
      title: "Digital Literacy for Rural Communities",
      year: "2025",
      category: "Research Study",
      id: "digital-literacy-2025",
      excerpt:
        "Innovative approaches to bridging the digital divide in remote areas.",
      image:
        "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxOTc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const news = [
    {
      title: "Women's Entrepreneurship Hub Yaoundé",
      date: "Jan 15, 2026",
      category: "Launch",
      excerpt:
        "The new hub will provide training, mentorship, and access to financing for 500 women entrepreneurs across Cameroon.",
      image: womenCooperativeImage,
    },
    {
      title: "EU Regional Education Initiative",
      date: "Dec 20, 2025",
      category: "Partnership",
      excerpt:
        "New €12 million partnership will improve education quality and access for 200,000 children across Central Africa.",
      image: euEducationImage,
    },
    {
      title: "Climate Resilience Research",
      date: "Nov 30, 2025",
      category: "Research",
      excerpt:
        "Five-year study reveals effective strategies for smallholder farmers to adapt to climate change.",
      image: climateAgricultureImage,
    },
    {
      title: "Maternal Health Program Expansion",
      date: "Oct 18, 2025",
      category: "Health",
      excerpt:
        "Expanding maternal health services to reach 10,000 mothers in rural communities.",
      image: maternalHealthImage,
    },
    {
      title: "Digital Innovation for Farmers",
      date: "Sep 25, 2025",
      category: "Technology",
      excerpt:
        "New mobile app launched to help farmers access market information and weather forecasts.",
      image: farmerAppImage,
    },
    {
      title: "Water Access Projects Complete",
      date: "Aug 12, 2025",
      category: "Infrastructure",
      excerpt:
        "Successfully completed water and sanitation projects serving 25,000 people.",
      image: waterSanitationImage,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[62vh] sm:min-h-[70vh] lg:min-h-[79vh]">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`CIPCRE facilities ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-6 lg:w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-35 sm:py-42 lg:py-48 z-10 min-h-[62vh] sm:min-h-[70vh] lg:min-h-[79vh] flex items-end pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#1B5E20] text-white hover:bg-[#2E7D32] shadow-lg"
              >
                <Link to="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B5E20] shadow-lg"
              >
                <Link to="/documentation">
                  <span className="hidden sm:inline text-[#049945] font-bold">
                    Access Documentation Center
                  </span>
                  <span className="sm:hidden">Documentation</span>
                  <FileText className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-[#D4AF37] text-white hover:bg-[#B8941F] shadow-lg"
              >
                <Play className="mr-2 w-4 h-4 fill-current" />
                <span className="hidden sm:inline">Take a Guided Tour</span>
                <span className="sm:hidden">Guided Tour</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="p-3 lg:p-4 text-center border-none shadow-sm"
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#1B5E20] mx-auto mb-2" />
                  <div className="text-xl lg:text-2xl font-semibold text-[#1B5E20] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-xs text-neutral-600">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="mb-3 lg:mb-4 text-[24px] font-bold">About CIPCRE</h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            For nearly three decades, CIPCRE has been at the forefront of social
            transformation in Central Africa, working with communities,
            governments, and partners to create sustainable change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Mission */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1B5E20] rounded flex items-center justify-center mb-4 lg:mb-6 mx-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-3 lg:mb-4 text-[20px] font-bold">Mission</h3>
            <p className="text-sm lg:text-base text-neutral-700 leading-relaxed">
              To promote sustainable development and social justice through
              knowledge creation, capacity building, and evidence-based advocacy
              in partnership with communities and civil society organizations
              across Africa.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1B5E20] rounded flex items-center justify-center mb-4 lg:mb-6 mx-auto">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-3 lg:mb-4 text-[20px] font-bold">Vision</h3>
            <p className="text-sm lg:text-base text-neutral-700 leading-relaxed">
              A just and equitable Africa where all people, especially the most
              marginalized, have access to quality education, economic
              opportunities, and participate meaningfully in decisions that
              affect their lives.
            </p>
          </div>

          {/* Founding */}
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1B5E20] rounded flex items-center justify-center mb-4 lg:mb-6 mx-auto">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="mb-3 lg:mb-4 text-[20px] font-bold">
              Established 1997
            </h3>
            <p className="text-sm lg:text-base text-neutral-700 leading-relaxed">
              Founded in Yaoundé, Cameroon by a group of development
              practitioners, researchers, and civil society leaders committed to
              creating lasting social change through knowledge and collective
              action.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="mb-6 lg:mb-8 text-center text-[24px] font-bold">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-4 lg:p-6 text-center">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#1B5E20] mx-auto mb-3 lg:mb-4" />
                  <h4 className="mb-2 lg:mb-3">{value.title}</h4>
                  <p className="text-xs lg:text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizational Principles */}
      <section className="bg-white py-8 lg:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-6 lg:mb-8">
            <h2 className="mb-2 text-[20px] font-bold">
              Organizational Principles
            </h2>
            <p className="text-base lg:text-lg text-neutral-600 font-bold">
              Core values guiding our approach to sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {principles.map((principle, index) => {
              const colors = [
                { from: "#1B5E20", to: "#2E7D32", bg: "#1B5E20" },
                { from: "#2E7D32", to: "#388E3C", bg: "#2E7D32" },
                { from: "#388E3C", to: "#43A047", bg: "#388E3C" },
                { from: "#1B5E20", to: "#2E7D32", bg: "#1B5E20" },
                { from: "#2E7D32", to: "#388E3C", bg: "#2E7D32" },
                { from: "#388E3C", to: "#43A047", bg: "#388E3C" },
              ];
              const color = colors[index % colors.length];

              return (
                <Card
                  key={principle}
                  className="group relative overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-500 h-full"
                >
                  {/* Gradient Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${color.from}15, ${color.to}05)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-4 lg:p-5 flex flex-col h-full">
                    {/* Number Badge */}
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${color.from}, ${color.to})`,
                        }}
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <div
                        className="w-7 h-7 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundColor: color.bg }}
                      />
                    </div>

                    {/* Text */}
                    <p className="text-sm lg:text-base font-semibold text-neutral-700 leading-relaxed flex-1 group-hover:text-neutral-900 transition-colors duration-300">
                      {principle}
                    </p>

                    {/* Decorative Element */}
                    <div className="mt-3 pt-3 border-t border-neutral-200 group-hover:border-opacity-0 transition-all duration-300">
                      <div
                        className="h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                        style={{
                          background: `linear-gradient(90deg, ${color.from}, ${color.to})`,
                        }}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Programs Preview */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="mb-8 lg:mb-12">
          <h2 className="mb-2 lg:mb-3 text-[20px] font-bold">Our Programs</h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl">
            We implement integrated programs that address critical development
            challenges across education, agriculture, economic empowerment, and
            governance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Program 1: Agriculture */}
          <Link to="/programs" className="block group">
            <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1744726010540-bf318d4a691f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVycyUyMHN1c3RhaW5hYmxlJTIwYWdyaWN1bHR1cmUlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3Mzk1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Agriculture & Sustainable Entrepreneurship"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon Badge on Image */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <Sprout className="w-7 h-7 text-[#1B5E20]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="mb-3 text-lg lg:text-xl font-bold text-neutral-900 leading-tight">
                  Agriculture, Sustainable Entrepreneurship & Community Hygiene
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-neutral-600 mb-4 leading-relaxed">
                  Promoting agroecological and organic value chains,
                  eco-entrepreneurship for youth and women, and strengthening
                  community resilience to climate change
                </p>

                {/* Footer with Badge and Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <Badge className="bg-[#1B5E20]/10 text-[#1B5E20] border-none text-xs font-semibold">
                    5 Regions
                  </Badge>
                  <div className="flex items-center gap-2 text-[#1B5E20] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Program 2: Peace & Social Cohesion */}
          <Link to="/programs" className="block group">
            <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1655720359248-eeace8c709c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwcGVhY2UlMjBoYW5kcyUyMHRvZ2V0aGVyJTIwdW5pdHl8ZW58MXx8fHwxNzczOTU5MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Peace & Social Cohesion"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon Badge on Image */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-[#D4AF37]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="mb-3 text-lg lg:text-xl font-bold text-neutral-900 leading-tight">
                  Peace & Social Cohesion
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-neutral-600 mb-4 leading-relaxed">
                  Preventing drug use in schools, managing land and agropastoral
                  conflicts, and promoting peace through community mediation and
                  cultural activities
                </p>

                {/* Footer with Badge and Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-none text-xs font-semibold">
                    All Regions
                  </Badge>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Program 3: Human Rights */}
          <Link to="/programs" className="block group">
            <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1719468572346-c721348dcd85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBzdHVkZW50cyUyMHBhcnRpY2lwYXRpb24lMjBkZW1vY3JhY3l8ZW58MXx8fHwxNzczOTU5MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Human Rights & Citizen Participation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon Badge on Image */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <Scale className="w-7 h-7 text-[#388E3C]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Title */}
                <h3 className="mb-3 text-lg lg:text-xl font-bold text-neutral-900 leading-tight">
                  Human Rights & Citizen Participation
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-neutral-600 mb-4 leading-relaxed">
                  Promoting positive parenting, protecting children against
                  violence, and supporting youth participation in democratic
                  processes
                </p>

                {/* Footer with Badge and Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <Badge className="bg-[#388E3C]/10 text-[#388E3C] border-none text-xs font-semibold">
                    5 Regions
                  </Badge>
                  <div className="flex items-center gap-2 text-[#388E3C] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="mt-10 lg:mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white hover:from-[#2E7D32] hover:to-[#1B5E20] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/programs">
              Explore All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Institutional Documents */}
      <section className="bg-neutral-50 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 lg:mb-8 gap-4">
            <div>
              <h2 className="mb-2 lg:mb-3 text-[20px] font-bold">
                Institutional Documents
              </h2>
              <p className="text-sm lg:text-base text-neutral-600 font-bold">
                Key institutional and policy documents
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="lg:size-default"
            >
              <Link to="/documentation">
                View All Documents
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] opacity-5 group-hover:opacity-10 transition-opacity" />

              <div className="relative p-6">
                {/* Icon with colored background */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>

                <h4 className="mb-3 text-sm font-bold group-hover:text-[#1B5E20] transition-colors">
                  Strategic Plan 2024-2028
                </h4>

                <div className="flex items-center gap-3 mb-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2024</span>
                  </div>
                  <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                  <span>2.4 MB</span>
                </div>

                <p className="text-xs text-neutral-600 mb-4 leading-relaxed line-clamp-2">
                  Our strategic roadmap for sustainable development and social
                  impact across Central Africa.
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs group-hover:bg-[#1B5E20] group-hover:text-white group-hover:border-[#1B5E20] transition-all"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-5 group-hover:opacity-10 transition-opacity" />

              <div className="relative p-6">
                {/* Icon with colored background */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Scale className="w-7 h-7 text-white" />
                </div>

                <h4 className="mb-3 text-sm font-bold group-hover:text-[#D4AF37] transition-colors">
                  Organizational Statutes
                </h4>

                <div className="flex items-center gap-3 mb-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2023</span>
                  </div>
                  <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                  <span>1.2 MB</span>
                </div>

                <p className="text-xs text-neutral-600 mb-4 leading-relaxed line-clamp-2">
                  Official statutes defining our governance structure, mission,
                  and operational framework.
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs group-hover:bg-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37] transition-all"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] opacity-5 group-hover:opacity-10 transition-opacity" />

              <div className="relative p-6">
                {/* Icon with colored background */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#388E3C] to-[#1B5E20] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>

                <h4 className="mb-3 text-sm font-bold group-hover:text-[#1B5E20] transition-colors">
                  Code of Conduct
                </h4>

                <div className="flex items-center gap-3 mb-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2023</span>
                  </div>
                  <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                  <span>850 KB</span>
                </div>

                <p className="text-xs text-neutral-600 mb-4 leading-relaxed line-clamp-2">
                  Ethical guidelines and professional standards for staff,
                  partners, and stakeholders.
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs group-hover:bg-[#1B5E20] group-hover:text-white group-hover:border-[#1B5E20] transition-all"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>

            <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-5 group-hover:opacity-10 transition-opacity" />

              <div className="relative p-6">
                {/* Icon with colored background */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#B8941F] to-[#8B6F1A] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>

                <h4 className="mb-3 text-sm font-bold group-hover:text-[#D4AF37] transition-colors">
                  Financial Audit Report 2025
                </h4>

                <div className="flex items-center gap-3 mb-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>2025</span>
                  </div>
                  <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                  <span>3.1 MB</span>
                </div>

                <p className="text-xs text-neutral-600 mb-4 leading-relaxed line-clamp-2">
                  Independent financial audit demonstrating transparency and
                  accountability in resource management.
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs group-hover:bg-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37] transition-all"
                >
                  <Download className="w-3 h-3 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 lg:mb-12 gap-4">
          <div>
            <h2 className="mb-2 lg:mb-3 text-[20px] font-bold">
              Latest Publications
            </h2>
            <p className="text-base lg:text-lg text-neutral-600 font-bold">
              Access our research, reports, and knowledge resources
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="lg:size-default"
          >
            <Link to="/documentation">
              View All Documents
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Grid with news-style cards - Single row with 6 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {publications.map((pub) => (
            <Link key={pub.id} to="/documentation/$id" params={{ id: pub.id }}>
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-none shadow-md h-full">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <ImageWithFallback
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge on image */}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-white/95 backdrop-blur-sm text-[#1B5E20] border-none shadow-lg text-[10px] font-semibold hover:bg-white px-1.5 py-0.5">
                      {pub.category}
                    </Badge>
                  </div>

                  {/* Year badge on image */}
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="outline"
                      className="bg-[#1B5E20]/90 backdrop-blur-sm text-white border-none shadow-lg text-[10px] font-semibold px-1.5 py-0.5"
                    >
                      {pub.year}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h4 className="text-xs mb-1.5 leading-tight font-semibold group-hover:text-[#1B5E20] transition-colors line-clamp-2">
                    {pub.title}
                  </h4>
                  <div className="flex items-center text-[#1B5E20] text-[10px] font-medium group-hover:gap-1 transition-all">
                    <span>View</span>
                    <ArrowRight className="ml-0.5 w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-neutral-50 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 lg:mb-12 gap-4">
            <div>
              <h2 className="mb-2 lg:mb-3 text-[20px] font-bold">
                Latest News
              </h2>
              <p className="text-base lg:text-lg text-neutral-600 font-bold">
                Stay updated on our activities and impact
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="lg:size-default"
            >
              <Link to="/news">
                View All News
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {news.map((item) => (
              <Link key={item.title} to="/news" className="block group">
                <Card className="relative overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-500 h-full">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative">
                    {/* Image Container */}
                    <div className="relative h-24 lg:h-28 overflow-hidden bg-neutral-100">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Category Badge on Image */}
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-white/95 backdrop-blur-sm text-[#1B5E20] border-none shadow-md font-semibold text-[9px] px-1.5 py-0.5">
                          {item.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-3 lg:p-4">
                      {/* Date */}
                      <div className="flex items-center gap-1 mb-2 text-neutral-500">
                        <Calendar className="w-3 h-3" />
                        <span className="text-[10px]">{item.date}</span>
                      </div>

                      <h4 className="mb-2 text-xs font-bold group-hover:text-[#1B5E20] transition-colors duration-300 line-clamp-2 leading-snug">
                        {item.title}
                      </h4>

                      {/* Arrow Indicator */}
                      <div className="flex items-center text-[#1B5E20] text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span>Read</span>
                        <ArrowRight className="ml-0.5 w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-0.5 bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements and Partnerships */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-8 lg:mb-12">
            <h2 className="mb-2 lg:mb-3 text-[20px] font-bold">
              Our Impact in Action
            </h2>
            <p className="text-base lg:text-lg text-neutral-600 max-w-3xl">
              Key achievements and strategic partnerships driving change across
              education, agriculture, health, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Partnership 1: EU Education */}
            <Link to="/partnerships" className="block group">
              <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg lg:text-xl font-bold group-hover:text-white transition-colors duration-300 leading-tight">
                    EU Regional Education Partnership
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-neutral-600 group-hover:text-white/90 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                    €12 million partnership improving education quality and
                    access for 200,000 children across Central Africa
                  </p>

                  {/* Footer with Badge and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-white/20 transition-colors duration-300">
                    <Badge className="bg-[#1B5E20]/10 text-[#1B5E20] border-none group-hover:bg-white/20 group-hover:text-white text-xs font-semibold transition-all duration-300">
                      Partnership
                    </Badge>
                    <div className="flex items-center gap-2 text-[#1B5E20] group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2E7D32]/10 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
              </Card>
            </Link>

            {/* Program 2: Climate Resilience */}
            <Link to="/programs" className="block group">
              <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Sprout className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg lg:text-xl font-bold group-hover:text-white transition-colors duration-300 leading-tight">
                    Climate-Resilient Agriculture
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-neutral-600 group-hover:text-white/90 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                    Supporting 15,000 smallholder farmers across 8 regions with
                    sustainable farming practices and climate adaptation
                  </p>

                  {/* Footer with Badge and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-white/20 transition-colors duration-300">
                    <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-none group-hover:bg-white/20 group-hover:text-white text-xs font-semibold transition-all duration-300">
                      Agriculture
                    </Badge>
                    <div className="flex items-center gap-2 text-[#D4AF37] group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
              </Card>
            </Link>

            {/* Program 3: Digital Innovation */}
            <Link to="/programs" className="block group">
              <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg lg:text-xl font-bold group-hover:text-white transition-colors duration-300 leading-tight">
                    Digital Tools for Farmers
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-neutral-600 group-hover:text-white/90 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                    Mobile app with 10,000+ downloads connecting 50 villages
                    with market information and weather forecasts
                  </p>

                  {/* Footer with Badge and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-white/20 transition-colors duration-300">
                    <Badge className="bg-[#1B5E20]/10 text-[#1B5E20] border-none group-hover:bg-white/20 group-hover:text-white text-xs font-semibold transition-all duration-300">
                      Innovation
                    </Badge>
                    <div className="flex items-center gap-2 text-[#1B5E20] group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1B5E20]/10 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
              </Card>
            </Link>

            {/* Program 4: Maternal Health */}
            <Link to="/programs" className="block group">
              <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg lg:text-xl font-bold group-hover:text-white transition-colors duration-300 leading-tight">
                    Maternal Health Services
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-neutral-600 group-hover:text-white/90 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                    Expanding maternal health services to reach 10,000+ mothers
                    in rural communities with 95% satisfaction rate
                  </p>

                  {/* Footer with Badge and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-white/20 transition-colors duration-300">
                    <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-none group-hover:bg-white/20 group-hover:text-white text-xs font-semibold transition-all duration-300">
                      Health
                    </Badge>
                    <div className="flex items-center gap-2 text-[#D4AF37] group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
              </Card>
            </Link>

            {/* Program 5: Water Access */}
            <Link to="/programs" className="block group">
              <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg lg:text-xl font-bold group-hover:text-white transition-colors duration-300 leading-tight">
                    Water & Sanitation Projects
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-neutral-600 group-hover:text-white/90 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                    Serving 25,000 people through 45 constructed wells and
                    comprehensive water access infrastructure
                  </p>

                  {/* Footer with Badge and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-white/20 transition-colors duration-300">
                    <Badge className="bg-[#1B5E20]/10 text-[#1B5E20] border-none group-hover:bg-white/20 group-hover:text-white text-xs font-semibold transition-all duration-300">
                      Infrastructure
                    </Badge>
                    <div className="flex items-center gap-2 text-[#1B5E20] group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2E7D32]/10 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
              </Card>
            </Link>

            {/* Program 6: Women's Empowerment */}
            <Link to="/programs" className="block group">
              <Card className="relative overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg lg:text-xl font-bold group-hover:text-white transition-colors duration-300 leading-tight">
                    Women's Economic Empowerment
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-neutral-600 group-hover:text-white/90 mb-6 leading-relaxed flex-grow transition-colors duration-300">
                    Supporting 2,500 women through 150 cooperative groups with
                    training, financing, and market access
                  </p>

                  {/* Footer with Badge and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-white/20 transition-colors duration-300">
                    <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-none group-hover:bg-white/20 group-hover:text-white text-xs font-semibold transition-all duration-300">
                      Empowerment
                    </Badge>
                    <div className="flex items-center gap-2 text-[#D4AF37] group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full group-hover:scale-150 group-hover:bg-white/10 transition-all duration-700" />
              </Card>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white"
            >
              <Link to="/partnerships">
                View All Partnerships & Achievements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://notebooklm.google.com/notebook/d8e8dbaf-1e29-4d3e-b016-fe52f6bbc8ca?artifactId=c6dbfb07-c737-40ac-b512-7ee2a55ce4b2"
        title={t("Guided Tour of CIPCRE", "Visite Guidée du CIPCRE")}
      />
    </div>
  );
}
