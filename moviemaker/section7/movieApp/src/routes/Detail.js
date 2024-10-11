import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json);
  };

  useEffect(async () => {
    await getMovie();
    console.log(detail);
  }, []);

  return <h1>detail</h1>;
}

export default Detail;
