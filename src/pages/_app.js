import App from "next/app";

import { Fragment } from "react";

import GlobalStyle from "@global-style";
import { appWithTranslation } from "@i18n";

const MyApp = ({ Component, pageProps }) => (
    <Fragment>
        <GlobalStyle />
        <Component {...pageProps} />
    </Fragment>
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);