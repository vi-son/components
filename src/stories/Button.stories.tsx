import { createSignal } from "solid-js";
import {
  ButtonEmoji,
  ButtonCloseNarrative,
  ButtonOpenNarrative,
} from "../components/buttons";

export default {
  title: "Components/Buttons",
  component: ButtonEmoji,
};

export const WithText = () => (
  <ButtonEmoji emoji={"😏"} text={"Button"} withText />
);

WithText.storyName = "Emoji";

export const NarrativeButtons = () => {
  const [showNarrative, setShowNarrative] = createSignal(true);
  return (
    <>
      <ButtonOpenNarrative
        showNarrative={showNarrative()}
        setShowNarrative={setShowNarrative}
      />
      <ButtonCloseNarrative
        showNarrative={showNarrative()}
        setShowNarrative={setShowNarrative}
      />
    </>
  );
};

NarrativeButtons.storyName = "Narrative";
