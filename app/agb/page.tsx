import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-white/60 mt-4 text-lg">AGB</p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die mietweise Überlassung von Restauranträumen zur Durchführung von Veranstaltungen sowie für alle damit zusammenhängenden weiteren Leistungen und Lieferungen des Restaurants an den Kunden (Veranstalter).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Vertragsabschluss, -partner, -haftung</h2>
          <p>
            Der Vertrag kommt durch die Annahme des Antrags des Kunden durch das Restaurant zustande. Dem Restaurant steht es frei, die Buchung schriftlich zu bestätigen. Vertragspartner sind das Restaurant und der Kunde. Hat ein Dritter für den Kunden bestellt, haftet er dem Restaurant gegenüber zusammen mit dem Kunden als Gesamtschuldner für alle Verpflichtungen aus dem Restaurantaufnahmevertrag.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Leistungen, Preise, Zahlung, Aufrechnung</h2>
          <p>
            Das Restaurant ist verpflichtet, die vom Kunden bestellten und vom Restaurant zugesagten Leistungen zu erbringen. Der Kunde ist verpflichtet, die für diese und weitere in Anspruch genommene Leistungen vereinbarten bzw. üblichen Preise des Restaurants zu zahlen.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Rücktritt des Kunden (Abbestellung, Stornierung)</h2>
          <p>
            Ein Rücktritt des Kunden von dem mit dem Restaurant geschlossenen Vertrag bedarf der schriftlichen Zustimmung des Restaurants. Erfolgt diese nicht, so ist der vereinbarte Preis aus dem Vertrag auch dann zu zahlen, wenn der Kunde vertragliche Leistungen nicht in Anspruch nimmt.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Rücktritt des Restaurants</h2>
          <p>
            Sofern ein kostenfreies Rücktrittsrecht des Kunden innerhalb einer bestimmten Frist schriftlich vereinbart wurde, ist das Restaurant in diesem Zeitraum seinerseits berechtigt, vom Vertrag zurückzutreten, wenn Anfragen anderer Kunden nach den vertraglich gebuchten Räumen vorliegen und der Kunde auf Rückfrage des Restaurants auf sein Recht zum Rücktritt nicht verzichtet.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Schlussbestimmungen</h2>
          <p>
            Änderungen oder Ergänzungen des Vertrags, der Antragsannahme oder dieser Geschäftsbedingungen für die Restaurantaufnahme sollen schriftlich erfolgen. Einseitige Änderungen oder Ergänzungen durch den Kunden sind unwirksam.
          </p>
          <p>
            Erfüllungs- und Zahlungsort ist der Sitz des Restaurants.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
