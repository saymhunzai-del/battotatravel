const items = [
  {
    icon: "✈️",
    title: "Best fares",
    description: "Negotiated rates with 100+ airlines and global hotel partners."
  },
  {
    icon: "🏨",
    title: "Holiday packages",
    description: "Curated stays and packages to suit every budget and style."
  },
  {
    icon: "📋",
    title: "Visa & insurance",
    description: "UAE visas and travel insurance arranged in one place."
  },
  {
    icon: "🌍",
    title: "Expert advisors",
    description: "Dedicated team with decades of experience since 1976."
  }
];

export function WhyChooseUs() {
  return (
    <div className="why-grid">
      {items.map((item) => (
        <div key={item.title} className="why-item">
          <div className="why-item-icon" aria-hidden>
            {item.icon}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
