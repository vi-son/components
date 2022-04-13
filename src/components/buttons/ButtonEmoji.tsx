import "./ButtonEmoji";

interface IButtonEmojiProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  emoji: string;
  withText?: boolean;
}

function ButtonEmoji(props: IButtonEmojiProps) {
  return (
    <div class={[`btn-emoji`, props.className].join(" ")}>
      <button class="btn" onClick={props.onClick}>
        <span class="emoji">{props.emoji}</span>
      </button>
      {props.withText && <span className="text">{props.text}</span>}
    </div>
  );
}

export { ButtonEmoji };
