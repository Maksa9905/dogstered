import Image from "next/image";
import DogImage from "../components/DogImage";
import Link from "next/link";

async function getDogImages(pageNumber: number) {
  const apiURL = `http://localhost:3000/api/dogs?page=${pageNumber}`;
  const response = await fetch(apiURL);
  return response.json();
}

type imageType = {
  _id: string;
  url: string;
  pageNumber: number;
  __v: number;
};

export default async function Home({
  params,
}: {
  params: { pageNumber: string };
}) {
  const page = parseInt(params.pageNumber);
  const images = await getDogImages(page);
  
  const nextPage = page + 1;
  const prevPage = page - 1 === 0 ? 1 : page - 1;

  console.log(page + 1);

  return (
    <main className="сontainer">
      <div className="flex flex-wrap gap-[10px]">
        {images.map((image: imageType) => {
          if (image.url.slice(-3) === "mp4") {
            return (
              <video
                key={image._id}
                width={400}
                height={400}
                autoPlay
                loop
                muted
              >
                <source
                  type="video/mp4"
                  src={`https://random.dog/${image.url}`}
                />
              </video>
            );
          } else {
            return <DogImage key={image._id} imageName={image.url}></DogImage>;
          }
        })}
      </div>

      <div className="pb-[20px] w-[100%] flex justify-between text-center mt-[20px]">
        <Link
          className="w-[90px] bg-[black] px-[9px] py-[4px] rounded-[10px] text-[white]"
          href={`/${prevPage}`}
        >
          Previous
        </Link>
        <Link
          className="w-[90px] bg-[black] px-[9px] py-[4px] rounded-[10px] text-[white]"
          href={`/${nextPage}`}
        >
          Next
        </Link>
      </div>
    </main>
  );
}
