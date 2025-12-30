import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';
import HomePage from '@/components/pages/HomePage';
import Footer from '@/components/layout/Footer';

// Main Layout component with Footer
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/products/:slug',
        element: (
          <div className="w-full bg-background">
            <div className="max-w-[100rem] mx-auto px-8 py-8">
              <h1 className="font-paragraph text-3xl text-textprimary font-bold mb-8">Service Details</h1>
              <ProductDetailsRoute />
            </div>
          </div>
        ),
        loader: productRouteLoader,
      },
      {
        path: '/store',
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
      },
      {
        path: '/store/:categorySlug',
        element: (
          <div className="w-full bg-background">
            <div className="max-w-[100rem] mx-auto px-8 py-8">
              <h1 className="font-paragraph text-3xl text-textprimary font-bold mb-8">Our Services</h1>
              <StoreCollectionRoute productPageRoute="/products" />
            </div>
          </div>
        ),
        loader: storeCollectionRouteLoader,
      },
      {
        path: '/cart',
        element: (
          <div className="w-full bg-background">
            <div className="max-w-[100rem] mx-auto px-8 py-8">
              <h1 className="font-paragraph text-3xl text-textprimary font-bold mb-8">Your Cart</h1>
              <Cart />
            </div>
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
