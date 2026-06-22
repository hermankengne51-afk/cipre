import { Download, Eye, FileText, Heart, Target, Users } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function AboutPage() {
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

  const governance = [
    {
      title: "Board of Directors",
      description:
        "12 members representing diverse expertise in development, research, and civil society",
    },
    {
      title: "Executive Leadership",
      description:
        "Experienced team with over 100 years of combined experience in international development",
    },
    {
      title: "Advisory Council",
      description:
        "Regional experts providing strategic guidance on programs and policy",
    },
    {
      title: "Country Offices",
      description:
        "Local teams in 6 countries ensuring community-centered implementation",
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

  const documents = [
    { title: "Strategic Plan 2024-2028", year: "2024", size: "2.4 MB" },
    { title: "Organizational Statutes", year: "2023", size: "1.2 MB" },
    { title: "Code of Conduct", year: "2023", size: "850 KB" },
    { title: "Financial Audit Report 2025", year: "2025", size: "3.1 MB" },
    { title: "Safeguarding Policy", year: "2024", size: "1.5 MB" },
    { title: "Environmental & Social Standards", year: "2024", size: "2.0 MB" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <h1 className="mb-4">About CIPCRE</h1>
          <p className="text-xl text-neutral-600 max-w-3xl leading-relaxed">
            For nearly three decades, CIPCRE has been at the forefront of social
            transformation in Central Africa, working with communities,
            governments, and partners to create sustainable change.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="max-w-[1440px] mx-auto px-12 py-20">
        <div className="grid grid-cols-3 gap-12 mb-20">
          {/* Mission */}
          <div>
            <div className="w-12 h-12 bg-[#1B5E20] rounded flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="mb-4">Mission</h2>
            <p className="text-neutral-700 leading-relaxed">
              To promote sustainable development and social justice through
              knowledge creation, capacity building, and evidence-based advocacy
              in partnership with communities and civil society organizations
              across Africa.
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="w-12 h-12 bg-[#1B5E20] rounded flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="mb-4">Vision</h2>
            <p className="text-neutral-700 leading-relaxed">
              A just and equitable Africa where all people, especially the most
              marginalized, have access to quality education, economic
              opportunities, and participate meaningfully in decisions that
              affect their lives.
            </p>
          </div>

          {/* Founding */}
          <div>
            <div className="w-12 h-12 bg-[#1B5E20] rounded flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="mb-4">Established 1997</h2>
            <p className="text-neutral-700 leading-relaxed">
              Founded in Yaoundé, Cameroon by a group of development
              practitioners, researchers, and civil society leaders committed to
              creating lasting social change through knowledge and collective
              action.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="mb-8">Our Values</h2>
          <div className="grid grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-6 text-center">
                  <Icon className="w-10 h-10 text-[#1B5E20] mx-auto mb-4" />
                  <h3 className="text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Overview */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-[1440px] mx-auto px-12">
          <h2 className="mb-8">Governance & Structure</h2>
          <div className="grid grid-cols-2 gap-6">
            {governance.map((item) => (
              <Card key={item.title} className="p-8">
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Principles */}
      <section className="max-w-[1440px] mx-auto px-12 py-20">
        <h2 className="mb-8">Organizational Principles</h2>
        <Card className="p-10">
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {principles.map((principle) => (
              <div key={principle} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#1B5E20] rounded-full mt-2 shrink-0"></div>
                <p className="text-neutral-700">{principle}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Institutional Documents */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="mb-3">Institutional Documents</h2>
              <p className="text-neutral-600">
                Download our key institutional and policy documents
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {documents.map((doc) => (
              <Card
                key={doc.title}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <FileText className="w-8 h-8 text-[#1B5E20] mb-4" />
                <h4 className="mb-2">{doc.title}</h4>
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>{doc.year}</span>
                  <span>{doc.size}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
