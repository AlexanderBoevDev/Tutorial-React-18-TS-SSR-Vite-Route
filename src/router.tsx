import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { FullPostPage } from "./pages/FullPostPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/СontactPage";

import { AllUsersPage } from './pages/AllUsersPage';
import { AddUserPage } from './pages/AddUserPage';
import { EditUserPage } from './pages/EditUserPage';

import { NotFoundPage } from "./pages/NotFoundPage";

export const Router:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<FullPostPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="users" element={<AllUsersPage/>} />
        <Route path="add-user" element={<AddUserPage/>}/>
        <Route path="edit-user/:id" element={<EditUserPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
