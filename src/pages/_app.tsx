import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import defaultTheme from '../styles/themes/default';


function handleExitComplete() {
	if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>CSS Editor</title>
			</Head>
			<ThemeProvider theme={defaultTheme}>
				<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
					<GlobalStyle />
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
