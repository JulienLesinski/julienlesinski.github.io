import { createUniqueId } from "solid-js";

interface Props {
  fillColorClass: string;
  class?: string;
}

export function CloudHeaderPattern(props: Props) {
  const wavePatternId = `wave-pattern-${createUniqueId()}`;

  return (
    <svg
      class={props.class}
      width="100%"
      height="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={wavePatternId}
          x="0"
          y="0"
          width="374.37"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <svg
            width="374.37"
            height="80"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 374.37 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m71.702 32.434c9.1596-7.1849 21.048-11.526 34.033-11.526 3.9711 0 7.8394 0.40593 11.559 1.1752 9.5173-12.136 25.046-20.045 42.572-20.045 21.409 0 39.837 11.801 47.969 28.693 3.1615-0.54689 6.4226-0.83281 9.7564-0.83281 14.944 0 28.436 5.7499 37.987 14.968 10.08-7.9584 22.935-13.002 37.03-13.712 8.026-17.117 26.583-29.116 48.17-29.116 12.777 0 24.493 4.2036 33.592 11.184v66.777h-374.37v-67.743c7.4584-3.7452 16.015-5.8751 25.111-5.8751 20.275 0 37.877 10.584 46.591 26.052z"
              class={props.fillColorClass}
            />
          </svg>
        </pattern>
      </defs>
      <rect fill={`url(#${wavePatternId})`} width="100%" height="80" />
    </svg>
  );
}
