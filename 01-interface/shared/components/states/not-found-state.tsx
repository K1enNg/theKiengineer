import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface NotFoundStateProps {
    title?: string
    message?: string
    actionLabel?: string
    actionHref?: string
}

/**
 * Reusable not-found state component for consistent 404 UI
 */
export const NotFoundState = ({
    title = 'Content Not Found',
    message = "The content you're looking for doesn't exist or has been removed.",
    actionLabel = 'Go Back',
    actionHref
}: NotFoundStateProps) => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
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
