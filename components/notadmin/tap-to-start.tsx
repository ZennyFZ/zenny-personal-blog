interface TapToStartProps {
  onTap: () => void;
}

const TapToStart = ({ onTap }: TapToStartProps) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <button
        onClick={onTap}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[hsl(330_60%_50%_/_0.3)] bg-[linear-gradient(135deg,hsl(280_40%_12%_/_0.8),hsl(330_30%_8%_/_0.7))] px-10 py-6 shadow-[0_8px_32px_hsl(280_100%_30%_/_0.3),0_0_20px_hsl(330_100%_60%_/_0.4),inset_0_1px_0_hsl(330_100%_80%_/_0.1)] backdrop-blur-[20px] transition-all duration-300 hover:shadow-[0_8px_32px_hsl(280_100%_30%_/_0.3),0_0_40px_hsl(330_100%_60%_/_0.7),inset_0_1px_0_hsl(330_100%_80%_/_0.1)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,hsl(330_100%_70%_/_0.4),transparent_70%)] opacity-10" />
        <div className="flex flex-col items-center gap-3">
          <span className="text-4xl">✧</span>
          <span className="text-xl font-semibold text-foreground [font-family:'Cinzel',serif] [text-shadow:0_0_20px_hsl(330_85%_60%_/_0.8)]">
            Tap to Start
          </span>
          <span className="text-sm text-muted-foreground [font-family:'Quicksand',sans-serif]">
            Begin your journey
          </span>
        </div>
      </button>
    </div>
  );
};

export default TapToStart;
