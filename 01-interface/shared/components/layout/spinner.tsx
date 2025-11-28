import React from "react";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    text?: string;
}

const sizeClasses = {
    sm: "h-6 w-6 border-2",
    md: "h-12 w-12 border-2",
    lg: "h-16 w-16 border-4",
};

/**
 * Reusable loading spinner component
 * @param size - Size variant (sm, md, lg)
 * @param className - Additional CSS classes
 * @param text - Optional loading text to display
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "md",
    className = "",
    text,
}) => {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div
                className={`animate-spin rounded-full border-b-gray-900 border-t-transparent ${sizeClasses[size]}`}
                role="status"
                aria-label="Loading"
            />
            {text && <p className="mt-4 text-gray-600 text-sm">{text}</p>}
        </div>
    );
};
