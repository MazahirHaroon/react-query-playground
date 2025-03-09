import './index.css';

interface InputProps {
  name: string;
  type: string;
  value: string | undefined;
  label?: string;
  placeholder?: string;
  customContainerStyle?: object;
  customInputStyle?: object;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  label,
  customInputStyle,
  customContainerStyle,
  ...InputProps
}: InputProps) => (
  <div className='input-container' style={customContainerStyle}>
    {label ? (
      <label className='label' htmlFor='search'>
        {label}
      </label>
    ) : (
      ''
    )}
    <input className='input-field' {...InputProps} style={customInputStyle} />
  </div>
);

export default CustomInput;
