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
        // ... (keep other existing plans)
      ]
    },
    // ... (keep normal and extreme plans as they were)
  },
  // ... (keep other plan categories as they were)
};

// ... (keep planComparison as it was)