import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../Services/StorageManagement";

export default function GetProducts() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(`http://localhost:5000/products`, {
          headers: {
            "x-access-token": getToken(),
          },
        });

        setData(result.data);
      } catch (error) {
        setIsError(error.response.data);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, isError };
}
