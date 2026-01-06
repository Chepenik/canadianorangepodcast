"use client";

import Image from "next/image";
import Link from "next/link";
import { Great_Vibes, VT323 } from "next/font/google";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

type Episode =
  | {
      number: number;
      title: string;
      subtitle: string;
      href: string;
      status: "published";
    }
  | {
      number: number;
      title: string;
      status: "coming-soon";
    };

const episodes: Episode[] = [
  {
    number: 1,
    title: "Lucas & Nick",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2311494/",
    status: "published",
  },
  {
    number: 2,
    title: "Lucas & Nick",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2324667/",
    status: "published",
  },
  {
    number: 3,
    title: "Lucas & Nick talk about Health",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2337279/",
    status: "published",
  },
  {
    number: 4,
    title: "Alin & Nick",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2349588/",
    status: "published",
  },
  {
    number: 5,
    title: "Lucas & Nick talk about parenting",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2350577/",
    status: "published",
  },
  {
    number: 6,
    title: "Seb & Nick",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2352197/",
    status: "published",
  },
  {
    number: 7,
    title: "Lucas & Nick",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2367375/",
    status: "published",
  },
  {
    number: 8,
    title: "Lucas & Nick talk about Freedom",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2382542/",
    status: "published",
  },
  {
    number: 9,
    title: "Lucas & Nick talk about Personal Finance",
    subtitle: "Canadian Orange Podcast by Canadians",
    href: "https://rss.com/podcasts/bitcoinstoa/2397429/",
    status: "published",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0c0b09] text-white px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        {/* HEADER */}
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h1
              className={`${vt323.className} text-3xl sm:text-4xl md:text-5xl tracking-[0.08em] text-white`}
            >
              Canadian Orange Podcast
            </h1>
          </div>
          <p
            className={`${vt323.className} text-sm sm:text-base md:text-lg tracking-[0.12em] text-zinc-300 md:text-right`}
          >
            Fix the money. Fix Canada.
          </p>
        </header>

        {/* GRID */}
        <section
          aria-label="Podcast episodes"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {episodes.map((episode) => {
            if (episode.status === "published") {
              const Card = (
                <article
                  className={`${vt323.className} flex h-full flex-col rounded-[24px] border border-white/10 px-6 py-8 transition-transform duration-300 bg-gradient-to-br from-[#1a1815] via-[#0c0b09] to-[#141210] hover:-translate-y-1 hover:scale-[1.02] shadow-[0_18px_45px_rgba(20,20,15,0.35)]`}
                >
                  <div className="text-xs sm:text-sm tracking-[0.15em] text-white/70">
                    Episode {episode.number}
                  </div>

                  <div className="mt-8 flex-1 text-center">
                    <h2
                      className={`${greatVibes.className} text-3xl sm:text-4xl text-orange-400`}
                    >
                      {episode.title}
                    </h2>
                  </div>

                  <div className="mt-auto flex items-center justify-center pt-8">
                    <Image
                      src="/finalmapleleaf.png"
                      alt="Canadian Orange Podcast maple leaf logo"
                      width={64}
                      height={64}
                      className="rounded-md border border-white/10"
                    />
                  </div>
                </article>
              );

              return (
                <Link
                  key={episode.number}
                  href={episode.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                  prefetch={false}
                >
                  {Card}
                </Link>
              );
            }

            return (
              <article
                key={episode.number}
                className={`${vt323.className} flex h-full flex-col rounded-[24px] border border-white/10 bg-[#141210] px-6 py-8 opacity-90 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01]`}
              >
                <div className="text-xs sm:text-sm tracking-[0.15em] text-white/70">
                  Episode {episode.number}
                </div>

                <div className="mt-8 flex-1 text-center">
                  <h2 className="text-2xl sm:text-3xl text-white/50">
                    {episode.title}
                  </h2>
                </div>

                <div className="mt-auto pt-8 text-center text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40">
                  Coming Soon
                </div>
              </article>
            );
          })}
        </section>

        {/* FOOTER CTA */}
        <footer className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://www.canadianorangeparty.com/"
            className={`${vt323.className} rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base sm:text-lg tracking-[0.1em] text-white transition hover:bg-white/10`}
          >
            Canadian Orange Party Hub
          </Link>
        </footer>
      </div>
    </main>
  );
}
