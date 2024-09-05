import { Server, Rocket, Music, Globe, Mic, Cloud, Gamepad } from 'lucide-react';

export const plans = {
  minecraft: {
    budget: {
      description: "Perfect for running testing servers, vanilla or lightly modded, with plugins or even small SMPs. Ideal for those on a tight budget or just starting out.",
      plans: [
        { title: "Proxy Plan", description: "Perfect for proxy servers", price: "$2.70/quarter", features: ["1GB RAM"], icon: Server },
        { title: "Coal Plan", description: "Perfect for playing by yourself with some mods or a few friends", price: "$2.70/month", features: ["3GB RAM"], icon: Server },
        { title: "Iron Plan", description: "Perfect for running small SMPs with around 10 players online", price: "$5.40/month", features: ["6GB RAM"], icon: Server },
        { title: "Diamond Plan", description: "Perfect for bigger SMPs or big modpacks", price: "$9/month", features: ["10GB RAM"], icon: Server },
      ]
    },
    normal: {
      description: "Ideal for most of your needs, with powerful CPU and RAM. This is probably the best option if you have the budget for a robust and versatile server setup.",
      plans: [
        { title: "Coal Plan", description: "Perfect for playing by yourself with some mods, big modpacks or a few friends", price: "$3.30/month", features: ["3GB RAM"], icon: Server },
        { title: "Iron Plan", description: "Perfect for running small SMPs with around 20 players online and even modpacks", price: "$6.60/month", features: ["6GB RAM"], icon: Server },
        { title: "Diamond Plan", description: "Perfect for big SMPs or big modpacks", price: "$11/month", features: ["10GB RAM"], icon: Server },
        { title: "Netherite Plan", description: "Perfect for a small network or SMPs with big modpacks or loads of players", price: "$17.60/month", features: ["16GB RAM", "Up to 48H setup time"], icon: Server },
        { title: "Bedrock Plan", description: "Perfect for a big amount of players, plugins or mods, very good for pretty much anything that isn't too crazy", price: "$26.4/month", features: ["24GB RAM", "Up to 48H setup time"], icon: Server },
      ]
    },
    extreme: {
      description: "These plans are designed for public servers, big SMPs, high player counts, and resource-intensive modpacks. Ideal for very demanding and resource-intensive server setups.",
      disclaimer: "PLEASE NOTE: EXTREME PLANS WILL TAKE UP TO 24H TO SETUP",
      plans: [
        { title: "Iron Plan", description: "Perfect for running SMPs with around 25 players online and even modpacks", price: "$18/month", features: ["6GB RAM"], icon: Server },
        { title: "Diamond Plan", description: "Perfect for big SMPs or big modpacks", price: "$30/month", features: ["10GB RAM"], icon: Server },
        { title: "Netherite Plan", description: "Perfect for a small network or SMPs with big modpacks or loads of players (around 50)", price: "$48/month", features: ["16GB RAM"], icon: Server },
        { title: "Bedrock Plan", description: "You can run your own network with around 60 Players", price: "$72/month", features: ["24GB RAM"], icon: Server },
        { title: "Barrier Plan", description: "Our most powerful plan for large-scale operations", price: "$96/month", features: ["32GB RAM"], icon: Server },
      ]
    }
  },
  // ... (keep other plan types unchanged)
};

export const planComparison = {
  budget: {
    pricePerGB: "$0.90",
    cpu: "Shared",
    dedicatedIP: "-"
  },
  normal: {
    pricePerGB: "$1.10",
    cpu: "AMD EPYC 7R17",
    dedicatedIP: "-"
  },
  extreme: {
    pricePerGB: "$3.00",
    cpu: "i9-9900K",
    dedicatedIP: "$5/month"
  }
};