export interface Question {
  question: string
  answer: string
}

export interface Section {
  title: string
  questions: Question[]
}

export interface Gizmo {
  slug: string
  title: string
  subject: string
  subject_slug: string
  grade: string
  description: string
  sections: Section[]
}

const gizmos: Gizmo[] = [
  {
    slug: 'photosynthesis-lab',
    title: 'Photosynthesis Lab',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Explore how plants use light, water, and carbon dioxide to produce glucose and oxygen through photosynthesis.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What do plants need to make their own food?', answer: 'Plants need sunlight, water, and carbon dioxide (CO₂) to make their own food through photosynthesis.' },
          { question: 'What gas do plants release during photosynthesis?', answer: 'Plants release oxygen (O₂) as a byproduct of photosynthesis.' },
          { question: 'Where does photosynthesis take place in a plant cell?', answer: 'Photosynthesis takes place in the chloroplasts, which contain the green pigment chlorophyll.' },
        ],
      },
      {
        title: 'Activity A – Light Intensity',
        questions: [
          { question: 'What happens to the rate of photosynthesis as light intensity increases?', answer: 'As light intensity increases, the rate of photosynthesis increases until it reaches a maximum plateau.' },
          { question: 'Why does the rate of photosynthesis level off at high light intensities?', answer: 'The rate levels off because other factors (like CO₂ concentration or temperature) become limiting factors.' },
          { question: 'What is the equation for photosynthesis?', answer: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂' },
        ],
      },
    ],
  },
  {
    slug: 'cell-division',
    title: 'Cell Division',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '7-9',
    description: 'Observe the stages of mitosis and learn how cells divide to produce identical daughter cells.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'Why do cells need to divide?', answer: 'Cells divide for growth, repair of damaged tissues, and reproduction of organisms.' },
          { question: 'What is the name of the process by which body cells divide?', answer: 'The process is called mitosis.' },
          { question: 'How many chromosomes do human body cells have?', answer: 'Human body cells have 46 chromosomes (23 pairs).' },
        ],
      },
      {
        title: 'Activity A – Stages of Mitosis',
        questions: [
          { question: 'List the four stages of mitosis in order.', answer: 'Prophase, Metaphase, Anaphase, Telophase (PMAT).' },
          { question: 'During which phase do chromosomes line up in the middle of the cell?', answer: 'Chromosomes line up along the cell\'s equator during Metaphase.' },
          { question: 'How many daughter cells are produced by mitosis?', answer: 'Mitosis produces 2 genetically identical daughter cells.' },
        ],
      },
    ],
  },
  {
    slug: 'plate-tectonics',
    title: 'Plate Tectonics',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'Explore how tectonic plates move and interact to create earthquakes, volcanoes, and mountain ranges.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is the outermost layer of the Earth called?', answer: 'The outermost layer is called the crust (or lithosphere when combined with the upper mantle).' },
          { question: 'What causes tectonic plates to move?', answer: 'Tectonic plates move due to convection currents in the mantle caused by heat from Earth\'s core.' },
          { question: 'Name the three types of plate boundaries.', answer: 'Convergent (plates collide), divergent (plates move apart), and transform (plates slide past each other).' },
        ],
      },
      {
        title: 'Activity A – Plate Boundaries',
        questions: [
          { question: 'What landform is created when two continental plates collide?', answer: 'Mountain ranges are formed when two continental plates collide (e.g., the Himalayas).' },
          { question: 'What happens at a divergent boundary?', answer: 'At divergent boundaries, plates move apart and new crust is formed as magma rises to fill the gap.' },
        ],
      },
    ],
  },
  {
    slug: 'dna-analysis',
    title: 'DNA Analysis',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '9-11',
    description: 'Use gel electrophoresis to analyze DNA fragments and solve a crime using DNA fingerprinting techniques.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What does DNA stand for?', answer: 'DNA stands for Deoxyribonucleic Acid.' },
          { question: 'What are the four nitrogen bases found in DNA?', answer: 'Adenine (A), Thymine (T), Guanine (G), and Cytosine (C).' },
          { question: 'What is gel electrophoresis used for?', answer: 'Gel electrophoresis is used to separate DNA fragments by size using an electric current.' },
        ],
      },
      {
        title: 'Activity A – Gel Electrophoresis',
        questions: [
          { question: 'Which direction do DNA fragments move during electrophoresis?', answer: 'DNA fragments move toward the positive electrode (anode) because DNA is negatively charged.' },
          { question: 'Do smaller or larger DNA fragments travel farther in the gel?', answer: 'Smaller fragments travel farther because they move more easily through the gel matrix.' },
        ],
      },
    ],
  },
  {
    slug: 'ecosystems',
    title: 'Ecosystems',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Investigate how organisms interact with each other and their environment in a balanced ecosystem.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is an ecosystem?', answer: 'An ecosystem is a community of living organisms interacting with each other and their non-living environment.' },
          { question: 'What is the difference between a producer and a consumer?', answer: 'Producers make their own food through photosynthesis; consumers eat other organisms for energy.' },
          { question: 'What is a food chain?', answer: 'A food chain shows the transfer of energy from one organism to another in a sequence.' },
        ],
      },
      {
        title: 'Activity A – Food Webs',
        questions: [
          { question: 'What happens to a food web if one species is removed?', answer: 'Removing one species can cause a cascade effect — populations of prey may increase and predators may decrease, disrupting the balance.' },
          { question: 'What percentage of energy is transferred from one trophic level to the next?', answer: 'Only about 10% of energy is transferred from one trophic level to the next; the rest is lost as heat.' },
        ],
      },
    ],
  },
  {
    slug: 'natural-selection',
    title: 'Natural Selection',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '7-9',
    description: 'Simulate how natural selection acts on a population over time, leading to evolutionary change.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is natural selection?', answer: 'Natural selection is the process by which organisms with favorable traits survive and reproduce more successfully than those without.' },
          { question: 'Who proposed the theory of evolution by natural selection?', answer: 'Charles Darwin proposed the theory of evolution by natural selection.' },
          { question: 'What is a mutation?', answer: 'A mutation is a change in the DNA sequence that can introduce new traits into a population.' },
        ],
      },
      {
        title: 'Activity A – Survival of the Fittest',
        questions: [
          { question: 'What does "survival of the fittest" mean?', answer: '"Survival of the fittest" means that organisms best adapted to their environment are more likely to survive and pass on their genes.' },
          { question: 'How does camouflage help an organism survive?', answer: 'Camouflage helps organisms blend into their environment, making them harder for predators to spot.' },
        ],
      },
    ],
  },
  {
    slug: 'circulatory-system',
    title: 'Circulatory System',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Explore the structure and function of the human heart and circulatory system.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is the main function of the circulatory system?', answer: 'The circulatory system transports oxygen, nutrients, and waste products throughout the body.' },
          { question: 'How many chambers does the human heart have?', answer: 'The human heart has four chambers: two atria and two ventricles.' },
          { question: 'What is the difference between arteries and veins?', answer: 'Arteries carry oxygenated blood away from the heart; veins carry deoxygenated blood back to the heart.' },
        ],
      },
      {
        title: 'Activity A – Blood Flow',
        questions: [
          { question: 'Describe the path of blood through the heart.', answer: 'Blood enters the right atrium → right ventricle → lungs (to pick up oxygen) → left atrium → left ventricle → body.' },
          { question: 'What is the role of capillaries?', answer: 'Capillaries are tiny blood vessels where gas exchange occurs — oxygen moves into tissues and CO₂ moves into the blood.' },
        ],
      },
    ],
  },
  {
    slug: 'circuits',
    title: 'Circuits',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Build and test series and parallel circuits to understand how current, voltage, and resistance are related.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is electric current?', answer: 'Electric current is the flow of electric charge (electrons) through a conductor, measured in amperes (A).' },
          { question: 'What is voltage?', answer: 'Voltage is the electrical potential difference that drives current through a circuit, measured in volts (V).' },
          { question: 'What is resistance?', answer: 'Resistance is the opposition to the flow of electric current, measured in ohms (Ω).' },
        ],
      },
      {
        title: 'Activity A – Ohm\'s Law',
        questions: [
          { question: 'State Ohm\'s Law.', answer: 'Ohm\'s Law states that V = I × R, where V is voltage, I is current, and R is resistance.' },
          { question: 'What happens to current if resistance increases (voltage stays the same)?', answer: 'If resistance increases and voltage stays the same, current decreases (I = V/R).' },
        ],
      },
    ],
  },
  {
    slug: 'forces-and-motion',
    title: 'Forces and Motion',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Investigate how forces affect the motion of objects and explore Newton\'s laws of motion.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is a force?', answer: 'A force is a push or pull that can change the motion of an object, measured in newtons (N).' },
          { question: 'What is Newton\'s First Law of Motion?', answer: 'An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an unbalanced force (inertia).' },
          { question: 'What is the formula for calculating force?', answer: 'Force = mass × acceleration (F = ma).' },
        ],
      },
      {
        title: 'Activity A – Newton\'s Laws',
        questions: [
          { question: 'What is Newton\'s Third Law of Motion?', answer: 'For every action, there is an equal and opposite reaction.' },
          { question: 'How does friction affect motion?', answer: 'Friction is a force that opposes motion; it slows objects down and converts kinetic energy into heat.' },
        ],
      },
    ],
  },
  {
    slug: 'wave-properties',
    title: 'Wave Properties',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '7-9',
    description: 'Explore the properties of waves including amplitude, wavelength, frequency, and wave speed.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is a wave?', answer: 'A wave is a disturbance that transfers energy from one place to another without transferring matter.' },
          { question: 'What is the difference between transverse and longitudinal waves?', answer: 'In transverse waves, particles move perpendicular to wave direction; in longitudinal waves, particles move parallel to wave direction.' },
          { question: 'What is wavelength?', answer: 'Wavelength is the distance between two consecutive crests (or troughs) of a wave, measured in meters.' },
        ],
      },
      {
        title: 'Activity A – Wave Measurements',
        questions: [
          { question: 'What is the relationship between frequency and wavelength?', answer: 'Frequency and wavelength are inversely related: as frequency increases, wavelength decreases (wave speed = frequency × wavelength).' },
          { question: 'What is amplitude and what does it represent?', answer: 'Amplitude is the maximum displacement of a wave from its rest position; it represents the energy of the wave.' },
        ],
      },
    ],
  },
  {
    slug: 'chemical-reactions',
    title: 'Chemical Reactions',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '8-10',
    description: 'Investigate the signs of chemical reactions and explore factors that affect reaction rates.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is a chemical reaction?', answer: 'A chemical reaction is a process where substances (reactants) are transformed into new substances (products) with different properties.' },
          { question: 'What are four signs that a chemical reaction has occurred?', answer: 'Color change, gas production (bubbles), temperature change, and formation of a precipitate (solid).' },
          { question: 'What is the Law of Conservation of Mass?', answer: 'Matter cannot be created or destroyed in a chemical reaction; the total mass of reactants equals the total mass of products.' },
        ],
      },
      {
        title: 'Activity A – Reaction Rates',
        questions: [
          { question: 'How does temperature affect reaction rate?', answer: 'Increasing temperature speeds up reaction rate because particles move faster and collide more frequently with more energy.' },
          { question: 'What is a catalyst?', answer: 'A catalyst is a substance that speeds up a chemical reaction without being consumed in the process.' },
        ],
      },
    ],
  },
  {
    slug: 'density',
    title: 'Density',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Discover how density is calculated and why objects float or sink in different liquids.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is density?', answer: 'Density is the amount of mass in a given volume of a substance (Density = Mass ÷ Volume).' },
          { question: 'What are the units for density?', answer: 'Density is typically measured in g/cm³ (grams per cubic centimeter) or g/mL.' },
          { question: 'Why does ice float on water?', answer: 'Ice floats because it is less dense than liquid water (ice density ≈ 0.92 g/cm³; water density = 1.0 g/cm³).' },
        ],
      },
      {
        title: 'Activity A – Calculating Density',
        questions: [
          { question: 'An object has a mass of 50g and a volume of 25 cm³. What is its density?', answer: 'Density = 50g ÷ 25 cm³ = 2 g/cm³.' },
          { question: 'Will an object with a density of 0.8 g/cm³ float or sink in water?', answer: 'It will float because its density (0.8 g/cm³) is less than water\'s density (1.0 g/cm³).' },
        ],
      },
    ],
  },
  {
    slug: 'rock-cycle',
    title: 'Rock Cycle',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'Trace the journey of rocks as they transform between igneous, sedimentary, and metamorphic types.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What are the three main types of rocks?', answer: 'Igneous, sedimentary, and metamorphic rocks.' },
          { question: 'How are igneous rocks formed?', answer: 'Igneous rocks form when magma (underground) or lava (above ground) cools and solidifies.' },
          { question: 'What is weathering?', answer: 'Weathering is the breaking down of rocks into smaller pieces by wind, water, ice, or chemical processes.' },
        ],
      },
      {
        title: 'Activity A – Rock Transformations',
        questions: [
          { question: 'How do sedimentary rocks form?', answer: 'Sedimentary rocks form when sediments (sand, mud, shells) are deposited in layers and compacted over time.' },
          { question: 'What conditions create metamorphic rocks?', answer: 'Metamorphic rocks form when existing rocks are subjected to intense heat and pressure deep within the Earth.' },
        ],
      },
    ],
  },
  {
    slug: 'weather-patterns',
    title: 'Weather Patterns',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'Analyze weather data and learn how air masses, fronts, and pressure systems create weather patterns.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What causes wind?', answer: 'Wind is caused by differences in air pressure; air moves from high-pressure areas to low-pressure areas.' },
          { question: 'What is a cold front?', answer: 'A cold front is the boundary where a cold air mass pushes under a warm air mass, often causing storms and temperature drops.' },
          { question: 'What instrument measures air pressure?', answer: 'A barometer measures air pressure.' },
        ],
      },
      {
        title: 'Activity A – Air Masses',
        questions: [
          { question: 'What type of weather is associated with high pressure systems?', answer: 'High pressure systems are associated with clear, sunny, and calm weather.' },
          { question: 'What causes precipitation?', answer: 'Precipitation occurs when water vapor in the atmosphere cools and condenses into water droplets that become heavy enough to fall.' },
        ],
      },
    ],
  },
  {
    slug: 'solar-system',
    title: 'Solar System Explorer',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'Explore the planets, moons, and other objects in our solar system and compare their properties.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'How many planets are in our solar system?', answer: 'There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.' },
          { question: 'What is the difference between inner and outer planets?', answer: 'Inner planets (Mercury, Venus, Earth, Mars) are rocky and small; outer planets (Jupiter, Saturn, Uranus, Neptune) are gas giants and much larger.' },
          { question: 'What keeps planets in orbit around the Sun?', answer: 'Gravity from the Sun keeps planets in orbit; the planets\' forward motion balances the Sun\'s gravitational pull.' },
        ],
      },
      {
        title: 'Activity A – Planetary Comparisons',
        questions: [
          { question: 'Which planet has the most moons?', answer: 'Saturn has the most confirmed moons (over 140 as of recent discoveries).' },
          { question: 'Why is Pluto no longer classified as a planet?', answer: 'Pluto was reclassified as a dwarf planet in 2006 because it has not cleared its orbital neighborhood of other debris.' },
        ],
      },
    ],
  },
  {
    slug: 'linear-functions',
    title: 'Linear Functions',
    subject: 'Math',
    subject_slug: 'math',
    grade: '7-9',
    description: 'Explore linear functions by changing slope and y-intercept and observing effects on graphs.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is the slope-intercept form of a linear equation?', answer: 'y = mx + b, where m is the slope and b is the y-intercept.' },
          { question: 'What does the slope of a line represent?', answer: 'Slope represents the rate of change — how much y changes for every 1 unit increase in x (rise over run).' },
          { question: 'What is the y-intercept?', answer: 'The y-intercept is the point where the line crosses the y-axis (when x = 0).' },
        ],
      },
      {
        title: 'Activity A – Slope and Intercept',
        questions: [
          { question: 'What happens to the graph when you increase the slope?', answer: 'Increasing the slope makes the line steeper.' },
          { question: 'What happens to the graph when you change the y-intercept?', answer: 'Changing the y-intercept shifts the line up or down without changing its steepness.' },
        ],
      },
    ],
  },
  {
    slug: 'pythagorean-theorem',
    title: 'Pythagorean Theorem',
    subject: 'Math',
    subject_slug: 'math',
    grade: '7-9',
    description: 'Discover the Pythagorean theorem and apply it to find missing side lengths of right triangles.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is a right triangle?', answer: 'A right triangle is a triangle that has one 90-degree angle.' },
          { question: 'What is the hypotenuse?', answer: 'The hypotenuse is the longest side of a right triangle, opposite the right angle.' },
          { question: 'State the Pythagorean Theorem.', answer: 'a² + b² = c², where a and b are the legs and c is the hypotenuse of a right triangle.' },
        ],
      },
      {
        title: 'Activity A – Finding Missing Sides',
        questions: [
          { question: 'A right triangle has legs of 3 and 4. What is the hypotenuse?', answer: 'c² = 3² + 4² = 9 + 16 = 25, so c = 5.' },
          { question: 'Can the Pythagorean theorem be used on non-right triangles?', answer: 'No, the Pythagorean theorem only applies to right triangles.' },
        ],
      },
    ],
  },
  {
    slug: 'probability',
    title: 'Theoretical and Experimental Probability',
    subject: 'Math',
    subject_slug: 'math',
    grade: '6-8',
    description: 'Compare theoretical and experimental probability through simulations and discover the Law of Large Numbers.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is probability?', answer: 'Probability is the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain).' },
          { question: 'What is theoretical probability?', answer: 'Theoretical probability is the expected probability based on mathematical reasoning (favorable outcomes ÷ total outcomes).' },
          { question: 'What is experimental probability?', answer: 'Experimental probability is based on actual results from conducting an experiment or trial.' },
        ],
      },
      {
        title: 'Activity A – Coin Flips',
        questions: [
          { question: 'What is the theoretical probability of flipping heads on a fair coin?', answer: '1/2 or 0.5 or 50%.' },
          { question: 'Why might experimental probability differ from theoretical probability?', answer: 'Experimental probability differs due to random variation; with more trials, experimental probability gets closer to theoretical probability (Law of Large Numbers).' },
        ],
      },
    ],
  },
  {
    slug: 'slope-intercept',
    title: 'Slope-Intercept Form of a Line',
    subject: 'Math',
    subject_slug: 'math',
    grade: '8-10',
    description: 'Master the slope-intercept form y = mx + b and learn to write equations from graphs and tables.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'How do you calculate slope from two points?', answer: 'Slope = (y₂ - y₁) / (x₂ - x₁), also known as "rise over run".' },
          { question: 'What does a negative slope look like on a graph?', answer: 'A negative slope means the line goes downward from left to right.' },
          { question: 'What is a horizontal line\'s slope?', answer: 'A horizontal line has a slope of 0.' },
        ],
      },
      {
        title: 'Activity A – Writing Equations',
        questions: [
          { question: 'A line has slope 2 and y-intercept -3. Write its equation.', answer: 'y = 2x - 3.' },
          { question: 'How do you find the equation of a line from a graph?', answer: 'Identify the y-intercept (where line crosses y-axis) and calculate slope using two points, then write y = mx + b.' },
        ],
      },
    ],
  },
  {
    slug: 'human-karyotyping',
    title: 'Human Karyotyping',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '9-11',
    description: 'Arrange human chromosomes into a karyotype and identify chromosomal abnormalities.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is a karyotype?', answer: 'A karyotype is an organized image of all chromosomes in a cell, arranged in homologous pairs by size.' },
          { question: 'How many pairs of chromosomes do humans have?', answer: 'Humans have 23 pairs of chromosomes (46 total): 22 pairs of autosomes and 1 pair of sex chromosomes.' },
          { question: 'What determines biological sex in humans?', answer: 'The sex chromosomes determine biological sex: XX = female, XY = male.' },
        ],
      },
      {
        title: 'Activity A – Identifying Abnormalities',
        questions: [
          { question: 'What is Down syndrome caused by?', answer: 'Down syndrome (Trisomy 21) is caused by having three copies of chromosome 21 instead of two.' },
          { question: 'What is nondisjunction?', answer: 'Nondisjunction is the failure of chromosomes to separate properly during cell division, resulting in cells with abnormal chromosome numbers.' },
        ],
      },
    ],
  },
]

export function getAllGizmos(): Gizmo[] {
  return gizmos
}

export function getGizmoBySlug(slug: string): Gizmo | undefined {
  return gizmos.find((g) => g.slug === slug)
}

export function getRelatedGizmos(slug: string, limit = 3): Gizmo[] {
  const current = gizmos.find((g) => g.slug === slug)
  if (!current) return []
  return gizmos
    .filter((g) => g.slug !== slug && g.subject_slug === current.subject_slug)
    .slice(0, limit)
}
