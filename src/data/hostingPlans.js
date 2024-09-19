import { Server, Rocket, Music, Globe, Mic, Cloud, Gamepad, Headphones } from 'lucide-react';

export const plans = {
  minecraft: {
    budget: {
      description: "Perfect for running testing servers, vanilla or lightly modded, with plugins or even small SMPs. Ideal for those on a tight budget or just starting out.",
      plans: [
        { 
          title: "Minecraft Proxy Plan EU", 
          description: "Perfect for an average proxy", 
          price: "$3.00/month", 
          features: [
            "1GB RAM", 
            "100% CPU", 
            "512MB Storage", 
            "3 Ports",
            "Europe Location"
          ], 
          icon: Server 
        },
        {
          title: "Minecraft Dirt Plan EU",
          description: "Perfect for a small amount of players, not big modpacks and just not very resource intensive tasks",
          price: "$1.80/month",
          features: [
            "2GB RAM",
            "200% CPU",
            "2GB Storage",
            "2 Ports",
            "Europe Location"
          ],
          icon: Server
        },
        {
          title: "Minecraft Iron Plan EU",
          description: "Perfect for about 10 players, not really big modpacks and just average resource tasks",
          price: "$3.60/month",
          features: [
            "4GB RAM",
            "400% CPU",
            "10GB Storage",
            "4 Ports",
            "Europe Location"
          ],
          icon: Server
        },
        {
          title: "Minecraft Copper Plan EU",
          description: "Perfect for an SMP with plugins or mods",
          price: "$5.40/month",
          features: [
            "6GB RAM",
            "500% CPU",
            "10GB Storage",
            "3 Ports",
            "Europe Location"
          ],
          icon: Server
        },
        {
          title: "Minecraft Gold Plan EU",
          description: "Perfect for a big SMP with more plugins or mods",
          price: "$7.20/month",
          features: [
            "8GB RAM",
            "500% CPU",
            "20GB Storage",
            "5 Ports",
            "Europe Location"
          ],
          icon: Server
        },
        {
          title: "Minecraft Diamond Plan EU",
          description: "Perfect for most servers with around 50 players, or even big modpacks or plugins",
          price: "$9.00/month",
          features: [
            "10GB RAM",
            "800% CPU",
            "20GB Storage",
            "5 Ports",
            "Europe Location"
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
