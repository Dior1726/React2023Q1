import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
  const [searchList, setSearchList] = useState<string[]>([]);
  const [storedVal, setStoredVal] = useLocalStorage<string[]>('searchList', searchList);

  useEffect(() => {
    setSearchList(storedVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStoredVal(searchList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchList]);

  return (
    <div className="flex-grow flex justify-center items-center flex-col ">
      <div className="bg-white bg-opacity-20 p-20 rounded-2xl">
        <h3 className="mb-10 text-center font-semibold text-lg">RS School Powered Search</h3>
        <SearchBar setSearchList={setSearchList} />

        <div className="mt-4">
          {Array.isArray(searchList)
            ? searchList.map((item, n) => (
                <div className="border-b py-1 border-white border-opacity-20" key={n}>
                  {item}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
