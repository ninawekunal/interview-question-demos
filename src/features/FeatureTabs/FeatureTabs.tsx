import { useState } from "react";
import "./styles/index.css";
import features from "./data/features.json";
import { Link } from "react-router-dom";

export default function FeatureTabs() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="feature-tabs-container">
      <div className="feature-tabs-bar">
        {features.map((feature, idx) => (
          <button
            key={feature.name}
            className={"feature-tab" + (selected === idx ? " selected" : "")}
            onClick={() => setSelected(idx)}
          >
            {feature.name}
          </button>
        ))}
      </div>
      <div className="feature-tab-content">
        <h2>{features[selected].name}</h2>
        <div className="project-skills">
          {features[selected].skills.map((skill, index) => {
            return (
              <button className="project-skills-item" key={index}>
                {skill.title}
              </button>
            );
          })}
        </div>
        <Link to={features[selected].demoUrl}>
          <button className="feature-demo-btn">Go to Live Demo</button>
        </Link>
      </div>
    </div>
  );
}
