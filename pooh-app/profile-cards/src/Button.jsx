const styles = {
  primary: 'bg-cyan-600 text-white hover:bg-cyan-700',
  outline: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50',
};

function Button({ variant = 'primary', children }) {
  return (
    <button className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;