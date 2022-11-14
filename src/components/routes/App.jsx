import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./search/SearchPage";
import { EdithPage } from "./edith/EdithPage";
import { HomePage } from "./home/HomePage";
import { NewPage } from "./new/NewPage";
import { NotFound } from "./notFound/NotFound";
import { TodoPage } from "./todo/TodoPage";
import { Menu } from "../ui/Menu";

function App() {


  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="/todo" element={<TodoPage/>}/>
        </Route>
        
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/search/:slug" element={<TodoPage/>}/>
        
        <Route path="/new" element={<NewPage/>}/>
        <Route path="/edith/:id" element={<EdithPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  );
}

export { App };

