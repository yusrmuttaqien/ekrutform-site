import Field from '@/components/Field';
import Button from '@/components/Button';
import DateField from '@/components/DateField';
import styles from './educationForm.module.scss';

export default function EducationForm(props) {
  const { form } = props;
  const [register, name, errors, index, length, remove, setValue] = form || [];

  const _defineName = (field) => `${name}.${index}.${field}`;

  return (
    <div className={styles.root}>
      <h2>Education #{index}</h2>
      <div>
        <div>
          <Field
            className={styles.customField}
            form={[register, errors]}
            label="School"
            name={_defineName('school')}
            placeholder="Input school"
          />
          <Field
            className={styles.customField}
            form={[register, errors]}
            label="Major"
            name={_defineName('major')}
            placeholder="Input major"
          />
        </div>
        {/* <div>
          <DateField
            form={[register, errors, setValue]}
            label="Start date"
            name={_defineName('start_date')}
          />
          <DateField
            form={[register, errors, setValue]}
            label="End date"
            name={_defineName('end_date')}
          />
        </div> */}
      </div>
      <Button
        className={styles.customButton}
        disabled={length <= 1}
        onClick={() => remove(index)}
        type="button"
      >
        Delete Education #{index}
      </Button>
    </div>
  );
}
