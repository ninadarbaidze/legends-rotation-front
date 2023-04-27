import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
