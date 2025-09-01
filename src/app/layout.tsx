import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omni Nexus",
  description:
    "Chat rápido, seguro e em tempo real com criptografia avançada, detectando e bloqueando golpes e fraudes automaticamente.",
  applicationName: "Omni Nexus",
  authors: [{ name: "Equipe Omni Nexus", url: "https://omninexus.com.br" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://omninexus.com.br",
  },
  keywords: [
    "chat seguro",
    "secure chat",
    "mensagens criptografadas",
    "encrypted messages",
    "fraudes bloqueadas",
    "fraud prevention chat",
    "chat em tempo real",
    "real-time chat",
    "Omni Nexus",
    "Omni Nexus secure",
    "chat privado",
    "private chat",
    "chat protegido",
    "protected chat",
    "chat instantâneo",
    "instant chat",
    "mensagens seguras",
    "safe messages",
    "plataforma de chat segura",
    "secure messaging platform",
    "chat corporativo seguro",
    "secure corporate chat",
    "mensagens criptografadas online",
    "online encrypted messages",
    "bloqueio de fraudes em tempo real",
    "real-time fraud blocking",
    "app de chat seguro",
    "secure chat app",
    "software de comunicação segura",
    "secure communication software",
    "chat anti-golpes",
    "anti-fraud chat",
    "mensagens privadas criptografadas",
    "encrypted private messages",
    "chat confiável",
    "trusted chat",
    "mensagens instantâneas seguras",
    "secure instant messages",
    "chat protegido por criptografia",
    "chat with encryption",
    "plataforma de mensagens segura",
    "secure messaging platform",
    "chat rápido e seguro",
    "fast and secure chat",
    "app de mensagens protegidas",
    "protected messaging app",
    "chat seguro empresarial",
    "enterprise secure chat",
    "mensagens protegidas em tempo real",
    "real-time protected messages",
    "Omni Nexus chat instantâneo",
    "Omni Nexus instant messaging",
    "chat online protegido",
    "protected online chat",
    "plataforma confiável de chat",
    "trusted chat platform",
    "chat seguro anti-fraude",
    "anti-fraud secure chat",
    "mensagens criptografadas privadas",
    "private encrypted messages",
    "chat seguro e rápido",
    "fast secure messaging",
    "mensagens seguras instantâneas",
    "instant secure messages",
    "chat em tempo real protegido",
    "real-time protected chat",
    "Omni Nexus chat seguro",
    "Omni Nexus secure messaging",
    "plataforma de chat corporativa",
    "corporate messaging platform",
    "chat protegido online",
    "online protected chat",
    "mensagens seguras online",
    "safe online messages",
    "chat confiável e rápido",
    "trusted fast chat",
    "chat seguro criptografado",
    "encrypted secure chat",
    "app de chat instantâneo seguro",
    "secure instant messaging app",
    "software de chat seguro",
    "secure chat software",
    "mensagens instantâneas criptografadas",
    "encrypted instant messages",
    "chat empresarial seguro",
    "secure enterprise chat",
    "Omni Nexus mensagens seguras",
    "Omni Nexus safe messages",
    "chat privado online",
    "private online chat",
    "chat protegido em tempo real",
    "real-time protected messaging",
    "mensagens corporativas seguras",
    "secure corporate messages",
    "app de chat confiável",
    "trusted chat app",
    "plataforma de chat instantâneo",
    "instant messaging platform",
    "chat anti-fraude em tempo real",
    "real-time anti-fraud chat",
    "mensagens privadas online",
    "private online messages",
    "chat rápido online seguro",
    "fast secure online chat",
    "Omni Nexus plataforma segura",
    "Omni Nexus secure platform",
    "mensagens seguras corporativas",
    "secure corporate messaging",
    "chat protegido para negócios",
    "business protected chat",
    "mensagens criptografadas instantâneas",
    "encrypted instant corporate messages",
    "chat confiável corporativo",
    "trusted enterprise chat",
    "Omni Nexus chat protegido",
    "Omni Nexus protected chat",
    "plataforma de mensagens instantâneas segura",
    "secure instant messaging platform",
    "chat seguro online corporativo",
    "secure online corporate chat",
    "mensagens seguras para negócios",
    "secure business messaging",
    "chat instantâneo protegido",
    "protected instant chat",
  ],
  openGraph: {
    type: "website",
    url: "https://omninexus.com.br",
    title: "Omni Nexus | Chat seguro e em tempo real",
    description:
      "Converse sem riscos: chat em tempo real com criptografia avançada que detecta e bloqueia fraudes automaticamente.",
    siteName: "Omni Nexus",
    // images: [
    //   {
    //     url: "/assets/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Omni Nexus Chat Seguro",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OmniNexus",
    creator: "@OmniNexus",
    title: "Omni Nexus | Chat seguro e em tempo real",
    description:
      "Chat rápido e seguro com criptografia avançada, detectando e bloqueando fraudes automaticamente.",
    // images: "/assets/og-image.png",
  },
  icons: {
    icon: "/assets/favicon.ico",
    //   apple: `/apple-icon.png`,
  },
  publisher: "Omni Nexus",
  creator: "Equipe Omni Nexus",
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
  category: "Chat Online, Segurança Digital",
  classification: "Software de Comunicação Segura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
