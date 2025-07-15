/* ==================== typing animation =====================*/
window.onload = function () {
    var typed = new Typed(".typing", {
        strings: ["Student", "Computer Hardware Technician", "Solar Photovoltaic System Technician", "Network Technician"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
};



                
                function toggleSidebar() {
                    document.getElementById("sidebar").classList.toggle("open");
                }
                
                
                    function toggleSidebar() {
                      const sidebar = document.getElementById("sidebar");
                      sidebar.classList.toggle("open");
                    }
                    document.addEventListener("click", function (e) {
                      const sidebar = document.getElementById("sidebar");
                      const toggler = document.querySelector(".nav-toggler");
                      if (
                        sidebar.classList.contains("open") &&
                        !sidebar.contains(e.target) &&
                        !toggler.contains(e.target)
                      ) {
                        sidebar.classList.remove("open");
                      }
                    });
                  

                    function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = 3 + Math.random() * 50 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.width = snowflake.style.height = 5 + Math.random() * 5 + "px";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

setInterval(createSnowflake, 100);

