import {
  Building,
  Check,
  CreditCard,
  Globe,
  GraduationCap,
  Heart,
  Smartphone,
  Sprout,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "../contexts/LanguageContext";

export function DonatePage() {
  const { language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time",
  );

  const translations = {
    en: {
      hero: {
        badge: "Support Our Mission",
        title: "Make a Donation",
        description:
          "Your contribution helps us create sustainable impact across Central Africa through community development, environmental conservation, and social transformation.",
      },
      amounts: {
        title: "Select Amount",
        oneTime: "One-Time Donation",
        monthly: "Monthly Donation",
        custom: "Custom Amount",
        currency: "USD",
      },
      impact: {
        title: "Your Impact",
        amount50: {
          title: "$50 can provide",
          description: "Seeds and tools for 5 smallholder farmers",
        },
        amount100: {
          title: "$100 can provide",
          description: "Training for 10 youth in sustainable agriculture",
        },
        amount250: {
          title: "$250 can provide",
          description: "Water access for one rural community",
        },
        amount500: {
          title: "$500 can provide",
          description: "Educational materials for 50 children",
        },
      },
      methods: {
        title: "Payment Methods",
        card: "Credit/Debit Card",
        bank: "Bank Transfer",
        mobile: "Mobile Money",
      },
      info: {
        title: "Donation Information",
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email Address",
        emailPlaceholder: "your.email@example.com",
        country: "Country",
        countryPlaceholder: "Select your country",
        message: "Message (Optional)",
        messagePlaceholder: "Leave a message of support...",
        anonymous: "Make this donation anonymous",
      },
      why: {
        title: "Why Donate to CIPCRE?",
        reason1: {
          title: "Proven Impact",
          description:
            "Over 30 years of sustainable development work across Central Africa",
        },
        reason2: {
          title: "Transparency",
          description: "Regular reports and audits ensure accountability",
        },
        reason3: {
          title: "Community-Led",
          description:
            "Programs designed and implemented with local communities",
        },
        reason4: {
          title: "Multi-Sectoral Approach",
          description:
            "Addressing agriculture, education, health, and governance",
        },
      },
      areas: {
        title: "Where Your Donation Goes",
        agriculture: "Agriculture & Food Security",
        education: "Education & Youth Programs",
        health: "Health & Community Services",
        environment: "Environmental Conservation",
        governance: "Governance & Human Rights",
      },
      cta: {
        donate: "Complete Donation",
        processing: "Processing...",
      },
      taxDeductible:
        "Donations are tax-deductible to the extent allowed by law",
      securePayment: "Secure Payment - Your information is protected",
    },
    fr: {
      hero: {
        badge: "Soutenez Notre Mission",
        title: "Faire un Don",
        description:
          "Votre contribution nous aide à créer un impact durable en Afrique centrale à travers le développement communautaire, la conservation environnementale et la transformation sociale.",
      },
      amounts: {
        title: "Sélectionner le Montant",
        oneTime: "Don Unique",
        monthly: "Don Mensuel",
        custom: "Montant Personnalisé",
        currency: "USD",
      },
      impact: {
        title: "Votre Impact",
        amount50: {
          title: "50$ peuvent fournir",
          description: "Des semences et outils pour 5 petits agriculteurs",
        },
        amount100: {
          title: "100$ peuvent fournir",
          description: "Formation pour 10 jeunes en agriculture durable",
        },
        amount250: {
          title: "250$ peuvent fournir",
          description: "Accès à l'eau pour une communauté rurale",
        },
        amount500: {
          title: "500$ peuvent fournir",
          description: "Matériel éducatif pour 50 enfants",
        },
      },
      methods: {
        title: "Méthodes de Paiement",
        card: "Carte de Crédit/Débit",
        bank: "Virement Bancaire",
        mobile: "Mobile Money",
      },
      info: {
        title: "Informations sur le Don",
        name: "Nom Complet",
        namePlaceholder: "Votre nom",
        email: "Adresse Email",
        emailPlaceholder: "votre.email@exemple.com",
        country: "Pays",
        countryPlaceholder: "Sélectionnez votre pays",
        message: "Message (Optionnel)",
        messagePlaceholder: "Laissez un message de soutien...",
        anonymous: "Rendre ce don anonyme",
      },
      why: {
        title: "Pourquoi Faire un Don au CIPCRE ?",
        reason1: {
          title: "Impact Prouvé",
          description:
            "Plus de 30 ans de travail en développement durable en Afrique centrale",
        },
        reason2: {
          title: "Transparence",
          description:
            "Rapports réguliers et audits garantissent la responsabilité",
        },
        reason3: {
          title: "Dirigé par la Communauté",
          description:
            "Programmes conçus et mis en œuvre avec les communautés locales",
        },
        reason4: {
          title: "Approche Multi-Sectorielle",
          description:
            "Traitant l'agriculture, l'éducation, la santé et la gouvernance",
        },
      },
      areas: {
        title: "Où Va Votre Don",
        agriculture: "Agriculture & Sécurité Alimentaire",
        education: "Éducation & Programmes Jeunesse",
        health: "Santé & Services Communautaires",
        environment: "Conservation Environnementale",
        governance: "Gouvernance & Droits Humains",
      },
      cta: {
        donate: "Finaliser le Don",
        processing: "Traitement...",
      },
      taxDeductible:
        "Les dons sont déductibles d'impôts dans la mesure permise par la loi",
      securePayment: "Paiement Sécurisé - Vos informations sont protégées",
    },
  };

  const t = translations[language];

  const predefinedAmounts = [50, 100, 250, 500, 1000];

  const handleDonate = () => {
    // This would integrate with a payment processor
    alert("Payment integration would be implemented here");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Donation Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 lg:p-8">
              {/* Donation Type */}
              <div className="mb-8">
                <div className="flex gap-4 mb-6">
                  <Button
                    variant={
                      donationType === "one-time" ? "default" : "outline"
                    }
                    className={
                      donationType === "one-time"
                        ? "bg-[#1B5E20] flex-1"
                        : "flex-1"
                    }
                    onClick={() => setDonationType("one-time")}
                  >
                    {t.amounts.oneTime}
                  </Button>
                  <Button
                    variant={donationType === "monthly" ? "default" : "outline"}
                    className={
                      donationType === "monthly"
                        ? "bg-[#1B5E20] flex-1"
                        : "flex-1"
                    }
                    onClick={() => setDonationType("monthly")}
                  >
                    {t.amounts.monthly}
                  </Button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  {t.amounts.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedAmount === amount
                          ? "border-[#1B5E20] bg-[#1B5E20]/5 font-semibold"
                          : "border-neutral-200 hover:border-[#1B5E20]/50"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="custom-amount">{t.amounts.custom}</Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                      $
                    </span>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="0"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">{t.info.title}</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t.info.name}</Label>
                    <Input
                      id="name"
                      placeholder={t.info.namePlaceholder}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.info.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.info.emailPlaceholder}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">{t.info.country}</Label>
                    <Input
                      id="country"
                      placeholder={t.info.countryPlaceholder}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.info.message}</Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder={t.info.messagePlaceholder}
                      className="mt-2 w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="w-4 h-4 accent-[#1B5E20]"
                    />
                    <Label
                      htmlFor="anonymous"
                      className="font-normal cursor-pointer"
                    >
                      {t.info.anonymous}
                    </Label>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  {t.methods.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button className="p-4 border-2 border-neutral-200 rounded-lg hover:border-[#1B5E20] transition-colors flex flex-col items-center gap-2">
                    <CreditCard className="w-6 h-6 text-[#1B5E20]" />
                    <span className="text-sm font-medium">
                      {t.methods.card}
                    </span>
                  </button>
                  <button className="p-4 border-2 border-neutral-200 rounded-lg hover:border-[#1B5E20] transition-colors flex flex-col items-center gap-2">
                    <Building className="w-6 h-6 text-[#1B5E20]" />
                    <span className="text-sm font-medium">
                      {t.methods.bank}
                    </span>
                  </button>
                  <button className="p-4 border-2 border-neutral-200 rounded-lg hover:border-[#1B5E20] transition-colors flex flex-col items-center gap-2">
                    <Smartphone className="w-6 h-6 text-[#1B5E20]" />
                    <span className="text-sm font-medium">
                      {t.methods.mobile}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button
                  onClick={handleDonate}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white py-6 text-lg font-semibold"
                  size="lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  {t.cta.donate}
                </Button>
                <p className="text-xs text-center text-neutral-500">
                  {t.securePayment}
                </p>
                <p className="text-xs text-center text-neutral-500">
                  {t.taxDeductible}
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Impact Info */}
          <div className="space-y-6">
            {/* Impact Examples */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{t.impact.title}</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t.impact.amount50.title}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {t.impact.amount50.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t.impact.amount100.title}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {t.impact.amount100.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t.impact.amount250.title}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {t.impact.amount250.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {t.impact.amount500.title}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {t.impact.amount500.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Why Donate */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">{t.why.title}</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-sm mb-1">
                    {t.why.reason1.title}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t.why.reason1.description}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">
                    {t.why.reason2.title}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t.why.reason2.description}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">
                    {t.why.reason3.title}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t.why.reason3.description}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">
                    {t.why.reason4.title}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {t.why.reason4.description}
                  </p>
                </div>
              </div>
            </Card>

            {/* Where Donations Go */}
            <Card className="p-6 bg-[#1B5E20] text-white">
              <h3 className="text-lg font-semibold mb-4">{t.areas.title}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4" />
                  <span>{t.areas.agriculture}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.areas.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{t.areas.health}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{t.areas.environment}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{t.areas.governance}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
