import {
  createSignal,
  For,
  onMount,
  type JSXElement,
  createEffect,
} from "solid-js";
import "./style.css";
import { animate, stagger } from "animejs";

interface Link {
  href: string;
  label: string;
}

interface Props {
  links: Link[];
}

export default function Menu(props: Props): JSXElement {
  const [opened, setOpened] = createSignal(false);
  let menuOverlay!: HTMLElement;
  const [menuOverlayVisible, setMenuOverlayVisible] = createSignal(false);
  let closeButton!: HTMLButtonElement;

  createEffect(() => {
    if (opened()) {
      document.getElementsByTagName("html")[0].style.overflow = "hidden";

      setMenuOverlayVisible(true);
      animate(menuOverlay, {
        opacity: [{ to: 1, duration: 500 }],
      });
      animate(".menu__link", {
        translateX: [{ from: -100, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: stagger(200, { start: 200 }),
        ease: "out",
      });
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

      animate(menuOverlay, {
        opacity: [{ to: 0, duration: 200 }],
      }).then(() => setMenuOverlayVisible(false));
    }
  });

  return (
    <nav class="menu sticky top-0 z-50" onScroll={(ev) => ev.stopPropagation()}>
      <button
        type="button"
        class="bg-pink-vibrant origin-top-left scale-100 rounded-br-full p-4 text-white transition-transform hover:scale-110"
        classList={{
          "-translate-x-full -translate-y-full": opened(),
        }}
        onClick={() => setOpened((old) => true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8 -translate-2 transform transition-[stroke]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <section
        onScroll={(ev) => ev.stopPropagation()}
        class="menu__overlay"
        classList={{
          "menu__overlay--visible": menuOverlayVisible(),
        }}
        ref={menuOverlay}
      >
        <div class="menu__links">
          <For each={props.links}>
            {(link) => (
              <a
                class="menu__link"
                href={link.href}
                onClick={(ev) => {
                  ev.stopPropagation();
                  setOpened(false);
                }}
              >
                {link.label}
              </a>
            )}
          </For>
        </div>
        <button
          ref={closeButton}
          type="button"
          class="hover:bg-pink-vibrant origin-bottom scale-100 self-center rounded-full bg-white p-2 text-black transition-[transform_background-color_color] hover:scale-110 hover:text-white"
          onClick={(ev) => {
            ev.stopPropagation();
            setOpened(false);
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
      </section>
    </nav>
  );
}
