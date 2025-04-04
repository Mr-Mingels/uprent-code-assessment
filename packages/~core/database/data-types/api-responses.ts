/**
 * Type definitions for API responses used across the application
 */

import type { AddressDuration } from './durations'

/**
 * Generic wrapper for all API responses
 * @template T The specific data type returned by the API
 */
export type ApiResponse<T> = {
    data: T | null;
    error: string | null;
}

/**
 * Response structure for the commute durations endpoint
 */
export type CommuteResponse = {
    status: 'success' | 'error';
    payload: {
        addressDurations: AddressDuration[];
    };
    message?: string;
} 