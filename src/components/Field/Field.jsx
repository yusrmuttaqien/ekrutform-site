import concat from '@/utils/string/concat';
import get from 'lodash/get';
import styles from './field.module.scss';

/**
 * Render Field
 * @param {Object} props
 * @param {String} props.className Define custom classname
 * @param {Object} props.form Define react-hook-form attributes
 * @param {String} props.label Define field label
 * @param {String} props.name Define field name
 * @param {String} props.type Define field type
 * @param {Object} props.rest Define infinity key
 * @returns Field component
 */

export default function Field(props) {
  const {
    className,
    form,
    label,
    name = 'field',
    type = 'text',
    ...rest
  } = props;
  const [register, error] = form || [];

  const classes = concat([
    styles.root,
    className,
    get(error, name) && styles.error,
  ]);

  const registerer = register ? register(name) : {};

  const _defineLabelText = () => {
    if (!label) return;
    if (!get(error, name)) return label;

    return label + ' ' + get(error, name).message;
  };

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={name} title={_defineLabelText()}>
          {_defineLabelText()}
        </label>
      )}
      <input {...rest} type={type} name={name} id={name} {...registerer} />
    </div>
  );
}
