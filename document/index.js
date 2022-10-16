module.exports = ({details,skills}) => {
    const ifname=details[0].firstName.slice(1);
    console.log(skills);
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
        :root{
            --theme-color:#4e4e4e;
            /* --theme-color:#a74605; */
        }
        .main{
            margin: 0;
            padding: 0;
            width: 100vw;
            display: grid;
            overflow-x: hidden;
            grid-template-columns: 0.7fr 4px 1fr;
            font-family: 'Poppins', sans-serif;
        }
        .main>.line{
            width: 2px;
            background: #000;

        }
        .main> .left{
            display: grid;
            padding: 50px 80px;
        }
        .main > .left > .info  {
            text-align: center;
        }
        .main > .left > .info h4 {
            margin: 5px 0;

        }
        .main>.left>.circle{
            width:200px;
            height: 200px;
            margin: 0 auto;
            display: flex;
            border: 2px solid black;
            border-radius: 200px;
            justify-content: center;
            align-items: center;
        }
        .main>.left>.circle>.line{
            height:2px;
            width: 180px;
            position: absolute;
            background: #000;
            transform: rotate(-60deg);
        }
        .main>.left>.circle>.fNameInitial{
            font-size: 5rem;
            transform: translate(-20px,-20px);
        }
        .main>.left>.circle>.lNameInitial{
            font-size: 5rem;
            transform: translate(20px,20px);
        }
        .main > .left > .name{
            font-size: 6rem;
            text-align: center;
            line-height: 6rem;
            padding:30px 0;
        }
        .main > .left > .skills > ul{
            margin: 0 auto;
            width: 100px;

        }
        .main> .right{
            padding: 50px 80px;
        }
        h2{
            border: 2px solid var(--theme-color);
            color: var(--theme-color);
            letter-spacing: 0.5rem;
            font-weight: lighter;
            text-align: center;
        }
    </style>
</head>
<body class="main">
    <div class="left">
        <div class="circle">
            <span class="fNameInitial">
                ${details[0].firstName[0]}
            </span>
            <div class="line"></div>
            <span class="lNameInitial">
                ${details[0].lastName[0]}
            </span>
        </div>
        <div class=" 1">
            ${details[0].firstName}<br>${details[0].lastName}
        </div>
        <div class="info">
            <h2>INFO</h2>
            <div class="contact">
                <h4>Contact</h4>
                <div class="h5">
                    ${details[0].contact}
                </div>
            </div>
            <div class="email">
                <h4>Email</h4>
                <div class="h5">
                    ${details[0].email}
                </div>
            </div>
            <div class="address">
                <h4>Address</h4>
                <div class="h5">
                    ${details[0].address}
                </div>
            </div>
        </div>
        <div class="skills">
            <h2>SKILLS</h2>
            <ul>`+skills.map((skill)=>(
                `<li>${skill}</li>`
            ))+`

            </ul>
        </div>
            </div>
            <div class="line"></div>
            <div class="right">
        <div class="profile">
            <h2>PROFILE</h2>
            <div>
                ${details[0].profile}
            </div>
        </div>
        <div class="experience">
            <h2>EXPERIENCE</h2>
            <div class="experience-list">
                

            </div>
        </div>
        <div class="education">
            <h2>EDUCATION</h2>
            <div class="education-list">
                
            </div>
        </div>
        <div class="trainings">
            <h2>TRAININGS</h2>
            <div  class="trainings-list">
                
            </div>
        </div>
        <div class="courses">
            <h2>COURSES</h2>
            <div  class="courses-list">
                
            </div>
        </div>
    </div>
</body>
</html>
`;}