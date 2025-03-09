import './index.css';

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  value: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ label, ...InputProps }: InputProps) => (
  <div className='input-container'>
    <label className='label' htmlFor='search'>
      {label}
    </label>
    <input className='input-field' {...InputProps} />
  </div>
);

export default CustomInput;
