import React, { useEffect, useState } from "react";
import { ImagesContainer } from "./ImagesContainer";
import { IImage } from "./imageType.types";
import './InfiniteScroll.css'

type Props = {};

const InfiniteScroll = (props: Props) => {
    const [imagesData, setImagesData] =useState<IImage[]>([])
    const [pageNo, setPageNo] = useState(1)
    useEffect(()=>{
        fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res)=>{
            return res.json()
        }).then((data)=>{
            setImagesData((prevImages)=>[...prevImages,...data])
        })
    },[pageNo])
  return <ImagesContainer data={imagesData} setPageNo={setPageNo}/>;
};
export default InfiniteScroll;
