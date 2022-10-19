function saludar(nombre) {
  console.log('Hola ' + nombre);
}

saludar('Seba')

function num2str(num) {
  // los primeros 15
  if (num <= 15) {
    const cifras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
                    'seis', 'siete', 'ocho', 'nueve', 'diez', 'once',
                    'doce', 'trece', 'catorce', 'quince'];
    return cifras[num]
  }
  // los dieci-algo
  else if (num <= 19) {
    const enteros = num - 10;
    return 'dieci' + num2str(enteros)
  }
  else if (num == 20) {
    return 'veinte';
  }
  // veinti-algo
  else if (num <= 29) {
    const enteros = num - 20;
    return 'veinti' + num2str(enteros)
  }
  else if (num <= 99) {
    // 57
    const decenas = Math.floor(num / 10)
    const unidades = num - (decenas * 10)

    const p_decenas = ['', '', '', 'treinta', 'cuarenta', 'cincuenta',
                       'sesenta', 'setenta', 'ochenta', 'noventa'][decenas]
    
    if (unidades == 0) {
      return p_decenas
    }
    return p_decenas + ' y ' + num2str(unidades)
  }
  else {
    return 'No implementado'
  }
}

function transformar () {
  // 1. Obtengo el input
  const input_num = document.querySelector('#num');

  // 2. Obtengo el valor del input
  let num = input_num.value;

  // 3. Lo transformo a un número entero
  num = parseInt(num)

  // 4. Obtengo el string correspondiente
  const str = num2str(num);

  // 5. Obtengo el span
  const str_span = document.querySelector('#str');

  // 6. Agrego el Sting al DOM de la página
  str_span.innerHTML = str;

}