import MainVideoSection from '@/components/sections/MainVideoSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="mainVideoSection">
        <MainVideoSection />
      </section>
      <div className="h-screen bg-red-500">Test scroll area</div>
    </main>
  );
}
