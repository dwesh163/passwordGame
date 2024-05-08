import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" style={{ backgroundColor: '#171719', overflow: 'hidden' }}>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
