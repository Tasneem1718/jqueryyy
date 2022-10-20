

$("#btn1").click(()=>{
  $("#img1").hide(2000);
  $("#p1").hide(2000,function(){
    $("#ph1").show(2000 ,function(){
     $("#btn1").fadeOut(10,function(){
      $("#btnh1").fadeIn(1000);
      $("#btnh1").click(()=>{
        $("#img1").show(2000,()=>{
          $("#btnh1").hide();
       });
      })
     })
    })
 })
})





$("#btn2").click(()=>{
  $("#img2").slideUp(2000);
  $("#p2").hide(2000,function(){
    $("#ph2").show(2000 ,function(){
     $("#btn2").fadeOut(10,function(){
      $("#btnh2").fadeIn(1000);
      $("#btnh2").click(()=>{
        $("#img2").slideDown(2000,()=>{
          $("#btnh2").hide();
       });
      })
     })
    })
 })
})



$("#btn3").click(()=>{
  $("#img3").fadeOut(2000);
  $("#p3").hide(2000,function(){
    $("#ph3").show(2000 ,function(){
     $("#btn3").fadeOut(10,function(){
      $("#btnh3").fadeIn(1000);
      $("#btnh3").click(()=>{
        $("#img3").fadeIn(2000,()=>{
          $("#btnh3").hide();
       });
      })
     })
    })
 })
})