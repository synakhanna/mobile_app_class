export default function Input (props) {
  const {label, type, placeholder, value, onChange} = props
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded-md"
      />
    </div>
  )
}