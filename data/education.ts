import { EducationItem, CurrentlyItem } from "@/types/education";

export const educationData: EducationItem[] = [
    {
        degree: "Computer Science",
        school: "Cairo University",
        year: "2020 - 2024",
        description: "Focused on software engineering...",
        image: "/cairo-uni.png"
    }
];

export const currentlyData: CurrentlyItem[] = [
    {
        title: "ITI OSAD 9 Months Program",
        place: "ITI Smart Village",
        year: "2025 - 2026",
        description: "Full stack software application...",
        image: "/iti.png",
        ongoing: true
    }
];