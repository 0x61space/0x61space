import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { error } from "@sveltejs/kit";
import matter from "gray-matter";
import type { BlogPost } from "$lib/types";

export const prerender = true;

export async function load({ params }): Promise<{ post: BlogPost }> {
    try {
        const { slug } = params;
        const postPath = join(process.cwd(), "markdown", "posts", `${slug}.md`);
        const content = await readFile(postPath, "utf-8");
        const { data, content: markdownContent } = matter(content);

        if (data.is_published === false) {
            throw error(404, {
                message: "Blog post not found",
            });
        }

        return {
            post: {
                slug,
                title: data.title,
                date: data.date,
                content: markdownContent,
                excerpt: data.excerpt || markdownContent.slice(0, 200) + "...",
                ...data,
            },
        };
    } catch (e) {
        throw error(404, {
            message: "Blog post not found",
        });
    }
}
