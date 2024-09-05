import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Settings, Server, Clock, Shield, HeadphonesIcon, Cpu, HardDrive, DollarSign, Rocket, Music, Globe, Mic, Cloud, Gamepad, Zap } from 'lucide-react';
import { AnimatedBackground, FloatingElement, StaticIcon, FeatureCard, PlanCard, PlanComparison } from '../components/HostingComponents';

const EnzonicHosting = () => {
  const [selectedPlan, setSelectedPlan] = useState('minecraft');
  const [selectedTier, setSelectedTier] = useState('budget');

  const plans = {
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

  const renderPlans = () => {
    const currentPlans = selectedPlan === 'minecraft' ? plans.minecraft[selectedTier] : plans[selectedPlan];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPlans.map((plan, index) => (
          <PlanCard key={index} {...plan} isExtreme={selectedTier === 'extreme'} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <Header />
      <main className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <FloatingElement>
            <motion.h1 
              className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enzonic Hosting
            </motion.h1>
          </FloatingElement>
          <motion.div 
            className="text-2xl mb-8 text-green-300 h-20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Powerful and reliable hosting solutions',
                1000,
                'Game servers, web hosting, and more',
                1000,
                'Tailored for your needs',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Link to="/">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Home
              </Button>
            </Link>
            <a href="https://panel.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Game Panel
              </Button>
            </a>
            <a href="https://webpanel.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                Webhosting Panel
              </Button>
            </a>
            <a href="https://vps.enzonic.xyz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="m-2 text-white border-green-500 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-green-500/30">
                VPS Panel
              </Button>
            </a>
          </div>
        </motion.div>
        
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="99.9% Uptime" description="We guarantee your services will be available 99.9% of the time" icon={Clock} />
            <FeatureCard title="DDoS Protection" description="Advanced protection against DDoS attacks" icon={Shield} />
            <FeatureCard title="24/7 Support" description="Our team is always ready to help you" icon={HeadphonesIcon} />
            <FeatureCard title="Scalable Resources" description="Easily upgrade your plan as your needs grow" icon={Zap} />
            <FeatureCard title="SSD Storage" description="Lightning-fast SSD storage for all plans" icon={HardDrive} />
            <FeatureCard title="Custom Solutions" description="Tailored hosting solutions for your specific needs" icon={Settings} />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Plans</h2>
          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            {Object.keys(plans).map((plan) => (
              <Button
                key={plan}
                variant={selectedPlan === plan ? "default" : "outline"}
                className="m-2 text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                onClick={() => {
                  setSelectedPlan(plan);
                  setSelectedTier('budget');
                }}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)} Servers
              </Button>
            ))}
          </div>
          {selectedPlan === 'minecraft' && (
            <div className="flex justify-center space-x-4 mb-8">
              {['budget', 'normal', 'extreme'].map((tier) => (
                <Button
                  key={tier}
                  variant={selectedTier === tier ? "default" : "outline"}
                  className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                  onClick={() => setSelectedTier(tier)}
                >
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </Button>
              ))}
            </div>
          )}
          {renderPlans()}
          {selectedPlan === 'minecraft' && (
            <>
              <div className="text-center mt-8">
                <Button variant="outline" className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200">
                  Contact Us for Custom Plan
                </Button>
              </div>
              <div className="text-center mt-4">
                <PlanComparison />
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EnzonicHosting;