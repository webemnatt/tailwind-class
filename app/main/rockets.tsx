import Image from 'next/image';

interface RocketsItem {
  id: string;
  name: string;
  src: string;
  price: string;
  description: string;
}

interface RocketsProps {
  list: RocketsItem[];
}

export default function Rockets({ list }: RocketsProps) {
  return (
    <section
      id="rockets"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        {list.map((item: any) => (
          <li
            key={item.id}
            className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:hover:border-teal-500 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl"
          >
            <Image
              alt={item.name}
              className="w-1/2 mb-6"
              src={item.src}
              width={180}
              height={37}
              priority
            />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              {item.name}
            </h3>
            <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slash-400">
              {item.price}
            </p>
            <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slash-400">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
