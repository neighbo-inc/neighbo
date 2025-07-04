import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neighbo – Discover Your Neighborhood",
  description: "Explore curated trails, discover hidden gems, and connect with your local community like never before.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        {children}
        <footer className="absolute w-full text-center py-6 bottom-0">
          <p className="text-gray-500 text-sm">&copy; 2025 Neighbo, Inc. Made with ❤️ for local communities.</p>
        </footer>
      </body>
    </html>
  );
}
