import { Routes, Route } from "react-router-dom";
import { MoveList, MoveDetails, PageNotFound, Search } from "../Pages";



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="" element={<MoveList apiPath="movie/now_playing"/>}/>
        <Route path="/movie/:id" element={<MoveDetails/>}/>
        <Route path="/movies/popular" element={<MoveList apiPath="movie/popular"/>}/>
        <Route path="/movies/top" element={<MoveList apiPath="movie/top_rated" />}/>
        <Route path="movies/upcomming" element={<MoveList apiPath="movie/upcoming"/>}/>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}
