import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Globe,
  HandHeart,
  Heart,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { ApiError, apiPost } from "../lib/api";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  areaOfInterest: "",
  availability: "",
  experience: "",
  motivation: "",
};

export function VolunteerPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState(initialFormState);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string[]> | undefined
  >();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors(undefined);
    setErrorMessage("");

    // On n'envoie pas le champ optionnel "experience" s'il est vide, pour
    // rester cohérent avec le schéma Zod côté serveur (.optional()).
    const payload = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value.trim() !== ""),
    );

    try {
      await apiPost("/api/volunteer", payload);
      setStatus("success");
      setFormData(initialFormState);
    } catch (err) {
      setStatus("error");
      if (err instanceof ApiError) {
        setErrorMessage(err.message);
        setFieldErrors(err.fieldErrors);
      } else {
        setErrorMessage(
          t(
            "An error occurred. Please try again.",
            "Une erreur est survenue. Réessayez.",
          ),
        );
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: Award,
      title: "Skill Development",
      titleFr: "Développement de Compétences",
      description:
        "Gain hands-on experience in international development, project management, and community engagement",
      descriptionFr:
        "Acquérir une expérience pratique en développement international, gestion de projet et engagement communautaire",
    },
    {
      icon: Globe,
      title: "Global Impact",
      titleFr: "Impact Mondial",
      description:
        "Contribute to meaningful change in communities across Central Africa",
      descriptionFr:
        "Contribuer à un changement significatif dans les communautés d'Afrique centrale",
    },
    {
      icon: Users,
      title: "Networking",
      titleFr: "Réseautage",
      description:
        "Connect with like-minded individuals, professionals, and organizations",
      descriptionFr:
        "Se connecter avec des personnes partageant les mêmes idées, des professionnels et des organisations",
    },
    {
      icon: Heart,
      title: "Personal Growth",
      titleFr: "Croissance Personnelle",
      description:
        "Develop leadership, communication, and cross-cultural competencies",
      descriptionFr:
        "Développer des compétences en leadership, communication et compétences interculturelles",
    },
  ];

  const opportunities = [
    {
      title: "Field Volunteers",
      titleFr: "Volontaires de Terrain",
      description:
        "Support community programs in agriculture, education, health, and peacebuilding",
      descriptionFr:
        "Soutenir les programmes communautaires en agriculture, éducation, santé et consolidation de la paix",
      duration: "3-12 months",
      durationFr: "3-12 mois",
      location: "Cameroon (Various Regions)",
      locationFr: "Cameroun (Diverses Régions)",
    },
    {
      title: "Research & Documentation",
      titleFr: "Recherche & Documentation",
      description: "Contribute to studies, evaluations, and knowledge products",
      descriptionFr:
        "Contribuer aux études, évaluations et produits de connaissances",
      duration: "2-6 months",
      durationFr: "2-6 mois",
      location: "Remote or On-site",
      locationFr: "À distance ou Sur site",
    },
    {
      title: "Communications & Advocacy",
      titleFr: "Communication & Plaidoyer",
      description:
        "Help amplify CIPCRE's voice through content creation, social media, and advocacy campaigns",
      descriptionFr:
        "Aider à amplifier la voix du CIPCRE à travers la création de contenu, les médias sociaux et les campagnes de plaidoyer",
      duration: "1-6 months",
      durationFr: "1-6 mois",
      location: "Remote",
      locationFr: "À distance",
    },
    {
      title: "Technical Expertise",
      titleFr: "Expertise Technique",
      description:
        "Provide specialized skills in areas like IT, finance, legal, or project management",
      descriptionFr:
        "Fournir des compétences spécialisées dans des domaines comme l'IT, la finance, le juridique ou la gestion de projet",
      duration: "Flexible",
      durationFr: "Flexible",
      location: "Remote or On-site",
      locationFr: "À distance ou Sur site",
    },
  ];

  const requirements = [
    "Passion for social development and community empowerment",
    "Strong communication and interpersonal skills",
    "Ability to work independently and in teams",
    "Cultural sensitivity and respect for diversity",
    "Commitment to CIPCRE's mission and values",
    "Proficiency in French and/or English",
  ];

  const requirementsFr = [
    "Passion pour le développement social et l'autonomisation communautaire",
    "Excellentes compétences en communication et relations interpersonnelles",
    "Capacité à travailler de manière autonome et en équipe",
    "Sensibilité culturelle et respect de la diversité",
    "Engagement envers la mission et les valeurs du CIPCRE",
    "Maîtrise du français et/ou de l'anglais",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-white/5 rounded-full blur-2xl" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
          <div className="flex items-center gap-2 mb-4">
            <HandHeart className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide uppercase">
              {t("Make a Difference", "Faire la Différence")}
            </span>
          </div>
          <h1 className="mb-4 text-3xl lg:text-4xl leading-tight max-w-4xl">
            {t(
              "Volunteer & Partnership Program",
              "Programme de Volontariat & Partenariat",
            )}
          </h1>
          <p className="text-base lg:text-lg text-neutral-100 max-w-3xl leading-relaxed">
            {t(
              "Join our team of dedicated volunteers and partners working to create sustainable impact in communities across Central Africa. Your skills, passion, and time can transform lives.",
              "Rejoignez notre équipe de volontaires et partenaires dévoués qui travaillent à créer un impact durable dans les communautés d'Afrique centrale. Vos compétences, votre passion et votre temps peuvent transformer des vies.",
            )}
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-2xl lg:text-3xl">
            {t(
              "Why Volunteer with CIPCRE?",
              "Pourquoi Faire du Bénévolat avec le CIPCRE ?",
            )}
          </h2>
          <p className="text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto">
            {t(
              "Volunteering with CIPCRE offers unique opportunities for personal and professional growth while making a real difference",
              "Faire du bénévolat avec le CIPCRE offre des opportunités uniques de croissance personnelle et professionnelle tout en faisant une réelle différence",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 border-2 border-neutral-100 hover:border-[#1B5E20]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  {t(benefit.title, benefit.titleFr)}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {t(benefit.description, benefit.descriptionFr)}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-neutral-50 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="mb-3 text-2xl lg:text-3xl">
              {t("Volunteer Opportunities", "Opportunités de Volontariat")}
            </h2>
            <p className="text-base lg:text-lg text-neutral-600 max-w-3xl">
              {t(
                "Explore various ways to contribute your skills and time to CIPCRE's mission",
                "Explorez différentes façons de contribuer vos compétences et votre temps à la mission du CIPCRE",
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {opportunities.map((opp, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 border-none shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1B5E20]/10 rounded-xl flex items-center justify-center shrink-0">
                    <HandHeart className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-neutral-900">
                      {t(opp.title, opp.titleFr)}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {t(opp.description, opp.descriptionFr)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Badge className="bg-[#E8F5E9] text-[#1B5E20] border-none px-3 py-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {t(opp.duration, opp.durationFr)}
                  </Badge>
                  <Badge className="bg-[#FFF9E6] text-[#D4AF37] border-none px-3 py-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {t(opp.location, opp.locationFr)}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="mb-4 text-2xl lg:text-3xl">
              {t("What We're Looking For", "Ce Que Nous Recherchons")}
            </h2>
            <p className="text-base text-neutral-600 mb-6 leading-relaxed">
              {t(
                "While we welcome volunteers from diverse backgrounds, here are some qualities that will help you succeed:",
                "Bien que nous accueillions des volontaires de divers horizons, voici quelques qualités qui vous aideront à réussir :",
              )}
            </p>

            <div className="space-y-3">
              {(language === "en" ? requirements : requirementsFr).map(
                (req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1B5E20] shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-700">{req}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Application Form */}
          <Card className="p-6 lg:p-8 shadow-xl border-2 border-neutral-100">
            <div className="mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2">
                {t("Apply to Volunteer", "Postuler comme Volontaire")}
              </h3>
              <p className="text-sm text-neutral-600">
                {t(
                  "Fill out the form below and we'll get back to you within 5 business days",
                  "Remplissez le formulaire ci-dessous et nous vous répondrons dans les 5 jours ouvrables",
                )}
              </p>
            </div>

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-2">
                  {t("Application Submitted!", "Candidature Soumise !")}
                </h4>
                <p className="text-sm text-neutral-600 mb-6">
                  {t(
                    "Thank you for your interest. We'll review your application and contact you soon.",
                    "Merci pour votre intérêt. Nous examinerons votre candidature et vous contacterons bientôt.",
                  )}
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  {t(
                    "Submit another application",
                    "Soumettre une autre candidature",
                  )}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {status === "error" && (
                  <div className="flex items-start gap-2 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      {t("First Name", "Prénom")} *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    />
                    {fieldErrors?.firstName && (
                      <p className="text-xs text-red-600 mt-1">
                        {fieldErrors.firstName[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      {t("Last Name", "Nom")} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    />
                    {fieldErrors?.lastName && (
                      <p className="text-xs text-red-600 mt-1">
                        {fieldErrors.lastName[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {t("Email Address", "Adresse Email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                  />
                  {fieldErrors?.email && (
                    <p className="text-xs text-red-600 mt-1">
                      {fieldErrors.email[0]}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {t("Phone Number", "Numéro de Téléphone")} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                  />
                  {fieldErrors?.phone && (
                    <p className="text-xs text-red-600 mt-1">
                      {fieldErrors.phone[0]}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      {t("Country", "Pays")} *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      {t("City", "Ville")} *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {t("Area of Interest", "Domaine d'Intérêt")} *
                  </label>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">
                      {t("Select an area", "Sélectionnez un domaine")}
                    </option>
                    <option value="field">
                      {t("Field Volunteers", "Volontaires de Terrain")}
                    </option>
                    <option value="research">
                      {t(
                        "Research & Documentation",
                        "Recherche & Documentation",
                      )}
                    </option>
                    <option value="communications">
                      {t(
                        "Communications & Advocacy",
                        "Communication & Plaidoyer",
                      )}
                    </option>
                    <option value="technical">
                      {t("Technical Expertise", "Expertise Technique")}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {t("Availability", "Disponibilité")} *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">
                      {t(
                        "Select availability",
                        "Sélectionnez votre disponibilité",
                      )}
                    </option>
                    <option value="1-3">{t("1-3 months", "1-3 mois")}</option>
                    <option value="3-6">{t("3-6 months", "3-6 mois")}</option>
                    <option value="6-12">
                      {t("6-12 months", "6-12 mois")}
                    </option>
                    <option value="12+">{t("12+ months", "12+ mois")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {t("Relevant Experience", "Expérience Pertinente")}
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t(
                      "Briefly describe your relevant skills and experience...",
                      "Décrivez brièvement vos compétences et expérience pertinentes...",
                    )}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {t(
                      "Why do you want to volunteer with CIPCRE?",
                      "Pourquoi voulez-vous faire du bénévolat avec le CIPCRE ?",
                    )}{" "}
                    *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent outline-none transition-all resize-none"
                    placeholder={t(
                      "Share your motivation and what you hope to achieve...",
                      "Partagez votre motivation et ce que vous espérez accomplir...",
                    )}
                  />
                  {fieldErrors?.motivation && (
                    <p className="text-xs text-red-600 mt-1">
                      {fieldErrors.motivation[0]}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#1B5E20] hover:bg-[#2E7D32] text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {status === "submitting" ? (
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  ) : null}
                  {t("Submit Application", "Soumettre la Candidature")}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  {t(
                    "By submitting this form, you agree to our privacy policy and terms of service.",
                    "En soumettant ce formulaire, vous acceptez notre politique de confidentialité et nos conditions d'utilisation.",
                  )}
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="mb-4 text-2xl lg:text-3xl">
            {t("Have Questions?", "Vous Avez des Questions ?")}
          </h2>
          <p className="text-base lg:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t(
              "Our team is here to help you learn more about volunteer opportunities at CIPCRE",
              "Notre équipe est là pour vous aider à en savoir plus sur les opportunités de bénévolat au CIPCRE",
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:volunteers@cipcre.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1B5E20] rounded-lg font-semibold hover:bg-white/95 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              volunteers@cipcre.org
            </a>
            <a
              href="tel:+237233421423"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              +237 233 421 423
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
