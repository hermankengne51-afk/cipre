import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { FloatingDonateButton } from "@/components/FloatingDonateButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CIPCRE" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <div>Page not found.</div>,
  errorComponent: (e) => <div>Error page {e.error.message}.</div>,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingDonateButton />
          </div>
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}
