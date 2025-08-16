import { JSXElement } from "solid-js";

interface Props {
  children: JSXElement;
  class?: string;
}

export function SectionContainer(props: Props) {
  return (
    <div class="flex justify-center">
      <div class={`w-3xl max-w-full ${props.class ?? ""}`}>
        {props.children}
      </div>
    </div>
  );
}
