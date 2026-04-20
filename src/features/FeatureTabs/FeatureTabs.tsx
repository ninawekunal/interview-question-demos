import { useState } from "react";
import features from "./data/features.json";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  Tab,
  Tabs,
} from "@mui/material";
import LearningsCard from "./components/LearningsCard";

export default function FeatureTabs() {
  const [selected, setSelected] = useState(0);

  function handleChange(_event: React.SyntheticEvent, newValue: number) {
    setSelected(newValue);
  }

  const selectedFeature = features[selected];

  return (
    <Container maxWidth="lg">
      <Tabs value={selected} onChange={handleChange} variant="scrollable">
        {features.map((feature, idx) => (
          <Tab key={idx} label={feature.name} />
        ))}
      </Tabs>

      <Card raised>
        <CardHeader
          title={selectedFeature.name}
          action={
            <Link to={selectedFeature.demoUrl}>
              <Button variant="outlined">Go to Live Demo</Button>
            </Link>
          }
          subheader={selectedFeature.subHeading}
        />
        <Divider />
        <LearningsCard feature={selectedFeature} />
      </Card>
    </Container>
  );
}
