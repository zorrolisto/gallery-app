import { SignedOut, SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((img, idx) => (
        <div key={idx} className="w-48 p-4">
          <img src={img.url} />
          <div>{img.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Sign in above!</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
