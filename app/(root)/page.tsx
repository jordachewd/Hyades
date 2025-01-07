import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number((await searchParams)?.page || 1);
  const rawSearchQuery = (await searchParams)?.query;
  const searchQuery = Array.isArray(rawSearchQuery)
    ? rawSearchQuery.join(" ")
    : rawSearchQuery || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">Transform Your Vision with Hyades</h1>
        <ul className="flex-center w-full gap-20 mt-6">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <i className={`${link.bicon} text-[24px]`}></i>
              </li>
              <p className="p-14-medium center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
}
