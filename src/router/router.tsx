import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// LAYOUTS
const BasicLayout = lazy(() => import('views/layouts/layoutBasic'));
const AdminLayout = lazy(() => import('views/layouts/layoutAdmin'));
// BASIC PAGES
const HomeBasic = lazy(() => import('views/pages/basic/home'));
const MyRecipesBasic = lazy(() => import('views/pages/basic/myRecipes'));
const FavoritesBasic = lazy(() => import('views/pages/basic/favorites'));
// ADMIN PAGES
const HomeAdmin = lazy(() => import('views/pages/admin/Home'));
const RecipesAdmin = lazy(() => import('views/pages/admin/Recipes'));
const AccountAdmin = lazy(() => import('views/pages/admin/Account'));
// MESSAGES PAGES
const Error404 = lazy(() => import('views/pages/errors/Error404'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<></>}><BasicLayout /></Suspense>,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<></>}><HomeBasic /></Suspense>,
      },
      {
        path: "my-recipes",
        element: <Suspense fallback={<></>}><MyRecipesBasic /></Suspense>
      },
      {
        path: "favourites",
        element: <Suspense fallback={<></>}><FavoritesBasic /></Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={<></>}><Error404 /></Suspense>
      }
    ],
  },
  {
    path: "admin",
    element: <Suspense fallback={<></>}><AdminLayout /></Suspense>,
    children: [
      {
        path: "admin",
        element: <Suspense fallback={<></>}><HomeAdmin /></Suspense>,
      },
      {
        path: "recipes",
        element: <Suspense fallback={<></>}><RecipesAdmin /></Suspense>
      },
      {
        path: "account",
        element: <Suspense fallback={<></>}><AccountAdmin /></Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={<></>}><Error404 /></Suspense>
      }
    ],
  },
]);

export default router;