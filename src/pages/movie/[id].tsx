import Layout from '@/modules/Layout';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <></>
    </Layout>
  );
};

export default Page;
