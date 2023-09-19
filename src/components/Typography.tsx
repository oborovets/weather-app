import MUITypography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  variant?: Variant;
}

export default function Typography({ variant, children }: Props) {
  return (
    <MUITypography variant={variant} noWrap>
      {children}
    </MUITypography>
  );
}
