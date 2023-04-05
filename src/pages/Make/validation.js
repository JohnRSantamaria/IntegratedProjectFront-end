const validation = ({title,summary,diets, healthScore,steps, image})=> {
  const errors = {};

  var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
  const regexUrl =  /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)\.(jpg|png|gif))|(blob:(\/\/)?[-a-zA-Z0-9@:%._+~#=]{2,256})/gi;
  

  if(!regexUrl.test(image)) errors.URL = "It is not a valid format needs to be a, jpg, png, gif"
  if(title.trim() === "") errors.title = "Title cannot start with blank spaces"
  if(summary.trim() === "") errors.summary = "Summary cannot start with blank spaces"
  if(!title) errors.title = "Title cannot be Empty";
  if(title.length > 50 ) errors.title = "The title cannot be longer than 50 characters"
  if(title.length < 3 ) errors.title = "The title must have at least more than 3 characters"
  if(!regex.test(title)) errors.title = "The title cannot contain special characters or numbers"
  if(!summary) errors.summary = "Summary cannot be empty";
  if(summary.length < 5 ) errors.summary = "The Summary must have at least more than 5 characters"
  if(!healthScore) errors.healthScore = "The health Score cannot not be Empty"
  if(healthScore< 0 || healthScore > 100 ) errors.healthScore = "The valid range for The score is 0 to 100"
  if(diets.length <= 0) errors.diets = "You must select at least 1 Diet"
  if(image.length === 0) errors.image = "You must add an Image"
  if(steps.length <= 0) errors.steps = "You mush add at least 1 Diet"

  return errors;
}

export default validation;