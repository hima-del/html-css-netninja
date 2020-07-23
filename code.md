
```
body {
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
}

.image-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px;
    align-items: center;
    justify-content: center;
}

.main-section-2 {
    background-color: white;
    border: 1px solid black;
    /* width: 1035px; */
    height: 354px;
    position: relative;
    padding: 50px;
}

.card img {
    height: 350px;
    width: 175px;
}

.card {
    display: flex;
    flex-direction: column;
}

.box:hover {
    text-align: center;
    border-bottom: 2px solid #1b4332;
    width: 170px;
    border-right: 2px solid #1b4332;
    border-left: 2px solid #1b4332;
    white-space: nowrap;
    background-color: #1b4332;
    height: 100px;
    position: absolute;
    bottom: 0;
    overflow: visible;
}

.box {
    text-align: center;
    border-bottom: 2px solid #1b4332;
    width: 170px;
    border-right: 2px solid #1b4332;
    border-left: 2px solid #1b4332;
    white-space: nowrap;
    background-color: #1b4332;
    height: 20px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    transition: height 0.3s;
}

.icon1 img {
    height: 30px;
    width: 40px;
}

.icon2 img {
    height: 20px;
    width: 30px;
}

.a {
    color: white;
    padding-top: 5px;
}

.b {
    color: white;
    font-size: 13px;
}

.icons-wrapper {
    position: relative;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: center;
}

.image {
    position: relative;
}

.icon1 {
    position: absolute;
}

.icon2 {
    position: absolute;
}
```

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Blooms Group of Companies</title>
</head>

<body>
    <div class="main-section-2">
        <div class="image-container">
            <div class="card">
                <div class="image">
                    <img src="img/real estate card.png" />
                    <div class="box">
                        <span class="a">
                            Real Estate<br>
                        </span>
                        <span class="b">
                            Checkout our properties<br>
                        </span>
                        <div class="icons-wrapper">
                            <div class="icon1">
                                <img src="img/Ellipse 1.png" /></div>
                            <div class="icon2">
                                <img src="img/Vector.png" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card">
                <div class="image">
                    <img src="img/resorts card.png" />
                    <div class="box">
                        <span class="a">
                            Resorts<br>
                        </span>
                        <span class="b">
                            Checkout our properties<br>
                        </span>
                        <div class="icons-wrapper">
                            <div class="icon1">
                                <img src="img/Ellipse 1.png" /></div>
                            <div class="icon2">
                                <img src="img/Vector.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                    <img src="img/Organics card.png" />
                    <div class="box">
                        <span class="a">
                            Organics<br>
                        </span>
                        <span class="b">
                            Checkout our properties<br>
                        </span>
                        <div class="icons-wrapper">
                            <div class="icon1">
                                <img src="img/Ellipse 1.png" /></div>
                            <div class="icon2">
                                <img src="img/Vector.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                    <img src="img/Homemade card.png" />
                    <div class="box">
                        <span class="a">
                            Home made<br>
                        </span>
                        <span class="b">
                            Checkout our properties<br>
                        </span>
                        <div class="icons-wrapper">
                            <div class="icon1">
                                <img src="img/Ellipse 1.png" /></div>
                            <div class="icon2">
                                <img src="img/Vector.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                    <img src="img/Kennels card.png" />
                    <div class="box">
                        <span class="a">
                            Kennels<br>
                        </span>
                        <span class="b">
                            Checkout our properties<br>
                        </span>
                        <div class="icons-wrapper">
                            <div class="icon1">
                                <img src="img/Ellipse 1.png" /></div>
                            <div class="icon2">
                                <img src="img/Vector.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="app.js"></script>
</body>

</html>
```
