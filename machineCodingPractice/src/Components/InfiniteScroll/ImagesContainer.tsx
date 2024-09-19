import React, { useEffect } from "react";
import { IImage } from "./imageType.types";
import { useNavigate } from "react-router-dom";

type Props = {
  data: IImage[];
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
};

export const ImagesContainer = ({ data, setPageNo }: Props) => {
    const navigate = useNavigate()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (params) => {
        if (params[0].isIntersecting) {
          if (lastImage) {
            observer.unobserve(lastImage);
          }
          setPageNo((prevNo) => prevNo + 1);
        }
      },
      { threshold: 0.5 }
    );
    const lastImage = document.querySelector(".image_item:last-child");
    if (!lastImage) return;
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <>
    <button onClick={()=>navigate("/")}>&#8592; Back</button>
    <h2>Scroll the page to get Infinite Images</h2>
    <div className="images_container">
      {data.map((imageItem) => {
          return (
              <img
              className="image_item"
              src={imageItem.download_url}
              key={imageItem.id}
              />
            );
        })}
    </div>
        </>
  );
};
