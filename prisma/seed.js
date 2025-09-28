// Prisma seed script for creating admin user and base content
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function run() {
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@seiiki.co.id';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'admin123'; // Change in production

  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12);
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Administrator',
        role: 'ADMIN',
      },
    });
    console.log(`✅ Admin user created: ${adminEmail}`);
  } else {
    console.log(`✅ Admin user already exists: ${existingAdmin.email}`);
  }

  const heroSlideCount = await prisma.heroSlide.count();
  if (heroSlideCount === 0) {
    await prisma.heroSlide.createMany({
      data: [
        {
          title: 'SEIIKI',
          subtitle: 'AMAN TERPERCAYA',
          description: 'Pusat Layanan Sertifikat Laik Operasi Instalasi Tenaga Listrik',
          imageUrl:
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1080&h=720&fit=crop',
          buttonText: 'TENTANG KAMI',
          buttonUrl: '/profil/tentang-kami',
          order: 1,
          active: true,
        },
        {
          title: 'Layanan Profesional',
          subtitle: 'SLO Tegangan Rendah & Menengah',
          description: 'Sertifikasi instalasi listrik dengan standar keamanan tertinggi',
          imageUrl:
            'https://images.unsplash.com/photo-1549480017-d76466a4073b?w=1080&h=720&fit=crop',
          buttonText: 'LAYANAN KAMI',
          buttonUrl: '/slo',
          order: 2,
          active: true,
        },
      ],
    });
    console.log('✅ Hero slides created');
  }

  const serviceCount = await prisma.service.count();
  if (serviceCount === 0) {
    await prisma.service.createMany({
      data: [
        {
          title: 'SLO Tegangan Rendah (TR)',
          description:
            'Sertifikasi untuk instalasi listrik rumah tangga, bisnis kecil, dan fasilitas umum dengan standar keamanan tertinggi.',
          icon: 'Zap',
          featured: true,
          order: 1,
        },
        {
          title: 'SLO Tegangan Menengah (TM)',
          description:
            'Layanan sertifikasi untuk instalasi industri, komersial besar, dan jaringan distribusi dengan keandalan terjamin.',
          icon: 'ShieldCheck',
          featured: true,
          order: 2,
        },
        {
          title: 'Konsultasi & Uji Petik',
          description:
            'Dukungan ahli untuk perencanaan, pemeliharaan, dan pengujian instalasi listrik Anda agar selalu laik operasi.',
          icon: 'FileText',
          featured: true,
          order: 3,
        },
      ],
    });
    console.log('✅ Services created');
  }

  const statisticsCount = await prisma.statistics.count();
  if (statisticsCount === 0) {
    await prisma.statistics.createMany({
      data: [
        { label: 'Tahun Pengalaman', value: '10+', order: 1 },
        { label: 'Sertifikat Diterbitkan', value: '15,000+', order: 2 },
        { label: 'Kantor Wilayah', value: '25', order: 3 },
        { label: 'Kepuasan Pelanggan', value: '99%', order: 4 },
      ],
    });
    console.log('✅ Statistics created');
  }

  const contactInfoCount = await prisma.contactInfo.count();
  if (contactInfoCount === 0) {
    await prisma.contactInfo.createMany({
      data: [
        {
          type: 'PHONE',
          label: 'Telepon Kantor Pusat',
          value: '+62 21 1234 5678',
          icon: 'Phone',
          order: 1,
        },
        {
          type: 'EMAIL',
          label: 'Email Resmi',
          value: 'info@seiiki.co.id',
          icon: 'Mail',
          order: 2,
        },
        {
          type: 'ADDRESS',
          label: 'Alamat Kantor Pusat',
          value: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10110',
          icon: 'MapPin',
          order: 3,
        },
      ],
    });
    console.log('✅ Contact info created');
  }

  console.log('🎉 Database seeded successfully!');
  console.log(`👤 Admin login: ${adminEmail} / ${adminPassword}`);
}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
