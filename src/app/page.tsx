import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((img, idx) => (
          <div key={idx} className="w-48 p-4">
            <img src={img.url} />
            <div>{img.name}</div>
          </div>
        ))}
      </div>
      Hello, gallery in progress
    </main>
  );
}
