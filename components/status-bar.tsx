interface StatusBarProps {
  currentTime: string
}

export function StatusBar({ currentTime }: StatusBarProps) {
  return (
    <div className="flex justify-between items-center mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 border-4 border-pink-300 pixel-shadow">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-bold text-purple-700">{"✨ Online ✨"}</span>
      </div>
      <div className="text-sm font-mono text-purple-600">{currentTime}</div>
      <div className="flex gap-1">
        <div className="w-3 h-3 bg-pink-400 rounded-sm"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
        <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
      </div>
    </div>
  )
}
