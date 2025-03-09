import './index.css';

interface InputProps {
  name: string;
  type: string;
  value: string | undefined;
  label?: string;
  placeholder?: string;
  style?: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ label, style, ...InputProps }: InputProps) => (
  <div className='input-container' style={style}>
    {label ? (
      <label className='label' htmlFor='search'>
        {label}
      </label>
    ) : (
      ''
    )}
    <input className='input-field' {...InputProps} />
  </div>
);

export default CustomInput;
