import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorage from "./useLocalStorage";

const useAxios = (url, key) => {
  const [data, setData] = useLocalStorage(key);

  const addData = async (option = "") => {
    const response = await axios.get(url + option);

    setData((prevData) => [...prevData, { ...response.data, id: uuid() }]);
  };

  const clearData = () => {
    setData([]);
  };

  return [data, addData, clearData];
};

export default useAxios;
