import React from 'react';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GetServerSidePropsContext, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useZilPay } from 'mixins/zilpay';
import { Explorer, Banner } from 'mixins/explorer';

export const CategoryPage: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation(`explorer`);
  const zilpay = useZilPay();
  const [items, setItems] = React.useState<Banner[]>([]);

  React.useEffect(() => {
    if (zilpay.instance) {
      const explorer = new Explorer(zilpay.instance);

      explorer
        .getBannerList()
        .then((values) => setItems(values));
    }
  }, [zilpay]);

  return (
    <>
      <Head>
        <title>{router.query.category} - ZilPay</title>
        <meta
          property="og:title"
          content={`${router.query.category} - ZilPay`}
          key="title"
        />
      </Head>
    </>
  );
}

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`explorer`, `common`]),
  },
});

export default CategoryPage;
