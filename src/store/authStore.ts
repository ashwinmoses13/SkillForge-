import { create } from 'zustand';
import type { AuthState, User, RegisterFormData } from '../types';
import { hashPassword, verifyPassword, generateId } from '../utils/crypto';

const USERS_STORAGE_KEY = 'lms_users';
const CURRENT_USER_KEY = 'lms_current_user';

// Helper to get users from localStorage
const getUsersFromStorage = (): User[] => {
  const users = localStorage.getItem(USERS_STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

// Helper to save users to localStorage
const saveUsersToStorage = (users: User[]): void => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

// Helper to save current user to localStorage
const saveCurrentUser = (user: User): void => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

// Helper to remove current user from localStorage
const removeCurrentUser = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Helper to get current user from localStorage
const getCurrentUserFromStorage = (): User | null => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  isAuthenticated: false,
  isLoading: false,

  register: async (userData: RegisterFormData): Promise<boolean> => {
    const users = getUsersFromStorage();

    // Check if email already exists
    const existingUser = users.find((u) => u.email === userData.email);
    if (existingUser) {
      return false;
    }

    // Hash password
    const passwordHash = await hashPassword(userData.password);

    // Create new user
    const newUser: User = {
      id: generateId(),
      fullName: userData.fullName,
      email: userData.email,
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    // Save user
    users.push(newUser);
    saveUsersToStorage(users);

    // Auto-login after registration
    set({
      currentUser: newUser,
      isAuthenticated: true,
    });
    saveCurrentUser(newUser);

    return true;
  },

  login: async (email: string, password: string): Promise<boolean> => {
    const users = getUsersFromStorage();

    // Find user by email
    const user = users.find((u) => u.email === email);
    if (!user) {
      return false;
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return false;
    }

    // Set authenticated state
    set({
      currentUser: user,
      isAuthenticated: true,
    });
    saveCurrentUser(user);

    return true;
  },

  logout: (): void => {
    set({
      currentUser: null,
      isAuthenticated: false,
    });
    removeCurrentUser();
  },

  checkAuth: (): void => {
    const user = getCurrentUserFromStorage();
    if (user) {
      set({
        currentUser: user,
        isAuthenticated: true,
      });
    }
  },
}));
