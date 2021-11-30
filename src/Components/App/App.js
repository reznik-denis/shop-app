import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Container } from 'Components/Container';
import { AppBar } from 'Components/AppBar';
import { Loader } from 'Components/Loader';


const Home = lazy(() => import('views/Home.js' /* webpackChunkName: "home-view" */));
const Category = lazy(() => import('views/Category.js' /* webpackChunkName: "category-view" */));
const ProductPage = lazy(() => import('views/ProductPage.js' /* webpackChunkName: "productPage-view" */))
const NoFoundPage = lazy(() => import('views/NoFoundPage.js' /* webpackChunkName: "noFoundPage-view" */))

export default function App() {
  return (<Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={
          <Suspense fallback={<Loader />}>
              <Container>
                <Home/>
              </Container>
              </Suspense>}/>
          <Route path="category" element={
          <Suspense fallback={<Loader />}>
                <Container>
                 <Category/>
                </Container>
              </Suspense>}/>
          <Route path="category/:element/*" element={
          <Suspense fallback={<Loader />}>
                <Container>
                  <ProductPage/>
                </Container>
              </Suspense>} />
          <Route path="*" element={
          <Suspense fallback={<Loader />}>
                <Container>
                  <NoFoundPage/>
                </Container>
              </Suspense>}/>
        </Route>
    </Routes>
  );
}
