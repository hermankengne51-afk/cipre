import { ExternalLink, Handshake, Users } from "lucide-react";
import { Route } from "@/routes/partnerships";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

const MOCK_PARTNERS = [
  { id: "p1", name: "Union Européenne", logoUrl: null, websiteUrl: "https://europa.eu", type: "Bailleur International", country: "Belgique", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p2", name: "GIZ — Agence Allemande de Développement", logoUrl: null, websiteUrl: "https://www.giz.de", type: "Bailleur International", country: "Allemagne", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p3", name: "Kinder Mission", logoUrl: null, websiteUrl: "https://www.kindermission.de", type: "Bailleur International", country: "Allemagne", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p4", name: "Brot für die Welt", logoUrl: null, websiteUrl: "https://www.brot-fuer-die-welt.de", type: "Bailleur International", country: "Allemagne", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p5", name: "UNICEF Cameroun", logoUrl: null, websiteUrl: "https://www.unicef.org/cameroon", type: "Agence ONU", country: "Cameroun", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p6", name: "Service de Paix (ZFD)", logoUrl: null, websiteUrl: "https://www.ziviler-friedensdienst.org", type: "Partenaire Paix", country: "Allemagne", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p7", name: "Dynamique Paysanne", logoUrl: null, websiteUrl: null, type: "Partenaire Local", country: "Cameroun", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p8", name: "Église Évangélique du Cameroun (EEC)", logoUrl: null, websiteUrl: null, type: "Partenaire Local", country: "Cameroun", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
  { id: "p9", name: "Ministère de l'Agriculture (MINADER)", logoUrl: null, websiteUrl: null, type: "Partenaire Gouvernemental", country: "Cameroun", status: "published", createdAt: new Date(), updatedAt: new Date(), createdBy: null, updatedBy: null },
];

export function PartnershipsPage() {
  const dbPartners = Route.useLoaderData();
  const partners = dbPartners.length > 0 ? dbPartners : MOCK_PARTNERS;
  const { t } = useLanguage();

  const byType = partners.reduce<Record<string, typeof partners>>(
    (acc, p) => {
      const key = p.type;
      if (!acc[key]) acc[key] = [];
      acc[key].push(p);
      return acc;
    },
    {},
  );

  return (
    <div>
      {/* Header */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="flex items-center gap-2 mb-3">
            <Handshake className="w-8 h-8 text-[#D4AF37]" />
            <div className="w-12 h-0.5 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-medium text-neutral-100 tracking-wide uppercase">
              {t("Our Partners", "Nos Partenaires")}
            </span>
          </div>
          <h1 className="mb-3 text-3xl leading-tight">
            {t("Partnerships & Collaboration", "Partenariats & Collaboration")}
          </h1>
          <p className="text-base text-neutral-100 max-w-3xl leading-relaxed">
            {t(
              "CIPCRE works with a wide network of international and local partners to maximize development impact across Central Africa.",
              "Le CIPCRE collabore avec un large réseau de partenaires internationaux et locaux pour maximiser l'impact du développement en Afrique Centrale.",
            )}
          </p>
        </div>
      </section>

      {/* Partners by type */}
      <section className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-16">
        {partners.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-neutral-500 text-lg">
              {t(
                "No partners published yet.",
                "Aucun partenaire publié pour le moment.",
              )}
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {Object.entries(byType).map(([type, group]) => (
              <div key={type}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">{type}</h2>
                  <Badge className="bg-[#1B5E20]/10 text-[#1B5E20] border-0">
                    {group.length}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.map((partner) => (
                    <Card
                      key={partner.id}
                      className="group p-5 border border-neutral-200 hover:border-[#1B5E20]/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                    >
                      {partner.logoUrl ? (
                        <img
                          src={partner.logoUrl}
                          alt={partner.name}
                          className="h-12 object-contain mb-3 group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center mb-3">
                          <Handshake className="w-6 h-6 text-[#1B5E20]" />
                        </div>
                      )}
                      <p className="text-sm font-semibold text-neutral-900 line-clamp-2 mb-1">
                        {partner.name}
                      </p>
                      {partner.country && (
                        <p className="text-xs text-neutral-400 mb-3">
                          {partner.country}
                        </p>
                      )}
                      {partner.websiteUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="mt-auto text-xs w-full border-[#1B5E20]/30 text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white"
                        >
                          <a
                            href={partner.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink className="mr-1 w-3 h-3" />
                            {t("Website", "Site web")}
                          </a>
                        </Button>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA — become a partner */}
      <section className="relative bg-linear-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] text-white">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-12 py-16 text-center">
          <h2 className="mb-4 text-white">
            {t("Become a Partner", "Devenir Partenaire")}
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            {t(
              "Join our network to amplify impact across Central Africa. We welcome governments, foundations, NGOs, and private sector partners.",
              "Rejoignez notre réseau pour amplifier l'impact en Afrique Centrale. Nous accueillons les gouvernements, fondations, ONG et partenaires du secteur privé.",
            )}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#1B5E20] hover:bg-white/95 font-bold shadow-xl px-8"
          >
            <a href="/contact">
              {t("Contact Us", "Nous Contacter")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
