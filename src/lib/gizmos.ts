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
  {
    slug: 'food-chain',
    title: 'Food Chain',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '5-7',
    description: 'Explore how energy flows through ecosystems via food chains and food webs.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is a producer?', answer: 'A producer is an organism that makes its own food using sunlight, such as plants and algae.' },
          { question: 'What is a consumer?', answer: 'A consumer is an organism that gets energy by eating other organisms.' },
          { question: 'What is a decomposer?', answer: 'A decomposer breaks down dead organisms and returns nutrients to the soil, such as fungi and bacteria.' },
        ],
      },
      {
        title: 'Activity A – Energy Flow',
        questions: [
          { question: 'In which direction does energy flow in a food chain?', answer: 'Energy flows from producers to primary consumers, then to secondary consumers, and so on up the chain.' },
          { question: 'What percentage of energy is transferred from one trophic level to the next?', answer: 'Only about 10% of energy is transferred from one trophic level to the next; the rest is lost as heat.' },
          { question: 'What happens to a food web if one species is removed?', answer: 'Removing one species can cause a cascade effect, increasing some populations and decreasing others, potentially destabilizing the ecosystem.' },
        ],
      },
    ],
  },
  {
    slug: 'human-respiratory-system',
    title: 'Human Respiratory System',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Investigate how the lungs and respiratory system deliver oxygen to the body and remove carbon dioxide.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is the main function of the respiratory system?', answer: 'The main function is to bring oxygen into the body and remove carbon dioxide through breathing.' },
          { question: 'What is the role of the diaphragm?', answer: 'The diaphragm is a dome-shaped muscle that contracts and relaxes to control breathing by changing the volume of the chest cavity.' },
        ],
      },
      {
        title: 'Activity A – Gas Exchange',
        questions: [
          { question: 'Where does gas exchange occur in the lungs?', answer: 'Gas exchange occurs in the alveoli, tiny air sacs surrounded by capillaries.' },
          { question: 'What gas moves from the alveoli into the blood?', answer: 'Oxygen (O₂) moves from the alveoli into the blood.' },
          { question: 'What gas moves from the blood into the alveoli?', answer: 'Carbon dioxide (CO₂) moves from the blood into the alveoli to be exhaled.' },
        ],
      },
    ],
  },
  {
    slug: 'magnetism',
    title: 'Magnetism',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '5-7',
    description: 'Explore magnetic fields, poles, and how magnets attract and repel each other.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What are the two poles of a magnet?', answer: 'The two poles are the north pole and the south pole.' },
          { question: 'What happens when two like poles are brought together?', answer: 'Like poles repel each other (N-N or S-S push apart).' },
          { question: 'What happens when two unlike poles are brought together?', answer: 'Unlike poles attract each other (N-S pull together).' },
        ],
      },
      {
        title: 'Activity A – Magnetic Fields',
        questions: [
          { question: 'What is a magnetic field?', answer: 'A magnetic field is the region around a magnet where magnetic forces can be detected, represented by field lines.' },
          { question: 'Which materials are attracted to magnets?', answer: 'Ferromagnetic materials such as iron, nickel, and cobalt are attracted to magnets.' },
          { question: 'What is Earth\'s magnetic field caused by?', answer: 'Earth\'s magnetic field is caused by the movement of molten iron in its outer core.' },
        ],
      },
    ],
  },
  {
    slug: 'energy-transformations',
    title: 'Energy Transformations',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Investigate how energy changes from one form to another in everyday situations.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is kinetic energy?', answer: 'Kinetic energy is the energy of motion. Any moving object has kinetic energy.' },
          { question: 'What is potential energy?', answer: 'Potential energy is stored energy based on an object\'s position or condition.' },
          { question: 'State the law of conservation of energy.', answer: 'Energy cannot be created or destroyed; it can only be transformed from one form to another.' },
        ],
      },
      {
        title: 'Activity A – Types of Energy',
        questions: [
          { question: 'What energy transformation occurs in a light bulb?', answer: 'Electrical energy is transformed into light energy and heat energy.' },
          { question: 'What energy transformation occurs when a ball is dropped?', answer: 'Gravitational potential energy is transformed into kinetic energy as the ball falls.' },
          { question: 'What energy transformation occurs in a solar panel?', answer: 'Light energy (solar energy) is transformed into electrical energy.' },
        ],
      },
    ],
  },
  {
    slug: 'states-of-matter',
    title: 'States of Matter',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '5-7',
    description: 'Explore the properties of solids, liquids, and gases and how matter changes between states.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What are the three common states of matter?', answer: 'The three common states of matter are solid, liquid, and gas.' },
          { question: 'How are the particles arranged in a solid?', answer: 'In a solid, particles are tightly packed in a fixed arrangement and vibrate in place.' },
          { question: 'How are the particles arranged in a gas?', answer: 'In a gas, particles are far apart and move rapidly in all directions.' },
        ],
      },
      {
        title: 'Activity A – Phase Changes',
        questions: [
          { question: 'What is melting?', answer: 'Melting is the phase change from solid to liquid, which requires the addition of heat energy.' },
          { question: 'What is evaporation?', answer: 'Evaporation is the phase change from liquid to gas at the surface of a liquid.' },
          { question: 'What is condensation?', answer: 'Condensation is the phase change from gas to liquid, which releases heat energy.' },
        ],
      },
    ],
  },
  {
    slug: 'water-cycle',
    title: 'Water Cycle',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '5-7',
    description: 'Trace the continuous movement of water through Earth\'s systems via evaporation, condensation, and precipitation.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is the water cycle?', answer: 'The water cycle is the continuous movement of water through Earth\'s systems: evaporation, condensation, precipitation, and collection.' },
          { question: 'What energy source drives the water cycle?', answer: 'The Sun provides the energy that drives the water cycle by heating water and causing evaporation.' },
        ],
      },
      {
        title: 'Activity A – Stages of the Water Cycle',
        questions: [
          { question: 'What is evaporation?', answer: 'Evaporation is the process by which liquid water is converted to water vapor by solar energy.' },
          { question: 'What is condensation in the water cycle?', answer: 'Condensation is when water vapor cools and changes back into liquid water, forming clouds.' },
          { question: 'What is precipitation?', answer: 'Precipitation is water that falls from clouds to Earth\'s surface as rain, snow, sleet, or hail.' },
          { question: 'What is transpiration?', answer: 'Transpiration is the process by which plants release water vapor through their leaves into the atmosphere.' },
        ],
      },
    ],
  },
  {
    slug: 'volcanoes',
    title: 'Volcanoes',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'Investigate how volcanoes form, erupt, and shape Earth\'s surface.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is magma?', answer: 'Magma is molten rock found beneath Earth\'s surface.' },
          { question: 'What is lava?', answer: 'Lava is magma that has reached Earth\'s surface through a volcanic eruption.' },
          { question: 'Where do most volcanoes occur?', answer: 'Most volcanoes occur along tectonic plate boundaries, especially at subduction zones and mid-ocean ridges.' },
        ],
      },
      {
        title: 'Activity A – Types of Volcanoes',
        questions: [
          { question: 'What is a shield volcano?', answer: 'A shield volcano has broad, gently sloping sides formed by low-viscosity lava flows, like those in Hawaii.' },
          { question: 'What is a composite volcano (stratovolcano)?', answer: 'A composite volcano has steep sides built up from alternating layers of lava and ash, and tends to have explosive eruptions.' },
          { question: 'What causes a volcanic eruption?', answer: 'Eruptions are caused by pressure buildup from magma and dissolved gases rising through the crust.' },
        ],
      },
    ],
  },
  {
    slug: 'moon-phases',
    title: 'Moon Phases',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '5-7',
    description: 'Explore the phases of the Moon and understand why the Moon appears to change shape.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'Why does the Moon appear to change shape?', answer: 'The Moon appears to change shape because we see different portions of its sunlit side as it orbits Earth.' },
          { question: 'How long does it take the Moon to complete one orbit around Earth?', answer: 'The Moon takes approximately 29.5 days to complete one orbit around Earth.' },
        ],
      },
      {
        title: 'Activity A – Phases of the Moon',
        questions: [
          { question: 'What is a new moon?', answer: 'A new moon occurs when the Moon is between Earth and the Sun, and the side facing Earth is not illuminated.' },
          { question: 'What is a full moon?', answer: 'A full moon occurs when Earth is between the Sun and the Moon, and the entire sunlit side of the Moon faces Earth.' },
          { question: 'What are the phases in order starting from new moon?', answer: 'New Moon → Waxing Crescent → First Quarter → Waxing Gibbous → Full Moon → Waning Gibbous → Third Quarter → Waning Crescent → New Moon.' },
        ],
      },
    ],
  },
  {
    slug: 'atoms-and-molecules',
    title: 'Atoms and Molecules',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Explore the structure of atoms and how atoms combine to form molecules.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is an atom?', answer: 'An atom is the smallest unit of an element that retains the chemical properties of that element.' },
          { question: 'What are the three subatomic particles?', answer: 'The three subatomic particles are protons (positive charge), neutrons (no charge), and electrons (negative charge).' },
          { question: 'Where are protons and neutrons found in an atom?', answer: 'Protons and neutrons are found in the nucleus at the center of the atom.' },
        ],
      },
      {
        title: 'Activity A – Atomic Structure',
        questions: [
          { question: 'What is the atomic number of an element?', answer: 'The atomic number is the number of protons in the nucleus of an atom, which determines the element\'s identity.' },
          { question: 'What is a molecule?', answer: 'A molecule is formed when two or more atoms bond together chemically.' },
          { question: 'What is the difference between an element and a compound?', answer: 'An element contains only one type of atom, while a compound contains two or more different types of atoms chemically bonded together.' },
        ],
      },
    ],
  },
  {
    slug: 'gravity-and-orbits',
    title: 'Gravity and Orbits',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-9',
    description: 'Investigate how gravity governs the motion of planets, moons, and satellites in orbit.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is gravity?', answer: 'Gravity is a force of attraction between objects with mass. The greater the mass, the stronger the gravitational pull.' },
          { question: 'Who first described the law of universal gravitation?', answer: 'Sir Isaac Newton first described the law of universal gravitation in 1687.' },
        ],
      },
      {
        title: 'Activity A – Orbital Motion',
        questions: [
          { question: 'What keeps planets in orbit around the Sun?', answer: 'Gravity from the Sun pulls planets inward while their forward velocity keeps them moving in a curved path, resulting in a stable orbit.' },
          { question: 'How does distance affect gravitational force?', answer: 'Gravitational force decreases as distance increases. If the distance doubles, the gravitational force decreases to one-quarter of its original strength.' },
          { question: 'What is the difference between mass and weight?', answer: 'Mass is the amount of matter in an object (constant everywhere), while weight is the gravitational force acting on that mass (varies by location).' },
        ],
      },
    ],
  },
  {
    slug: 'balancing-chemical-equations',
    title: 'Balancing Chemical Equations',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '8-10',
    description: 'Learn to balance chemical equations by adjusting coefficients to satisfy the law of conservation of mass.',
    sections: [
      {
        title: 'Getting Started',
        questions: [
          { question: 'Why do we need to balance chemical equations?', answer: 'Because atoms can\'t be created or destroyed in a reaction - whatever goes in must come out.' },
          { question: 'What\'s a coefficient in a chemical equation?', answer: 'The number in front of a chemical formula that tells you how many molecules you have.' },
          { question: 'Can you change subscripts to balance an equation?', answer: 'No! Changing subscripts changes the actual substance. You can only change coefficients.' },
        ],
      },
      {
        title: 'Practice Problems',
        questions: [
          { question: 'How do you know when an equation is balanced?', answer: 'When you have the same number of each type of atom on both sides of the arrow.' },
          { question: 'What\'s a good strategy for balancing equations?', answer: 'Start with the most complex molecule, balance elements that appear in only one reactant and product first, save hydrogen and oxygen for last.' },
        ],
      },
    ],
  },
  {
    slug: 'quadratic-functions',
    title: 'Quadratic Functions',
    subject: 'Math',
    subject_slug: 'math',
    grade: '9-11',
    description: 'Graph parabolas and find key features like vertex, axis of symmetry, and roots of quadratic functions.',
    sections: [
      {
        title: 'Understanding Parabolas',
        questions: [
          { question: 'What does a quadratic function look like?', answer: 'It\'s written as y = ax² + bx + c and its graph is a U-shaped curve called a parabola.' },
          { question: 'How do you know if a parabola opens up or down?', answer: 'If a is positive, it opens up. If a is negative, it opens down.' },
          { question: 'What\'s the vertex of a parabola?', answer: 'The highest or lowest point on the parabola - the turning point.' },
        ],
      },
      {
        title: 'Finding Key Features',
        questions: [
          { question: 'What\'s the axis of symmetry?', answer: 'A vertical line through the vertex that divides the parabola into two mirror images. Formula: x = -b/(2a).' },
          { question: 'What are the roots or zeros of a quadratic?', answer: 'The x-values where the parabola crosses the x-axis (where y = 0).' },
        ],
      },
    ],
  },
  {
    slug: 'heredity',
    title: 'Inheritance and Punnett Squares',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '7-9',
    description: 'Use Punnett squares to predict how traits are passed from parents to offspring.',
    sections: [
      {
        title: 'Basic Genetics',
        questions: [
          { question: 'What\'s the difference between genotype and phenotype?', answer: 'Genotype is the genetic code (like Bb), phenotype is what you actually see (like brown eyes).' },
          { question: 'What does homozygous mean?', answer: 'Having two identical alleles for a trait (BB or bb).' },
          { question: 'What does heterozygous mean?', answer: 'Having two different alleles for a trait (Bb).' },
        ],
      },
      {
        title: 'Using Punnett Squares',
        questions: [
          { question: 'If both parents are Bb, what\'s the chance their kid is bb?', answer: '25% or 1/4. The Punnett square shows BB, Bb, Bb, bb.' },
          { question: 'What\'s a dominant allele?', answer: 'An allele that shows up in the phenotype even if there\'s only one copy (represented by capital letter).' },
        ],
      },
    ],
  },
  {
    slug: 'sound-waves',
    title: 'Sound Waves and Hearing',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Learn how sound travels as waves and how our ears detect different pitches and volumes.',
    sections: [
      {
        title: 'How Sound Works',
        questions: [
          { question: 'What type of wave is sound?', answer: 'A longitudinal wave - particles vibrate back and forth in the same direction the wave travels.' },
          { question: 'Can sound travel through space?', answer: 'No, sound needs a medium (like air, water, or solid) to travel. Space is a vacuum.' },
          { question: 'What makes a sound loud or quiet?', answer: 'Amplitude - bigger vibrations make louder sounds.' },
        ],
      },
      {
        title: 'Pitch and Frequency',
        questions: [
          { question: 'What makes a sound high-pitched or low-pitched?', answer: 'Frequency - high frequency = high pitch, low frequency = low pitch.' },
          { question: 'Does sound travel faster in air or water?', answer: 'Water. Sound travels faster through denser materials because particles are closer together.' },
        ],
      },
    ],
  },
  {
    slug: 'fractions',
    title: 'Adding and Subtracting Fractions',
    subject: 'Math',
    subject_slug: 'math',
    grade: '5-7',
    description: 'Master adding and subtracting fractions with like and unlike denominators.',
    sections: [
      {
        title: 'Like Denominators',
        questions: [
          { question: 'How do you add fractions with the same denominator?', answer: 'Just add the numerators and keep the denominator the same. Example: 2/5 + 1/5 = 3/5.' },
          { question: 'What about subtracting fractions with the same denominator?', answer: 'Subtract the numerators and keep the denominator. Example: 4/7 - 2/7 = 2/7.' },
        ],
      },
      {
        title: 'Unlike Denominators',
        questions: [
          { question: 'What do you do when denominators are different?', answer: 'Find a common denominator (usually the least common multiple), convert both fractions, then add or subtract.' },
          { question: 'Add 1/3 + 1/4. What do you get?', answer: 'Common denominator is 12. So 4/12 + 3/12 = 7/12.' },
        ],
      },
    ],
  },
  {
    slug: 'earthquakes',
    title: 'Earthquakes and Seismic Waves',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'Understand what causes earthquakes and how seismic waves help scientists study Earth\'s interior.',
    sections: [
      {
        title: 'What Causes Earthquakes',
        questions: [
          { question: 'Why do earthquakes happen?', answer: 'Tectonic plates get stuck as they try to move past each other. When they finally slip, the sudden release of energy causes an earthquake.' },
          { question: 'What\'s the focus of an earthquake?', answer: 'The point underground where the earthquake starts.' },
          { question: 'What\'s the epicenter?', answer: 'The point on Earth\'s surface directly above the focus.' },
        ],
      },
      {
        title: 'Seismic Waves',
        questions: [
          { question: 'What are P-waves?', answer: 'Primary waves - the fastest seismic waves that can travel through solids, liquids, and gases.' },
          { question: 'What are S-waves?', answer: 'Secondary waves - slower than P-waves and can only travel through solids.' },
          { question: 'How do scientists use seismic waves?', answer: 'By studying how waves travel through Earth, they can figure out what\'s inside (like finding the liquid outer core because S-waves can\'t pass through it).' },
        ],
      },
    ],
  },
  {
    slug: 'human-digestive-system',
    title: 'Digestive System',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Follow the path of food through the digestive system and learn how nutrients are absorbed.',
    sections: [
      {
        title: 'The Digestive Journey',
        questions: [
          { question: 'Where does digestion start?', answer: 'In the mouth - saliva contains enzymes that start breaking down carbohydrates.' },
          { question: 'What does the stomach do?', answer: 'It churns food and mixes it with acid and enzymes to break it down into a liquid called chyme.' },
          { question: 'Where are most nutrients absorbed?', answer: 'In the small intestine - it has tiny finger-like projections called villi that absorb nutrients into the bloodstream.' },
        ],
      },
      {
        title: 'Organs and Functions',
        questions: [
          { question: 'What does the liver do in digestion?', answer: 'It produces bile, which helps break down fats.' },
          { question: 'What\'s the job of the large intestine?', answer: 'It absorbs water from undigested food and forms solid waste.' },
        ],
      },
    ],
  },
  {
    slug: 'light-and-reflection',
    title: 'Light and Reflection',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '6-8',
    description: 'Study how light reflects off surfaces and how mirrors form images.',
    sections: [
      {
        title: 'How Light Behaves',
        questions: [
          { question: 'What\'s the law of reflection?', answer: 'The angle of incidence equals the angle of reflection - light bounces off at the same angle it hits.' },
          { question: 'What\'s the difference between regular and diffuse reflection?', answer: 'Regular reflection is off smooth surfaces (like mirrors) where light bounces in one direction. Diffuse reflection is off rough surfaces where light scatters.' },
        ],
      },
      {
        title: 'Mirrors and Images',
        questions: [
          { question: 'What kind of image does a flat mirror make?', answer: 'A virtual image - same size as the object, upright, and appears to be behind the mirror.' },
          { question: 'What\'s a concave mirror?', answer: 'A mirror that curves inward - it can focus light and create magnified images.' },
          { question: 'What\'s a convex mirror?', answer: 'A mirror that curves outward - it creates smaller, wider-angle images (used in car side mirrors).' },
        ],
      },
    ],
  },
  {
    slug: 'area-of-polygons',
    title: 'Area of Polygons',
    subject: 'Math',
    subject_slug: 'math',
    grade: '6-8',
    description: 'Calculate the area of triangles, rectangles, parallelograms, and other polygons.',
    sections: [
      {
        title: 'Basic Shapes',
        questions: [
          { question: 'How do you find the area of a rectangle?', answer: 'Length × width. If it\'s 5 cm by 3 cm, area = 15 cm².' },
          { question: 'What\'s the formula for triangle area?', answer: '½ × base × height. The height has to be perpendicular to the base.' },
          { question: 'How do you find the area of a parallelogram?', answer: 'Base × height (same as rectangle, but height is the perpendicular distance between parallel sides).' },
        ],
      },
      {
        title: 'More Complex Shapes',
        questions: [
          { question: 'How do you find the area of a trapezoid?', answer: '½ × (base₁ + base₂) × height. Average the two parallel sides, then multiply by height.' },
          { question: 'What if you have an irregular polygon?', answer: 'Break it into triangles and rectangles, find each area, then add them up.' },
        ],
      },
    ],
  },
  {
    slug: 'climate-change',
    title: 'Carbon Cycle and Climate',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '7-10',
    description: 'Learn how carbon moves through Earth\'s systems and how human activities affect climate.',
    sections: [
      {
        title: 'The Carbon Cycle',
        questions: [
          { question: 'How does carbon move between the atmosphere and living things?', answer: 'Plants take in CO₂ during photosynthesis, animals eat plants and release CO₂ through respiration.' },
          { question: 'What are carbon sinks?', answer: 'Places that store carbon for long periods - like oceans, forests, and fossil fuels underground.' },
          { question: 'What releases carbon into the atmosphere?', answer: 'Burning fossil fuels, deforestation, volcanic eruptions, and cellular respiration.' },
        ],
      },
      {
        title: 'Climate Impact',
        questions: [
          { question: 'What\'s the greenhouse effect?', answer: 'Gases like CO₂ and methane trap heat in the atmosphere, keeping Earth warm enough for life.' },
          { question: 'Why is too much CO₂ a problem?', answer: 'It strengthens the greenhouse effect, causing global temperatures to rise faster than ecosystems can adapt.' },
        ],
      },
    ],
  },
  {
    slug: 'protein-synthesis',
    title: 'RNA and Protein Synthesis',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '9-11',
    description: 'Follow the process of transcription and translation to see how DNA codes for proteins.',
    sections: [
      {
        title: 'DNA to RNA',
        questions: [
          { question: 'What\'s transcription?', answer: 'The process where DNA is copied into messenger RNA (mRNA) in the nucleus.' },
          { question: 'How is RNA different from DNA?', answer: 'RNA is single-stranded, has uracil (U) instead of thymine (T), and has ribose sugar instead of deoxyribose.' },
          { question: 'What does mRNA do?', answer: 'It carries the genetic instructions from DNA in the nucleus to the ribosomes in the cytoplasm.' },
        ],
      },
      {
        title: 'Making Proteins',
        questions: [
          { question: 'What\'s translation?', answer: 'The process where ribosomes read mRNA and build proteins by linking amino acids together.' },
          { question: 'What\'s a codon?', answer: 'A three-nucleotide sequence on mRNA that codes for one amino acid.' },
          { question: 'What does tRNA do?', answer: 'Transfer RNA brings the correct amino acid to the ribosome based on the mRNA codon.' },
        ],
      },
    ],
  },
  {
    slug: 'acids-and-bases',
    title: 'Acids, Bases, and pH',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '7-9',
    description: 'Test the pH of different substances and learn what makes something acidic or basic.',
    sections: [
      {
        title: 'Understanding pH',
        questions: [
          { question: 'What does pH measure?', answer: 'How acidic or basic a solution is, on a scale from 0 to 14.' },
          { question: 'What pH is neutral?', answer: '7 - that\'s pure water.' },
          { question: 'What pH range is acidic? Basic?', answer: 'Below 7 is acidic, above 7 is basic (alkaline).' },
        ],
      },
      {
        title: 'Properties and Examples',
        questions: [
          { question: 'What are some properties of acids?', answer: 'Sour taste, turn blue litmus paper red, react with metals to produce hydrogen gas. Examples: lemon juice, vinegar, stomach acid.' },
          { question: 'What are some properties of bases?', answer: 'Bitter taste, slippery feel, turn red litmus paper blue. Examples: soap, baking soda, bleach.' },
          { question: 'What happens when you mix an acid and a base?', answer: 'They neutralize each other, forming water and a salt.' },
        ],
      },
    ],
  },
  {
    slug: 'systems-of-equations',
    title: 'Solving Systems of Equations',
    subject: 'Math',
    subject_slug: 'math',
    grade: '8-10',
    description: 'Solve systems of linear equations using graphing, substitution, and elimination methods.',
    sections: [
      {
        title: 'What\'s a System',
        questions: [
          { question: 'What\'s a system of equations?', answer: 'Two or more equations with the same variables. You\'re looking for values that make all equations true at the same time.' },
          { question: 'What does the solution represent on a graph?', answer: 'The point where the lines intersect - the (x, y) coordinates that satisfy both equations.' },
        ],
      },
      {
        title: 'Solution Methods',
        questions: [
          { question: 'How does substitution work?', answer: 'Solve one equation for a variable, then plug that expression into the other equation.' },
          { question: 'How does elimination work?', answer: 'Add or subtract the equations to eliminate one variable, solve for the other, then substitute back.' },
          { question: 'What if the lines are parallel?', answer: 'No solution - the lines never intersect.' },
        ],
      },
    ],
  },
  {
    slug: 'animal-behavior',
    title: 'Animal Behavior and Adaptations',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Study how animals behave and adapt to survive in their environments.',
    sections: [
      {
        title: 'Types of Behavior',
        questions: [
          { question: 'What\'s the difference between innate and learned behavior?', answer: 'Innate behavior is instinctive (born knowing it), learned behavior comes from experience.' },
          { question: 'Give an example of innate behavior.', answer: 'Baby sea turtles crawling to the ocean right after hatching, or birds building nests.' },
          { question: 'Give an example of learned behavior.', answer: 'A dog learning to sit on command, or a bird learning its species\' song.' },
        ],
      },
      {
        title: 'Survival Adaptations',
        questions: [
          { question: 'What\'s camouflage?', answer: 'When an animal\'s coloring helps it blend into its surroundings to hide from predators or sneak up on prey.' },
          { question: 'What\'s mimicry?', answer: 'When a harmless animal looks like a dangerous one to scare off predators (like a harmless snake with colors similar to a venomous one).' },
        ],
      },
    ],
  },
  {
    slug: 'electricity-and-magnetism',
    title: 'Electromagnetism',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '8-10',
    description: 'Discover the connection between electricity and magnetism by building electromagnets.',
    sections: [
      {
        title: 'Making Electromagnets',
        questions: [
          { question: 'What\'s an electromagnet?', answer: 'A magnet created by running electric current through a wire coiled around an iron core.' },
          { question: 'How is an electromagnet different from a regular magnet?', answer: 'You can turn an electromagnet on and off by controlling the electric current. Regular magnets are always magnetic.' },
          { question: 'How can you make an electromagnet stronger?', answer: 'Use more coils of wire, increase the current, or use a better iron core.' },
        ],
      },
      {
        title: 'Real-World Uses',
        questions: [
          { question: 'Where are electromagnets used?', answer: 'Electric motors, speakers, MRI machines, scrapyard cranes, doorbells, and hard drives.' },
          { question: 'What did Oersted discover?', answer: 'That electric current creates a magnetic field - he noticed a compass needle moved when near a wire with current flowing through it.' },
        ],
      },
    ],
  },
  {
    slug: 'exponents',
    title: 'Exponents and Powers',
    subject: 'Math',
    subject_slug: 'math',
    grade: '6-8',
    description: 'Learn the rules of exponents and how to simplify expressions with powers.',
    sections: [
      {
        title: 'Exponent Basics',
        questions: [
          { question: 'What does 5³ mean?', answer: '5 × 5 × 5 = 125. The exponent tells you how many times to multiply the base by itself.' },
          { question: 'What\'s any number to the power of 0?', answer: '1. For example, 7⁰ = 1, 100⁰ = 1.' },
          { question: 'What\'s a negative exponent mean?', answer: 'It means the reciprocal. 2⁻³ = 1/(2³) = 1/8.' },
        ],
      },
      {
        title: 'Exponent Rules',
        questions: [
          { question: 'How do you multiply powers with the same base?', answer: 'Add the exponents. x⁵ × x³ = x⁸.' },
          { question: 'How do you divide powers with the same base?', answer: 'Subtract the exponents. x⁷ ÷ x² = x⁵.' },
          { question: 'What about a power raised to another power?', answer: 'Multiply the exponents. (x²)³ = x⁶.' },
        ],
      },
    ],
  },
  {
    slug: 'weathering-and-erosion',
    title: 'Weathering and Erosion',
    subject: 'Earth & Space Science',
    subject_slug: 'earth-space',
    grade: '6-8',
    description: 'See how rocks break down over time and how sediment is transported and deposited.',
    sections: [
      {
        title: 'Breaking Down Rocks',
        questions: [
          { question: 'What\'s the difference between weathering and erosion?', answer: 'Weathering breaks rocks into smaller pieces. Erosion moves those pieces to new locations.' },
          { question: 'What\'s mechanical weathering?', answer: 'Physical breakdown without changing the rock\'s composition - like ice wedging, plant roots, or temperature changes.' },
          { question: 'What\'s chemical weathering?', answer: 'When the rock\'s minerals change through chemical reactions - like rust forming on iron or acid rain dissolving limestone.' },
        ],
      },
      {
        title: 'Moving Sediment',
        questions: [
          { question: 'What causes erosion?', answer: 'Water, wind, ice, and gravity move weathered rock and soil.' },
          { question: 'What\'s deposition?', answer: 'When eroded sediment settles in a new place - like a river delta or sand dune.' },
        ],
      },
    ],
  },
  {
    slug: 'plant-cells',
    title: 'Plant and Animal Cells',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Compare plant and animal cells and identify the function of different organelles.',
    sections: [
      {
        title: 'Cell Structures',
        questions: [
          { question: 'What do both plant and animal cells have?', answer: 'Nucleus, cell membrane, cytoplasm, mitochondria, ribosomes, and endoplasmic reticulum.' },
          { question: 'What do only plant cells have?', answer: 'Cell wall, chloroplasts, and a large central vacuole.' },
          { question: 'What does the nucleus do?', answer: 'Controls cell activities and stores DNA (the cell\'s genetic information).' },
        ],
      },
      {
        title: 'Organelle Functions',
        questions: [
          { question: 'What do mitochondria do?', answer: 'Break down sugar to produce energy (ATP) - the powerhouse of the cell.' },
          { question: 'What do chloroplasts do?', answer: 'Capture sunlight and make food through photosynthesis (only in plant cells).' },
          { question: 'What does the cell membrane do?', answer: 'Controls what enters and leaves the cell.' },
        ],
      },
    ],
  },
  {
    slug: 'ratios-and-proportions',
    title: 'Ratios and Proportions',
    subject: 'Math',
    subject_slug: 'math',
    grade: '6-8',
    description: 'Use ratios to compare quantities and solve proportion problems.',
    sections: [
      {
        title: 'Understanding Ratios',
        questions: [
          { question: 'What\'s a ratio?', answer: 'A comparison of two quantities. Can be written as 3:4, 3/4, or "3 to 4".' },
          { question: 'If there are 12 boys and 15 girls, what\'s the ratio of boys to girls?', answer: '12:15, which simplifies to 4:5.' },
        ],
      },
      {
        title: 'Solving Proportions',
        questions: [
          { question: 'What\'s a proportion?', answer: 'An equation showing two ratios are equal, like 2/3 = 4/6.' },
          { question: 'How do you solve a proportion with a missing value?', answer: 'Cross multiply. If 3/4 = x/12, then 3 × 12 = 4 × x, so x = 9.' },
          { question: 'If 5 apples cost $2, how much do 15 apples cost?', answer: 'Set up proportion: 5/2 = 15/x. Cross multiply: 5x = 30, so x = $6.' },
        ],
      },
    ],
  },
  {
    slug: 'nervous-system',
    title: 'Nervous System',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '7-9',
    description: 'Learn how the brain, spinal cord, and nerves work together to control the body.',
    sections: [
      {
        title: 'Structure of the Nervous System',
        questions: [
          { question: 'What are the two main parts of the nervous system?', answer: 'The central nervous system (CNS - brain and spinal cord) and the peripheral nervous system (all other nerves).' },
          { question: 'What\'s a neuron?', answer: 'A nerve cell that sends electrical signals through the body.' },
          { question: 'What are the three parts of a neuron?', answer: 'Dendrites (receive signals), cell body (processes signals), and axon (sends signals out).' },
        ],
      },
      {
        title: 'How Signals Travel',
        questions: [
          { question: 'What\'s a synapse?', answer: 'The tiny gap between two neurons where signals jump from one cell to the next using chemicals called neurotransmitters.' },
          { question: 'What\'s a reflex?', answer: 'An automatic response to a stimulus that happens without thinking - the signal goes to the spinal cord and back before your brain even processes it.' },
        ],
      },
    ],
  },
  {
    slug: 'statistics',
    title: 'Mean, Median, Mode, and Range',
    subject: 'Math',
    subject_slug: 'math',
    grade: '5-7',
    description: 'Calculate and interpret measures of central tendency and spread in data sets.',
    sections: [
      {
        title: 'Measures of Center',
        questions: [
          { question: 'How do you find the mean?', answer: 'Add all values, then divide by the number of values.' },
          { question: 'How do you find the median?', answer: 'Sort the numbers from smallest to largest. If there\'s an odd count, the middle number is the median. If even, average the two middle numbers.' },
          { question: 'What\'s the mode?', answer: 'The value that appears most often. A data set can have more than one mode.' },
        ],
      },
      {
        title: 'Understanding the Data',
        questions: [
          { question: 'What\'s the range?', answer: 'The difference between the maximum and minimum values. Shows how spread out the data is.' },
          { question: 'When is the median a better measure of center than the mean?', answer: 'When there are outliers (extremely high or low values) that would skew the mean.' },
        ],
      },
    ],
  },
  {
    slug: 'refraction-and-lenses',
    title: 'Refraction and Lenses',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '7-9',
    description: 'See how light bends when it passes through different materials and how lenses focus light.',
    sections: [
      {
        title: 'Refraction',
        questions: [
          { question: 'What is refraction?', answer: 'The bending of light when it passes from one material into another (like from air into glass).' },
          { question: 'Why does light bend?', answer: 'It changes speed when it enters a different medium - light slows down in denser materials.' },
          { question: 'What\'s a real-life example of refraction?', answer: 'A straw looking bent in a glass of water, or a rainbow forming when sunlight passes through raindrops.' },
        ],
      },
      {
        title: 'Types of Lenses',
        questions: [
          { question: 'What does a convex (converging) lens do?', answer: 'Bends light inward to a focal point - used in magnifying glasses and camera lenses.' },
          { question: 'What does a concave (diverging) lens do?', answer: 'Spreads light outward - used in glasses for nearsighted people.' },
        ],
      },
    ],
  },
  {
    slug: 'biomes',
    title: 'World Biomes',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Compare the major biomes of the world and the organisms adapted to live in each one.',
    sections: [
      {
        title: 'Types of Biomes',
        questions: [
          { question: 'What defines a biome?', answer: 'A large region with a characteristic climate, soil type, and community of plants and animals.' },
          { question: 'What\'s the difference between a tropical rainforest and a temperate forest?', answer: 'Tropical rainforests are near the equator with high heat and rainfall year-round. Temperate forests have seasons and less rainfall.' },
          { question: 'What characterizes a desert biome?', answer: 'Very little precipitation (less than 25 cm/year) and extreme temperature swings.' },
        ],
      },
      {
        title: 'Adaptations',
        questions: [
          { question: 'How do cacti survive in the desert?', answer: 'They store water in their thick stems, have waxy coatings to reduce evaporation, and have spines instead of leaves.' },
          { question: 'How do animals in the tundra stay warm?', answer: 'They have thick fur or feathers, a layer of fat (blubber), and dark skin to absorb more heat.' },
        ],
      },
    ],
  },
  {
    slug: 'stoichiometry',
    title: 'Stoichiometry',
    subject: 'Physical Science',
    subject_slug: 'physical-science',
    grade: '10-12',
    description: 'Use mole ratios from balanced equations to calculate quantities of reactants and products.',
    sections: [
      {
        title: 'The Mole',
        questions: [
          { question: 'What is a mole in chemistry?', answer: '6.022 × 10²³ particles (Avogadro\'s number). Like a "dozen" but for atoms and molecules.' },
          { question: 'What\'s molar mass?', answer: 'The mass of one mole of a substance, in g/mol. Equal to the atomic or molecular mass from the periodic table.' },
          { question: 'How many grams is one mole of water (H₂O)?', answer: '18 g/mol. Hydrogen is 2×1 = 2, oxygen is 16, total = 18.' },
        ],
      },
      {
        title: 'Stoichiometry Calculations',
        questions: [
          { question: 'What\'s a mole ratio?', answer: 'The ratio of moles of any two substances in a balanced equation, used to convert between amounts.' },
          { question: 'What\'s a limiting reactant?', answer: 'The reactant that runs out first and stops the reaction. It determines how much product you can make.' },
        ],
      },
    ],
  },
  {
    slug: 'decimals-and-percents',
    title: 'Decimals, Fractions, and Percents',
    subject: 'Math',
    subject_slug: 'math',
    grade: '5-7',
    description: 'Convert between decimals, fractions, and percents and use them to solve real-world problems.',
    sections: [
      {
        title: 'Conversions',
        questions: [
          { question: 'How do you convert a fraction to a decimal?', answer: 'Divide the numerator by the denominator. 3/4 = 3 ÷ 4 = 0.75.' },
          { question: 'How do you convert a decimal to a percent?', answer: 'Multiply by 100 (or move the decimal point two places to the right). 0.85 = 85%.' },
          { question: 'Convert 35% to a fraction.', answer: '35/100, which simplifies to 7/20.' },
        ],
      },
      {
        title: 'Using Percents',
        questions: [
          { question: 'What is 20% of 50?', answer: '50 × 0.20 = 10.' },
          { question: 'A shirt costs $40 and is 25% off. How much do you pay?', answer: 'Discount = 40 × 0.25 = $10. You pay $40 - $10 = $30.' },
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
