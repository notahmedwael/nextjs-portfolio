import { EducationItem, CurrentlyItem } from "@/types/education";

export const educationData: EducationItem[] = [
    {
        degree: "High School Diploma",
        school: "Modern School Al-Shorouk",
        year: "2017 - 2020",
        description: "Excelled in Mathematics and Physics, starting my journey into programming.",
        image: "/modern-school-shorouk2.png"
    },
    {
        degree: "Computer Science",
        school: "Cairo University",
        year: "2020 - 2024",
        description: "Focused on software engineering, data structures & algorithms, artificial intelligence.",
        image: "/cairo-uni.png"
    }
];

export const currentlyData: CurrentlyItem[] = [
        {
            title: "ITI OSAD 9 Months Program",
            place: "ITI Smart Village",
            year: "2025 - 2026",
            description: "An intensive program that focuses on building full stack software application using various open source technologies, paired with RAG & Fine Tuning.",
            image: "/iti.png",
            ongoing: true
        },
        {
            title: "Freelancing",
            place: "Online",
            year: "2025 - Present",
            description: "Providing smart software solutions to clients worldwide, focusing on modern web stacks and AI integration.",
            image: "/freelance.jpg",
            ongoing: true
        }
];