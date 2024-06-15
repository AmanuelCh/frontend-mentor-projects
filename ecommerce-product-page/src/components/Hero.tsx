import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Product1, Product2, Product3, Product4 } from "../shared/constants";

const images: Array<string> = [Product1, Product2, Product3, Product4];

const Hero = () => {
  const [curIndex, setCurIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="mx-auto md:max-w-[80%] lg:mt-16">
      <div>
        {/* LEFT */}
        <div>
          <div>
            <img
              className="w-full lg:w-[470px] lg:rounded-2xl"
              src={images[curIndex]}
              onClick={() => setOpen(true)}
              alt="product-image"
            />
          </div>
          <div className="mt-7 flex items-center justify-center gap-6 lg:mt-12 lg:justify-start">
            {images.map((image, index) => (
              <img
                className={`w-[50px] cursor-pointer rounded-xl transition-all hover:scale-125 lg:w-[100px] ${index === curIndex && "border-[5px] border-gray-300"}`}
                src={image}
                alt={`product-image ${index + 1}`}
                onClick={() => {
                  setCurIndex(index);
                }}
                key={index}
              />
            ))}
          </div>

          <Lightbox
            plugins={[Thumbnails]}
            open={open}
            close={() => setOpen(false)}
            index={curIndex}
            slides={[
              { src: Product1 },
              { src: Product2 },
              { src: Product3 },
              { src: Product4 },
            ]}
            controller={{ closeOnBackdropClick: true }}
          />
        </div>

        {/* RIGHT */}
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
