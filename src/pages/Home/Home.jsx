import { useState } from 'react';
import RenderIF from '@/utils/renderer/RenderIF';
import BasicForm from '@/pages/Home/fragments/BasicForm';
import DetailsForm from '@/pages/Home/fragments/DetailsForm';
import SuccessPage from '@/pages/Home/fragments/SuccessPage';
import styles from './home.module.scss';

export default function Home() {
  const [basicInfo, setBasicInfo] = useState();

  return (
    <section className={styles.root}>
      <RenderIF render={BasicForm} when={!basicInfo} set={setBasicInfo} />
      <RenderIF
        render={DetailsForm}
        when={basicInfo && !basicInfo.status}
        set={setBasicInfo}
        data={basicInfo}
      />
      <RenderIF
        render={SuccessPage}
        when={basicInfo?.status === 'done'}
        data={basicInfo}
        set={setBasicInfo}
      />
    </section>
  );
}
