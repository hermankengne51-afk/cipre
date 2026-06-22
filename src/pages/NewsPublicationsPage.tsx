import maternalHealthImage from "figma:asset/3ddffdebb2dbc873c904a9ce4bfbaff67357ee9c.png";
import digitalLiteracyImage from "figma:asset/4bdec7fba72b8feee23ea5c1d1316abc1860b6b1.png";
import partnershipAfDBImage from "figma:asset/4e13e95f72df7beb7e0bd75f2e267a7095f13528.png";
import womenCooperativeImage from "figma:asset/5e262c780ca737e5dd8965928fba0467f0727e07.png";
import awardCeremonyImage from "figma:asset/37f957e108d3b376b388c8fe1d369f4875ddc1ee.png";
import euEducationImage from "figma:asset/55b1be532d0aa323946022b9fcf2392769b86bc7.png";
import climateAgricultureImage from "figma:asset/154fda0f400f1374ac6c50b0a88a3c0c3c38c7b6.png";
import farmerAppImage from "figma:asset/2318b4e87cada8208c2922e5fe0b5a7d77f6cb75.png";
import communityRadioImage from "figma:asset/bf200dca3b55b8380498e1ba1c08fcfc8ba7e71b.png";
import foodSecurityImage from "figma:asset/c55245576109fd728721527fb712da300f509bed.png";
import waterSanitationImage from "figma:asset/d62768ea3a0aa3953ddb46e6e5e1c7fd83b8fde2.png";
import youthLeadershipImage from "figma:asset/e19f113888fe59b089a5b7c11eeab959b5a60a98.png";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, FileText, Tag } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useLanguage } from "../contexts/LanguageContext";

