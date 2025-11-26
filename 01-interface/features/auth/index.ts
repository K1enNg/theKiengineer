/**
 * Auth feature - Public API
 * Export all public components, services, hooks, and types
 */

// Context & Provider
export { AuthContext, default as AuthProvider } from './context/AuthContext';
export type { AuthContextValue } from './context/AuthContext';

// Hooks
export { useAuth } from './hooks/useAuth';

// Services
export { authService } from './services/auth.service';
export type { LoginCredentials, LoginResponse } from './services/auth.service';
