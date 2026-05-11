import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  schema?: object;
  pageType?: string;
}

const BASE_URL = 'https://cloudopsdesk.in';

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonical, keywords, schema, pageType = 'WebPage' }) => {
  const fullUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
  const breadcrumbSchema = canonical ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": title.split('|')[0].trim(), "item": fullUrl }
    ]
  } : null;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": title,
    "description": description,
    "url": fullUrl,
    "isPartOf": { "@type": "WebSite", "url": BASE_URL },
    "about": { "@type": "Organization", "name": "CloudOpsDesk" },
    "inLanguage": "en"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="CloudOpsDesk" />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
      <meta property="og:locale" content="en_IN" />
      <meta property="article:publisher" content="https://www.facebook.com/share/18egUGhFcr/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
      <meta name="twitter:site" content="@cloudopsdesk" />
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
