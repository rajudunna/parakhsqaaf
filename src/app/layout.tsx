import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SQAAF — School Quality Assessment & Assurance Framework | PARAKH · NCERT',
  description: 'The School Quality Assessment & Assurance Framework (SQAAF) gives every school in India a structured, evidence-backed pathway to self-assess across five domains and turn insight into measurable improvement.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
