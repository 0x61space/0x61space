import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { error } from "@sveltejs/kit";
import matter from "gray-matter";
import type { BlogPost } from "$lib/types";

export const prerender = true;

export async function load(): Promise<{ post: BlogPost }> {
    try {
        const postPath = join(process.cwd(), "markdown", "links.md");
        const content = await readFile(postPath, "utf-8");
        const { data, content: markdownContent } = matter(content);

        return {
            post: {
                content: markdownContent,
                title: data.title || "Links",
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || markdownContent.slice(0, 200) + "...",
                slug: "links", // A fixed slug for this single page
                ...data,
            },
        };
    } catch (e) {
        throw error(404, {
            message: "Link markdown not found",
        });
    }
}
