<script lang="ts">
    let iframe: HTMLIFrameElement;
</script>

<svelte:head>
    <title>Portfolio - Andra Space</title>
</svelte:head>

<div class="content">
    <iframe
        bind:this={iframe}
        loading="lazy"
        src="https://www.canva.com/design/DAFrJrArj4w/V_PHd7gCASOaTFlHmtEfYw/view?embed"
        allowfullscreen={true}
        allow="fullscreen"
        title="Portfolio - Andra Space"
    >
    </iframe>
    <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFrJrArj4w&#x2F;V_PHd7gCASOaTFlHmtEfYw&#x2F;view?utm_content=DAFrJrArj4w&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener">Link to Canva</a
    >
</div>

<style>
    .content {
        width: 100%;
        padding-bottom: 64px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }

    iframe {
        width: 100%;
        height: 100vh;
    }
</style>
