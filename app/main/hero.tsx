import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center sm:flex-row p-4 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/4">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          We Boldy Go&nbsp;
          <span className="text-indigo-700 dark:text-indigo-300">
            Where No Rocket&nbsp;
          </span>
          Has Gone Before...
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          We're bilding rockets from the next century today. From the Moon to
          Mars, Jupiter and beyond...
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Think Acme Rockets
        </p>
      </article>
      <Image
        alt="Rocket Dab"
        className="w-1/8 sm:w-1/16"
        src="/img/rocketdab.png"
        width={225}
        height={225}
        priority
      />
    </section>
  );
}