export function NewsPublicationsPage() {
  const { t } = useLanguage();
  const [selectedTheme, setSelectedTheme] = useState<string>("all");

  const themes = [
    "All",
    "Education",
    "Agriculture",
    "Gender",
    "Governance",
    "Health",
  ];

  const newsItems = [
    {
      slug: "womens-entrepreneurship-hub-yaounde",
      title: "CIPCRE Launches New Women's Entrepreneurship Hub in Yaoundé",
      date: "January 15, 2026",
      category: "Program Launch",
      theme: "Gender",
      excerpt:
        "The new hub will provide training, mentorship, and access to financing for 500 women entrepreneurs across Cameroon.",
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzAxMjg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "partnership-eu-education",
      title: "Partnership with EU for Regional Education Initiative",
      date: "December 20, 2025",
      category: "Partnership",
      theme: "Education",
      excerpt:
        "New €12 million partnership will improve education quality and access for 200,000 children across Central Africa.",
      image: euEducationImage,
    },
    {
      slug: "climate-resilience-agriculture",
      title: "New Research Published on Climate Resilience in Agriculture",
      date: "November 30, 2025",
      category: "Research",
      theme: "Agriculture",
      excerpt:
        "Five-year study reveals effective strategies for smallholder farmers to adapt to climate change.",
      image: climateAgricultureImage,
    },
    {
      slug: "regional-conference-civil-society",
      title: "CIPCRE Hosts Regional Conference on Civil Society Strengthening",
      date: "November 10, 2025",
      category: "Event",
      theme: "Governance",
      excerpt:
        "200 civil society leaders from 12 countries convened to discuss governance challenges and opportunities.",
      image:
        "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzAyMDAxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "youth-employment-impact",
      title: "Impact Evaluation Shows 78% Increase in Youth Employment",
      date: "October 25, 2025",
      category: "Impact",
      theme: "Education",
      excerpt:
        "Independent evaluation of our youth skills program shows significant improvements in employment outcomes.",
      image:
        "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzAxOTI4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "farmer-app-market-access",
      title: "New Mobile App Connects Farmers to Market Opportunities",
      date: "September 15, 2025",
      category: "Innovation",
      theme: "Agriculture",
      excerpt:
        "Digital platform helps 10,000 smallholder farmers access better prices and reduce post-harvest losses.",
      image: farmerAppImage,
    },
    {
      slug: "maternal-health-rural-women",
      title: "Maternal Health Program Reaches 50,000 Women in Rural Areas",
      date: "August 20, 2025",
      category: "Impact",
      theme: "Health",
      excerpt:
        "Community-based health initiative improves access to prenatal care and reduces maternal mortality rates.",
      image: maternalHealthImage,
    },
    {
      slug: "award-civil-society-leadership",
      title: "CIPCRE Wins Award for Excellence in Civil Society Leadership",
      date: "July 30, 2025",
      category: "Award",
      theme: "Governance",
      excerpt:
        "Pan-African Foundation recognizes CIPCRE's innovative approaches to community development and advocacy.",
      image: awardCeremonyImage,
    },
    {
      slug: "teacher-training-educators",
      title: "Teacher Training Program Graduates 1,200 Educators",
      date: "July 10, 2025",
      category: "Program Launch",
      theme: "Education",
      excerpt:
        "Comprehensive professional development program enhances teaching quality across 300 schools.",
      image:
        "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxOTc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "water-sanitation-project",
      title: "Water and Sanitation Project Benefits 80,000 People",
      date: "June 25, 2025",
      category: "Impact",
      theme: "Health",
      excerpt:
        "Infrastructure improvements bring clean water and improved sanitation to 45 rural communities.",
      image: waterSanitationImage,
    },
    {
      slug: "partnership-african-development-bank",
      title: "New Partnership with African Development Bank",
      date: "June 5, 2025",
      category: "Partnership",
      theme: "Governance",
      excerpt:
        "Strategic collaboration will support governance and institutional capacity building across the region.",
      image: partnershipAfDBImage,
    },
    {
      slug: "climate-smart-agriculture-pilot",
      title: "Climate-Smart Agriculture Pilot Shows Promising Results",
      date: "May 20, 2025",
      category: "Research",
      theme: "Agriculture",
      excerpt:
        "Innovative farming techniques increase yields by 45% while reducing environmental impact.",
      image:
        "https://images.unsplash.com/photo-1721928005280-a5ac7cc2c50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN1c3RhaW5hYmxlJTIwZmFybWluZ3xlbnwxfHx8fDE3NzAyMDAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "womens-cooperative-income-increase",
      title: "Women's Cooperative Increases Income by 65%",
      date: "May 5, 2025",
      category: "Impact",
      theme: "Gender",
      excerpt:
        "Collective business model and skills training transform economic opportunities for 300 women.",
      image: womenCooperativeImage,
    },
    {
      slug: "digital-literacy-youth",
      title: "Digital Literacy Program Reaches 15,000 Youth",
      date: "April 18, 2025",
      category: "Program Launch",
      theme: "Education",
      excerpt:
        "Technology training opens new employment pathways for young people in underserved communities.",
      image: digitalLiteracyImage,
    },
    {
      slug: "community-radio-network-expansion",
      title: "Community Radio Network Expands to 8 New Stations",
      date: "April 1, 2025",
      category: "Innovation",
      theme: "Governance",
      excerpt:
        "Local media initiatives strengthen information access and civic engagement in rural areas.",
      image: communityRadioImage,
    },
    {
      slug: "food-security-policy-recommendations",
      title: "CIPCRE Publishes Policy Recommendations on Food Security",
      date: "March 15, 2025",
      category: "Research",
      theme: "Agriculture",
      excerpt:
        "Evidence-based policy brief provides roadmap for regional food security and nutrition improvements.",
      image: foodSecurityImage,
    },
    {
      slug: "youth-leadership-academy-third-campus",
      title: "Youth Leadership Academy Opens Third Campus",
      date: "February 28, 2025",
      category: "Program Launch",
      theme: "Education",
      excerpt:
        "Expanded capacity allows 500 more young leaders to access leadership development programs annually.",
      image: youthLeadershipImage,
    },
    {
      slug: "healthcare-workers-training",
      title: "Healthcare Workers Trained in 12 Countries",
      date: "February 10, 2025",
      category: "Impact",
      theme: "Health",
      excerpt:
        "Regional training program improves healthcare delivery and emergency response capabilities.",
      image:
        "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5hbCUyMGhlYWx0aCUyMGFmcmljYXxlbnwxfHx8fDE3MzgwOTExNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "financial-inclusion-entrepreneurs",
      title: "Financial Inclusion Program Supports 25,000 Entrepreneurs",
      date: "January 25, 2025",
      category: "Impact",
      theme: "Gender",
      excerpt:
        "Microfinance and business training enable economic independence for marginalized communities.",
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzAxMjg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      slug: "regional-advocacy-policy-change",
      title: "Regional Advocacy Campaign Influences Policy Change",
      date: "January 5, 2025",
      category: "Award",
      theme: "Governance",
      excerpt:
        "Multi-country advocacy effort leads to adoption of progressive education policies benefiting 500,000 children.",
      image:
        "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzAyMDAxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const publications = [
    {
      id: "annual-2025",
      title: "Annual Report 2025",
      year: "2025",
      type: "Annual Report",
      pages: 84,
    },
    {
      id: "gender-education-2024",
      title: "Gender Equality in Education: A Five-Year Study",
      year: "2024",
      type: "Research",
      pages: 126,
    },
    {
      id: "climate-adaptation-2024",
      title: "Climate Adaptation Strategies",
      year: "2024",
      type: "Policy Brief",
      pages: 32,
    },
    {
      id: "youth-employment-2023",
      title: "Youth Employment in Central Africa",
      year: "2023",
      type: "Evaluation",
      pages: 68,
    },
    {
      id: "women-empowerment-2025",
      title: "Women's Economic Empowerment: Best Practices from Cameroon",
      year: "2025",
      type: "Case Study",
      pages: 52,
    },
    {
      id: "digital-literacy-2025",
      title: "Digital Literacy for Rural Communities",
      year: "2025",
      type: "Research",
      pages: 94,
    },
    {
      id: "food-security-2024",
      title: "Food Security and Sustainable Agriculture in Central Africa",
      year: "2024",
      type: "Policy Brief",
      pages: 45,
    },
    {
      id: "civil-society-2024",
      title: "Civil Society Strengthening: A Regional Assessment",
      year: "2024",
      type: "Evaluation",
      pages: 108,
    },
    {
      id: "education-quality-2025",
      title: "Education Quality Improvement Program - Final Report",
      year: "2025",
      type: "Program Report",
      pages: 156,
    },
    {
      id: "climate-impact-2024",
      title: "Climate Change Impact on Agricultural Livelihoods",
      year: "2024",
      type: "Research",
      pages: 112,
    },
    {
      id: "youth-leadership-2025",
      title: "Youth Leadership Development: Lessons Learned",
      year: "2025",
      type: "Case Study",
      pages: 64,
    },
    {
      id: "governance-2024",
      title: "Governance and Transparency in Local Development",
      year: "2024",
      type: "Policy Brief",
      pages: 38,
    },
    {
      id: "maternal-health-2025",
      title: "Maternal Health Access in Rural Areas",
      year: "2025",
      type: "Research",
      pages: 88,
    },
    {
      id: "entrepreneurship-2024",
      title: "Entrepreneurship Training Impact Assessment",
      year: "2024",
      type: "Evaluation",
      pages: 72,
    },
    {
      id: "resource-management-2025",
      title: "Community-Based Natural Resource Management",
      year: "2025",
      type: "Case Study",
      pages: 58,
    },
    {
      id: "financial-inclusion-2024",
      title: "Financial Inclusion for Women Entrepreneurs",
      year: "2024",
      type: "Policy Brief",
      pages: 42,
    },
    {
      id: "teacher-training-2025",
      title: "Teacher Training and Professional Development Study",
      year: "2025",
      type: "Research",
      pages: 134,
    },
    {
      id: "water-sanitation-2024",
      title: "Water and Sanitation Infrastructure Assessment",
      year: "2024",
      type: "Evaluation",
      pages: 96,
    },
    {
      id: "advocacy-success-2025",
      title: "Advocacy for Policy Change: Success Stories",
      year: "2025",
      type: "Case Study",
      pages: 76,
    },
    {
      id: "inclusive-education-2024",
      title: "Inclusive Education for Children with Disabilities",
      year: "2024",
      type: "Policy Brief",
      pages: 48,
    },
  ];

  const filteredNews =
    selectedTheme === "all"
      ? newsItems
      : newsItems.filter(
          (item) => item.theme.toLowerCase() === selectedTheme.toLowerCase(),
        );

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
            <FileText className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide">
              {t("news.hero.badge")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight max-w-4xl">
            {t("news.hero.title")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t("news.hero.description")}
          </p>
        </div>
      </section>

      {/* Theme Filter */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B5E20]/5 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center">
                <Tag className="w-4 h-4 text-[#1B5E20]" />
              </div>
              <span className="text-sm font-semibold text-neutral-700">
                Filter by theme:
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {themes.map((theme) => (
                <Button
                  key={theme}
                  variant={
                    selectedTheme === theme.toLowerCase()
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedTheme(theme.toLowerCase())}
                  className={
                    selectedTheme === theme.toLowerCase()
                      ? "bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] shadow-md"
                      : "border-2 border-neutral-300 hover:border-[#1B5E20] hover:bg-[#1B5E20]/5 transition-all"
                  }
                >
                  {theme}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-[1440px] mx-auto px-12 py-12">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="mb-8 bg-gradient-to-r from-[#1B5E20]/5 to-[#2E7D32]/5 p-1.5 border border-[#1B5E20]/20">
            <TabsTrigger
              value="news"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1B5E20] data-[state=active]:to-[#2E7D32] data-[state=active]:text-white"
            >
              News & Updates
            </TabsTrigger>
            <TabsTrigger
              value="publications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1B5E20] data-[state=active]:to-[#2E7D32] data-[state=active]:text-white"
            >
              Recent Publications
            </TabsTrigger>
          </TabsList>

          {/* News Tab */}
          <TabsContent value="news">
            <div className="grid grid-cols-4 gap-6">
              {filteredNews.map((item) => (
                <Link
                  key={item.title}
                  to="/news/$slug"
                  params={{ slug: item.slug }}
                  className="block"
                >
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-l-4 border-l-transparent hover:border-l-[#1B5E20] cursor-pointer h-full">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="h-56 overflow-hidden bg-neutral-200 relative">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Decorative corner accent */}
                      <div
                        className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                      />
                    </div>
                    <div className="p-6 relative">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-200 w-fit">
                        <Calendar className="w-3.5 h-3.5 text-[#1B5E20]" />
                        <span className="font-medium">{item.date}</span>
                      </div>
                      <Badge className="mb-3 bg-gradient-to-r from-[#1B5E20]/10 to-[#2E7D32]/10 text-[#1B5E20] border border-[#1B5E20]/20 hover:from-[#1B5E20] hover:to-[#2E7D32] hover:text-white transition-all">
                        {item.category}
                      </Badge>
                      <h3 className="mb-3 leading-snug font-semibold group-hover:text-[#1B5E20] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                        {item.excerpt}
                      </p>
                      <div className="text-[#1B5E20] hover:text-[#2E7D32] p-0 group/btn transition-colors flex items-center font-semibold">
                        <span>Read Full Story</span>
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications">
            <div className="grid grid-cols-4 gap-6">
              {publications.map((pub) => (
                <Card
                  key={pub.id}
                  className="group relative p-6 hover:shadow-2xl transition-all duration-500 border-t-4 border-t-transparent hover:border-t-[#1B5E20] overflow-hidden"
                >
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all">
                      <FileText className="w-8 h-8 text-[#1B5E20]" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="mb-3 text-xs bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30"
                    >
                      {pub.type}
                    </Badge>
                    <h4 className="mb-3 leading-snug font-semibold group-hover:text-[#1B5E20] transition-colors">
                      {pub.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4 bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-100">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1B5E20]" />
                        <span className="font-medium">{pub.year}</span>
                      </div>
                      <span className="text-neutral-400">•</span>
                      <span>{pub.pages} pages</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      <Link to="/documentation/$id" params={{ id: pub.id }}>
                        <span>View Document</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button
                asChild
                variant="outline"
                className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all duration-300 px-8 py-6 shadow-lg hover:shadow-xl group"
              >
                <Link to="/documentation">
                  <span className="font-semibold">View All Publications</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
