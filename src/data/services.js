import {
  Stethoscope, Ear, Wind, Eye, Droplets, ClipboardCheck, UserRoundCheck,
  Syringe, FileText, HeartPulse, Truck, ShieldCheck, Activity, HardHat,
} from 'lucide-react'

export const SERVICE_GROUPS = [
  {
    title: 'Occupational medicals',
    intro: 'Medical assessments that consider an employee’s health alongside the demands and risks of their role.',
    items: [
      { id: 'fitness-medicals', name: 'Baseline and periodic medicals', short: 'Pre-placement, periodic, transfer and exit examinations.', text: 'Occupational medical examinations at key stages of employment, with outcomes considered in relation to the employee’s role and workplace risks.', points: ['Pre-placement and baseline', 'Periodic, transfer and exit', 'Fitness-for-work and fitness-for-duty assessments', 'Return-to-work assessments'], icon: Stethoscope },
      { id: 'driver-medicals', name: 'Driver and PDP assessments', short: 'Medical assessments for drivers and safety-critical roles.', text: 'Assessments for drivers and employees in safety-critical positions, with attention to the health requirements of the work.', points: ['Driver medicals', 'Professional Driving Permit (PDP) assessments', 'Safety-critical workers'], icon: Truck },
    ],
  },
  {
    title: 'Medical surveillance and screening',
    intro: 'Monitoring and screening informed by occupational exposure and workplace health requirements.',
    items: [
      { id: 'audiometry', name: 'Audiometry', short: 'Occupational hearing tests and monitoring.', text: 'Hearing assessments to support monitoring of employees who may be exposed to workplace noise.', points: ['Baseline and periodic testing', 'Hearing conservation support'], icon: Ear },
      { id: 'lung-function', name: 'Lung function testing', short: 'Spirometry and respiratory health monitoring.', text: 'Lung function assessments for employees whose work may involve dust, fumes or other respiratory hazards.', points: ['Spirometry', 'Exposure-related monitoring'], icon: Wind },
      { id: 'vision-screening', name: 'Vision screening', short: 'Vision checks related to job requirements.', text: 'Screening to help assess visual capability where vision is relevant to safe job performance.', points: ['Visual acuity and other relevant screening'], icon: Eye },
      { id: 'biological-monitoring', name: 'Biological monitoring', short: 'Blood, urine and other exposure-related tests.', text: 'Biological monitoring and screening arranged according to the workplace exposure, applicable requirements and agreed company policies.', points: ['Blood and urine tests', 'Exposure-related monitoring', 'Drug testing by arrangement and subject to company policy'], icon: Droplets },
    ],
  },
  {
    title: 'Occupational health, risk and compliance',
    intro: 'Practical support for workplace health risks, employee support and occupational health requirements.',
    items: [
      { id: 'health-risk-assessments', name: 'Health risk assessments', short: 'Identify hazards and assess occupational health risks.', text: 'Risk-based support to help organisations understand workplace health hazards and consider appropriate controls.', points: ['Noise, dust and chemical exposures', 'Biological and ergonomic risks', 'Work at heights and heavy machinery'], icon: ClipboardCheck },
      { id: 'incapacity-management', name: 'Incapacity and return-to-work support', short: 'Guidance when ill health or injury affects work.', text: 'Occupational health input to support fair, practical management of incapacity, workplace accommodation and return-to-work planning.', points: ['Fitness and incapacity management', 'Workplace accommodation', 'Return-to-work programmes', 'Occupational injury and disease support'], icon: UserRoundCheck },
      { id: 'compliance-support', name: 'Occupational health compliance', short: 'Reporting, policies and practical guidance.', text: 'Support with occupational health reporting, surveillance trends and policy development relevant to your workplace.', points: ['Occupational health reports and trends', 'COIDA-related guidance', 'HIV/TB, hearing conservation and pregnancy policies', 'Absenteeism management'], icon: FileText },
    ],
  },
  {
    title: 'Wellness and mobile services',
    intro: 'Flexible support tailored to the needs of your organisation and workforce.',
    items: [
      { id: 'wellness-programmes', name: 'Workplace wellness', short: 'Wellness services arranged to suit your organisation.', text: 'Wellness initiatives can be discussed and arranged on request, based on your workforce and organisational priorities.', points: ['Workforce wellbeing', 'Preventive health initiatives'], icon: HeartPulse },
      { id: 'mobile-services', name: 'Mobile occupational health services', short: 'On-site services by arrangement.', text: 'Mobile service options can be discussed for organisations that need occupational health support at their workplace.', points: ['Company-site service by arrangement'], icon: Truck },
    ],
  },
]

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items)
