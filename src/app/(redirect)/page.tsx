import Script from "next/script";

import { routing } from "@/i18n/routing";

const redirectTarget = `./${routing.defaultLocale}/`;

export default function RootRedirectPage() {
  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "1.5rem",
        fontFamily: "system-ui, sans-serif",
        background: "#f4f7ff",
        color: "#0d1433",
      }}
    >
      <Script id="root-locale-redirect" strategy="afterInteractive">
        {`window.location.replace(${JSON.stringify(redirectTarget)});`}
      </Script>
      <p>
        Redirecting to{" "}
        <a href={redirectTarget} style={{ color: "#080b7a" }}>
          {redirectTarget}
        </a>
        ...
      </p>
    </main>
  );
}
