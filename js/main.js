(function() {
    "use strict";

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {
        //datos usuarios
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //botones y div's
        var calcular = document.getElementById('calcular');
        var errordiv = document.getElementById('error');
        var botonregistro = document.getElementById('btnRegistro');
        var resultado = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //extras
        var camiseta = document.getElementById('camisa_evento');
        var etiqueta = document.getElementById('etiquetas');

        if (document.getElementById('calcular')) {


            calcular.addEventListener('click', calcularmontos);

            pase_dia.addEventListener('blur', mostrardias);
            pase_dosdias.addEventListener('blur', mostrardias);
            pase_completo.addEventListener('blur', mostrardias);

            nombre.addEventListener('blur', validarcampos);
            apellido.addEventListener('blur', validarcampos);
            email.addEventListener('blur', validarcampos);
            email.addEventListener('blur', validaremail);

            function validarcampos() {
                if (this.value == '') {
                    errordiv.style.display = 'block';
                    errordiv.innerHTML = 'Este campo es obligatorio';
                    this.style.border = '2px solid red';
                    errordiv.style.border = '2px solid red';
                } else {
                    errordiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                }

            }

            function validaremail() {
                if (this.value.indexOf("@") > -1) {
                    errordiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                } else {
                    errordiv.style.display = 'block';
                    errordiv.innerHTML = 'Debe tener almenos un @';
                    this.style.border = '2px solid red';
                    errordiv.style.border = '2px solid red';
                }
            }



            function calcularmontos(event) {
                event.preventDefault();
                if (nombre.value ==''||apellido.value ==''||email.value =='') {
                    
                    alert('Debes ingresar tu nombre, apellido y correo');
                    if (nombre.value ==='') {
                        nombre.focus();
                    }
                    if (nombre.value ==='') {
                        apellido.focus();
                    }
                    if (nombre.value ==='') {
                        email.focus();
                    }
                }else{
                    if (pase_dia.value==0&&pase_dosdias.value==0&&pase_completo.value==0) {
                        alert('Debes elegir un pase');
                    }else{
                        if (regalo.value === '') {
                            alert('Debes elegir un regalo');
                            regalo.focus();
                        } else {
                            var boletodia = parseInt(pase_dia.value, 10) || 0,
                                boleto2dias = parseInt(pase_dosdias.value, 10) || 0,
                                boletocompleto = parseInt(pase_completo.value, 10) || 0,
                                cantcamisas = parseInt(camiseta.value, 10) || 0,
                                cantetiquetas = parseInt(etiqueta.value, 10) || 0;
        
                            var totalpagar = (boletodia * 30) + (boleto2dias * 45) + (boletocompleto * 60) + (cantcamisas * 10 * .93) + (cantetiquetas * 2);
        
                            var lista_productos = [];
        
                            if (boletodia >= 1) {
                                lista_productos.push(`Pase por un dia: ${boletodia}`);
                            }
                            if (boleto2dias >= 1) {
                                lista_productos.push(`Pase por 2 dias: ${boleto2dias}`);
                            }
                            if (boletocompleto >= 1) {
                                lista_productos.push(`Pase completo: ${boletocompleto}`);
                            }
                            if (cantcamisas >= 1) {
                                lista_productos.push(`Numero de camisas: ${cantcamisas}`);
                            }
                            if (cantetiquetas >= 1) {
                                lista_productos.push(`Numero te etiquetas: ${cantetiquetas}`);
                            }
        
                            resultado.style.display = "block";
                            resultado.innerHTML = '';
                            for (let i = 0; i < lista_productos.length; i++) {
                                resultado.innerHTML += lista_productos[i] + '<br/>';
                            }
                            suma.innerHTML = `$ ${totalpagar.toFixed(2)}`;
                            botonregistro.disabled = false;
                            document.getElementById('total_pedido').value = totalpagar;
                        }
                    }
                }
            }

            function mostrardias() {
                var boletodia = parseInt(pase_dia.value, 10) || 0,
                    boleto2dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletocompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];
                if (boletodia > 0) {
                    diasElegidos.push('viernes');
                }
                if (boleto2dias > 0) {
                    diasElegidos.push('viernes', 'sabado');
                }
                if (boletocompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }

                for (let i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }
            }
        }
        var map = L.map('mapa').setView([6.210656, -75.577226], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([6.210656, -75.577226]).addTo(map)
            .bindPopup('EVENTOSPOLI 2020 <br> Boletos disponibles')
            .openPopup();

    }); //DOMContentLoaded
})();



$(function() {

    //Lettering
    $('.nombre-sitio').lettering();

    // agregar clase al menu
    $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
    $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
    $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');

    //menu fijo
    var windowHeigth = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeigth) {
            $('.barra').addClass('fixed');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' });
        }
    });

    //Menu responsive

    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
    });

    //Programa de conferencia
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function() {
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });

    //Animacion de numeros
    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1500);
    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1500);
    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1500);

    //Cuenta regresiva
    $('.cuenta-regresiva').countdown('2021/5/1 1:00:00', function(event) {
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });

    //validar campos numericos (solo numeros)
    $(".validar_boletos").keydown(function(event){
        //alert(event.keyCode);
        if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && event.keyCode !==190  && event.keyCode !==110 && event.keyCode !==8 && event.keyCode !==9  ){
            return false;
        }
    });
});