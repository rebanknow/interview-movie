// mock api to mimic saving data to a database

import { createContext, useContext, useState } from 'react';

const DatabaseContext = createContext<{
  getData: (id: string) => Promise<Record<string, any>>;
  saveData: (id: string, data: any) => Promise<void>; // id -> any
  deleteData: (id: string) => Promise<void>;
}>({
  getData: async () => [],
  saveData: async () => {},
  deleteData: async () => {},
});

const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Record<string, any>>({});

  const getData = async (id: string) => {
    return data[id];
  };

  const saveData = async (id: string, data: any) => {
    setData((prev) => {
      return { ...prev, [id]: data };
    });
  };

  const deleteData = async (id: string) => {
    setData((prev) => {
      const newData = { ...prev };
      delete newData[id];
      return newData;
    });
  };

  return (
    <DatabaseContext.Provider
      value={{
        getData,
        saveData,
        deleteData,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

const useDatabase = () => {
  return useContext(DatabaseContext);
};

export { DatabaseProvider, useDatabase };
