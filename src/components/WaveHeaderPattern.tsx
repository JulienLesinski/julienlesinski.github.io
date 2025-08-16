import { createUniqueId } from "solid-js";

interface Props {
  fillColorClass: string;
  class?: string;
}

export function WaveHeaderPattern(props: Props) {
  const wavePatternId = `wave-pattern-${createUniqueId()}`;

  return (
    <svg
      class={props.class}
      width="100%"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={wavePatternId}
          x="0"
          y="0"
          width="373.25"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <svg
            width="373.25"
            height="32"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 373.25 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m373.25 0v31.986h-373.25v-31.986c42.419 0 60.906 20.478 93.284 20.482 31.242 0 62.189-20.496 93.284-20.496s62.328 20.429 93.284 20.496c29.798 0 48.842-20.482 93.403-20.482z"
              class={props.fillColorClass}
            />
          </svg>
        </pattern>
      </defs>
      <rect fill={`url(#${wavePatternId})`} width="100%" height="32" />
    </svg>
  );
}
