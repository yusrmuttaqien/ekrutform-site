import Field from '@/components/Field';
import Button from '@/components/Button';
import DateField from '@/components/DateField';
import styles from './experienceForm.module.scss';

export default function ExperienceForm(props) {
  const { form } = props;
  const [register, name, errors, index, length, remove, setValue] = form || [];

  const _defineName = (field) => `${name}.${index}.${field}`;

  return (
    <div className={styles.root}>
      <h2>Experience #{index}</h2>
      <div>
        <div>
          <Field
            className={styles.customField}
            form={[register, errors]}
            label="Company"
            name={_defineName('company')}
            placeholder="Input company"
          />
          <Field
            className={styles.customField}
            form={[register, errors]}
            label="Title"
            name={_defineName('title')}
            placeholder="Input title"
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
        Delete Experience #{index}
      </Button>
    </div>
  );
}
