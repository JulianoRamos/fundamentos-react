import { AppProps } from "next/app"
import { Provider } from "@/components/ui/provider"
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "@/contexts/SessionContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <SessionProvider>
        <Component {...pageProps} />
        <Toaster />
      </SessionProvider>
    </Provider>
  )
}
