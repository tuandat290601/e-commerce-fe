import { IResponse } from "@/interfaces/response.interface";

export const API_URL_BASE = "http://localhost:5127/api";

export class APIError extends Error {
  constructor(message: string, public status?: number, public code?: string) {
    super(message);
    this.name = "APIError";
  }
}

export const fetchAPI = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  try {
    const res = await fetch(`${API_URL_BASE}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    // Handle HTTP errors
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new APIError(
        errorData?.message || `HTTP ${res.status}: ${res.statusText}`,
        res.status,
        errorData?.code
      );
    }

    // Parse response
    const data: IResponse<T> = await res.json();

    // Check custom API response structure
    if (!data.success) {
      throw new APIError(data.message || "API request failed", undefined);
    }

    return data.data;
  } catch (error) {
    // Re-throw APIError as-is
    if (error instanceof APIError) {
      throw error;
    }

    // Handle network errors
    if (error instanceof TypeError) {
      throw new APIError("Network error: Unable to connect to API");
    }

    // Handle other errors
    throw new APIError(
      error instanceof Error ? error.message : "Unknown error occurred"
    );
  }
};
