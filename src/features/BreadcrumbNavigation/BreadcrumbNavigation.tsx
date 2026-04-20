import { Breadcrumbs, Link as MUILink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export type BreadcrumbNavigationProps = {
  featureName?: string;
  homeLabel?: string;
  homeTo?: string;
};

export default function BreadcrumbNavigation({
  featureName,
  homeLabel = "Home",
  homeTo = "/",
}: BreadcrumbNavigationProps) {
  const isHome = !featureName;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {isHome ? (
        <Typography color="text.primary">{homeLabel}</Typography>
      ) : (
        <MUILink
          component={RouterLink}
          underline="hover"
          color="inherit"
          to={homeTo}
        >
          {homeLabel}
        </MUILink>
      )}

      {!isHome ? (
        <Typography color="text.primary">{featureName}</Typography>
      ) : null}
    </Breadcrumbs>
  );
}

