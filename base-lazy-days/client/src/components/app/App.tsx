/* eslint-disable simple-import-sort/imports */
import { ChakraProvider } from '@chakra-ui/react';
import { Loading } from './Loading';
import { Navbar } from './Navbar';
import { QueryClientProvider } from 'react-query';
import { ReactElement } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Routes } from './Routes';
import { queryClient } from '../../react-query/queryClient';
import { theme } from '../../theme';

export function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Loading />
        <Routes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
