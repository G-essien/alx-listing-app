// components/common/Button.tsx
import { ButtonProps } from '../../interfaces';

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default Button;
