import peaceProgramImage from "figma:asset/130b2f569ae56fe2e6ae4bc97499888e9a7f706b.png";
import humanRightsProgramImage from "figma:asset/70257e9d509985c092a5375ef8145f184fbb16a3.png";
import agricultureProgramImage from "figma:asset/df3cfa423e4872c9e947399a4184ea0044c1aaac.png";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, MapPin, Target, Users } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export function ProgramDetailPage({ slug }: { slug: string }) {
  const { language } = useLanguage();

  // Program database with full content
  const programs: Record<string, any> = {
    "agriculture-sustainable-entrepreneurship": {
      title: {
        en: "Agriculture, Sustainable Entrepreneurship & Community Hygiene",
        fr: "Agriculture, Entrepreneuriat Durable et Hygiène Communautaire",
      },
      acronym: "PADEHCOM",
      coverImage: agricultureProgramImage,
      period: "2024-2026",
      regions: {
        en: ["West", "Centre", "Adamawa", "East", "Littoral"],
        fr: ["Ouest", "Centre", "Adamaoua", "Est", "Littoral"],
      },
      beneficiaries: "125,000+",
      themes: {
        en: ["Agroecology", "Entrepreneurship", "Climate Resilience", "WASH"],
        fr: [
          "Agroécologie",
          "Entrepreneuriat",
          "Résilience Climatique",
          "WASH",
        ],
      },

      context: {
        en: `
          <p>The Sustainable Agriculture, Entrepreneurship and Community Hygiene Program (PADEHCOM) is one of the operational programs of RECOS – DHI (2024–2026). The actions selected during this new plan continue from RIDECOP-II (2021–2023).</p>
          
          <h2>Climate Change Impact</h2>
          <p>Beyond declining fertility, uncontrolled wood cutting, overgrazing, bush fires and abusive use of synthetic fertilizers and pesticides; climate change impacts continue to be felt across multiple domains. Extreme weather events are becoming more frequent and intense.</p>
          
          <p>According to the 2022 National Climate and Development Report:</p>
          <ul>
            <li>Average annual temperatures range from -0.4 to 1.7°C</li>
            <li>Average annual precipitation varies from -57.1 to 81.0 mm</li>
            <li>Devastating drought, violent winds and erosion hit the North and Far North regions</li>
            <li>Coastal zones and highlands remain vulnerable to sea level rise, floods, landslides and rockfalls</li>
            <li>8 out of 10 regions in Cameroon experienced exceptional heat during the first half of 2024, with recorded human deaths in the northern zone</li>
          </ul>

          <h2>Policy Framework</h2>
          <p>As part of implementing the national policy for promoting sustainable agriculture, progress has been made in constructing the legal framework for Organic Agriculture and Agroecology. Numerous consultations were conducted between 2022 and 2023 for the participatory development of standards and regulations with civil society organizations, under the impetus of GIZ through the PROCISA program.</p>

          <h2>Water and Sanitation Challenges</h2>
          <p>In intervention areas, water supply, hygiene and sanitation management remain serious problems. Despite efforts made during REDECOP II, populations—whether in communities or schools—do not always have access to reliable water sources. Even when available, the commonly used water source is not developed and the water is not treated due to lack of knowledge of appropriate purification techniques.</p>

          <h2>Youth Entrepreneurship Gap</h2>
          <p>The critical deficit in youth and women's entrepreneurship is concerning. One of the keys to solving unemployment and poverty remains youth entrepreneurship, especially since in Cameroon, young people aged 15 to 35 represent more than a third of the population and are three times more affected by unemployment than other population categories.</p>
          
          <p>According to the International Labour Organization (ILO), the unemployment rate is slightly above 13%, but the National Institute of Statistics (INS) specifies that 75% of young people aged between 17 and 40 are looking for employment.</p>
        `,
        fr: `
          <p>Le Programme Agriculture Durable, Entrepreneuriat et Hygiène Communautaire (PADEHCOM) est l'un des programmes opérationnels du RECOS – DHI (2024–2026). Les actions retenues durant ce nouveau plan rentrent dans la continuité du RIDECOP-II (2021–2023).</p>
          
          <h2>Impact des Changements Climatiques</h2>
          <p>Outre la baisse de fertilité, la coupe incontrôlée de bois, le surpâturage, les feux de brousse et l'utilisation abusive des engrais et pesticides de synthèse ; l'impact aux changements climatiques continue à se faire ressentir dans plusieurs domaines. Les évènements météorologiques extrêmes sont plus fréquents et plus intenses.</p>
          
          <p>Selon le Rapport National du Climat et du Développement en 2022 :</p>
          <ul>
            <li>Les températures moyennes annuelles oscillent de -0,4 à 1,7 °C</li>
            <li>Les précipitations moyennes annuelles varient de -57,1 à 81,0 mm</li>
            <li>Sécheresse dévastatrice, vents violents et érosion frappent les régions du Nord et de l'Extrême Nord</li>
            <li>Les zones côti��res et les hauts plateaux restent vulnérables à l'élévation du niveau de la mer, aux inondations, aux glissements de terrain et aux éboulements</li>
            <li>8 régions sur 10 au Cameroun ont été particulièrement chaudes durant le premier semestre 2024 avec mort d'hommes enregistrée dans la zone septentrionale</li>
          </ul>

          <h2>Cadre Politique</h2>
          <p>Dans le cadre de l'implémentation de la politique nationale de la promotion de l'agriculture durable, des avancées ont été faites dans la construction du cadre juridique de l'Agriculture Biologique et l'Agroécologie. De nombreuses consultations ont été faites entre 2022 et 2023 pour l'élaboration participative des normes et règlements avec les organisations de la société civile, sous l'impulsion de la GIZ à travers le programme PROCISA.</p>

          <h2>Défis Eau et Assainissement</h2>
          <p>Dans les zones d'intervention, l'approvisionnement en eau, la gestion de l'hygiène et de l'assainissement demeurent un problème sérieux. Malgré les efforts consentis au cours de REDECOP II, les populations n'ont pas toujours accès aux sources d'eau fiables. Même quand cela est le cas, la source d'eau n'est pas aménagée et l'eau n'est pas traitée en raison d'une méconnaissance des techniques de potabilisation.</p>

          <h2>Déficit Entrepreneurial des Jeunes</h2>
          <p>Le déficit critique en matière d'entrepreneuriat notamment jeune et féminin est préoccupant. L'une des clés pour résoudre le problème de chômage et de pauvreté reste l'entrepreneuriat jeune, surtout qu'au Cameroun, les jeunes âgés de 15 à 35 ans représentent plus du tiers de la population et sont trois fois plus atteints par le chômage.</p>
          
          <p>Selon le Bureau international du travail (BIT), le taux de chômage se situe légèrement au-dessus de 13%, mais l'Institut National de la Statistique (INS) précise que 75% des jeunes âgés entre 17 et 40 ans sont à la recherche d'un emploi.</p>
        `,
      },

      vision: {
        en: "PADEHCOM envisions a rural world where populations (men, women and youth) take initiatives to create self-employment, improve the quality and quantity of their production in order to create wealth, preserve their environment, their health and that of consumers.",
        fr: "Le PADEHCOM rêve d'un monde rural où les populations (hommes, femmes et jeunes) prennent des initiatives en vue de s'auto employer, d'améliorer la qualité et la quantité de leur production afin de créer la richesse, de préserver leur environnement, leur santé et celle des consommateurs.",
      },

      expectedResults: {
        en: [
          "Advocacy is initiated with key stakeholders for the development of the agroecological and organic value chain",
          "Agropastoral eco-entrepreneurship is promoted for youth and women in support of agroecological and organic value chain development",
          "Community resilience mechanisms to climate change effects are strengthened",
          "Adoption of good hygiene and sanitation practices in schools is reinforced",
        ],
        fr: [
          "Un Plaidoyer est initié auprès des acteurs clés pour le développement de la chaine de valeur agroécologique et biologique",
          "L'éco-entrepreneuriat agropastoral est promu au profit des jeunes et des femmes en soutien au développement de la chaine de valeur agroécologique et biologique",
          "Les mécanismes communautaires de résilience aux effets des Changements Climatiques sont renforcés",
          "L'adoption des bonnes pratiques d'hygiène et d'assainissement au sein des établissements scolaires est renforcée",
        ],
      },

      keyActions: {
        en: [
          "Identification, training and support of 30 community agropastoral advisors (CAC) for dissemination of innovative agroecological techniques to at least 420 producers in 20 Witness Villages",
          "Facilitation of the establishment and animation of a network of agropastoral advisors trained by CIPCRE and the UEC-CPF-GADD Consortium",
          "Establishment of 2 experimental spaces and 26 demonstration plots as research support on organic agricultural inputs in collaboration with universities and specific centers",
          "Basic material support to producers (420 agroecological producers and 200 organic producers) for implementing acquired good practices",
          "Organization of a National Citizen Dialogue between civil society and institutional actors on strategies for developing the agroecological and organic value chain in Cameroon",
          "Organization of a regional workshop with 25 school authorities (MINESEC, MINEDUB) on strategies for appropriating school gardens and green spaces as pedagogical tools for introducing students to organic agriculture and climate change adaptation",
          "Organization of 8 departmental training workshops for school principals and key teachers on participatory techniques for establishing organic gardens and green spaces in schools and their use as pedagogical tools for students",
          "Identification and awareness-raising of 150 potential young and women eco-entrepreneurs engaged in processing products from agroecology and organic agriculture",
          "Material support to 15 winning eco-entrepreneurs for starting and formalizing their business",
          "Identification and training of 52 endogenous volunteers to fight climate change effects (VELEC) in the 26 villages bordering CIPCRE's Pilot Villages",
          "Organization of a workshop with 30 traditional chiefs on the importance of sacred forests as a means of mitigating climate change effects and conserving biodiversity",
          "Organization of 5 municipal workshops for local elected officials to appropriate climate change adaptation and mitigation strategies",
          "Organization of an advocacy workshop with institutional actors from the education sector for the adoption of WASH clubs in schools, strategies for their establishment and support",
          "Support to 8 landlocked schools in creating and/or developing water points to ensure practical application of acquired WASH knowledge",
        ],
        fr: [
          "Identification, formation et accompagnement de 30 conseillers agropastoraux communautaires (CAC) pour la diffusion des techniques innovantes d'agroécologiques d'au moins de 420 producteurs-trices dans les 20 Villages Témoins",
          "Facilitation de la mise en place et l'animation d'un réseau de Conseillers agropastoraux formés par le CIPCRE et le Consortium UEC-CPF-GADD",
          "Mise en place de 2 espaces expérimentaux et 26 parcelles témoins comme support de recherche sur les intrants agricoles biologiques en collaboration avec les universités et les centres spécifiques",
          "Appuis matériels de base aux producteurs (420 producteurs agroécologiques et 200 producteurs biologiques) pour la mise en œuvre des bonnes pratiques acquises",
          "Organisation d'un Dialogue Citoyen National entre la société civile et les acteurs institutionnels sur les stratégies de développement de la chaine de valeur agroécologique et biologique au Cameroun",
          "Organisation d'un atelier régional avec 25 autorités scolaires (MINESEC, MINEDUB) sur les stratégies d'appropriation des jardins scolaires et espaces verts comme outils pédagogiques d'initiation des élèves à l'agriculture biologique et d'adaptation aux effets des changements climatiques",
          "Organisation de 8 ateliers départementaux de formation des chefs d'établissement et enseignants clés sur les techniques participatives de mise en place des jardins biologiques et espaces verts en milieu scolaire",
          "Identification et sensibilisation de 150 potentiels éco-entrepreneur.e.s jeunes et femmes engagés dans la transformation des produits issus de l'agroécologie et de l'agriculture biologique",
          "Appuis matériels à 15 éco-entrepreneurs lauréats pour le démarrage et la formalisation de leur entreprise",
          "Identification et formation de 52 Volontaires endogènes de lutte contre les effets des changements climatiques (VELEC) dans les 26 villages limitrophes des Villages Pilotes du CIPCRE",
          "Organisation d'un atelier avec 30 chefs traditionnels sur l'importance des forêts sacrés comme moyen d'atténuation des effets des changements climatiques et de conservation de la biodiversité",
          "Organisation de 5 ateliers communaux d'appropriation par les élus locaux des stratégies d'adaptation et d'atténuation des effets des changements climatiques",
          "Organisation d'un atelier de plaidoyer avec les acteurs institutionnels du secteur de l'éducation pour l'adoption des clubs WASH au sein des établissements scolaires",
          "Accompagner 8 établissements scolaires enclavés dans la création et/ou l'aménagement des points d'eau pour assurer la mise en pratiques des connaissances acquises sur le WASH",
        ],
      },

      targetGroups: {
        en: "The target group consists of farmers and livestock breeders individually or in Common Initiative Groups, associations, networks residing in pilot and/or witness villages, students, and stakeholders: mayors, village chiefs, school officials, heads of deconcentrated and decentralized state services.",
        fr: "Le Groupe cible est constitué d'une part des agriculteurs et les éleveurs en individuel ou en Groupes d'Initiatives communes, associations, réseaux résidant dans les villages pilotes et/ou témoins, les élèves et d'autre part des détenteurs d'enjeux : maires, chefs de villages, responsables d'établissements scolaires, Responsables des services déconcentrés et décentralisés de l'Etat.",
      },

      implementationStrategy: {
        en: [
          "Identification and training of Community Agroecological Advisors (CAC)",
          "Identification of 26 demonstration plots in new villages",
          "Support to CAC in implementing their mission",
          "Support to producers for establishing demonstration units for different themes",
          "Support to PRs for replicating activities of different themes in their respective areas of competence",
          "Advocacy with stakeholders",
          "Scaling up of acquired good practices",
        ],
        fr: [
          "Identification et formation des Conseillers Agroécologiques Communautaires (CAC)",
          "Identification de 26 parcelles témoins dans les nouveaux villages",
          "Accompagnement des CAC dans la mise en œuvre de leur mission",
          "Appuis aux producteurs pour la mise en place des unités de démonstrations dans le cadre des différentes thématiques",
          "Accompagnement des PR pour la duplication des activités des différentes thématiques dans leurs zones de compétence respectives",
          "Plaidoyers auprès des détenteurs d'enjeux",
          "Mise à l'échelle des bonnes pratiques acquises",
        ],
      },

      sustainability: {
        en: `
          <h3>Community Advisor Valorization</h3>
          <p>The skills of Community Agroecological Advisors (CAC) will be valued in implementing program activities in witness villages and other localities. Continuous capacity building will be necessary.</p>

          <h3>Value Chain Development</h3>
          <p>Value chain development in the production process will enable producers in pilot villages to better valorize their products by adding value. The establishment of a marketing platform connecting producers, processors and buyers around organic product sales points will be strengthened.</p>

          <h3>Advocacy and Scaling</h3>
          <p>To have greater program impact, advocacy actions on specific themes will be conducted toward deconcentrated state services, decentralized territorial communities (CTD), traditional chiefs, other decision-makers or development actors and support organizations to disseminate good practices promoted by CIPCRE to a wider public.</p>
        `,
        fr: `
          <h3>Valorisation des Conseillers Communautaires</h3>
          <p>Les compétences des Conseillers Agroécologiques Communautaires (CAC) seront valorisées dans la mise en œuvre des activités du Programme dans les villages témoins et dans d'autres localités. Un renforcement continu de leurs capacités sera nécessaire.</p>

          <h3>Développement de la Chaîne de Valeur</h3>
          <p>Le développement de la chaine de valeur dans le processus de production permettra aux producteurs des villages pilotes de mieux valoriser leurs produits en y apportant de la valeur ajoutée. La mise en place de la plateforme de commercialisation producteurs – transformateurs et acheteurs autour des points de vente des produits biologiques sera renforcée.</p>

          <h3>Plaidoyer et Mise à l'Échelle</h3>
          <p>Pour avoir un plus grand impact des activités du Programme, des actions de plaidoyer sur des thèmes précis seront menées en direction des services déconcentrés de l'Etat, des collectivités territoriales décentralisées (CTD), des chefs traditionnels, des autres décideurs ou acteurs de développement et organismes d'appui en vue de la diffusion des bonnes pratiques promues par le CIPCRE auprès d'un public plus large.</p>
        `,
      },
    },
    "peace-social-cohesion": {
      title: {
        en: "Peace & Social Cohesion",
        fr: "Paix et Cohésion Sociale",
      },
      acronym: "PACOS",
      coverImage: peaceProgramImage,
      period: "2024-2026",
      regions: {
        en: ["West", "Centre", "Adamawa", "East", "Littoral"],
        fr: ["Ouest", "Centre", "Adamaoua", "Est", "Littoral"],
      },
      beneficiaries: "85,000+",
      themes: {
        en: [
          "Peace Building",
          "Conflict Management",
          "Community Mediation",
          "Non-Violence",
        ],
        fr: [
          "Construction de la Paix",
          "Gestion des Conflits",
          "Médiation Communautaire",
          "Non-Violence",
        ],
      },

      context: {
        en: `
          <p>CIPCRE's intervention areas present multiple factors that can constitute sources of conflict or threats to peace and social cohesion both in schools and communities. These factors include the divide between young generations and adults, alcohol and drug consumption in schools and communities, proliferation of religious movements, religious radicalism, difficult cohabitation between farmers and cattle herders, and the security crisis in NOSO (North-West and South-West regions).</p>
          
          <h2>Generational Divide</h2>
          <p>The misunderstanding between youth and adults is increasingly pronounced in Cameroon. Adults implement strategies aimed at maintaining a society that benefits them, particularly maintaining their power of domination at all costs and not giving youth the opportunity to express themselves. Young people question the values accepted by adults, which they consider conservative and limiting their capacity to develop their potential for better personal and societal success. This mutual misunderstanding leads to mutual rejection and consequently to conflicts.</p>

          <h2>Violence in Schools and Drug Abuse</h2>
          <p>Violence in schools is aggravated by drug, alcohol and narcotic consumption. Many criminals use social networks or roam around schools to sell drugs to students or make some students sales agents for these products. With the proliferation of alcohol sales points around schools, students have easy access.</p>
          
          <p>This behavior induces consequences as serious as school dropout, early pregnancies, student assaults, assaults on parents and teachers. Faced with this observation, ministries in charge of education in Cameroon, following a conference organized in December 2022, prescribed recommendations with an action plan including:</p>
          <ul>
            <li>Installation of video surveillance in all schools</li>
            <li>Systematization of surprise searches</li>
            <li>Securing premises by building fences</li>
            <li>Decongesting overcrowded schools</li>
            <li>Strengthening collaboration between schools and deconcentrated services</li>
            <li>Development of an ethical code for secondary education</li>
          </ul>

          <h2>Agropastoral Conflicts</h2>
          <p>Cohabitation between cattle herders and farmers in our intervention zone is not easy. Access to land for livestock and agriculture is subject to fierce competition between these socio-professional groups. The high population density (300 to 400 inhabitants/km²) makes competition for this resource even fiercer. Due to the proximity of farms and narrowness of pastures, crops are often destroyed by cattle, creating tensions, quarrels and conflicts between farmers and herders.</p>

          <h2>The "Anglophone" Crisis</h2>
          <p>The "Anglophone" problem continues to shake Cameroon's socio-political landscape. Through corporate grievances dating from 2016, this problem slowly transformed into political demands for a return to federalism and then into a violent secessionist movement. The crisis toll shows numerous loss of lives including hundreds of law enforcement members and many civilian victims.</p>

          <h2>Internally Displaced Persons (IDPs)</h2>
          <p>Internal population migrations have had repercussions on social cohesion at individual, economic, socio-cultural and socio-political levels. These internally displaced persons suffer various types of violence including physical violence, sexual and psychological violence, financial exploitation, and neglect. At the end of January 2024, IDPs were estimated at 1,075,252 in Cameroon.</p>
        `,
        fr: `
          <p>Les zones d'interventions du CIPCRE présentent une multiplicité de facteurs pouvant constituer des sources de conflits ou de menaces à la paix et à la cohésion sociale aussi bien en milieu scolaire qu'en communauté. Ces facteurs comprennent la fracture entre les jeunes générations et les adultes, la consommation d'alcool, de drogues et stupéfiants en milieu scolaire et en communauté, la prolifération des courants religieux, le radicalisme religieux, la cohabitation difficile entre les agriculteurs et les éleveurs des bovins et la crise sécuritaire dans le NOSO.</p>
          
          <h2>Fracture Générationnelle</h2>
          <p>L'incompréhension entre les jeunes et les adultes est de plus en plus marquée au Cameroun. Les adultes mettent en place des stratégies dans le but de maintenir une société qui leur profite notamment maintenir à tout prix leur pouvoir de domination, ne pas donner la possibilité aux jeunes de s'exprimer. Les jeunes remettent en question les valeurs admises par les adultes, qu'ils considèrent comme conservatrices et qui limitent leurs capacités à mettre en valeur leur potentiel. Cette incompréhension devenue réciproque conduit à un rejet mutuel et par conséquent à des conflits.</p>

          <h2>Violence en Milieu Scolaire et Consommation de Drogues</h2>
          <p>La violence en milieu scolaire est aggravée par la consommation des drogues, alcools et stupéfiants. De nombreux malfaiteurs utilisent les réseaux sociaux ou sillonnent les alentours des établissements scolaires pour vendre de la drogue aux élèves. Avec la prolifération des points de vente de boissons alcoolisées, les élèves y accèdent facilement.</p>
          
          <p>Ce comportement induit des conséquences graves : déperditions scolaires, grossesses précoces, agressions. Face à ce constat, les ministères ont prescrit des recommandations incluant :</p>
          <ul>
            <li>Installation de la vidéo surveillance dans tous les établissements</li>
            <li>Systématisation des fouilles inopinées</li>
            <li>Sécurisation des enceintes par la construction des clôtures</li>
            <li>Décongestion des établissements à gros effectifs</li>
            <li>Renforcement de la collaboration avec les services déconcentrés</li>
            <li>Élaboration d'un code éthique au niveau du système éducatif</li>
          </ul>

          <h2>Conflits Agropastoraux</h2>
          <p>Du côté des éleveurs et des agriculteurs, la cohabitation n'est pas facile. L'accès à la terre fait l'objet d'une forte compétition. La densité élevée de population (300 à 400 hbts/km²) rend la compétition encore plus féroce. Du fait de la proximité des exploitations et de l'étroitesse des pâturages, les cultures sont souvent détruites par les bœufs, créant tensions et conflits.</p>

          <h2>La Crise "Anglophone"</h2>
          <p>Le problème « anglophone » continue d'agiter le paysage socio-politique. À la faveur des revendications de 2016, ce problème s'est transformé en revendications politiques puis en mouvement sécessionniste violent. Le bilan fait état de nombreuses pertes en vies humaines.</p>

          <h2>Personnes Déplacées Internes (PDI)</h2>
          <p>Les migrations internes ont eu des répercussions sur la cohésion sociale. Ces PDI subissent divers types de violences : physiques, sexuelles, psychologiques, exploitation financière et négligence. Fin janvier 2024, les PDI sont estimées à 1.075.252 au Cameroun.</p>
        `,
      },

      vision: {
        en: "PACOS dreams of a Cameroon where: All religious denominations unite to promote Peace and foster coexistence; All communities, however minority, feel accepted and live in perfect harmony with others on the same territory; Each community member fully plays their dedicated role in promoting peace and eradicating violence in schools.",
        fr: "Le PACOS rêve d'un Cameroun au sein duquel : Toutes les confessions religieuses s'unissent pour promouvoir la Paix et favoriser le vivre ensemble ; Toutes les communautés aussi minoritaires qu'elles soient, se sentent acceptées et vivent en parfaite harmonie avec les autres ; Chaque membre de la communauté joue pleinement le rôle qui lui est dédié dans le souci de promouvoir la paix et d'éradiquer la violence en milieu scolaire.",
      },

      expectedResults: {
        en: [
          "Students are trained on strategies to fight drug and narcotic trafficking and consumption in schools",
          "Teachers are trained on strategies to fight drug and narcotic trafficking and consumption in schools",
          "Teachers are trained on using positive discipline as a sanctioning method in schools",
          "Students in CIPCRE partner schools are sensitized on fighting drugs and narcotics",
          "CLM members are trained on conflict prevention and peaceful management methods",
          "Young peace ambassador leaders are trained on fighting hate speech",
          "Memorandums for MIRPADH campaigns are available",
        ],
        fr: [
          "Les élèves sont capacités sur les stratégies de lutte contre le trafic et la consommation des drogues et stupéfiants",
          "Les enseignants sont capacités sur les stratégies de lutte contre le trafic et la consommation des drogues",
          "Les enseignants sont capacités sur l'utilisation de la discipline positive comme mode de sanctions",
          "Les élèves des établissements scolaires partenaires sont sensibilisés sur la lutte contre les drogues",
          "Les membres des CLM sont capacités sur les méthodes de prévention et de gestion pacifique des conflits",
          "Les jeunes leaders ambassadeurs de la paix sont capacités sur la lutte contre les propos haineux",
          "Les mémorandums en faveur des campagnes du MIRPADH sont disponibles",
        ],
      },

      keyActions: {
        en: [
          "Establishment of young peace ambassador leaders group to fight hate speech",
          "Support for peace ambassadors in organizing awareness campaigns",
          "Establishment of EEC justice, peace and safeguarding creation (JPSC) dynamics",
          "Support for EEC pilot synodal regions for parish rooting of good practices",
          "Establishment of student and teacher leaders for school non-violence promotion",
          "Training sessions for student leaders on strategies to fight drug trafficking",
          "Training sessions for teachers on strategies to fight drug trafficking",
          "Teacher capacity building on using positive discipline as sanction method",
          "Support for student and teacher leader initiatives promoting non-violence",
          "Facilitation of medical and psychological care for young people struggling with addictions",
          "Use of theater as a means of awareness and denunciation",
          "Lobbying with religious leaders and stakeholders for MIRPAD implementation",
          "Strengthening capacities of local mediation committee (CLM) members",
          "Organization of MIRPADH campaigns",
          "Facilitation of mediation meetings between farmers and herders",
          "Support for initiatives to reduce conflicts (cattle corridors, water points, brachiaria)",
        ],
        fr: [
          "Mise sur pied d'un groupe de jeunes leaders ambassadeurs de la paix",
          "Accompagnement des ambassadeurs de paix pour l'organisation des campagnes",
          "Mise sur pied des dynamiques justice, paix et sauvegarde de la création (JPSC)",
          "Accompagnement des régions synodales pilotes de l'EEC",
          "Mise sur pied des leaders élèves et enseignants",
          "Formation des leaders élèves sur les stratégies de lutte contre le trafic de drogues",
          "Formation des enseignants sur les stratégies de lutte contre le trafic de drogues",
          "Renforcement des capacités des enseignants sur la discipline positive",
          "Soutien des initiatives des leaders élèves et enseignants",
          "Facilitation de la prise en charge médicale et psychologique des jeunes",
          "Utilisation de l'outil théâtre comme moyen de sensibilisation",
          "Lobbying auprès des leaders religieux pour la mise en œuvre du MIRPAD",
          "Renforcement des capacités des membres des comités locaux de médiation",
          "Organisation des campagnes du MIRPADH",
          "Facilitation des rencontres de médiation entre agriculteurs et éleveurs",
          "Soutien aux initiatives pour réduire les conflits (couloirs, points d'eau, brachiaria)",
        ],
      },

      targetGroups: {
        en: "Target groups include Farmers, Herders, Traditional Chiefs, Muslim, Protestant, Catholic and traditional religion leaders, members of faith communities, Students, Teachers, young peace ambassador leaders, local mediation committee (CLM) members, Administrative Authorities and Civil Society Organizations.",
        fr: "Les groupes cibles comprennent des Agriculteurs, Eleveurs, Chefs Traditionnels, Leaders religieux musulmans, protestants, catholiques, membres des communautés de foi, Elèves, Enseignants, jeunes leaders ambassadeurs de paix, membres des comités locaux de médiation (CLM), Autorités administratives et Organisations de la Société Civile.",
      },

      implementationStrategy: {
        en: [
          "Establishment of peace ambassador groups and JPSC dynamics",
          "Training and capacity building for students, teachers, and CLM members",
          "Organization of awareness campaigns and mediation meetings",
          "Use of theater as sensitization tool",
          "Lobbying with religious and administrative authorities",
          "Support for conflict reduction initiatives",
          "Medical and psychological support for addiction cases",
        ],
        fr: [
          "Mise en place des groupes ambassadeurs de paix et dynamiques JPSC",
          "Formation et renforcement des capacités des élèves, enseignants et membres CLM",
          "Organisation des campagnes de sensibilisation et rencontres de médiation",
          "Utilisation de l'outil théâtre pour la sensibilisation",
          "Lobbying auprès des autorités religieuses et administratives",
          "Soutien aux initiatives de réduction des conflits",
          "Accompagnement médical et psychologique des cas d'addiction",
        ],
      },

      sustainability: {
        en: `
          <h3>Student and Teacher Leadership</h3>
          <p>Creation of groups consisting of student and teacher leaders who continuously take initiatives to promote non-violence within schools.</p>

          <h3>Local Mediation Committees</h3>
          <p>Existence of local committees that initiate awareness campaigns to reduce the high rate of agro-pastoral conflicts.</p>

          <h3>Peace Promotion Groups</h3>
          <p>Creation of groups with the objective of promoting peace and social cohesion, valorizing groups already instituted in schools (school cooperatives, student governments, class delegates).</p>

          <h3>Institutional Collaboration</h3>
          <p>Collaboration with state authorities, religious and traditional leaders to facilitate population adhesion and implementation of jointly agreed decisions.</p>

          <h3>Regular Monitoring</h3>
          <p>Regular monitoring of activities carried out by different beneficiaries ensures continuous improvement and sustainability.</p>
        `,
        fr: `
          <h3>Leadership Scolaire</h3>
          <p>La création des groupes de leaders d'élèves et enseignants qui prennent des initiatives pour promouvoir la non-violence.</p>

          <h3>Comités Locaux de Médiation</h3>
          <p>L'existence des comités locaux qui initient les campagnes de sensibilisation pour réduire les conflits agro-pastoraux.</p>

          <h3>Groupes de Promotion de la Paix</h3>
          <p>La création des groupes pour la promotion de la paix et de la cohésion sociale. Valorisation des groupes déjà institués en milieu scolaire.</p>

          <h3>Collaboration Institutionnelle</h3>
          <p>La collaboration avec les autorités étatiques, les leaders religieux et traditionnels pour faciliter l'adhésion des populations.</p>

          <h3>Suivi Régulier</h3>
          <p>Un suivi régulier des activités menées par les différents bénéficiaires.</p>
        `,
      },
    },
    "human-rights-citizen-participation": {
      title: {
        en: "Human Rights & Citizen Participation",
        fr: "Droits Humains et Participation Citoyenne",
      },
      acronym: "PDHUPAC",
      coverImage: humanRightsProgramImage,
      period: "2024-2026",
      regions: {
        en: ["West", "Adamawa"],
        fr: ["Ouest", "Adamaoua"],
      },
      beneficiaries: "50,000+",
      themes: {
        en: [
          "Child Protection",
          "Women's Rights",
          "Citizen Participation",
          "Gender-Based Violence",
        ],
        fr: [
          "Protection de l'Enfant",
          "Droits de la Femme",
          "Participation Citoyenne",
          "Violences Basées sur le Genre",
        ],
      },

      context: {
        en: `
          <p>Despite efforts by the Cameroonian government with support from its various partners to improve gender equality and promote women's and children's rights, many continue to be victims of serious violations that deprive them of their rights.</p>
          
          <h2>Alarming Statistics</h2>
          <p>The figures reveal the scale of the problem. In 2015, UNICEF estimated that 13.42% of women were married in Cameroon before age 15 (30% in northern regions) and 20% of adolescent girls aged 15-19 were married. Regarding GBV, statistics show that 54.6% of women have been victims of some form of violence from age 15 compared to 9.8% for men.</p>
          
          <p>During the last three-year action plan 2021-2023, CIPCRE identified 3,301 child victims of violence in the project area including 1,218 cases of parental neglect, 271 sexual abuse cases, 112 child marriages, and 1,700 children without birth certificates.</p>

          <h2>Key Challenges</h2>
          
          <h3>Positive Parenting Deficit</h3>
          <p>Parents are not sufficiently familiar with practices promoted by positive parenting. They don't always understand the importance of investing in their children's human capital, who may not be declared at birth, not enrolled in school, or sent into early marriage.</p>

          <h3>Impunity for Perpetrators</h3>
          <p>Despite CIPCRE's efforts to break taboos and encourage reporting, perpetrator impunity remains a bottleneck due to parents' lack of familiarity with legal culture and poor judicial practices (delays, corruption, influence peddling).</p>

          <h3>Life Skills Gaps</h3>
          <p>Students lack sufficient skills to detect risky situations and generate solutions for problem-solving and decision-making.</p>

          <h3>Sexual Health Deficit</h3>
          <p>This results in increasing teen pregnancies. 1 in 4 girls is already a mother before age 18. Sex education remains taboo in many families, leaving adolescents exposed to poor menstrual hygiene and related diseases.</p>

          <h3>Psychological Impact Ignorance</h3>
          <p>A 2018 CCAP study showed that of 1,134 violence cases in the Far North and 577 in the West, 97% of the population didn't know these incidents have serious repercussions on children's psychological health.</p>

          <h3>Widowhood Rites</h3>
          <p>Of 133 villages in the West region, only 30 (22.5%) have committed to fight harmful widowhood practices, leaving thousands of women suffering.</p>

          <h3>Low Citizen Participation</h3>
          <p>Women don't always participate in decision-making processes, preventing their protection needs from being addressed in local development policies.</p>
        `,
        fr: `
          <p>Malgré les efforts du gouvernement camerounais avec l'appui de ses partenaires pour l'amélioration de l'égalité de genre et la promotion des droits de la femme et de l'enfant, bon nombre continuent d'être victimes de graves violations.</p>
          
          <h2>Statistiques Alarmantes</h2>
          <p>En 2015, UNICEF estimait que 13,42% de femmes étaient mises en mariage avant 15 ans (30% pour les régions septentrionales) et 20% d'adolescentes de 15-19 ans étaient mariées. Pour les VBG, 54,6% de femmes ont été victimes de violence à partir de 15 ans contre 9,8% chez les hommes.</p>
          
          <p>Pendant 2021-2023, le CIPCRE a identifié 3301 enfants victimes de violences : 1218 cas de négligences parentales, 271 d'abus sexuels, 112 de mariage d'enfants et 1700 enfants sans actes de naissance.</p>

          <h2>Défis Majeurs</h2>
          
          <h3>Déficit de Parentalité Positive</h3>
          <p>Les parents ne sont pas familiarisés aux pratiques de parentalité positive. Ils n'ont pas les clés pour comprendre l'importance d'investir sur le capital humain de leurs enfants, non déclarés à la naissance, non scolarisés, ou envoyés précocement en mariage.</p>

          <h3>Persistance de l'Impunité</h3>
          <p>Malgré les efforts du CIPCRE, l'impunité des auteurs reste un goulot d'étranglement lié au manque de culture judiciaire et aux mauvaises pratiques (lenteurs, corruption, trafic d'influence).</p>

          <h3>Lacunes de Compétences de Vie</h3>
          <p>Les élèves manquent de compétences pour déceler les situations à risque et générer des solutions de résolution de problèmes et prise de décision.</p>

          <h3>Déficit en Santé Sexuelle</h3>
          <p>Augmentation galopante des grossesses précoces. 1 fille sur 4 est mère avant 18 ans. L'éducation sexuelle est tabou, exposant les adolescentes à la mauvaise hygiène menstruelle et maladies associées.</p>

          <h3>Ignorance de l'Impact Psychologique</h3>
          <p>Étude CCAP 2018 : sur 1134 cas au Grand Nord et 577 à l'Ouest, 97% de la population ignorait les répercussions graves sur la santé psychologique de l'enfant.</p>

          <h3>Résistances aux Rites de Veuvage</h3>
          <p>Sur 133 villages de l'Ouest, seulement 30 (22,5%) luttent contre les mauvaises pratiques de veuvage, laissant des milliers de femmes souffrir.</p>

          <h3>Faible Participation Citoyenne</h3>
          <p>Les femmes ne participent pas toujours aux processus de décision, empêchant la prise en compte de leurs besoins de protection dans les politiques locales.</p>
        `,
      },

      vision: {
        en: "Children, youth and women in CIPCRE intervention zones are better protected against sexual and cultural violence, enabling them to effectively defend their rights in local decision-making bodies on public affairs management.",
        fr: "Les enfants, les jeunes et les femmes des zones d'intervention du CIPCRE sont mieux protégés contre les violences sexuelles et culturelles, ce qui leur permet de défendre efficacement leurs droits dans les instances locales de décisions sur la gestion des affaires publiques.",
      },

      expectedResults: {
        en: [
          "In project zones, at least 60% of reported child violence cases receive adequate support",
          "In at least 70 of the 133 target villages in the West region, systematic processes replace harmful widowhood rites with women's customary law",
          "At least 4 recommendations formulated by women following their citizen initiatives are processed with feedback from competent authorities",
          "Increased youth participation rate in 2025 elections",
        ],
        fr: [
          "Au moins 60% des cas de violences envers les enfants dénoncés bénéficient d'une prise en charge adéquate",
          "Dans au moins 70 des 133 villages cibles de l'Ouest, des processus systématiques remplacent les rites de veuvage par le droit coutumier des femmes",
          "Au moins 4 recommandations formulées par les femmes suite à leurs initiatives citoyennes sont traitées avec feedback des autorités",
          "Augmentation du taux de participation des jeunes aux élections de 2025",
        ],
      },

      keyActions: {
        en: [
          "Promote positive parenting as a means of preventing violence",
          "Advocate for strengthening the fight against impunity for child violence perpetrators",
          "Develop life skills in schoolchildren to face violence",
          "Promote adolescent sexual and reproductive health to prevent early pregnancies, child marriage and STIs",
          "Promote customary code as a tool for humanizing widowhood rites among West traditional chiefs",
          "Promote youth and women citizen participation",
          "Promote youth participation in electoral processes in the West",
          "Promote a community environment protecting children against sexual, cultural and religious violence (PECPEVI)",
          "Strengthen child protective environments through positive parenting and non-violence education (REPEPPEN)",
          "Support GBV prevention, birth certificate production and complaints management for SWEDD Cameroon project",
        ],
        fr: [
          "Promouvoir la parentalité positive comme moyen de prévention des violences",
          "Plaidoyer pour le renforcement de la lutte contre l'impunité des auteurs de violences",
          "Développer les compétences de vie courante chez les enfants pour faire face aux violences",
          "Promouvoir la santé sexuelle et reproductive pour prévenir grossesses précoces, mariages d'enfants et MST",
          "Promouvoir le code coutumier comme outil d'humanisation des rites de veuvage",
          "Promouvoir la participation citoyenne des jeunes et femmes",
          "Promouvoir la participation des jeunes dans les processus électoraux à l'Ouest",
          "Promouvoir un environnement communautaire protecteur des enfants (PECPEVI)",
          "Renforcer l'environnement protecteur par la parentalité positive (REPEPPEN)",
          "Appuyer la prévention des VBG et la production d'actes de naissance (projet SWEDD)",
        ],
      },

      targetGroups: {
        en: "Educational and faith communities, Religious, traditional and associative leaders, Administrative, political and judicial authorities, Heads of deconcentrated state services, Child protection chain actors, Officiants/widows, Children and women victims or at risk, Independent Municipal Public Action Observers (OFISAP), Civil society organizations, Media, Paralegal workers, Parent leaders, Youth leaders, Peer Educators trained in Sexual and Reproductive Health (PESSER).",
        fr: "Communautés éducatives et de foi, Leaders religieux, traditionnels et associatifs, Autorités administratives, politiques et judiciaires, Responsables des services déconcentrés, Acteurs de la chaine de protection des enfants, Officiantes/veuves, Enfants et femmes victimes ou à risque, Observateurs Communaux Indépendants (OFISAP), Organisations de la société civile, Médias, Parajuristes, Parents leaders, Jeunes leaders, Pairs Educateurs en Santé Sexuelle et Reproductive (PESSER).",
      },

      implementationStrategy: {
        en: [
          "Facilitation: training, support and empowerment of relay persons and widow associations",
          "Accountability: bringing parents to take ownership of child protection",
          "Participation: involving target groups in planning and implementation",
          "Valorization: implementing codes of conduct, using existing documents",
          "Gender approach: improving men/women relationships in intervention zones",
          "Survivor support: comprehensive assistance for violence survivors",
        ],
        fr: [
          "Le faire-faire : formation, accompagnement et autonomisation des personnes relais",
          "Responsabilisation : amener les parents à s'approprier la protection des enfants",
          "Participation : impliquer les groupes cibles dans la planification et mise en œuvre",
          "Valorisation : implémenter les codes de bonne conduite, utiliser les documents existants",
          "Approche genre : améliorer les rapports hommes/femmes",
          "Accompagnement des survivants : assistance complète pour les victimes",
        ],
      },

      sustainability: {
        en: `
          <h3>Community Ownership</h3>
          <p>Training and empowerment of relay persons and widow associations ensures continuous community-led initiatives for child and women protection.</p>

          <h3>Target Group Accountability</h3>
          <p>Parents take ownership of child protection based on human rights approach, ensuring family-level violence prevention and support for victim care.</p>

          <h3>Participatory Approach</h3>
          <p>Planning and implementing activities with target group involvement ensures local ownership and sustainability of interventions.</p>

          <h3>Achievement Valorization</h3>
          <p>Implementation of codes of conduct in schools and use of existing documents ensures institutionalization of good practices.</p>

          <h3>Gender-Sensitive Approach</h3>
          <p>Improving men/women relationships in intervention zones creates an enabling environment for women's rights and gender equality.</p>

          <h3>Survivor Support</h3>
          <p>Comprehensive support for violence survivors including medical, psychological and legal assistance ensures their recovery and reintegration.</p>
        `,
        fr: `
          <h3>Appropriation Communautaire</h3>
          <p>La formation et l'autonomisation des personnes relais et associations de veuves assurent des initiatives continues pour la protection des enfants et des femmes.</p>

          <h3>Responsabilisation des Groupes Cibles</h3>
          <p>Les parents s'approprient la protection de leurs enfants sur la base de l'approche droits humains, assurant la prévention familiale des violences.</p>

          <h3>Approche Participative</h3>
          <p>La planification et la réalisation des activités en impliquant les groupes cibles assurent l'appropriation locale et la durabilité des interventions.</p>

          <h3>Valorisation des Acquis</h3>
          <p>L'implémentation des codes de bonne conduite et l'utilisation des documents existants assurent l'institutionnalisation des bonnes pratiques.</p>

          <h3>Approche Genre</h3>
          <p>L'amélioration des rapports hommes/femmes crée un environnement favorable aux droits des femmes et à l'égalité des genres.</p>

          <h3>Accompagnement des Survivants</h3>
          <p>L'accompagnement complet incluant une assistance médicale, psychologique et juridique assure leur rétablissement et réintégration.</p>
        `,
      },
    },
  };

  // Get program by slug or show 404
  const program = slug ? programs[slug] : null;

  if (!program) {
    return (
      <div className="max-w-[1440px] mx-auto px-12 py-24 text-center">
        <h1 className="mb-4">Program Not Found</h1>
        <p className="text-neutral-600 mb-8">
          The program you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link to="/programs">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Programs
          </Link>
        </Button>
      </div>
    );
  }

  const t = (key: any) =>
    typeof key === "object" && key !== null ? key[language] || key.en : key;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-[1440px] mx-auto px-12 pt-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link to="/programs">
            <ArrowLeft className="mr-2 w-4 h-4" />
            {language === "fr" ? "Retour aux Programmes" : "Back to Programs"}
          </Link>
        </Button>
      </div>

      {/* Hero Section with Cover Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={program.coverImage}
          alt={t(program.title)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1440px] mx-auto px-12 pb-16 w-full">
            <div className="inline-block px-4 py-2 bg-[#1B5E20] rounded-full mb-4">
              <span className="text-sm font-medium text-white">
                {program.acronym} | {program.period}
              </span>
            </div>
            <h1 className="mb-4 text-white max-w-4xl">{t(program.title)}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  {t(program.regions).join(", ")}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  {program.beneficiaries}{" "}
                  {language === "fr" ? "bénéficiaires" : "beneficiaries"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-12 py-16">
        {/* Themes */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {t(program.themes).map((theme: string) => (
              <Badge
                key={theme}
                className="bg-[#E8F5E9] text-[#1B5E20] hover:bg-[#C8E6C9] border-0 px-4 py-2 text-base"
              >
                {theme}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="col-span-2 space-y-12">
            {/* Vision */}
            <section className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-8 rounded-2xl border-l-4 border-[#1B5E20]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1B5E20] flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-[#1B5E20] mb-3">
                    {language === "fr"
                      ? "Vision du Programme"
                      : "Program Vision"}
                  </h2>
                  <p className="text-neutral-800 leading-relaxed text-lg">
                    {t(program.vision)}
                  </p>
                </div>
              </div>
            </section>

            {/* Context */}
            <section>
              <h2 className="mb-6 text-neutral-900 font-bold">
                {language === "fr"
                  ? "Contexte et Justification"
                  : "Context and Justification"}
              </h2>
              <div
                className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-neutral-700 prose-p:leading-relaxed prose-ul:text-neutral-700 prose-li:my-2"
                dangerouslySetInnerHTML={{ __html: t(program.context) }}
              />
            </section>

            {/* Expected Results */}
            <section>
              <h2 className="mb-6 text-neutral-900 font-bold">
                {language === "fr" ? "Résultats Attendus" : "Expected Results"}
              </h2>
              <div className="space-y-4">
                {t(program.expectedResults).map(
                  (result: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#F1F8E9] rounded-lg border-l-4 border-[#689F38] hover:bg-[#E8F5E9] transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#689F38] shrink-0 mt-1" />
                      <p className="text-neutral-800 leading-relaxed">
                        {result}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Key Actions */}
            <section>
              <h2 className="mb-6 text-neutral-900 font-bold">
                {language === "fr" ? "Principales Actions" : "Key Actions"}
              </h2>
              <div className="grid gap-3">
                {t(program.keyActions).map((action: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white border-2 border-neutral-100 rounded-lg hover:border-[#1B5E20]/30 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1B5E20] flex items-center justify-center shrink-0 text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-neutral-700 leading-relaxed">{action}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sustainability */}
            <section>
              <h2 className="mb-6 text-neutral-900 font-bold">
                {language === "fr"
                  ? "Conditions de Durabilité"
                  : "Sustainability Conditions"}
              </h2>
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#1B5E20] prose-headings:font-semibold prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-700 prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t(program.sustainability) }}
              />
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Target Groups */}
              <div className="bg-white border-2 border-neutral-100 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1B5E20]" />
                  </div>
                  <h3 className="text-neutral-900">
                    {language === "fr" ? "Groupes Cibles" : "Target Groups"}
                  </h3>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  {t(program.targetGroups)}
                </p>
              </div>

              {/* Implementation Strategy */}
              <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-white rounded-xl p-6 shadow-lg">
                <h3 className="mb-4 text-white">
                  {language === "fr"
                    ? "Stratégies de Mise en Œuvre"
                    : "Implementation Strategy"}
                </h3>
                <ul className="space-y-3">
                  {t(program.implementationStrategy).map(
                    (strategy: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">
                          {strategy}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-[#F1F8E9] border-2 border-[#689F38] rounded-xl p-6">
                <h3 className="mb-3 text-[#1B5E20]">
                  {language === "fr" ? "Documentation" : "Documentation"}
                </h3>
                <p className="text-neutral-700 mb-4 text-sm leading-relaxed">
                  {language === "fr"
                    ? "Accédez aux rapports, études et documents du programme."
                    : "Access program reports, studies and documents."}
                </p>
                <Button
                  asChild
                  className="w-full bg-[#1B5E20] hover:bg-[#2E7D32]"
                >
                  <Link to="/documentation">
                    {language === "fr"
                      ? "Voir les Documents"
                      : "View Documents"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
