export const products = [
  {
    id: "universal-tensile-tester",
    name: "UTM-5000 Universal Testing Machine",
    tagline: "500kN electromechanical tensile & compression tester",
    description:
      "High-precision universal testing machine for tensile, compression, flexural, and shear testing of metals, polymers, composites, and construction materials with automated data acquisition.",
    category: "mechanical",
    price: 89500,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Load Capacity", value: "500 kN (112,000 lbf)" },
      { label: "Speed Range", value: "0.001 – 500 mm/min" },
      { label: "Accuracy", value: "±0.5% of reading (Class 0.5)" },
      { label: "Stroke", value: "1200 mm vertical clearance" },
      { label: "Control", value: "Closed-loop servo with extensometer feedback" },
      { label: "Standards", value: "ASTM E4, ISO 7500-1, EN 10002-2" },
    ],
    featured: true,
    launchedAt: "2026-01-04",
  },
  {
    id: "impact-tester-charpy",
    name: "ImpactPro Charpy/Izod Tester",
    tagline: "450J pendulum impact tester with digital readout",
    description:
      "Precision impact testing for metals, plastics, and composites with automated specimen positioning, digital energy measurement, and temperature chamber integration for sub-zero testing.",
    category: "mechanical",
    price: 42800,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Capacity", value: "450 J maximum impact energy" },
      { label: "Accuracy", value: "±1% of indicated value" },
      { label: "Standards", value: "ASTM E23, ISO 148-1, EN 10045" },
      { label: "Temperature Range", value: "-196°C to +300°C (with chamber)" },
      { label: "Display", value: "Digital LCD with data logging" },
      { label: "Automation", value: "Pneumatic specimen positioning" },
    ],
    featured: true,
    launchedAt: "2025-11-12",
  },
  {
    id: "hardness-tester-rockwell",
    name: "RockMaster Digital Hardness Tester",
    tagline: "Automated Rockwell/Brinell/Vickers hardness testing",
    description:
      "Multi-scale hardness tester with motorized turret, CCD optical measurement, and automated conversion between Rockwell, Brinell, Vickers, and Shore scales with statistical analysis.",
    category: "mechanical",
    price: 38900,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Scales", value: "Rockwell (HRA/HRB/HRC), Brinell, Vickers" },
      { label: "Load Range", value: "1 kgf – 3000 kgf" },
      { label: "Accuracy", value: "±0.5 HR, ±3% HV/HB" },
      { label: "Turret", value: "6-position motorized indenter" },
      { label: "Measurement", value: "CCD camera with auto-focus" },
      { label: "Standards", value: "ASTM E18, E10, E92, ISO 6506/6507/6508" },
    ],
    featured: true,
    launchedAt: "2026-02-08",
  },
  {
    id: "fatigue-tester",
    name: "CycleMax Servo-Hydraulic Fatigue Tester",
    tagline: "250kN dynamic fatigue testing system",
    description:
      "High-frequency servo-hydraulic testing machine for tension-compression, rotating bending, and torsional fatigue with real-time crack propagation monitoring and S-N curve generation.",
    category: "mechanical",
    price: 185000,
    image:
      "https://images.unsplash.com/photo-1581092152835-30ab079f29f0?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Load Capacity", value: "±250 kN dynamic" },
      { label: "Frequency", value: "0.01 – 100 Hz" },
      { label: "Waveforms", value: "Sine, triangle, square, custom" },
      { label: "Stroke", value: "±100 mm" },
      { label: "Control Modes", value: "Load, strain, displacement" },
      { label: "Standards", value: "ASTM E466, E606, ISO 1099" },
    ],
    featured: false,
    launchedAt: "2025-09-30",
  },
  {
    id: "torsion-tester",
    name: "TorquePro Torsion Testing Machine",
    tagline: "5000 Nm torsional testing with angle measurement",
    description:
      "Precision torsion tester for shafts, fasteners, and materials with bi-directional loading, high-resolution angle encoder, and automated failure detection for yield and ultimate strength.",
    category: "mechanical",
    price: 67500,
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Torque Capacity", value: "5000 Nm (3686 lbf·ft)" },
      { label: "Speed Range", value: "0.1 – 60 RPM" },
      { label: "Angle Resolution", value: "0.01° optical encoder" },
      { label: "Accuracy", value: "±0.5% torque, ±0.1% angle" },
      { label: "Grips", value: "Pneumatic collet chucks" },
      { label: "Standards", value: "ASTM E143, ISO 7800" },
    ],
    featured: false,
    launchedAt: "2025-12-22",
  },
  {
    id: "compression-tester",
    name: "CompressMax Concrete & Cube Tester",
    tagline: "3000kN compression testing for construction materials",
    description:
      "Heavy-duty compression tester for concrete cubes, cylinders, blocks, and paving materials with digital load cell, automatic peak detection, and compliance reporting for construction QC.",
    category: "materials",
    price: 52000,
    image:
      "https://images.unsplash.com/photo-1580894906472-dc66f1dc8bd1?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Load Capacity", value: "3000 kN (674,000 lbf)" },
      { label: "Platen Size", value: "300 × 300 mm" },
      { label: "Loading Rate", value: "0.1 – 15 mm/min" },
      { label: "Accuracy", value: "±1% Class 1" },
      { label: "Specimen Types", value: "Cubes, cylinders, blocks, cores" },
      { label: "Standards", value: "ASTM C39, BS 1881, EN 12390" },
    ],
    featured: false,
    launchedAt: "2026-01-16",
  },
  {
    id: "abrasion-tester",
    name: "AbraScan Taber Abrasion Tester",
    tagline: "Rotary platform abrasion & wear testing",
    description:
      "Precision abrasion tester for coatings, plastics, textiles, and flooring with dual abrading wheels, vacuum dust collection, and automated cycle counting for wear resistance evaluation.",
    category: "materials",
    price: 28400,
    image:
      "https://images.unsplash.com/photo-1555617807-4b4efeaf03f4?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Load Range", value: "250 – 1000 g per wheel" },
      { label: "Speed", value: "60 or 72 RPM" },
      { label: "Specimen Size", value: "Up to 125 mm diameter" },
      { label: "Wheels", value: "CS-10, CS-17, H-18, H-22" },
      { label: "Cycles", value: "Programmable up to 999,999" },
      { label: "Standards", value: "ASTM D4060, ISO 5470, TAPPI T476" },
    ],
    featured: true,
    launchedAt: "2025-10-18",
  },
  {
    id: "melt-flow-indexer",
    name: "FlowIndex Melt Flow Rate Tester",
    tagline: "Automated MFR/MVR testing for thermoplastics",
    description:
      "Precision melt flow indexer with automatic cutting, weighing, and calculation of MFR/MVR for quality control of polyethylene, polypropylene, and engineering plastics.",
    category: "materials",
    price: 18250,
    image:
      "https://images.unsplash.com/photo-1552914983-acc6672a35a4?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Temperature Range", value: "50 – 400°C ±0.2°C" },
      { label: "Load Range", value: "0.325 – 21.6 kg" },
      { label: "Cutting", value: "Automatic pneumatic cutter" },
      { label: "Display", value: "Touchscreen with data export" },
      { label: "Barrel", value: "Hardened steel, chrome-plated" },
      { label: "Standards", value: "ASTM D1238, ISO 1133" },
    ],
    featured: false,
    launchedAt: "2026-01-30",
  },
  {
    id: "viscometer-rotational",
    name: "ViscoTech Rotational Viscometer",
    tagline: "Digital viscosity measurement 1–2M cP",
    description:
      "Precision rotational viscometer with interchangeable spindles, temperature control, and rheology software for paints, adhesives, oils, and food products.",
    category: "materials",
    price: 14200,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Range", value: "1 – 2,000,000 cP (mPa·s)" },
      { label: "Accuracy", value: "±1% of full scale" },
      { label: "Speed Range", value: "0.1 – 200 RPM" },
      { label: "Spindles", value: "8 standard + optional UL adapter" },
      { label: "Temperature", value: "Optional bath -10 to +100°C" },
      { label: "Standards", value: "ASTM D2196, ISO 2555" },
    ],
    featured: true,
    launchedAt: "2025-08-14",
  },
  {
    id: "spectrophotometer-uv",
    name: "SpectraView UV-Vis Spectrophotometer",
    tagline: "Double-beam UV-Vis with 0.5nm resolution",
    description:
      "High-performance UV-Visible spectrophotometer for chemical analysis, quality control, and research with scanning, kinetics, and multi-component analysis modes.",
    category: "analytical",
    price: 32600,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Wavelength Range", value: "190 – 1100 nm" },
      { label: "Bandwidth", value: "0.5, 1, 2, 4 nm selectable" },
      { label: "Accuracy", value: "±0.3 nm wavelength" },
      { label: "Photometric Range", value: "-4 to +4 Abs" },
      { label: "Light Source", value: "Deuterium + tungsten halogen" },
      { label: "Software", value: "Scanning, kinetics, quantitation" },
    ],
    featured: false,
    launchedAt: "2025-07-22",
  },
  {
    id: "moisture-analyzer",
    name: "MoistureMax Halogen Analyzer",
    tagline: "Rapid moisture determination 0.001% resolution",
    description:
      "Precision halogen moisture analyzer with fast heating, automatic shutoff, and programmable drying profiles for pharmaceuticals, food, and chemicals.",
    category: "analytical",
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Capacity", value: "110 g" },
      { label: "Readability", value: "0.001% / 0.1 mg" },
      { label: "Temperature Range", value: "40 – 230°C" },
      { label: "Heating", value: "Halogen 400W" },
      { label: "Drying Modes", value: "Standard, gentle, step, rapid" },
      { label: "Display", value: "Touchscreen with USB export" },
    ],
    featured: false,
    launchedAt: "2025-11-05",
  },
  {
    id: "salt-spray-chamber",
    name: "CorroTest Salt Spray Chamber",
    tagline: "1000L corrosion testing per ASTM B117",
    description:
      "Automated salt fog chamber for accelerated corrosion testing of coatings, metals, and finishes with precise temperature/humidity control and programmable spray cycles.",
    category: "environmental",
    price: 48500,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Chamber Volume", value: "1000 L (35 cu ft)" },
      { label: "Temperature Range", value: "35 ± 2°C controlled" },
      { label: "Spray Rate", value: "1-2 mL/hr per 80 cm²" },
      { label: "Construction", value: "PVC-lined fiberglass" },
      { label: "Control", value: "PLC with touchscreen" },
      { label: "Standards", value: "ASTM B117, G85, ISO 9227" },
    ],
    featured: false,
    launchedAt: "2025-10-09",
  },
  {
    id: "thermal-chamber",
    name: "ThermalCycle Environmental Chamber",
    tagline: "Temperature/humidity cycling -70 to +180°C",
    description:
      "Programmable environmental chamber for thermal shock, humidity, and temperature cycling with rapid ramp rates, data logging, and remote monitoring.",
    category: "environmental",
    price: 72000,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Temperature Range", value: "-70 to +180°C" },
      { label: "Humidity Range", value: "10 – 98% RH" },
      { label: "Chamber Volume", value: "800 L" },
      { label: "Ramp Rate", value: "5°C/min heating, 3°C/min cooling" },
      { label: "Uniformity", value: "±2°C, ±3% RH" },
      { label: "Standards", value: "IEC 60068, MIL-STD-810" },
    ],
    featured: false,
    launchedAt: "2026-01-11",
  },
  {
    id: "vibration-shaker",
    name: "VibraForce Electrodynamic Shaker",
    tagline: "50kN force vibration testing system",
    description:
      "High-performance electrodynamic shaker for sine, random, and shock vibration testing with slip table, environmental chamber integration, and multi-axis control.",
    category: "environmental",
    price: 195000,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Force Rating", value: "50 kN sine peak" },
      { label: "Frequency Range", value: "5 – 3000 Hz" },
      { label: "Displacement", value: "51 mm peak-to-peak" },
      { label: "Velocity", value: "2 m/s" },
      { label: "Armature", value: "600 mm diameter" },
      { label: "Standards", value: "MIL-STD-810, IEC 60068-2-6, ASTM D999" },
    ],
    featured: true,
    launchedAt: "2025-09-03",
  },
  {
    id: "dust-chamber",
    name: "DustGuard IP Test Chamber",
    tagline: "IP5X/IP6X dust ingress protection testing",
    description:
      "Automated dust chamber for IP code verification with talcum powder circulation, vacuum system, and programmable test duration per IEC 60529.",
    category: "environmental",
    price: 38000,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Chamber Volume", value: "500 L" },
      { label: "Dust Type", value: "Talcum powder per IEC" },
      { label: "Circulation", value: "Blower with adjustable flow" },
      { label: "Vacuum", value: "Integrated 2 kPa system" },
      { label: "Duration", value: "Programmable 1-999 min" },
      { label: "Standards", value: "IEC 60529, ISO 20653" },
    ],
    featured: false,
    launchedAt: "2025-12-01",
  },
  {
    id: "water-spray-tester",
    name: "AquaShield IPX Water Spray Tester",
    tagline: "IPX1-IPX9K water ingress testing",
    description:
      "Comprehensive water spray test equipment for IP rating verification with drip, spray, jet, and high-pressure nozzles plus turntable and programmable sequences.",
    category: "environmental",
    price: 44500,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Test Levels", value: "IPX1 through IPX9K" },
      { label: "Turntable", value: "360° rotation, variable speed" },
      { label: "Nozzles", value: "Drip, spray, oscillating, jet" },
      { label: "Pressure", value: "Up to 100 bar (IPX9K)" },
      { label: "Flow Rate", value: "Calibrated per test level" },
      { label: "Standards", value: "IEC 60529, ISO 20653" },
    ],
    featured: false,
    launchedAt: "2025-11-28",
  },
  {
    id: "flammability-tester",
    name: "FlameSafe UL94 Flammability Tester",
    tagline: "Horizontal/vertical burn testing chamber",
    description:
      "Automated flammability tester for plastics and textiles with gas burner, timer, and observation window for UL94 HB/V-0/V-1/V-2 classification.",
    category: "safety",
    price: 22800,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Test Modes", value: "Horizontal, Vertical, 45°" },
      { label: "Burner", value: "Methane/propane with flow control" },
      { label: "Flame Height", value: "20 mm ±1 mm" },
      { label: "Timer", value: "Digital with auto-shutoff" },
      { label: "Chamber", value: "Stainless steel with viewing window" },
      { label: "Standards", value: "UL 94, IEC 60695-11-10, ASTM D635" },
    ],
    featured: true,
    launchedAt: "2025-08-19",
  },
  {
    id: "oxygen-index-tester",
    name: "OxyIndex Limiting Oxygen Tester",
    tagline: "LOI measurement for flame retardancy",
    description:
      "Precision oxygen index apparatus for determining minimum oxygen concentration to support combustion in plastics, textiles, and composites.",
    category: "safety",
    price: 19400,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Oxygen Range", value: "0 – 100% adjustable" },
      { label: "Flow Rate", value: "40 ± 2 L/min" },
      { label: "Accuracy", value: "±0.1% O₂" },
      { label: "Column", value: "500 mm glass with diffuser" },
      { label: "Igniter", value: "Propane with pilot flame" },
      { label: "Standards", value: "ASTM D2863, ISO 4589, BS 2782" },
    ],
    featured: false,
    launchedAt: "2026-02-14",
  },
  {
    id: "smoke-density-chamber",
    name: "SmokeScan Density Chamber",
    tagline: "NBS smoke density per ASTM E662",
    description:
      "Automated smoke density chamber with photometric system, radiant heater, and data acquisition for flaming and non-flaming smoke generation testing.",
    category: "safety",
    price: 54000,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Chamber Volume", value: "0.51 m³ (18 cu ft)" },
      { label: "Heat Flux", value: "2.5 W/cm² radiant panel" },
      { label: "Photometer", value: "White light with detector" },
      { label: "Measurement", value: "Specific optical density (Ds)" },
      { label: "Control", value: "PC-based with real-time graphing" },
      { label: "Standards", value: "ASTM E662, ISO 5659, NES 711" },
    ],
    featured: false,
    launchedAt: "2025-10-25",
  },
  {
    id: "cone-calorimeter",
    name: "HeatRelease Cone Calorimeter",
    tagline: "Heat release rate & fire hazard testing",
    description:
      "Advanced cone calorimeter for measuring heat release, smoke production, and toxic gas generation with oxygen consumption calorimetry and mass loss measurement.",
    category: "safety",
    price: 128000,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Heat Flux", value: "0 – 100 kW/m²" },
      { label: "Measurements", value: "HRR, THR, MLR, smoke, CO/CO₂" },
      { label: "Heater", value: "Truncated cone radiant" },
      { label: "Load Cell", value: "5 kg with 0.01 g resolution" },
      { label: "Gas Analysis", value: "O₂, CO, CO₂ analyzers" },
      { label: "Standards", value: "ISO 5660, ASTM E1354, NFPA 271" },
    ],
    featured: true,
    launchedAt: "2025-12-10",
  },
  {
    id: "peel-tester",
    name: "PeelForce Adhesion Tester",
    tagline: "90°/180° peel strength measurement",
    description:
      "Precision peel tester for adhesive tapes, labels, laminates, and coatings with motorized carriage, digital force gauge, and programmable peel angles.",
    category: "materials",
    price: 16800,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Force Range", value: "0 – 500 N" },
      { label: "Peel Angles", value: "90° and 180° fixtures" },
      { label: "Speed Range", value: "10 – 300 mm/min" },
      { label: "Accuracy", value: "±0.5% of reading" },
      { label: "Specimen Width", value: "Up to 50 mm" },
      { label: "Standards", value: "ASTM D903, D1876, PSTC-101" },
    ],
    featured: false,
    launchedAt: "2025-09-17",
  },
  {
    id: "calibration-weights",
    name: "PrecisionMass Calibration Weight Set",
    tagline: "OIML E2 class weight set 1mg – 20kg",
    description:
      "NIST-traceable calibration weight set with certificate for balance and scale verification, stainless steel construction, and fitted case.",
    category: "calibration",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    details: [
      { label: "Range", value: "1 mg – 20 kg (27 pieces)" },
      { label: "Class", value: "OIML E2 / ASTM Class 1" },
      { label: "Material", value: "Stainless steel 316" },
      { label: "Certificate", value: "NIST-traceable included" },
      { label: "Case", value: "Aluminum fitted case" },
      { label: "Standards", value: "OIML R111, ASTM E617" },
    ],
    featured: false,
    launchedAt: "2026-01-20",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "mechanical", label: "Mechanical Testing" },
  { id: "materials", label: "Materials Testing" },
  { id: "environmental", label: "Environmental" },
  { id: "safety", label: "Safety & Fire" },
  { id: "analytical", label: "Analytical" },
  { id: "calibration", label: "Calibration" },
];

