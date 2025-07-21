interface InputProps {
  label: string;
  id: string;
}

export const Input = ({ label, id }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
      />
    </div>
  );
};
