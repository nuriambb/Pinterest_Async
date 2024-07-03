import './button.css'
export const createButton = ({
  text = 'Texto',
  textColor = 'Black',
  bgColor = 'White'
}) => {
  return ` <button class="button" style= "background-color: ${bgColor}; color: ${textColor}">${text}</button>`
}

