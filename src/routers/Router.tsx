import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/OtherPages/HomePage";
import { AboutPage } from "../pages/OtherPages/AboutPage";
import { ContactPage } from "../pages/OtherPages/СontactPage";

import { PostsPage } from "../pages/PostsPage/PostsPage";
import { FullPostPage } from "../pages/PostsPage/FullPostPage";
import { AddPostPage } from "../pages/PostsPage/AddPostPage";
import { EditPostPage } from '../pages/PostsPage/EditPostPage';

import { UserPage } from '../pages/UsersPage/UserPage';
import { AllUsersPage } from '../pages/UsersPage/AllUsersPage';
import { AddUserPage } from '../pages/UsersPage/AddUserPage';
import { LoginPage } from "../pages/UsersPage/LoginPage"
import { PasswordPage } from "../pages/UsersPage/PasswordPage"
import { EditUserPage } from '../pages/UsersPage/EditUserPage';

import { NotFoundPage } from "../pages/ErorrPage/NotFoundPage";

import { RouteGuard } from "./RouteGuard";

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
        <Route path="user" element={
          // @ts-ignore
          <RouteGuard>
            <UserPage/>
          </RouteGuard>
        } />
        <Route path="users" element={<AllUsersPage/>} />
        <Route path="add-user" element={<AddUserPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="password" element={<PasswordPage/>}/>
        <Route path="users/:id/edit" element={<EditUserPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
