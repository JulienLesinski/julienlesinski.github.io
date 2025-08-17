import {
  createSignal,
  For,
  onMount,
  type JSXElement,
  createEffect,
  onCleanup,
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
  const [atBottom, setAtBottom] = createSignal(false);

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

  onMount(() => {
    const onScroll = () => {
      setAtBottom(
        Math.ceil(window.innerHeight + window.scrollY) >=
          document.documentElement.scrollHeight,
      );
    };

    window.addEventListener("scroll", onScroll);

    onCleanup(() => {
      window.removeEventListener("scroll", onScroll);
    });
  });

  return (
    <nav
      class="menu fixed right-0 bottom-0 left-0 z-50 flex justify-end"
      onScroll={(ev) => ev.stopPropagation()}
    >
      <button
        type="button"
        class="bg-pink-vibrant origin-bottom-right scale-100 rounded-tl-full p-4 text-white transition-[transform_opacity] hover:scale-110 hover:opacity-100"
        classList={{
          "translate-x-full translate-y-full": opened(),
          "opacity-40": atBottom(),
        }}
        onClick={() => setOpened((old) => true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8 translate-x-2 translate-y-2 transform transition-[stroke]"
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
