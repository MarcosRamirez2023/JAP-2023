document.addEventListener("DOMContentLoaded", function () {
    validar_login();
  
    document.getElementById("logout").addEventListener("click", function () {
      localStorage.clear();
      sessionStorage.clear();
      document.getElementById("alert-logout").classList.add('show');
      setTimeout(() => {
        document.getElementById("alert-logout").classList.remove('show');
        location.href = "login.html"
      }, 2500);
    });
  
    document.getElementById("autos").addEventListener("click", function () {
      localStorage.setItem("catID", 101);
      window.location = "products.html"
    });
  
    document.getElementById("juguetes").addEventListener("click", function () {
      localStorage.setItem("catID", 102);
      window.location = "products.html"
    });
  
    document.getElementById("muebles").addEventListener("click", function () {
      localStorage.setItem("catID", 103);
      window.location = "products.html"
    });
  
    // Nueva función para mostrar el nombre de usuario
    function mostrarNombreDeUsuario() {
      const nombreUsuario = localStorage.getItem('nombreUsuario');
      if (nombreUsuario) {
        const nombreUsuarioElement = document.getElementById('nombreUsuario'); // Reemplaza 'nombreUsuario' con el ID real del elemento en la barra de navegación
        nombreUsuarioElement.textContent = nombreUsuario;
      }
    }
  
    function validar_login() {
      if (localStorage.getItem("email") === null) {
        document.getElementById("alert-nologin").classList.add('show');
        setTimeout(() => {
          document.getElementById("alert-nologin").classList.remove('show');
          location.href = "login.html"
        }, 2000);
      } else {
        document.getElementById("alert-yeslogin").classList.add('show');
        setTimeout(() => {
          document.getElementById("alert-yeslogin").classList.remove('show');
        }, 2500);
        // Llama a la función para mostrar el nombre de usuario
        mostrarNombreDeUsuario();
      };
    }
  
    document.getElementById("login").addEventListener("click", function () {
      if (localStorage.getItem("email") === null) {
        document.getElementById("alert-nologin").classList.add('show');
        setTimeout(() => {
          document.getElementById("alert-nologin").classList.remove('show');
          location.href = "login.html"
        }, 2000);
      } else {
        document.getElementById("alert-yeslogin").classList.add('show');
        setTimeout(() => {
          document.getElementById("alert-yeslogin").classList.remove('show');
        }, 2500);
        // Llama a la función para mostrar el nombre de usuario
        mostrarNombreDeUsuario();
      };
    });
  
    // Llama a la función para mostrar el nombre de usuario al cargar la página
    mostrarNombreDeUsuario();
  });
  