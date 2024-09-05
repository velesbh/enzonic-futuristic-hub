import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Zap, Shield, HeadphonesIcon, Gamepad, Globe, Server } from 'lucide-react';
import { plans } from '../data/hostingPlans';

const AnimatedBackground = () => (
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

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
  >
    <Icon className="w-12 h-12 text-white mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

const PlanCard = ({ title, price, features, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-green-400 mr-2" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-3xl font-bold text-white mb-4">{price}</p>
    <ul className="text-gray-300 mb-4 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <Zap className="w-4 h-4 text-green-400 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Button variant="outline" className="mt-auto text-white border-green-400 bg-gray-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
      Select Plan
    </Button>
  </motion.div>
);

const EnzonicHosting = () => (
  <div className="min-h-screen bg-gray-900 text-white">
    <AnimatedBackground />
    <Header />
    <main className="container mx-auto px-4 py-16 relative z-10">
      <section className="text-center mb-16">
        <motion.h1 
          className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Enzonic Hosting
        </motion.h1>
        <motion.div 
          className="text-2xl mb-8 text-gray-300 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'Powerful servers for your games',
              1000,
              'Lightning-fast web hosting',
              1000,
              'Reliable VPS solutions',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-green-500 text-white hover:bg-green-600 mr-4">Get Started</Button>
          <Button variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white">Learn More</Button>
        </motion.div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Enzonic Hosting?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap} 
            title="Lightning Fast" 
            description="Experience blazing fast speeds with our optimized infrastructure."
          />
          <FeatureCard 
            icon={Shield} 
            title="Ironclad Security" 
            description="Your data is protected with state-of-the-art security measures."
          />
          <FeatureCard 
            icon={HeadphonesIcon} 
            title="24/7 Support" 
            description="Our expert team is always ready to assist you, anytime."
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Hosting Solutions</h2>
        <Tabs>
          <TabList className="flex justify-center mb-8">
            <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-400 transition-colors duration-300">Minecraft</Tab>
            <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-400 transition-colors duration-300">Web Hosting</Tab>
            <Tab className="px-4 py-2 text-lg cursor-pointer hover:text-green-400 transition-colors duration-300">VPS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.minecraft.budget.slice(0, 3).map((plan, index) => (
                <PlanCard key={index} {...plan} icon={Gamepad} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.website.map((plan, index) => (
                <PlanCard key={index} {...plan} icon={Globe} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.vps.map((plan, index) => (
                <PlanCard key={index} {...plan} icon={Server} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied customers and experience the Enzonic difference today!</p>
        <Button className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-3">Sign Up Now</Button>
      </section>
    </main>
    <Footer />
  </div>
);

export default EnzonicHosting;