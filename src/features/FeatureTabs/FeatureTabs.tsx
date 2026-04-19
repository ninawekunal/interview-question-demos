import { useState } from "react";
import features from "./data/features.json";
import { Link } from "react-router-dom";
import { Button, Chip, Container, Grid, Stack, Tab, Tabs } from "@mui/material";

export default function FeatureTabs() {
  const [selected, setSelected] = useState(0);

  function handleChange(_event: React.SyntheticEvent, newValue: number) {
    setSelected(newValue);
  }

  return (
    <Container maxWidth="sm">
      <Tabs value={selected} onChange={handleChange} variant="scrollable">
        {features.map((feature, idx) => {
          return <Tab key={idx} label={feature.name} />;
        })}
      </Tabs>

      <Grid direction="row" container spacing={2}>
        <Container maxWidth="sm">
          <h2>{features[selected].name}</h2>
        </Container>
        <Container>
          <Stack direction="row" sx={{ gap: 1, flexWrap: "wrap" }}>
            {features[selected].skills.map((skill, index) => {
              return <Chip label={skill.title} key={index} clickable />;
            })}
          </Stack>
        </Container>
        <Container>
          <Link to={features[selected].demoUrl}>
            <Button variant="outlined">Go to Live Demo</Button>
          </Link>
        </Container>
      </Grid>
    </Container>
  );
}
