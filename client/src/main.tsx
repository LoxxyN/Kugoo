import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './AppRouter'
import './index.css'

const STALE_15_MINUTES = 1000 * 60 * 15

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: STALE_15_MINUTES,
			gcTime: STALE_15_MINUTES,
		},
	},
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppRouter />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</StrictMode>,
)
