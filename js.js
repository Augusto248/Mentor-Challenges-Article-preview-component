$(document).ready(function()
{
    active=false;

    button_share=$(".article__img-container-share");
    $(button_share).click(click_share_button);

    button_back=$(".article__back");
    $(button_back).click(click_back_button);

});

function click_share_button()
{
    if(active==false)
    {
        article_share=$(".article__share");
        $(article_share).css("display","flex");    


        //FOR WIDESCREEN.
        button_share=$(".article__img-container-share");
        $(button_share).addClass("article__img-container-share--active");
        img_share=$(".article__img-share");
        $(img_share).addClass("article__img-share--active");
        active=true;
    }

    else
    {
        article_share=$(".article__share");
        $(article_share).css("display","none");    


        //FOR WIDESCREEN.
        button_share=$(".article__img-container-share");
        $(button_share).removeClass("article__img-container-share--active");
        img_share=$(".article__img-share");
        $(img_share).removeClass("article__img-share--active");
        active=false;
    }
    
}

function click_back_button()
{
    article_share=$(".article__share");
    $(article_share).css("display","none");  
    
      //FOR WIDESCREEN.
      button_share=$(".article__img-container-share");
      $(button_share).removeClass("article__img-container-share--active");
      img_share=$(".article__img-share");
      $(img_share).removeClass("article__img-share--active");
      active=false;
}