"use client";

import { AstroButton } from "../src/components/AstroButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🌟 AstroButton Demo
          </h1>
          <p className="text-xl text-blue-200">
            Beautiful animated buttons with star effects
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-8 mb-8 border border-white/20">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Button Variants
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-blue-200">
                Primary Buttons
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <AstroButton
                  variant="primary"
                  size="sm"
                  onClick={() => alert("Small Primary Button clicked! 🌟")}
                >
                  Small Primary
                </AstroButton>
                <AstroButton
                  variant="primary"
                  size="default"
                  onClick={() => alert("Default Primary Button clicked! ✨")}
                >
                  Default Primary
                </AstroButton>
                <AstroButton
                  variant="primary"
                  size="lg"
                  onClick={() => alert("Large Primary Button clicked! 🚀")}
                >
                  Large Primary
                </AstroButton>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-blue-200">
                Secondary Buttons
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <AstroButton
                  variant="secondary"
                  size="sm"
                  onClick={() => alert("Small Secondary Button clicked! 💫")}
                >
                  Small Secondary
                </AstroButton>
                <AstroButton
                  variant="secondary"
                  size="default"
                  onClick={() => alert("Default Secondary Button clicked! 🌙")}
                >
                  Default Secondary
                </AstroButton>
                <AstroButton
                  variant="secondary"
                  size="lg"
                  onClick={() => alert("Large Secondary Button clicked! ⭐")}
                >
                  Large Secondary
                </AstroButton>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-blue-200">
                Other Variants
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <AstroButton
                  variant="outline"
                  onClick={() => alert("Outline Button clicked! 🔮")}
                >
                  Outline Button
                </AstroButton>
                <AstroButton
                  variant="ghost"
                  onClick={() => alert("Ghost Button clicked! 👻")}
                >
                  Ghost Button
                </AstroButton>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-blue-200">
                Special Features
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <AstroButton
                  variant="primary"
                  loading={false}
                  startIcon="🚀"
                  onClick={() => alert("Button with start icon! 🎯")}
                >
                  With Start Icon
                </AstroButton>
                <AstroButton
                  variant="secondary"
                  endIcon="⭐"
                  onClick={() => alert("Button with end icon! 🎪")}
                >
                  With End Icon
                </AstroButton>
                <AstroButton
                  variant="primary"
                  fullWidth
                  onClick={() => alert("Full width button! 🌈")}
                >
                  Full Width Button
                </AstroButton>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Usage Example
          </h2>
          <div className="bg-black/30 rounded-lg p-6 border border-white/10">
            <pre className="text-sm text-green-300 overflow-x-auto">
              {`import { AstroButton } from 'astrobutton';

function App() {
  return (
    <AstroButton 
      variant="primary" 
      size="default"
      onClick={() => alert('Hello from space! 🚀')}
    >
      Click me!
    </AstroButton>
  );
}`}
            </pre>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-medium mb-4 text-blue-200">
              Live Example:
            </h3>
            <AstroButton
              variant="primary"
              size="lg"
              onClick={() =>
                alert("🎉 Your AstroButton package is working perfectly!")
              }
            >
              🌟 Try AstroButton Now! 🌟
            </AstroButton>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl text-blue-200">
            🎉 Your AstroButton npm package is ready for the stars!
          </p>
          <p className="text-lg text-blue-300 mt-2">
            Beautiful animations, dynamic features, and stellar performance ✨
          </p>
        </div>
      </div>
    </div>
  );
}
