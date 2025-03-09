import { ReactNode } from 'react';
import './index.css';

interface PrimaryButtonProps {
  content: string | ReactNode;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton = ({
  type = 'button',
  content,
  ...props
}: PrimaryButtonProps) => (
  <>
    <button className='primary-button' type={type} {...props}>
      {content}
    </button>
  </>
);

export default PrimaryButton;
