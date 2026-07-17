import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import ChatWidget from '@/components/ChatWidget';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kompasit.tech'),
  title: {
    default: 'KompasIT - Custom Software Development Services',
    template: '%s | KompasIT'
  },
  description: 'Get premium custom software development services, high-performance web systems, and robust enterprise platforms built around your needs.',
  openGraph: {
    title: 'KompasIT - Custom Software Development Services',
    description: 'Get premium custom software development services, high-performance web systems, and robust enterprise platforms built around your needs.',
    url: 'https://kompasit.tech',
    siteName: 'KompasIT',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KompasIT - Custom Software Development Services',
    description: 'Get premium custom software development services, high-performance web systems, and robust enterprise platforms built around your needs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://kompasit.tech/",
        "name": "KompasIT",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kompasit.tech/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "KompasIT",
        "url": "https://kompasit.tech/",
        "logo": "https://kompasit.tech/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.className} bg-gray-50 font-sans`}>
        <SplashScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
