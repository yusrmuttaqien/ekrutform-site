import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Button';
import EducationForm from '@/pages/Home/fragments/EducationForm';
import ExperienceForm from '@/pages/Home/fragments/ExperienceForm';
import { POSTDetails } from '@/utils/APIs/EKRUTAPI';
import validator from '@/pages/Home/fragments/DetailsForm/validator';
import styles from './detailsform.module.scss';

const NAME_EDU = 'educations';
const NAME_EXP = 'experiences';

export default function DetailsForm(props) {
  const { set, data } = props;

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
    setValue,
  } = useForm({
    defaultValues: {
      [NAME_EDU]: [{ user_id: data.id }],
      [NAME_EXP]: [{ user_id: data.id }],
    },
    resolver: yupResolver(validator),
  });
  const {
    fields: eduFields,
    append: appendEdu,
    remove: removeEdu,
  } = useFieldArray({
    control,
    name: NAME_EDU,
  });
  const {
    fields: expFields,
    append: appendExp,
    remove: removeExp,
  } = useFieldArray({
    control,
    name: NAME_EXP,
  });
  const [fetchError, setFetchError] = useState();

  const _handleSuccess = () => set((prev) => ({ status: 'done', ...prev }));
  const _handleSubmit = async (value) =>
    await POSTDetails(value, _handleSuccess, setFetchError);

  useEffect(() => {
    // As long the value is the same, rerendering is not an issue.
    const subscription = watch(() => setFetchError(null));

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.root}>
      <header>
        <h1>Enter your details</h1>
        <p>Submit your education(s) and experience(s) as,</p>
        <div>
          <span>
            <p>Full name</p>
            <p>Email</p>
            <p>Phone</p>
          </span>
          <span>
            <p>{data.fullname}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
          </span>
        </div>
      </header>
      <form onSubmit={handleSubmit(_handleSubmit)} noValidate>
        <div>
          <div>
            {eduFields.map((item, index, arr) => (
              <EducationForm
                form={[
                  register,
                  NAME_EDU,
                  errors,
                  index,
                  arr.length,
                  removeEdu,
                  setValue,
                ]}
                key={item.id}
              />
            ))}
            <Button
              className={styles.customButton}
              onClick={() => appendEdu({ user_id: data.id })}
              type="button"
            >
              Add new Education
            </Button>
          </div>
          <div>
            {expFields.map((item, index, arr) => (
              <ExperienceForm
                form={[
                  register,
                  NAME_EXP,
                  errors,
                  index,
                  arr.length,
                  removeExp,
                  setValue,
                ]}
                key={item.id}
              />
            ))}
            <Button
              className={styles.customButton}
              onClick={() => appendExp({ user_id: data.id })}
              type="button"
            >
              Add new Experience
            </Button>
          </div>
        </div>
        {fetchError && <p>{fetchError}</p>}
        <Button
          className={styles.customButtonSubmit}
          disabled={!isDirty || isSubmitting}
        >
          {isSubmitting ? 'Submitting' : 'Submit all'}
        </Button>
      </form>
    </div>
  );
}
