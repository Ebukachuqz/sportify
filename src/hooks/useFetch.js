import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const headers = {
    headers: {
      "X-Auth-Token": `${apiKey}`,
    },
  };

  const getData = async () => {
    const response = await axios.get(url, headers);
    const result = response.data;
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { data, loading };
};

export default useFetch;
