import { Link } from "@tanstack/react-router";
import {
  Download,
  Eye,
  FileText,
  Filter,
  Search,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";

export function DocumentationCenterPage() {
  const { t } = useLanguage();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiMessages, setAiMessages] = useState<
    Array<{
      type: "user" | "ai";
      content: string;
      sources?: Array<{ title: string; id: string }>;
    }>
  >([]);

  const exampleQuestions = [
    "What are the main findings on gender equality in education?",
    "Show me all documents about climate adaptation strategies",
    "What programs focus on youth employment?",
    "Find reports about women's entrepreneurship in Cameroon",
    "What are CIPCRE's key recommendations on governance?",
  ];

  const handleAskAI = () => {
    if (!aiQuestion.trim()) return;

    setAiMessages([
      ...aiMessages,
      { type: "user", content: aiQuestion },
      {
        type: "ai",
        content:
          "Based on analysis of our document library, I found 3 relevant documents addressing your question. The key findings show that gender equality initiatives in education have led to a 68% increase in girls' enrollment across our programs in Central Africa. The main barriers identified include cultural norms, economic constraints, and lack of infrastructure in rural areas.",
        sources: [
          {
            title: "Gender Equality in Education: A Five-Year Study",
            id: "gender-education-2024",
          },
          { title: "Annual Report 2025", id: "annual-2025" },
        ],
      },
    ]);
    setAiQuestion("");
  };

  const categories = [
    { name: "Annual Reports", count: 28 },
    { name: "Project Reports", count: 156 },
    { name: "Research & Studies", count: 89 },
    { name: "Evaluations", count: 67 },
    { name: "Advocacy Papers", count: 43 },
    { name: "Institutional Documents", count: 32 },
  ];

  const years = [
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
  ];
  const countries = [
    "Cameroon",
    "Chad",
    "CAR",
    "Congo",
    "Gabon",
    "Equatorial Guinea",
    "Regional",
  ];
  const themes = [
    "Education",
    "Agriculture",
    "Gender",
    "Governance",
    "Health",
    "Climate",
  ];

  const documents = [
    {
      id: "annual-2025",
      title: "Annual Report 2025 - Impact and Innovation",
      year: "2025",
      type: "Annual Report",
      program: "Organizational",
      tags: ["Impact", "Strategy", "Annual"],
      pages: 84,
      size: "4.2 MB",
    },
    {
      id: "gender-education-2024",
      title: "Gender Equality in Education: A Five-Year Study",
      year: "2024",
      type: "Research Study",
      program: "Education & Youth",
      tags: ["Gender", "Education", "Research"],
      pages: 126,
      size: "3.8 MB",
    },
    {
      id: "climate-adaptation-2024",
      title: "Climate Adaptation Strategies for Smallholder Farmers",
      year: "2024",
      type: "Policy Brief",
      program: "Sustainable Agriculture",
      tags: ["Climate", "Agriculture", "Policy"],
      pages: 32,
      size: "1.9 MB",
    },
    {
      id: "youth-employment-2023",
      title: "Youth Employment in Central Africa: Challenges and Opportunities",
      year: "2023",
      type: "Evaluation",
      program: "Education & Youth",
      tags: ["Youth", "Employment", "Evaluation"],
      pages: 68,
      size: "2.4 MB",
    },
    {
      id: "women-entrepreneurship-2024",
      title: "Women's Entrepreneurship Program - Impact Evaluation 2024",
      year: "2024",
      type: "Evaluation",
      program: "Women's Economic Empowerment",
      tags: ["Gender", "Entrepreneurship", "Impact"],
      pages: 92,
      size: "3.1 MB",
    },
    {
      id: "governance-advocacy-2023",
      title: "Civil Society Strengthening in Central Africa - Final Report",
      year: "2023",
      type: "Project Report",
      program: "Governance & Advocacy",
      tags: ["Governance", "Civil Society", "Capacity Building"],
      pages: 54,
      size: "2.2 MB",
    },
    {
      id: "food-security-2024",
      title: "Food Security and Nutrition Survey - Cameroon 2024",
      year: "2024",
      type: "Research Study",
      program: "Sustainable Agriculture",
      tags: ["Food Security", "Nutrition", "Survey"],
      pages: 110,
      size: "5.3 MB",
    },
    {
      id: "strategic-plan-2024",
      title: "Strategic Plan 2024-2028",
      year: "2024",
      type: "Institutional Document",
      program: "Organizational",
      tags: ["Strategy", "Planning", "Vision"],
      pages: 48,
      size: "2.4 MB",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-[#D4AF37]" />
              <div className="w-8 lg:w-10 h-0.5 bg-[#D4AF37] rounded-full" />
              <span className="text-xs font-medium text-neutral-100 tracking-wide">
                {t("documentation.hero.badge")}
              </span>
            </div>
            <h1 className="mb-2 text-2xl lg:text-3xl">
              {t("documentation.hero.title")}
            </h1>
            <p className="text-sm lg:text-base text-neutral-100 mb-3 lg:mb-4 leading-relaxed">
              {t("documentation.hero.description")} {documents.length}{" "}
              {t("documentation.hero.resources")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-4">
            <Button
              onClick={() => setShowAiAssistant(true)}
              size="lg"
              className="bg-white text-[#1B5E20] hover:bg-neutral-100 shadow-xl hover:shadow-2xl transition-all px-4 lg:px-6 py-3 lg:py-4 group"
            >
              <Sparkles className="mr-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-sm lg:text-base">
                {t("documentation.hero.askAI")}
              </span>
            </Button>
            <div className="hidden sm:block text-xs lg:text-sm text-neutral-100 backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-lg border border-white/20">
              {t("documentation.hero.searchHelp")}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Left Sidebar - Fixed on desktop, collapsible on mobile */}
          <aside className="w-full lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-32 space-y-4 lg:space-y-6">
              {/* Categories */}
              <Card className="p-6 border-l-4 border-l-[#1B5E20] hover:shadow-lg transition-shadow">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center">
                    <Filter className="w-4 h-4 text-[#1B5E20]" />
                  </div>
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label
                      key={category.name}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors"
                    >
                      <Checkbox
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              category.name,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                (c) => c !== category.name,
                              ),
                            );
                          }
                        }}
                        className="border-2 border-[#1B5E20]"
                      />
                      <span className="text-sm text-neutral-700 group-hover:text-[#1B5E20] font-medium transition-colors">
                        {category.name}
                      </span>
                      <span className="text-xs text-neutral-500 ml-auto bg-neutral-100 px-2 py-0.5 rounded-full">
                        ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Year Filter */}
              <Card className="p-6 border-l-4 border-l-[#D4AF37] hover:shadow-lg transition-shadow">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center">
                    <Filter className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  Year
                </h3>
                <div className="space-y-2">
                  {years.map((year) => (
                    <label
                      key={year}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors"
                    >
                      <Checkbox
                        checked={selectedYears.includes(year)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedYears([...selectedYears, year]);
                          } else {
                            setSelectedYears(
                              selectedYears.filter((y) => y !== year),
                            );
                          }
                        }}
                        className="border-2 border-[#1B5E20]"
                      />
                      <span className="text-sm text-neutral-700 group-hover:text-[#1B5E20] font-medium transition-colors">
                        {year}
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Country Filter */}
              <Card className="p-6 border-l-4 border-l-[#2E7D32] hover:shadow-lg transition-shadow">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-lg">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2E7D32]/10 to-[#1B5E20]/10 flex items-center justify-center">
                    <Filter className="w-4 h-4 text-[#2E7D32]" />
                  </div>
                  Country
                </h3>
                <div className="space-y-2">
                  {countries.map((country) => (
                    <label
                      key={country}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors"
                    >
                      <Checkbox
                        checked={selectedCountries.includes(country)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCountries([
                              ...selectedCountries,
                              country,
                            ]);
                          } else {
                            setSelectedCountries(
                              selectedCountries.filter((c) => c !== country),
                            );
                          }
                        }}
                        className="border-2 border-[#1B5E20]"
                      />
                      <span className="text-sm text-neutral-700 group-hover:text-[#1B5E20] font-medium transition-colors">
                        {country}
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Theme Filter */}
              <Card className="p-6 border-t-4 border-t-[#1B5E20] hover:shadow-lg transition-shadow">
                <h3 className="mb-4 font-bold text-lg">Theme</h3>
                <div className="flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <Badge
                      key={theme}
                      variant="outline"
                      className="cursor-pointer hover:bg-gradient-to-r hover:from-[#1B5E20] hover:to-[#2E7D32] hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md"
                    >
                      {theme}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search Bar */}
            <Card className="mb-8 p-6 border-t-4 border-t-[#1B5E20] shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1B5E20]" />
                <Input
                  placeholder={t("documentation.search.placeholder")}
                  className="pl-12 h-14 text-base border-2 border-neutral-200 focus:border-[#1B5E20] transition-colors"
                />
              </div>
              <p className="text-sm text-neutral-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                {t("documentation.search.help")}
              </p>
            </Card>

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between bg-gradient-to-r from-neutral-50 to-white p-4 rounded-xl border border-neutral-200">
              <div className="text-sm text-neutral-600 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1B5E20] animate-pulse" />
                {t("documentation.search.showing")}{" "}
                <strong className="text-[#1B5E20]">{documents.length}</strong>{" "}
                {t("documentation.search.documents")}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all"
              >
                {t("documentation.search.sortBy")}
              </Button>
            </div>

            {/* Document List */}
            <div className="space-y-4">
              {documents.map((doc) => (
                <Card
                  key={doc.id}
                  className="group relative p-6 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-transparent hover:border-l-[#1B5E20] overflow-hidden"
                >
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative flex gap-6">
                    {/* Document Icon */}
                    <div className="shrink-0">
                      <div className="w-20 h-24 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                        <FileText className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Document Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold group-hover:text-[#1B5E20] transition-colors">
                          {doc.title}
                        </h4>
                        <Badge className="shrink-0 ml-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                          {doc.type}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-neutral-600 mb-3 bg-neutral-50 px-3 py-2 rounded-lg border border-neutral-100 w-fit">
                        <span className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1B5E20]" />
                          {doc.year}
                        </span>
                        <span className="text-neutral-400">•</span>
                        <span>{doc.program}</span>
                        <span className="text-neutral-400">•</span>
                        <span>{doc.pages} pages</span>
                        <span className="text-neutral-400">•</span>
                        <span className="font-medium">{doc.size}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {doc.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs border-[#1B5E20]/30 text-neutral-700 hover:bg-[#1B5E20]/5 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] shadow-md hover:shadow-lg transition-all group/btn"
                        >
                          <Link to="/documentation/$id" params={{ id: doc.id }}>
                            <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            View Document
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white transition-all group/btn"
                        >
                          <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Floating Button */}
      {!showAiAssistant && (
        <button
          onClick={() => setShowAiAssistant(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50 group animate-pulse hover:animate-none"
        >
          <Sparkles className="w-7 h-7 text-white drop-shadow-lg" />
          <div className="absolute -top-14 right-0 bg-neutral-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Ask AI Assistant
            <div className="absolute bottom-0 right-6 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-neutral-900 translate-y-full" />
          </div>
        </button>
      )}

      {/* AI Assistant Panel */}
      {showAiAssistant && (
        <div className="fixed bottom-8 right-8 w-[480px] bg-white rounded-2xl shadow-2xl border-4 border-[#1B5E20]/20 overflow-hidden z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white p-6 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-xl" />

            <div className="relative flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg">
                  AI Document Assistant
                </h3>
              </div>
              <button
                onClick={() => setShowAiAssistant(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-neutral-100 relative">
              Ask questions across all {documents.length} documents in our
              library
            </p>
          </div>

          {/* Example Questions - Show when no messages */}
          {aiMessages.length === 0 && (
            <div className="p-6 border-b border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
              <p className="text-sm font-bold text-neutral-700 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Try asking:
              </p>
              <div className="space-y-2">
                {exampleQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => setAiQuestion(q)}
                    className="w-full text-left text-sm text-neutral-600 hover:text-[#1B5E20] hover:bg-white p-3 rounded-xl transition-all border border-neutral-200 hover:border-[#1B5E20] hover:shadow-md group"
                  >
                    <span className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>"{q}"</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {aiMessages.length > 0 && (
            <ScrollArea className="h-96 p-6 bg-gradient-to-br from-neutral-50 to-white">
              <div className="space-y-4">
                {aiMessages.map((msg, index) => (
                  <div key={index}>
                    <div
                      className={`${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white ml-12 shadow-lg"
                          : "bg-white text-neutral-800 mr-12 border-2 border-neutral-200 shadow-md"
                      } rounded-xl p-4 transition-all hover:shadow-xl`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>

                    {/* Sources */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3 mr-12">
                        <p className="text-xs font-bold text-neutral-700 mb-2 flex items-center gap-1">
                          <FileText className="w-3 h-3 text-[#1B5E20]" />
                          Sources:
                        </p>
                        <div className="space-y-2">
                          {msg.sources.map((source) => (
                            <Link
                              key={source.id}
                              to="/documentation/$id"
                              params={{ id: source.id }}
                              className="block text-xs text-[#1B5E20] hover:text-[#2E7D32] bg-white p-3 rounded-lg border-2 border-[#1B5E20]/20 hover:border-[#1B5E20] hover:shadow-md transition-all group"
                            >
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                <span className="font-medium group-hover:underline">
                                  {source.title}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}

          {/* Input Area */}
          <div className="p-4 border-t-2 border-neutral-200 bg-gradient-to-br from-neutral-50 to-white">
            <div className="flex gap-2">
              <Textarea
                placeholder="Ask about any topic across all documents..."
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleAskAI();
                  }
                }}
                className="min-h-[80px] resize-none border-2 border-neutral-300 focus:border-[#1B5E20] transition-colors"
              />
              <Button
                onClick={handleAskAI}
                className="shrink-0 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] h-[80px] px-4 shadow-lg hover:shadow-xl transition-all group"
                disabled={!aiQuestion.trim()}
              >
                <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
