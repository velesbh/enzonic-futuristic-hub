import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Settings, Server, Clock, Shield, Zap, HeadphonesIcon, Cpu, HardDrive, DollarSign, Rocket, Music, Globe, Mic, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0a2f1f', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#1a5f3f', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2a8f5f', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
        {[...Array(50)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r={`${Math.random() * 2 + 0.5}%`}
            fill={`rgba(0, ${Math.random() * 155 + 100}, ${Math.random() * 100}, 0.3)`}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
              x: ['-2%', '2%', '-2%'],
              y: ['-2%', '2%', '-2%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const FloatingElement = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  );
};

const StaticIcon = ({ icon: Icon }) => {
  return (
    <div>
      <Icon className="w-12 h-12 text-white mb-4" />
    </div>
  );
};

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <StaticIcon icon={Icon} />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

const PlanCard = ({ title, description, price, features, isExtreme, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-white mr-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <p className="text-2xl font-bold text-white mb-4">{price}</p>
    <ul className="text-gray-300 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">• {feature}</li>
      ))}
    </ul>
    {isExtreme && (
      <p className="text-yellow-400 mb-4">This plan will take up to 24H to setup</p>
    )}
    <Button variant="outline" className="mt-auto text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200">
      Select Plan
    </Button>
  </motion.div>
);

const PlanComparison = () => (
  <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-4 text-purple-400">Plan Comparison</h3>
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-purple-400">Feature</th>
          <th className="text-center text-purple-400">Budget</th>
          <th className="text-center text-purple-400">Normal</th>
          <th className="text-center text-purple-400">Extreme</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-purple-300">Price per GB RAM</td>
          <td className="text-center text-purple-300">$0.90</td>
          <td className="text-center text-purple-300">$1.10</td>
          <td className="text-center text-purple-300">$3.00</td>
        </tr>
        <tr>
          <td className="text-purple-300">CPU</td>
          <td className="text-center text-purple-300">Shared</td>
          <td className="text-center text-purple-300">AMD EPYC 7R17</td>
          <td className="text-center text-purple-300">i9-9900K</td>
        </tr>
        <tr>
          <td className="text-purple-300">Dedicated IP</td>
          <td className="text-center text-purple-300">-</td>
          <td className="text-center text-purple-300">-</td>
          <td className="text-center text-purple-300">$5/month</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const EnzonicHosting = () => {
  const [selectedPlan, setSelectedPlan] = useState('minecraft');
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

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
  };

  const [selectedTier, setSelectedTier] = useState('budget');

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
            <FeatureCard title="SSD Storage" description="Lightning-fast SSD storage for all plans" icon={Server} />
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
              <Button
                variant={selectedTier === 'budget' ? "default" : "outline"}
                className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                onClick={() => setSelectedTier('budget')}
              >
                Budget
              </Button>
              <Button
                variant={selectedTier === 'normal' ? "default" : "outline"}
                className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                onClick={() => setSelectedTier('normal')}
              >
                Normal
              </Button>
              <Button
                variant={selectedTier === 'extreme' ? "default" : "outline"}
                className="text-white border-white bg-gray-800 hover:bg-gray-700 hover:text-gray-200"
                onClick={() => setSelectedTier('extreme')}
              >
                Extreme
              </Button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedPlan === 'minecraft'
              ? plans.minecraft[selectedTier].map((plan, index) => (
                  <PlanCard key={index} {...plan} isExtreme={selectedTier === 'extreme'} />
                ))
              : plans[selectedPlan].map((plan, index) => (
                  <PlanCard key={index} {...plan} />
                ))}
          </div>
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
