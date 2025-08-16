import { createEffect, createSignal, For, JSXElement } from "solid-js";
import {
  TechnoElement,
  TechnoElementProps,
} from "../TechnoElement/TechnoElement";
import { animate } from "animejs";
import "./style.css";

export interface TechnoOverlayProps {
  opened: boolean;
  elements: TechnoElementProps[];
  onCloseRequest: () => boolean;
}

export function TechnoOverlay(props: TechnoOverlayProps) {
  let closeButton!: HTMLButtonElement;
  let technoOverlay!: HTMLDivElement;
  let elements!: HTMLDivElement;
  const [overlayVisible, setOverlayVisible] = createSignal(false);

  createEffect(() => {
    if (!overlayVisible()) return;

    // Animate child entrance
    {
      const children = elements.children as HTMLCollectionOf<HTMLElement>;
      elements.style.overflow = "hidden";
      if (children.length > 0) {
        const closeButtonBbox = closeButton.getBoundingClientRect();
        const startPosX = closeButtonBbox.left + closeButtonBbox.width / 2;
        const startPosY = closeButtonBbox.top + closeButtonBbox.height / 2;
        let i = 0;
        let lastPromise: Promise<void> = Promise.resolve();
        for (const child of children) {
          child.style.transitionProperty = "none";
          const bbox = child.getBoundingClientRect();
          lastPromise = animate(child, {
            opacity: [{ from: 0, to: 1, duration: 150 }],
            translateX: [
              {
                from: startPosX - (bbox.left + bbox.width / 2),
                to: 0,
                duration: 300,
              },
            ],
            translateY: [
              {
                from: startPosY - (bbox.top + bbox.height / 2),
                to: 0,
                duration: 300,
              },
            ],
            ease: "out",
            delay: i * 50,
          }).then(() => (child.style.transitionProperty = ""));
          ++i;
        }
        lastPromise.then(() => (elements.style.overflow = ""));
      }
    }
  });

  createEffect(() => {
    if (props.opened) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";

      setOverlayVisible(true);
      animate(technoOverlay, {
        opacity: [{ to: 1, duration: 500 }],
      });

      // animate(".menu__link", {
      //   translateX: [{ from: -100, to: 0 }],
      //   opacity: [{ from: 0, to: 1 }],
      //   duration: stagger(200, { start: 200 }),
      //   ease: "out",
      // });
      {
        closeButton.style.transitionProperty = "none";
        animate(closeButton, {
          translateY: [{ from: 20, to: 0 }],
          opacity: [{ from: 0, to: 1 }],
          duration: 500,
          ease: "out",
        }).then(() => (closeButton.style.transitionProperty = ""));
      }
    } else {
      document.getElementsByTagName("html")[0].style.overflow = "";

      {
        closeButton.style.transitionProperty = "none";
        animate(closeButton, {
          translateY: [{ from: 0, to: 20 }],
          opacity: [{ from: 1, to: 0 }],
          duration: 500,
          ease: "out",
        }).then(() => (closeButton.style.transitionProperty = ""));
      }

      animate(technoOverlay, {
        opacity: [{ to: 0, duration: 200 }],
      }).then(() => setOverlayVisible(false));
    }
  });

  return (
    <div
      ref={technoOverlay}
      class="techno-overlay"
      classList={{ "techno-overlay--visible": overlayVisible() }}
    >
      <div class="techno-overlay__elements" ref={elements}>
        <For each={props.elements}>
          {(element) => <TechnoElement {...element} />}
        </For>
      </div>
      <button
        ref={closeButton}
        type="button"
        class="hover:bg-pink-vibrant origin-bottom scale-100 self-center rounded-full bg-white p-2 text-black transition-[transform_background-color_color] hover:scale-110 hover:text-white"
        onClick={(ev) => {
          ev.stopPropagation();
          props.onCloseRequest();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width={1.5}
          stroke="currentColor"
          class="size-10 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
