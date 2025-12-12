import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import { Card } from '../components/Card'
export const Search = ({apiPath}) => {
const [searchParams] = useSearchParams();
const queryTerm = searchParams.get("q")
  const {data : movies} =useFetch(apiPath , queryTerm);
  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ?`No Result Found For '${queryTerm}'` :`Result for '${queryTerm}'`}</p>
      </section>
        <div className="flex flex-wrap gap-5">
                    {movies.map((movie) => (
                      <div key={movie.id} onClick={() => setShow(true)}>
                        <Card movie={movie}/>
                      </div>
                    ))}
                  </div>
    </main>
  )
}
