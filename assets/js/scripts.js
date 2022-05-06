  // fadeOut do loader
  $(window).on("load", function() {
    $('#sncloader').fadeOut(300);

});

$('.feedback').hide()
$('.card-pergunta').hide()
$('.continuar').hide()
$('.card-final').hide()
$('#pergunta-1 .resposta-1').click(()=>{
    $('#pergunta-1 .resposta-1').addClass('clicado')
    
    $('#pergunta-1 .feedback-1').fadeIn()
})
$('#pergunta-1 .resposta-2').click(()=>{
    $('#pergunta-1 .resposta-2').addClass('clicado')
    
    $('#pergunta-1 .feedback-2').fadeIn()
})
$('#pergunta-1 .resposta-3').click(()=>{
    $('#pergunta-1 .resposta').addClass('clicado')
    $('#pergunta-1 .feedback').fadeIn()
    $('#pergunta-1 .continuar').fadeIn()
})
$('#pergunta-1 .resposta-4').click(()=>{
    $('#pergunta-1 .resposta-4').addClass('clicado')
    
    $('#pergunta-1 .feedback-4').fadeIn()
})

$('#pergunta-2 .resposta-1').click(()=>{
    $('#pergunta-2 .resposta-1').addClass('clicado')
    
    $('#pergunta-2 .feedback-1').fadeIn()
})
$('#pergunta-2 .resposta-2').click(()=>{
    $('#pergunta-2 .resposta').addClass('clicado')
    $('#pergunta-2 .feedback').fadeIn()
    $('#pergunta-2 .continuar').fadeIn()
})
$('#pergunta-2 .resposta-3').click(()=>{
    $('#pergunta-2 .resposta-3').addClass('clicado')
    $('#pergunta-2 .feedback-3').fadeIn()
    
})
$('#pergunta-2 .resposta-4').click(()=>{
    $('#pergunta-2 .resposta-4').addClass('clicado')
    
    $('#pergunta-2 .feedback-4').fadeIn()
})

$('#pergunta-3 .resposta-1').click(()=>{
    $('#pergunta-3 .resposta-1').addClass('clicado')
    
    $('#pergunta-3 .feedback-1').fadeIn()
})
$('#pergunta-3 .resposta-2').click(()=>{
    $('#pergunta-3 .resposta-2').addClass('clicado')
    $('#pergunta-3 .feedback-2').fadeIn()    
})
$('#pergunta-3 .resposta-3').click(()=>{
    $('#pergunta-3 .resposta-3').addClass('clicado')
    $('#pergunta-3 .feedback-3').fadeIn()
    
})
$('#pergunta-3 .resposta-4').click(()=>{
    $('#pergunta-3 .resposta').addClass('clicado')
    $('#pergunta-3 .feedback').fadeIn()
    $('#pergunta-3 .continuar').fadeIn()
})

$('#pergunta-4 .resposta-1').click(()=>{
    $('#pergunta-4 .resposta').addClass('clicado')
    $('#pergunta-4 .feedback').fadeIn()
    $('#pergunta-4 .continuar').fadeIn()
})
$('#pergunta-4 .resposta-2').click(()=>{
    $('#pergunta-4 .resposta-2').addClass('clicado')
    $('#pergunta-4 .feedback-2').fadeIn()    
})
$('#pergunta-4 .resposta-3').click(()=>{
    $('#pergunta-4 .resposta-3').addClass('clicado')
    $('#pergunta-4 .feedback-3').fadeIn()
    
})
$('#pergunta-4 .resposta-4').click(()=>{
    $('#pergunta-4 .resposta-4').addClass('clicado')
    $('#pergunta-4 .feedback-4').fadeIn()
})

$('#iniciar').click(()=>{
    $('.card-inicial').fadeOut(500)
    
    setTimeout(() => {
        $('#pergunta-1').fadeIn(1000)
    }, 700);
})

$('#continua-1').click(()=>{
    $('#pergunta-1').fadeOut(500)
    setTimeout(() => {
        $('#pergunta-2').fadeIn(1000)
    }, 700);
})

$('#continua-2').click(()=>{
    $('#pergunta-2').fadeOut(500)
    setTimeout(() => {
        $('#pergunta-3').fadeIn(1000)
    }, 700);
})

$('#continua-3').click(()=>{
    $('#pergunta-3').fadeOut(500)
    setTimeout(() => {
        $('#pergunta-4').fadeIn(1000)
    }, 700);
})

$('#continua-4').click(()=>{
    $('#pergunta-4').fadeOut(500)
    setTimeout(() => {
        $('.card-final').fadeIn(1000)
    }, 700);
})