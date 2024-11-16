import Layout from '@/components/Layout';

import * as styles from './styles.css';

const QRCodePage = () => {
  return (
    <Layout bg="white">
      <div className={styles.root}>
        <img className={styles.image} src="/static/image_route.png" alt="Route" />
        <img className={styles.image} src="/static/image_qr.png" alt="QRCode" />
      </div>
    </Layout>
  );
};

export default QRCodePage;
