import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";
import { ApiError, apiPost } from "../lib/api";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  subject: "",
  message: "",
};

export function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string[]> | undefined
  >();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors(undefined);
    setErrorMessage("");

    // On n'envoie pas les champs vides optionnels (phone/organization) pour
    // rester cohérent avec le schéma Zod côté serveur (.optional() accepte
    // l'absence du champ, pas une chaîne vide).
    const payload = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value.trim() !== ""),
    );

    try {
      await apiPost("/api/contact", payload);
      setStatus("success");
      setFormData(initialFormState);
    } catch (err) {
      setStatus("error");
      if (err instanceof ApiError) {
        setErrorMessage(err.message);
        setFieldErrors(err.fieldErrors);
      } else {
        setErrorMessage("Une erreur est survenue. Réessayez.");
      }
    }
  };

  const offices = [
    {
      name: t("contact.offices.headquarters"),
      address: t("contact.contactDetails.hqAddress"),
      phone: t("contact.contactDetails.hqPhone"),
      email: t("contact.contactDetails.hqEmail"),
      hours: t("contact.info.hoursText"),
    },
    {
      name: t("contact.offices.cameroon"),
      address: "Cameroon",
      phone: t("contact.contactDetails.cameroonPhone"),
      email: t("contact.contactDetails.cameroonEmail"),
      hours: t("contact.info.hoursText"),
    },
    {
      name: t("contact.offices.benin"),
      address: "Benin",
      phone: "",
      email: t("contact.contactDetails.beninEmail"),
      hours: t("contact.info.hoursText"),
    },
    {
      name: t("contact.offices.togo"),
      address: t("contact.contactDetails.togoLocation"),
      phone: "",
      email: "",
      hours: t("contact.info.hoursText"),
    },
  ];

  const departments = [
    { name: "General Inquiries", email: "info@cipcre.org" },
    { name: "Programs", email: "programs@cipcre.org" },
    { name: "Research & Documentation", email: "research@cipcre.org" },
    { name: "Partnerships", email: "partnerships@cipcre.org" },
    { name: "Media & Communications", email: "media@cipcre.org" },
    { name: "Human Resources", email: "hr@cipcre.org" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-[#D4AF37]" />
            <div className="w-10 lg:w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide">
              {t("contact.hero.badge")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight max-w-4xl">
            {t("contact.hero.title")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t("contact.hero.description")}
          </p>
        </div>
      </section>

      {/* Contact Form & Quick Contact */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="group relative p-10 hover:shadow-2xl transition-all duration-500 border-t-4 border-t-[#1B5E20] overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-2xl -z-10" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <h2 className="text-2xl">{t("contact.form.title")}</h2>
                </div>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">
                      Message envoyé !
                    </h4>
                    <p className="text-sm text-neutral-600 mb-6">
                      Merci de nous avoir contactés. Nous vous répondrons
                      rapidement.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {status === "error" && (
                      <div className="flex items-start gap-2 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-semibold text-neutral-700"
                        >
                          {t("contact.form.name")}
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.form.namePlaceholder")}
                          className="mt-2 border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                        />
                        {fieldErrors?.firstName && (
                          <p className="text-xs text-red-600 mt-1">
                            {fieldErrors.firstName[0]}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-semibold text-neutral-700"
                        >
                          {t("contact.form.name")}
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.form.namePlaceholder")}
                          className="mt-2 border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                        />
                        {fieldErrors?.lastName && (
                          <p className="text-xs text-red-600 mt-1">
                            {fieldErrors.lastName[0]}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-neutral-700"
                        >
                          {t("contact.form.email")}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.form.emailPlaceholder")}
                          className="mt-2 border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                        />
                        {fieldErrors?.email && (
                          <p className="text-xs text-red-600 mt-1">
                            {fieldErrors.email[0]}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-semibold text-neutral-700"
                        >
                          {t("contact.info.phone")}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+237 XXX XXX XXX"
                          className="mt-2 border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="organization"
                        className="text-sm font-semibold text-neutral-700"
                      >
                        Organization
                      </Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your organization name"
                        className="mt-2 border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-sm font-semibold text-neutral-700"
                      >
                        {t("contact.form.subject")}
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.subjectPlaceholder")}
                        className="mt-2 border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                      />
                      {fieldErrors?.subject && (
                        <p className="text-xs text-red-600 mt-1">
                          {fieldErrors.subject[0]}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-neutral-700"
                      >
                        {t("contact.form.message")}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form.messagePlaceholder")}
                        className="mt-2 min-h-[150px] border-neutral-300 focus:border-[#1B5E20] focus:ring-[#1B5E20]/20 transition-all"
                      />
                      {fieldErrors?.message && (
                        <p className="text-xs text-red-600 mt-1">
                          {fieldErrors.message[0]}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] hover:from-[#2E7D32] hover:to-[#1B5E20] w-full shadow-lg hover:shadow-xl transition-all duration-300 py-6 group"
                    >
                      {status === "submitting" ? (
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      ) : (
                        <Mail className="mr-2 w-5 h-5" />
                      )}
                      <span>{t("contact.form.send")}</span>
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-6">
            <Card className="group relative p-6 hover:shadow-xl transition-all duration-500 border-l-4 border-l-[#1B5E20] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#1B5E20]" />
                  </div>
                  <h3 className="text-lg">Headquarters</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#1B5E20]" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-700 font-medium">
                        BP 1256, Yaoundé
                      </p>
                      <p className="text-sm text-neutral-600">Cameroon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#1B5E20]" />
                    </div>
                    <p className="text-sm text-neutral-700 font-medium pt-1">
                      +237 222 123 456
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#1B5E20]" />
                    </div>
                    <a
                      href="mailto:info@cipcre.org"
                      className="text-sm text-[#1B5E20] hover:underline font-medium pt-1"
                    >
                      info@cipcre.org
                    </a>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#1B5E20]" />
                    </div>
                    <p className="text-sm text-neutral-700 font-medium pt-1">
                      Mon-Fri: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group relative p-6 hover:shadow-xl transition-all duration-500 border-l-4 border-l-[#D4AF37] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-lg">Departments</h3>
                </div>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <div
                      key={dept.name}
                      className="p-3 rounded-lg hover:bg-[#1B5E20]/5 transition-all duration-300 border-b border-neutral-100 last:border-0"
                    >
                      <p className="text-sm font-semibold text-neutral-800 mb-1">
                        {dept.name}
                      </p>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-sm text-[#1B5E20] hover:text-[#2E7D32] transition-colors inline-flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Country Offices */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 py-20 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1B5E20]/5 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1B5E20]/5 px-5 py-2 rounded-full border border-[#1B5E20]/20 mb-4">
              <Building2 className="w-4 h-4 text-[#1B5E20]" />
              <span className="text-sm font-medium text-[#1B5E20]">
                Global Presence
              </span>
            </div>
            <h2 className="mb-4">Our Offices</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              CIPCRE operates across Central Africa with offices in key
              locations
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {offices.map((office) => (
              <Card
                key={office.name}
                className="group relative p-6 hover:shadow-2xl transition-all duration-500 border-t-4 border-t-transparent hover:border-t-[#1B5E20] overflow-hidden"
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#1B5E20]/5 to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B5E20]/10 to-[#2E7D32]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm group-hover:shadow-md">
                      <Building2 className="w-6 h-6 text-[#1B5E20]" />
                    </div>
                    <h3 className="text-base font-bold group-hover:text-[#1B5E20] transition-colors">
                      {office.name}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#1B5E20]" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                      <Phone className="w-4 h-4 shrink-0 text-[#1B5E20]" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                      <Mail className="w-4 h-4 shrink-0 text-[#1B5E20]" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#1B5E20] hover:text-[#2E7D32] hover:underline transition-colors font-medium"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#1B5E20]/5 transition-colors">
                      <Clock className="w-4 h-4 shrink-0 text-[#1B5E20]" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-[1440px] mx-auto px-12 py-20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1B5E20]/5 px-5 py-2 rounded-full border border-[#1B5E20]/20 mb-4">
            <MapPin className="w-4 h-4 text-[#1B5E20]" />
            <span className="text-sm font-medium text-[#1B5E20]">Location</span>
          </div>
          <h2 className="mb-2">Find Us</h2>
          <p className="text-neutral-600">
            Visit our headquarters in Yaoundé, Cameroon
          </p>
        </div>

        <Card className="relative overflow-hidden border-4 border-[#1B5E20]/10 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="h-[500px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.808091632847!2d10.4609809846579!3d5.4818400555085685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjgnNTQuNiJOIDEwwrAyNyczNS4zIkU!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CIPCRE Headquarters Location"
            ></iframe>
          </div>
        </Card>
      </section>

      {/* Transparency Links */}
      <section className="relative bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />

        <div className="relative max-w-[1440px] mx-auto px-12 py-16">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-xs font-medium">Our Commitment</span>
              </div>
              <h3 className="mb-2 text-3xl text-white">
                Transparency & Accountability
              </h3>
              <p className="text-neutral-100 text-lg">
                Access our institutional documents, financial reports, and
                accountability policies
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B5E20] transition-all duration-300 backdrop-blur-sm shadow-lg px-6 py-6 text-[#037618]"
              >
                Annual Reports
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B5E20] transition-all duration-300 backdrop-blur-sm shadow-lg px-6 py-6 text-[#059611]"
              >
                Financial Statements
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1B5E20] transition-all duration-300 backdrop-blur-sm shadow-lg px-6 py-6 text-[#01861a]"
              >
                Policies & Procedures
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
