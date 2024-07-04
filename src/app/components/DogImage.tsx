import Image from "next/image";

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function DogImage({ imageName }: { imageName: string }) {
  const imageUrl = `https://random.dog/${imageName}`;
  const size = getRandomArbitrary(200, 400);

  return (
    <Image
      src={imageUrl}
      width={400}
      height={400}
      className="aspect-square rounded-[20px]"
    ></Image>
  );
}
