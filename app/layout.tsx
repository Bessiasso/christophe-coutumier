import type { Metadata } from "next";
import { Great_Vibes, Coming_Soon } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
    variable: "--font-great-vibes",
    subsets: ["latin"],
    weight: "400",
});

const comingSoon = Coming_Soon({
    variable: "--font-coming-soon",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Wedding Invitation",
    description: "Digital Wedding Invitation",
    icons: {
        icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${greatVibes.variable} ${comingSoon.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
