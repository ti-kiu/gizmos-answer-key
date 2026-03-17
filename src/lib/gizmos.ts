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
          {
            question: 'What do plants need to make their own food?',
            answer: 'Plants need sunlight, water, and carbon dioxide (CO₂) to make their own food through photosynthesis.',
          },
          {
            question: 'What gas do plants release during photosynthesis?',
            answer: 'Plants release oxygen (O₂) as a byproduct of photosynthesis.',
          },
          {
            question: 'Where does photosynthesis take place in a plant cell?',
            answer: 'Photosynthesis takes place in the chloroplasts, which contain the green pigment chlorophyll.',
          },
        ],
      },
      {
        title: 'Activity A – Light Intensity',
        questions: [
          {
            question: 'What happens to the rate of photosynthesis as light intensity increases?',
            answer: 'As light intensity increases, the rate of photosynthesis increases until it reaches a maximum plateau.',
          },
          {
            question: 'Why does the rate of photosynthesis level off at high light intensities?',
            answer: 'The rate levels off because other factors (like CO₂ concentration or temperature) become limiting factors.',
          },
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
          {
            question: 'Why do cells need to divide?',
            answer: 'Cells divide for growth, repair of damaged tissues, and reproduction of organisms.',
          },
          {
            question: 'What is the name of the process by which body cells divide?',
            answer: 'The process is called mitosis.',
          },
          {
            question: 'How many chromosomes do human body cells have?',
            answer: 'Human body cells have 46 chromosomes (23 pairs).',
          },
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
          {
            question: 'What is the outermost layer of the Earth called?',
            answer: 'The outermost layer of the Earth is called the crust (or lithosphere when combined with the upper mantle).',
          },
          {
            question: 'What causes tectonic plates to move?',
            answer: 'Tectonic plates move due to convection currents in the mantle caused by heat from Earth\'s core.',
          },
          {
            question: 'Name the three types of plate boundaries.',
            answer: 'The three types are: convergent (plates collide), divergent (plates move apart), and transform (plates slide past each other).',
          },
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
