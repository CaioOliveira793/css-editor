import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>CSS Editor</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
