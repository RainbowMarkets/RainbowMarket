import { Label, Input } from "./styledSetProfileInput";

export default function SetProfileInput({ id, label, placeholder }) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} required />
    </>
  );
}
