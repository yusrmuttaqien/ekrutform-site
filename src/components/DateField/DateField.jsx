import { forwardRef, useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import get from 'lodash/get';
import concat from '@/utils/string/concat';
import styles from './dateField.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateField(props) {
  const { label, form, name } = props;
  const [register, error, setValue] = form || [];

  const classes = concat([styles.root, get(error, name) && styles.error]);

  const [date, setDate] = useState();

  const _handleOnChange = (value) => {
    setDate(value);
    setValue(name, value.toISOString(), { shouldValidate: true });
  };

  useEffect(() => {
    register && register(name);
  }, []);

  return (
    <DatePicker
      selected={date}
      onChange={_handleOnChange}
      customInput={
        <DateInput
          label={label}
          error={error}
          fieldName={name}
          classes={classes}
        />
      }
    />
  );
}

const DateInput = forwardRef((props, ref) => {
  const { value, onClick, label, error, fieldName, classes } = props;

  const _defineLabelText = () => {
    if (!label) return;
    if (!get(error, fieldName)) return label;

    return label + ' ' + get(error, fieldName).message;
  };
  const _handleEnter = (e) => e.key === 'Enter' && onClick();

  return (
    <div className={classes}>
      {label && <label title={_defineLabelText()}>{_defineLabelText()}</label>}
      <div tabIndex="0" onClick={onClick} ref={ref} onKeyUp={_handleEnter}>
        <p>{value || 'M/D/Y'}</p>
      </div>
    </div>
  );
});
