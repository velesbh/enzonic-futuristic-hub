import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeamMember = ({ name, role, description, avatarUrl }) => (
  <Card className="bg-gray-800 border-gray-700">
    <CardHeader>
      <Avatar className="w-24 h-24 mx-auto mb-4">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <CardTitle className="text-blue-400">{name}</CardTitle>
      <CardDescription>{role}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Veles BH",
      role: "Main Developer & Owner",
      description: "Hi, I'm Veles BH. My favorite color is blue and I like coding, playing Minecraft, editing, recording, talking to people, owning Enzonic, and judging people.",
      avatarUrl: "/placeholder.svg"
    },
    {
      name: "Sawyer Plaz",
      role: "CO-OWNER",
      description: "Hello, my name is Sawyer. I have a YT (SawyerPlaz). Don't upload much. Voice actor, co-owner, Director, programmer (Not too good though).",
      avatarUrl: "/placeholder.svg"
    },
    {
      name: "MATIASS (CAT WITH CHIPS)",
      role: "CO-OWNER",
      description: "",
      avatarUrl: "/placeholder.svg"
    },
    {
      name: "LUKE",
      role: "CO-OWNER",
      description: "Hi, I'm Luke. Voice Actor, Script Writer, and Actor for Enzonic Productions. My favorite things: Hazbin Hotel, Helluva Boss, Jujutsu Kaisen, and Technical Stuff. My favorite color is Red. I'm single.",
      avatarUrl: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;