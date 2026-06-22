import cipcreHeadquartersImage from "figma:asset/3ddffdebb2dbc873c904a9ce4bfbaff67357ee9c.png";
import partnershipMeetingImage from "figma:asset/4e13e95f72df7beb7e0bd75f2e267a7095f13528.png";
import cipcreCeremonyImage from "figma:asset/37f957e108d3b376b388c8fe1d369f4875ddc1ee.png";
import youthSkillsImage from "figma:asset/55b1be532d0aa323946022b9fcf2392769b86bc7.png";
import womenAgricultureImage from "figma:asset/154fda0f400f1374ac6c50b0a88a3c0c3c38c7b6.png";
import conferenceRoomImage from "figma:asset/a20eb052cb51af7ed52ead82c92e9e2e255726f8.png";
import sportsCourtImage from "figma:asset/aabd3465c1f7f1ef5a5ffdc8e159419fa67451a0.png";
import ecoMarketImage from "figma:asset/c55245576109fd728721527fb712da300f509bed.png";
import bioShopImage from "figma:asset/d00262b0636f2513a00af86d257bc2a84675440a.png";
import waterPumpProjectImage from "figma:asset/d62768ea3a0aa3953ddb46e6e5e1c7fd83b8fde2.png";
import cipcreComplexImage from "figma:asset/e729dcd5906d92c911e3f40eb2d42f423fbf19cb.png";
import { Download, Image, Video } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { VideoModal } from "../components/VideoModal";
import { useLanguage } from "../contexts/LanguageContext";

