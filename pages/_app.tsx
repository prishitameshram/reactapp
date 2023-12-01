// _app.tsx
import 'tailwindcss/tailwind.css';

interface PageProps {}

function MyApp({ Component, pageProps }: { Component: any, pageProps: PageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
