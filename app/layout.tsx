import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans'
})

export const metadata: Metadata = {
  title: "Ahmed Wael | Fullstack Web Dev",
  description: "A personal portfolio for Ahmed Wael",
  keywords: ["Web Developer", "React Engineer", "Portfolio", "Next.js", "Software Engineer", "Node.js", "PHP", "Vercel", "Netlify", "C++", "Java", "Laravel", "FastAPI", "Python", "AI", "Machine Learning", "Deep Learning", "Fine Tuning"],
  authors: [{ name: "Ahmed Wael" }],
  creator: "Ahmed Wael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased min-h-screen bg-brand-dark`}
      >
        {children}
      </body>
    </html>
  );
}
