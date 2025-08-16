import { JSXElement } from "solid-js";
import "./style.css";

export interface TechnoElementProps {
  src: string;
  alt: string;
  background: string;
  href: string;
}

export function TechnoElement(props: TechnoElementProps): JSXElement {
  return (
    <a
      href={props.href}
      class="techno-element"
      style={{ background: props.background }}
    >
      <img src={props.src} alt={props.alt} />
    </a>
  );
}
