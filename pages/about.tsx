import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Layout from '@/components/layout';

const ACCE_URL = 'https://www.acceaction.org';
const TEC_URL = 'https://techequitycollaborative.org';

const getStaticProps: GetStaticProps = async function getStaticProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale!, ['common'])),
    },
  };
};

export { getStaticProps };

const About: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <h1 className="text-blue text-3xl font-bold py-8">
        {t('about.title-1')}
      </h1>
      <div>
        {(t('about.text-1', { returnObjects: true }) as Array<string>).map(
          (x, i) => (
            <p key={i} className="text-gray-dark text-lg pb-8">
              {x}
            </p>
          ),
        )}
        <h2 className="text-blue text-2xl font-bold py-4">
          {t('about.title-2')}
        </h2>
        {(t('about.text-2', { returnObjects: true }) as Array<string>).map(
          (x, i) => (
            <p key={i} className="text-gray-dark text-lg pb-8">
              {x}
            </p>
          ),
        )}
        <h2 className="text-blue text-2xl font-bold py-4">
          {t('about.title-3')}
        </h2>
        <div className="w-32 h-32 relative">
          <Image
            src="/img/acce-logo.png"
            alt="ACCE Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-blue text-xl font-bold py-2">
          <Link href={ACCE_URL}>{t('about.organizations.acce-name')}</Link>
        </h3>
        {(
          t('about.organizations.acce-text', {
            returnObjects: true,
          }) as Array<any>
        ).map((x, i) => (
          <p key={i} className="text-gray-dark text-lg pb-8">
            {x}
          </p>
        ))}
        <div className="w-60 h-14 my-2 relative">
          <Image
            src="/img/techequity-logo.jpg"
            alt="TechEquity Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-blue text-xl font-bold py-2">
          <Link href={TEC_URL}>{t('about.organizations.tec-name')}</Link>
        </h3>
        {(
          t('about.organizations.tec-text', {
            returnObjects: true,
          }) as Array<any>
        ).map((x, i) => (
          <p key={i} className="text-gray-dark text-lg pb-8">
            {x}
          </p>
        ))}
      </div>
    </Layout>
  );
};

export default About;
