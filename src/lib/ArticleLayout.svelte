<script lang="ts">
    import { onMount } from "svelte";

    export let identifier: string;
    export let title: string | undefined;
    export let date: string | undefined = undefined;
    export let excerpt: string | undefined = undefined;

    onMount(() => {
        var disqus_config = {
            page: {
                identifier
            }, // Use a fixed identifier for the links page
        };
        // DON'T EDIT BELOW THIS LINE
        const script = document.createElement("script");
        script.src = "https://blognya-andra.disqus.com/embed.js";
        script.setAttribute("data-timestamp", new Date().toString());
        (document.head || document.body).appendChild(script);
    });
</script>

<svelte:head>
    <title>{title} - Andra Antariksa</title>
    {#if excerpt}
        <meta name="description" content={excerpt} />
    {/if}
</svelte:head>

<article class="content">
    <h1 class="title">{title}</h1>
    {#if date}
        <div class="date">
            {new Date(date).toLocaleDateString()}
        </div>
    {/if}
    <div class="text">
        <slot></slot>
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
        margin-top: 16px;
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

        :global(p) {
            line-height: 24px;
        }

        :global(img) {
            max-width: 100%;
        }
    }

    .comments {
        margin-top: 64px;
    }
</style>
