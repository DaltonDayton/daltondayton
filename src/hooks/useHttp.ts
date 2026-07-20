import { useCallback, useState } from "react";

interface RequestConfig {
  url: string;
  method?: "GET" | "POST";
  body?: unknown;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async <T,>(config: RequestConfig): Promise<T | null> => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(config.url, {
          method: config.method ?? "GET",
          headers: config.body
            ? { "Content-Type": "application/json" }
            : undefined,
          body: config.body ? JSON.stringify(config.body) : undefined,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        return (await response.json()) as T;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong!");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
