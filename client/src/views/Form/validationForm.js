const validations = (gameData) => {
    const errors = {};
  
    if (!gameData.name.length) {
      errors.name = "Este campo no puede estar vacío";
    } else if (gameData.name.length > 30) {
      errors.name = "El nombre es demasiado largo";
    }
  
    if (!gameData.description.length) {
      errors.description = "Este campo no puede estar vacío";
    }
  
    if (
      gameData.image &&
      !/^(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[\w#!:.?+=&%@!\-\/]*)?$/.test(
        gameData.image
      )
    ) {
      errors.image = "Este campo debe ser una URL";
    }
  
    if (!gameData.released.length) {
      errors.released = "Este campo no puede estar vacío";
    }
  
    if (!gameData.rating.length) {
      errors.rating = "Este campo no puede estar vacío";
    } else if (isNaN(parseFloat(gameData.rating))) {
      errors.rating = "Tiene que ser un número";
    } else if (
      parseFloat(gameData.rating) < 0 ||
      parseFloat(gameData.rating) > 5
    ) {
      errors.rating = "Debe ser un número entre 0 y 5";
    }
  
    if (!gameData.platforms.length) {
      errors.platforms = "Este campo no puede estar vacío";
    }
  
    if (!gameData.genres.length) {
      errors.genres = "Debes elegir al menos un género.";
    }
  
    return errors;
  };
  