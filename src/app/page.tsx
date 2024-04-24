import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/2b0b670d-aee9-4f6d-9221-71cb5260ff74-1nq2cb.jpg",
  "https://utfs.io/f/7d1d78e8-10a7-4fe2-8acd-7a6263621baf-fkgs4z.jpg",
  "https://utfs.io/f/2c59f46f-9c29-42eb-84a2-f9a6136cbeaa-rcs9vi.png",
  "https://utfs.io/f/fd61dfac-f4cd-4e21-b664-f446e574e5b8-r4470.21.04.jpeg",
  "https://utfs.io/f/f9fe4eca-6e33-4859-a582-034bee67f85f-1xb656.jpeg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts");
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((p) => (
          <div key={p.id}>{p.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (img, idx) => (
            <div key={idx} className="w-48 p-4">
              <img src={img.url} />
            </div>
          ),
        )}
      </div>
      Hello, gallery in progress
    </main>
  );
}
