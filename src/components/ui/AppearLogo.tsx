import Image from "next/image";

interface AppearLogoProps {
  show: boolean;
  className?: string;
}

export default function AppearLogo({ show, className }: AppearLogoProps) {
  if (!show) return null;

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex justify-center items-center
      bg-black transition-opacity duration-1000 opacity-100 ${className || ``}`}
    >
      <div className="w-3/5 md:w-2/5 lg:w-1/3 max-w-lg">
        <Image
          src="/images/header/logo.png"
          alt="Daegu Hip Hop Festival"
          width={700}
          height={550}
          className="w-full h-auto opacity-80 animate-[logoShow_2s_ease-out_forwards] blur-lg"
          priority
        />
      </div>
    </div>
  );
}
