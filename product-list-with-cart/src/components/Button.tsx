import { ButtonProps } from '../shared/type';

function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button
      className={`flex items-center px-5 py-[10px] rounded-full border text-[14px] font-semibold shadow-sm transition ${
        type === 'add'
          ? 'gap-3 bg-white border-rose-400 text-rose-900 hover:border-red-primary hover:text-red-primary'
          : 'gap-10 bg-red-primary border-red-primary text-white cursor-default'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
