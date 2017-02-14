const effects = {
   "Hit":{
      "Bludgeoning":[
         {
            "name":"Shattered Hand",
            "effect":"Normal damage and 1d2 Con and Str damage. Hand useless until healed"
         },
         {
            "name":"Rattled",
            "effect":"Normal damage and target is confused for 1d3 rounds (Fort negates)"
         },
         {
            "name":"Thunder Strike",
            "effect":"Double damage and target is deafened for 1d4 rounds"
         },
         {
            "name":"Lights Out",
            "effect":"Normal damage and target is blinded for 1d3 rounds"
         },
         {
            "name":"Crushed Trachea",
            "effect":"Normal damage and target cannot breathe or speak DC 20 Heal check ends condition"
         },
         {
            "name":"Split Open",
            "effect":"Double damage and 1d4 bleed"
         },
         {
            "name":"Feeble Parry",
            "effect":"Double damage and target is disarmed (1 item)"
         },
         {
            "name":"Surprise Opening",
            "effect":"Double damage and one free attack against the target with a -5 penalty"
         },
         {
            "name":"Back Breaker",
            "effect":"Double damage and 1d6 Dex damage"
         },
         {
            "name":"Terrible Bruise",
            "effect":"Double damage and 2d6 nonlethal damage"
         },
         {
            "name":"Broken Leg",
            "effect":"Normal damage and 1d4 Con and Dex damage. Target's speeds are reduced by half until healed"
         },
         {
            "name":"Spun Around",
            "effect":"Normal damage and target is flat-footed for 1 round"
         },
         {
            "name":"Where Am I?",
            "effect":"Normal damage and target is stunned for 1 round"
         },
         {
            "name":"To Your Thinky Bits",
            "effect":"Double damage and 1 Int bleed (Fort negates save each round)"
         },
         {
            "name":"Crunch",
            "effect":"Double damage and target is nauseated for 1 round (Fort negates)"
         },
         {
            "name":"Armor Dent",
            "effect":"Double damage and 2d6 damage to metal armor (ignore hardness)"
         },
         {
            "name":"Breathless",
            "effect":"Normal damage and target is exhausted for 1d4 rounds"
         },
         {
            "name":"Mace to da Face",
            "effect":"Normal damage and target dazed and blinded for 1 round"
         },
         {
            "name":"Tiring Blow",
            "effect":"Double damage plus target is fatigued"
         },
         {
            "name":"Concussion",
            "effect":"Normal damage and 1d2 Int and Wis damage"
         },
         {
            "name":"Ruptured Spleen",
            "effect":"Normal damage and 1d6 bleed. This bleed can only be cured with magic"
         },
         {
            "name":"Solid Blow",
            "effect":"Triple damage"
         },
         {
            "name":"Crumpling Blow",
            "effect":"Double damage and target is knocked prone"
         },
         {
            "name":"Collapsed Lung",
            "effect":"Normal damage and target is staggered for 1d6 rounds"
         },
         {
            "name":"Flat Foot",
            "effect":"Double damage and 1 Dex damage and target's speeds are reduced by 5 feet until healed"
         },
         {
            "name":"Skull Crush",
            "effect":"Double damage and 2d6 Int drain (Fort half)"
         },
         {
            "name":"And Stay Down!",
            "effect":"Normal damage and target is knocked prone and stunned for 1 round (Fort negates stun)"
         },
         {
            "name":"Bone Masher",
            "effect":"Normal damage and either 1d3 Dex damage and halve speed (leg) or 1d3 Str damage (arm). Limb useless until healed"
         },
         {
            "name":"2 for 1",
            "effect":"Double damage to target and normal damage to adjacent target"
         },
         {
            "name":"Crushed Intestines",
            "effect":"Normal damage and 1d4 Con bleed (DC 15 Fort negates, save each round)"
         },
         {
            "name":"Numbing Blow",
            "effect":"Normal damage and 1d4 Dex damage and target is disarmed (1 item, Ref negates drop)"
         },
         {
            "name":"Roundhouse",
            "effect":"Normal damage and a free attack against adjacent foes at the same bonus"
         },
         {
            "name":"Staggering Blow",
            "effect":"Normal damage and double nonlethal damage"
         },
         {
            "name":"My Teef!",
            "effect":"Normal damage and 1 Con damage. Target loses bite, gains 20% spell failure chance for verbal spells"
         },
         {
            "name":"Earth Rumble",
            "effect":"Normal damage and a free trip attempt versus target and all adjacent enemies"
         },
         {
            "name":"Pimp Slap",
            "effect":"Normal damage and target dazed for 1d4 rounds"
         },
         {
            "name":"Cracked Rib",
            "effect":"Normal damage and 1d3 Con damage and target is fatigued"
         },
         {
            "name":"Box the Ears",
            "effect":"Normal damage and target deafened for 1d4 hours"
         },
         {
            "name":"Bell Ringer",
            "effect":"Normal damage and 1d2 Int damage and sickened for 1d4 rounds"
         },
         {
            "name":"Momentum",
            "effect":"Double damage and +2 on all your attack rolls for 1 round"
         },
         {
            "name":"Broken nose",
            "effect":"Normal damage and 1 Cha damage and 1 bleed"
         },
         {
            "name":"Broken Ribs",
            "effect":"Double damage and target cannot heal naturally for 1d4 days"
         },
         {
            "name":"Knockback",
            "effect":"Double damage and target is pushed 1d6 squares directly away"
         },
         {
            "name":"Low Blow",
            "effect":"Normal damage and target is sickened for 1d6 rounds"
         },
         {
            "name":"Brained",
            "effect":"Double damage and target can take only one move or standard action next round"
         },
         {
            "name":"Shield Smack",
            "effect":"Double damage and target's shield is disarmed"
         },
         {
            "name":"I See Stars",
            "effect":"Normal damage and target takes a 20% miss chance for 1d4 rounds"
         },
         {
            "name":"Nighty Night",
            "effect":"Normal damage and target is unconscious for 1d4 rounds (Fort negates)"
         },
         {
            "name":"Cracked Knee",
            "effect":"Normal damage and 1d2 Dex damage. Target's base land speed reduced to 10 feet until healed"
         },
         {
            "name":"What's Going On?",
            "effect":"Double damage and 1d4 hours of target's memory erased"
         },
         {
            "name":"Crushed Toe",
            "effect":"Normal damage and 1d4 Dex damage. Target's land speed is halved until healed"
         },
         {
            "name":"Off Balance",
            "effect":"Normal damage and target provokes attacks of opportunity from all threatening opponents"
         }
      ],
      "Magic":[
         {
            "name":"Time Vortex",
            "effect":"Normal damage and target vanishes, reappearing 1d4 rounds later"
         },
         {
            "name":"Maximum Effect",
            "effect":"Maximize all spell variables"
         },
         {
            "name":"Draining Spell",
            "effect":"Double damage and target randomly loses one spell or one use of a spell-like ability"
         },
         {
            "name":"Wild Surge",
            "effect":"Normal damage and normal damage of a random energy type"
         },
         {
            "name":"Excruciating",
            "effect":"Normal damage and target is sickened for 1d6 rounds"
         },
         {
            "name":"Terrifying Display",
            "effect":"Normal damage and target frightened for 1d4 rounds (Will negates)"
         },
         {
            "name":"Dispelling Aura",
            "effect":"Normal damage and dispel magic on the target"
         },
         {
            "name":"Concussive Spell",
            "effect":"Double damage and 1d4 bleed"
         },
         {
            "name":"Knockback",
            "effect":"Double damage and target is pushed 1d6 squares directly away"
         },
         {
            "name":"I Love You, Man",
            "effect":"Normal damage and target is charmed for 3 rounds (Will negates)"
         },
         {
            "name":"Electrocuted",
            "effect":"Double damage. If electricity spell, target stunned for 1d4 rounds"
         },
         {
            "name":"Hypnotic Link",
            "effect":"Double damage and you may give the target 1 suggestion (as the spell. Will negates)"
         },
         {
            "name":"Frozen",
            "effect":"Double damage. If cold spell, target takes 1d4 Dex damage"
         },
         {
            "name":"Side Effect",
            "effect":"Double damage and you become invisible for 1d4 rounds"
         },
         {
            "name":"Turned Around",
            "effect":"Double damage and target can take only one move or standard action next round"
         },
         {
            "name":"Stunned",
            "effect":"Normal damage and target is stunned for 1 round"
         },
         {
            "name":"Call of the Wind",
            "effect":"Double damage or triple damage to animals, fey, magical beasts, and vermin"
         },
         {
            "name":"Petrified",
            "effect":"Normal damage and target is petrified for 1d4 hours (Fort negates)"
         },
         {
            "name":"Pretty Colors",
            "effect":"Double damage and target is dazzled for 1d4 rounds"
         },
         {
            "name":"Nerve Damage",
            "effect":"Normal damage and target is slow for 1d6 rounds"
         },
         {
            "name":"Arcane Blast",
            "effect":"Double damage and 2d6 random energy damage (Reflex half)"
         },
         {
            "name":"Planar Rift",
            "effect":"Normal damage and target sent to a random plane (Will negates)"
         },
         {
            "name":"Eyeburn",
            "effect":"Normal damage and target blinded for 1d4 rounds (Fort negates)"
         },
         {
            "name":"Intense Strike",
            "effect":"Double damage and ignore energy resistance (but not immunity)"
         },
         {
            "name":"Transposition",
            "effect":"Double damage and you and target switch places"
         },
         {
            "name":"Light Blast",
            "effect":"Double damage and target is blinded for 1 round"
         },
         {
            "name":"Conduit",
            "effect":"Double damage and target takes a -4 penalty on saves vs. your spells for 1d6 rounds"
         },
         {
            "name":"Lingering Magic",
            "effect":"Normal damage this round and half damage each round for 1d4 rounds"
         },
         {
            "name":"Allergic Reaction",
            "effect":"Double damage and 1d4 damage to a random ability score"
         },
         {
            "name":"Arcane Glow",
            "effect":"Double damage and target glows like faerie fire for 1d6 rounds"
         },
         {
            "name":"Combustion",
            "effect":"Double damage. If fire spell, target catches fire, taking 2d6 fire damage per round until extinguished"
         },
         {
            "name":"Unnatural Selection",
            "effect":"Double damage or triple damage to aberrations and outsiders"
         },
         {
            "name":"Corrosive",
            "effect":"Double damage. If acid spell, target takes 2d6 acid damage for 1d4 rounds"
         },
         {
            "name":"Funny Bone",
            "effect":"Double damage and target spends 1 round laughing (as hideous laughter spell, Will negates)"
         },
         {
            "name":"Phased",
            "effect":"Double damage and target is incorporeal for 1d3 rounds (Will negates)"
         },
         {
            "name":"Life Leech",
            "effect":"Normal damage and 1 negative level (Fort negates after 1 day)"
         },
         {
            "name":"Siren Song",
            "effect":"Double damage or triple damage to giants, humanoids and monstrous humanoids"
         },
         {
            "name":"Distraction",
            "effect":"Double damage and an illusion appears to attack foe, flanking him for you for 1d6 rounds"
         },
         {
            "name":"Arcane Goo",
            "effect":"Normal damage and target is entangled (DC 20 Str or Escape Artist to be freed)"
         },
         {
            "name":"Hoarder's Wrath",
            "effect":"Double damage or triple damage to dragons"
         },
         {
            "name":"Mind Cloud",
            "effect":"Double damage and target is dazed for 1 round"
         },
         {
            "name":"Elemental Call",
            "effect":"Normal damage. If elemental spell, Medium elemental appears to serve for 1d4 rounds"
         },
         {
            "name":"Splash Spell",
            "effect":"Normal damage and half damage to all adjacent targets"
         },
         {
            "name":"Olfactory Overload",
            "effect":"Double damage and target loses scent and blindsense for 1 day"
         },
         {
            "name":"Cut off from Magic",
            "effect":"Normal damage and target cannot cast spells or use spell-like abilities for 1d4 rounds"
         },
         {
            "name":"Aura of Protection",
            "effect":"Double damage and +4 to your AC for 1 round"
         },
         {
            "name":"Vulnerability",
            "effect":"Double damage and if the spell did elemental damage the target is now vulnerable to that element for 3 rounds"
         },
         {
            "name":"Roaring Spell",
            "effect":"Double damage and target is deafened for 1d4 rounds"
         },
         {
            "name":"Returning Spell",
            "effect":"Double damage and spell is not lost"
         },
         {
            "name":"Power Surge",
            "effect":"Triple damage"
         },
         {
            "name":"Vampiric Magic",
            "effect":"Normal damage. You are healed the same amount"
         },
         {
            "name":"Shrink Ray",
            "effect":"Normal damage and target is reduced for 3 rounds (as Reduce person, Will negates)"
         }
      ],
      "Piercing":[
         {
            "name":"Leg Wound",
            "effect":"Double damage and target's land speed is halved for 1d4 rounds"
         },
         {
            "name":"Grazing Hit",
            "effect":"Normal damage and target is stunned for 1 round"
         },
         {
            "name":"Knockback",
            "effect":"Double damage and target is pushed 1d6 squares directly away"
         },
         {
            "name":"Vulnerable Spot",
            "effect":"Normal damage and target takes 1d4 ability damage of your choice"
         },
         {
            "name":"Bleeder",
            "effect":"Double damage and 1d6 Bleed"
         },
         {
            "name":"Heart Shot",
            "effect":"Triple damage and 1 Con bleed"
         },
         {
            "name":"Deep Wound",
            "effect":"Double damage and target is nauseated for 1 round (Fort negates)"
         },
         {
            "name":"Ragged Wound",
            "effect":"Normal damage and 1d8 bleed"
         },
         {
            "name":"Sucking Chest Wound",
            "effect":"Double damage and target is exhausted (Fort negates)"
         },
         {
            "name":"Lodged in the Bone",
            "effect":"Double damage and 2 bleed. This bleed requires a DC 20 Heal check to stop"
         },
         {
            "name":"Momentum",
            "effect":"Double damage and +2 on all your attack rolls for 1 round"
         },
         {
            "name":"Pinned Arm",
            "effect":"Double damage and one arm cannot move (DC 20 Str or Heal to be freed)"
         },
         {
            "name":"Punctured Lung",
            "effect":"Double damage and target begins to drown 3 round later. DC 20 Fort save each round to end effect"
         },
         {
            "name":"Ventilated",
            "effect":"Double damage and 2d6 nonlethal damage"
         },
         {
            "name":"Hand Wound",
            "effect":"Normal damage and 1d2 Dex damage. -4 penalty on all rolls using that hand until healed"
         },
         {
            "name":"Pinhole",
            "effect":"Double damage and 1 bleed. Target takes 1 additional bleed each round until healed"
         },
         {
            "name":"Perfect Strike",
            "effect":"Triple Damage"
         },
         {
            "name":"Nerve Cluster",
            "effect":"Normal damage and target is stunned for 1d6 rounds (Fort save each round to act)"
         },
         {
            "name":"Penetrating Wound",
            "effect":"Double damage and ignore DR"
         },
         {
            "name":"Kidney Piercing",
            "effect":"Double damage and target sickened for 2d4 round (Fort negates)"
         },
         {
            "name":"Achilles Heel",
            "effect":"Normal damage and 1d2 Dex damage. Target's speeds are reduced by half until healed"
         },
         {
            "name":"Spinal Tap",
            "effect":"Normal damage and -4 penalty on attack rolls, skill checks and ability checks for 1d4 rounds"
         },
         {
            "name":"In a Row",
            "effect":"Double damage to target and normal damage to adjacent target"
         },
         {
            "name":"Blown Back",
            "effect":"Double damage and target is knocked prone"
         },
         {
            "name":"Appendicitis",
            "effect":"Double damage and target is poisoned (treat as greenblood oil)"
         },
         {
            "name":"Javelin Catcher",
            "effect":"Double damage and 1d6 bleed if from ranged attack"
         },
         {
            "name":"Cheek Pierced",
            "effect":"Normal damage and 1d4 bleed. Target gains 50% spell failure chance for verbal spells until healed"
         },
         {
            "name":"Calf Hole",
            "effect":"Normal damage and 1d4 Dex damage"
         },
         {
            "name":"Painful Poke",
            "effect":"Double damage and target can take only one move or standard action until next round"
         },
         {
            "name":"Pierced",
            "effect":"Double damage and target is dazed for 1 round"
         },
         {
            "name":"Tenacious Wound",
            "effect":"Normal damage and 1d2 Con damage. Target does not heal this damage naturally"
         },
         {
            "name":"Muscles Severed",
            "effect":"Normal damage and 1d6 Dex and 1d6 Str damage"
         },
         {
            "name":"Infection",
            "effect":"Double damage and target contracts filth fever (Fort negates)"
         },
         {
            "name":"Overreaction",
            "effect":"Normal damage and target provokes attacks of opportunity from all threatening opponents"
         },
         {
            "name":"Spun Around",
            "effect":"Normal damage and target is flat footed for 1 round"
         },
         {
            "name":"Eye Patch for You",
            "effect":"Triple damage and 1d2 Con drain. -4 Spot, Search and ranged attacks until healed"
         },
         {
            "name":"Forearm Piercing",
            "effect":"Double damage and target is disarmed (1 item)"
         },
         {
            "name":"Clean Through",
            "effect":"Normal damage and 1d6 bleed and 1 Con drain"
         },
         {
            "name":"Surprise Opening",
            "effect":"Double damage and one free attack against the target with a -5 penalty"
         },
         {
            "name":"Organ Scramble",
            "effect":"Double damage and 1d6 Con damage"
         },
         {
            "name":"Deep Hurting",
            "effect":"Double damage and target is fatigued"
         },
         {
            "name":"Tongue Piercing",
            "effect":"Normal damage and 1 Con damage. Target gains 50% spell failure chance for verbal spells until healed"
         },
         {
            "name":"Shoulder Wound",
            "effect":"Double damage and 1d2 Str and Dex damage"
         },
         {
            "name":"Left Reeling",
            "effect":"Double damage and target takes a -2 penalty to AC for 1d4 rounds"
         },
         {
            "name":"Elbow pierced",
            "effect":"Double damage and target drops whatever is being held (1 item)"
         },
         {
            "name":"Bicep Wound",
            "effect":"Normal damage and 1d4 Str damage"
         },
         {
            "name":"Nailed in Place",
            "effect":"Double damage and target cannot move (DC 20 Str check negates)"
         },
         {
            "name":"Guarded Strike",
            "effect":"Double damage and +4 to your AC for 1 round"
         },
         {
            "name":"Right in the Ear",
            "effect":"Normal damage and 1 Int damage and 1 bleed"
         },
         {
            "name":"Chipped Bone",
            "effect":"Double damage and 1 Dex damage"
         },
         {
            "name":"Stinger",
            "effect":"Normal damage and target is sickened for 1d6 rounds"
         },
         {
            "name":"Nicked an artery",
            "effect":"Normal damage and 2d6 bleed"
         }
      ],
      "Slashing":[
         {
            "name":"Carve your Initials",
            "effect":"Normal damage and target suffers from humiliation and may only attack you (Will negates)"
         },
         {
            "name":"Missing Digits",
            "effect":"Normal damage and target loses 1d3 fingers and takes 1 Con and Str drain (Fort negates)"
         },
         {
            "name":"Hack and Slash",
            "effect":"Double damage and all critical threats against target automatically confirm for the next 3 rounds"
         },
         {
            "name":"Stand Aside",
            "effect":"Double damage and push target 1 square in any direction"
         },
         {
            "name":"Severed Tendon",
            "effect":"Normal damage and 1d6 Dex damage"
         },
         {
            "name":"Decapitation",
            "effect":"Double damage and death (Fort negates)"
         },
         {
            "name":"Bewildering Display",
            "effect":"Double damage and target takes a -2 penalty to AC for 1d4 rounds"
         },
         {
            "name":"Long Gash",
            "effect":"Normal damage and 8 bleed. A successful Heal check cuts the bleeding in half, rather than ending it"
         },
         {
            "name":"Shattered Jaw",
            "effect":"Normal damage and 1 Con damage. Target cannot speak or bite until healed"
         },
         {
            "name":"Hamstring",
            "effect":"Normal damage and 1d2 Dex damage and target is knocked prone"
         },
         {
            "name":"Brow to Chin",
            "effect":"Normal damage and 1 Con and Cha damage. -2 penalty on Spot, 1 Search and ranged attacks until healed"
         },
         {
            "name":"Gut Slash",
            "effect":"Double damage and 1d4 bleed. Target cannot swallow whole"
         },
         {
            "name":"Wing Tear",
            "effect":"Double damage and target loses flight if it uses wings"
         },
         {
            "name":"Missing Ear",
            "effect":"Normal damage and 1 Cha drain. -4 penalty on Listen check until healed"
         },
         {
            "name":"Wide Open",
            "effect":"Normal damage and target provokes attacks of opportunity from all threatening opponents"
         },
         {
            "name":"We've Got a Bleeder",
            "effect":"Normal damage and 2d6 bleed"
         },
         {
            "name":"Throat Slash",
            "effect":"Normal damage and 2d6 bleed. Target cannot talk or breathe while bleeding"
         },
         {
            "name":"Parrying Strike",
            "effect":"Double damage and +4 to your AC for 1 round"
         },
         {
            "name":"Lean into the Blow",
            "effect":"Triple damage, but you drop your weapon"
         },
         {
            "name":"Flay",
            "effect":"Normal damage plus 1d6 Str damage"
         },
         {
            "name":"Paper Cut",
            "effect":"Normal damage and -4 penalty on attack rolls, skill checks and ability checks for 1d4 rounds"
         },
         {
            "name":"Severed Hand",
            "effect":"Normal damage and target loses hand and takes 1d3 Con and Str drain (Fort negates)"
         },
         {
            "name":"Flat Blade Thwack",
            "effect":"Triple damage but all damage is nonlethal"
         },
         {
            "name":"Surprise Opening",
            "effect":"Double damage and one free attack against the target with a -5 penalty"
         },
         {
            "name":"Broad Swipe",
            "effect":"Normal damage and 1d8 bleed"
         },
         {
            "name":"Disembowel",
            "effect":"Double damage and 1d4 Con damage and 1d6 bleed"
         },
         {
            "name":"Sapping Slash",
            "effect":"Double damage and target is fatigued"
         },
         {
            "name":"Rupture Abdominal Cavity",
            "effect":"Double damage and 1 Con bleed"
         },
         {
            "name":"Muscle Wound",
            "effect":"Double damage and 1d2 Str damage"
         },
         {
            "name":"Fingertipped",
            "effect":"Normal damage and 1 Dex damage. Target cannot use one hand until healed"
         },
         {
            "name":"Bad Parry",
            "effect":"Double damage and target is disarmed (1 item)"
         },
         {
            "name":"Nerve Slice",
            "effect":"Double damage and target can take only one move or standard action next round"
         },
         {
            "name":"Weapon Strike",
            "effect":"Double damage and normal damage to target's weapon"
         },
         {
            "name":"Tangled",
            "effect":"Double damage and you may automatically grapple the target"
         },
         {
            "name":"Momentum",
            "effect":"Double damage and +2 on all your attack rolls for 1 round"
         },
         {
            "name":"Lip Cut",
            "effect":"Double damage and 1 bleed. Target gains 20% spell failure chance for verbal spells until healed"
         },
         {
            "name":"Gory",
            "effect":"Normal damage and target is sickened for 1d6 rounds"
         },
         {
            "name":"Across the Eyes",
            "effect":"Normal damage and target permanently blinded (Ref negates)"
         },
         {
            "name":"Ugly Wound",
            "effect":"Normal damage and 1d3 Cha damage and 1 Cha drain (Fort negates drain)"
         },
         {
            "name":"Knockback",
            "effect":"Double damage and target is pushed 1d6 squares directly away"
         },
         {
            "name":"Pain and Simple",
            "effect":"Double damage and 2d6 nonlethal damage"
         },
         {
            "name":"Cut Straps",
            "effect":"Double damage and double armor check penalty until fixed (DC 15 Craft)"
         },
         {
            "name":"Severed Spine",
            "effect":"Double damage and 3d6 Dex damage (Fort halves)"
         },
         {
            "name":"Overhand Chop",
            "effect":"Double damage and 1d4 bleed"
         },
         {
            "name":"Delayed Wound",
            "effect":"Normal damage and target takes bleed damage equal to your normal damage"
         },
         {
            "name":"Brow Cut",
            "effect":"Normal damage and 1d4 bleed. Target blinded while bleeding"
         },
         {
            "name":"Leg Swipe",
            "effect":"Double damage and target is knocked prone"
         },
         {
            "name":"Terrible Gash",
            "effect":"Double damage and 1 Cha drain"
         },
         {
            "name":"Shield Cleave",
            "effect":"Double damage and normal damage to target's shield"
         },
         {
            "name":"Armor Damage",
            "effect":"Double damage and normal damage to target's armor"
         },
         {
            "name":"Swing Through",
            "effect":"Double damage and one free attack against an adjacent foe at the same bonus"
         },
         {
            "name":"Spun Around",
            "effect":"Normal damage and target is flat-footed for 1 round"
         }
      ]
   },
   "Fumble":{
      "Magic":[
         {
            "name":"Wild Magic",
            "effect":"Roll twice on the Rod of Wonder table (DMG 237)"
         },
         {
            "name":"Magic Fatigue",
            "effect":"You cannot cast any spells for 1 round"
         },
         {
            "name":"You made Him Stronger",
            "effect":"The target gains a +8 enhancement bonus to Str for 1d4 rounds"
         },
         {
            "name":"Clatto Verata Necktie",
            "effect":"Your attack hits the nearest ally and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Hit by the Ugly Forest",
            "effect":"You take 1 point of Cha bleed"
         },
         {
            "name":"The Magic is Gone",
            "effect":"You take a -4 penalty to attack rolls until you scare a critical hit"
         },
         {
            "name":"Can you hear me now?",
            "effect":"You are deafened until healed (DC 15 Heal check)"
         },
         {
            "name":"Error!",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"Why Me?",
            "effect":"You provoke an attack of opportunity from all threatening foes"
         },
         {
            "name":"Left Reeling",
            "effect":"You are stunned for 1 round (Fort negates)]"
         },
         {
            "name":"Nothing to Fear",
            "effect":"You are shaken for 2d4 rounds"
         },
         {
            "name":"Bleeding Eyes",
            "effect":"You take 1d6 points of bleed"
         },
         {
            "name":"Acidic Backlash",
            "effect":"You take 2d6 points of acid damage"
         },
         {
            "name":"Backblast",
            "effect":"The attack hits you and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Arcane Fire",
            "effect":"You take 2d6 points of fire damage"
         },
         {
            "name":"Electrical Feedback",
            "effect":"You take 2d6 points of electricity damage"
         },
         {
            "name":"Cursed",
            "effect":"You take a -4 penalty on attack rolls, saves, skill checks, and ability checks. This effect can only be cured with remove curse"
         },
         {
            "name":"You made him faster",
            "effect":"The target is hasted for 1d4 rounds"
         },
         {
            "name":"You made him tougher",
            "effect":"The target gains DR 5/-for 1d4 rounds"
         },
         {
            "name":"Vertigo",
            "effect":"You are sickened for 1d4 rounds"
         },
         {
            "name":"Apprentice Move",
            "effect":"Reroll attack against creature nearest the target (yourself excluded)"
         },
         {
            "name":"Not me, You fool!",
            "effect":"Your attack hits your ally closest to the target"
         },
         {
            "name":"Tiring Spell",
            "effect":"You are fatigued"
         },
         {
            "name":"Tangled",
            "effect":"You become entangled in your gear until you spend a standard action to free yourself"
         },
         {
            "name":"Nose Bleed",
            "effect":"You take 1 point of bleed"
         },
         {
            "name":"Weakened",
            "effect":"You take a -2 penalty to all your Spell DCs for 1d4 minutes"
         },
         {
            "name":"Poor Trade",
            "effect":"The attack hits you but you must lose a spell or slot of the highest available level (your choice)"
         },
         {
            "name":"Distance Rift",
            "effect":"You are teleported the nearest square adjacent to the target"
         },
         {
            "name":"Mind Drain",
            "effect":"You take 1d4 points of damage to Int, Wis, or Cha (determined randomly)"
         },
         {
            "name":"Cold Snap",
            "effect":"You take 2d6 points of cold damage"
         },
         {
            "name":"Caster's Block",
            "effect":"You cannot cast this spell for 24 hour"
         },
         {
            "name":"You made him bigger",
            "effect":"Target increases one size category for 1d4 rounds"
         },
         {
            "name":"Weak-Minded Fool",
            "effect":"You take 1 point of Wis bleed"
         },
         {
            "name":"Power Down",
            "effect":"You take 1 point of Int bleed"
         },
         {
            "name":"Mental Slip",
            "effect":"On his next turn, your target may give you one suggestion"
         },
         {
            "name":"Power Transfer",
            "effect":"The highest level spell effect on you is transferred to your target"
         },
         {
            "name":"Magical Vacuum",
            "effect":"1d3 spell effects active on you are dispelled (determined randomly)"
         },
         {
            "name":"Blastoff",
            "effect":"You are thrown 1d6x10 feet into the air (or in a random direction if flying) (Will negates)"
         },
         {
            "name":"It's Sparkly",
            "effect":"You are blinded for 1 round"
         },
         {
            "name":"Now I see you…",
            "effect":"Your target becomes invisible for 1d4 rounds"
         },
         {
            "name":"Unexpected Blast",
            "effect":"The spell affects all targets within 30 feet of you. You are immune to this effect"
         },
         {
            "name":"Jumbled Components",
            "effect":"You can only take a move action next round"
         },
         {
            "name":"Spell Shield",
            "effect":"The target gains SR equal to 11 + your caster level for 1d6 rounds"
         },
         {
            "name":"Side Effect",
            "effect":"One of your magic items permanently gains a random drawback (DMG 273)"
         },
         {
            "name":"This is Hard",
            "effect":"You take 1 point of Con damage"
         },
         {
            "name":"Magical Smackdown",
            "effect":"You automatically fail your next saving throw"
         },
         {
            "name":"Reflection",
            "effect":"The spell hits you instead of the target (normal saves apply)"
         },
         {
            "name":"Monster Rift",
            "effect":"Your spell is converted to a summon monster spell of the same level. The monster attacks you"
         },
         {
            "name":"Fragmented Magic",
            "effect":"1d4+2 mirror images spring up around your target. These images last for 1 minute or until destroyed"
         },
         {
            "name":"How did that happen?",
            "effect":"A stinking cloud appears, centered on you"
         },
         {
            "name":"Energy Transfer",
            "effect":"Lose one randomly determined spell or spell slot. Your target can cast this spell next round"
         },
         {
            "name":"Power Drain",
            "effect":"You lose one prepared spell or spell slot (determined randomly)"
         }
      ],
      "Melee":[
         {
            "name":"Butterfingers",
            "effect":"Drop your weapon"
         },
         {
            "name":"Catch your breath",
            "effect":"You can only take a move action next round"
         },
         {
            "name":"Stuck",
            "effect":"Your weapon is stuck in a nearby surface. DC 20 Str check to free it"
         },
         {
            "name":"Backswing",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"Slipped",
            "effect":"You are knocked prone"
         },
         {
            "name":"This sword is too heavy",
            "effect":"You are fatigued"
         },
         {
            "name":"Awkward Attack",
            "effect":"You take -2 penalty to AC for 1d4 rounds"
         },
         {
            "name":"Overextend",
            "effect":"You provoke an attack of opportunity from all adjacent opponents"
         },
         {
            "name":"Pulled Muscle",
            "effect":"You take 1d4 points of Str damage"
         },
         {
            "name":"Fling",
            "effect":"You drop your weapon and it lands 1d6 squares away in a random direction"
         },
         {
            "name":"Broken Blade",
            "effect":"Your weapon is destroyed (Ref Negates) Magic weapons use their own save bonus (DMG 214)"
         },
         {
            "name":"Notched",
            "effect":"Your weapon takes 1d6 points of damage, ignoring hardness"
         },
         {
            "name":"Parry! Dodge! Spin! Thrust!",
            "effect":"You are dazed for 1 round"
         },
         {
            "name":"Hand it over",
            "effect":"Your target gains possession of your weapon (Ref Negates)"
         },
         {
            "name":"Shield Crash",
            "effect":"Your attack deals damage to your shield"
         },
         {
            "name":"Winded",
            "effect":"You are exhausted (Fort negates)"
         },
         {
            "name":"Wide Open",
            "effect":"You are flat-footed for 1 round"
         },
         {
            "name":"Critical Mistake",
            "effect":"The attack hits you and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Strain",
            "effect":"You take 1d4 points of Dex damage"
         },
         {
            "name":"Too Much Stuff",
            "effect":"You become entangled in your gear until you spend a standard action to free yourself"
         },
         {
            "name":"Spinning Swing",
            "effect":"You are sickened for 1d4 rounds"
         },
         {
            "name":"I told you it was sharp",
            "effect":"You take 1d6 points of bleed"
         },
         {
            "name":"Pin Prick",
            "effect":"You take 1 point of bleed"
         },
         {
            "name":"Off Balance",
            "effect":"You take a -4 penalty on all attack rolls for 1 round"
         },
         {
            "name":"Sorry",
            "effect":"Your attack hits an ally adjacent to you or the target"
         },
         {
            "name":"Bonk",
            "effect":"You are stunned for 1 round (Fort Negates)"
         },
         {
            "name":"Catastrophic Failure",
            "effect":"You fall unconscious for 1d6 rounds (Will negates)"
         },
         {
            "name":"Pointy End Goes There",
            "effect":"You take 1 point of Con damage"
         },
         {
            "name":"Broken Haft",
            "effect":"Your weapon loses reach. You have a -4 penalty on attack rolls with it until repaired (DC 20 Craft check)"
         },
         {
            "name":"Fog of War",
            "effect":"You threaten no square for 1d6 rounds"
         },
         {
            "name":"Go For The Eyes",
            "effect":"You are blinded for 1 round"
         },
         {
            "name":"Punt",
            "effect":"Your weapon flies 2d6 squares in a random direction"
         },
         {
            "name":"Bad Grip",
            "effect":"Your weapon deals nonlethal damage for the next 3 rounds"
         },
         {
            "name":"Who Was That",
            "effect":"You are dazed for 1d3 rounds"
         },
         {
            "name":"You Meant to do That",
            "effect":"Move 10 feet in a random direction and provoke attacks of opportunity as normal"
         },
         {
            "name":"Eat Dirt",
            "effect":"You fall prone and are blinded for 1d3 rounds (Fort Negates)"
         },
         {
            "name":"Second Thoughts",
            "effect":"You are sickened for 1d6 rounds"
         },
         {
            "name":"Attack the Darkness",
            "effect":"All your enemies have concealment from you for 1d4 rounds"
         },
         {
            "name":"Wait! What?",
            "effect":"You are confused for 1 round"
         },
         {
            "name":"Wrong End",
            "effect":"If you're using a slashing weapon, you take 1d6 points of damage and 1 point of bleed"
         },
         {
            "name":"Vibration",
            "effect":"If you're using a bludgeoning weapon, you take 1d3 of Str damage and drop your weapon"
         },
         {
            "name":"No Way",
            "effect":"Your attack hits the target, but deals minimum damage"
         },
         {
            "name":"Funny Bone",
            "effect":"You drop whatever is in your off hand"
         },
         {
            "name":"Bent",
            "effect":"You take -4 penalty on all attacks with this weapon until it is repaired (DC 20 Craft Check)"
         },
         {
            "name":"All or Nothing",
            "effect":"You take a -1 penalty on attack rolls until you score a critical hit"
         },
         {
            "name":"Surrounded by Foes",
            "effect":"Your attack hits an ally within reach and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"On the Receiving End",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"Bohemian Earspoon",
            "effect":"You are deafened until healed (DC 15 Heal Check)"
         },
         {
            "name":"Better to Give",
            "effect":"You attack damages you instead. Use your target's Str modifier"
         },
         {
            "name":"Cutter",
            "effect":"You take 1 point of Str bleed"
         },
         {
            "name":"This is Bad",
            "effect":"You take an amount of bleed equal to your Str bonus (minimum 1)"
         },
         {
            "name":"Armor Smash",
            "effect":"Your attack deals damage to your armor"
         }
      ],
      "Nature":[
         {
            "name":"Tripped",
            "effect":"You are knocked prone"
         },
         {
            "name":"Bruised Ego",
            "effect":"You can attack no other target for 1d4 rounds (or until the target is dead)"
         },
         {
            "name":"Awkward Attack",
            "effect":"You take a -2 penalty to AC for 1d4 rounds"
         },
         {
            "name":"Tiring Attack",
            "effect":"You are fatigued"
         },
         {
            "name":"Upset Tummy",
            "effect":"You are sickened for 1d4 rounds"
         },
         {
            "name":"I Bit My Tug",
            "effect":"You take 1 point of bleed"
         },
         {
            "name":"Muscle Tear",
            "effect":"You take 1d4 points of Str damage"
         },
         {
            "name":"Stinging Failure",
            "effect":"You take 1d6 points of nonlethal damage and a -2 penalty on attack rolls with that attack for 1d4 rounds"
         },
         {
            "name":"Smash the Floor",
            "effect":"You kick up dust that blinds you for 1d4 rounds (Fort negates)"
         },
         {
            "name":"He's Sharp",
            "effect":"You take 1d6 points of damage & your Str modifier"
         },
         {
            "name":"Torn Muscle",
            "effect":"You take 1 point of Str drain (Fort negates)"
         },
         {
            "name":"Got Too Close",
            "effect":"Your attack hits the target but the target may start a grapple against you for free"
         },
         {
            "name":"Off Balance",
            "effect":"You can only take a move action next round"
         },
         {
            "name":"He Bit Your Fist",
            "effect":"The target deals bite damage to you"
         },
         {
            "name":"Fist Meets Face",
            "effect":"The attack hits you and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Out of Position",
            "effect":"You cannot use this attack for 1 round"
         },
         {
            "name":"Wide Open",
            "effect":"You are flat-footed for 1 round"
         },
         {
            "name":"Bleeding Fist",
            "effect":"You take 1d6 points of bleed"
         },
         {
            "name":"Twisted",
            "effect":"You become entangled in your gear until you spend a standard action to free yourself"
         },
         {
            "name":"Stop Hitting Yourself",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"Just a Taste",
            "effect":"Your attack hits an ally adjacent to you or the target"
         },
         {
            "name":"Overextend",
            "effect":"You provoke an attack of opportunity from all adjacent opponents"
         },
         {
            "name":"Frustration",
            "effect":"You take a -4 penalty on all attack rolls for 1 round"
         },
         {
            "name":"Broken Tooth",
            "effect":"You take a -2 penalty on attack rolls for 1d6 minutes"
         },
         {
            "name":"Not the Weak Point",
            "effect":"Your enemy's armor takes 1d6 points of damage. You take 1d6 points of damage and cannot use that attack for 1d3 rounds"
         },
         {
            "name":"That Tastes Awful!",
            "effect":"If this was a bite attack, you are nauseated for 1d6 rounds"
         },
         {
            "name":"Broke a Nail",
            "effect":"You take 1d4 points of damage and you cannot use this attack until healed"
         },
         {
            "name":"Sprain",
            "effect":"You take 1d4 points of Dex damage"
         },
         {
            "name":"Overexertion",
            "effect":"You are exhausted (Fort Negates)"
         },
         {
            "name":"Don't Pick At It",
            "effect":"You take 1 point of Con damage"
         },
         {
            "name":"We have a Wiener",
            "effect":"You fall unconscious for 1d6 round (Will Negates)"
         },
         {
            "name":"Whiff",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"Jam a Finger",
            "effect":"Your target takes normal damage, you take double damage"
         },
         {
            "name":"Caught Your Attack",
            "effect":"The target may attempt to trip, bull rush or overrun you (target's choice)"
         },
         {
            "name":"Pins & Needles",
            "effect":"You are sickened for 1d6 rounds"
         },
         {
            "name":"Great Roar",
            "effect":"You are deafened until healed (DC 15 Heal Check)"
         },
         {
            "name":"Head, Meet Wall",
            "effect":"You are dazed for 1d3 rounds"
         },
         {
            "name":"Ferocious Fumble",
            "effect":"Your attack hits an ally within reach and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Sneeze!",
            "effect":"You are dazed for 1 round"
         },
         {
            "name":"Ingrown Nail",
            "effect":"You take a -1 penalty on attack rolls until you score a critical hit"
         },
         {
            "name":"Whirlwind of Shame",
            "effect":"Your attack deals damage to all targets adjacent to you except the original target"
         },
         {
            "name":"Battered",
            "effect":"You take a -2 penalty on skill checks and saves for 1d4 hours"
         },
         {
            "name":"Winds of Change",
            "effect":"You threaten no squares for 1d6 rounds"
         },
         {
            "name":"Unintentional Move",
            "effect":"Move 10 feet in a random direction and provoke attacks of opportunity as normal"
         },
         {
            "name":"Eye Strain",
            "effect":"You are blinded for 1 round"
         },
         {
            "name":"Hangnail",
            "effect":"If this was a claw attack, slam or unarmed strike, you cannot use that attack for 1d6 rounds"
         },
         {
            "name":"Brutal Collision",
            "effect":"Your attack hits, but you are stunned for 2 rounds (For save reduces the stun to 1 round)"
         },
         {
            "name":"Pinched Nerve",
            "effect":"If you had reach greater than 5 feet, it is reduced to 5 feet for 3 rounds"
         },
         {
            "name":"Overthink It",
            "effect":"Your target's armor and natural armor bonuses are doubled against you for 3 rounds"
         },
         {
            "name":"Punctured Foot",
            "effect":"You take 1d3 points of damage and your speed is halved until healed"
         },
         {
            "name":"Bone Bruise",
            "effect":"You take 1d2 point of Con damage"
         },
         {
            "name":"Bad Headbutt",
            "effect":"You are stunned for 1 round (Fort negates)"
         }
      ],
      "Ranged":[
         {
            "name":"Mix it Up",
            "effect":"You are unable to make ranged attacks for the next 1d6 rounds"
         },
         {
            "name":"Aim Carefully Next Time",
            "effect":"For 3 rounds, you must spend a full round action to make a single attack"
         },
         {
            "name":"Don't Hit Me!",
            "effect":"For 3 rounds, you take an additional -2 penalty on ranged attacks for each ally in melee combat with your target"
         },
         {
            "name":"Phantom Wind",
            "effect":"You compensate for a breeze which isn't there. You take -2 penalty on ranged attack rolls for 3 rounds"
         },
         {
            "name":"Recoil",
            "effect":"You move backward 1 square and fall prone"
         },
         {
            "name":"Amazing Miss",
            "effect":"You are stunned for 1 round (Fort negates)"
         },
         {
            "name":"Not My Pony",
            "effect":"Your attack hits the nearest allied animal or mount"
         },
         {
            "name":"Double Miss",
            "effect":"You use twice as much ammunition on this attack"
         },
         {
            "name":"Close to the Ear",
            "effect":"You are deafened until healed (DC 15 Heal Check)"
         },
         {
            "name":"Insecure",
            "effect":"You take a -1 penalty on attack rolls for 1d4 rounds or until you score a critical hit"
         },
         {
            "name":"In the Line of Fire",
            "effect":"Your attack hits the nearest ally and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Lowered Guard",
            "effect":"You provoke attacks of opportunity from all threatening foes"
         },
         {
            "name":"Weapon Jam",
            "effect":"If using a projectile weapon it does not function. Spend 1 standard action to clear"
         },
         {
            "name":"Um, oops",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"What are the Odds?",
            "effect":"If you made a thrown attack, you hit the target, but the weapon ends up in the target's possession"
         },
         {
            "name":"Lost Grip",
            "effect":"You can only take a move action next round"
         },
         {
            "name":"Pinch in Parts",
            "effect":"You take 1d6 points of damage"
         },
         {
            "name":"So much Blood",
            "effect":"You are sickened for 1d6 rounds"
         },
         {
            "name":"Huh?",
            "effect":"You are confused for 1 round"
         },
         {
            "name":"Seeing Double",
            "effect":"All your attacks have a 50% miss chance for 1 round"
         },
         {
            "name":"Misjudged the distance",
            "effect":"All attack rolls beyond the first ranged increment have triple the normal distance penalty for 3 rounds"
         },
         {
            "name":"Overcompensate",
            "effect":"All targets with cover gain an additional +4 bonus to AC against you for 3 rounds"
         },
         {
            "name":"Friendly Fire",
            "effect":"Your attack hits your ally closest to the target"
         },
         {
            "name":"Lost the Target",
            "effect":"You take a -4 penalty on all attack rolls for 1 round"
         },
         {
            "name":"Shot Your Foot",
            "effect":"You take 1d2 points of Dex damage and your speed is reduced by half until healed"
         },
         {
            "name":"Overthrow",
            "effect":"If attack was made with a thrown weapon, the weapon travels 5 times its range increment in a random direction"
         },
         {
            "name":"Tunnel Vision",
            "effect":"For the next 3 rounds, you have a +1 bonus on attack rolls, but you flat-footed"
         },
         {
            "name":"All Thumbs",
            "effect":"You lose your Dex bonus on attack rolls for 3 rounds"
         },
         {
            "name":"Bull's Eye",
            "effect":"Your shot ricochets and hits you near the eye. You are blinded for 1 round"
         },
         {
            "name":"Bad Alignment",
            "effect":"You take -4 penalty on all attacks with this weapon until repaired (DC 20 Craft check)"
         },
         {
            "name":"Cracked",
            "effect":"Your weapon (not ammunition) takes 1d6 points of damage, ignoring hardness"
         },
         {
            "name":"Whoops!",
            "effect":"You are knocked prone"
         },
         {
            "name":"Tied Up",
            "effect":"You become entangled in your gear until you spend a standard action to free yourself"
         },
         {
            "name":"Sprain",
            "effect":"You take 1d4 points of Dex damage"
         },
         {
            "name":"Nicked",
            "effect":"You take 1 point of bleed"
         },
         {
            "name":"Klutz",
            "effect":"You drop your weapon"
         },
         {
            "name":"Spilled Ammo",
            "effect":"Your ammunition falls from its container and takes 1d6 rounds to gather up"
         },
         {
            "name":"Head Rush",
            "effect":"You are sickened for 1d4 rounds"
         },
         {
            "name":"My Spleeny Bits!",
            "effect":"You take 1 point of Con damage"
         },
         {
            "name":"Notched Fingers",
            "effect":"You take 1d6 points of bleed"
         },
         {
            "name":"Torn Tendon",
            "effect":"You take 1 point of Dex bleed"
         },
         {
            "name":"Broken",
            "effect":"Your weapon is destroyed (Ref negates). Magic weapons use their own save bonus (DMG 214)"
         },
         {
            "name":"Everything you Got",
            "effect":"You are exhausted (Fort negates)"
         },
         {
            "name":"Snapped String",
            "effect":"If attack was made with a bow or crossbow, the string breaks and requires 1d3 round to fix"
         },
         {
            "name":"Wrong Weapon",
            "effect":"If you made a thrown attack, you throw a random object from your gear"
         },
         {
            "name":"Archer's Elbow",
            "effect":"You take a -2 penalty on all ranged attack rolls for 1d4 minutes"
         },
         {
            "name":"Wide Open",
            "effect":"You are flat-footed for 1 round"
         },
         {
            "name":"Backfire",
            "effect":"The attack deals damage to you instead of the target"
         },
         {
            "name":"Errant Aim",
            "effect":"Reroll attack against creature nearest the target (yourself excluded)"
         },
         {
            "name":"You'll Shoot Your Eye Out",
            "effect":"The attack hits you and is a critical threat. You must roll to confirm the critical hit"
         },
         {
            "name":"Arching Back",
            "effect":"You are fatigued"
         },
         {
            "name":"Awkward Attack",
            "effect":"You take -2 penalty to AC for 1d4 rounds"
         }
      ]
   }
};

export default effects;
