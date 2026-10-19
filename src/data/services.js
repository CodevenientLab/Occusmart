import {
  Stethoscope, Ear, Wind, Eye, Droplets, ClipboardCheck,
  UserRoundCheck, Syringe, FileText, HeartPulse,
} from 'lucide-react'

export const SERVICE_GROUPS = [
  {
    title: 'Medical assessments',
    intro: 'Examinations and tests that show whether employees are fit for their roles and exposures.',
    items: [
      {
        id: 'fitness-medicals',
        name: 'Fitness medicals',
        short: 'Pre-employment, periodic, transfer and exit examinations.',
        text: 'Medical examinations at every stage of employment, carried out in line with legal requirements, so you know each employee is fit for the work they do.',
        points: ['Pre-employment and baseline', 'Periodic and transfer', 'Exit examinations', 'Fitness for work and duty outcomes'],
        icon: Stethoscope,
      },
      {
        id: 'audiometry',
        name: 'Occupational hearing tests',
        short: 'Audiometry and hearing conservation.',
        text: 'Hearing testing and monitoring for noise-induced hearing loss, carried out in accordance with regulations.',
        points: ['Baseline and ongoing testing', 'Noise-induced hearing loss monitoring'],
        icon: Ear,
      },
      {
        id: 'lung-function',
        name: 'Lung function testing',
        short: 'Spirometry and respiratory health.',
        text: 'Assessment and monitoring of respiratory health for employees who work around dust, fumes or other airborne hazards.',
        points: ['Spirometry', 'Monitoring of at-risk employees'],
        icon: Wind,
      },
      {
        id: 'vision-screening',
        name: 'Vision screening',
        short: 'Visual acuity, colour vision and visual fields.',
        text: 'Screening that checks the visual requirements of the job, including roles where clear vision is a safety matter.',
        points: ['Visual acuity', 'Colour vision', 'Visual fields'],
        icon: Eye,
      },
      {
        id: 'biological-monitoring',
        name: 'Biological monitoring',
        short: 'Blood, urine and exposure-related tests.',
        text: 'Baseline and ongoing health monitoring for employees exposed to hazardous substances, including drug and alcohol screening.',
        points: ['Blood and urine tests', 'Exposure-related monitoring', 'Drug and alcohol screening'],
        icon: Droplets,
      },
    ],
  },
  {
    title: 'Risk and compliance',
    intro: 'Clear records and practical advice that help you meet your legal obligations.',
    items: [
      {
        id: 'health-risk-assessments',
        name: 'Health risk assessments',
        short: 'Identify hazards, evaluate risk, recommend controls.',
        text: 'We identify workplace health hazards, evaluate the risks they pose and recommend effective controls.',
        points: ['Hazard identification', 'Risk evaluation', 'Recommended controls'],
        icon: ClipboardCheck,
      },
      {
        id: 'occupational-health-reporting',
        name: 'Occupational health reporting',
        short: 'Compliance support and surveillance records.',
        text: 'Detailed reporting, compliance support and health surveillance records that stand up when you need them.',
        points: ['Detailed reports', 'Compliance support', 'Health surveillance records'],
        icon: FileText,
      },
    ],
  },
  {
    title: 'Care and prevention',
    intro: 'Support for employees before problems start and while they recover.',
    items: [
      {
        id: 'incapacity-management',
        name: 'Medical incapacity management',
        short: 'Fair, compliant support when ill health or injury affects work.',
        text: 'Support for managing employees whose ill health or injury affects their work, so that outcomes are fair and compliant.',
        points: ['Incapacity due to ill health or injury', 'Fair and compliant outcomes'],
        icon: UserRoundCheck,
      },
      {
        id: 'vaccination-programmes',
        name: 'Vaccination programmes',
        short: 'Workplace immunisation and preventive healthcare.',
        text: 'Workplace vaccination services that protect employees and reduce health risks across your teams.',
        points: ['Immunisations', 'Preventive healthcare'],
        icon: Syringe,
      },
      {
        id: 'wellness-programmes',
        name: 'Wellness programmes',
        short: 'Healthy lifestyles and wellbeing.',
        text: 'Programmes that promote healthy lifestyles and wellbeing, with a focus on prevention and long-term productivity.',
        points: ['Lifestyle and wellbeing', 'Prevention focus'],
        icon: HeartPulse,
      },
    ],
  },
]

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items)
