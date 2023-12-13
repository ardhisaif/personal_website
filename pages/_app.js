import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://taufiiq.vercel.app` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
  <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={true}>
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <DefaultSeo
            title="Hi, I'm Ahmad Taufiq!"
            description="A product engineer with +3 years of experience who is customer-focused and committed to delivering valuable and impactful products."
            canonical={canonicalUrl}
            openGraph={{
              site_name: "Hi, I'm Ahmad Taufiq!",
              title: "Hi, I'm Ahmad Taufiq!",
              description:
                "A product engineer with +3 years of experience who is customer-focused and committed to delivering valuable and impactful products.",
              // images: [
              //   {
              //     url: "https://taufiiq.vercel.app/images/site/meta.jpg",
              //     width: 800,
              //     height: 600,
              //     alt: "Ahmad Taufiq",
              //   },
              // ],
            }}
            twitter={{
              handle: "@ahtaufiiq",
              site: "@ahtaufiiq",
              cardType: "summary_large_image",
            }}
            additionalLinkTags={[
              {
                rel: "apple-touch-icon",
                href: "/touch-icons/main-icon.png",
              },
            ]}
          />

          {process.env.NODE_ENV == "production" ? (
            // Analytics Script
            <Script
              src="https://api.pirsch.io/pirsch.js"
              id="pirschjs"
              data-code={process.env.NEXT_PUBLIC_PIRSCH_KEY}
              strategy="afterInteractive"
            />
          ) : (
            ""
          )}

          <MainLayout>
            <Component {...pageProps} />
            <Analytics/>  
          </MainLayout>
        </>
      </ThemeProvider>
  );
}

export default MyApp;
