import "./ButtonOpenNarrative.sass";
import "./ButtonCloseNarrative.sass";

export interface IButtonNarrativeProps {
  setShowNarrative: (show: boolean) => void;
  showNarrative: boolean;
}

function ButtonOpenNarrative(props: IButtonNarrativeProps) {
  return (
    <button
      class="emoji btn-open-narrative"
      onClick={() => props.setShowNarrative(true)}
    >
      <span className="emoji">📖</span>
    </button>
  );
}

function ButtonCloseNarrative(props: IButtonNarrativeProps) {
  return (
    <button
      class={[
        "btn-close-details",
        "emoji",
        props.showNarrative ? "visible" : "hidden",
      ].join(" ")}
      onClick={() => props.setShowNarrative(false)}
    >
      <span>👈</span>
    </button>
  );
}

export { ButtonOpenNarrative, ButtonCloseNarrative };
