import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TetrisBackground } from "@/components/tetris-background";

export default function Home() {
  return (
    <>
      <TetrisBackground />
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50/70 to-slate-100/70 dark:from-slate-950/70 dark:to-slate-900/70">
        <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-8">
          <Card className="rounded-lg border-4 border-cyan-300 bg-cyan-100 shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.1),inset_4px_4px_0px_rgba(255,255,255,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <CardHeader className="space-y-4 text-center">
              <CardTitle className="flex justify-center gap-2 text-5xl font-bold sm:text-6xl">
                <span className="flex h-16 w-16 items-center justify-center rounded border-4 border-cyan-700 bg-cyan-500 text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] sm:h-20 sm:w-20">J</span>
                <span className="flex h-16 w-16 items-center justify-center rounded border-4 border-blue-700 bg-blue-500 text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] sm:h-20 sm:w-20">u</span>
                <span className="flex h-16 w-16 items-center justify-center rounded border-4 border-purple-700 bg-purple-500 text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] sm:h-20 sm:w-20">n</span>
                <span className="flex h-16 w-16 items-center justify-center rounded border-4 border-yellow-700 bg-yellow-500 text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] sm:h-20 sm:w-20">A</span>
                <span className="flex h-16 w-16 items-center justify-center rounded border-4 border-green-700 bg-green-500 text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] sm:h-20 sm:w-20">n</span>
              </CardTitle>
              <p className="animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text font-[family-name:var(--font-playfair)] text-3xl font-bold italic tracking-wide text-transparent drop-shadow-sm">
                Math Enthusiast
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <a
                  href="https://junan-resume.s3.amazonaws.com/resume0924.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border-4 border-orange-700 bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/jun-an-a4a6771bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border-4 border-blue-700 bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:anxianjun0302@gmail.com"
                  className="rounded border-4 border-red-700 bg-red-500 px-6 py-3 text-sm font-medium text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
                >
                  Contact
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-4 border-purple-300 bg-purple-100 shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.1),inset_4px_4px_0px_rgba(255,255,255,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-purple-900">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg leading-relaxed text-purple-900">
                Graduated from the University of Chicago with a degree in Computational and Applied 
                Mathematics. Experienced in Computer Science, Mathematics, and Statistics. 
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-4 border-green-300 bg-green-100 shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.1),inset_4px_4px_0px_rgba(255,255,255,0.5)] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-900">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {['C++', 'Algorithms', 'Combinatorics', 'AWS', 'Node.js', 'Pandas'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded border-3 border-yellow-700 bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.3),inset_2px_2px_0px_rgba(255,255,255,0.3)]"
                  >
                    {skill}
                  </span>
                ))}
                <a
                  href="https://jstris.jezevec10.com/replay/67855132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border-3 border-yellow-700 bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.3),inset_2px_2px_0px_rgba(255,255,255,0.3)] transition-all hover:scale-105 cursor-pointer"
                >
                  Tetris
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      </div>
    </>
  );
}
