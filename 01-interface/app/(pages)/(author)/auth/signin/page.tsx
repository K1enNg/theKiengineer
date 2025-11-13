'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { login, getProfile } from "@/utils/auth"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    email: z.string().email(),    
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState<any>(null);
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            await login({ email, password });
            const data = await getProfile();
            setProfile(data);
            router.push('/dashboard');
        } catch (error) {
            console.log("Login failed: ", error);
        }
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md -mt-40">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <Form {...form}>
                    <form onSubmit={(e)=>{e.preventDefault();}} className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm font-medium text-gray-700">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="email"
                                                placeholder="Enter your email" 
                                                className="mt-1 block w-full"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-600 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-sm font-medium text-gray-700">
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="password"
                                                placeholder="Enter your password" 
                                                className="mt-1 block w-full"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-600 text-sm mt-1" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div>
                            <Button 
                                type="submit" 
                                onClick={handleSignIn}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
