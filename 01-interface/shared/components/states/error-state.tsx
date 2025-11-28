import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ErrorStateProps {
    title?: string
    message?: string
    actionLabel?: string
    actionHref?: string
}

/**
 * Reusable error state component for consistent error handling UI
 */
export const ErrorState = ({
    title = 'Error Loading Content',
    message = 'Failed to load the content. Please try again later.',
    actionLabel = 'Go Back',
    actionHref
}: ErrorStateProps) => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-red-600 mb-2">
                            {title}
                        </h2>
                        <p className="text-gray-600 mb-4">{message}</p>
                        {actionHref && (
                            <Link href={actionHref}>
                                <Button variant="outline">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {actionLabel}
                                </Button>
                            </Link>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
