import { Routes, Route } from "react-router-dom";
import { MoveList, MoveDetails, PageNotFound, Search } from "../Pages";



export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MoveList/>}/>
        <Route path="/movies/:id" element={<MoveDetails/>}/>
        <Route path="/movies/popular" element={<MoveList/>}/>
        <Route path="/movies/top" element={<MoveList/>}/>
        <Route path="movies/upcomming" element={<MoveList/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}
