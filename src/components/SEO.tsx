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
}

export default function SEO({ 
  title = "ExDevX | High-Performance Digital Solutions in Maharashtra", 
  description = "ExDevX builds high-performance websites, mobile apps, AI systems, and SaaS products for businesses in Pune and across Maharashtra.",
  keywords = "web developer pune, app developer pune, software company maharashtra, ExDevX, Abhay Jadhav",
  image = "https://ik.imagekit.io/exdev/file.jpg",
  url = "https://exdevx.in",
  canonical = "https://exdevx.in",
  type = "website"
}: SEOProps) {
  const siteTitle = title.includes("ExDevX") ? title : `${title} | ExDevX`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ExDevX",
    "image": image,
    "@id": "https://exdevx.in",
    "url": url,
    "telephone": "+918830174066",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://github.com/exdevx",
      "https://linkedin.com/in/abhay-jadhav"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ExDevX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@exdevx" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
