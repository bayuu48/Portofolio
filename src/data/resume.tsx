import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";


export const DATA = {
  name: "Bayu Langit",
  initials: "BN",
  url: "https://dillion.io",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/Malang",
  description:
    "I'm software engineering student & aspiring UI/UX designer base in Malang",
  summary:
    "I am a Software Engineering (RPL) student at SMK 8 Malang with a deep passion for digital creation. While I haven't jumped into formal competitions yet, I spend my time bridging the gap between code and visual design through UI/UX and Graphic Design. I love exploring new technologies and am always looking for the next exciting challenge to build.",
  avatarUrl: "/gw.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
    { name: "Supabase", icon: Supabase },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "satriolangitbp@gmail.com",
    tel: "+62 812-3451-7433",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bayuu48",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/langit-bayu-98330038b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/langit.pradana/",
        icon: Icons.instagram,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:bayuu.lan48@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Team Tech 2",
      href: "",
      badges: [],
      location: "Remote",
      title: "Online OSIS Registration",
      logoUrl: "/team.jpg",
      start: "Jan 2026",
      end: "Mei 2026",
      description:
        "Web Pendaftaran OSIS SMKN 8 Malang adalah platform digital berbasis web-app yang dirancang untuk mentransformasi dan mendigitalisasi proses seleksi dan pendaftaran calon pengurus OSIS. Proyek ini dibangun secara kolaboratif dalam tim dengan memanfaatkan tech stack modern untuk menciptakan pengalaman pendaftaran yang cepat, transparan, dan efisien bagi seluruh siswa.",
    },

  ],
  education: [
    {
      school: "SMKN 8 Malang",
      href: "https://smkn8malang.sch.id/",
      degree: "Monitoring Bank Sampah, Pendaftaran Osis, & Monitoring Perpustakaan",
      logoUrl: "/SMK.png",
      start: "2025",
      end: "2026",
    },
    {
      school: "SMPN 1 Singosari",
      href: "https://smpn1sgs.sch.id/",
      degree: "Ardiuno Traffic Light Project",
      logoUrl: "/esempe.png",
      start: "2024",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Monitoring Lock door System",
      href: "",
      dates: "Jan 2026 - Feb 2026",
      active: true,
      description:
        "Project ini adalah alat untuk memonitoring pintu yang terbuka, dan dilengkapi dengan sistem notifikasi untuk memberi tahu pengguna jika pintu terbuka.",
      technologies: [
        "Flutter",
        "dart",
        "sqflite",
        "Figma",
        "Gemini AI",
        "Thonny",
        "Esp32",
        "Flask"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lockdoor.jpeg",
      video:
        "",
    },
    {
      title: "Registration Osis",
      href: "",
      dates: "Jan 2026 - Mei 2026",
      active: true,
      description:
        "Kami membuat website ini dengan tim kita, yang bertujuan untuk memudahkan pendaftaran osis di sekolah kami. Website ini juga memiliki fitur untuk memudahkan panitia dalam melakukan pendataan",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/regis.png",
      video: "",
    },
  ],
  Achivments: [
    {
      title: "Make a Registration Web",
      dates: "Jan 2026 - Mei 2026",
      location: "Malang",
      description: "improved my skill team project, and a lot of experience",
      image:
        "/team.jpg",
      win: "Win in my heart",
      links: [
        {
          title: "Hashnode",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://super-awesome.hashnode.dev/smart-osis-sistem-web-untuk-pengurus-yang-lebih-cepat",
        },
        {
          title: "Instagram",
          icon: <Icons.instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/reel/DYEKAIqptvU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
