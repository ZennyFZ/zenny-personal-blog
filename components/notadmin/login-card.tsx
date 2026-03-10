import { useState } from "react";
import Image from "next/image";

interface LoginCardProps {
  onLoginSuccess: () => void;
  isVisible: boolean;
}

const LoginCard = ({ onLoginSuccess, isVisible }: LoginCardProps) => {
  const logo = "/notadmin/logo.webp";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate brief loading
    await new Promise((resolve) => setTimeout(resolve, 500));
    onLoginSuccess();
  };

  if (!isVisible) return null;

  return (
    <div
      className={[
        "relative w-full max-w-md overflow-hidden rounded-2xl p-8",
        "animate-in fade-in zoom-in-95 duration-500",
        "backdrop-blur-[20px]",
        "border border-[hsl(330_60%_50%_/_0.3)]",
        "bg-[linear-gradient(135deg,hsl(280_40%_12%_/_0.8),hsl(330_30%_8%_/_0.7))]",
        "shadow-[0_8px_32px_hsl(280_100%_30%_/_0.3),inset_0_1px_0_hsl(330_100%_80%_/_0.1)]",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,hsl(330_100%_70%_/_0.4),transparent_70%)] opacity-10" />
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          width={250}
          height={250}
          src={logo}
          alt="Honkai Star Rail Logo"
          className="drop-shadow-[0_0_30px_hsl(330_100%_60%_/_0.5)]"
        />
      </div>

      {/* Title */}
      <h1 className="mb-2 text-center text-2xl font-semibold text-foreground [font-family:'Cinzel',serif] [text-shadow:0_0_20px_hsl(330_85%_60%_/_0.8)]">
        Welcome, Trailblazer
      </h1>
      <p className="mb-8 text-center text-sm text-muted-foreground [font-family:'Quicksand',sans-serif]">
        Enter your credentials to continue your journey
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 [font-family:'Quicksand',sans-serif]"
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-muted/50 px-4 py-3 text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/20 focus:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
            placeholder="trailblazer@stellaron.com"
            disabled={isLoading}
            autoComplete="email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-muted/50 px-4 py-3 text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/20 focus:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)]"
            placeholder="••••••••"
            disabled={isLoading}
            autoComplete="current-password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="relative mt-6 w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,hsl(330_85%_55%),hsl(280_70%_50%))] px-8 py-3 font-semibold text-primary-foreground shadow-[0_0_30px_hsl(330_100%_60%_/_0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_hsl(330_100%_60%_/_0.6)] active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Entering...
            </span>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginCard;
