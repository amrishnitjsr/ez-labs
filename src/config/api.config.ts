/**
 * API Configuration
 * 
 * Update the API_BASE_URL with your actual API endpoint
 */

// Replace this with your actual API base URL
export const API_BASE_URL = 'https://your-api-endpoint.com';

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  // Add more endpoints as needed
};

// API Configuration
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
};

/**
 * Example API Integration:
 * 
 * 1. Update API_BASE_URL with your actual endpoint
 * 2. Use the endpoint in your components:
 * 
 * import { API_ENDPOINTS } from './config/api.config';
 * 
 * const response = await fetch(API_ENDPOINTS.CONTACT, {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(formData)
 * });
 */
