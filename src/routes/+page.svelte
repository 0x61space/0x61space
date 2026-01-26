<svelte:head>
    <title>About Me - Andra</title>
</svelte:head>

<div class="content">
    <img src="/image/headline.jpeg" class="image" alt="Its me" />
    <p class="image-caption">荒川, 墨田区</p>
    <h2 class="heading1">
        Andra
    </h2>
    <h3 class="heading2">Welcome to my space</h3>
    <div class="paragraphs">
        <p class="paragraph">
            I love wandering around city and country by walking, running, public
            transport, and cycling.
        </p>
        <p class="paragraph">
            I have been working as software engineer professionaly since 2022.
            My expertise is around web and mobile app development. I have been
            shipping several application at scale both personally and at the
            company I worked on.
        </p>
    </div>
</div>

<style>
    .image {
        width: 100%;
        height: auto;
    }

    .content {
        max-width: 500px;
        padding: 64px 16px 128px 16px;
    }

    .heading1 {
        font-size: 18px;
        font-weight: bold;
    }

    .heading2 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .small {
        font-size: 10px;
    }

    .paragraphs {
        display: flex;
        flex-direction: column;
        gap: 16px;
        font-size: 14px;
    }

    .image-caption {
        font-size: 12px;
        color: black;
        text-align: end;
        margin-top: 4px;
        font-weight: bold;
        margin-bottom: 32px;
    }
</style>
