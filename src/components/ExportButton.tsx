import { Button, ButtonProps } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";

export function ExportButton({ ...rest }: ButtonProps) {
  return (
    <Button variant="outline" {...rest}>
      <LuDownload /> Exportar
    </Button>
  )
}
