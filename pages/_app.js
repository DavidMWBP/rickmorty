import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/theme';

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
  const client = new ApolloClient({ uri: 'https://rickandmortyapi.com/graphql/', cache: new InMemoryCache() });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default  MyApp;