export const stories = [
  {
    tag: "Manufacturing excellence",
    title: "Aerospace composites testing at scale",
    copy:
      "See how AeroTech reduced material qualification cycles by 60% using our UTM-5000 and environmental chambers for accelerated certification.",
    cta: "Read case study",
  },
  {
    tag: "Quality assurance",
    title: "Zero-defect automotive components",
    copy:
      "Discover how a Tier 1 supplier achieved 99.7% first-pass yield with automated hardness testing and statistical process control integration.",
    cta: "Explore workflow",
  },
  {
    tag: "Standards compliance",
    title: "ISO 17025 lab accreditation in 90 days",
    copy:
      "Learn how our turnkey calibration solutions and NIST-traceable standards helped a materials lab achieve full accreditation ahead of schedule.",
    cta: "See the playbook",
  },
];

export const featurePoints = [
  {
    icon: "precision_manufacturing",
    title: "Precision engineered",
    copy: "Class 0.5 accuracy, NIST-traceable calibration, and automated data acquisition ensure repeatable, defensible results.",
  },
  {
    icon: "verified_user",
    title: "Standards compliant",
    copy: "Every system meets ASTM, ISO, IEC, and industry-specific standards with comprehensive documentation and certification.",
  },
  {
    icon: "support_agent",
    title: "Global support network",
    copy: "24/7 technical support, on-site installation, operator training, and preventive maintenance programs worldwide.",
  },
];
