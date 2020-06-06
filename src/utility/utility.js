export var fontWeightParser = (fontWeightStr) => {
    var value = null;
    switch (fontWeightStr) {
      case "light":
        value = 300;
        break;
      case "regular":
        value = 400;
        break;
      case "medium":
        value = 500;
        break;
      case "bold":
        value = 700;
        break;
      default:
        value = 400;
        break;
    }
    return value;
  };
  