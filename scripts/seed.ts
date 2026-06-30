import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../src/integrations/drizzle/schema/index";

config({ path: ".env.local" });

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const db = drizzle(pool, { schema });

const PROGRAMS = [
  {
    slug: "agriculture-sustainable-entrepreneurship",
    titleFr: "Agriculture, Entrepreneuriat Durable et Hygiène Communautaire",
    titleEn: "Agriculture, Sustainable Entrepreneurship & Community Hygiene",
    summaryFr:
      "Promotion des filières agroécologiques et biologiques, de l'éco-entrepreneuriat pour les jeunes et les femmes, et renforcement de la résilience communautaire aux effets des changements climatiques.",
    summaryEn:
      "Promoting agroecological and organic value chains, eco-entrepreneurship for youth and women, and strengthening community resilience to climate change.",
    contentFr: `
<h2>Contexte et Justification</h2>
<p>Le Programme Agriculture Durable, Entrepreneuriat et Hygiène Communautaire (PADEHCOM) est l'un des programmes opérationnels du RECOS – DHI (2024–2026). Les actions retenues durant ce nouveau plan rentrent dans la continuité du RIDECOP-II (2021–2023).</p>

<h2>Impact des Changements Climatiques</h2>
<p>Outre la baisse de fertilité, la coupe incontrôlée de bois, le surpâturage, les feux de brousse et l'utilisation abusive des engrais et pesticides de synthèse ; l'impact aux changements climatiques continue à se faire ressentir dans plusieurs domaines.</p>
<p>Selon le Rapport National du Climat et du Développement en 2022 :</p>
<ul>
  <li>Les températures moyennes annuelles oscillent de -0,4 à 1,7 °C</li>
  <li>Les précipitations moyennes annuelles varient de -57,1 à 81,0 mm</li>
  <li>Sécheresse dévastatrice, vents violents et érosion frappent les régions du Nord et de l'Extrême Nord</li>
  <li>8 régions sur 10 au Cameroun ont été particulièrement chaudes durant le premier semestre 2024</li>
</ul>

<h2>Vision du Programme</h2>
<p>Le PADEHCOM rêve d'un monde rural où les populations (hommes, femmes et jeunes) prennent des initiatives en vue de s'auto employer, d'améliorer la qualité et la quantité de leur production afin de créer la richesse, de préserver leur environnement, leur santé et celle des consommateurs.</p>

<h2>Résultats Attendus</h2>
<ul>
  <li>Un Plaidoyer est initié auprès des acteurs clés pour le développement de la chaine de valeur agroécologique et biologique</li>
  <li>L'éco-entrepreneuriat agropastoral est promu au profit des jeunes et des femmes</li>
  <li>Les mécanismes communautaires de résilience aux effets des Changements Climatiques sont renforcés</li>
  <li>L'adoption des bonnes pratiques d'hygiène et d'assainissement au sein des établissements scolaires est renforcée</li>
</ul>

<h2>Groupes Cibles</h2>
<p>Le Groupe cible est constitué d'une part des agriculteurs et les éleveurs en individuel ou en Groupes d'Initiatives communes, associations, réseaux résidant dans les villages pilotes et/ou témoins, les élèves et d'autre part des détenteurs d'enjeux : maires, chefs de villages, responsables d'établissements scolaires.</p>

<h2>Zones d'Intervention</h2>
<p>Régions de l'Ouest, Centre, Adamaoua, Est et Littoral — 125 000+ bénéficiaires — Période 2024–2026.</p>
    `.trim(),
    contentEn: `
<h2>Context and Justification</h2>
<p>The Sustainable Agriculture, Entrepreneurship and Community Hygiene Program (PADEHCOM) is one of the operational programs of RECOS – DHI (2024–2026). The actions selected during this new plan continue from RIDECOP-II (2021–2023).</p>

<h2>Climate Change Impact</h2>
<p>Beyond declining fertility, uncontrolled wood cutting, overgrazing, bush fires and abusive use of synthetic fertilizers and pesticides; climate change impacts continue to be felt across multiple domains.</p>
<p>According to the 2022 National Climate and Development Report:</p>
<ul>
  <li>Average annual temperatures range from -0.4 to 1.7°C</li>
  <li>Average annual precipitation varies from -57.1 to 81.0 mm</li>
  <li>Devastating drought, violent winds and erosion hit the North and Far North regions</li>
  <li>8 out of 10 regions in Cameroon experienced exceptional heat during the first half of 2024</li>
</ul>

<h2>Program Vision</h2>
<p>PADEHCOM envisions a rural world where populations (men, women and youth) take initiatives to create self-employment, improve the quality and quantity of their production in order to create wealth, preserve their environment, their health and that of consumers.</p>

<h2>Expected Results</h2>
<ul>
  <li>Advocacy is initiated with key stakeholders for the development of the agroecological and organic value chain</li>
  <li>Agropastoral eco-entrepreneurship is promoted for youth and women</li>
  <li>Community resilience mechanisms to climate change effects are strengthened</li>
  <li>Adoption of good hygiene and sanitation practices in schools is reinforced</li>
</ul>

<h2>Target Groups</h2>
<p>The target group consists of farmers and livestock breeders individually or in Common Initiative Groups, associations, networks residing in pilot and/or witness villages, students, and stakeholders: mayors, village chiefs, school officials.</p>

<h2>Intervention Areas</h2>
<p>West, Centre, Adamawa, East, Littoral regions — 125,000+ beneficiaries — Period 2024–2026.</p>
    `.trim(),
    category: "PADEHCOM",
    coverImageUrl:
      "https://images.unsplash.com/photo-1666987571351-737b29874697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "published" as const,
    publishedAt: new Date("2024-01-15"),
  },
  {
    slug: "peace-social-cohesion",
    titleFr: "Paix et Cohésion Sociale",
    titleEn: "Peace & Social Cohesion",
    summaryFr:
      "Prévention de la consommation de drogues dans les écoles, gestion des conflits agropastoraux, et promotion de la paix à travers la médiation communautaire et les activités culturelles.",
    summaryEn:
      "Preventing drug use in schools, managing land and agropastoral conflicts, and promoting peace through community mediation and cultural activities.",
    contentFr: `
<h2>Contexte et Justification</h2>
<p>Les zones d'interventions du CIPCRE présentent une multiplicité de facteurs pouvant constituer des sources de conflits ou de menaces à la paix et à la cohésion sociale aussi bien en milieu scolaire qu'en communauté. Ces facteurs comprennent la fracture entre les jeunes générations et les adultes, la consommation d'alcool et de drogues en milieu scolaire, la prolifération des courants religieux, le radicalisme religieux, la cohabitation difficile entre les agriculteurs et les éleveurs, et la crise sécuritaire dans le NOSO.</p>

<h2>Violence en Milieu Scolaire et Consommation de Drogues</h2>
<p>La violence en milieu scolaire est aggravée par la consommation des drogues, alcools et stupéfiants. De nombreux malfaiteurs utilisent les réseaux sociaux ou sillonnent les alentours des établissements scolaires pour vendre de la drogue aux élèves.</p>

<h2>Conflits Agropastoraux</h2>
<p>La cohabitation entre éleveurs et agriculteurs est difficile. L'accès à la terre fait l'objet d'une forte compétition. La densité élevée de population (300 à 400 hbts/km²) rend la compétition encore plus féroce.</p>

<h2>Vision du Programme</h2>
<p>Le PACOS rêve d'un Cameroun au sein duquel toutes les confessions religieuses s'unissent pour promouvoir la Paix, toutes les communautés se sentent acceptées et vivent en harmonie, et chaque membre de la communauté joue son rôle dans la promotion de la paix.</p>

<h2>Résultats Attendus</h2>
<ul>
  <li>Les élèves sont capacités sur les stratégies de lutte contre le trafic et la consommation des drogues</li>
  <li>Les enseignants sont capacités sur l'utilisation de la discipline positive</li>
  <li>Les membres des CLM sont capacités sur les méthodes de prévention et de gestion pacifique des conflits</li>
  <li>Les jeunes leaders ambassadeurs de la paix sont capacités sur la lutte contre les propos haineux</li>
</ul>

<h2>Zones d'Intervention</h2>
<p>Régions de l'Ouest, Centre, Adamaoua, Est et Littoral — 85 000+ bénéficiaires — Période 2024–2026.</p>
    `.trim(),
    contentEn: `
<h2>Context and Justification</h2>
<p>CIPCRE's intervention areas present multiple factors that can constitute sources of conflict or threats to peace and social cohesion both in schools and communities. These factors include the divide between young generations and adults, alcohol and drug consumption in schools, proliferation of religious movements, religious radicalism, difficult cohabitation between farmers and cattle herders, and the security crisis in NOSO.</p>

<h2>Violence in Schools and Drug Abuse</h2>
<p>Violence in schools is aggravated by drug, alcohol and narcotic consumption. Many criminals use social networks or roam around schools to sell drugs to students.</p>

<h2>Agropastoral Conflicts</h2>
<p>Cohabitation between cattle herders and farmers is not easy. Access to land is subject to fierce competition. The high population density (300 to 400 inhabitants/km²) makes competition for this resource even fiercer.</p>

<h2>Program Vision</h2>
<p>PACOS dreams of a Cameroon where all religious denominations unite to promote Peace, all communities feel accepted and live in harmony, and each community member plays their role in promoting peace and eradicating violence in schools.</p>

<h2>Expected Results</h2>
<ul>
  <li>Students are trained on strategies to fight drug trafficking and consumption in schools</li>
  <li>Teachers are trained on using positive discipline as a sanctioning method</li>
  <li>CLM members are trained on conflict prevention and peaceful management methods</li>
  <li>Young peace ambassador leaders are trained on fighting hate speech</li>
</ul>

<h2>Intervention Areas</h2>
<p>West, Centre, Adamawa, East, Littoral regions — 85,000+ beneficiaries — Period 2024–2026.</p>
    `.trim(),
    category: "PACOS",
    coverImageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "published" as const,
    publishedAt: new Date("2024-01-15"),
  },
  {
    slug: "human-rights-citizen-participation",
    titleFr: "Droits Humains et Participation Citoyenne",
    titleEn: "Human Rights & Citizen Participation",
    summaryFr:
      "Promotion de la parentalité positive, protection des enfants contre les violences, et soutien à la participation citoyenne des jeunes dans les processus démocratiques.",
    summaryEn:
      "Promoting positive parenting, protecting children against violence, and supporting youth participation in democratic processes.",
    contentFr: `
<h2>Contexte et Justification</h2>
<p>Malgré les efforts du gouvernement camerounais avec l'appui de ses partenaires pour l'amélioration de l'égalité de genre et la promotion des droits de la femme et de l'enfant, bon nombre continuent d'être victimes de graves violations qui les privent de leurs droits.</p>

<h2>Statistiques Alarmantes</h2>
<p>En 2015, UNICEF estimait que 13,42% de femmes étaient mises en mariage avant 15 ans (30% pour les régions septentrionales) et 20% d'adolescentes de 15-19 ans étaient mariées. Pour les VBG, 54,6% de femmes ont été victimes d'une forme de violence à partir de 15 ans contre 9,8% chez les hommes.</p>
<p>Pendant le dernier plan d'action triennal 2021-2023, le CIPCRE a identifié 3 301 enfants victimes de violences dans la zone du projet dont 1 218 cas de négligences parentales, 271 d'abus sexuels, 112 de mariage d'enfants, et 1 700 enfants sans actes de naissance.</p>

<h2>Vision du Programme</h2>
<p>Les enfants, les jeunes et les femmes des zones d'intervention du CIPCRE sont mieux protégés contre les violences sexuelles et culturelles, ce qui leur permet de défendre efficacement leurs droits dans les instances locales de décisions.</p>

<h2>Résultats Attendus</h2>
<ul>
  <li>Au moins 60% des cas de violences envers les enfants dénoncés bénéficient d'une prise en charge adéquate</li>
  <li>Dans au moins 70 des 133 villages cibles de l'Ouest, des processus systématiques remplacent les rites de veuvage néfastes</li>
  <li>Au moins 4 recommandations formulées par les femmes sont traitées avec feedback des autorités compétentes</li>
  <li>Augmentation du taux de participation des jeunes aux élections de 2025</li>
</ul>

<h2>Zones d'Intervention</h2>
<p>Régions de l'Ouest et de l'Adamaoua — 50 000+ bénéficiaires — Période 2024–2026.</p>
    `.trim(),
    contentEn: `
<h2>Context and Justification</h2>
<p>Despite efforts by the Cameroonian government with support from its various partners to improve gender equality and promote women's and children's rights, many continue to be victims of serious violations that deprive them of their rights.</p>

<h2>Alarming Statistics</h2>
<p>In 2015, UNICEF estimated that 13.42% of women were married in Cameroon before age 15 (30% in northern regions) and 20% of adolescent girls aged 15-19 were married. Regarding GBV, statistics show that 54.6% of women have been victims of some form of violence from age 15 compared to 9.8% for men.</p>
<p>During the last three-year action plan 2021-2023, CIPCRE identified 3,301 child victims of violence in the project area including 1,218 cases of parental neglect, 271 sexual abuse cases, 112 child marriages, and 1,700 children without birth certificates.</p>

<h2>Program Vision</h2>
<p>Children, youth and women in CIPCRE intervention zones are better protected against sexual and cultural violence, enabling them to effectively defend their rights in local decision-making bodies.</p>

<h2>Expected Results</h2>
<ul>
  <li>In project zones, at least 60% of reported child violence cases receive adequate support</li>
  <li>In at least 70 of the 133 target villages in the West region, systematic processes replace harmful widowhood rites</li>
  <li>At least 4 recommendations formulated by women are processed with feedback from competent authorities</li>
  <li>Increased youth participation rate in 2025 elections</li>
</ul>

<h2>Intervention Areas</h2>
<p>West and Adamawa regions — 50,000+ beneficiaries — Period 2024–2026.</p>
    `.trim(),
    category: "PDHUPAC",
    coverImageUrl:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    status: "published" as const,
    publishedAt: new Date("2024-01-15"),
  },
];

async function seed() {
  console.log("Seeding programs…");
  for (const p of PROGRAMS) {
    await db
      .insert(schema.programsTable)
      .values(p)
      .onConflictDoUpdate({
        target: schema.programsTable.slug,
        set: {
          titleFr: p.titleFr,
          titleEn: p.titleEn,
          summaryFr: p.summaryFr,
          summaryEn: p.summaryEn,
          contentFr: p.contentFr,
          contentEn: p.contentEn,
          category: p.category,
          coverImageUrl: p.coverImageUrl,
          status: p.status,
          publishedAt: p.publishedAt,
        },
      });
    console.log(`  ✓ ${p.category} — ${p.slug}`);
  }
  console.log("Done.");
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
