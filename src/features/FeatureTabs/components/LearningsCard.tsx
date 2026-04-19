import {
  CardContent,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";

type Skill = {
  title: string;
};

type Learning = {
  title: string;
  description: string;
};

type Feature = {
  name: string;
  subHeading: string;
  demoUrl: string;
  skills: Skill[];
  learnings?: Learning[];
};

type LearningsCardProps = {
  feature: Feature;
};

export default function LearningsCard({ feature }: LearningsCardProps) {
  return (
    <CardContent>
      <Container disableGutters>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Skills / Learnings
        </Typography>

        {!!feature.learnings?.length && (
          <TableContainer>
            <Table size="small" aria-label="skills and learnings table">
              <TableBody>
                {feature.learnings.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      verticalAlign: "top",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        width: "32%",
                        fontWeight: 600,
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        pr: 2,
                      }}
                    >
                      {item.title}
                    </TableCell>

                    <TableCell
                      sx={{
                        color: "text.secondary",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      {item.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {!!feature.skills?.length && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1.5, color: "text.secondary" }}
            >
              Quick Tags
            </Typography>

            <Stack
              direction="row"
              sx={{
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {feature.skills.map((skill, index) => (
                <Chip
                  clickable
                  key={index}
                  label={skill.title}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </CardContent>
  );
}
