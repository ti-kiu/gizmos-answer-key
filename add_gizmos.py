import re

new_gizmos = """
  ,
  {
    slug: 'ecosystem-dynamics',
    title: 'Ecosystem Dynamics',
    subject: 'Life Science',
    subject_slug: 'life-science',
    grade: '6-8',
    description: 'Explore how energy flows and matter cycles through ecosystems, and how changes affect biodiversity.',
    sections: [
      {
        title: 'Prior Knowledge Questions',
        questions: [
          { question: 'What is an ecosystem?', answer: 'An ecosystem is a community of living organisms interacting with each other and their non-living environment.' },
          { question: 'What is the difference between a food chain and a food web?', answer: 'A food chain shows a single path of energy flow, while a food web shows multiple interconnected feeding relationships.' },
          { question: 'What are producers in an ecosystem?', answer: 'Producers are organisms (mainly plants) that make their own food through photosynthesis and form the base of food chains.' },
        ],
      },
      {
        title: 'Activity A – Energy Flow',
        questions: [
          { question: 'What percentage of energy is typically transferred from one trophic level to the next?', answer: 'About 10% of energy is transferred to the next trophic level; the rest is lost as heat.' },
          { question: 'Why are there fewer organisms at higher trophic levels?', answer: 'Because energy is lost at each level, less energy is available to support organisms at higher levels.' },
          { question: 'What would happen to a food web if the primary producers were removed?', answer: 'All consumers would eventually die because there would be no energy entering the ecosystem.' },
        ],
      },
    ],
  },
"""

with open('src/lib/gizmos.ts', 'r') as f:
    content = f.read()

export_idx = content.find('export function getAllGizmos')
arr_end = content.rfind(']', 0, export_idx)

print(f"Inserting at index {arr_end}")
print(f"Context: {repr(content[arr_end-30:arr_end+5])}")

new_content = content[:arr_end] + new_gizmos.rstrip() + '\n' + content[arr_end:]

with open('src/lib/gizmos.ts', 'w') as f:
    f.write(new_content)

print("Done!")
