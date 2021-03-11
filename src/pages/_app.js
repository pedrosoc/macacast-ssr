import { Fragment, useEffect } from "react";

import App from "next/app";
import { useRouter } from 'next/router'

import GlobalStyle from "@global-style";
import { appWithTranslation } from "@i18n";
import { initGA, logEvent, logPageView } from "@/utils/analytics";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        initGA()
        // `routeChangeComplete` won't run for the first page load unless the query string is
        // hydrated later on, so here we log a page view if this is the first render and
        // there's no query string
        if (!router.asPath.includes('?')) {
            logPageView()
        }

        logEvent("test-category", "test-action")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        // Listen for page changes after a navigation or when the query changes
        router.events.on('routeChangeComplete', logPageView)
        return () => {
            router.events.off('routeChangeComplete', logPageView)
        }
    }, [router.events])
    
    return (
        <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
        </Fragment>
    );
};

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);