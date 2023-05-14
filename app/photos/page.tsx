import Image from "next/image";

export async function getAllImage() {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos`);
  return res.json();
}

export default async function Images() {
  const { photos } = await getAllImage();

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo: any) => (
        <Image
          key={photo.id}
          src={photo.url}
          width={256}
          height={120}
          alt={""}
        />
      ))}
    </div>
  );
}
