import { Label, Input } from "./styledSetProfileInput";

export default function SetProfileInput({
  id,
  label,
  placeholder,
  value,
  handler,
}) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder}
        required
        value={value}
        onChange={handler}
      />
    </>
  );
}
