import { Card, CardContent } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

interface LoadingStateProps {
    message?: string
}

/**
 * Reusable loading state component for consistent loading UI
 */
export const LoadingState = ({ message = 'Loading...' }: LoadingStateProps) => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                    <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-gray-600" />
                        <p className="text-gray-600">{message}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
