import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Create demo user
  const hashedPassword = await bcrypt.hash("demo1234", 12)
  const user = await prisma.user.upsert({
    where: { email: "demo@getprova.com" },
    update: {},
    create: {
      name: "Alex Morgan",
      email: "demo@getprova.com",
      password: hashedPassword,
      company: "Vault Automotive",
      role: "admin",
    },
  })

  // Create owners
  const owners = await Promise.all([
    prisma.owner.upsert({
      where: { id: "owner-1" },
      update: {},
      create: {
        id: "owner-1",
        name: "Marcus Chen",
        email: "marcus.chen@email.com",
        phone: "+1 (555) 100-2000",
        address: "Upper East Side, New York, NY",
        userId: user.id,
      },
    }),
    prisma.owner.upsert({
      where: { id: "owner-2" },
      update: {},
      create: {
        id: "owner-2",
        name: "Sarah Blackwood",
        email: "sarah@heritagemotor.com",
        phone: "+1 (555) 200-3000",
        address: "Greenwich, CT",
        userId: user.id,
      },
    }),
    prisma.owner.upsert({
      where: { id: "owner-3" },
      update: {},
      create: {
        id: "owner-3",
        name: "James Thornton",
        email: "j.thornton@email.com",
        phone: "+1 (555) 300-4000",
        address: "Palm Beach, FL",
        userId: user.id,
      },
    }),
    prisma.owner.upsert({
      where: { id: "owner-4" },
      update: {},
      create: {
        id: "owner-4",
        name: "Riku Nakamura",
        email: "riku.n@email.com",
        phone: "+1 (555) 400-5000",
        address: "Beverly Hills, CA",
        userId: user.id,
      },
    }),
    prisma.owner.upsert({
      where: { id: "owner-5" },
      update: {},
      create: {
        id: "owner-5",
        name: "Elena Dubois",
        email: "elena.dubois@email.com",
        phone: "+1 (555) 500-6000",
        address: "Monaco",
        userId: user.id,
      },
    }),
    prisma.owner.upsert({
      where: { id: "owner-6" },
      update: {},
      create: {
        id: "owner-6",
        name: "Alexander Petrov",
        email: "a.petrov@email.com",
        phone: "+1 (555) 600-7000",
        address: "Miami Beach, FL",
        userId: user.id,
      },
    }),
  ])

  // Create vehicles
  const vehicles = await Promise.all([
    prisma.vehicle.upsert({
      where: { vin: "ZFF92LLA5K0243567" },
      update: {},
      create: {
        make: "Ferrari",
        model: "488 Pista",
        year: 2019,
        vin: "ZFF92LLA5K0243567",
        color: "Rosso Corsa",
        bay: "14A",
        status: "stored",
        ownerId: owners[0].id,
        userId: user.id,
      },
    }),
    prisma.vehicle.upsert({
      where: { vin: "WP0AC2A91MS270341" },
      update: {},
      create: {
        make: "Porsche",
        model: "911 GT3",
        year: 2021,
        vin: "WP0AC2A91MS270341",
        color: "GT Silver Metallic",
        bay: "07B",
        status: "stored",
        ownerId: owners[1].id,
        userId: user.id,
      },
    }),
    prisma.vehicle.upsert({
      where: { vin: "SBM14DCA5LW006789" },
      update: {},
      create: {
        make: "McLaren",
        model: "720S",
        year: 2020,
        vin: "SBM14DCA5LW006789",
        color: "Papaya Spark",
        bay: "22C",
        status: "in_service",
        ownerId: owners[2].id,
        userId: user.id,
      },
    }),
    prisma.vehicle.upsert({
      where: { vin: "ZHWUM6ZD3JLA12345" },
      update: {},
      create: {
        make: "Lamborghini",
        model: "Aventador SVJ",
        year: 2018,
        vin: "ZHWUM6ZD3JLA12345",
        color: "Verde Mantis",
        bay: "03A",
        status: "stored",
        ownerId: owners[3].id,
        userId: user.id,
      },
    }),
    prisma.vehicle.upsert({
      where: { vin: "SCFRMFAW5NGL12345" },
      update: {},
      create: {
        make: "Aston Martin",
        model: "DBS Superleggera",
        year: 2022,
        vin: "SCFRMFAW5NGL12345",
        color: "Onyx Black",
        bay: "19D",
        status: "arriving",
        ownerId: owners[4].id,
        userId: user.id,
      },
    }),
    prisma.vehicle.upsert({
      where: { vin: "W1KZF8KB0PA012345" },
      update: {},
      create: {
        make: "Mercedes-AMG",
        model: "GT Black Series",
        year: 2023,
        vin: "W1KZF8KB0PA012345",
        color: "Magno Grey",
        bay: "11B",
        status: "stored",
        ownerId: owners[5].id,
        userId: user.id,
      },
    }),
  ])

  // Create climate logs for stored vehicles
  const now = new Date()
  for (const vehicle of vehicles.filter(v => v.status === "stored")) {
    for (let i = 0; i < 7; i++) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      await prisma.climateLog.create({
        data: {
          vehicleId: vehicle.id,
          temperature: 70 + Math.random() * 5,
          humidity: 42 + Math.random() * 8,
          recordedAt: date,
        },
      })
    }
  }

  // Create service records
  await prisma.serviceRecord.createMany({
    data: [
      {
        vehicleId: vehicles[0].id,
        type: "Detailing",
        description: "Full detail and ceramic coating application",
        provider: "Prestige Auto Spa",
        cost: 2500,
        date: new Date("2026-03-01"),
      },
      {
        vehicleId: vehicles[0].id,
        type: "Maintenance",
        description: "Tire pressure check and adjustment",
        provider: "In-house",
        cost: 0,
        date: new Date("2026-02-15"),
      },
      {
        vehicleId: vehicles[0].id,
        type: "Installation",
        description: "Battery tender installation",
        provider: "EuroTech Automotive",
        cost: 350,
        date: new Date("2026-01-20"),
      },
      {
        vehicleId: vehicles[1].id,
        type: "Maintenance",
        description: "Oil change and filter replacement",
        provider: "Stuttgart Service Center",
        cost: 850,
        date: new Date("2026-02-28"),
      },
      {
        vehicleId: vehicles[2].id,
        type: "Repair",
        description: "Front splitter replacement",
        provider: "McLaren Manhattan",
        cost: 4200,
        date: new Date("2026-03-05"),
      },
    ],
  })

  // Create schedule events
  await prisma.scheduleEvent.createMany({
    data: [
      {
        title: "488 Pista - Full Detail",
        description: "Scheduled full detail and paint correction",
        vehicleId: vehicles[0].id,
        date: new Date("2026-03-03"),
        type: "maintenance",
        userId: user.id,
      },
      {
        title: "GT3 - Tire Rotation",
        description: "Scheduled tire rotation and balance",
        vehicleId: vehicles[1].id,
        date: new Date("2026-03-08"),
        type: "maintenance",
        userId: user.id,
      },
      {
        title: "720S - Return to Owner",
        description: "Vehicle pickup by James Thornton",
        vehicleId: vehicles[2].id,
        date: new Date("2026-03-12"),
        type: "pickup",
        userId: user.id,
      },
      {
        title: "Aventador - Battery Check",
        description: "Monthly battery tender check",
        vehicleId: vehicles[3].id,
        date: new Date("2026-03-15"),
        type: "maintenance",
        userId: user.id,
      },
      {
        title: "Facility Inspection",
        description: "Annual facility safety inspection",
        date: new Date("2026-03-20"),
        type: "inspection",
        userId: user.id,
      },
      {
        title: "DBS - Full Detail",
        description: "Pre-delivery full detail",
        vehicleId: vehicles[4].id,
        date: new Date("2026-03-25"),
        type: "maintenance",
        userId: user.id,
      },
    ],
  })

  console.log("Database seeded successfully!")
  console.log(`Demo login: demo@getprova.com / demo1234`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
