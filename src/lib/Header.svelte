<script lang="ts">
</script>

<header>
    <div class="menu">
        <ul class="menu__item left">
            <li><a href="/">About Me</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/links">Links</a></li>
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
</header>

<style>
    h2 {
        font-size: 24px;
    }

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

    @media (max-width: 950px) {
        .menu {
            flex-direction: column;
            height: auto;
            padding: 16px;
        }
    }

    .left {
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    @media (max-width: 950px) {
        .left {
            justify-content: center;
        }
    }

    .right {
        justify-content: flex-end;
    }

    @media (max-width: 950px) {
        .right {
            justify-content: center;
        }
    }

    .center {
        text-align: center;
        margin: 16px 0;
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
