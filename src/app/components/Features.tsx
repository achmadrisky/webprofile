import { cn } from "@/app/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      title: "Awal Perjalanan",
      description: "Mulai belajar dasar-dasar programming dan web development.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Pengalaman Pertama",
      description: "Mengerjakan project kecil untuk teman dan komunitas.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Mulai Freelance",
      description: "Memberikan solusi digital untuk UMKM dan bisnis lokal.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Belajar Cloud & Tools",
      description: "Eksplorasi DevOps, cloud deployment, dan workflow modern.",
      icon: <IconCloud />,
    },
    {
      title: "Kolaborasi Tim",
      description:
        "Bekerja sama dengan tim lintas bidang untuk membangun produk.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Support & Sharing",
      description: "Membantu orang lain melalui komunitas dan open source.",
      icon: <IconHelp />,
    },
    {
      title: "Tumbuh & Berkembang",
      description: "Terus mengasah skill dan siap menghadapi tantangan baru.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Passion Driven",
      description: "Melangkah maju dengan semangat, cinta, dan dedikasi.",
      icon: <IconHeart />,
    },
  ];

  return (
    <section
      id="Features"
      className="text-gray-300 px-6 py-20 max-w-7xl mx-auto"
    >
      {/* Judul Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mb-12"
      >
        <span className="text-indigo-400 font-mono">03.</span> Some Things I’ve
        Do
        <span className="flex-1 h-[1px] bg-gray-600"></span>
      </motion.h2>

      {/* Grid Feature */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-gray-700",
        (index === 0 || index === 4) && "lg:border-l dark:border-gray-700",
        index < 4 && "lg:border-b dark:border-gray-700"
      )}
    >
      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-indigo-400">{icon}</div>

      {/* Judul dengan garis */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-600 group-hover/feature:bg-indigo-500 transition-all duration-200" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>

      {/* Deskripsi */}
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
