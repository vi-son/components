import { AudioPlayer } from "../components/audio/AudioPlayer";

export default {
  title: "Components/Audio Player",
  component: AudioPlayer,
};

export const Default = () => (
  <AudioPlayer src="https://archive.org/serve/testmp3testfile/mpthreetest.mp3" />
);

Default.storyName = "Audio Player";
