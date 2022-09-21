<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GameZone</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header>
        <nav class="hamburguer-menu">
            <img src="img/icons/menu.svg" alt="menu">
            <ul hidden>
                <li></li>
            </ul>
        </nav>
        <picture>
            <source media="(max-width: 660px)" srcset="img/logo/xsmall.svg">
            <source media="(min-width: 660px)" srcset="img/logo/small.svg">
            <img src="img/logo/xsmall.svg" alt="GameZone">
        </picture>
        <nav class="user-menu">
            <img src="img/icons/user.svg" alt="user">
            <ul hidden>
                <li>My account</li>
                <li>Sign out</li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="home-release">
            <picture>
                <source media="(max-width: 660px)" srcset="img/home/hero/release-mobile.svg">
                <source media="(min-width: 660px)" srcset="img/home/hero/release-desktop.svg">
                <img src="img/home/hero/release-mobile.svg" alt="hero-release">
            </picture>
        </section>

        <section class="recommended">
            <h3>Recommended for you</h3>
            <div class="carrousel-recommended">
                <img id="previous" class="btn-previous" src="img/icons/right-arrow.svg" alt="div-previous">
                <article class="card-big">
                    <div class="open">
                        <img id="image-recommended"></img>
                        <p id="name" class="bold"> </p>
                    </div>
                    <div hidden class="hover">
                        <img id="image-recommended-hover"></img>
                        <p id="name" class="card titleBig"> </p>
                        <p id="price" class="small"></p>
                        <button class="btn txtMedium"></button>
                    </div>
                </article>

                <img id="next" class="btn-next" src="img/icons/right-arrow.svg" alt="div-next">
            </div>
        </section>

        <section class="carrousel">
            <h3>Continue playing...</h3>
            <div class="home-carrousel">
                <article class="card-small"> </article>
            </div>
        </section>

        <section class="carrousel">
            <h3>Puzzles and party games</h3>
            <div class="home-carrousel">
                <article class="card-small"> </article>
            </div>
        </section>

        <section class="carrousel">
            <h3>Role-playing (RPG, ARPG, and More)</h3>
            <div class="home-carrousel">
                <article class="card-small"> </article>
            </div>
        </section>

        <section class="carrousel">
            <h3>Simulation and sports</h3>
            <div class="home-carrousel">
                <article class="card-small"> </article>
            </div>
        </section>

        <section class="carrousel">
            <h3>Survival and horror</h3>
            <div class="home-carrousel">
                <article class="card-small"> </article>
            </div>
        </section>
    </main>

    <footer>
        <div>
            <picture>
                <source media="(max-width: 660px)" srcset="img/logo/small.svg">
                <source media="(min-width: 660px)" srcset="img/logo/big.svg">
                <img src="img/logo/small.svg" alt="GameZone">
            </picture>
            <nav>
                <ul>
                    <li class="bold">Overview</li>
                    <li>What is Game Zone?</li>
                    <li>Developers</li>
                    <li>About</li>
                </ul>
                <ul>
                    <li class="bold">Community</li>
                    <li>Community Central</li>
                    <li>Support</li>
                    <li>Help</li>
                </ul>
                <ul>
                    <li class="bold">Contact</li>
                    <li>Contact us</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
                <ul>
                    <li class="bold">FAQs</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>Do not sell my info</li>
                    <li>Sitemap</li>
                </ul>
            </nav>
        </div>
        <div class="slim-footer">
            <p class="bold">Copyright Ⓒ 2022. Game Zone is a Registered Trademark. All Rights Reserved.</p>
        </div>
    </footer>

    <script type="text/javascript" src="js/carrousel.js"></script>
</body>

</html>