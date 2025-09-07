import { A } from "@solidjs/router";
import { Avatar } from "~/components/Avatar";
import { CloudHeaderPattern } from "~/components/CloudHeaderPattern";
import { CoolGirl } from "~/components/CoolGirl";
import { CoolRobot } from "~/components/CoolRobot";
import Counter from "~/components/Counter";
import Menu from "~/components/Menu/Menu";
import { PaperPlane } from "~/components/PaperPlane";
import { SectionContainer } from "~/components/SectionContainer";
import { TechnoButton } from "~/components/TechnoButton";

import { WaveHeaderPattern } from "~/components/WaveHeaderPattern";

// TODO Integrate two fonts

export default function Home() {
  return (
    <main>
      <Menu
        links={[
          {
            href: "#introduction",
            label: "Introduction",
          },
          {
            href: "#pour-qui",
            label: "Pour qui\u00a0?",
          },
          {
            href: "#organisation",
            label: "Organisation",
          },
          {
            href: "#domaines",
            label: "Domaines & Technologies",
          },
          {
            href: "#contact",
            label: "Contact",
          },
        ]}
      />
      <section id="introduction">
        <SectionContainer class="text-pink-vibrant font-display flex flex-col gap-4 px-4 py-8 md:pt-16">
          <h1 class="text-left text-5xl font-semibold">
            Cours de programmation
          </h1>
          <p class="">Collège · Lycée · Hobby · Découverte</p>
        </SectionContainer>
      </section>

      <section class="flex flex-col gap-6 px-4 py-6">
        <SectionContainer class="flex flex-col gap-6 px-4 py-6">
          <div class="flex items-center gap-4">
            <Avatar ellipseFillClass="fill-pink" class="size-32" />
            <p class="text-pink-vibrant font-display text-lg">
              Hello&nbsp;!<br></br>
              Moi c'est Julien&nbsp;!
            </p>
          </div>
          <div class="font-big-body text-pink-black flex flex-col gap-2 px-2">
            <p>Mon expérience, c'est&nbsp;:</p>
            <ul>
              <li>Un Master Informatique</li>
              <li>
                2 ans dans l'univers du logiciel ludique à but thérapeutique
              </li>
              <li>3 ans à concevoir des sites webs</li>
              <li>
                Des dispenses de cours de React en interne et à l'école IRIS
                (anciennement SUPDEWEB)
              </li>
              <li>Et beaucoup de projets personnels&nbsp;!</li>
            </ul>
          </div>
        </SectionContainer>
      </section>

      <section id="pour-qui">
        <WaveHeaderPattern fillColorClass="fill-pink-light" />
        <WaveHeaderPattern fillColorClass="fill-pink" class="bg-pink-light" />
        <div class="bg-pink">
          <SectionContainer class="flex gap-6 px-4 pt-6 md:gap-24">
            <CoolGirl class="z-10 shrink-0" />
            <div class="flex flex-col gap-6 pt-4">
              <h2 class="text-pink-vibrant">Pour qui&nbsp;?</h2>
              <div class="font-big-body text-pink-black z-10 flex flex-col gap-2">
                <p>Pour tous ceux qui...</p>
                <ul>
                  <li>
                    Veulent apprendre la programmation (hobby, personnel,
                    professionnel...)
                  </li>
                  <li>
                    Souhaitent renforcer leurs compétences ou découvrir de
                    nouveaux domaines
                  </li>
                  <li>Ont un projet de développement logiciel</li>
                  <li>Sont simplement curieux&nbsp;!</li>
                </ul>
              </div>
            </div>
          </SectionContainer>
        </div>
      </section>

      <section class="-translate-y-6 transform" id="organisation">
        <WaveHeaderPattern fillColorClass="fill-pink-green" />
        <WaveHeaderPattern
          fillColorClass="fill-green-soft"
          class="bg-pink-green"
        />
        <div class="bg-green-soft">
          <SectionContainer class="flex flex-col gap-6 px-4 pt-6 pb-14">
            <h2 class="text-green">Organisation</h2>
            <div class="text-green-black font-big-body flex flex-col gap-2">
              <p>
                Les cours sont découpés en <em>séance de 1h</em> et se passent
                uniquement <em>en présentiel</em> à domicile.
              </p>
              <p>
                Une{" "}
                <em>
                  séance découverte <em>offerte</em>
                </em>{" "}
                permettra de vous expliquer tout ça en détail et de créer des
                cours personnalisés selon vos besoins.
              </p>
            </div>
          </SectionContainer>
        </div>
        <WaveHeaderPattern
          fillColorClass="fill-white"
          class="-translate-y-5 transform"
        />
      </section>

      <section id="domaines">
        <SectionContainer class="flex gap-8 overflow-x-hidden py-8">
          <div class="flex grow flex-col gap-8 pl-4">
            <div>
              <h2 class="text-green">Domaines</h2>
              <p class="subtitle text-green-bit-soft">
                Les domaines dans lesquelles je peux vous guider
              </p>
            </div>
            <div class="flex flex-col items-start gap-4">
              <TechnoButton
                technos={[
                  {
                    src: "/technos/flutter.svg",
                    alt: "Flutter",
                    background: "#8f96ed",
                    href: "https://flutter.dev/",
                  },
                  {
                    src: "/technos/rust.svg",
                    alt: "Rust",
                    background: "#ffc832",
                    href: "https://www.rust-lang.org/fr",
                  },
                  {
                    src: "/technos/deno.svg",
                    alt: "Deno",
                    background: "#fff",
                    href: "https://deno.com/",
                  },
                ]}
              >
                Dév. multi-plateformes
              </TechnoButton>
              <div class="flex gap-4 pl-8">
                <TechnoButton
                  technos={[
                    {
                      src: "/technos/unity.svg",
                      alt: "Unity",
                      background: "#000",
                      href: "https://unity.com/fr",
                    },
                    {
                      src: "/technos/godot.svg",
                      alt: "Godot Engine",
                      background: "#333333",
                      href: "https://godotengine.org/fr/",
                    },
                    {
                      src: "/technos/sfml.svg",
                      alt: "SFML",
                      background: "#333333",
                      href: "https://www.sfml-dev.org/fr/",
                    },
                    {
                      src: "/technos/blender.svg",
                      alt: "Blender",
                      background: "#f4792b",
                      href: "https://www.blender.org/",
                    },
                    {
                      src: "/technos/c-sharp.svg",
                      alt: "C#",
                      background: "#fff",
                      href: "https://dotnet.microsoft.com/fr-fr/languages/csharp",
                    },
                    {
                      src: "/technos/cpp.svg",
                      alt: "C++",
                      background: "#fff",
                      href: "https://fr.wikipedia.org/wiki/C%2B%2B",
                    },
                  ]}
                >
                  Jeu vidéo
                </TechnoButton>
                <TechnoButton
                  technos={[
                    {
                      src: "/technos/html5.svg",
                      alt: "HTML5",
                      background: "#fff",
                      href: "https://developer.mozilla.org/fr/docs/Web/HTML",
                    },
                    {
                      src: "/technos/css.svg",
                      alt: "CSS",
                      background: "#663399",
                      href: "https://developer.mozilla.org/fr/docs/Web/CSS",
                    },
                    {
                      src: "/technos/js.svg",
                      alt: "JavaScript",
                      background: "#f7df1e",
                      href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
                    },
                    {
                      src: "/technos/ts.svg",
                      alt: "TypeScript",
                      background: "#3178c6",
                      href: "https://www.typescriptlang.org/",
                    },

                    {
                      src: "/technos/sql.svg",
                      alt: "SQL",
                      background: "#df6c20",
                      href: "https://fr.wikipedia.org/wiki/Structured_Query_Language",
                    },
                    {
                      src: "/technos/react.svg",
                      alt: "React",
                      background: "#61dafb",
                      href: "https://fr.wikipedia.org/wiki/Structured_Query_Language",
                    },
                    {
                      src: "/technos/svelte.svg",
                      alt: "Svelte",
                      background: "#ff3e00",
                      href: "https://svelte.dev/",
                    },
                    {
                      src: "/technos/solid.svg",
                      alt: "Solid",
                      background: "#24354d",
                      href: "https://www.solidjs.com/",
                    },
                    {
                      src: "/technos/fresh.svg",
                      alt: "Deno Fresh",
                      background: "#70ffaf",
                      href: "https://fresh.deno.dev/",
                    },
                    {
                      src: "/technos/hono.svg",
                      alt: "Hono",
                      background: "#1e1e20",
                      href: "https://hono.dev/",
                    },
                    {
                      src: "/technos/deno.svg",
                      alt: "Deno",
                      background: "#fff",
                      href: "https://deno.com/",
                    },
                  ]}
                >
                  Web
                </TechnoButton>
              </div>
            </div>
          </div>
          <CoolRobot class="shrink-0" />
        </SectionContainer>
      </section>

      <section id="contact" class="relative">
        <CloudHeaderPattern fillColorClass="fill-green-bit-soft" />
        <PaperPlane
          class="pointer-events-none absolute -top-6"
          fillColorClass="fill-green-dark"
        />
        <a
          href="mailto:lesinski.julien@hotmail.com"
          class="button text-green-bit-soft absolute top-14 left-[24rem] hidden bg-white md:flex"
        >
          <span>Me contacter par mail</span>
        </a>
        <div class="from-green-bit-soft to-green-soft flex flex-col items-center gap-8 bg-gradient-to-b px-4 pt-24 pb-4">
          <div class="flex grow flex-col items-center gap-24 md:items-end">
            <a
              href="mailto:lesinski.julien@hotmail.com"
              class="button text-green-bit-soft bg-white md:hidden"
            >
              <span>Me contacter par mail</span>
            </a>
            <div class="font-big-body text-green flex flex-col items-center gap-1 px-4 md:text-sm">
              <a href="tel:+33609540690" class="whitespace-nowrap">
                (+33)6 09 54 06 90
              </a>
              <a href="mailto:lesinski.julien@hotmail.com">
                lesinski.julien@hotmail.com
              </a>
            </div>
          </div>
          <div class="flex w-full items-center justify-between gap-6 pr-16 md:items-end">
            <img
              src="https://i.postimg.cc/PrKqM63D/nova.png"
              alt="Dispositif nova (service à la personne)"
              class="h-12"
            />
            <p class="text-green font-display text-xs">
              Un grand merci à{" "}
              <a
                href="https://twitter.com/pablostanley"
                class="text-green-black"
              >
                Pablo Stanley
              </a>{" "}
              pour ses magnifiques illustrations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
