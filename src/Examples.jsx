import React, { useState } from "react";
import { EXAMPLES } from "./data";
import Section from "./Section";
import TabButton from "./components/TabButton";
import Tabs from "./components/Tabs";
function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
        // ButtonContainer="menu"
          buttons={
            <menu>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </menu>
          }
        >
          {" "}
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}

export default Examples;
