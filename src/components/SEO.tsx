/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
  type?: string;
  pageType?: 'homepage' | 'legal' | 'default';
}

const BASE_URL = 'https://exdevx.in';
const DEFAULT_IMAGE = 'https://ik.imagekit.io/exdev/file.jpg';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does ExDevX offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExDevX offers custom web development (React, Next.js, Node.js), cross-platform mobile app development (React Native, Flutter), AI system integration using OpenAI and LangChain, SaaS platform architecture, backend and API development (PostgreSQL, GraphQL), e-commerce solutions, and UI/UX design using Figma. We serve startups and businesses across Maharashtra, India."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the founder of ExDevX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExDevX was founded in 2022 by Abhay Jadhav, a software engineer based in Maharashtra, India. Abhay leads engineering at ExDevX and has delivered live production platforms including ssnlc.in, a Next.js and Express.js platform built for a real institution."
      }
    },
    {
      "@type": "Question",
      "name": "Where is ExDevX located and which areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExDevX is based in Pune, Maharashtra, India, with active service coverage in Ahilyanagar, Shrigonda, and across Maharashtra. We also work with clients remotely across India and internationally. Contact us at hello@exdevx.in."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website with ExDevX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard business website typically takes 4 to 6 weeks from kickoff to launch. Complex web applications or SaaS platforms may take 8 to 16 weeks depending on scope. ExDevX follows a lean, iterative approach to ship your product as efficiently as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Can ExDevX build an AI-powered app or integrate AI into my existing product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ExDevX integrates OpenAI GPT models, LangChain pipelines, and custom machine learning systems into web and mobile applications. Services include AI chatbots, intelligent automation, document analysis, recommendation systems, and natural language processing features."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of web development at ExDevX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExDevX pricing depends on the project scope. A standard business website starts from an affordable range for small businesses in Maharashtra, while complex SaaS platforms or mobile apps are priced according to requirements. Contact us at hello@exdevx.in for a free consultation and project estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Does ExDevX develop React Native and Flutter mobile apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ExDevX builds cross-platform mobile applications using React Native and Flutter for both iOS and Android. Our apps deliver native-level performance while sharing a single codebase, reducing cost and development time for startups and businesses across Pune and Maharashtra."
      }
    },
    {
      "@type": "Question",
      "name": "What makes ExDevX different from other web development agencies in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ExDevX is a production-first agency focused on performance and reliability. Founded in 2022 by Abhay Jadhav, we have delivered live platforms like ssnlc.in for real institutions. We specialize in React, Node.js, AI integration, and SaaS architecture — every project is built for scale with sub-second load times as our standard."
      }
    }
  ]
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "ExDevX",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": DEFAULT_IMAGE,
        "width": 512,
        "height": 512
      },
      "description": "ExDevX is a high-performance web and app development agency founded in 2022 by Abhay Jadhav, based in Pune, Maharashtra, India. We build React websites, React Native apps, AI systems, and SaaS platforms for startups and businesses.",
      "foundingDate": "2022",
      "founder": {
        "@type": "Person",
        "name": "Abhay Jadhav",
        "sameAs": [
          "https://github.com/AbhiDevepl",
          "https://www.linkedin.com/in/abhay-jadhav-56a623309/"
        ]
      },
      "email": "hello@exdevx.in",
      "telephone": "+918830174066",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "areaServed": ["Pune", "Ahilyanagar", "Shrigonda", "Maharashtra", "India"],
      "sameAs": [
        "https://github.com/AbhiDevepl",
        "https://www.linkedin.com/in/abhay-jadhav-56a623309/",
        "https://www.instagram.com/dev.abhayyy/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "ExDevX",
      "publisher": { "@id": `${BASE_URL}/#organization` }
    }
  ]
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ExDevX Services",
  "description": "Digital development services offered by ExDevX in Pune, Maharashtra, India",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom React, Next.js, and Vue.js websites with sub-second load times and mobile-first design for businesses in Maharashtra.",
        "provider": { "@id": `${BASE_URL}/#organization` },
        "areaServed": "Maharashtra, India"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Mobile App Development",
        "description": "React Native and Flutter apps for iOS and Android with native performance. Cross-platform builds for startups and businesses in Pune.",
        "provider": { "@id": `${BASE_URL}/#organization` },
        "areaServed": "Maharashtra, India"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "AI Integration",
        "description": "LLM-powered chatbots, ML pipelines, intelligent automation, and AI-driven features using OpenAI and LangChain.",
        "provider": { "@id": `${BASE_URL}/#organization` },
        "areaServed": "Maharashtra, India"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "SaaS Development",
        "description": "End-to-end SaaS architecture with auth, billing via Stripe, multi-tenancy, and dashboards built for scale.",
        "provider": { "@id": `${BASE_URL}/#organization` },
        "areaServed": "Maharashtra, India"
      }
    }
  ]
};

export default function SEO({
  title = "ExDevX | Web & App Development Agency, Pune India",
  description = "ExDevX is a Pune-based web & app development agency in Maharashtra, India. We build React websites, mobile apps, AI integrations & SaaS platforms for startups. Get a free consultation.",
  keywords = "web developer pune, app developer maharashtra, website development company pune, software company maharashtra, ExDevX, Abhay Jadhav, react native developer pune, saas development india, AI integration pune",
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  canonical = BASE_URL,
  type = "website",
  pageType = 'homepage'
}: SEOProps) {
  const siteTitle = title.includes("ExDevX") ? title : `${title} | ExDevX`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <html lang="en-IN" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Abhay Jadhav, ExDevX" />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Geo signals */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune, Maharashtra, India" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ExDevX" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@exdevx" />
      <meta name="twitter:creator" content="@exdevx" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data — Organization + WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>

      {/* Structured Data — Services */}
      {pageType === 'homepage' && (
        <script type="application/ld+json">
          {JSON.stringify(SERVICE_SCHEMA)}
        </script>
      )}

      {/* Structured Data — FAQPage */}
      {pageType === 'homepage' && (
        <script type="application/ld+json">
          {JSON.stringify(FAQ_SCHEMA)}
        </script>
      )}
    </Helmet>
  );
}
