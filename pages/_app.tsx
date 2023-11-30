// Import the necessary modules and styles
// import '../styles/tailwind.css';
// import '../node_modules/tailwindcss/base.css';
// import 'tailwindcss/components.css';
// import 'tailwindcss/utilities.css';
// import '../styles';


import 'tailwindcss/tailwind.css'

// Define the shape of the pageProps
interface PageProps {
  // define the shape of pageProps here
}

// MyApp component that receives the Component and pageProps as props
function MyApp({ Component, pageProps }: { Component: any, pageProps: PageProps }) {
  // Render the component with its props
  return <Component {...pageProps} />;
}

// Export the MyApp component as the default export
export default MyApp;
