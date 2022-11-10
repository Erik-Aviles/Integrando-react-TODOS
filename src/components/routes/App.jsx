import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./search/SearchPage";
import { EdithPage } from "./edith/EdithPage";
import { HomePage } from "./home/HomePage";
import { NewPage } from "./new/NewPage";
import { NotFound } from "./notFound/NotFound";
import { TodoList } from "../ui/TodoList";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>}>
          <Route path=":text" element={<TodoList/> }/>
        </Route>
        
        <Route path="/new" element={<NewPage/>}/>
        <Route path="/edith/:id" element={<EdithPage/>}/>
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  );
}

export { App };

