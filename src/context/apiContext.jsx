import { createContext, useContext } from "react"
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

export const apiContext = createContext()

export const ApiProvider = ({ children }) => {
  const VITE_API_URL = import.meta.env.VITE_API_URL
  const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutos
        gcTime: 10 * 60 * 1000, // 10 minutos
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  })

  const apiFetcher = async (endpoint, options = {}) => {
    const url = `${VITE_API_URL}/${endpoint}`
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          Authorization: `Bearer ${VITE_API_TOKEN}`,
          "Content-Type": "application/json",
          ...options.headers,
        },
      })
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error(`❌ Error fetching from ${url}:`, error)
      throw error
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <apiContext.Provider value={{ apiFetcher }}>
        {children}
      </apiContext.Provider>
    </QueryClientProvider>
  )
}

export const useApi = () => {
  const context = useContext(apiContext)
  if (!context) throw new Error("useApi debe usarse dentro de un ApiProvider")
  return context
}

export const useApiQuery = (endpoint, options = {}) => {
  const { apiFetcher } = useApi()

  return useQuery({
    queryKey: ["api", endpoint],
    queryFn: () => apiFetcher(endpoint),
    ...options,
  })
}

export const useApiMutation = (endpoint, method = "POST", options = {}) => {
  const { apiFetcher } = useApi()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data) =>
      apiFetcher(endpoint, {
        method,
        body: JSON.stringify(data),
      }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["api"] })
      options.onSuccess?.(data, variables, context)
    },
    ...options,
  })
}
