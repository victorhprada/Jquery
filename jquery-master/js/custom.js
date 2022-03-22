// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

      })

      //CallBack
      $('.featured-item:nth(1)')
      .hide(2000, function(){
         //este é o callback
         console.log($(this).find('h4').text()+' esgotado');
      })
      .show(2000, function(){
         console.log($(this).find('h4').text()+' em estoque');
      })
      
      //Animações
      const duracao = 1000 //equivalente a 1s
      /*
      $('.featured-item:nht(0)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)
      .toggle(duracao)
      */

      $('#form-submit').on('click', function(evento){

         evento.preventDefault();

         if($('#email').val() != ''){

            $('#email').animate({
               opacity: "toggle",
               top: "-50"
            }, 500, function(){
               console.log($(this).val());
            });
         }
         
      });

      //Ouvinte de evento .modal-nav-open
      $('.nav-modal-open').on('click', function(event){

         event.preventDefault();

         let elemento = $(this).attr('rel');

         $('.modal-body').html($('#'+elemento).html());

         $('.modal-header h5.modal-title').html($(this).text());

         let myModal = new bootstrap.Modal($('#modelId'));

         myModal.show();
      })

      $('body').on('submit', '.modal-body .form', function(evento){
         
         evento.preventDefault();

         const InputNome = $('#nome');
         const InputEmail = $('#email');

         validaCampo(InputNome);
         validaCampo(InputEmail);

         if(InputEmail.hasClass('invalid') || InputNome.hasClass('invalid')){
            console.log('verificar');
            return false;
         }else{
            $(this).submit();
         }

      
      });

      function validaCampo(elemento){

         if(elemento.val() == ''){
            console.log('Campo ' + elemento.attr('nome')+ ' não preenchido');

            $(this).addClass('invalid');

            return false;
         }else{
            elemento.removeClass('invalid');
         }
      }

      $('body').on('blur', '#nome', function(e){

         validaCampo($(this));
      });

      $('body').on('blur', '#email', function(e){

         validaCampo($(this));
      })

});
