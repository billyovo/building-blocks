<template>
    <nav class="nav-container">
        <a href="/" class="brand">
            <img src="../assets/brand.png" alt="?" class="brand" height="50" width="400">
        </a>
        <div class="nav-links">
            <a href="/" class="nav-link"><span>link1</span></a>
            <a href="/" class="nav-link"><span>link2</span></a>
            <a href="/" class="nav-link"><span>link3</span></a>
            <a href="/" class="nav-link"><span>link4</span></a>
        </div>
    </nav>
</template>

<style>
    .nav-container{
        height: 70px;
        padding: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-link{
        margin: 0 1.5rem;
        text-decoration: none;
        font-size: 1.2rem;
    }

    .brand{
        width: min(100%, 400px);
        margin: 0px 10px;
    }

    @media only screen and (max-width: 1000px) {
        .nav-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
        .brand{
            display: block;
            height: 40px;
        }

        .nav-links{
            width: 90%;
            display: inherit;
            justify-content: inherit;
            align-items: inherit;
            margin-top: 10px;
        }
        .nav-link{
            margin: 0;
            width: 100%;
            font-size: 1.2rem;
        }
        .nav-link > span{
            display: block;
            text-align: center;
        }
    }
</style>