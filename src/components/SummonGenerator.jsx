import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const entities = [
  "allay", "area_effect_cloud", "armadillo", "armor_stand", "arrow", "axolotl", "bat", "bee", "blaze", "block_display",
  "boat", "bogged", "breeze", "camel", "cat", "cave_spider", "chest_boat", "chest_minecart", "chicken", "cod",
  "command_block_minecart", "cow", "creeper", "dolphin", "donkey", "dragon_fireball", "drowned", "egg", "elder_guardian",
  "end_crystal", "ender_dragon", "ender_pearl", "enderman", "endermite", "evoker", "evoker_fangs", "experience_bottle",
  "experience_orb", "eye_of_ender", "falling_block", "fireball", "firework_rocket", "fox", "frog", "furnace_minecart",
  "ghast", "giant", "glow_item_frame", "glow_squid", "goat", "guardian", "hoglin", "hopper_minecart", "horse", "husk",
  "illusioner", "interaction", "iron_golem", "item", "item_display", "item_frame", "leash_knot", "lightning_bolt",
  "llama", "llama_spit", "magma_cube", "marker", "minecart", "mooshroom", "mule", "ocelot", "painting", "panda",
  "parrot", "phantom", "pig", "piglin", "piglin_brute", "pillager", "polar_bear", "potion", "pufferfish", "rabbit",
  "ravager", "salmon", "sheep", "shulker", "shulker_bullet", "silverfish", "skeleton", "skeleton_horse", "slime",
  "small_fireball", "sniffer", "snow_golem", "snowball", "spawner_minecart", "spectral_arrow", "spider", "squid",
  "stray", "strider", "tadpole", "text_display", "tnt", "tnt_minecart", "trader_llama", "trident", "tropical_fish",
  "turtle", "vex", "villager", "vindicator", "wandering_trader", "warden", "witch", "wither", "wither_skeleton",
  "wither_skull", "wolf", "zoglin", "zombie", "zombie_horse", "zombie_villager", "zombified_piglin"
];

const SummonGenerator = () => {
  const [entity, setEntity] = useState('');
  const [x, setX] = useState('~');
  const [y, setY] = useState('~');
  const [z, setZ] = useState('~');
  const [nbt, setNbt] = useState('');
  const [command, setCommand] = useState('');

  const generateCommand = () => {
    let summonCommand = `/summon minecraft:${entity} ${x} ${y} ${z}`;
    if (nbt) {
      summonCommand += ` ${nbt}`;
    }
    setCommand(summonCommand);
  };

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Summon Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select onValueChange={setEntity}>
          <SelectTrigger className="bg-gray-700 text-white">
            <SelectValue placeholder="Select Entity" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 text-white max-h-60 overflow-y-auto">
            {entities.map((e) => (
              <SelectItem key={e} value={e}>{e.replace('_', ' ')}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="grid grid-cols-3 gap-4">
          <Input
            placeholder="X"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Input
            placeholder="Y"
            value={y}
            onChange={(e) => setY(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Input
            placeholder="Z"
            value={z}
            onChange={(e) => setZ(e.target.value)}
            className="bg-gray-700 text-white"
          />
        </div>
        <Input
          placeholder="NBT Data (optional)"
          value={nbt}
          onChange={(e) => setNbt(e.target.value)}
          className="bg-gray-700 text-white"
        />
        <Button onClick={generateCommand} className="w-full bg-green-600 hover:bg-green-700">Generate Command</Button>
        {command && (
          <div className="mt-4 p-4 bg-gray-900 rounded">
            <pre className="whitespace-pre-wrap">{command}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SummonGenerator;
