import { Box, Container } from "@mui/material";
import type { PropsWithChildren } from "react";
import BreadcrumbNavigation from "./BreadcrumbNavigation.js";

export type BreadcrumbPageProps = PropsWithChildren<{
  featureName?: string;
}>;

export default function BreadcrumbPage({
  featureName,
  children,
}: BreadcrumbPageProps) {
  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <BreadcrumbNavigation featureName={featureName} />
      </Container>
      {children}
    </Box>
  );
}

