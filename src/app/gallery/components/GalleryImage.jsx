import Image from "next/image";

const media = [
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/og9byamwkz7hcphqlxsk",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/prpqg6qvbzkgcrqhqlpz",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/rixavtohk5qolpbtghy2",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/i69kogh7plg5ejp4i3by",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/eayjwgwvofxlpf3qguso",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/j3micvmlxad8p74qiqmv",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/nvygpbjxnwvfiqql05d2",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/cgww8rhzu6tppbuijmei",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
  },

  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/wchy9aktwnjg2e0kshio",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfziloryimjajcbxuj0k",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/cpeheqlzvbffghpvdiu0",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/kgr2b6b6i6llhc3o6rtb",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/uptydqcvtkx8pswgxs1d",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/gvm2chmpykmfngrchsn3",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ud4poelfjicsedkvxc6q",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/c4fnncbjzzxzamyriv79",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/pahiybafkljq8ozicakh",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/k530wqfiey0i2d9fhvow",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/irjsnwijta06o7jrx8yf",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hnwydmpvhljw0eietnnw",
  },
];

const GalleryImage = () => {
  return (
    <div className="mx-auto mt-28 py-5 px-4">
      <div className="masonry">
        {media.map((item, index) => (
          <div
            key={index}
            className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
          >
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={`Image casa lalla takerkoust ${index}`}
                width={300}
                height={300}
                className="rounded-sm"
              />
            ) : (
              <video
                src={item.url}
                controls
                className="rounded-sm w-full"
                width="300"
                height="300"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImage;
