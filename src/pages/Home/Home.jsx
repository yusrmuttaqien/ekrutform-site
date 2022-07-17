import { useState } from 'react';
import RenderIF from '@/utils/renderer/RenderIF';
import BasicForm from '@/pages/Home/fragments/BasicForm';
import styles from './home.module.scss';

export default function Home() {
  const [basicInfo, setBasicInfo] = useState();

  return (
    <section className={styles.root}>
      <RenderIF render={BasicForm} when={!basicInfo} set={setBasicInfo} />
    </section>
  );
}
