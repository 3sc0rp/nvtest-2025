export default function MobileQuickCtas() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-brown/10 bg-cream/95 backdrop-blur">
      <div className="container-grid py-2 flex items-center justify-between text-sm">
        <a href="tel:+17705550137" className="px-3 py-2 rounded bg-sand border">Call</a>
        <a href="/reservations" className="px-3 py-2 rounded bg-olive text-cream">Reserve</a>
        <a href="/order" className="px-3 py-2 rounded bg-terracotta text-cream">Order</a>
      </div>
    </div>
  )
}


