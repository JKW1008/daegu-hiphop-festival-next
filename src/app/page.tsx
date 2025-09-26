import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="mainVideoSection">
        <h1>Main Video Section</h1>
      </section>
      <section id="artist">
        <h1>Artist Section</h1>
      </section>
      <section id="instagram">
        <h1>Instagram Section</h1>
      </section>
      <section id="map">
        <h1>Map Section</h1>
      </section>
    </main>
  );
}
