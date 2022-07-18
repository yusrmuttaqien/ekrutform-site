import Button from '@/components/Button';
import styles from './successPage.module.scss';

export default function SuccessPage(props) {
  const { data, set } = props;

  return (
    <div>
      <header>
        <h1>Details succesfully submitted!</h1>
        <p>Submitted with userID: {data.id}</p>
        <Button
          className={styles.customButton}
          onClick={() => set(null)}
          type="button"
        >
          Go back to first page
        </Button>
      </header>
    </div>
  );
}
