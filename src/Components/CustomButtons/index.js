import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButtonPrimary = styled(Button)({
  background: "#1BC5BD",
  borderRadius: "4px",
  color: "#fff",
  padding: ".75rem 1.5rem",
  fontSize: "12px",
  fontweight: "500",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#169E97",
  },
});

const StyledButtonSecondary = styled(Button)({
  backgroundColor: "#E5EAEE",
  borderRadius: "4px",
  color: "#464E5F",
  padding: ".5rem 1.5rem",
  fontSize: "12px",
  fontweight: "500",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#CBD0D4",
  },
});

const StyledButtonPrimaryBlue = styled(Button)({
  background: "#3699FF",
  borderRadius: "4px",
  color: "#fff",
  padding: ".75rem 1.5rem",
  fontSize: "12px",
  fontweight: "500",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#0A79EB",
  },
});

const StyledButtonExportFilter = styled(Button)({
  backgroundColor: "#ECF8FE",
  borderRadius: ".2rem",
  color: "#00A0EF",
  padding: ".4rem 1.5rem",
  fontSize: ".875rem",
  fontweight: "600",
  "&:hover": {
    backgroundColor: "#E6F7FF",
  },
});

export const PrimaryButton = (props) => {
  const { label, onClick, children, className, ...restProps } = props;

  return (
    <StyledButtonPrimary {...restProps} onClick={onClick} className={className}>
      {children}
    </StyledButtonPrimary>
  );
};

export const SecondaryButton = (props) => {
  const { label, onClick, className, children, ...restProps } = props;

  return (
    <StyledButtonSecondary
      {...restProps}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButtonSecondary>
  );
};

export const PrimaryBlueButton = (props) => {
  const { label, onClick, className, children, ...restProps } = props;

  return (
    <StyledButtonPrimaryBlue
      {...restProps}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButtonPrimaryBlue>
  );
};

export const FilterExportButton = (props) => {
  const { label, onClick, className, children, Icon, ...restProps } = props;
  return (
    <StyledButtonExportFilter
      {...restProps}
      onClick={onClick}
      className={className}
      startIcon={<img src={Icon} alt={label} className="w-3" />}
      style={{ fontWeight: "600 !important" }}
    >
      {children}
    </StyledButtonExportFilter>
  );
};
