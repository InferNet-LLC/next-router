/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { PublicLayout } from "@/components/layout";
import { Footer } from "@/components/layout/components/footer";
import { RichContent } from "@/components/rich-content";
import { useTheme } from "@/context/theme-provider";
import { useStatus } from "@/hooks/use-status";
import { useSystemConfig } from "@/hooks/use-system-config";
import { isLikelyHtml } from "@/lib/content-format";
import { useAuthStore } from "@/stores/auth-store";

import { HomeCapabilities } from "./components/capabilities";
import { HomeFaqCta } from "./components/faq-cta";
import { HomeHero } from "./components/hero";
import { useHomePageContent } from "./hooks/use-home-page-content";

function upsertMetaTag(selector: string, attributes: Record<string, string>) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    document.head.appendChild(meta);
  }
  Object.entries(attributes).forEach(([name, value]) => {
    meta?.setAttribute(name, value);
  });
}

function DefaultHome() {
  const { i18n, t } = useTranslation();
  const { status } = useStatus();
  const { systemName } = useSystemConfig();
  const isAuthenticated = Boolean(useAuthStore((state) => state.auth.user));
  const docsUrl =
    (status?.docs_link as string | undefined) || "https://docs.newapi.pro";

  useEffect(() => {
    const pageTitle = `${t("Stop comparing. Your last AI relay")} | ${systemName}`;
    const pageDescription = t(
      "Use GPT, Claude, and Gemini reliably at discounted prices and connect Codex, Claude Code, and other clients in one step",
    );
    const previousTitle = document.title;
    document.title = pageTitle;
    document.documentElement.lang = i18n.resolvedLanguage || i18n.language;
    upsertMetaTag('meta[name="description"]', {
      name: "description",
      content: pageDescription,
    });
    upsertMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });
    upsertMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: pageDescription,
    });
    upsertMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary",
    });

    return () => {
      document.title = previousTitle;
    };
  }, [i18n.language, i18n.resolvedLanguage, systemName, t]);

  return (
    <PublicLayout
      showMainContainer={false}
      showNotifications={false}
      showThemeSwitch={false}
      showSiteOperatorFooter={false}
      siteName="Next Router"
      headerProps={{ homeUrl: "/", embedded: true }}
    >
      <main>
        <HomeHero docsUrl={docsUrl} isAuthenticated={isAuthenticated} />
        <HomeCapabilities />
        <HomeFaqCta isAuthenticated={isAuthenticated} />
      </main>
      <Footer />
    </PublicLayout>
  );
}

export function Home() {
  const { i18n, t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { resolvedTheme } = useTheme();
  const { content, isLoaded, isUrl } = useHomePageContent();

  const syncIframePreferences = useCallback(() => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        { themeMode: resolvedTheme },
        "*",
      );
      iframeRef.current?.contentWindow?.postMessage(
        { lang: i18n.language },
        "*",
      );
    } catch {
      // Cross-origin frames may reject access while navigating.
    }
  }, [i18n.language, resolvedTheme]);

  useEffect(() => {
    if (isUrl) {
      syncIframePreferences();
    }
  }, [isUrl, syncIframePreferences]);

  if (!isLoaded) {
    return (
      <PublicLayout showMainContainer={false}>
        <main className="flex min-h-screen items-center justify-center">
          <div className="text-muted-foreground">{t("Loading...")}</div>
        </main>
      </PublicLayout>
    );
  }

  if (content) {
    if (isUrl) {
      return (
        <PublicLayout showMainContainer={false}>
          <iframe
            ref={iframeRef}
            src={content}
            className="h-screen w-full border-none"
            title={t("Custom Home Page")}
            sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-scripts"
            onLoad={syncIframePreferences}
          />
        </PublicLayout>
      );
    }

    const contentIsHtml = isLikelyHtml(content);

    if (contentIsHtml) {
      return (
        <PublicLayout showMainContainer={false}>
          <RichContent
            mode="html"
            htmlVariant="isolated"
            content={content}
            className="custom-home-content"
          />
        </PublicLayout>
      );
    }

    return (
      <PublicLayout>
        <div className="mx-auto max-w-6xl px-4 py-8">
          <RichContent
            mode="markdown"
            content={content}
            className="custom-home-content"
          />
        </div>
      </PublicLayout>
    );
  }

  return <DefaultHome />;
}
