import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import './App.css'

function App() {
  const [connected, setConnected] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    try {
      const { error } = await supabase.from('_realtime_schema').select('*').limit(1)
      if (error) {
        console.log('Supabase connection error:', error.message)
        setConnected(false)
      } else {
        setConnected(true)
      }
    } catch (error) {
      console.log('Connection test failed:', error)
      setConnected(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Vite + shadcn/ui + Supabase
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A modern full-stack starter template
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Vite + React
              </CardTitle>
              <CardDescription>
                Lightning-fast development with hot module replacement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• TypeScript support out of the box</li>
                <li>• Optimized build process</li>
                <li>• Modern ES modules</li>
                <li>• Fast refresh</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                shadcn/ui
              </CardTitle>
              <CardDescription>
                Beautiful, accessible components built with Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Tailwind CSS integration</li>
                <li>• Customizable design system</li>
                <li>• Accessibility first</li>
                <li>• Copy & paste components</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Supabase
              </CardTitle>
              <CardDescription>
                Backend-as-a-Service with real-time capabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• PostgreSQL database</li>
                <li>• Real-time subscriptions</li>
                <li>• Authentication & authorization</li>
                <li>• Edge functions</li>
              </ul>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm">
                  {loading ? 'Checking connection...' : connected ? 'Connected' : 'Not configured'}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Getting Started
              </CardTitle>
              <CardDescription>
                Set up your Supabase project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>1. Create a Supabase project</li>
                <li>2. Copy your project URL and anon key</li>
                <li>3. Create a .env file with your credentials</li>
                <li>4. Start building amazing apps!</li>
              </ol>
              <Button onClick={checkConnection} disabled={loading} className="w-full">
                {loading ? 'Testing...' : 'Test Connection'}
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Environment Setup</CardTitle>
            <CardDescription>
              Create a .env file in your project root with these variables:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
