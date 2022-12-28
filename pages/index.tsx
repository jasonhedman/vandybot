import Head from 'next/head';

import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import PromptBox from '../components/PromptBox';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>College Essay Writer</title>
      </Head>
      <PageContainer>
        <Flex
          direction="column"
          align="center"
          gap={8}
        >
          <Header />
          <PromptBox />
        </Flex>
      </PageContainer>    
    </div>
  );
};

export default Home;
