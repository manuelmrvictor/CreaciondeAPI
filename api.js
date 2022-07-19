const aplicacion = document.querySelector('.container')
 
 const url = 'https://api.datos.gob.mx/v1/calidadAire'


fetch(url)
      .then(res => res.json())
      .then(data => {
            data.forEach(usuario => {
                  console.log(usuario.name)
                  const p = document.createElemen('p')
                  p.innerHTML = usuario.name
                  aplicacion.appendChild(p)
            });

      } )
      .catch(err => console.log(err))     
