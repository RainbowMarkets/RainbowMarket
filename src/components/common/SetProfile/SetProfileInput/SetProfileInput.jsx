import { Label, Input } from "./styledSetProfileInput";

export default function SetProfileInput({
  id,
  label,
  placeholder,
  value,
  handler,
  min,
  max,
}) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        required
        value={value}
        onChange={handler}
      />
    </>
  );
}
