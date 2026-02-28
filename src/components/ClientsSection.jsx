import { motion } from "framer-motion";

const clients = [
  { name: "Boeing", logo: "https://logo.clearbit.com/boeing.com" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { name: "NASA", logo: "https://logo.clearbit.com/nasa.gov" },
  { name: "General Electric", logo: "https://logo.clearbit.com/ge.com" },
  { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Lockheed Martin", logo: "https://logo.clearbit.com/lockheedmartin.com" },
  { name: "Honeywell", logo: "https://logo.clearbit.com/honeywell.com" },
  { name: "3M", logo: "https://logo.clearbit.com/3m.com" },
  { name: "Caterpillar", logo: "https://logo.clearbit.com/caterpillar.com" },
  { name: "Northrop Grumman", logo: "https://logo.clearbit.com/northropgrumman.com" },
  { name: "Raytheon", logo: "https://logo.clearbit.com/rtx.com" },
  { name: "Ford", logo: "https://logo.clearbit.com/ford.com" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const ClientsSection = () => {
  return (
    <motion.section
      className="clients-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div className="clients-header" variants={logoVariants}>
        <h2>Trusted by industry leaders</h2>
        <p>
          Leading manufacturers, aerospace companies, and research institutions rely on Cytester for mission-critical testing and validation.
        </p>
      </motion.div>
      <motion.div className="clients-grid" variants={containerVariants}>
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="client-logo"
            variants={logoVariants}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={client.logo} alt={client.name} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ClientsSection;
