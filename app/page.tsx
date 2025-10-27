import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-8">
          <Card className="border-0 bg-white/50 backdrop-blur dark:bg-slate-900/50 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <CardHeader className="space-y-4">
              <CardTitle className="text-5xl font-bold tracking-tight sm:text-6xl">
                Jun An
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                Software Engineer
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jun-an-a4a6771bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-700 hover:scale-105 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  Contact
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/50 backdrop-blur dark:bg-slate-900/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <CardHeader>
              <CardTitle className="text-2xl">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Passionate software engineer with expertise in building modern web applications.
                Focused on creating elegant solutions to complex problems.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/50 backdrop-blur dark:bg-slate-900/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <CardHeader>
              <CardTitle className="text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
