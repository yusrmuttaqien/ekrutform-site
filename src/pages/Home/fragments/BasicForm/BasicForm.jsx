import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Field from '@/components/Field';
import Button from '@/components/Button';
import { POSTBasicProfile } from '@/utils/APIs/EKRUTAPI';
import validator from '@/pages/Home/fragments/BasicForm/validator';
import styles from './basicForm.module.scss';

export default function BasicForm(props) {
  const { set } = props;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
    watch,
  } = useForm({ resolver: yupResolver(validator) });
  const [fetchError, setFetchError] = useState();

  const _handleSubmit = (value) => POSTBasicProfile(value, set, setFetchError);

  useEffect(() => {
    // As long the value is the same, rerendering is not an issue.
    const subscription = watch((value, { name, type }) => setFetchError(null));

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.root}>
      <header>
        <h1>Enter your basic profile</h1>
        <p>This step is required to acquire your id.</p>
      </header>
      <form onSubmit={handleSubmit(_handleSubmit)} noValidate>
        <Field
          className={styles.customField}
          form={[register, errors]}
          label="Full name"
          name="fullname"
          placeholder="Enter your full name here"
        />
        <Field
          className={styles.customField}
          form={[register, errors]}
          label="Email"
          name="email"
          placeholder="Enter valid email address here"
          type="email"
        />
        <Field
          className={styles.customField}
          form={[register, errors]}
          label="Phone"
          name="phone"
          placeholder="Enter valid phone number here"
        />
        {fetchError && <p>{fetchError}</p>}
        <Button
          className={styles.customButton}
          disabled={!isDirty || isSubmitting}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
