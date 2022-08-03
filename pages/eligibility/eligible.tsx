import { GetServerSideProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout';

const getServerSideProps: GetServerSideProps =
  async function getServerSideProps(context) {
    return {
      props: {
        ...(await serverSideTranslations(context.locale!, ['common'])),
      },
    };
  };

export { getServerSideProps };

const Eligible: NextPage = function Eligible() {
  const { t } = useTranslation('common');
  return <Layout>{t('eligible')}</Layout>;
};

export default Eligible;
