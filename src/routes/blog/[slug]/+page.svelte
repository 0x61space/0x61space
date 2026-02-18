<script lang="ts">
    import { marked } from "marked";
    import type { PageData } from "./$types";
    import ArticleLayout from "$lib/ArticleLayout.svelte";

    export let data: PageData;

    $: htmlContent = marked(data.post.content);
</script>

<ArticleLayout
    title={data.post.title}
    date={data.post.date}
    excerpt={data.post.excerpt}
    identifier={data.post.slug}
>
    {@html htmlContent}
</ArticleLayout>
