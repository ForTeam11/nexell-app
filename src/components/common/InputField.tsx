interface InputFieldBaseProps<T> {
    label: string;
    name: keyof T;
    onChange: (name: keyof T, value: string) => void;
    required?: boolean;
    additionalInputClasses?: string;    
    fieldType: string;
}
interface InputBasicFieldProps<T> extends InputFieldBaseProps<T> {
    fieldType: "basic";
    type: "text" | "number" | "email";
    placeholder: string; 
}
interface InputSecondaryFieldProps<T> extends InputFieldBaseProps<T> {
    fieldType: "secondary";
    type: "radio" | "checkbox";
    options: { id: string; value: string; label: string }[];
}
type InputFieldProps<T> = InputBasicFieldProps<T> | InputSecondaryFieldProps<T>;

export const InputField = <T, > (props: InputFieldProps<T>) => {
    return (
        <div>
            <legend className="fieldset-legend text-sm mb-1">{props.label}</legend>
                {props.fieldType === "basic" && 
                    <input
                        type={props.type}
                        name={props.name as string}
                        className={`input text-sm w-full ${props.additionalInputClasses}`}
                        placeholder={props.placeholder}
                        required={props.required}
                        onChange={(e) => props.onChange(props.name as keyof T, e.target.value)}
                    />
                }
                {props.fieldType === "secondary" &&
                    props.options.map((option) => (
                        <div key={option.id} className="flex items-center mb-2">
                            <input 
                                type={props.type}
                                name={props.name as string}
                                className={
                                    props.type === "checkbox"
                                        ? "checkbox checkbox-secondary"
                                        : props.type === "radio"
                                        ? "radio radio-secondary"
                                        : `input text-sm w-full ${props.additionalInputClasses}`
                                }
                                required={props.required}
                                id={option.id}
                                value={option.value}
                                onChange={(e) => props.onChange(e.target.name as keyof T, e.target.value)}
                            />
                            <label htmlFor={option.id} className="ml-2">{option.label}</label>
                        </div>
                    ))
                }
        </div>
    );
}
