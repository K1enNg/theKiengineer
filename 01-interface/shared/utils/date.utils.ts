/**
 * Date utility functions for consistent date formatting across the application
 */

/**
 * Format a date string into a human-readable format
 * @param dateString - ISO date string or Date object
 * @param options - Intl.DateTimeFormatOptions for customization
 * @returns Formatted date string
 */
export const formatDate = (
    dateString: string | Date,
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
): string => {
    return new Date(dateString).toLocaleDateString('en-US', options)
}

/**
 * Format a date string into a short format (MM/DD/YYYY)
 * @param dateString - ISO date string or Date object
 * @returns Short formatted date string
 */
export const formatDateShort = (dateString: string | Date): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}

/**
 * Format a date string with time
 * @param dateString - ISO date string or Date object
 * @returns Formatted date and time string
 */
export const formatDateTime = (dateString: string | Date): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}
