import { Server, Rocket, Music, Globe, Mic, Cloud, Gamepad, Headphones } from 'lucide-react';

export const plans = {
  minecraft: {
    budget: {
      description: "Perfect for running testing servers, vanilla or lightly modded, with plugins or even small SMPs. Ideal for those on a tight budget or just starting out.",
      plans: [
        { title: "Proxy Plan", description: "Perfect for proxy servers", price: "$2.70/quarter", features: ["1GB RAM", "Shared CPU", "Unlimited SSD", "DDoS Protection"], icon: Server },
        { title: "Coal Plan", description: "Perfect for playing by yourself with some mods or a few friends", price: "$2.70/month", features: ["3GB RAM", "Shared CPU", "Unlimited SSD", "DDoS Protection", "1 MySQL Database"], icon: Server },
        { title: "Iron Plan", description: "Perfect for running small SMPs with around 10 players online", price: "$5.40/month", features: ["6GB RAM", "Shared CPU", "Unlimited SSD", "DDoS Protection", "2 MySQL Databases", "Free Subdomain"], icon: Server },
        { title: "Diamond Plan", description: "Perfect for bigger SMPs or big modpacks", price: "$9/month", features: ["10GB RAM", "Shared CPU", "Unlimited SSD", "DDoS Protection", "Unlimited MySQL Databases", "Free Domain"], icon: Server },
      ]
    },
    normal: {
      description: "Ideal for most of your needs, with powerful CPU and RAM. This is probably the best option if you have the budget for a robust and versatile server setup.",
      plans: [
        { title: "Coal Plan", description: "Perfect for playing by yourself with some mods, big modpacks or a few friends", price: "$3.30/month", features: ["3GB RAM", "AMD EPYC 7R17", "Unlimited NVMe SSD", "Advanced DDoS Protection", "2 MySQL Databases"], icon: Server },
        { title: "Iron Plan", description: "Perfect for running small SMPs with around 20 players online and even modpacks", price: "$6.60/month", features: ["6GB RAM", "AMD EPYC 7R17", "Unlimited NVMe SSD", "Advanced DDoS Protection", "Unlimited MySQL Databases", "Free Subdomain"], icon: Server },
        { title: "Diamond Plan", description: "Perfect for big SMPs or big modpacks", price: "$11/month", features: ["10GB RAM", "AMD EPYC 7R17", "Unlimited NVMe SSD", "Advanced DDoS Protection", "Unlimited MySQL Databases", "Free Domain"], icon: Server },
        { title: "Netherite Plan", description: "Perfect for a small network or SMPs with big modpacks or loads of players", price: "$17.60/month", features: ["16GB RAM", "AMD EPYC 7R17", "Unlimited NVMe SSD", "Advanced DDoS Protection", "Unlimited MySQL Databases", "Free Domain", "Priority Support"], icon: Server },
        { title: "Bedrock Plan", description: "Perfect for a big amount of players, plugins or mods, very good for pretty much anything that isn't too crazy", price: "$26.4/month", features: ["24GB RAM", "AMD EPYC 7R17", "Unlimited NVMe SSD", "Advanced DDoS Protection", "Unlimited MySQL Databases", "Free Domain", "Priority Support", "Dedicated IP"], icon: Server },
      ]
    },
    extreme: {
      description: "These plans are designed for public servers, big SMPs, high player counts, and resource-intensive modpacks. Ideal for very demanding and resource-intensive server setups.",
      disclaimer: "PLEASE NOTE: EXTREME PLANS WILL TAKE UP TO 24H TO SETUP",
      plans: [
        { title: "Iron Plan", description: "Perfect for running SMPs with around 25 players online and even modpacks", price: "$18/month", features: ["6GB RAM", "i9-9900K", "Unlimited NVMe SSD", "Enterprise DDoS Protection", "Unlimited MySQL Databases", "Free Domain"], icon: Server },
        { title: "Diamond Plan", description: "Perfect for big SMPs or big modpacks", price: "$30/month", features: ["10GB RAM", "i9-9900K", "Unlimited NVMe SSD", "Enterprise DDoS Protection", "Unlimited MySQL Databases", "Free Domain", "Dedicated IP"], icon: Server },
        { title: "Netherite Plan", description: "Perfect for a small network or SMPs with big modpacks or loads of players (around 50)", price: "$48/month", features: ["16GB RAM", "i9-9900K", "Unlimited NVMe SSD", "Enterprise DDoS Protection", "Unlimited MySQL Databases", "Free Domain", "Dedicated IP", "24/7 Priority Support"], icon: Server },
        { title: "Bedrock Plan", description: "You can run your own network with around 60 Players", price: "$72/month", features: ["24GB RAM", "i9-9900K", "Unlimited NVMe SSD", "Enterprise DDoS Protection", "Unlimited MySQL Databases", "Free Domain", "Dedicated IP", "24/7 Priority Support", "Custom Control Panel"], icon: Server },
        { title: "Barrier Plan", description: "Our most powerful plan for large-scale operations", price: "$96/month", features: ["32GB RAM", "i9-9900K", "Unlimited NVMe SSD", "Enterprise DDoS Protection", "Unlimited MySQL Databases", "Free Domain", "Multiple Dedicated IPs", "24/7 Priority Support", "Custom Control Panel", "Dedicated Account Manager"], icon: Server },
      ]
    }
  },
  voiceservers: {
    description: "High-quality voice servers for crystal-clear communication in your gaming sessions or professional meetings.",
    plans: [
      { title: "Basic Voice", description: "Perfect for small teams or gaming groups", price: "$5/month", features: ["25 Slots", "Low Latency", "24/7 Uptime", "Web-based Control Panel"], icon: Headphones },
      { title: "Pro Voice", description: "Ideal for medium-sized communities", price: "$10/month", features: ["50 Slots", "Ultra-Low Latency", "Custom Branding", "Advanced Permissions", "Priority Support"], icon: Headphones },
      { title: "Enterprise Voice", description: "For large organizations and gaming communities", price: "$25/month", features: ["Unlimited Slots", "Dedicated Server", "API Access", "Custom Features", "24/7 Premium Support"], icon: Headphones },
    ]
  }
};

export const planComparison = {
  budget: {
    pricePerGB: "$0.90",
    cpu: "Shared",
    dedicatedIP: "-",
    storage: "Unlimited SSD",
    ddosProtection: "Basic",
    support: "24/7 Standard"
  },
  normal: {
    pricePerGB: "$1.10",
    cpu: "AMD EPYC 7R17",
    dedicatedIP: "Available on higher tiers",
    storage: "Unlimited NVMe SSD",
    ddosProtection: "Advanced",
    support: "24/7 Priority"
  },
  extreme: {
    pricePerGB: "$3.00",
    cpu: "i9-9900K",
    dedicatedIP: "Included",
    storage: "Unlimited NVMe SSD",
    ddosProtection: "Enterprise",
    support: "24/7 VIP"
  }
};