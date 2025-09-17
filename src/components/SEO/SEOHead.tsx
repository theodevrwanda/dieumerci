import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "DieuMerci - IT Professional & Software Developer",
  description = "Niyonsenga DieuMerci - Expert web designer and software developer in Rwanda specializing in network configuration, software installation, and innovative IT solutions. Student at Saint Martin Hanika College with Saltel Technical Training certification.",
  keywords = "software developer Rwanda, web designer Rusizi, network configuration specialist, IT professional Western Province, DieuMerci developer, software installation expert, digital infrastructure Rwanda, HTML CSS JavaScript developer, Saint Martin Hanika College, Saltel Technical Training",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = window.location.href,
  type = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Niyonsenga DieuMerci",
    "jobTitle": "Software Developer & IT Professional",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gihundwe Cell, Kamembe Sector",
      "addressRegion": "Rusizi District, Western Province",
      "addressCountry": "Rwanda"
    },
    "telephone": "+250737667277",
    "email": "Niyonsengadieumercimiracle@gmail.com",
    "url": url,
    "image": image,
    "description": description,
    "knowsAbout": [
      "Software Development",
      "Web Design", 
      "Network Configuration",
      "IT Support",
      "Digital Infrastructure",
      "HTML",
      "CSS", 
      "JavaScript"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Saint Martin Hanika College"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Certificate of Completion - Networking and Internet Technology",
      "credentialCategory": "certificate",
      "educationalLevel": "Professional Training",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Saltel Technical Training & Innovation Center"
      }
    },
    "offers": {
      "@type": "Service",
      "serviceType": [
        "Software Development",
        "Web Design",
        "Network Configuration", 
        "Software Installation",
        "IT Support",
        "Digital Infrastructure Building"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Rwanda"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Niyonsenga DieuMerci" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="DieuMerci - IT Professional Portfolio" />
      <meta property="og:site_name" content="DieuMerci Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="DieuMerci - IT Professional Portfolio" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="application-name" content="DieuMerci Portfolio" />
      <meta name="apple-mobile-web-app-title" content="DieuMerci" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Rusizi District, Western Province, Rwanda" />
      <meta name="geo.position" content="-2.4641;29.2456" />
      <meta name="ICBM" content="-2.4641, 29.2456" />

      {/* Language */}
      <meta httpEquiv="content-language" content="en" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;