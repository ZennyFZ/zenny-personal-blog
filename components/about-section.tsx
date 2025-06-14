import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-blue-300 pixel-shadow">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <h2 className="pixelated-font font-bold text-blue-800">
          {"about_me.txt"}
        </h2>
      </div>
      <div className="bg-white/80 p-4 rounded border-2 border-blue-200 font-mono text-sm">
        <p className="text-blue-800 mb-2">{"> Hello World! ✨"}</p>
        <p className="text-gray-700 mb-2">
          {
            "I'm a front-end wizard with HTML, CSS, JavaScript, ReactJS, and NextJS in my spellbook. I moonlight as a backend and mobile dev when duty calls—Java, Express, ElysiaJS, SQL/NoSQL, you name it."
          }
        </p>
        <p className="text-gray-700 mb-2">
          {"I can also do some light Photoshop sorcery and video editing."}
        </p>
        <p className="text-gray-700 mb-2">
          {
            "...and I sell game keys, gacha juice, software licenses, and gift cards like a digital black market dealer (but legal, I swear)."
          }
        </p>
        <p className="text-blue-600">
          {"> my true identity is... a sleepyhead"}
        </p>
      </div>
    </Card>
  );
}
