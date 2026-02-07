const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Collection = require("../models/collectionModel");
const Event = require("../models/eventModel");
const Announcement = require("../models/Announcement");
const Book = require("../models/book.model");
const User = require("../models/userModel");

dotenv.config({ path: "./.env" });

const uploadsBaseUrl = "/api/uploads/collections";

// Files required in apiGeo/uploads/collections
// Place these files there before running the app:
// - quartz.glb
// - quartz_demo.mp4
// - basalt.glb
// - basalt_demo.mp4
// - granite.glb
// - granite_demo.mp4
// - ammonite.glb
// - ammonite_demo.mp4
// - trilobite.glb
// - trilobite_demo.mp4
// - obsidian.glb
// - obsidian_demo.mp4

const collections = [
  {
    type: "minerals",
    subtype: "silicates",
    category: "common",
    name: "Quartz",
    description:
      "A common mineral with a wide range of geological origins and industrial uses.",
    formule_chimique: "SiO2",
    composition_chimique: "Silicon dioxide",
    origine_geologique: "Igneous, metamorphic, and sedimentary environments",
    glb_url: `${uploadsBaseUrl}/quartz.glb`,
    video_url: `${uploadsBaseUrl}/quartz_demo.mp4`,
  },
  {
    type: "rocks",
    subtype: "igneous",
    category: "volcanic",
    name: "Basalt",
    description:
      "A dark, fine-grained volcanic rock formed from rapid cooling of lava.",
    formule_chimique: "—",
    composition_chimique: "Plagioclase, pyroxene, and olivine",
    origine_geologique: "Volcanic activity and oceanic crust",
    glb_url: `${uploadsBaseUrl}/basalt.glb`,
    video_url: `${uploadsBaseUrl}/basalt_demo.mp4`,
  },
  {
    type: "rocks",
    subtype: "igneous",
    category: "intrusive",
    name: "Granite",
    description:
      "A coarse-grained intrusive rock composed primarily of quartz and feldspar.",
    formule_chimique: "—",
    composition_chimique: "Quartz, feldspar, mica",
    origine_geologique: "Slow cooling of magma deep underground",
    glb_url: `${uploadsBaseUrl}/granite.glb`,
    video_url: `${uploadsBaseUrl}/granite_demo.mp4`,
  },
  {
    type: "paleontology",
    subtype: "cephalopods",
    category: "fossils",
    name: "Ammonite",
    description:
      "Extinct marine mollusk fossil commonly used for biostratigraphy.",
    formule_chimique: "CaCO3",
    composition_chimique: "Aragonite",
    origine_geologique: "Marine sedimentary deposits",
    glb_url: `${uploadsBaseUrl}/ammonite.glb`,
    video_url: `${uploadsBaseUrl}/ammonite_demo.mp4`,
  },
  {
    type: "paleontology",
    subtype: "arthropods",
    category: "fossils",
    name: "Trilobite",
    description: "A classic Paleozoic fossil with a segmented exoskeleton.",
    formule_chimique: "CaCO3",
    composition_chimique: "Calcite",
    origine_geologique: "Ancient seabed deposits",
    glb_url: `${uploadsBaseUrl}/trilobite.glb`,
    video_url: `${uploadsBaseUrl}/trilobite_demo.mp4`,
  },
  {
    type: "minerals",
    subtype: "silicates",
    category: "volcanic glass",
    name: "Obsidian",
    description:
      "Natural volcanic glass formed by rapid cooling of viscous lava.",
    formule_chimique: "—",
    composition_chimique: "Silica-rich glass",
    origine_geologique: "Volcanic lava flows",
    glb_url: `${uploadsBaseUrl}/obsidian.glb`,
    video_url: `${uploadsBaseUrl}/obsidian_demo.mp4`,
  },
];

const events = [
  {
    title: "Geology Week 2026",
    description: "A week-long program of talks, workshops, and field trips.",
  },
  {
    title: "Mineral Identification Workshop",
    description: "Hands-on training for identifying common minerals.",
  },
];

const announcements = [
  {
    title: "New 3D Models Added",
    description: "New 3D models are now available in the Collections section.",
    type: "update",
  },
  {
    title: "Maintenance Window",
    description: "The platform will be under maintenance this weekend.",
    type: "maintenance",
  },
];

const books = [
  {
    title: "Introduction to Mineralogy",
    category: "Mineralogy",
    link: "https://example.com/books/introduction-to-mineralogy",
    image: "https://example.com/images/books/mineralogy.jpg",
  },
  {
    title: "Principles of Igneous Petrology",
    category: "Petrology",
    link: "https://example.com/books/igneous-petrology",
    image: "https://example.com/images/books/igneous.jpg",
  },
];

const users = [
  { username: "admin", password: "admin1234" },
  { username: "editor", password: "editor1234" },
];

const seedDatabase = async () => {
  try {
    if (!process.env.DATABASE) {
      throw new Error("DATABASE is not set in .env");
    }

    await mongoose.connect(process.env.DATABASE);
    console.log("DB connected");

    await Promise.all([
      Collection.deleteMany({}),
      Event.deleteMany({}),
      Announcement.deleteMany({}),
      Book.deleteMany({}),
      User.deleteMany({}),
    ]);

    await Collection.insertMany(collections);
    await Event.insertMany(events);
    await Announcement.insertMany(announcements);
    await Book.insertMany(books);

    for (const user of users) {
      await User.create(user);
    }

    console.log("Seed completed successfully");
    console.log(
      "Required upload files:",
      collections.map((c) => ({
        name: c.name,
        glb: c.glb_url.split("/").pop(),
        video: c.video_url.split("/").pop(),
      })),
    );

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    await mongoose.disconnect();
    process.exit(1);
  }
};

seedDatabase();
