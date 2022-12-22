import { Label, Input } from "./styledProductInput";

export default function ProductInput({
  label,
  placeholder,
  stateInp,
  handler,
}) {
  return (
    <>
      <Label htmlFor="prdtname">{label}</Label>
      <Input
        id="prdtname"
        placeholder={placeholder}
        value={stateInp}
        onChange={handler}
      />
    </>
  );
}
