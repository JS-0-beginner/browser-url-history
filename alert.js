///// node alert.js /////

const danger = () =>
{
    //Alert
    alert('DANGER !!!!!! TURN OFF!!! THE TORCH NOW!!!');
}

const decision = () =>
{
    //Confirm
    const response = confirm('ARE !!! YOU GOING TO FIGHT THEM ???');
    console.log(response);
    if(response === true)
    {
        //Prompt
        const wish = prompt("Any Last wish before 'Death'");
        console.log(wish);
    }
    else
    {
        alert('Then run for your life.');
    }
}

const reloadPage = () =>
{
    location.reload();
}

const newWebsite = () =>
{
    location.assign('https://www.warnerbros.com/movies/i-am-legend');
}