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
import { ArrowLeft, Calendar, Clock, Download, Share2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

export function ArticlePage({ slug }: { slug: string }) {
  const { language } = useLanguage();

  // Article database with full content
  const articles: Record<string, any> = {
    "womens-entrepreneurship-hub-yaounde": {
      title: {
        en: "CIPCRE Launches New Women's Entrepreneurship Hub in Yaoundé",
        fr: "Le CIPCRE Lance un Nouveau Hub d'Entrepreneuriat Féminin à Yaoundé",
      },
      date: "January 15, 2026",
      category: { en: "Program Launch", fr: "Lancement de Programme" },
      theme: { en: "Gender", fr: "Genre" },
      readTime: "5 min",
      excerpt: {
        en: "The new hub will provide training, mentorship, and access to financing for 500 women entrepreneurs across Cameroon.",
        fr: "Le nouveau hub offrira formation, mentorat et accès au financement pour 500 femmes entrepreneures au Cameroun.",
      },
      image:
        "https://images.unsplash.com/photo-1610626295085-aa8d6ae8daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NzAxMjg4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: {
        en: `
          <p>CIPCRE is proud to announce the launch of our newest Women's Entrepreneurship Hub in Yaoundé, Cameroon. This state-of-the-art facility represents our continued commitment to empowering women through economic opportunities and sustainable business development.</p>
          
          <h2>A Comprehensive Support System</h2>
          <p>The hub will serve as a one-stop center for women entrepreneurs at all stages of their business journey. From aspiring business owners to established entrepreneurs looking to scale, the facility offers:</p>
          <ul>
            <li>Professional business training and skills development programs</li>
            <li>One-on-one mentorship with successful women business leaders</li>
            <li>Access to microfinance and business loans</li>
            <li>Networking opportunities with investors and partners</li>
            <li>Co-working spaces and meeting rooms</li>
            <li>Business registration and legal support services</li>
          </ul>

          <h2>Addressing Key Barriers</h2>
          <p>Our research has shown that women entrepreneurs in Central Africa face unique challenges including limited access to capital, lack of business networks, and cultural barriers. The hub is specifically designed to address these obstacles by creating a supportive ecosystem where women can learn, grow, and thrive.</p>

          <h2>Expected Impact</h2>
          <p>Over the next three years, we anticipate supporting 500 women entrepreneurs through this initiative. Our projections indicate that these businesses will create over 2,000 jobs and contribute significantly to local economic development. Early indicators from our pilot programs show that women who receive this type of comprehensive support see an average 85% increase in business revenue within the first year.</p>

          <h2>Partnership and Sustainability</h2>
          <p>This initiative is made possible through partnerships with the European Union, local financial institutions, and women's business associations. The hub will be self-sustaining through a combination of membership fees, service charges, and continued donor support.</p>

          <p>We invite all interested women entrepreneurs to visit the hub during our open house on February 1-3, 2026. Registration for programs will open in March 2026.</p>
        `,
        fr: `
          <p>Le CIPCRE est fier d'annoncer le lancement de notre nouveau Hub d'Entrepreneuriat Féminin à Yaoundé, Cameroun. Cette installation de pointe représente notre engagement continu à autonomiser les femmes à travers des opportunités économiques et le développement d'entreprises durables.</p>
          
          <h2>Un Système de Soutien Complet</h2>
          <p>Le hub servira de centre unique pour les femmes entrepreneures à tous les stades de leur parcours entrepreneurial. Des aspirantes propriétaires d'entreprises aux entrepreneures établies cherchant à se développer, l'installation offre :</p>
          <ul>
            <li>Formation professionnelle et programmes de développement des compétences</li>
            <li>Mentorat individuel avec des femmes leaders d'entreprise à succès</li>
            <li>Accès au microfinancement et aux prêts commerciaux</li>
            <li>Opportunités de réseautage avec investisseurs et partenaires</li>
            <li>Espaces de coworking et salles de réunion</li>
            <li>Services d'enregistrement d'entreprise et de soutien juridique</li>
          </ul>

          <h2>Surmonter les Obstacles Clés</h2>
          <p>Nos recherches ont montré que les femmes entrepreneures en Afrique Centrale font face à des défis uniques incluant un accès limité au capital, un manque de réseaux d'affaires, et des barrières culturelles. Le hub est spécifiquement conçu pour aborder ces obstacles en créant un écosystème de soutien où les femmes peuvent apprendre, grandir et prospérer.</p>

          <h2>Impact Attendu</h2>
          <p>Au cours des trois prochaines années, nous prévoyons soutenir 500 femmes entrepreneures à travers cette initiative. Nos projections indiquent que ces entreprises créeront plus de 2 000 emplois et contribueront significativement au développement économique local. Les premiers indicateurs de nos programmes pilotes montrent que les femmes qui reçoivent ce type de soutien complet voient une augmentation moyenne de 85% de leur chiffre d'affaires au cours de la première année.</p>

          <h2>Partenariat et Durabilité</h2>
          <p>Cette initiative est rendue possible grâce à des partenariats avec l'Union Européenne, des institutions financières locales et des associations de femmes d'affaires. Le hub sera auto-suffisant grâce à une combinaison de frais d'adhésion, de frais de service et de soutien continu des donateurs.</p>

          <p>Nous invitons toutes les femmes entrepreneures intéressées à visiter le hub pendant nos portes ouvertes du 1er au 3 février 2026. Les inscriptions aux programmes ouvriront en mars 2026.</p>
        `,
      },
    },
    "partnership-eu-education": {
      title: {
        en: "Partnership with EU for Regional Education Initiative",
        fr: "Partenariat avec l'UE pour une Initiative Éducative Régionale",
      },
      date: "December 20, 2025",
      category: { en: "Partnership", fr: "Partenariat" },
      theme: { en: "Education", fr: "Éducation" },
      readTime: "6 min",
      excerpt: {
        en: "New €12 million partnership will improve education quality and access for 200,000 children across Central Africa.",
        fr: "Un nouveau partenariat de 12 millions d'euros améliorera la qualité de l'éducation et l'accès pour 200 000 enfants en Afrique Centrale.",
      },
      image: euEducationImage,
      content: {
        en: `
          <p>CIPCRE has signed a landmark €12 million partnership agreement with the European Union to implement a comprehensive education quality improvement program across Central Africa. This five-year initiative will directly benefit 200,000 children in Cameroon, Chad, and the Central African Republic.</p>
          
          <h2>Program Components</h2>
          <p>The Regional Education Initiative focuses on four key pillars:</p>
          <ul>
            <li><strong>Teacher Training:</strong> Professional development for 5,000 teachers in modern pedagogical methods and inclusive education practices</li>
            <li><strong>Infrastructure Development:</strong> Construction and renovation of 150 schools with improved facilities including libraries, science labs, and accessible classrooms</li>
            <li><strong>Learning Materials:</strong> Distribution of textbooks, digital learning tools, and teaching aids to all participating schools</li>
            <li><strong>Community Engagement:</strong> Programs to increase parental involvement and community support for education, particularly for girls' education</li>
          </ul>

          <h2>Addressing Educational Challenges</h2>
          <p>Central Africa faces significant educational challenges including teacher shortages, inadequate infrastructure, and low enrollment rates, particularly for girls in rural areas. This program takes a holistic approach by addressing both the supply side (teacher training, infrastructure) and demand side (community engagement, scholarships) of the education equation.</p>

          <h2>Focus on Equity and Inclusion</h2>
          <p>Special attention will be given to reaching the most marginalized children, including girls, children with disabilities, and those in remote rural communities. The program includes targeted scholarships for 10,000 girls and specialized support for 2,000 children with disabilities.</p>

          <h2>Implementation Timeline</h2>
          <p>The program will be rolled out in three phases over five years, beginning in March 2026. The first phase will focus on teacher training and needs assessment, followed by infrastructure development and materials distribution in years 2-3, and scaling up successful interventions in years 4-5.</p>

          <p>This partnership represents the European Union's continued commitment to education in Central Africa and CIPCRE's proven track record in implementing large-scale development programs that deliver measurable results.</p>
        `,
        fr: `
          <p>Le CIPCRE a signé un accord de partenariat historique de 12 millions d'euros avec l'Union Européenne pour mettre en œuvre un programme complet d'amélioration de la qualité de l'éducation en Afrique Centrale. Cette initiative de cinq ans bénéficiera directement à 200 000 enfants au Cameroun, au Tchad et en République Centrafricaine.</p>
          
          <h2>Composantes du Programme</h2>
          <p>L'Initiative Éducative Régionale se concentre sur quatre piliers clés :</p>
          <ul>
            <li><strong>Formation des Enseignants :</strong> Développement professionnel pour 5 000 enseignants en méthodes pédagogiques modernes et pratiques d'éducation inclusive</li>
            <li><strong>Développement des Infrastructures :</strong> Construction et rénovation de 150 écoles avec des installations améliorées incluant bibliothèques, laboratoires scientifiques et salles de classe accessibles</li>
            <li><strong>Matériel Pédagogique :</strong> Distribution de manuels scolaires, outils d'apprentissage numérique et aides pédagogiques à toutes les écoles participantes</li>
            <li><strong>Engagement Communautaire :</strong> Programmes pour augmenter l'implication parentale et le soutien communautaire à l'éducation, particulièrement pour l'éducation des filles</li>
          </ul>

          <h2>Relever les Défis Éducatifs</h2>
          <p>L'Afrique Centrale fait face à des défis éducatifs importants incluant des pénuries d'enseignants, des infrastructures inadéquates et de faibles taux de scolarisation, particulièrement pour les filles en zones rurales. Ce programme adopte une approche holistique en abordant à la fois l'offre (formation des enseignants, infrastructures) et la demande (engagement communautaire, bourses) dans l'équation éducative.</p>

          <h2>Focus sur l'Équité et l'Inclusion</h2>
          <p>Une attention particulière sera accordée pour atteindre les enfants les plus marginalisés, incluant les filles, les enfants handicapés et ceux des communautés rurales éloignées. Le programme inclut des bourses ciblées pour 10 000 filles et un soutien spécialisé pour 2 000 enfants handicapés.</p>

          <h2>Calendrier de Mise en Œuvre</h2>
          <p>Le programme sera déployé en trois phases sur cinq ans, commençant en mars 2026. La première phase se concentrera sur la formation des enseignants et l'évaluation des besoins, suivie par le développement des infrastructures et la distribution de matériel dans les années 2-3, et l'élargissement des interventions réussies dans les années 4-5.</p>

          <p>Ce partenariat représente l'engagement continu de l'Union Européenne envers l'éducation en Afrique Centrale et le parcours éprouvé du CIPCRE dans la mise en œuvre de programmes de développement à grande échelle qui livrent des résultats mesurables.</p>
        `,
      },
    },
    "climate-resilience-agriculture": {
      title: {
        en: "New Research Published on Climate Resilience in Agriculture",
        fr: "Nouvelle Recherche Publiée sur la Résilience Climatique en Agriculture",
      },
      date: "November 30, 2025",
      category: { en: "Research", fr: "Recherche" },
      theme: { en: "Agriculture", fr: "Agriculture" },
      readTime: "7 min",
      excerpt: {
        en: "Five-year study reveals effective strategies for smallholder farmers to adapt to climate change.",
        fr: "Une étude de cinq ans révèle des stratégies efficaces pour les petits agriculteurs pour s'adapter au changement climatique.",
      },
      image: climateAgricultureImage,
      content: {
        en: `
          <p>After five years of rigorous field research involving 5,000 smallholder farmers across Central Africa, CIPCRE has published groundbreaking findings on climate-resilient agricultural practices. The study, conducted in partnership with leading agricultural research institutions, provides evidence-based recommendations for farmers facing increasingly unpredictable weather patterns.</p>
          
          <h2>Key Findings</h2>
          <p>The research identified several practices that significantly improve farmers' resilience to climate shocks:</p>
          <ul>
            <li><strong>Crop Diversification:</strong> Farmers who grew 5 or more crop varieties experienced 60% less income volatility during drought years</li>
            <li><strong>Agroforestry Systems:</strong> Integration of trees with crops improved soil moisture retention by 40% and provided alternative income sources</li>
            <li><strong>Water Harvesting:</strong> Simple rainwater collection systems reduced crop losses during dry spells by 55%</li>
            <li><strong>Improved Seeds:</strong> Drought-resistant seed varieties maintained yields 30% better than traditional varieties under water stress</li>
            <li><strong>Soil Conservation:</strong> Composting and mulching practices improved soil organic matter and water retention</li>
          </ul>

          <h2>Economic Impact</h2>
          <p>Farmers who adopted a combination of these practices saw remarkable improvements in their livelihoods. On average, participating farmers experienced:</p>
          <ul>
            <li>45% increase in agricultural income over three years</li>
            <li>35% reduction in crop losses due to weather variability</li>
            <li>50% improvement in household food security</li>
            <li>Better market access through farmer cooperatives</li>
          </ul>

          <h2>Gender Dimensions</h2>
          <p>The study paid special attention to gender dynamics in climate adaptation. We found that when women farmers received equal access to training and resources, they were actually more likely to adopt climate-smart practices than their male counterparts. However, women's limited access to land, credit, and extension services remains a significant barrier that must be addressed.</p>

          <h2>Policy Recommendations</h2>
          <p>Based on these findings, CIPCRE recommends that governments and development partners:</p>
          <ul>
            <li>Invest in farmer training on climate-resilient practices</li>
            <li>Ensure equitable access to improved seeds and farming inputs</li>
            <li>Support development of rural water infrastructure</li>
            <li>Strengthen agricultural extension services</li>
            <li>Promote farmer-to-farmer knowledge exchange</li>
          </ul>

          <p>The full research report is available in our Documentation Center and includes detailed technical guidelines for implementing these practices in different agro-ecological zones.</p>
        `,
        fr: `
          <p>Après cinq ans de recherche rigoureuse sur le terrain impliquant 5 000 petits agriculteurs à travers l'Afrique Centrale, le CIPCRE a publié des résultats révolutionnaires sur les pratiques agricoles résilientes au climat. L'étude, menée en partenariat avec des institutions de recherche agricole de premier plan, fournit des recommandations basées sur des preuves pour les agriculteurs confrontés à des modèles météorologiques de plus en plus imprévisibles.</p>
          
          <h2>Résultats Clés</h2>
          <p>La recherche a identifié plusieurs pratiques qui améliorent significativement la résilience des agriculteurs aux chocs climatiques :</p>
          <ul>
            <li><strong>Diversification des Cultures :</strong> Les agriculteurs qui cultivaient 5 variétés de cultures ou plus ont connu 60% moins de volatilité des revenus pendant les années de sécheresse</li>
            <li><strong>Systèmes Agroforestiers :</strong> L'intégration d'arbres avec les cultures a amélioré la rétention d'humidité du sol de 40% et fourni des sources de revenus alternatives</li>
            <li><strong>Récupération d'Eau :</strong> Des systèmes simples de collecte d'eau de pluie ont réduit les pertes de récoltes pendant les périodes sèches de 55%</li>
            <li><strong>Semences Améliorées :</strong> Les variétés de semences résistantes à la sécheresse ont maintenu des rendements 30% meilleurs que les variétés traditionnelles sous stress hydrique</li>
            <li><strong>Conservation des Sols :</strong> Les pratiques de compostage et de paillage ont amélioré la matière organique du sol et la rétention d'eau</li>
          </ul>

          <h2>Impact Économique</h2>
          <p>Les agriculteurs qui ont adopté une combinaison de ces pratiques ont vu des améliorations remarquables de leurs moyens de subsistance. En moyenne, les agriculteurs participants ont connu :</p>
          <ul>
            <li>45% d'augmentation des revenus agricoles sur trois ans</li>
            <li>35% de réduction des pertes de récoltes dues à la variabilité météorologique</li>
            <li>50% d'amélioration de la sécurité alimentaire des ménages</li>
            <li>Meilleur accès au marché grâce aux coopératives d'agriculteurs</li>
          </ul>

          <h2>Dimensions Genre</h2>
          <p>L'étude a accordé une attention particulière aux dynamiques de genre dans l'adaptation climatique. Nous avons constaté que lorsque les femmes agricultrices recevaient un accès égal à la formation et aux ressources, elles étaient en fait plus susceptibles d'adopter des pratiques intelligentes face au climat que leurs homologues masculins. Cependant, l'accès limité des femmes à la terre, au crédit et aux services de vulgarisation reste un obstacle important qui doit être abordé.</p>

          <h2>Recommandations Politiques</h2>
          <p>Sur la base de ces résultats, le CIPCRE recommande que les gouvernements et partenaires de développement :</p>
          <ul>
            <li>Investissent dans la formation des agriculteurs sur les pratiques résilientes au climat</li>
            <li>Assurent un accès équitable aux semences améliorées et intrants agricoles</li>
            <li>Soutiennent le développement d'infrastructures d'eau rurales</li>
            <li>Renforcent les services de vulgarisation agricole</li>
            <li>Promeuvent l'échange de connaissances entre agriculteurs</li>
          </ul>

          <p>Le rapport de recherche complet est disponible dans notre Centre de Documentation et inclut des directives techniques détaillées pour mettre en œuvre ces pratiques dans différentes zones agro-écologiques.</p>
        `,
      },
    },
    "mobile-app-farmers": {
      title: {
        en: "New Mobile App Connects Farmers to Market Opportunities",
        fr: "Nouvelle Application Mobile Connecte les Agriculteurs aux Opportunités de Marché",
      },
      date: "September 15, 2025",
      category: { en: "Innovation", fr: "Innovation" },
      theme: { en: "Agriculture", fr: "Agriculture" },
      readTime: "5 min",
      excerpt: {
        en: "Digital platform helps 10,000 smallholder farmers access better prices and reduce post-harvest losses.",
        fr: "La plateforme numérique aide 10 000 petits agriculteurs à accéder à de meilleurs prix et à réduire les pertes après récolte.",
      },
      image: farmerAppImage,
      content: {
        en: `
          <p>CIPCRE has launched SilkWater Group, an innovative mobile application that is transforming how smallholder farmers connect with markets. Since its launch six months ago, the platform has onboarded 10,000 farmers and facilitated over $2 million in agricultural trade.</p>
          
          <h2>How It Works</h2>
          <p>The app provides farmers with real-time market information, connects them directly with buyers, and facilitates transparent transactions. Key features include:</p>
          <ul>
            <li>Real-time market prices for major crops in different markets</li>
            <li>Direct messaging with verified buyers and aggregators</li>
            <li>Quality standards and grading information</li>
            <li>Weather forecasts and agricultural advisories</li>
            <li>Mobile money integration for secure payments</li>
            <li>Farmer forums for knowledge sharing</li>
          </ul>

          <h2>Impact on Farmers' Income</h2>
          <p>Early results are extremely promising. Farmers using the app report:</p>
          <ul>
            <li>25% increase in prices received for their produce</li>
            <li>40% reduction in post-harvest losses through better market timing</li>
            <li>50% reduction in time spent searching for buyers</li>
            <li>Improved bargaining power through market information</li>
          </ul>

          <h2>Overcoming Digital Divide</h2>
          <p>To ensure the app is accessible to all farmers, including those with limited smartphone access or digital literacy, CIPCRE has established:</p>
          <ul>
            <li>Village-level digital champions who assist other farmers</li>
            <li>SMS-based service for basic feature phones</li>
            <li>Voice-based navigation in local languages</li>
            <li>Community training sessions on app usage</li>
          </ul>

          <h2>Scaling Up</h2>
          <p>Building on the success of the pilot phase, CIPCRE plans to expand the platform to reach 50,000 farmers by end of 2026. We are also adding new features including:</p>
          <ul>
            <li>Access to agricultural inputs and services marketplace</li>
            <li>Weather-indexed insurance products</li>
            <li>Digital credit scoring for farmer loans</li>
            <li>Traceability features for export markets</li>
          </ul>

          <p>The app is available for free download on Google Play Store and can also be accessed via USSD code on any mobile phone.</p>
        `,
        fr: `
          <p>Le CIPCRE a lancé SilkWater Group, une application mobile innovante qui transforme la façon dont les petits agriculteurs se connectent aux marchés. Depuis son lancement il y a six mois, la plateforme a intégré 10 000 agriculteurs et facilité plus de 2 millions de dollars de commerce agricole.</p>
          
          <h2>Comment Ça Marche</h2>
          <p>L'application fournit aux agriculteurs des informations de marché en temps réel, les connecte directement avec des acheteurs et facilite des transactions transparentes. Les fonctionnalités clés incluent :</p>
          <ul>
            <li>Prix du marché en temps réel pour les principales cultures dans différents marchés</li>
            <li>Messagerie directe avec des acheteurs et agrégateurs vérifiés</li>
            <li>Normes de qualité et informations de classification</li>
            <li>Prévisions météorologiques et avis agricoles</li>
            <li>Intégration mobile money pour des paiements sécurisés</li>
            <li>Forums d'agriculteurs pour le partage de connaissances</li>
          </ul>

          <h2>Impact sur le Revenu des Agriculteurs</h2>
          <p>Les premiers résultats sont extrêmement prometteurs. Les agriculteurs utilisant l'application rapportent :</p>
          <ul>
            <li>25% d'augmentation des prix reçus pour leurs produits</li>
            <li>40% de réduction des pertes après récolte grâce à un meilleur timing de marché</li>
            <li>50% de réduction du temps passé à chercher des acheteurs</li>
            <li>Pouvoir de négociation amélioré grâce aux informations de marché</li>
          </ul>

          <h2>Surmonter la Fracture Numérique</h2>
          <p>Pour garantir que l'application soit accessible à tous les agriculteurs, y compris ceux ayant un accès limité aux smartphones ou à la littératie numérique, le CIPCRE a établi :</p>
          <ul>
            <li>Des champions numériques au niveau du village qui assistent les autres agriculteurs</li>
            <li>Service basé sur SMS pour les téléphones de base</li>
            <li>Navigation vocale dans les langues locales</li>
            <li>Sessions de formation communautaire sur l'utilisation de l'application</li>
          </ul>

          <h2>Expansion</h2>
          <p>S'appuyant sur le succès de la phase pilote, le CIPCRE prévoit d'étendre la plateforme pour atteindre 50 000 agriculteurs d'ici fin 2026. Nous ajoutons également de nouvelles fonctionnalités incluant :</p>
          <ul>
            <li>Accès à un marché d'intrants et services agricoles</li>
            <li>Produits d'assurance indexée sur les conditions météorologiques</li>
            <li>Notation de crédit numérique pour les prêts agricoles</li>
            <li>Fonctionnalités de traçabilité pour les marchés d'exportation</li>
          </ul>

          <p>L'application est disponible en téléchargement gratuit sur Google Play Store et peut également être accédée via code USSD sur n'importe quel téléphone mobile.</p>
        `,
      },
    },
    "regional-conference-civil-society": {
      title: {
        en: "CIPCRE Hosts Regional Conference on Civil Society Strengthening",
        fr: "Le CIPCRE Organise une Conférence Régionale sur le Renforcement de la Société Civile",
      },
      date: "November 10, 2025",
      category: { en: "Event", fr: "Événement" },
      theme: { en: "Governance", fr: "Gouvernance" },
      readTime: "6 min",
      excerpt: {
        en: "200 civil society leaders from 12 countries convened to discuss governance challenges and opportunities.",
        fr: "200 leaders de la société civile de 12 pays se sont réunis pour discuter des défis et opportunités de gouvernance.",
      },
      image:
        "https://images.unsplash.com/photo-1563457012475-13cf086fd600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzAyMDAxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: {
        en: `
          <p>CIPCRE successfully hosted a landmark three-day Regional Conference on Civil Society Strengthening, bringing together 200 civil society leaders from 12 Central African countries. The conference focused on building stronger, more effective civil society organizations capable of driving positive social change and holding governments accountable.</p>
          
          <h2>Conference Objectives</h2>
          <p>The gathering addressed critical challenges facing civil society organizations in the region:</p>
          <ul>
            <li>Strengthening organizational capacity and sustainability</li>
            <li>Improving advocacy strategies and policy influence</li>
            <li>Building cross-border networks and collaboration</li>
            <li>Navigating shrinking civic space and restrictive regulations</li>
            <li>Leveraging technology for greater impact</li>
            <li>Ensuring accountability and transparency</li>
          </ul>

          <h2>Key Outcomes</h2>
          <p>The conference produced several important outcomes and commitments:</p>
          <ul>
            <li><strong>Regional Network:</strong> Establishment of the Central Africa Civil Society Network (CACSN) to facilitate ongoing collaboration and knowledge sharing</li>
            <li><strong>Capacity Building:</strong> Development of a regional training program on advocacy, financial management, and monitoring & evaluation</li>
            <li><strong>Joint Advocacy:</strong> Agreement on three priority regional advocacy campaigns on governance, youth empowerment, and environmental protection</li>
            <li><strong>Technology Platform:</strong> Launch of a shared digital platform for resource sharing and communication</li>
          </ul>

          <h2>Looking Forward</h2>
          <p>Participants committed to implementing the conference recommendations within their organizations and countries. CIPCRE will serve as the secretariat for the newly formed network and will host follow-up regional convenings annually.</p>
        `,
        fr: `
          <p>Le CIPCRE a organisé avec succès une conférence régionale historique de trois jours sur le renforcement de la société civile, rassemblant 200 leaders de la société civile de 12 pays d'Afrique Centrale.</p>
          
          <h2>Objectifs de la Conférence</h2>
          <p>La rencontre a abordé les défis critiques auxquels font face les organisations de la société civile dans la région :</p>
          <ul>
            <li>Renforcement de la capacité organisationnelle et de la durabilité</li>
            <li>Amélioration des stratégies de plaidoyer et de l'influence politique</li>
            <li>Construction de réseaux transfrontaliers et de collaboration</li>
            <li>Navigation dans l'espace civique rétréci et les réglementations restrictives</li>
          </ul>

          <h2>Résultats Clés</h2>
          <p>La conférence a produit plusieurs résultats importants et engagements :</p>
          <ul>
            <li><strong>Réseau Régional :</strong> Établissement du Réseau de la Société Civile d'Afrique Centrale</li>
            <li><strong>Renforcement des Capacités :</strong> Développement d'un programme de formation régional</li>
            <li><strong>Plaidoyer Conjoint :</strong> Accord sur trois campagnes de plaidoyer régional prioritaires</li>
          </ul>
        `,
      },
    },
    "youth-employment-impact": {
      title: {
        en: "Impact Evaluation Shows 78% Increase in Youth Employment",
        fr: "L'Évaluation d'Impact Montre une Augmentation de 78% de l'Emploi des Jeunes",
      },
      date: "October 25, 2025",
      category: { en: "Impact", fr: "Impact" },
      theme: { en: "Education", fr: "Éducation" },
      readTime: "6 min",
      excerpt: {
        en: "Independent evaluation of our youth skills program shows significant improvements in employment outcomes.",
        fr: "L'évaluation indépendante de notre programme de compétences pour les jeunes montre des améliorations significatives.",
      },
      image:
        "https://images.unsplash.com/photo-1761039808159-f02b58f07032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NzAxOTI4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: {
        en: `
          <p>An independent impact evaluation of CIPCRE's Youth Skills and Employment Program has revealed remarkable success, with participating youth experiencing a 78% increase in employment rates. The study followed 2,500 young people over three years.</p>
          
          <h2>Program Overview</h2>
          <p>The program provides comprehensive support to young people aged 18-30:</p>
          <ul>
            <li>Technical and vocational skills training in high-demand sectors</li>
            <li>Soft skills development (communication, teamwork, problem-solving)</li>
            <li>Entrepreneurship training and business development support</li>
            <li>Job placement assistance and career counseling</li>
          </ul>

          <h2>Key Findings</h2>
          <p>The evaluation documented impressive outcomes:</p>
          <ul>
            <li><strong>Employment:</strong> 78% of participants found employment within 6 months</li>
            <li><strong>Income:</strong> Average monthly income increased by 165%</li>
            <li><strong>Entrepreneurship:</strong> 32% started their own businesses</li>
          </ul>

          <p>Based on these results, CIPCRE is expanding the program to reach 10,000 additional youth.</p>
        `,
        fr: `
          <p>Une évaluation d'impact du Programme de Compétences et d'Emploi des Jeunes du CIPCRE a révélé un succès remarquable, avec une augmentation de 78% des taux d'emploi.</p>
          
          <h2>Aperçu du Programme</h2>
          <p>Le programme fournit un soutien complet aux jeunes âgés de 18 à 30 ans :</p>
          <ul>
            <li>Formation technique et professionnelle</li>
            <li>Développement de compétences transversales</li>
            <li>Formation à l'entrepreneuriat</li>
            <li>Assistance au placement professionnel</li>
          </ul>

          <h2>Résultats Clés</h2>
          <ul>
            <li><strong>Emploi :</strong> 78% ont trouvé un emploi dans les 6 mois</li>
            <li><strong>Revenu :</strong> Augmentation de 165%</li>
            <li><strong>Entrepreneuriat :</strong> 32% ont créé leur entreprise</li>
          </ul>
        `,
      },
    },
    "maternal-health-rural-women": {
      title: {
        en: "Maternal Health Program Reaches 50,000 Women in Rural Areas",
        fr: "Le Programme de Santé Maternelle Atteint 50 000 Femmes en Zones Rurales",
      },
      date: "August 20, 2025",
      category: { en: "Impact", fr: "Impact" },
      theme: { en: "Health", fr: "Santé" },
      readTime: "5 min",
      excerpt: {
        en: "Community-based health initiative improves access to prenatal care and reduces maternal mortality rates.",
        fr: "L'initiative de santé communautaire améliore l'accès aux soins prénatals.",
      },
      image: maternalHealthImage,
      content: {
        en: `
          <p>CIPCRE's Maternal Health Program has reached 50,000 women in rural communities, contributing to a 40% reduction in maternal mortality rates in target areas through improved access to quality care.</p>
          
          <h2>Program Approach</h2>
          <p>The program uses a community-based model:</p>
          <ul>
            <li>Training and deployment of 250 community health workers</li>
            <li>Mobile health clinics in hard-to-reach areas</li>
            <li>Emergency transportation for safe delivery</li>
            <li>Health education on nutrition and danger signs</li>
          </ul>

          <h2>Impact on Health</h2>
          <ul>
            <li>92% receive at least 4 prenatal care visits (up from 45%)</li>
            <li>85% of births attended by skilled personnel (up from 38%)</li>
            <li>40% reduction in maternal mortality</li>
            <li>35% reduction in neonatal mortality</li>
          </ul>
        `,
        fr: `
          <p>Le Programme de Santé Maternelle du CIPCRE a atteint 50 000 femmes, contribuant à une réduction de 40% de la mortalité maternelle.</p>
          
          <h2>Approche du Programme</h2>
          <ul>
            <li>Formation de 250 agents de santé communautaire</li>
            <li>Cliniques mobiles dans les zones difficiles d'accès</li>
            <li>Transport d'urgence pour un accouchement sûr</li>
            <li>Éducation sanitaire</li>
          </ul>

          <h2>Impact</h2>
          <ul>
            <li>92% reçoivent au moins 4 visites prénatales</li>
            <li>85% des naissances assistées par du personnel qualifié</li>
            <li>40% de réduction de la mortalité maternelle</li>
          </ul>
        `,
      },
    },
    "award-civil-society-leadership": {
      title: {
        en: "CIPCRE Wins Award for Excellence in Civil Society Leadership",
        fr: "Le CIPCRE Remporte un Prix d'Excellence en Leadership",
      },
      date: "July 30, 2025",
      category: { en: "Award", fr: "Prix" },
      theme: { en: "Governance", fr: "Gouvernance" },
      readTime: "4 min",
      excerpt: {
        en: "Pan-African Foundation recognizes CIPCRE's innovative approaches to community development and advocacy.",
        fr: "La Fondation Panafricaine reconnaît les approches innovantes du CIPCRE.",
      },
      image: awardCeremonyImage,
      content: {
        en: `
          <p>CIPCRE has been awarded the prestigious Pan-African Civil Society Leadership Award in Addis Ababa, Ethiopia, recognizing exceptional leadership, innovation, and impact in strengthening civil society.</p>
          
          <h2>Recognition of Excellence</h2>
          <p>The award jury highlighted:</p>
          <ul>
            <li>Innovative community-based approaches</li>
            <li>Strong track record of empowering marginalized communities</li>
            <li>Effective advocacy for policy change</li>
            <li>Commitment to transparency and good governance</li>
            <li>Successful partnerships with governments and donors</li>
          </ul>

          <h2>30 Years of Impact</h2>
          <p>Since our founding in 1995, CIPCRE has grown from a small local organization to a leading civil society voice in Central Africa, touching millions of lives through programs in education, agriculture, gender equality, health, and governance.</p>
        `,
        fr: `
          <p>Le CIPCRE a reçu le prestigieux Prix Panafricain de Leadership de la Société Civile à Addis-Abeba, reconnaissant un leadership exceptionnel.</p>
          
          <h2>Reconnaissance d'Excellence</h2>
          <p>Le jury a souligné :</p>
          <ul>
            <li>Approches communautaires innovantes</li>
            <li>Solide bilan d'autonomisation des communautés</li>
            <li>Plaidoyer efficace pour le changement</li>
            <li>Engagement envers la transparence</li>
          </ul>

          <h2>30 Ans d'Impact</h2>
          <p>Depuis 1995, le CIPCRE est devenu une voix de premier plan en Afrique Centrale, touchant des millions de vies.</p>
        `,
      },
    },
    "teacher-training-educators": {
      title: {
        en: "Teacher Training Program Graduates 1,200 Educators",
        fr: "Le Programme de Formation des Enseignants Diplôme 1 200 Éducateurs",
      },
      date: "July 10, 2025",
      category: { en: "Program Launch", fr: "Lancement de Programme" },
      theme: { en: "Education", fr: "Éducation" },
      readTime: "5 min",
      excerpt: {
        en: "Comprehensive professional development program enhances teaching quality across 300 schools.",
        fr: "Le programme de développement professionnel améliore la qualité de l'enseignement dans 300 écoles.",
      },
      image:
        "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NzAxOTc2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: {
        en: `
          <p>CIPCRE celebrated the graduation of 1,200 teachers from our comprehensive Teacher Professional Development Program. These educators are now equipped with modern pedagogical methods and are transforming learning outcomes across 300 schools in rural and urban areas.</p>
          
          <h2>Program Components</h2>
          <p>The year-long program included:</p>
          <ul>
            <li>Modern teaching methodologies and classroom management</li>
            <li>Student-centered and active learning approaches</li>
            <li>Assessment and feedback techniques</li>
            <li>Inclusive education and special needs support</li>
            <li>Technology integration in teaching</li>
            <li>Subject-specific pedagogy training</li>
          </ul>

          <h2>Early Impact</h2>
          <p>Classroom observations and student assessments show:</p>
          <ul>
            <li>45% improvement in student engagement and participation</li>
            <li>30% increase in student test scores in trained teachers' classes</li>
            <li>Higher teacher confidence and job satisfaction</li>
            <li>More inclusive and supportive classroom environments</li>
          </ul>

          <p>The program will expand to train 2,000 additional teachers over the next two years.</p>
        `,
        fr: `
          <p>Le CIPCRE a célébré la graduation de 1 200 enseignants de notre Programme de Développement Professionnel. Ces éducateurs transforment maintenant les résultats d'apprentissage dans 300 écoles.</p>
          
          <h2>Composantes du Programme</h2>
          <p>Le programme d'un an a inclus :</p>
          <ul>
            <li>Méthodes d'enseignement modernes</li>
            <li>Approches d'apprentissage centrées sur l'élève</li>
            <li>Techniques d'évaluation et de feedback</li>
            <li>Éducation inclusive et besoins spéciaux</li>
            <li>Intégration de la technologie</li>
          </ul>

          <h2>Impact Initial</h2>
          <ul>
            <li>45% d'amélioration de l'engagement des élèves</li>
            <li>30% d'augmentation des scores aux tests</li>
            <li>Plus grande confiance des enseignants</li>
          </ul>
        `,
      },
    },
    "water-sanitation-project": {
      title: {
        en: "Water and Sanitation Project Benefits 80,000 People",
        fr: "Le Projet d'Eau et d'Assainissement Bénéficie à 80 000 Personnes",
      },
      date: "June 25, 2025",
      category: { en: "Impact", fr: "Impact" },
      theme: { en: "Health", fr: "Santé" },
      readTime: "5 min",
      excerpt: {
        en: "Infrastructure improvements bring clean water and improved sanitation to 45 rural communities.",
        fr: "Les améliorations d'infrastructures apportent de l'eau potable et un assainissement amélioré à 45 communautés rurales.",
      },
      image: waterSanitationImage,
      content: {
        en: `
          <p>CIPCRE's Water and Sanitation Project has transformed lives in 45 rural communities, providing clean water access and improved sanitation facilities to 80,000 people. The project has led to dramatic improvements in public health and quality of life.</p>
          
          <h2>Infrastructure Developed</h2>
          <ul>
            <li>65 boreholes with solar-powered pumps</li>
            <li>180 public standpipes in village centers</li>
            <li>2,500 household latrines constructed</li>
            <li>15 school sanitation blocks with handwashing facilities</li>
            <li>Community water management committees established</li>
          </ul>

          <h2>Health Impact</h2>
          <p>Health data from project communities shows:</p>
          <ul>
            <li>70% reduction in waterborne diseases</li>
            <li>60% decrease in time spent collecting water</li>
            <li>Significant improvement in school attendance, especially for girls</li>
            <li>Reduced healthcare costs for families</li>
          </ul>

          <h2>Sustainability</h2>
          <p>Each community has trained water committees responsible for maintenance and fee collection, ensuring long-term sustainability of the infrastructure.</p>
        `,
        fr: `
          <p>Le Projet d'Eau et d'Assainissement du CIPCRE a transformé la vie dans 45 communautés rurales, fournissant un accès à l'eau potable et des installations d'assainissement améliorées à 80 000 personnes.</p>
          
          <h2>Infrastructure Développée</h2>
          <ul>
            <li>65 forages avec pompes solaires</li>
            <li>180 bornes-fontaines publiques</li>
            <li>2 500 latrines domestiques construites</li>
            <li>15 blocs sanitaires scolaires</li>
            <li>Comités de gestion de l'eau établis</li>
          </ul>

          <h2>Impact Sanitaire</h2>
          <ul>
            <li>70% de réduction des maladies d'origine hydrique</li>
            <li>60% de diminution du temps de collecte d'eau</li>
            <li>Amélioration de la scolarisation des filles</li>
            <li>Réduction des coûts de santé</li>
          </ul>
        `,
      },
    },
    "partnership-african-development-bank": {
      title: {
        en: "New Partnership with African Development Bank",
        fr: "Nouveau Partenariat avec la Banque Africaine de Développement",
      },
      date: "June 5, 2025",
      category: { en: "Partnership", fr: "Partenariat" },
      theme: { en: "Governance", fr: "Gouvernance" },
      readTime: "5 min",
      excerpt: {
        en: "Strategic collaboration will support governance and institutional capacity building across the region.",
        fr: "La collaboration stratégique soutiendra la gouvernance et le renforcement des capacités institutionnelles dans la région.",
      },
      image: partnershipAfDBImage,
      content: {
        en: `
          <p>CIPCRE has signed a strategic partnership agreement with the African Development Bank (AfDB) to implement a $8 million Governance and Institutional Capacity Building Program across Central Africa. The five-year initiative will strengthen public institutions and civil society organizations.</p>
          
          <h2>Program Objectives</h2>
          <p>The partnership will focus on:</p>
          <ul>
            <li>Strengthening financial management and accountability systems</li>
            <li>Improving public service delivery</li>
            <li>Building civil society monitoring and advocacy capacity</li>
            <li>Promoting transparency and citizen engagement</li>
            <li>Developing institutional leadership and management skills</li>
          </ul>

          <h2>Expected Outcomes</h2>
          <ul>
            <li>100 government institutions with improved governance systems</li>
            <li>500 civil society organizations with enhanced capacity</li>
            <li>2,000 public officials and CSO leaders trained</li>
            <li>Improved governance scores in target countries</li>
          </ul>

          <p>This partnership demonstrates the AfDB's confidence in CIPCRE's track record of delivering results in institutional strengthening and governance programming.</p>
        `,
        fr: `
          <p>Le CIPCRE a signé un accord de partenariat stratégique avec la Banque Africaine de Développement (BAD) pour mettre en œuvre un programme de 8 millions de dollars sur la gouvernance et le renforcement des capacités institutionnelles en Afrique Centrale.</p>
          
          <h2>Objectifs du Programme</h2>
          <p>Le partenariat se concentrera sur :</p>
          <ul>
            <li>Renforcement des systèmes de gestion financière</li>
            <li>Amélioration de la prestation de services publics</li>
            <li>Renforcement des capacités de la société civile</li>
            <li>Promotion de la transparence et de l'engagement citoyen</li>
          </ul>

          <h2>Résultats Attendus</h2>
          <ul>
            <li>100 institutions gouvernementales avec des systèmes améliorés</li>
            <li>500 organisations de la société civile renforcées</li>
            <li>2 000 fonctionnaires et leaders d'OSC formés</li>
          </ul>
        `,
      },
    },
    "climate-smart-agriculture-pilot": {
      title: {
        en: "Climate-Smart Agriculture Pilot Shows Promising Results",
        fr: "Le Projet Pilote d'Agriculture Climato-Intelligente Montre des Résultats Prometteurs",
      },
      date: "May 20, 2025",
      category: { en: "Research", fr: "Recherche" },
      theme: { en: "Agriculture", fr: "Agriculture" },
      readTime: "6 min",
      excerpt: {
        en: "Innovative farming techniques increase yields by 45% while reducing environmental impact.",
        fr: "Des techniques agricoles innovantes augmentent les rendements de 45% tout en réduisant l'impact environnemental.",
      },
      image:
        "https://images.unsplash.com/photo-1721928005280-a5ac7cc2c50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN1c3RhaW5hYmxlJTIwZmFybWluZ3xlbnwxfHx8fDE3NzAyMDAxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      content: {
        en: `
          <p>Results from CIPCRE's two-year Climate-Smart Agriculture pilot project demonstrate that farmers can increase productivity while reducing environmental impact. The project, involving 800 farmers, showed a 45% average increase in yields alongside significant reductions in greenhouse gas emissions.</p>
          
          <h2>Climate-Smart Practices</h2>
          <p>The pilot tested several integrated practices:</p>
          <ul>
            <li>Conservation agriculture with minimal tillage</li>
            <li>Integrated pest management reducing chemical use</li>
            <li>Agroforestry systems with nitrogen-fixing trees</li>
            <li>Improved water management and irrigation efficiency</li>
            <li>Use of organic fertilizers and compost</li>
            <li>Crop rotation and diversification</li>
          </ul>

          <h2>Results</h2>
          <ul>
            <li>45% average increase in crop yields</li>
            <li>35% reduction in production costs</li>
            <li>50% improvement in soil health indicators</li>
            <li>30% reduction in water use</li>
            <li>25% reduction in greenhouse gas emissions per hectare</li>
          </ul>

          <h2>Scaling Up</h2>
          <p>Based on these results, CIPCRE is expanding the program to reach 10,000 farmers across the region, with support from climate finance mechanisms.</p>
        `,
        fr: `
          <p>Les résultats du projet pilote d'Agriculture Climato-Intelligente du CIPCRE démontrent que les agriculteurs peuvent augmenter la productivité tout en réduisant l'impact environnemental. Le projet a montré une augmentation moyenne de 45% des rendements.</p>
          
          <h2>Pratiques Climato-Intelligentes</h2>
          <p>Le pilote a testé plusieurs pratiques :</p>
          <ul>
            <li>Agriculture de conservation avec travail minimal du sol</li>
            <li>Gestion intégrée des ravageurs</li>
            <li>Systèmes agroforestiers</li>
            <li>Gestion améliorée de l'eau</li>
            <li>Engrais organiques et compost</li>
          </ul>

          <h2>Résultats</h2>
          <ul>
            <li>45% d'augmentation des rendements</li>
            <li>35% de réduction des coûts de production</li>
            <li>50% d'amélioration de la santé des sols</li>
            <li>25% de réduction des émissions de gaz à effet de serre</li>
          </ul>
        `,
      },
    },
    "womens-cooperative-income-increase": {
      title: {
        en: "Women's Cooperative Increases Income by 65%",
        fr: "La Coopérative de Femmes Augmente les Revenus de 65%",
      },
      date: "May 5, 2025",
      category: { en: "Impact", fr: "Impact" },
      theme: { en: "Gender", fr: "Genre" },
      readTime: "5 min",
      excerpt: {
        en: "Collective business model and skills training transform economic opportunities for 300 women.",
        fr: "Le modèle commercial collectif et la formation transforment les opportunités économiques pour 300 femmes.",
      },
      image: womenCooperativeImage,
      content: {
        en: `
          <p>The Bafoussam Women's Agricultural Cooperative, supported by CIPCRE, has achieved remarkable success with members experiencing an average 65% increase in household income. The cooperative brings together 300 women farmers who collectively process and market their agricultural products.</p>
          
          <h2>Cooperative Model</h2>
          <p>The cooperative provides members with:</p>
          <ul>
            <li>Collective processing facilities reducing post-harvest losses</li>
            <li>Bulk purchasing of inputs at discounted prices</li>
            <li>Access to formal markets and better prices</li>
            <li>Business management and financial literacy training</li>
            <li>Savings and credit services</li>
            <li>Peer learning and mutual support</li>
          </ul>

          <h2>Impact on Women's Lives</h2>
          <ul>
            <li>65% average increase in household income</li>
            <li>40% reduction in post-harvest losses</li>
            <li>Improved food security for member households</li>
            <li>Increased decision-making power in households</li>
            <li>Better access to education for children</li>
          </ul>

          <p>CIPCRE is replicating this model in 15 additional communities based on this success.</p>
        `,
        fr: `
          <p>La Coopérative Agricole de Femmes de Bafoussam, soutenue par le CIPCRE, a connu un succès remarquable avec une augmentation moyenne de 65% des revenus des ménages. La coopérative regroupe 300 femmes agricultrices.</p>
          
          <h2>Modèle Coopératif</h2>
          <p>La coopérative offre aux membres :</p>
          <ul>
            <li>Installations de transformation collective</li>
            <li>Achat groupé d'intrants à prix réduits</li>
            <li>Accès aux marchés formels et meilleurs prix</li>
            <li>Formation en gestion d'entreprise</li>
            <li>Services d'épargne et de crédit</li>
          </ul>

          <h2>Impact sur la Vie des Femmes</h2>
          <ul>
            <li>65% d'augmentation des revenus</li>
            <li>40% de réduction des pertes après récolte</li>
            <li>Amélioration de la sécurité alimentaire</li>
            <li>Augmentation du pouvoir de décision</li>
          </ul>
        `,
      },
    },
    "digital-literacy-youth": {
      title: {
        en: "Digital Literacy Program Reaches 15,000 Youth",
        fr: "Le Programme de Littératie Numérique Atteint 15 000 Jeunes",
      },
      date: "April 18, 2025",
      category: { en: "Program Launch", fr: "Lancement de Programme" },
      theme: { en: "Education", fr: "Éducation" },
      readTime: "4 min",
      excerpt: {
        en: "Technology training opens new employment pathways for young people in underserved communities.",
        fr: "La formation technologique ouvre de nouvelles voies d'emploi pour les jeunes dans les communautés mal desservies.",
      },
      image: digitalLiteracyImage,
      content: {
        en: `
          <p>CIPCRE's Digital Literacy Program has reached 15,000 young people in underserved communities, providing essential technology skills that open doors to employment and entrepreneurship opportunities in the digital economy.</p>
          
          <h2>Program Content</h2>
          <p>The program provides training in:</p>
          <ul>
            <li>Basic computer skills and internet navigation</li>
            <li>Microsoft Office and productivity tools</li>
            <li>Digital communication and online safety</li>
            <li>Social media for business</li>
            <li>Basic coding and web design</li>
            <li>Digital freelancing opportunities</li>
          </ul>

          <h2>Impact</h2>
          <ul>
            <li>15,000 youth trained across 50 community centers</li>
            <li>45% of participants found digital economy jobs</li>
            <li>1,200 youth started online businesses</li>
            <li>Increased confidence and digital citizenship</li>
          </ul>

          <p>The program is expanding to reach 30,000 additional youth over the next two years.</p>
        `,
        fr: `
          <p>Le Programme de Littératie Numérique du CIPCRE a atteint 15 000 jeunes dans les communautés mal desservies, fournissant des compétences technologiques essentielles.</p>
          
          <h2>Contenu du Programme</h2>
          <p>Le programme offre une formation en :</p>
          <ul>
            <li>Compétences informatiques de base</li>
            <li>Microsoft Office et outils de productivité</li>
            <li>Communication numérique et sécurité en ligne</li>
            <li>Médias sociaux pour les affaires</li>
            <li>Codage de base et conception web</li>
          </ul>

          <h2>Impact</h2>
          <ul>
            <li>15 000 jeunes formés dans 50 centres</li>
            <li>45% ont trouvé des emplois dans l'économie numérique</li>
            <li>1 200 jeunes ont créé des entreprises en ligne</li>
          </ul>
        `,
      },
    },
    "community-radio-network-expansion": {
      title: {
        en: "Community Radio Network Expands to 8 New Stations",
        fr: "Le Réseau Radio Communautaire S'Étend à 8 Nouvelles Stations",
      },
      date: "April 1, 2025",
      category: { en: "Innovation", fr: "Innovation" },
      theme: { en: "Governance", fr: "Gouvernance" },
      readTime: "5 min",
      excerpt: {
        en: "Local media initiatives strengthen information access and civic engagement in rural areas.",
        fr: "Les initiatives médiatiques locales renforcent l'accès à l'information et l'engagement civique en zones rurales.",
      },
      image: communityRadioImage,
      content: {
        en: `
          <p>CIPCRE's Community Radio Network has expanded to include 8 new stations, bringing the total to 15 radio stations across rural Central Africa. These stations provide vital information, education, and a platform for community voices.</p>
          
          <h2>Radio Programming</h2>
          <p>Each station broadcasts in local languages and includes:</p>
          <ul>
            <li>Agricultural information and market prices</li>
            <li>Health education and public service announcements</li>
            <li>Community news and local governance updates</li>
            <li>Educational programs for youth and adults</li>
            <li>Cultural programming and local music</li>
            <li>Call-in shows for community dialogue</li>
          </ul>

          <h2>Impact on Communities</h2>
          <ul>
            <li>2 million people reached across rural areas</li>
            <li>Improved access to critical information</li>
            <li>Platform for marginalized voices</li>
            <li>Enhanced civic engagement and accountability</li>
            <li>Preservation of local languages and culture</li>
          </ul>

          <p>All stations are community-owned and operated with trained local journalists and volunteers.</p>
        `,
        fr: `
          <p>Le Réseau Radio Communautaire du CIPCRE s'est étendu à 8 nouvelles stations, portant le total à 15 stations de radio en Afrique Centrale rurale. Ces stations fournissent des informations vitales et une plateforme pour les voix communautaires.</p>
          
          <h2>Programmation Radio</h2>
          <p>Chaque station diffuse dans les langues locales :</p>
          <ul>
            <li>Informations agricoles et prix du marché</li>
            <li>Éducation sanitaire et annonces de service public</li>
            <li>Actualités communautaires et mises à jour gouvernementales</li>
            <li>Programmes éducatifs</li>
            <li>Programmation culturelle et musique locale</li>
          </ul>

          <h2>Impact sur les Communautés</h2>
          <ul>
            <li>2 millions de personnes atteintes</li>
            <li>Amélioration de l'accès à l'information critique</li>
            <li>Plateforme pour les voix marginalisées</li>
            <li>Engagement civique accru</li>
          </ul>
        `,
      },
    },
    "food-security-policy-recommendations": {
      title: {
        en: "CIPCRE Publishes Policy Recommendations on Food Security",
        fr: "Le CIPCRE Publie des Recommandations Politiques sur la Sécurité Alimentaire",
      },
      date: "March 15, 2025",
      category: { en: "Research", fr: "Recherche" },
      theme: { en: "Agriculture", fr: "Agriculture" },
      readTime: "5 min",
      excerpt: {
        en: "Evidence-based policy brief provides roadmap for regional food security and nutrition improvements.",
        fr: "Le document de politique basé sur des preuves fournit une feuille de route pour la sécurité alimentaire régionale.",
      },
      image: foodSecurityImage,
      content: {
        en: `
          <p>CIPCRE has published a comprehensive policy brief on food security in Central Africa, drawing on three years of research and consultations with farmers, government officials, and food security experts. The brief provides evidence-based recommendations for achieving food security and improved nutrition.</p>
          
          <h2>Key Recommendations</h2>
          <p>The policy brief recommends that governments:</p>
          <ul>
            <li>Increase investment in smallholder farmer support by 15% annually</li>
            <li>Improve rural infrastructure, especially roads and storage facilities</li>
            <li>Strengthen agricultural extension services</li>
            <li>Support farmer organizations and cooperatives</li>
            <li>Invest in climate-resilient agriculture research</li>
            <li>Improve nutrition education and school feeding programs</li>
            <li>Establish strategic food reserves</li>
          </ul>

          <h2>Evidence Base</h2>
          <p>The recommendations are grounded in:</p>
          <ul>
            <li>Surveys of 10,000 farming households</li>
            <li>Analysis of regional food production and consumption data</li>
            <li>Case studies of successful food security interventions</li>
            <li>Consultations with 500 stakeholders across 6 countries</li>
          </ul>

          <p>The full policy brief is available in our Documentation Center and has been submitted to regional economic communities and national governments.</p>
        `,
        fr: `
          <p>Le CIPCRE a publié un document de politique complet sur la sécurité alimentaire en Afrique Centrale, s'appuyant sur trois ans de recherche. Le document fournit des recommandations basées sur des preuves.</p>
          
          <h2>Recommandations Clés</h2>
          <p>Le document recommande que les gouvernements :</p>
          <ul>
            <li>Augmentent l'investissement dans le soutien aux petits agriculteurs de 15% annuellement</li>
            <li>Améliorent l'infrastructure rurale</li>
            <li>Renforcent les services de vulgarisation agricole</li>
            <li>Soutiennent les organisations d'agriculteurs</li>
            <li>Investissent dans la recherche agricole résiliente au climat</li>
            <li>Établissent des réserves alimentaires stratégiques</li>
          </ul>

          <h2>Base de Preuves</h2>
          <p>Les recommandations sont fondées sur :</p>
          <ul>
            <li>Enquêtes de 10 000 ménages agricoles</li>
            <li>Analyse des données de production et consommation</li>
            <li>Études de cas d'interventions réussies</li>
          </ul>
        `,
      },
    },
    "youth-leadership-academy-third-campus": {
      title: {
        en: "Youth Leadership Academy Opens Third Campus",
        fr: "L'Académie de Leadership des Jeunes Ouvre son Troisième Campus",
      },
      date: "February 28, 2025",
      category: { en: "Program Launch", fr: "Lancement de Programme" },
      theme: { en: "Education", fr: "Éducation" },
      readTime: "5 min",
      excerpt: {
        en: "Expanded capacity allows 500 more young leaders to access leadership development programs annually.",
        fr: "La capacité élargie permet à 500 jeunes leaders supplémentaires d'accéder aux programmes de développement du leadership annuellement.",
      },
      image: youthLeadershipImage,
      content: {
        en: `
          <p>CIPCRE celebrated the opening of the third campus of our Youth Leadership Academy in Garoua, Cameroon. This expansion increases our capacity to train 500 additional young leaders annually, bringing total annual enrollment to 1,500 youth across three campuses.</p>
          
          <h2>Academy Programs</h2>
          <p>The academy offers intensive residential programs including:</p>
          <ul>
            <li>Leadership theory and practice</li>
            <li>Community organizing and mobilization</li>
            <li>Project planning and management</li>
            <li>Public speaking and communication</li>
            <li>Conflict resolution and peacebuilding</li>
            <li>Social entrepreneurship</li>
          </ul>

          <h2>Alumni Impact</h2>
          <p>Over 3,000 academy alumni are now leading change in their communities:</p>
          <ul>
            <li>42% holding elected or appointed leadership positions</li>
            <li>35% leading community-based organizations</li>
            <li>28% running successful social enterprises</li>
            <li>Countless community development initiatives launched</li>
          </ul>

          <p>The academy provides full scholarships to ensure talented young people from all backgrounds can participate.</p>
        `,
        fr: `
          <p>Le CIPCRE a célébré l'ouverture du troisième campus de notre Académie de Leadership des Jeunes à Garoua. Cette expansion augmente notre capacité à former 500 jeunes leaders supplémentaires annuellement.</p>
          
          <h2>Programmes de l'Académie</h2>
          <p>L'académie offre des programmes résidentiels intensifs incluant :</p>
          <ul>
            <li>Théorie et pratique du leadership</li>
            <li>Organisation et mobilisation communautaire</li>
            <li>Planification et gestion de projets</li>
            <li>Prise de parole en public et communication</li>
            <li>Résolution de conflits et consolidation de la paix</li>
            <li>Entrepreneuriat social</li>
          </ul>

          <h2>Impact des Anciens</h2>
          <p>Plus de 3 000 anciens élèves mènent maintenant le changement :</p>
          <ul>
            <li>42% occupent des postes de leadership élus ou nommés</li>
            <li>35% dirigent des organisations communautaires</li>
            <li>28% gèrent des entreprises sociales réussies</li>
          </ul>
        `,
      },
    },
  };

  // Get article by slug or show 404
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1B5E20] mb-4">
            {language === "en" ? "Article Not Found" : "Article Non Trouvé"}
          </h1>
          <p className="text-neutral-600 mb-6">
            {language === "en"
              ? "The article you're looking for doesn't exist."
              : "L'article que vous recherchez n'existe pas."}
          </p>
          <Button
            asChild
            variant="outline"
            className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white"
          >
            <Link to="/news">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {language === "en" ? "Back to News" : "Retour aux Actualités"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[500px] bg-neutral-900 overflow-hidden">
        <ImageWithFallback
          src={article.image}
          alt={article.title[language]}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
            <Button
              asChild
              variant="ghost"
              className="text-white hover:text-white hover:bg-white/20"
            >
              <Link to="/news">
                <ArrowLeft className="mr-2 w-4 h-4" />
                {language === "en" ? "Back to News" : "Retour aux Actualités"}
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Title & Meta */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge className="bg-[#D4AF37] text-white border-0">
                {article.category[language]}
              </Badge>
              <Badge
                variant="outline"
                className="bg-white/20 text-white border-white/40 backdrop-blur-sm"
              >
                {article.theme[language]}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title[language]}
            </h1>
            <div className="flex items-center gap-4 text-white/90 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {article.readTime} {language === "en" ? "read" : "lecture"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-12 py-12">
        {/* Excerpt */}
        <div className="bg-gradient-to-br from-[#1B5E20]/5 to-[#2E7D32]/5 border-l-4 border-[#1B5E20] p-6 rounded-r-xl mb-12">
          <p className="text-lg text-neutral-700 leading-relaxed italic">
            {article.excerpt[language]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mb-12 pb-8 border-b border-neutral-200">
          <Button
            variant="outline"
            className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white"
          >
            <Share2 className="mr-2 w-4 h-4" />
            {language === "en" ? "Share" : "Partager"}
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#1B5E20] text-[#1B5E20] hover:bg-[#1B5E20] hover:text-white"
          >
            <Download className="mr-2 w-4 h-4" />
            {language === "en" ? "Download PDF" : "Télécharger PDF"}
          </Button>
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-[#1B5E20] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-li:text-neutral-700 prose-li:mb-2
            prose-strong:text-[#1B5E20] prose-strong:font-semibold
            prose-a:text-[#1B5E20] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content[language] }}
        />

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-3">
            {language === "en"
              ? "Want to Learn More?"
              : "Vous Voulez en Savoir Plus ?"}
          </h3>
          <p className="text-white/90 mb-6">
            {language === "en"
              ? "Contact our team for more information about this initiative or to explore partnership opportunities."
              : "Contactez notre équipe pour plus d'informations sur cette initiative ou pour explorer des opportunités de partenariat."}
          </p>
          <Button
            asChild
            variant="secondary"
            className="bg-white text-[#1B5E20] hover:bg-neutral-100"
          >
            <Link to="/contact">
              {language === "en" ? "Contact Us" : "Nous Contacter"}
            </Link>
          </Button>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-neutral-50 py-16 mt-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-[#1B5E20] mb-8">
            {language === "en" ? "Related Articles" : "Articles Connexes"}
          </h2>
          <div className="text-neutral-600">
            {language === "en"
              ? "More related content coming soon..."
              : "Plus de contenu connexe bientôt disponible..."}
          </div>
        </div>
      </section>
    </div>
  );
}
