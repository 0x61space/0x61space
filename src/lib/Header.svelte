<script lang="ts">
    let opened = false;
</script>

<header>
    <div class="menu desktop-only">
        <ul class="menu__item">
            <li><a href="/">About Me</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <h2 class="menu__item center"><a href="/">Andra</a></h2>
        <ul class="menu__item right">
            <li>
                <a
                    href="https://github.com/0x61space"
                    class="icon--github"
                    aria-label="GitHub"
                ></a>
            </li>
            <li>
                <a
                    href="https://linkedin.com/in/andraantariksa"
                    class="icon--linkedin"
                    aria-label="GitHub"
                ></a>
            </li>
        </ul>
    </div>

    <div class="menu mobile-only">
        <ul class="menu__item">
            <button class="hamburger" on:click={() => (opened = !opened)}>
                <div class="hamburger__line"></div>
                <div class="hamburger__line"></div>
            </button>
        </ul>
        <h2 class="menu__item center"><a href="/">Andra</a></h2>
        <div class="menu__item right"></div>
    </div>
</header>

{#if opened}
    <div class="mobile-only mobile-overlay">
        <div class="main">
            <div class="menu">
                <ul class="menu__item">
                    <button class="cross" on:click={() => (opened = !opened)}>
                        <div class="cross__line cross__line-h"></div>
                        <div class="cross__line cross__line-v"></div>
                    </button>
                </ul>
                <h2 class="menu__item center">
                    <a href="/">Andra</a>
                </h2>
                <div class="menu__item"></div>
            </div>
            <div class="content">
                <ul class="list">
                    <li>
                        <a href="/" on:click={() => (opened = false)}
                            >About Me</a
                        >
                    </li>
                    <li>
                        <a href="/blog" on:click={() => (opened = false)}
                            >Blog</a
                        >
                    </li>
                    <li>
                        <a href="/portfolio" on:click={() => (opened = false)}
                            >Portfolio</a
                        >
                    </li>
                    <li>
                        <a href="/contact" on:click={() => (opened = false)}
                            >Contact</a
                        >
                    </li>
                </ul>
                <ul class="socials">
                    <li>
                        <a
                            href="https://github.com/0x61space"
                            class="icon--github"
                            aria-label="GitHub"
                        ></a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/andraantariksa"
                            class="icon--linkedin"
                            aria-label="GitHub"
                        ></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
{/if}

<style>
    /* Mobile */
    @media only screen and (max-width: 700px) {
        .desktop-only {
            display: none !important;
        }

        h2 {
            font-size: 14px;
        }
    }

    /* Desktop */
    @media only screen and (min-width: 700px) {
        .mobile-only {
            display: none !important;
        }

        h2 {
            font-size: 24px;
        }
    }

    /* Mobile components */
    .mobile-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        background: white;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .main {
            margin: 16px;
            border: 0.8px solid black;
            display: flex;
            flex-direction: column;

            .content {
                padding: 20px 40px;
                display: flex;
                gap: 24px;
                flex-direction: column;

                .list {
                    display: flex;
                    flex-direction: column;
                    list-style: none;
                    gap: 16px;

                    li {
                        font-size: 20px;
                        line-height: 1;
                    }
                }
            }
        }
    }

    .hamburger {
        background: transparent;
        border: none;

        .hamburger__line {
            width: 24px;
            height: 2px;
            background-color: black;
            margin: 4px 0;
            transition: all 0.3s ease-in-out;
        }
    }

    .cross {
        background: transparent;
        position: relative;
        width: 24px;
        height: 24px;
        border: none;

        .cross__line {
            width: 24px;
            height: 2px;
            top: 50%;
            left: 50%;
            background-color: black;
            position: absolute;
        }

        .cross__line-h {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        .cross__line-v {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
    /* End mobile components */

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        border-bottom: 0.8px solid black;
        padding: 0 32px;

        .menu__item {
            flex: 1;
        }
    }

    .center {
        text-align: center;
    }

    .right {
        justify-content: flex-end;
    }

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        gap: 18px;

        li {
            margin: 0;
            padding: 0;
            line-height: 12px;
            font-size: 12px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    .icon--github {
        width: 32px;
        height: 32px;
        background-image: url("/image/github.png");
        background-size: cover;
        display: inline-block;
    }

    .icon--linkedin {
        width: 32px;
        height: 32px;
        background-image: url("/image/linkedin.png");
        background-size: cover;
        display: inline-block;
    }
</style>
