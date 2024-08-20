import { searchMovies } from '@/api/omdb_api';
import { useDatabase } from '@/context/db';
import { useState } from 'react';

const SearchPage = () => {
  const [response, setResponse] =
    useState<Awaited<ReturnType<typeof searchMovies>>['Search']>();

  const db = useDatabase();

  const [searchValue, setSearchValue] = useState('');

  const triggerSearch = async () => {
    const data = await searchMovies(searchValue);
    setResponse(data.Search);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1>Search</h1>

      <form
        className="flex flex-row gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          triggerSearch();
        }}
      >
        <input
          className="border border-black px-2 py-1"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button className="border border-black px-2 py-1">Search</button>
      </form>

      {response?.map((movie, idx) => (
        <div key={idx}>
          <div>{JSON.stringify(movie)}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
