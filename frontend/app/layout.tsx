import type { Metadata } from "next";
import "./globals.css";
import ClientInitializer from "@/components/ClientInitializer";
import { AppKit } from "@/context/appkit";
import { Providers } from "@/context/providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "RemitAbeg - Borderless Remittance for Nigerians",
  description: "Send am, abeg — fast, cheap, borderless remittances powered by Web3"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ClientInitializer>
          <AppKit>
            <Providers>
              {children}
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                toastStyle={{
                  backgroundColor: '#065f46',
                  border: '1px solid #10b981',
                  borderRadius: '0.5rem',
                }}
              />
            </Providers>
          </AppKit>
        </ClientInitializer>
      </body>
    </html>
  );
}
