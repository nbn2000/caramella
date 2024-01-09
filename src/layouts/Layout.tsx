import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/view/Navbar";
import { Suspense } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import Head from "next/head";

const CloseButton = ({ snackbarKey }: { snackbarKey: any }) => {
  const { closeSnackbar } = useSnackbar();

  return <button onClick={() => closeSnackbar(snackbarKey)}>X</button>;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      autoHideDuration={5000}
      action={(snackbarKey) => <CloseButton snackbarKey={snackbarKey} />}
    >
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Suspense
        fallback={
          <span className="loading loading-ring loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Suspense>
    </SnackbarProvider>
  );
}
