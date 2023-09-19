import { ReactElement } from "react";
import MUITypography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { NO_INFO } from "../utils/formatString.ts";

interface Props {
  children: ReactElement<any, any> | string;
  variant?: Variant;
}

export default function Typography({ variant, children }: Props) {
  const backgroundColor =
    typeof children === "string" && children.includes(NO_INFO)
      ? "#E8E9EB"
      : "transparent";

  return (
    <MUITypography variant={variant} noWrap style={{ backgroundColor }}>
      {children}
    </MUITypography>
  );
}
