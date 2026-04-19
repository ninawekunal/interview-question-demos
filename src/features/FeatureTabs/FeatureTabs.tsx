import { useState } from "react";
import features from "./data/features.json";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

export default function FeatureTabs() {
  const [selected, setSelected] = useState(0);

  function handleChange(_event: React.SyntheticEvent, newValue: number) {
    setSelected(newValue);
  }

  return (
    <Container maxWidth="sm" sx={{ gap: 1 }}>
      <Tabs value={selected} onChange={handleChange} variant="scrollable">
        {features.map((feature, idx) => {
          return <Tab key={idx} label={feature.name} />;
        })}
      </Tabs>

      <Card raised>
        <CardHeader
          title={features[selected].name}
          action={
            <Link to={features[selected].demoUrl}>
              <Button variant="outlined">Go to Live Demo</Button>
            </Link>
          }
          subheader={features[selected].subHeading}
        />
        <Divider />
        <CardContent>
          <Container>
            <Typography variant="h6">Skills / Learnings</Typography>
            <Stack direction="row" sx={{ gap: 1, flexWrap: "wrap" }}>
              {features[selected].skills.map((skill, index) => {
                return <Chip label={skill.title} key={index} clickable />;
              })}
            </Stack>
          </Container>
        </CardContent>
        <Container></Container>
      </Card>
    </Container>
  );
}
