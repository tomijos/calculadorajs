    //variables de HTML
    const calculadora = document.querySelector('.calculadora');
    const pantalla = document.querySelector('.pantalla');
    document.addEventListener('keydown', (event) =>{
        if(event.code === 'Escape'){
            borrar();
        }
    })

    //Funciones
    function agregar(numero){
        pantalla.value += numero;
    }

    function calcular(){
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
    }
    function borrar(){
        pantalla.value = '';
    }