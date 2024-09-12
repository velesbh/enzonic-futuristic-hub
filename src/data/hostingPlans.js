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
        {
          title: "Coal Plan",
          description: "Good for testing servers or solo gameplay or invite 1-2 friends on vanilla",
          price: "$1.80/month",
          features: [
            "2GB RAM",
            "250% CPU",
            "5GB Storage",
            "2 Ports",
            "1 Backup",
            "USA and Europe Locations"
          ],
          icon: Server
        },
        {
          title: "Budget 1GB",
          description: "Ideal for small vanilla servers",
          price: "$2/month",
          features: [
            "1GB RAM",
            "Shared CPU",
            "10GB SSD",
            "DDoS Protection",
            "Unlimited Slots"
          ],
          icon: Server
        },
        {
          title: "Budget 2GB",
          description: "Great for small modded servers",
          price: "$4/month",
          features: [
            "2GB RAM",
            "Shared CPU",
            "20GB SSD",
            "DDoS Protection",
            "Unlimited Slots"
          ],
          icon: Server
        },
        {
          title: "Budget 3GB",
          description: "Perfect for medium-sized vanilla servers",
          price: "$6/month",
          features: [
            "3GB RAM",
            "Shared CPU",
            "30GB SSD",
            "DDoS Protection",
            "Unlimited Slots"
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