import Layout from '@/components/Layout';
import { rem } from '@/utils/pxto.ts';

import * as styles from './styles.css';

const QRCodePage = () => {
  return (
    <Layout bg="white">
      <div className={styles.root}>
        <img
          style={{ marginTop: rem(48) }}
          src="/static/image_route.svg"
          width="100%"
          alt="Route"
          draggable={false}
        />
        <img src="/static/image_qr.svg" width="100%" alt="QRCode" draggable={false} />
      </div>
    </Layout>
  );
};

export default QRCodePage;
