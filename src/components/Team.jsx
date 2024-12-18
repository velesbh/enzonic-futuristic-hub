import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role, description, avatarUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
  >
    <Card className="bg-gray-800 border-gray-700 h-full overflow-hidden relative">
      <CardHeader className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
        >
          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-blue-500">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </motion.div>
        <CardTitle className="text-white text-xl">{name}</CardTitle>
        <CardDescription className="text-blue-300">{role}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-sm text-gray-300">{description}</p>
      </CardContent>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-400/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </Card>
  </motion.div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Veles BH",
      role: "Main Developer & Owner",
      description: "Hi, I'm Veles BH. My favorite color is blue and I like coding, playing Minecraft, editing, recording, talking to people, owning Enzonic, and judging people.",
      avatarUrl: "https://i.postimg.cc/K865cZvn/unnamed.jpg"
    },
    {
      name: "Sawyer Plaz",
      role: "CO-OWNER",
      description: "Hello, my name is Sawyer. I have a YT (SawyerPlaz). Don't upload much. Voice actor, co-owner, Director, programmer (Not too good though).",
      avatarUrl: "https://i.postimg.cc/RFLDk3ms/saywer.png"
    },
    {
      name: "MATIASS (CAT WITH CHIPS)",
      role: "CO-OWNER",
      description: "Hey there, I'm cat with chips or you can call me Matiass or cat for short. I'm British, I love chips and crisps. I love Hazbin Hotel and anime, especially Jujutsu Kaisen. I have depression. My favorite color is purple and I'm single. Bye bye!",
      avatarUrl: "https://i.postimg.cc/j51sJkwY/cat-with-chips.png"
    },
    {
      name: "LUKE",
      role: "CO-OWNER",
      description: "Hi, I'm Luke. Voice Actor, Script Writer, and Actor for Enzonic Productions. My favorite things: Hazbin Hotel, Jujutsu Kaisen, and Technical Stuff. My favorite color is Red. I'm single.",
      avatarUrl: "https://i.postimg.cc/90pzwBhd/luke.png"
    }
  ];

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Our Team
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
