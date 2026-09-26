import { goto } from '$app/navigation';
import { apiFetch } from './api';

export async function login(email: string, password: string) {
  const data = await apiFetch('/auth/login', {
    method: 'POST',
    data: { email, password }
  });

  if (typeof window !== 'undefined') {
    if (data?.username) localStorage.setItem('username', data.username);
    if (data?.email) localStorage.setItem('email', data.email);
    sessionStorage.setItem('justLoggedIn', 'true');
    goto('/');
  }

  return data;
}

export async function signup(name: string, email: string, password: string) {
  return apiFetch('/auth/signup', {
    method: 'POST',
    data: { name, email, password }
  });
}

export async function logout() {
  await apiFetch('/auth/logout', {
    method: 'POST'
  });

  if (typeof window !== 'undefined') {
    goto('/login');
  }
}
