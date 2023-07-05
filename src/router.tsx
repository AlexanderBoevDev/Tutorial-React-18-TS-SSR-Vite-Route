import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/СontactPage";

import { PostsPage } from "./pages/PostsPage";
import { FullPostPage } from "./pages/FullPostPage";
import { AddPostPage } from "./pages/AddPostPage";
import { EditPostPage } from './pages/EditPostPage';

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
        <Route path="add-post" element={<AddPostPage />} />
        <Route path="posts/:id/edit" element={<EditPostPage/>}/>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="users" element={<AllUsersPage/>} />
        <Route path="add-user" element={<AddUserPage/>}/>
        <Route path="users/:id/edit" element={<EditUserPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
