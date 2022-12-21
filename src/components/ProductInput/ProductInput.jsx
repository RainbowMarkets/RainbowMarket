import { Label, Input } from "./styledProductInput";

export default function ProductInput({ label, placeholder }) {
  return (
    <>
      <Label htmlFor="prdtname">{label}</Label>
      <Input id="prdtname" placeholder={placeholder} />
    </>
  );
}
