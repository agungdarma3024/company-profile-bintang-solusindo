"use client";

import { motion } from 'framer-motion';
import { 
  FaEye, 
  FaBullseye, 
  FaCheck, 
  FaBuilding, 
  FaCalendarAlt, 
  FaVideo,
  FaChartLine,
  FaUsers,
  FaLaptopCode,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

const About = () => {
  const handleContact = (type: 'whatsapp' | 'phone') => {
    if (type === 'whatsapp') {
      window.open('https://wa.me/6281234567890', '_blank');
    } else {
      window.location.href = 'tel:+6281234567890';
    }
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">

          {/* 1. JUDUL DAN PEMBUKA */}
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
              Tentang CV. BINTANG SOLUSINDO ABADI
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Mitra profesional Anda dalam MICE, Event Organizer, dan Produksi Multimedia. Kami berfokus untuk memenuhi permintaan klien dengan memberikan kualitas terbaik, ide-ide inovatif, dan pelayanan yang profesional.
            </p>
          </motion.div>

          {/* 2. VISI & MISI */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VISI */}
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-500 rounded-lg mr-4">
                  <FaEye className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Visi Kami</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Menjadi Perusahaan yang dapat memenuhi permintaan klien dengan memberikan kualitas terbaik serta peluang, ide dan inovasi pengembangan proyek dimasa datang, dengan berpegang teguh pada komitmen, tanggungjawab dan profesionalitas.
              </p>
            </motion.div>
            
            {/* MISI */}
            <motion.div 
              className="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-500 rounded-lg mr-4">
                  <FaBullseye className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">Misi Kami</h3>
              </div>
              <ul className="text-gray-300 space-y-4 text-lg">
                <li className="flex items-start">
                  <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  Memiliki spesialisasi dalam penyelenggaran Meeting.
                </li>
                <li className="flex items-start">
                  <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  Membangun relasi dan jaringan yang luas.
                </li>
                <li className="flex items-start">
                  <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  Mengembangkan tim yang berkualitas dan berpengalaman.
                </li>
                <li className="flex items-start">
                  <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  Menjamin kualitas hasil keluaran pekerjaan.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-6">
              Layanan Profesional Kami
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              Solusi lengkap dan terintegrasi untuk semua kebutuhan event dan multimedia bisnis Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "MICE Services",
                description: "Professional Meeting, Incentive, Convention, and Exhibition services dengan standar internasional dan pengalaman yang luas.",
                icon: <FaBuilding className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Event Organizer",
                description: "Penataan acara profesional dari konsep hingga eksekusi untuk corporate event, wedding, dan acara spesial lainnya.",
                icon: <FaCalendarAlt className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Produksi Multimedia",
                description: "Video production, photography, live streaming, dan konten kreatif berkualitas tinggi untuk memperkuat brand Anda.",
                icon: <FaVideo className="w-8 h-8" />,
                color: "from-red-500 to-red-600"
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-yellow-500 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section id="why-us" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-6">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              Keunggulan yang membuat kami menjadi pilihan terpercaya klien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pengalaman Luas",
                description: "Telah menangani berbagai event besar dengan klien ternama di berbagai industri.",
                icon: <FaChartLine className="w-8 h-8" />,
                color: "bg-green-500"
              },
              {
                title: "Tim Profesional",
                description: "Didukung oleh tim ahli yang berpengalaman dan bersertifikat di bidangnya.",
                icon: <FaUsers className="w-8 h-8" />,
                color: "bg-blue-500"
              },
              {
                title: "Teknologi Modern",
                description: "Menggunakan peralatan dan teknologi terkini untuk hasil yang maksimal.",
                icon: <FaLaptopCode className="w-8 h-8" />,
                color: "bg-purple-500"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`p-3 ${item.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-6">
              Siap Bekerja Sama?
            </h2>
            <p className="text-lg leading-8 text-gray-300 mb-12 max-w-2xl mx-auto">
              Hubungi tim profesional kami untuk konsultasi gratis dan diskusikan kebutuhan event Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                onClick={() => handleContact('whatsapp')}
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                <span>WhatsApp Business</span>
              </motion.button>

              <motion.button
                onClick={() => handleContact('phone')}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone className="w-5 h-5 mr-2" />
                <span>Telepon Kami</span>
              </motion.button>
            </div>

            <motion.div 
              className="mt-12 p-8 bg-gray-900 rounded-xl max-w-md mx-auto border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-5 h-5 text-yellow-500 mr-3" />
                <h4 className="text-lg font-semibold text-yellow-400">Kantor Pusat</h4>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 text-yellow-500" />
                  Jakarta, Indonesia
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-2 text-yellow-500" />
                  bintngsolusindo723@gmail.com
                </p>
                <p className="flex items-center">
                  <FaPhoneAlt className="w-4 h-4 mr-2 text-yellow-500" />
                  (021) 1234-5678
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;