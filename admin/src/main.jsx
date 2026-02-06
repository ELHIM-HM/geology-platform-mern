import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { SidebarProvider } from './context/SidebarContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 5, retryDelay: 1000 },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </QueryClientProvider>
  </ThemeProvider>,
)
