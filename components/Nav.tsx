"use client";

import { routesArray } from "@/models/routes";
import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="flex items-center gap-8">
            {routesArray.map((item) => (
                <Link
                    key={item.path}
                    href={item.path}
                    className="font-medium capitalize hover:text-green-400"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};