export function MediaPage() {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const photos = [
    {
      title: "CIPCRE Sports Court & Recreation Facilities",
      program: "Infrastructure",
      year: "2025",
      location: "Cameroon",
      image: sportsCourtImage,
    },
    {
      title: "Conference Room - CIPCRE Headquarters",
      program: "Infrastructure",
      year: "2025",
      location: "Cameroon",
      image: conferenceRoomImage,
    },
    {
      title: "Documentation Center Opening Ceremony",
      program: "Knowledge Management",
      year: "2025",
      location: "Cameroon",
      image: cipcreHeadquartersImage,
    },
    {
      title: "CIPCRE Campus & Garden Complex",
      program: "Infrastructure",
      year: "2025",
      location: "Cameroon",
      image: cipcreComplexImage,
    },
    {
      title: "Bio-Santé Organic Products Store - Community Initiative",
      program: "Sustainable Agriculture",
      year: "2025",
      location: "Cameroon",
      image: bioShopImage,
    },
    {
      title: "Eco-Market Ngaoundere - Organic Products Fair",
      program: "Sustainable Agriculture",
      year: "2025",
      location: "Cameroon",
      image: ecoMarketImage,
    },
    {
      title: "Women's Entrepreneurship Training - Yaoundé",
      program: "Women's Economic Empowerment",
      year: "2025",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzAxMjg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Youth Skills Development Program",
      program: "Education & Youth",
      year: "2025",
      location: "Chad",
      image: youthSkillsImage,
    },
    {
      title: "Sustainable Agriculture Workshop",
      program: "Sustainable Agriculture",
      year: "2024",
      location: "Gabon",
      image: womenAgricultureImage,
    },
    {
      title: "Civil Society Conference",
      program: "Governance & Advocacy",
      year: "2025",
      location: "Cameroon",
      image: cipcreCeremonyImage,
    },
    {
      title: "Community Development Project",
      program: "Multi-sectoral",
      year: "2024",
      location: "CAR",
      image:
        "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzAxOTI4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Research Documentation Session",
      program: "Knowledge Management",
      year: "2025",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1565307961646-5269939b5b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZXNlYXJjaHxlbnwxfHx8fDE3NzAyMDAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Maternal Health Community Outreach",
      program: "Health & Nutrition",
      year: "2025",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5hbCUyMGhlYWx0aCUyMGFmcmljYXxlbnwxfHx8fDE3MzgwOTExNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Teacher Training Workshop",
      program: "Education & Youth",
      year: "2024",
      location: "Congo",
      image:
        "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxOTc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Climate-Smart Farming Demonstration",
      program: "Sustainable Agriculture",
      year: "2025",
      location: "Gabon",
      image:
        "https://images.unsplash.com/photo-1721928005280-a5ac7cc2c50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN1c3RhaW5hYmxlJTIwZmFybWluZ3xlbnwxfHx8fDE3NzAyMDAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Women's Cooperative Launch",
      program: "Women's Economic Empowerment",
      year: "2024",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzAxMjg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Regional Advocacy Meeting",
      program: "Governance & Advocacy",
      year: "2025",
      location: "Chad",
      image: partnershipMeetingImage,
    },
    {
      title: "Water and Sanitation Infrastructure",
      program: "Health & Nutrition",
      year: "2024",
      location: "CAR",
      image: waterPumpProjectImage,
    },
    {
      title: "Digital Literacy Training for Youth",
      program: "Education & Youth",
      year: "2025",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxOTc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Farmer Market Access Initiative",
      program: "Sustainable Agriculture",
      year: "2024",
      location: "Gabon",
      image:
        "https://images.unsplash.com/photo-1721928005280-a5ac7cc2c50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN1c3RhaW5hYmxlJTIwZmFybWluZ3xlbnwxfHx8fDE3NzAyMDAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Community Radio Launch Event",
      program: "Governance & Advocacy",
      year: "2025",
      location: "Congo",
      image:
        "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzAyMDAxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Financial Inclusion Workshop",
      program: "Women's Economic Empowerment",
      year: "2024",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzAxMjg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Youth Leadership Academy Graduation",
      program: "Education & Youth",
      year: "2025",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzAxOTI4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Healthcare Worker Training Program",
      program: "Health & Nutrition",
      year: "2024",
      location: "Chad",
      image:
        "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRlcm5hbCUyMGhlYWx0aCUyMGFmcmljYXxlbnwxfHx8fDE3MzgwOTExNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Policy Dialogue on Education Reform",
      program: "Governance & Advocacy",
      year: "2025",
      location: "Cameroon",
      image:
        "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzAyMDAxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const videos = [
    {
      title: "🎥 Guided Tour of CIPCRE - Discover Our Organization",
      titleFr: "🎥 Visite Guidée du CIPCRE - Découvrez Notre Organisation",
      duration: "Audio",
      program: "Organizational",
      year: "2026",
      videoUrl:
        "https://notebooklm.google.com/notebook/d8e8dbaf-1e29-4d3e-b016-fe52f6bbc8ca?artifactId=c6dbfb07-c737-40ac-b512-7ee2a55ce4b2",
      featured: true,
    },
    {
      title: "CIPCRE Annual Report 2025 - Year in Review",
      duration: "8:45",
      program: "Organizational",
      year: "2025",
    },
    {
      title: "Women Entrepreneurs Share Their Success Stories",
      duration: "12:30",
      program: "Women's Economic Empowerment",
      year: "2025",
    },
    {
      title: "Climate-Smart Agriculture: Farmer Testimonials",
      duration: "15:20",
      program: "Sustainable Agriculture",
      year: "2024",
    },
    {
      title: "Youth Leadership Summit Highlights",
      duration: "6:15",
      program: "Education & Youth",
      year: "2025",
    },
    {
      title: "Impact Documentary: 25 Years of Social Transformation",
      duration: "28:40",
      program: "Organizational",
      year: "2023",
    },
    {
      title: "Community Voices: Governance and Participation",
      duration: "10:55",
      program: "Governance & Advocacy",
      year: "2024",
    },
    {
      title: "Maternal Health Program Impact Story",
      duration: "9:30",
      program: "Health & Nutrition",
      year: "2025",
    },
    {
      title: "Teacher Training: Transforming Education Quality",
      duration: "14:15",
      program: "Education & Youth",
      year: "2024",
    },
    {
      title: "Sustainable Farming Techniques Demonstration",
      duration: "11:20",
      program: "Sustainable Agriculture",
      year: "2025",
    },
    {
      title: "Women's Cooperative Success Stories",
      duration: "13:45",
      program: "Women's Economic Empowerment",
      year: "2024",
    },
    {
      title: "Regional Conference on Civil Society",
      duration: "18:30",
      program: "Governance & Advocacy",
      year: "2025",
    },
    {
      title: "Water Infrastructure Project Documentary",
      duration: "16:25",
      program: "Health & Nutrition",
      year: "2024",
    },
    {
      title: "Digital Skills for Youth Employment",
      duration: "7:50",
      program: "Education & Youth",
      year: "2025",
    },
    {
      title: "Market Access for Smallholder Farmers",
      duration: "10:15",
      program: "Sustainable Agriculture",
      year: "2024",
    },
    {
      title: "Community Radio: Amplifying Local Voices",
      duration: "12:40",
      program: "Governance & Advocacy",
      year: "2025",
    },
    {
      title: "Financial Inclusion for Women",
      duration: "9:55",
      program: "Women's Economic Empowerment",
      year: "2024",
    },
    {
      title: "Youth Academy Graduation Ceremony",
      duration: "22:10",
      program: "Education & Youth",
      year: "2025",
    },
    {
      title: "Healthcare Worker Training Impact",
      duration: "11:35",
      program: "Health & Nutrition",
      year: "2024",
    },
    {
      title: "Policy Reform Advocacy Campaign",
      duration: "8:20",
      program: "Governance & Advocacy",
      year: "2025",
    },
    {
      title: "CIPCRE Documentation Center Tour",
      duration: "5:45",
      program: "Knowledge Management",
      year: "2025",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Image className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide">
              Visual Stories
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight max-w-4xl">
            Media Gallery
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            Explore photos and videos documenting our programs, events, and the
            communities we serve across Central Africa.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1440px] mx-auto px-12 py-12">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="mb-8 bg-gradient-to-r from-[#1B5E20]/5 to-[#2E7D32]/5 p-1.5 border border-[#1B5E20]/20">
            <TabsTrigger
              value="photos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1B5E20] data-[state=active]:to-[#2E7D32] data-[state=active]:text-white"
            >
              <Image className="w-4 h-4 mr-2" />
              Photo Gallery
            </TabsTrigger>
            <TabsTrigger
              value="videos"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1B5E20] data-[state=active]:to-[#2E7D32] data-[state=active]:text-white"
            >
              <Video className="w-4 h-4 mr-2" />
              Videos
            </TabsTrigger>
          </TabsList>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <div className="grid grid-cols-4 gap-6">
              {photos.map((photo, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-t-4 border-t-transparent hover:border-t-[#1B5E20]"
                >
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
                    <ImageWithFallback
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:bg-white transition-colors">
                          <Download className="w-6 h-6 text-[#1B5E20]" />
                        </div>
                      </div>
                    </div>
                    {/* Decorative corner accent */}
                    <div
                      className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
                    />
                  </div>
                  <div className="p-4 relative">
                    <Badge className="mb-2 text-xs bg-gradient-to-r from-[#1B5E20]/10 to-[#2E7D32]/10 text-[#1B5E20] border border-[#1B5E20]/20 hover:from-[#1B5E20] hover:to-[#2E7D32] hover:text-white transition-all">
                      {photo.program}
                    </Badge>
                    <h4 className="text-sm mb-2 leading-snug font-semibold group-hover:text-[#1B5E20] transition-colors">
                      {photo.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        {photo.location}
                      </span>
                      <span className="font-medium">{photo.year}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  onClick={() =>
                    video.videoUrl &&
                    setSelectedVideo({
                      url: video.videoUrl,
                      title: video.titleFr || video.title,
                    })
                  }
                  className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-t-4 border-t-transparent hover:border-t-[#1B5E20]"
                >
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-neutral-900 relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 shadow-2xl">
                        <div className="w-0 h-0 border-l-[16px] border-l-[#1B5E20] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg border border-white/10">
                      {video.duration}
                    </div>
                    {/* Decorative corner accent */}
                    <div
                      className="absolute top-0 left-0 w-16 h-16 bg-[#D4AF37] opacity-20"
                      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6 relative">
                    {video.featured && (
                      <Badge className="mb-2 text-xs bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white border-none shadow-lg animate-pulse">
                        ⭐ {t("common.featured")}
                      </Badge>
                    )}
                    <Badge className="mb-2 text-xs bg-gradient-to-r from-[#1B5E20]/10 to-[#2E7D32]/10 text-[#1B5E20] border border-[#1B5E20]/20 hover:from-[#1B5E20] hover:to-[#2E7D32] hover:text-white transition-all">
                      {video.program}
                    </Badge>
                    <h4 className="mb-3 leading-snug font-semibold group-hover:text-[#1B5E20] transition-colors">
                      {video.titleFr
                        ? t(video.title, video.titleFr)
                        : video.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        {video.year}
                      </span>
                      <span className="font-medium flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
}
