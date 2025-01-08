import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
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
      <section className="hero">
        <h1 className="hero-heading">
          Redefine Your Images
          <br />
          Effortlessly
        </h1>

        <div className="hero-intro">
          <p>Transform your visual assets with AI-driven precision.</p>
          <p>
            Restore, recolor and repurpose your images in minutes - no reshoots,
            no hassle.
          </p>
          <p>
            Try Hyades today and unleash the full potential of your creativity!
          </p>
        </div>

        <div className="hero-features">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="hero-features-link"
            >
              <span className="hero-features-icon">
                <i className={`${link.bicon} text-[28px]`}></i>
              </span>
              <p className="hero-features-label">{link.label}</p>
            </Link>
          ))}
        </div>
        <SignedOut>
          <div className="hero-cta">
            <Link href="/sign-in" className="hero-cta-link">
              Get Started
            </Link>
          </div>
        </SignedOut>
      </section>

      <SignedIn>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </SignedIn>
    </>
  );
}
