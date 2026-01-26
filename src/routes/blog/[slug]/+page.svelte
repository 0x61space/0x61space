<script lang="ts">
    import { marked } from "marked";
    import type { PageData } from "./$types";
    import { onMount } from "svelte";

    export let data: PageData;

    $: htmlContent = marked(data.post.content);

    onMount(() => {
        var disqus_config = function () {
            this.page.identifier = `blog/${data.post.slug}`;
        };
        (function () {
            // DON'T EDIT BELOW THIS LINE
            var d = document,
                s = d.createElement("script");
            s.src = "https://blognya-andra.disqus.com/embed.js";
            s.setAttribute("data-timestamp", new Date().toString());
            (d.head || d.body).appendChild(s);
        })();
    });
</script>

<svelte:head>
    <title>{data.post.title} - Andra Space</title>
    <meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="content">
    <h1 class="title">{data.post.title}</h1>
    <div class="date">
        {new Date(data.post.date).toLocaleDateString()}
    </div>
    <div class="text">
        {@html htmlContent}
    </div>
    <div class="comments">
        <div id="disqus_thread"></div>
        <noscript
            >Please enable JavaScript to view the <a
                href="https://disqus.com/?ref_noscript"
                >comments powered by Disqus.</a
            ></noscript
        >
    </div>
</article>

<style>
    .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .date {
        font-size: 10px;
        color: black;
        margin-bottom: 4px;
    }

    .content {
        max-width: 500px;
        padding: 64px 16px 128px 16px;
        display: flex;
        flex-direction: column;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 12px;

        :global(pre) {
            background: #2b2723;
            color: #ffffff;
            padding: 8px;
            border-radius: 8px;
        }

        :global(h1) {
            font-size: 18px;
            font-weight: bold;
        }

        :global(h2) {
            font-size: 16px;
            font-weight: bold;
        }

        :global(h3) {
            font-size: 14px;
            font-weight: bold;
        }
    }

    .comments {
        margin-top: 64px;
    }
</style>
