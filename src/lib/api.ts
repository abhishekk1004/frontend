/**
 * =============================================================================
 * DJANGO API SERVICE
 * =============================================================================
 * 
 * 🔧 CONFIGURATION:
 * Update API_BASE_URL to your Django backend URL
 * 
 * =============================================================================
 */

// 🌐 Production API URL for abhishek-kushwaha.com.np
export const API_BASE_URL = process.env.VITE_API_URL || 'https://api.abhishek-kushwaha.com.np/api';

// Types for API responses
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  read_time: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github_url: string;
  live_url: string;
  is_featured: boolean;
  created_at: string;
}

export interface Photo {
  id: number;
  album: number;
  image: string;
  caption: string;
  uploaded_at: string;
}

export interface Album {
  id: number;
  name: string;
  description: string;
  cover_image: string;
  photos: Photo[];
  photo_count: number;
  created_at: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  cert_type: 'badge' | 'certificate';
  image: string;
  credential_url: string;
  issue_date: string;
  created_at: string;
}

export interface Quote {
  id: number;
  text: string;
  author: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

/**
 * Get auth token from localStorage
 */
const getAuthHeaders = (): HeadersInit => {
  const token = localStorage.getItem('admin_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }
  return headers;
};

/**
 * Generic fetch wrapper with error handling
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: getAuthHeaders(),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    throw error;
  }
}

// ============================================
// 📝 BLOG API
// ============================================
export const blogAPI = {
  getAll: () => apiFetch<Blog[]>('/blogs/'),
  getFeatured: () => apiFetch<Blog[]>('/blogs/featured/'),
  getById: (id: number) => apiFetch<Blog>(`/blogs/${id}/`),
  create: (data: Partial<Blog>) => apiFetch<Blog>('/blogs/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: number, data: Partial<Blog>) => apiFetch<Blog>(`/blogs/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  delete: (id: number) => apiFetch<void>(`/blogs/${id}/`, {
    method: 'DELETE',
  }),
};

// ============================================
// 🚀 PROJECTS API
// ============================================
export const projectAPI = {
  getAll: () => apiFetch<Project[]>('/projects/'),
  getFeatured: () => apiFetch<Project[]>('/projects/featured/'),
  getById: (id: number) => apiFetch<Project>(`/projects/${id}/`),
  create: (data: Partial<Project>) => apiFetch<Project>('/projects/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: number, data: Partial<Project>) => apiFetch<Project>(`/projects/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  delete: (id: number) => apiFetch<void>(`/projects/${id}/`, {
    method: 'DELETE',
  }),
};

// ============================================
// 📷 ALBUMS API
// ============================================
export const albumAPI = {
  getAll: () => apiFetch<Album[]>('/albums/'),
  getById: (id: number) => apiFetch<Album>(`/albums/${id}/`),
  create: (data: FormData) => fetch(`${API_BASE_URL}/albums/`, {
    method: 'POST',
    headers: { 'Authorization': `Token ${localStorage.getItem('admin_token')}` },
    body: data,
  }).then(res => res.json()),
  delete: (id: number) => apiFetch<void>(`/albums/${id}/`, {
    method: 'DELETE',
  }),
};

// ============================================
// 📷 PHOTOS API
// ============================================
export const photoAPI = {
  getAll: () => apiFetch<Photo[]>('/photos/'),
  create: (data: FormData) => fetch(`${API_BASE_URL}/photos/`, {
    method: 'POST',
    headers: { 'Authorization': `Token ${localStorage.getItem('admin_token')}` },
    body: data,
  }).then(res => res.json()),
  delete: (id: number) => apiFetch<void>(`/photos/${id}/`, {
    method: 'DELETE',
  }),
};

// ============================================
// 🏆 CERTIFICATES API
// ============================================
export const certificateAPI = {
  getAll: () => apiFetch<Certificate[]>('/certificates/'),
  getById: (id: number) => apiFetch<Certificate>(`/certificates/${id}/`),
  create: (data: FormData) => fetch(`${API_BASE_URL}/certificates/`, {
    method: 'POST',
    headers: { 'Authorization': `Token ${localStorage.getItem('admin_token')}` },
    body: data,
  }).then(res => res.json()),
  delete: (id: number) => apiFetch<void>(`/certificates/${id}/`, {
    method: 'DELETE',
  }),
};

// ============================================
// 📧 CONTACT API
// ============================================
export const contactAPI = {
  submit: (data: ContactForm) => apiFetch<{ id: number }>('/contacts/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getAll: () => apiFetch<any[]>('/contacts/'), // Admin only
};

// ============================================
// 💬 QUOTE API
// ============================================
export const quoteAPI = {
  getDaily: () => apiFetch<Quote>('/quote/'),
};

// ============================================
// 🔐 AUTH API
// ============================================
export const authAPI = {
  login: async (username: string, password: string): Promise<{ token: string }> => {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/api-token-auth/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    
    return response.json();
  },
  logout: () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  },
};
