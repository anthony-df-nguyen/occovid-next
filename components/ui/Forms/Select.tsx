type Props = {
  label: string;
  defaultValue: string | number;
  options: {
    key: string;
    value: string | number;
  }[];
};

export default function SelectMenu({ label, options, defaultValue }: Props) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Canada"
      >
        {options.map((opt) => (
          <option key={opt.key} value={opt.value}>{opt.key}</option>
        ))}
      </select>
    </div>
  );
}
