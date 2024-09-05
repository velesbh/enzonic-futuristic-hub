import { Server, Rocket, Music, Globe, Mic, Cloud, Gamepad } from 'lucide-react';

export const plans = {
  minecraft: {
    budget: [
      { title: "Proxy Plan", description: "Perfect for proxy servers", price: "$2.70/quarter", features: ["1GB RAM"], icon: Server },
      { title: "Coal Plan", description: "Perfect for playing by yourself with some mods or a few friends", price: "$2.70/month", features: ["3GB RAM"], icon: Server },
      { title: "Iron Plan", description: "Perfect for running small SMPs with around 10 players online", price: "$5.40/month", features: ["6GB RAM"], icon: Server },
      { title: "Diamond Plan", description: "Perfect for bigger SMPs or big modpacks", price: "$9/month", features: ["10GB RAM"], icon: Server },
    ],
    normal: [
      { title: "Coal Plan", description: "Perfect for playing by yourself with some mods, big modpacks or a few friends", price: "$3.30/month", features: ["3GB RAM"], icon: Server },
      { title: "Iron Plan", description: "Perfect for running small SMPs with around 20 players online and even modpacks", price: "$6.60/month", features: ["6GB RAM"], icon: Server },
      { title: "Diamond Plan", description: "Perfect for big SMPs or big modpacks", price: "$11/month", features: ["10GB RAM"], icon: Server },
      { title: "Netherite Plan", description: "Perfect for a small network or SMPs with big modpacks or loads of players", price: "$17.60/month", features: ["16GB RAM", "Up to 48H setup time"], icon: Server },
      { title: "Bedrock Plan", description: "Perfect for a big amount of players, plugins or mods, very good for pretty much anything that isn't too crazy", price: "$26.4/month", features: ["24GB RAM", "Up to 48H setup time"], icon: Server },
    ],
    extreme: [
      { title: "Iron Plan", description: "Perfect for running SMPs with around 25 players online and even modpacks", price: "$18/month", features: ["6GB RAM"], icon: Server },
      { title: "Diamond Plan", description: "Perfect for big SMPs or big modpacks", price: "$30/month", features: ["10GB RAM"], icon: Server },
      { title: "Netherite Plan", description: "Perfect for a small network or SMPs with big modpacks or loads of players (around 50)", price: "$48/month", features: ["16GB RAM"], icon: Server },
      { title: "Bedrock Plan", description: "You can run your own network with around 60 Players", price: "$72/month", features: ["24GB RAM"], icon: Server },
      { title: "Barrier Plan", description: "Our most powerful plan for large-scale operations", price: "$96/month", features: ["32GB RAM"], icon: Server },
    ]
  },
  rust: [
    { title: "Basic", description: "Start your Rust journey", price: "$20/month", features: ["4GB RAM", "50GB SSD", "50 Players"], icon: Rocket },
    { title: "Advanced", description: "For serious Rust players", price: "$40/month", features: ["8GB RAM", "100GB SSD", "100 Players", "Priority Support"], icon: Rocket },
    { title: "Ultimate", description: "No compromises", price: "$80/month", features: ["16GB RAM", "200GB SSD", "200 Players", "DDoS Protection", "Custom Mods Support"], icon: Rocket },
  ],
  discord: [
    { title: "Basic Bot", description: "Get started with Discord bots", price: "$3/month", features: ["24/7 Uptime", "Custom Commands", "Music Playback"], icon: Music },
    { title: "Advanced Bot", description: "More features, more fun", price: "$8/month", features: ["All Basic features", "Moderation Tools", "Custom Integrations"], icon: Music },
    { title: "Pro Bot", description: "For power users", price: "$15/month", features: ["All Advanced features", "Voice Recognition", "AI Chatbot Capabilities"], icon: Music },
  ],
  website: [
    { title: "Personal", description: "For blogs and portfolios", price: "$5/month", features: ["5GB Storage", "Unlimited Bandwidth", "Free SSL"], icon: Globe },
    { title: "Business", description: "For small to medium businesses", price: "$15/month", features: ["20GB Storage", "Unlimited Bandwidth", "Free SSL", "Daily Backups"], icon: Globe },
    { title: "E-commerce", description: "For online stores", price: "$30/month", features: ["50GB Storage", "Unlimited Bandwidth", "Free SSL", "Daily Backups", "E-commerce Tools"], icon: Globe },
  ],
  voice: [
    { title: "Small Team", description: "Perfect for small groups", price: "$5/month", features: ["10 Slots", "Low Latency", "24/7 Uptime"], icon: Mic },
    { title: "Medium Team", description: "For growing communities", price: "$15/month", features: ["50 Slots", "Low Latency", "24/7 Uptime", "Custom Branding"], icon: Mic },
    { title: "Large Team", description: "For big organizations", price: "$30/month", features: ["100 Slots", "Ultra-Low Latency", "24/7 Uptime", "Custom Branding", "Priority Support"], icon: Mic },
  ],
  vps: [
    { title: "Starter VPS", description: "Entry-level virtual server", price: "$10/month", features: ["1 vCPU", "2GB RAM", "20GB SSD", "1TB Bandwidth"], icon: Cloud },
    { title: "Business VPS", description: "For demanding applications", price: "$30/month", features: ["2 vCPUs", "4GB RAM", "80GB SSD", "3TB Bandwidth"], icon: Cloud },
    { title: "Enterprise VPS", description: "High-performance solution", price: "$60/month", features: ["4 vCPUs", "8GB RAM", "160GB SSD", "5TB Bandwidth", "DDoS Protection"], icon: Cloud },
  ],
  insurgency: [
    { title: "Basic Server", description: "Start your Insurgency community", price: "$15/month", features: ["4GB RAM", "50GB SSD", "32 Players"], icon: Gamepad },
    { title: "Pro Server", description: "For competitive play", price: "$30/month", features: ["8GB RAM", "100GB SSD", "64 Players", "Priority Support"], icon: Gamepad },
  ],
  csgo: [
    { title: "Casual Server", description: "Perfect for small communities", price: "$20/month", features: ["4GB RAM", "50GB SSD", "32 Players"], icon: Gamepad },
    { title: "Competitive Server", description: "For serious CS:GO players", price: "$40/month", features: ["8GB RAM", "100GB SSD", "64 Players", "128 Tick Rate"], icon: Gamepad },
  ],
  sourceEngine: [
    { title: "Basic Source", description: "Run your custom Source game", price: "$25/month", features: ["4GB RAM", "50GB SSD", "Customizable startup"], icon: Gamepad },
    { title: "Advanced Source", description: "For resource-intensive mods", price: "$50/month", features: ["8GB RAM", "100GB SSD", "Priority Support", "Customizable startup"], icon: Gamepad },
  ],
  teamFortress2: [
    { title: "Community Server", description: "Start your TF2 community", price: "$15/month", features: ["4GB RAM", "50GB SSD", "32 Players"], icon: Gamepad },
    { title: "Premium Server", description: "For large TF2 communities", price: "$30/month", features: ["8GB RAM", "100GB SSD", "64 Players", "Custom Plugins Support"], icon: Gamepad },
  ],
  garrysMod: [
    { title: "Basic GMod", description: "Perfect for small servers", price: "$20/month", features: ["4GB RAM", "50GB SSD", "32 Players"], icon: Gamepad },
    { title: "Advanced GMod", description: "For large communities and complex gamemodes", price: "$40/month", features: ["8GB RAM", "100GB SSD", "64 Players", "Workshop Support"], icon: Gamepad },
  ],
  arkSurvivalEvolved: [
    { title: "Starter ARK", description: "Begin your dinosaur adventure", price: "$30/month", features: ["8GB RAM", "100GB SSD", "50 Players"], icon: Gamepad },
    { title: "Premium ARK", description: "For large tribes and mods", price: "$60/month", features: ["16GB RAM", "200GB SSD", "100 Players", "Mod Support", "Automatic Backups"], icon: Gamepad },
  ],
};