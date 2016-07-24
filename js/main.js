jQuery(document).ready(function($) {

    /*----------  Fixed Placeholder in browser not support  ----------*/
    
    if(!Modernizr.input.placeholder){
        $("input").each(function(){
          if($(this).val()=="" && $(this).attr("placeholder")!=""){
            $(this).val($(this).attr("placeholder"));
            $(this).focus(function(){
              if($(this).val()==$(this).attr("placeholder")) $(this).val("");
            });
            $(this).blur(function(){
              if($(this).val()=="") $(this).val($(this).attr("placeholder"));
            });
          }
        });
    }

    /*----------  Detect Touch Device and use custom dropdown  ----------*/
    if (Modernizr.touchevents && Modernizr.mq("screen and (min-width: 1280px)")) { 
      
      console.log('Surface Pro');
      $('.select-custom select').selectize();

    } else if(Modernizr.touchevents ) { 
      
      console.log('Mobile or Tablet Touch Screen');
      $('.select-custom select').customSelect();
      $('.select-custom-type select').selectize()

    } else { 
      
      console.log('Desktop Browser');
      $('.select-custom select').selectize();

    }
});