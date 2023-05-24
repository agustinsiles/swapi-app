interface IProps {
  id: string;
  value: string;
  options: string[];
  handleSelectionChange: (value: string) => void;
}

export default function Dropdown({
  id,
  value,
  options,
  handleSelectionChange,
}: IProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => handleSelectionChange(e.target.value)}
    >
      <option value="">-</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
