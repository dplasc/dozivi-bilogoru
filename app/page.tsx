import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          DOŽIVI BILOGORU
        </h1>
        <p className="text-lg font-medium text-muted-foreground">
          Digitalna putovnica Bilogore
        </p>
        <p className="text-balance text-muted-foreground">
          Istraži najljepše lokacije Bilogore, skupljaj digitalne pečate i
          otkrivaj priče stvarnog svijeta.
        </p>
        <Button size="lg">Započni istraživanje</Button>
      </div>
    </main>
  );
}
