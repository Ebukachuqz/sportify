import axios from "axios";
import React, { useCallback, useState } from "react";
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

  const getData = useCallback(async () => {
    const response = await axios.get(url, headers);
    const result = response.data;
    setData(result);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { data, loading };
};

export default useFetch;
