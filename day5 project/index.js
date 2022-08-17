let slideCount=1;


function moveToSlide(slideNumber) 
{
    let margin=slideNumber*100;
    document.querySelector('.slider').style.transition="3s";
    document.querySelector('.slider').style.marginLeft=-margin+"%";


     if(slideNumber==5)
    {
        slideCount=1;
        setTimeout(function(){
            document.querySelector('.slider').style.transition="0s";
            document.querySelector('.slider').style.marginLeft="-100%";
        },500)
    }


    if(slideNumber==0)
    {
        slideCount=4;
        setTimeout(function(){
            document.querySelector('.slider').style.transition="0s";
            document.querySelector('.slider').style.marginLeft="-400%";
        },500)
    }
}


function nextSlide()
{
    slideCount++;
    moveToSlide(slideCount);
    if(slideCount==5)
    {
        slideCount=1;
        setTimeout(function(){
            document.querySelector('.slider').style.transition="0s";
            document.querySelector('.slider').style.marginLeft="-100%";
        },500)
    }
    
}

function prevSlide()
{
    slideCount--;
    moveToSlide(slideCount);

    if(slideCount==0)
    {
        slideCount=4;
        setTimeout(function(){
            document.querySelector('.slider').style.transition="0s";
            document.querySelector('.slider').style.marginLeft="-400%";
        },500)
    }
}



