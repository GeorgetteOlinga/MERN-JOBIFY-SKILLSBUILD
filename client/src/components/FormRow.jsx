const FormRow = ({type, name, labelText, placeholder, defaultValue}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
        {/* if we provide a value for the labelText it is ok if not if will be equal to name  */}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}   // if we provide a value for the defaltValue it is ok if not if will be empty space  (|| => or)
        required
        placeholder={placeholder}
      />
          </div>
          // we are using this form FormRow to avoid repeting ourself when creating the any form. we should be able to pass the props in other words the parameters inside the function in the curly brackets
  );
}
export default FormRow