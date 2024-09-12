import { Server, Rocket, Music, Globe, Mic, Cloud, Gamepad, Headphones } from 'lucide-react';

export const plans = {
  minecraft: {
    budget: {
      description: "Perfect for running testing servers, vanilla or lightly modded, with plugins or even small SMPs. Ideal for those on a tight budget or just starting out.",
      plans: [
        { 
          title: "Budget Proxy", 
          description: "Perfect for proxy servers", 
          price: "$3/quarter", 
          features: [
            "1GB RAM", 
            "100% CPU", 
            "500MB SSD", 
            "DDoS Protection",
            "Europe and USA Locations"
          ], 
          icon: Server 
        },
      ]
    },
    normal: {
      description: "Suitable for medium-sized servers with more players and mods.",
      plans: [
        // Add normal plans here
      ]
    },
    extreme: {
      description: "For large servers with heavy modpacks and high player counts.",
      plans: [
        // Add extreme plans here
      ]
    }
  },
  voiceservers: {
    description: "High-quality voice servers for seamless communication.",
    plans: [
      // Add voice server plans here
    ]
  }
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