import { memo } from "react"
import FeatureCard from "./FeatureCard"
import Feature from '../../assets/Shape.png';

const featuresData = [
  {
    id: 1,
    title: "Access up to $100,000",
    description: "We fund each invoice once approved and collect payment to optimize your cash flow.",
    iconPath: Feature,
  },
  {
    id: 2,
    title: "You choose invoices to get paid",
    description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
    iconPath: Feature,
  },
  {
    id: 3,
    title: "Simple pricing",
    description: "Only pay for what you use. If you don't need us, there are no costs.",
    iconPath: Feature,
  },
  {
    id: 4,
    title: "Click and quick",
    description: "We fund each invoice once approved and collect payment to optimize your cash flow.",
    iconPath: Feature,
  },
  {
    id: 5,
    title: "Flexible",
    description: "Self-serve online portal available 24/7 or connect from your CRM or invoicing platform.",
    iconPath: Feature,
  },
  {
    id: 6,
    title: "Invest in your business",
    description: "Only pay for what you use. If you don't need us, there are no costs.",
    iconPath: Feature,
  },
]

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Outsource payment collection</h2>
        <p className="features-subtitle">Faster and flexible access to cash flow from one or all your invoices.</p>

        <div className="features-grid">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              iconPath={feature.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(Features)
