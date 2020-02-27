import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothsDetail from "../../Component/ClothsDetail";
import Loading from "../../Component/Loading";

type ClothsType = {
  id: number;
  brand: string;
  title: string;
  description: string;
  clothImgUrl: string;
  pageUrl: string;
  price: string;
  category: string;
};

type ClothsResponse = {
  data: ClothsType[];
};

const DetailContainer = ({ id }) => {
  const [cloth, setCloth] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        setCloth(null);
        setError(null);
        setLoading(true);

        const response: ClothsResponse = await axios.get(
          `https://squaremall.pythonanywhere.com/cloth/`,
          {
            params: { id }
          }
        );
        setCloth(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCloths();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;
  if (error) return <div> error ! </div>;
  if (!cloth) return null;

  return (
    <div>
      {cloth.map(
        ({
          id,
          brand,
          title,
          description,
          clothImgUrl,
          pageUrl,
          price,
          category
        }: ClothsType) => (
          <ClothsDetail
            key={id}
            brand={brand}
            title={title}
            description={description}
            clothImgUrl={clothImgUrl}
            pageUrl={pageUrl}
            price={price}
            category={category}
          />
        )
      )}
    </div>
  );
};

export default DetailContainer;
