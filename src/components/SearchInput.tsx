import { Input, InputGroup, InputProps } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export function SearchInput({ placeholder, value, onChange, ...rest }: InputProps) {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input placeholder={placeholder} value={value} onChange={onChange} {...rest} />
    </InputGroup>
  )
}
