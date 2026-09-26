import { goto } from '$app/navigation';

export const API_BASE_URL = 'http://localhost:8080';

export interface ApiFetchOptions extends RequestInit {
  data?: unknown;
}

export async function apiFetch<T = any>(endpoint: string, options: ApiFetchOptions = {}): Promise<T> {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const headers = new Headers(options.headers);
  if (options.data !== undefined && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(url, {
    credentials: 'include',
    ...options,
    headers,
    body: options.data !== undefined ? JSON.stringify(options.data) : options.body
  });

  if (response.status === 401) {
    if (typeof window !== 'undefined') {
      goto('/login');
    }
    throw new Error('Unauthorized');
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }

  return response.text() as Promise<T>;
}
