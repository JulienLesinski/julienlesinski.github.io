import { createSignal, JSXElement } from "solid-js";
import {
  TechnoOverlay,
  TechnoOverlayProps,
} from "./TechnoOverlay/TechnoOverlay";

interface Props {
  children: JSXElement;
  technos: TechnoOverlayProps["elements"];
}

export function TechnoButton(props: Props) {
  const [opened, setOpened] = createSignal(false);

  return (
    <>
      <button
        type="button"
        class="button bg-green-bit-soft text-white"
        onClick={() => setOpened(true)}
      >
        <span>{props.children}</span>
      </button>
      <TechnoOverlay
        elements={props.technos}
        opened={opened()}
        onCloseRequest={() => setOpened(false)}
      />
    </>
  );
}
