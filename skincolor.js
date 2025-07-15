function setActiveStyle(color) {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
        // Update background color dynamically
        document.documentElement.style.setProperty(
          "--bg-black-900",
          getBackgroundColor(color)
        );
        document.documentElement.style.setProperty(
          "--bg-black-100",
          getLighterShade(color)
        );
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }
  
  function getBackgroundColor(color) {
    switch (color) {
      case "color-1":
       return "#ffe4e6"; // Light red
      case "color-2":
       return "#e6ffe8"; // Light green
      case "color-3":
        return "#e6f4ff"; // Light blue
        case "color-4":
       return "#ffe6fb"; // Light pink
      case "color-5":
       return "#fff4e6"; // Light orange
      default:
       return "#f2f2fc";
    }
  }
  
  function getLighterShade(color) {
    switch (color) {
      case "color-1":
        return "#fff0f1"; // Lighter red
        case "color-2":
        return "#f0fff1"; // Lighter green
        case "color-3":
        return "#f0f9ff"; // Lighter blue
        case "color-4":
        return "#fff0fe"; // Lighter pink
      case "color-5":
        return "#fff9f0"; // Lighter orange
      default:
        return "#fdf9ff";
    }
  }
  