<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Blog - Andra Space</title>
</svelte:head>

<div class="content">
    {#each data.posts as post, index}
        {#if index !== 0}
            <div class="horizontal-divider"></div>
        {/if}

        <a class="link" href="/blog/{post.slug}">
            <article>
                <h2 class="title">
                    {post.title}
                </h2>
                <p class="date">
                    {new Date(post.date).toLocaleDateString()}
                </p>
                <p class="summary">
                    {post.excerpt}
                </p>
            </article>
        </a>
    {/each}
</div>

<style>
    .content {
        max-width: 500px;
        padding: 64px 16px 128px 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .summary {
        font-size: 14px;
        color: black;
    }

    .date {
        font-size: 10px;
        color: black;
        margin-bottom: 4px;
    }

    .link {
        text-decoration: none;
        color: black;
    }

    .horizontal-divider {
        width: 100%;
        height: 1px;
        background: #000000;
    }
</style>
